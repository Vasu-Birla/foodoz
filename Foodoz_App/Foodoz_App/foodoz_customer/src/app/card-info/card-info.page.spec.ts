import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardInfoPage } from './card-info.page';

describe('CardInfoPage', () => {
  let component: CardInfoPage;
  let fixture: ComponentFixture<CardInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
