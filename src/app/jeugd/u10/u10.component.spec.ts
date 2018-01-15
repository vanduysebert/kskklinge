/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { U10Component } from './u10.component';

describe('U10Component', () => {
  let component: U10Component;
  let fixture: ComponentFixture<U10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ U10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(U10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
