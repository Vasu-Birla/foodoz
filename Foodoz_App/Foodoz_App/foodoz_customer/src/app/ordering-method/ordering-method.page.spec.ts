import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrderingMethodPage } from './ordering-method.page';

describe('OrderingMethodPage', () => {
  let component: OrderingMethodPage;
  let fixture: ComponentFixture<OrderingMethodPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderingMethodPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderingMethodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
