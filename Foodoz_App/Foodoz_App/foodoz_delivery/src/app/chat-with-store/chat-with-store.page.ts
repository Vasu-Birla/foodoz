import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-chat-with-store',
  templateUrl: './chat-with-store.page.html',
  styleUrls: ['./chat-with-store.page.scss'],
})
export class ChatWithStorePage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

 dismiss(){
   this.modalController.dismiss();
 }
}
