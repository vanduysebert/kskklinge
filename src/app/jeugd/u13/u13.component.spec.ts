import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { U13Component } from './u13.component';

describe('U13Component', () => {
  let component: U13Component;
  let fixture: ComponentFixture<U13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ U13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(U13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
