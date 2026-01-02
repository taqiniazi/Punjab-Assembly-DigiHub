import { Component } from '@angular/core';

@Component({
    selector: 'app-previous-proceedings',
    imports: [],
    templateUrl: './previous-proceedings.component.html',
    styleUrl: './previous-proceedings.component.scss'
})
export class PreviousProceedingsComponent {
  pageTitle = "Previous Proceedings";
  totalAgendaIcon = './assets/images/today_agenda.svg';
  chairpersonIcon = './assets/images/chairpersonIcon.svg';
  notificationsIcon = './assets/images/notification2.svg';
  settingsIcon = './assets/images/settings.svg';
  previous_proceeding_data = [
    {title: "Notifications", icon: this.totalAgendaIcon , class : "single_color_agenda"},
    {title: "Schedule", icon: this.chairpersonIcon , class : "single_color_notice"},
    {title: "Sittings", icon: this.settingsIcon, class : "single_color_session_documents"},
    {title: "Panel of Chairmen", icon: this.chairpersonIcon, class : "single_color_resolution"},
    {title: "Summary of Proceedings", icon: this.totalAgendaIcon, class : "single_color_proceeding_summary"}
  ];
}
