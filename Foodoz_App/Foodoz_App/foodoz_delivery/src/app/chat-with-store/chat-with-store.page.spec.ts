import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChatWithStorePage } from './chat-with-store.page';

describe('ChatWithStorePage', () => {
  let component: ChatWithStorePage;
  let fixture: ComponentFixture<ChatWithStorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatWithStorePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChatWithStorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
