import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegislativeBranchDashboardComponent } from './legislative-branch-dashboard.component';

describe('LegislativeBranchDashboardComponent', () => {
  let component: LegislativeBranchDashboardComponent;
  let fixture: ComponentFixture<LegislativeBranchDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegislativeBranchDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LegislativeBranchDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
