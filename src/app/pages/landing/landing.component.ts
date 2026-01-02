import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  title = 'Punjab Assembly Portal';
  logo = './assets/images/logo.png';
  assebmle_pic = './assets/images/assembly_pic.png';
  pitb_logo = './assets/images/pitb_logo.png';
  dashboards = [
    { name: 'Member Assembly Dashboard', route: '/member-assembly-dashboard' },
    { name: 'Current Session', route: '/current-session' },
    { name: 'Documents Page', route: '/documents-page' },
    { name: 'Previous Proceedings', route: '/previous-proceedings' },
    { name: 'Question Branch Login', route: '/questions-login' },
    { name: 'Legislative Branch Login', route: '/legislative-branch-login' }
  ];

  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}