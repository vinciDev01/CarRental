import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body',
  standalone: false,

  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
})
export class BodyComponent {

  constructor(private router: Router){}

  onNavigate(route: string): void {
    this.router.navigate([route]);
  }
}
