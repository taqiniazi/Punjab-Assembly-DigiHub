import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-legislativ-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './legislativ-login.component.html',
  styleUrl: './legislativ-login.component.scss'
})
export class LegislativLoginComponent {
  title = 'Punjab Assembly DigiHub';
  logo = './assets/images/logo.png';
  assebmle_pic = './assets/images/assembly_pic.png';
  pitb_logo = './assets/images/pitb_logo.png';
  
  // Inject Router service
  private router = inject(Router);
  
  onLogin(event?: Event): void {
    console.log('Login method triggered - navigating to legislative dashboard');
    
    // Prevent default form submission behavior
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    
    // Navigate to legislative dashboard
    this.router.navigate(['/legislative-dashboard']).then(
      (success: boolean) => {
        if (success) {
          console.log('Navigation to legislative dashboard successful');
        } else {
          console.error('Navigation failed - route may not exist');
        }
      }
    ).catch((error: any) => {
      console.error('Navigation error:', error);
    });
  }
}
