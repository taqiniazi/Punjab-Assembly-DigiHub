import { Component } from '@angular/core';

@Component({
    selector: 'app-legislative-branch-dashboard',
    standalone: true,
    imports: [],
    templateUrl: './legislative-branch-dashboard.component.html',
    styleUrl: './legislative-branch-dashboard.component.scss'
})
export class LegislativeBranchDashboardComponent {
  pageTitle = "Legislative Branch Dashboard";
  totalAgendaIcon = './assets/images/today_agenda.svg';
  chairpersonIcon = './assets/images/chairpersonIcon.svg';
  notificationsIcon = './assets/images/notification2.svg';
  settingsIcon = './assets/images/settings.svg';
  legislative_dashboard_data = [
    {title: "Upload Question Doc", icon: this.totalAgendaIcon , class : "single_color_agenda"},
    {title: "Verbatim Debates", icon: this.chairpersonIcon , class : "single_color_notice"},
    {title: "Upload Session Doc", icon: this.notificationsIcon, class : "single_color_session_documents"},
    {title: "Zero hour", icon: this.settingsIcon, class : "single_color_resolution"},
    {title: "Calling Attention", icon: this.settingsIcon, class : "single_color_print_order"}
  ];
  
}
