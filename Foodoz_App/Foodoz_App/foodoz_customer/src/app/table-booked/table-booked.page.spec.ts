import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TableBookedPage } from './table-booked.page';

describe('TableBookedPage', () => {
  let component: TableBookedPage;
  let fixture: ComponentFixture<TableBookedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableBookedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TableBookedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
