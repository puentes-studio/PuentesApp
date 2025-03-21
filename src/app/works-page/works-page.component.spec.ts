import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksPageComponent } from './works-page.component';

describe('WorksPageComponent', () => {
  let component: WorksPageComponent;
  let fixture: ComponentFixture<WorksPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorksPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
