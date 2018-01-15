/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { U11Component } from './u11.component';

describe('U11Component', () => {
  let component: U11Component;
  let fixture: ComponentFixture<U11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ U11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(U11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
