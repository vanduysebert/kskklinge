import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NieuwsNieuwComponent } from './nieuws-nieuw.component';

describe('NieuwsNieuwComponent', () => {
  let component: NieuwsNieuwComponent;
  let fixture: ComponentFixture<NieuwsNieuwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NieuwsNieuwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NieuwsNieuwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
