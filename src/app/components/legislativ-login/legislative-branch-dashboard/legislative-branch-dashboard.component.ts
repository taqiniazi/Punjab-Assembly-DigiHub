import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-legislative-branch-dashboard',
    standalone: true,
    imports: [RouterLink],
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
    {title: "Agenda", icon: this.totalAgendaIcon , class : "single_color_agenda"},
    {title: "Privilege Motions ", icon: this.chairpersonIcon , class : "single_color_notice"},
    {title: "Adjournment Motions", icon: this.notificationsIcon, class : "single_color_session_documents"},
    {title: "Bills", icon: this.settingsIcon, class : "single_color_resolution"},
    {title: "Ordinances", icon: this.settingsIcon, class : "single_color_print_order"},
    {title: "Resolutions", icon: this.totalAgendaIcon, class : "single_color_legislative_bill"},
    {title: "Other motions", icon: this.chairpersonIcon, class : "single_color_other_motions"}
  ];
  
}
