import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent {
  logo = 'assets/images/logo.png';
  pitb_logo = 'assets/images/pitb_logo.png';
}
