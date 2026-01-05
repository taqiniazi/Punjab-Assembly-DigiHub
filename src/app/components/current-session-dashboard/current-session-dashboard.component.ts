import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { title } from 'process';

@Component({
    selector: 'app-current-session-dashboard',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './current-session-dashboard.component.html',
    styleUrl: './current-session-dashboard.component.scss'
})
export class CurrentSessionDashboardComponent {
  
  pageTitle = "Current Session";
  totalAgendaIcon = './assets/images/today_agenda.svg';
  chairpersonIcon = './assets/images/chairpersonIcon.svg';
  notificationsIcon = './assets/images/notification2.svg';
  settingsIcon = './assets/images/settings.svg';
  current_session_data = [
    {title: "Today’s Agenda", icon: this.totalAgendaIcon , class : "total_agenda", route: '/today-agenda'},
    {title: "Panel of Chairpersons", icon: this.chairpersonIcon , class : "panel_of_chairpersons"},
    {title: "Notifications", icon: this.notificationsIcon, class : "notifications"},
    {title: "Previous Sittings", icon: this.settingsIcon, class : "previous_sittings"}
  ];
  agendaTicker = [
    {title: "Political Agenda: Major Policy Moves & National Developments."},
    {title: "Political Agenda: Major Policy Moves & National Developments.  "},
  ]
}
