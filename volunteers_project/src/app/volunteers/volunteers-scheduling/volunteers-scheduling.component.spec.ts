import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteersSchedulingComponent } from './volunteers-scheduling.component';

describe('VolunteersSchedulingComponent', () => {
  let component: VolunteersSchedulingComponent;
  let fixture: ComponentFixture<VolunteersSchedulingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteersSchedulingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolunteersSchedulingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
