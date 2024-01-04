import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { UiElementsService } from '../services/common/ui-elements.service';
import { ApiService } from '../services/network/api.service';
import { Helper } from 'src/models/helper.models';
import { EarningInsight } from 'src/models/insight-earning.models';
import { OrderInsight } from 'src/models/insight-order.models';
import { Constants } from 'src/models/constants.models';
import { Product } from 'src/models/product.models';
import { FeedbackAnserOption } from 'src/models/feedback-matter.models';
import * as moment from 'moment';

@Component({
  selector: 'app-insight',
  templateUrl: './insight.page.html',
  styleUrls: ['./insight.page.scss']
})
export class InsightPage implements OnInit, OnDestroy {
  private subscriptions = new Array<Subscription>();
  currency_icon: string;
  duration = "today";
  showChartType: string = "orders"; //orders, items_sold and earnings.
  questionIdToShow = -1;

  insightsOrder: OrderInsight;

  insightsEarning: EarningInsight;
  private priceRangeOrder: Array<number>;
  private chartDataParsedOrder: Array<{ date: string; percent: string; price: string; }>;
  private priceRangeItems: Array<number>;
  private chartDataParsedItems: Array<{ date: string; percent: string; price: string; }>;
  private priceRangeEarning: Array<number>;
  private chartDataParsedEarning: Array<{ date: string; percent: string; price: string; }>;

  rangeToShow: Array<number>;
  chartDataParsedToShow: Array<{ date: string; percent: string; price: string; }>;

  feedbackDataParsed: { total: number; data: Array<{ feedback_question_id: number; feedback_question_title: string; options: Array<{ rank: number; total: number; percent: string; }>; }> };

  productsBestSelling: Array<Product> = [];
  private profileId: number;
  isLoading: boolean;
  productTypesMap = new Array<{ productType: { name: string; title: string; }; products: Array<Product>; }>();

  private deliveryStats = new Array<{ distance: number, duration: number }>();
  distance_metric = "km";

  constructor(private navCtrl: NavController, private translate: TranslateService,
    private uiElementService: UiElementsService, private apiService: ApiService) { }

  ngOnInit() {
    this.currency_icon = Helper.getSetting("currency_icon");
    this.profileId = Helper.getProfile().id;
    this.setupDefaultInsightsEarning();
    this.setupDefaultInsightsOrder();
    this.setupDefaultInsightsItems();
    this.setupDefaultInsightsFeedback();
    this.loadInsight();
    this.loadInsightFeedback();
    this.loadProductsByType();
    //this.loadDeliverySummary();
  }

  ngOnDestroy() {
    for (let sub of this.subscriptions) sub.unsubscribe();
    this.uiElementService.dismissLoading();
  }

  loadInsight() {
    this.loadInsightEarnings();
    this.loadInsightOrders();
  }

  changeChartType(chartType) {
    this.showChartType = chartType;
    this.reflectDataToShow();
  }

  private reflectDataToShow() {
    switch (this.showChartType) {
      case "items_sold":
        this.rangeToShow = this.priceRangeItems;
        this.chartDataParsedToShow = this.chartDataParsedItems;
        break;
      case "earnings":
        this.rangeToShow = this.priceRangeEarning;
        this.chartDataParsedToShow = this.chartDataParsedEarning;
        break;
      default:
        this.rangeToShow = this.priceRangeOrder;
        this.chartDataParsedToShow = this.chartDataParsedOrder;
        break;
    }

  }

  showQuestion(quesId: number) {
    this.questionIdToShow = this.questionIdToShow == -1 ? quesId : -1;
  }

  setupDefaultInsightsOrder() {
    let defaultOrderInsight = new OrderInsight();
    if (!this.insightsOrder) this.insightsOrder = defaultOrderInsight;
    this.insightsOrder.chart_data = defaultOrderInsight.chart_data;

    let maxEarning = 100;
    let breaker = maxEarning / 5;
    this.priceRangeOrder = [];
    for (let i = 0; i <= 5; i++) this.priceRangeOrder.push(Number((((i == 0) ? maxEarning : (this.priceRangeOrder[i - 1] - breaker))).toFixed(2)));
    this.chartDataParsedOrder = [];
    for (let cd of this.insightsOrder.chart_data) this.chartDataParsedOrder.push({ date: "00:00", percent: String(((Number(cd.total) * 100) / maxEarning)), price: "" });

    this.reflectDataToShow();
  }

