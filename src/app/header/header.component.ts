import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

 showDropdown = false;

  constructor(private router: Router) {}

  sectors = [
    { title: 'Highways & Elevated Roads', route: '/sectors/highways' },
    { title: 'Water & Sanitation', route: '/sectors/water-sanitation' },
    { title: 'Irrigation', route: '/sectors/irrigation' },
    { title: 'Smart Cities', route: '/sectors/smart-cities' },
    { title: 'SEZs / IT / Industrial Parks', route: '/sectors/sez-industrial-it' },
    { title: 'Industrial Projects', route: '/sectors/industrial-projects' },
    { title: 'Institutions / Education', route: '/sectors/institutional-education' },
    { title: 'Commercial Centers', route: '/sectors/commercial-centers' },
    { title: 'Hospitality', route: '/sectors/hotels' },
    { title: 'Healthcare', route: '/sectors/hospitals' },
    { title: 'Townships & Housing', route: '/sectors/housing' },
    { title: 'Special Projects', route: '/sectors/special-projects' }
  ];

  navigateTo(path: string) {
    this.showDropdown = false; // hide dropdown on click
    this.router.navigateByUrl(path);
  }
}