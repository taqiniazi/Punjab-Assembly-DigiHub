import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousProceedingsComponent } from './previous-proceedings.component';

describe('PreviousProceedingsComponent', () => {
  let component: PreviousProceedingsComponent;
  let fixture: ComponentFixture<PreviousProceedingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreviousProceedingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreviousProceedingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