  setupDefaultInsightsItems() {
    let defaultOrderInsight = new OrderInsight();
    if (!this.insightsOrder) this.insightsOrder = defaultOrderInsight;
    this.insightsOrder.items_sold_chart = defaultOrderInsight.items_sold_chart;

    let maxItemsSold = 100;
    let breaker = maxItemsSold / 5;
    this.priceRangeItems = [];
    for (let i = 0; i <= 5; i++) this.priceRangeItems.push(Number((((i == 0) ? maxItemsSold : (this.priceRangeItems[i - 1] - breaker))).toFixed(2)));
    this.chartDataParsedItems = [];
    for (let cd of this.insightsOrder.chart_data) this.chartDataParsedItems.push({ date: "00:00", percent: String(((Number(cd.total) * 100) / maxItemsSold)), price: "" });

    this.reflectDataToShow();
  }

  setupDefaultInsightsFeedback() {
  }

  setupDefaultInsightsEarning() {
    this.insightsEarning = new EarningInsight();
    if (this.insightsEarning && this.insightsEarning.earnings_chart_data.length) {
      let maxEarning = 100;
      let breaker = maxEarning / 5;
      this.priceRangeEarning = [];
      for (let i = 0; i <= 5; i++) this.priceRangeEarning.push(Number((((i == 0) ? maxEarning : (this.priceRangeEarning[i - 1] - breaker))).toFixed(2)));
      this.chartDataParsedEarning = [];
      for (let cd of this.insightsEarning.earnings_chart_data) this.chartDataParsedEarning.push({ date: "00:00", percent: String(((Number(cd.total) * 100) / maxEarning)), price: "" });

      this.reflectDataToShow();
    }
  }

  loadInsightEarnings() {
    this.translate.get("loading").subscribe(value => {
      this.uiElementService.presentToast(value);
      let insightRequest = this.getInsightRequest();
      this.subscriptions.push(this.apiService.getInsightEarning(insightRequest).subscribe(res => {
        if (!res.total_earnings) res.total_earnings = 0; res.total_earnings = Number(Number(res.total_earnings).toFixed());
        this.insightsEarning = res;
        if (this.insightsEarning && this.insightsEarning.earnings_chart_data.length) {
          let maxEarning = 0;
          for (let cd of this.insightsEarning.earnings_chart_data) if (Number(cd.total) > maxEarning) maxEarning = Number(cd.total);
          let breaker = maxEarning / 5;
          this.priceRangeEarning = [];
          for (let i = 0; i <= 5; i++) this.priceRangeEarning.push(Number((((i == 0) ? maxEarning : (this.priceRangeEarning[i - 1] - breaker))).toFixed()));
          this.chartDataParsedEarning = [];
          for (let cd of this.insightsEarning.earnings_chart_data) this.chartDataParsedEarning.push({ date: this.getPeriodText(cd.period, insightRequest), percent: String(((Number(cd.total) * 100) / maxEarning)), price: this.currency_icon + " " + Number(cd.total).toFixed() });

          this.reflectDataToShow();
        } else {
          this.setupDefaultInsightsEarning();
        }
        this.uiElementService.dismissLoading();
      }, err => {
        console.log("insights", err);
        this.uiElementService.dismissLoading();
      }));
    });
  }

