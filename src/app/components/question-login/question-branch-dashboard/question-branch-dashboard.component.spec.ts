import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionBranchDashboardComponent } from './question-branch-dashboard.component';

describe('QuestionBranchDashboardComponent', () => {
  let component: QuestionBranchDashboardComponent;
  let fixture: ComponentFixture<QuestionBranchDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionBranchDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuestionBranchDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
