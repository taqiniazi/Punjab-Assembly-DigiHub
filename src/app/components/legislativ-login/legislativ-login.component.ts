import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-legislativ-login',
  standalone: true,
  imports: [],
  templateUrl: './legislativ-login.component.html',
  styleUrl: './legislativ-login.component.scss'
})
export class LegislativLoginComponent {
  title = 'Punjab Assembly DigiHub';
  logo = './assets/images/logo.png';
  assebmle_pic = './assets/images/assembly_pic.png';
  pitb_logo = './assets/images/pitb_logo.png';
  private router = inject(Router);
  onLogin(event?: Event) {
    console.log('Login method triggered - navigating to legislative dashboard');
    
    // Prevent default form submission behavior
    event?.preventDefault();
    
    // Navigate to the correct route path
    this.router.navigate(['/legislative-dashboard']).then(
      (success) => {
        console.log('Navigation successful:', success);
        if (!success) {
          console.error('Navigation returned false - route may not exist or navigation was cancelled');
        }
      }
    ).catch((error) => {
      console.error('Navigation failed with error:', error);
    });
  }
}
