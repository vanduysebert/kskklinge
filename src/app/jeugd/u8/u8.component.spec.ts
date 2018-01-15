/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { U8Component } from './u8.component';

describe('U8Component', () => {
  let component: U8Component;
  let fixture: ComponentFixture<U8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ U8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(U8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
