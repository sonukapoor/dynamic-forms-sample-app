import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicApiFormComponent } from './dynamic-api-form.component';

describe('DynamicApiFormComponent', () => {
  let component: DynamicApiFormComponent;
  let fixture: ComponentFixture<DynamicApiFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicApiFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DynamicApiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
