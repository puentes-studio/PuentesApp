import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillBubblesComponent } from './skill-bubbles.component';

describe('SkillBubblesComponent', () => {
  let component: SkillBubblesComponent;
  let fixture: ComponentFixture<SkillBubblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkillBubblesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkillBubblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
