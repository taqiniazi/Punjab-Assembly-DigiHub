import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-agenda-details',
  imports: [RouterLink],
  templateUrl: './agenda-details.component.html',
  styleUrl: './agenda-details.component.scss'
})
export class AgendaDetailsComponent {
  pageTitle = "Agenda Details";
}
