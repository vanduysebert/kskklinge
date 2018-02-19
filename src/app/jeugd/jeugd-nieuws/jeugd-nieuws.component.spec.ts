import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeugdNieuwsComponent } from './jeugd-nieuws.component';

describe('JeugdNieuwsComponent', () => {
  let component: JeugdNieuwsComponent;
  let fixture: ComponentFixture<JeugdNieuwsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeugdNieuwsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeugdNieuwsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
