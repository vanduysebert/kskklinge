/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ZondagsreservenComponent } from './zondagsreserven.component';

describe('ZondagsreservenComponent', () => {
  let component: ZondagsreservenComponent;
  let fixture: ComponentFixture<ZondagsreservenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZondagsreservenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZondagsreservenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
