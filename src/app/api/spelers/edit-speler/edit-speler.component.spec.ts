import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSpelerComponent } from './edit-speler.component';

describe('EditSpelerComponent', () => {
  let component: EditSpelerComponent;
  let fixture: ComponentFixture<EditSpelerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSpelerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSpelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
