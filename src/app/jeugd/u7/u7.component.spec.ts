/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { U7Component } from './u7.component';

describe('U7Component', () => {
  let component: U7Component;
  let fixture: ComponentFixture<U7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ U7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(U7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
