import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-question-login',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './question-login.component.html',
    styleUrl: './question-login.component.scss'
})
export class QuestionLoginComponent {
  title = 'Punjab Assembly Portal';
  logo = './assets/images/logo.png';
  assebmle_pic = './assets/images/assembly_pic.png';
  pitb_logo = './assets/images/pitb_logo.png';

  private router = inject(Router);
  
  onLogin(event?: Event): void {
    console.log('Login method triggered - navigating to legislative dashboard');
    
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    
    this.router.navigate(['/questions-dashboard']).then(
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
