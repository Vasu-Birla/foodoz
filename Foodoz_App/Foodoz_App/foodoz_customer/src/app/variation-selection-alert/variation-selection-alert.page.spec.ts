import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VariationSelectionAlertPage } from './variation-selection-alert.page';

describe('VariationSelectionAlertPage', () => {
  let component: VariationSelectionAlertPage;
  let fixture: ComponentFixture<VariationSelectionAlertPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VariationSelectionAlertPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VariationSelectionAlertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
