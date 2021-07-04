import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTravelerComponent } from './add-traveler.component';

describe('AddTravelerComponent', () => {
  let component: AddTravelerComponent;
  let fixture: ComponentFixture<AddTravelerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTravelerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTravelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
