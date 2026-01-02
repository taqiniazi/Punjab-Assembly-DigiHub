import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentSessionDashboardComponent } from './current-session-dashboard.component';

describe('CurrentSessionDashboardComponent', () => {
  let component: CurrentSessionDashboardComponent;
  let fixture: ComponentFixture<CurrentSessionDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentSessionDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CurrentSessionDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
