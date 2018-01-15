/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ReservenComponent } from './reserven.component';

describe('ReservenComponent', () => {
  let component: ReservenComponent;
  let fixture: ComponentFixture<ReservenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
