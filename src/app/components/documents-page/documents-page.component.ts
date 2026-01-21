import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-documents-page',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './documents-page.component.html',
    styleUrl: './documents-page.component.scss'
})
export class DocumentsPageComponent {
  pageTitle = "Documents Page";
  totalAgendaIcon = './assets/images/today_agenda.svg';
  chairpersonIcon = './assets/images/chairpersonIcon.svg';
  notificationsIcon = './assets/images/notification2.svg';
  settingsIcon = './assets/images/settings.svg';
  document_page_data = [
    {title: "Agenda", icon: this.totalAgendaIcon , class : "single_color_agenda" , route: '/agenda-details'},
    // {title: "Notices", icon: this.chairpersonIcon , class : "single_color_notice"},
    // {title: "Session Documents", icon: this.notificationsIcon, class : "single_color_session_documents"},
    {title: "Resolutions", icon: this.settingsIcon, class : "single_color_resolution"},
    // {title: "Print of Order", icon: this.settingsIcon, class : "single_color_print_order"},
    // {title: "Legislative Bill", icon: this.totalAgendaIcon, class : "single_color_legislative_bill"},
    // {title: "Question Documents", icon: this.chairpersonIcon, class : "single_color_question_document"},
    // {title: "Previous Proceedings", icon: this.notificationsIcon, class : "single_color_previous_proceedings"},
    // {title: "Zero Hour", icon: this.settingsIcon, class : "single_color_zero_hours"},
    // {title: "Calling Attention", icon: this.settingsIcon, class : "single_color_calling_attention"}
  ];
  
}
