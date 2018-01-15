/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { U9Component } from './u9.component';

describe('U9Component', () => {
  let component: U9Component;
  let fixture: ComponentFixture<U9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ U9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(U9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
