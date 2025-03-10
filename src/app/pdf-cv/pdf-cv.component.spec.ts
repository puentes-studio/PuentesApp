import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfCvComponent } from './pdf-cv.component';

describe('PdfCvComponent', () => {
  let component: PdfCvComponent;
  let fixture: ComponentFixture<PdfCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PdfCvComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PdfCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
