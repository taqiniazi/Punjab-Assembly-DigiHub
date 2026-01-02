import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegislativLoginComponent } from './legislativ-login.component';

describe('LegislativLoginComponent', () => {
  let component: LegislativLoginComponent;
  let fixture: ComponentFixture<LegislativLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegislativLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LegislativLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
