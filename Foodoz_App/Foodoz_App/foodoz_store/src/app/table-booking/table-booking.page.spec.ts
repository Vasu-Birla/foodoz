import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TableBookingPage } from './table-booking.page';

describe('TableBookingPage', () => {
  let component: TableBookingPage;
  let fixture: ComponentFixture<TableBookingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableBookingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TableBookingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
