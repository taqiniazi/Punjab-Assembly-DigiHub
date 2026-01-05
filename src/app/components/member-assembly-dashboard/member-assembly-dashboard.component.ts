import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-member-assembly-dashboard',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './member-assembly-dashboard.component.html',
    styleUrl: './member-assembly-dashboard.component.scss'
})
export class MemberAssemblyDashboardComponent {
  pageTitle = "Member Assembly Dashboard";
  AgendaIcon = './assets/images/today_agenda.svg';
  notificationIcon = './assets/images/notificationIcon.svg';
  questionsIcon = './assets/images/questionsIcon.svg';
  selectedImages: string[] = [];
  assembly_dashboard_cards =[
    {title: "Agenda", icon: this.AgendaIcon , class : "agenda", images: ['./assets/images/gallary/1.png','./assets/images/gallary/2.png','./assets/images/gallary/3.png']},
    {title: "Notifications", icon: this.notificationIcon , class : "notifications", images: ['./assets/images/gallary/3.png','./assets/images/gallary/2.png','./assets/images/gallary/1.png']},
    {title: "Questions", icon: this.questionsIcon , class : "questions underline", images: ['./assets/images/gallary/2.png','./assets/images/gallary/3.png','./assets/images/gallary/2.png']}
  ];

  openModal(item: any) {
    this.selectedImages = item.images;
  }
}
