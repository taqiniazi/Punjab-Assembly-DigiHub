import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-today-agenda',
  imports: [CommonModule],
  templateUrl: './today-agenda.component.html',
  styleUrl: './today-agenda.component.scss'
})
export class TodayAgendaComponent {
  pu_assembly_logo = 'assets/images/pu_assembly_logo.png';
  table_data = [
    { sn: 1, amNo: '297/25', mover: 'Syed Ali Haider Gilani (H.I.), MPA PP-213', minister: 'School Education' },
    { sn: 2, amNo: '465/25', mover: 'Mr Muhammad Bilal Yamin, MPA (PP-6)', minister: 'Forestry, Wildlife & Fisheries' },
    { sn: 3, amNo: '469/25', mover: 'Mr. Amjad Ali Javed, MPA (PP-121)', minister: 'Specialized Healthcare & Medical Education and Health & Population' },
    { sn: 4, amNo: '472/25', mover: 'Ms. Rahila Khadim Hussain, MPA (W-304)', minister: 'Local Government & Community Development' },
    { sn: 5, amNo: '475/25', mover: 'Ms Neelam Jabbar Chaudhary, MPA (W-335)', minister: 'Housing, Urban Development and Public Health Engineering' }
  ];
}
