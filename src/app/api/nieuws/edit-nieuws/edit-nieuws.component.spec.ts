import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNieuwsComponent } from './edit-nieuws.component';

describe('EditNieuwsComponent', () => {
  let component: EditNieuwsComponent;
  let fixture: ComponentFixture<EditNieuwsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditNieuwsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNieuwsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