  loadInsightOrders() {
    let insightRequest = this.getInsightRequest();
    this.subscriptions.push(this.apiService.getInsightOrder(Helper.getProfile().id, insightRequest).subscribe(res => {
      this.insightsOrder = res;
      if (this.insightsOrder && this.insightsOrder.chart_data.length) {
        let maxEarning = 0;
        for (let cd of this.insightsOrder.chart_data) if (Number(cd.total) > maxEarning) maxEarning = Number(cd.total);
        let breaker = maxEarning / 5;
        this.priceRangeOrder = [];
        for (let i = 0; i <= 5; i++) this.priceRangeOrder.push(Number((((i == 0) ? maxEarning : (this.priceRangeOrder[i - 1] - breaker))).toFixed(2)));
        this.chartDataParsedOrder = [];
        for (let cd of this.insightsOrder.chart_data) this.chartDataParsedOrder.push({ date: this.getPeriodText(cd.period, insightRequest), percent: String(((Number(cd.total) * 100) / maxEarning)), price: Number(cd.total).toFixed() });

        this.reflectDataToShow();
      } else {
        this.setupDefaultInsightsOrder();
      }

      if (this.insightsOrder && this.insightsOrder.items_sold_chart.length) {
        let maxItemsSold = 0;
        for (let cd of this.insightsOrder.items_sold_chart) if (Number(cd.total) > maxItemsSold) maxItemsSold = Number(cd.total);
        let breaker = maxItemsSold / 5;
        this.priceRangeItems = [];
        for (let i = 0; i <= 5; i++) this.priceRangeItems.push(Number((((i == 0) ? maxItemsSold : (this.priceRangeItems[i - 1] - breaker))).toFixed(2)));
        this.chartDataParsedItems = [];
        for (let cd of this.insightsOrder.items_sold_chart) this.chartDataParsedItems.push({ date: this.getPeriodText(cd.period, insightRequest), percent: String(((Number(cd.total) * 100) / maxItemsSold)), price: Number(cd.total).toFixed() });

        this.reflectDataToShow();
      } else {
        this.setupDefaultInsightsItems();
      }
      this.uiElementService.dismissLoading();
    }, err => {
      console.log("insights", err);
      this.uiElementService.dismissLoading();
    }));
  }

  loadInsightFeedback() {
    let insightRequest = this.getInsightRequest();
    this.subscriptions.push(this.apiService.getFeedbackMatter(this.profileId).subscribe(res => {
      let optionsOriginal = res.options;

      this.subscriptions.push(this.apiService.getInsightFeedback(this.profileId, insightRequest).subscribe(res => {
        if (res.summary && res.summary.length) {
          let dataParsed: Array<{ feedback_question_id: number; feedback_question_title: string; options: Array<{ rank: number; total: number; percent: string; title: string; }>; }> = [];

          for (let summary of res.summary) {
            let existingIndex = -1;
            for (let i = 0; i < dataParsed.length; i++) {
              if (dataParsed[i].feedback_question_id == summary.feedback_question_id) {
                existingIndex = i;
                break;
              }
            }
            if (existingIndex == -1) {
              dataParsed.push({ feedback_question_id: summary.feedback_question_id, feedback_question_title: summary.feedback_question_title, options: [{ rank: 1, total: 0, percent: "0", title: this.getOptionTitle(optionsOriginal, 1, "Excellent") }, { rank: 2, total: 0, percent: "0", title: this.getOptionTitle(optionsOriginal, 2, "Good") }, { rank: 3, total: 0, percent: "0", title: this.getOptionTitle(optionsOriginal, 3, "Average") }, { rank: 4, total: 0, percent: "0", title: this.getOptionTitle(optionsOriginal, 4, "Not Good") }] });
            }
            for (let option of dataParsed[existingIndex == -1 ? dataParsed.length - 1 : existingIndex].options) {
              if (option.rank == summary.rank) {
                option.total += summary.total;
                break;
              }
            }
          }
          let totalReviews = 0;
          for (let data of dataParsed) {
            let questionTotal = 0;
            for (let option of data.options) questionTotal += option.total;
            for (let option of data.options) option.percent = Number(option.total / questionTotal * 100).toFixed(0);
            totalReviews += questionTotal;
          }
          this.feedbackDataParsed = { total: totalReviews, data: dataParsed };
        }
      }, err => console.log("getInsightCategory", err)));
    }));
  }

  private getOptionTitle(options: Array<FeedbackAnserOption>, rank: number, defaultTitle: string) {
    let toReturn = defaultTitle;
    for (let option of options) {
      if (option.rank == rank) {
        toReturn = option.title;
        break;
      }
    }
    return toReturn;
  }

