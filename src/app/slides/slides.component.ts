import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-slides',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SlidesComponent implements OnInit {
slides = [
  {
    image: 'assets/highway.jpeg',
    title: 'Transportation',
    description: '60+ years of strengthening India’s roads, bridges, and highways.',
    route: '/slide-detail/roads',
    ppt: 'assets/TranswatCompanyProfile_highways.pptx'
  },
  {
    image: 'assets/dam4.jpeg',
    title: 'Dams & Reservoirs',
    description: 'Creating sustainable water solutions across India.',
    route: '/slide-detail/dams',
    ppt: 'assets/TranswatCompanyProfile_WaterResource.pptx'
  },
  {
    image: 'assets/4.png',
    title: 'Buildings & Institutions',
    description: 'Institutes, hospitals, and civic buildings that serve society.',
    route: '/slide-detail/buildings',
    ppt: 'assets/TranswatCompanyProfile_institutional.pptx'
  },
  // {
  //   image: 'assets/2.png',
  //   title: 'Irrigation',
  //   description: 'Efficient water systems for agriculture and rural development.',
  //   route: '/slide-detail/irrigation',
  //   ppt: 'assets/ppt/irrigation.pptx'
  // },
  {
    image: 'assets/hotels.png',
    title: 'Hospitality',
    description: 'End-to-end solutions for luxury hotels, resorts, and entertainment hubs.',
    route: '/slide-detail/hotels',
    ppt: 'assets/TranswatCompanyProfile_HospitalitySector.pptx'
  }
];


 cards = [
  {
    title: 'Highways, Major Bridges, Elevated Roads',
    description: 'Designing and constructing essential transportation infrastructure.',
    route: '/sectors/highways'
  },
  {
    title: 'Water and Sanitation',
    description: 'Providing clean water and sanitation services for urban and rural areas.',
    route: '/sectors/water-sanitation'
  },
  {
    title: 'Major and Minor Irrigation',
    description: 'Managing irrigation systems to support agriculture and water management.',
    route: '/sectors/irrigation'
  },
  {
    title: 'Smart Cities',
    description: 'Building modern, sustainable cities with integrated technologies.',
    route: '/sectors/smart-cities'
  },
  {
    title: 'SEZs, Industrial Parks, IT Parks',
    description: 'Developing zones for industries, IT companies, and special economic zones.',
    route: '/sectors/sez-industrial-it'
  },
  {
    title: 'Industrial Projects',
    description: 'Consulting for industrial setups and large-scale manufacturing plants.',
    route: '/sectors/industrial-projects'
  },
  {
    title: 'Institutional / Corporate / Educational Institutions',
    description: 'Providing infrastructure for educational, corporate, and institutional projects.',
    route: '/sectors/institutional-education'
  },
  {
    title: 'Commercial Centers (with Multi-Plex)',
    description: 'Building commercial complexes and entertainment hubs.',
    route: '/sectors/commercial-centers'
  },
  {
    title: 'Hospitality Sectors',
    description: 'Developing projects in the hospitality and tourism industries.',
    route: '/sectors/hotels'
  },
  {
    title: 'Hospitals and Health Care Sector',
    description: 'Designing and constructing healthcare facilities and hospitals.',
    route: '/sectors/hospitals'
  },
  {
    title: 'Township Planning and Housing Sector',
    description: 'Planning and building residential communities (both premium and affordable).',
    route: '/sectors/housing'
  },
  {
    title: 'Special Projects',
    description: 'Handling complex and unique projects requiring tailored solutions.',
    route: '/sectors/special-projects'
  }
];


  currentImageIndex = 0;
  intervalId: any;

  get currentSlide() {
    return this.slides[this.currentImageIndex];
  }
constructor(private router: Router) {}
  ngOnInit() {
    this.startAutoSlide();
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextImage();
    }, 4000);
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.slides.length;
  }

  prevImage() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.slides.length) % this.slides.length;
  }

  onManualNavigation(direction: 'prev' | 'next') {
    clearInterval(this.intervalId);
    direction === 'prev' ? this.prevImage() : this.nextImage();
    this.startAutoSlide();
  }
  goToSlide(route: string) {
  this.router.navigateByUrl(route);
}
navigateTo(path: string) {
  console.log('Navigating to:', path);
  this.router.navigateByUrl(path);
}

}
