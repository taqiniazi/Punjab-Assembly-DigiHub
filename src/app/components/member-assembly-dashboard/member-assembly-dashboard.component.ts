import { Component } from '@angular/core';

@Component({
  selector: 'app-member-assembly-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './member-assembly-dashboard.component.html',
  styleUrl: './member-assembly-dashboard.component.scss'
})
export class MemberAssemblyDashboardComponent {
  pageTitle = "Member Assembly Dashboard";
  AgendaIcon = './assets/images/today_agenda.svg';
  notificationIcon = './assets/images/notificationIcon.svg';
  questionsIcon = './assets/images/questionsIcon.svg';
  assembly_dashboard_cards =[
    {title: "Agenda", icon: this.AgendaIcon , class : "agenda"},
    {title: "Notifications", icon: this.notificationIcon , class : "notifications"},
    {title: "Questions", icon: this.questionsIcon , class : "questions underline"}
  ]
}
