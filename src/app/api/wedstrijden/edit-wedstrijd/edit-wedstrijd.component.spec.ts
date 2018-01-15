import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWedstrijdComponent } from './edit-wedstrijd.component';

describe('EditWedstrijdComponent', () => {
  let component: EditWedstrijdComponent;
  let fixture: ComponentFixture<EditWedstrijdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditWedstrijdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWedstrijdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
