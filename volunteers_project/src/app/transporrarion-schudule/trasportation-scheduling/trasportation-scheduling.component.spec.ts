import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrasportationSchedulingComponent } from './trasportation-scheduling.component';

describe('TrasportationSchedulingComponent', () => {
  let component: TrasportationSchedulingComponent;
  let fixture: ComponentFixture<TrasportationSchedulingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrasportationSchedulingComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TrasportationSchedulingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
