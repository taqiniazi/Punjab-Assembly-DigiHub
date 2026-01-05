import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-question-branch-dashboard',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './question-branch-dashboard.component.html',
    styleUrl: './question-branch-dashboard.component.scss'
})
export class QuestionBranchDashboardComponent {
    pageTitle = "Question Branch Dashboard";
    totalAgendaIcon = './assets/images/today_agenda.svg';
    chairpersonIcon = './assets/images/chairpersonIcon.svg';
    notificationsIcon = './assets/images/notification2.svg';
    settingsIcon = './assets/images/settings.svg';
    questions_dashboard_data = [
    {title: "Upload Question Doc", icon: this.totalAgendaIcon , class : "single_color_agenda"},
    {title: "Verbatim Debates", icon: this.chairpersonIcon , class : "single_color_notice"},
    {title: "Upload Session Doc", icon: this.notificationsIcon, class : "single_color_session_documents"},
    {title: "Zero hour", icon: this.settingsIcon, class : "single_color_resolution"},
    {title: "Calling Attention", icon: this.settingsIcon, class : "single_color_print_order"}
  ];
}
