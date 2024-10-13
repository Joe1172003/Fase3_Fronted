import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataProjectionComponent } from './data-projection.component';

describe('DataProjectionComponent', () => {
  let component: DataProjectionComponent;
  let fixture: ComponentFixture<DataProjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataProjectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
