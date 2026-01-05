import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayAgendaComponent } from './today-agenda.component';

describe('TodayAgendaComponent', () => {
  let component: TodayAgendaComponent;
  let fixture: ComponentFixture<TodayAgendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodayAgendaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodayAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