  // loadDeliverySummary() {
  //   let profile = Helper.getProfile();
  //   this.subscriptions.push(this.apiService.getSummary(String(profile.id)).subscribe(res => {
  //     this.profileSummary = res;
  //     Helper.setProfileSummary(this.profileSummary);
  //   }, err => {
  //     console.log("getSummary", err);
  //   }));
  // }

  navTransactions() {
    this.navCtrl.navigateRoot(['/wallet']);
  }

  private getInsightRequest() {
    //  'duration' => 'required|in:hours,days,months,years',
    //  'limit' => 'required|numeric'
    let toReturn = { duration: "", limit: 0 };
    switch (this.duration) {
      case "today":
        toReturn.duration = "hours";
        toReturn.limit = Number(moment(new Date().getHours()));
        break;
      case "week":
        toReturn.duration = "days";
        toReturn.limit = 7;
        break;
      case "month":
        toReturn.duration = "months";
        toReturn.limit = 12;
        break;
      case "year":
        toReturn.duration = "years";
        toReturn.limit = 12;
        break;
    }
    return toReturn;
  }

  private getPeriodText(period: string, ir: { duration: string; limit: number }): string {
    let months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
    let days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

    let toReturn = String(period);
    if (toReturn.includes("-")) {
      return moment(toReturn).format("DD/MM");
    } else {
      switch (ir.duration) {
        case "hours":
          if (toReturn.length == 1) toReturn = "0" + toReturn;
          if (Number(toReturn)) toReturn = toReturn += ":00";
          break;
        case "months":
          let index = Number(toReturn);
          toReturn = this.translate.instant(months[index > 0 ? index - 1 : index]);
          break;
      }
    }
    return toReturn;
  }

  loadProductsByType() {
    this.subscriptions.push(this.apiService.getBestProducts(this.profileId, Constants.SCOPE_ECOMMERCE, "best-seller").subscribe(res => {
      let resSorted = res.data.sort((p1: Product, p2: Product) => {
        let p1SalesCount = p1.sells_count && Number(p1.sells_count) ? Number(p1.sells_count) : 0;
        let p2SalesCount = p2.sells_count && Number(p2.sells_count) ? Number(p2.sells_count) : 0;
        return p1SalesCount < p2SalesCount ? 1 : (p1SalesCount > p2SalesCount ? -1 : 0);
      });
      let resToShow = [];
      for (let i = 0; i < (resSorted.length > 6 ? 6 : resSorted.length); i++) {
        resToShow.push(resSorted[i]);
      }
      this.productsBestSelling = resToShow;
      this.uiElementService.dismissLoading();
      this.isLoading = false;
    }, err => {
      console.log("getProductsForTypes", err);
      this.uiElementService.dismissLoading();
      this.isLoading = false;
    }));
  }

  haveNothingToShow(): boolean {
    let toReturn = true;
    if (this.productTypesMap) {
      for (let catPros of this.productTypesMap) {
        if (catPros && catPros.products.length) {
          toReturn = false;
          break;
        }
      }
    }
    return this.isLoading ? false : toReturn;
  }
  private getDefoultValue(period: string, ir: { duration: string; limit: number }): string {
    let months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
    let days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    let hour = ["00:01", "06:00", "12:00", "18:00", "23:59"];
    let currenYear = Number(moment(new Date().getFullYear()));

    let toReturn = String(period);
    if (toReturn.includes("-")) {
      return moment(toReturn).format("DD/MM");
    } else {
      let index = Number(toReturn);
      switch (ir.duration) {
        case "hours":
          toReturn = this.translate.instant(hour[index > 0 ? index - 1 : index]);
          break;
        case "week":
          toReturn = this.translate.instant(days[index > 0 ? index - 1 : index]);
          break;
        case "months":
          toReturn = this.translate.instant(months[index > 0 ? index - 1 : index]);
          break;
        case "year":
          toReturn = (currenYear++).toString();
          break;
      }
    }
    return toReturn;
  }

}
