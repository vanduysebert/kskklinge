/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JeugdComponent } from './jeugd.component';

describe('JeugdComponent', () => {
  let component: JeugdComponent;
  let fixture: ComponentFixture<JeugdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeugdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeugdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
