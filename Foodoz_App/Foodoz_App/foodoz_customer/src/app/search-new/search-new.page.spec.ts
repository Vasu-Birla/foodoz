import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchNewPage } from './search-new.page';

describe('SearchNewPage', () => {
  let component: SearchNewPage;
  let fixture: ComponentFixture<SearchNewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchNewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
