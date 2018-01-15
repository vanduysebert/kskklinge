import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PloegNieuwComponent } from './ploeg-nieuw.component';

describe('PloegNieuwComponent', () => {
  let component: PloegNieuwComponent;
  let fixture: ComponentFixture<PloegNieuwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PloegNieuwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PloegNieuwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
