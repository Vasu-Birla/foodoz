import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { AlertController, NavController, Platform } from '@ionic/angular';
import { MyEventsService } from '../services/events/my-events.service';
import { TranslateService } from '@ngx-translate/core';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';
import { Helper } from 'src/models/helper.models';
import { Subscription } from 'rxjs';
import { UiElementsService } from '../services/common/ui-elements.service';
import { Device } from '@ionic-native/device/ngx';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit, OnDestroy {
  private platformIos = false;
  private subscriptions = new Array<Subscription>();

  constructor(private navCtrl: NavController, private diagnostic: Diagnostic, private translate: TranslateService,
    private uiElementService: UiElementsService, private platform: Platform, private device: Device,
    private myEventsService: MyEventsService, private alertCtrl: AlertController, private locationAccuracy: LocationAccuracy) { }

  ngOnInit() {
    this.subscriptions.push(this.myEventsService.getCustomEventObservable().subscribe(data => {
      if (data == "nav:pick_location") {
        this.alertLocation();
      }
    }));
    this.platform.ready().then(() => {
      let ver = String(this.device.version);
      let deviceVersion = Number(ver);
      if (!deviceVersion) deviceVersion = Number(ver.substring(0, ver.indexOf(".")));
      console.log("deviceVersion", deviceVersion);
      console.log("platform", this.platform.platforms());
      this.platformIos = (!this.platform.is('android') && deviceVersion >= 13);
    });
  }

  ngOnDestroy() {
    for (let sub of this.subscriptions) sub.unsubscribe();
  }

  ionViewWillLeave() {
    this.uiElementService.dismissLoading();
  }

  ionViewDidEnter() {
    let selectedLocation = Helper.getAddressSelected();
    if (selectedLocation == null) this.alertLocation();
  }

  alertLocation() {
    this.uiElementService.dismissLoading();
    if (Helper.getLoggedInUser() != null) {
      let navigationExtras: NavigationExtras = { state: { pick_location: true } };
      this.navCtrl.navigateForward(['./saved-addresses'], navigationExtras);
    } else {
      this.diagnostic.isLocationEnabled().then((isAvailable) => {
        if (isAvailable) {
          let navigationExtras: NavigationExtras = { state: { pick_location: true } };
          this.navCtrl.navigateForward(['./set-location'], navigationExtras);
        } else {
          this.alertLocationServices();
        }
      }).catch((e) => {
        console.error(e);
        this.alertLocationServices();
      });
    }
  }

  alertLocationServices() {
    let isRequestable: boolean = Helper.isLocationRequestable();
    if (isRequestable) {
      this.translate.get(["location_services_title", "location_services_message", "okay", "search_anyway"]).subscribe(values => {
        this.alertCtrl.create({
          header: values["location_services_title"],
          message: values["location_services_message"],
          buttons: [{
            text: values["okay"],
            handler: () => {
              this.locationAccuracy.canRequest().then((canRequest: boolean) => {
                if (canRequest) {
                  // the accuracy option will be ignored by iOS
                  this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
                    () => console.log('Request successful'),
                    error => console.log('Error requesting location permissions', error)
                  );
                }
              });
            }
          }, {
            text: values["search_anyway"],
            handler: () => {
              this.pickLocationOnMap(false);
            }
          }]
        }).then(alert => alert.present());
      });
    } else {
      this.pickLocationOnMap(true);
    }
  }

  private pickLocationOnMap(promt: boolean) {
    if (promt) {
      let cancelKey = this.platformIos ? "cancel" : "cancel_quit";
      this.translate.get(["point_on_map", "point_on_map_message", "okay", cancelKey]).subscribe(values => {
        this.alertCtrl.create({
          header: values["point_on_map"],
          message: values["point_on_map_message"],
          buttons: [{
            text: values["okay"],
            handler: () => {
              let navigationExtras: NavigationExtras = { state: { pick_location: true } };
              this.navCtrl.navigateForward(['./set-location'], navigationExtras);
            }
          }, {
            text: values[cancelKey],
            handler: () => {
              if (!this.platformIos) {
                navigator['app'].exitApp();
              }
            }
          }]
        }).then(alert => alert.present());
      });
    } else {
      let navigationExtras: NavigationExtras = { state: { pick_location: true } };
      this.navCtrl.navigateForward(['./set-location'], navigationExtras);
    }
  }

}