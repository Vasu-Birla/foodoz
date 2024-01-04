import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { Helper } from 'src/models/helper.models';
import { AppoiBookRequest } from 'src/models/table-booking.models';
import { Vendor } from 'src/models/vendor.models';
import { UiElementsService } from '../services/common/ui-elements.service';
import { ApiService } from '../services/network/api.service';
import * as moment from 'moment';

@Component({
  selector: 'app-table-booking',
  templateUrl: './table-booking.page.html',
  styleUrls: ['./table-booking.page.scss']
})
export class TableBookingPage implements OnInit {
  private subscriptions = new Array<Subscription>();
  appointmentRequest = new AppoiBookRequest()
  vendor: Vendor;

  private use24HourFormat = true;
  private minutesApart = 30;
  weekDays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  private monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  monthSelected = 0;
  dates: Array<{ month: number, monthText: string, dates: Array<Date> }> = [];
  datesToShow: Array<Date> = [];
  dateSelected: Date;
  timeSelected: string;
  select_month: string = "2";
  availabilityTimes = new Array<{ time: string, timeValue: string }>();
  persons: Array<number>;

  constructor(private navCtrl: NavController, private modalController: ModalController, private translate: TranslateService,
    private uiElementService: UiElementsService, private apiService: ApiService, private navParams: NavParams) {
    this.vendor = this.navParams.get('vendor');
  }

  ngOnInit() {
    this.persons = Array(15).fill(0).map((x, i) => i + 1);
    for (let i = 0; i < 90; i++) {
      let d = new Date();
      d.setDate(d.getDate() + i);
      this.insertDate(d);
    }

    this.monthSelected = this.dates[0].month;
    this.datesToShow = this.dates[0].dates;
    console.log('datesToShow', this.dates);
    this.markSelected(this.datesToShow[0]);
  }

  private insertDate(date: Date) {
    let index = -1;
    for (let i = 0; i < this.dates.length; i++) {
      if (this.dates[i].month == date.getMonth()) {
        index = i;
        break;
      }
    }

    if (index == -1)
      this.dates.push({ month: date.getMonth(), monthText: moment(date).format("MMM"), dates: [date] });
    else
      this.dates[index].dates.push(date);
  }

  changeMonth() {
    let index = -1;
    for (let i = 0; i < this.dates.length; i++) {
      if (this.dates[i].month == this.monthSelected) {
        index = i;
        break;
      }
    }
    if (index != -1) {
      this.datesToShow = this.dates[index].dates;
      this.markSelected(this.datesToShow[0]);
    }
  }

  ngOnDestroy() {
    for (let sub of this.subscriptions) sub.unsubscribe();
    this.uiElementService.dismissLoading();
  }

  markSelected(date: Date) {
    this.dateSelected = date;
    this.appointmentRequest.date = moment(this.dateSelected).format();

    this.availabilityTimes = new Array<{ time: string, timeValue: string }>();
    let openingHour, openingMinute, closingHour, closingMinute;
    if (this.vendor.meta.opening_time && Number(this.vendor.meta.opening_time)) {
      let openingMoment = moment(Number(this.vendor.meta.opening_time));
      openingHour = openingMoment.format("HH");
      openingMinute = openingMoment.format("mm");
    }
    let dateStart = new Date(date.getFullYear(), date.getMonth(), date.getDate(), Number(openingHour ? openingHour : "07"), Number(openingMinute ? openingMinute : "00"), 0);
    if (this.vendor.meta.closing_time && Number(this.vendor.meta.closing_time)) {
      let closingMoment = moment(Number(this.vendor.meta.closing_time));
      closingHour = closingMoment.format("HH");
      closingMinute = closingMoment.format("mm");
    }
    let dateEnd = new Date(date.getFullYear(), date.getMonth(), date.getDate(), Number(closingHour ? closingHour : "23"), Number(closingMinute ? closingMinute : "00"), 0);

    let time: number = dateStart.getTime();
    while (time <= dateEnd.getTime()) {
      let dateIn = new Date(time);
      let toDay = moment(dateIn).format("DD-MM-YYYY") == moment().format("DD-MM-YYYY");
      let showToDayTime = moment(dateIn).format("HH:mm") > moment().format("HH:mm");
      if (toDay) {
        if (showToDayTime) {
          this.availabilityTimes.push({ time: moment(dateIn).format("HH:mm"), timeValue: moment(dateIn).format(this.use24HourFormat ? "HH:mm" : "hh:mm a") });
        }
      } else {
        this.availabilityTimes.push({ time: moment(dateIn).format("HH:mm"), timeValue: moment(dateIn).format(this.use24HourFormat ? "HH:mm" : "hh:mm a") });
      }

      time = time + (this.minutesApart * 60000);
    }
  }

  dismiss() {
    this.modalController.dismiss();
  }

  onSubmitRequest() {
    // console.log(Helper.formatTimestampDateDayTime(this.appointmentRequest.date, this.apiService.locale), ">>>",this.appointmentRequest.time_from)
    // console.log(moment(this.appointmentRequest.date).format("DD-MM-YYYY"), ">>>",this.appointmentRequest.time_from ,"==", moment().format("DD-MM-YYYY HH:mm"),">>", )
    if (!this.appointmentRequest.date || !this.appointmentRequest.date.length) {
      this.translate.get("select_date_time").subscribe(value => this.uiElementService.presentToast(value));
    } else if (!this.appointmentRequest.meta.person) {
      this.translate.get("select_person").subscribe(value => this.uiElementService.presentToast(value));
    } else if (!this.appointmentRequest.time_from || !this.appointmentRequest.time_from.length) {
      this.translate.get("select_date_time").subscribe(value => this.uiElementService.presentToast(value));
    } else {
      let toDay = moment(this.appointmentRequest.date).format("DD-MM-YYYY") == moment().format("DD-MM-YYYY");
      let selectedTime = this.appointmentRequest.time_from > moment().format("HH:mm");
      if (toDay) {
        if (selectedTime) {
          this.createAppointment();
        } else {
          this.translate.get("err_field_timeslot_passed").subscribe(value => this.uiElementService.presentToast(value));
        }
      } else {
        this.createAppointment();
      }

    }
  }

  private createAppointment() {
    let bookReq = {
      vendor_id: this.vendor.id,
      amount: 0,
      date: this.appointmentRequest.date.split("T")[0],
      duplicate_slots_allowed: -1,
      meta: JSON.stringify({ person: this.appointmentRequest.meta.person, note: this.appointmentRequest.meta.note }),
      time_from: this.appointmentRequest.time_from,
      time_to: "00:00"
    }
    this.translate.get(["booking_your_table", "your_table_is_booked", "booking_your_table_err"]).subscribe(values => {
      this.uiElementService.presentLoading(values["booking_your_table"]);
      this.apiService.createAppointment(bookReq).subscribe(res => {
        this.modalController.dismiss("table_booked");
        this.uiElementService.dismissLoading();
        this.uiElementService.presentToast(values["your_table_is_booked"]);
        // this.navCtrl.navigateRoot(['./table-booked']);
      }, err => {
        console.log("createOrder", err);
        this.uiElementService.dismissLoading();
        this.uiElementService.presentToast(values["booking_your_table_err"]);
      });
    });
  }

}
