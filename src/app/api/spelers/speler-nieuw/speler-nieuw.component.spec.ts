import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpelerNieuwComponent } from './speler-nieuw.component';

describe('SpelerNieuwComponent', () => {
  let component: SpelerNieuwComponent;
  let fixture: ComponentFixture<SpelerNieuwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpelerNieuwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpelerNieuwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
