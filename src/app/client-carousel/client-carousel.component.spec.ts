import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCarouselComponent } from './client-carousel.component';

describe('ClientCarouselComponent', () => {
  let component: ClientCarouselComponent;
  let fixture: ComponentFixture<ClientCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
