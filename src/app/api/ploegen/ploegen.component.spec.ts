/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PloegenComponent } from './ploegen.component';

describe('PloegenComponent', () => {
  let component: PloegenComponent;
  let fixture: ComponentFixture<PloegenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PloegenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PloegenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
