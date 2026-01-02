import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberAssemblyDashboardComponent } from './member-assembly-dashboard.component';

describe('MemberAssemblyDashboardComponent', () => {
  let component: MemberAssemblyDashboardComponent;
  let fixture: ComponentFixture<MemberAssemblyDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemberAssemblyDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MemberAssemblyDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
