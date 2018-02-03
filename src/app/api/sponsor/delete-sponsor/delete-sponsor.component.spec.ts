import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSponsorComponent } from './delete-sponsor.component';

describe('DeleteSponsorComponent', () => {
  let component: DeleteSponsorComponent;
  let fixture: ComponentFixture<DeleteSponsorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteSponsorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSponsorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
