/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { U17Component } from './u17.component';

describe('U17Component', () => {
  let component: U17Component;
  let fixture: ComponentFixture<U17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ U17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(U17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
