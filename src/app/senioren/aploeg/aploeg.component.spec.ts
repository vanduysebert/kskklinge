/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AploegComponent } from './aploeg.component';

describe('AploegComponent', () => {
  let component: AploegComponent;
  let fixture: ComponentFixture<AploegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AploegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AploegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
