import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PloegDetailComponent } from './ploeg-detail.component';

describe('PloegDetailComponent', () => {
  let component: PloegDetailComponent;
  let fixture: ComponentFixture<PloegDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PloegDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PloegDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
