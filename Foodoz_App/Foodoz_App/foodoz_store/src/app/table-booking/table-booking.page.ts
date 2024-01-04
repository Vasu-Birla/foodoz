import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertController, NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { UiElementsService } from '../services/common/ui-elements.service';
import { ApiService } from '../services/network/api.service';
import { Helper } from 'src/models/helper.models';
import { Profile } from 'src/models/profile.models';
import { AppointeeList } from 'src/models/table-booking.models';
import { CallNumber } from '@ionic-native/call-number/ngx';
import * as moment from 'moment';


@Component({
  selector: 'app-table-booking',
  templateUrl: './table-booking.page.html',
  styleUrls: ['./table-booking.page.scss']
})
export class TableBookingPage implements OnInit, OnDestroy {
  appointments = new Array<AppointeeList>();
  isLoadingAppointments = false;
  private pageNoAppointments = 1;
  private doneAllAppointments = false;
  private infiniteScrollEvent;
  private refresher: any;
  private subscriptions = new Array<Subscription>();
  private profile: Profile;

  constructor(private navCtrl: NavController, private translate: TranslateService, private callNumber: CallNumber,
    private uiElementService: UiElementsService,
    private apiService: ApiService, private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.profile = Helper.getProfile();
    if (!this.isLoadingAppointments && (!this.appointments || !this.appointments.length)) {
      this.translate.get("loading").subscribe(value => {
        //this.uiElementService.presentLoading(value);
        this.pageNoAppointments = 1;
        this.isLoadingAppointments = true;
        if (this.infiniteScrollEvent) { this.infiniteScrollEvent.target.complete(); }
        if (this.refresher) { this.refresher.target.complete(); }
        this.getAppointments();
      });
    }
  }


  ngOnDestroy() {
    //for (let sub of this.subscriptions) sub.unsubscribe();
    //this.uiElementService.dismissLoading();
  }

  getAppointments() {
    this.apiService.getAppointmentList(this.profile.id, this.pageNoAppointments).subscribe(res => {
      this.appointments = this.appointments.concat(res.data);
      this.doneAllAppointments = !res.links.next;
      this.reFilterAppointments();
      if (this.infiniteScrollEvent) this.infiniteScrollEvent.target.complete();
      if (this.refresher) this.refresher.target.complete();
      this.isLoadingAppointments = false;
      //this.uiElementService.dismissLoading();
    }, err => {
      console.log("getAppointmentList", err);
      if (this.infiniteScrollEvent) this.infiniteScrollEvent.target.complete();
      if (this.refresher) this.refresher.target.complete();
      this.isLoadingAppointments = false;
      //this.uiElementService.dismissLoading();
    });
  }

  doInfinite(event) {
    if (this.infiniteScrollEvent) this.infiniteScrollEvent.target.complete();
    this.infiniteScrollEvent = event;
    if (this.doneAllAppointments) {
      this.infiniteScrollEvent.target.complete();
    } else {
      this.pageNoAppointments = this.pageNoAppointments + 1;
      this.getAppointments();
    }
  }

  doRefresh(refresher) {
    if (this.refresher) this.refresher.target.complete();
    this.refresher = refresher;
    this.pageNoAppointments = 1;
    this.isLoadingAppointments = true;
    this.translate.get("loading").subscribe(value => {
      //this.uiElementService.presentLoading(value);
      this.appointments = [];
      this.getAppointments();
    });
  }


  dialCustomer(customer_mobile) {
    this.callNumber.callNumber(customer_mobile, false).then(res => console.log('Launched dialer!', res)).catch(err => console.log('Error launching dialer', err));
  }

  confirmReject(ap) {
    this.translate.get(["reject_ap_title", "reject_ap_message", "no", "yes"]).subscribe(values => {
      this.alertCtrl.create({
        header: values["reject_ap_title"],
        message: values["reject_ap_message"],
        buttons: [{
          text: values["no"],
          handler: () => { }
        }, {
          text: values["yes"],
          handler: () => {
            this.updateAppointmentStatus(ap.id, 'rejected');
          }
        }]
      }).then(alert => alert.present());
    });
  }

  confirmAccept(ap) {
    this.translate.get(["accept_ap_title", "accept_ap_message", "no", "yes"]).subscribe(values => {
      this.alertCtrl.create({
        header: values["accept_ap_title"],
        message: values["accept_ap_message"],
        buttons: [{
          text: values["no"],
          handler: () => { }
        }, {
          text: values["yes"],
          handler: () => {
            this.updateAppointmentStatus(ap.id, 'accepted');
          }
        }]
      }).then(alert => alert.present());
    });
  }

  confirmComplete(ap) {
    if (moment() > ap.momentAppointment) {
      this.translate.get(["complete_ap_title", "complete_ap_message", "no", "yes"]).subscribe(values => {
        this.alertCtrl.create({
          header: values["complete_ap_title"],
          message: values["complete_ap_message"],
          buttons: [{
            text: values["no"],
            handler: () => { }
          }, {
            text: values["yes"],
            handler: () => {
              this.updateAppointmentStatus(ap.id, 'complete');
            }
          }]
        }).then(alert => alert.present());
      });
    } else {
      this.translate.get("appointment_not_started").subscribe(value => this.uiElementService.presentToast(value));
    }
  }

  private updateAppointmentStatus(apId, statusToUpdate) {
    this.translate.get("just_moment").subscribe(value => {
      this.uiElementService.presentToast(value);
      this.subscriptions.push(this.apiService.updateAppointment(apId, { status: statusToUpdate }).subscribe(res => {
        this.uiElementService.dismissLoading();
        if (res.status) this.translate.get("ap_updated_" + res.status).subscribe(text => this.uiElementService.presentToast(text));
        this.updateAppointmentInList(res);
      }, err => {
        console.log("updateAppointment", err);
        this.uiElementService.dismissLoading();
      }));
    });
  }

  private reFilterAppointments() {
    let appointmentUpcoming = new AppointeeList();
    appointmentUpcoming.id = -1;
    appointmentUpcoming.type = "upcoming_appointments";
    let appointmentPast = new AppointeeList();
    appointmentPast.id = -2;
    appointmentPast.type = "past_appointments";

    let statusesPast = "cancelled,rejected,complete";

    let allAppointments = new Array<AppointeeList>();
    allAppointments.push(appointmentUpcoming);
    for (let order of this.appointments) if (order.id && order.id > 0 && (!statusesPast.includes(order.status) && !order.isPassed)) allAppointments.push(order);
    allAppointments.push(appointmentPast);
    for (let order of this.appointments) if (order.id && order.id > 0 && (statusesPast.includes(order.status) || order.isPassed)) allAppointments.push(order);

    if (allAppointments[1].id < 0) allAppointments.splice(0, 1);
    if (allAppointments[allAppointments.length - 1].id < 0) allAppointments.splice(allAppointments.length - 1, 1);
    this.appointments = allAppointments.length ? allAppointments : [];
  }

  private updateAppointmentInList(ap: AppointeeList) {
    let index = -1;
    for (let i = 0; i < this.appointments.length; i++) {
      if (this.appointments[i].id == ap.id) {
        index = i;
        break;
      }
    }
    if (index != -1) {
      let statusesPast = "cancelled,rejected,complete";
      if (statusesPast.includes(ap.status) || ap.isPassed) {
        this.appointments.splice(index, 1);
        this.appointments.push(ap);
      } else {
        this.appointments[index] = ap;
      }
    }
  }

}
