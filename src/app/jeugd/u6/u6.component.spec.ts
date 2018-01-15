/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { U6Component } from './u6.component';

describe('U6Component', () => {
  let component: U6Component;
  let fixture: ComponentFixture<U6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ U6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(U6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
