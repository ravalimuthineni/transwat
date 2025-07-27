import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, RouterModule } from '@angular/router';

@Component({
  selector: 'app-slide-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],    templateUrl: './slide-detail.component.html',
  styleUrl: './slide-detail.component.scss'
})
export class SlideDetailComponent implements OnInit {
  slideId: string | null = null;
roadList = [
  { src: 'assets/roadways1.jpeg', name: '' },
  { src: 'assets/roadways2.jpeg', name: '' },
  { src: 'assets/flyovers.jpeg', name: '' },
  { src: 'assets/flyover3.jpeg', name: '' }
];
damList = [
  { src: 'assets/dams1.jpeg', name: '' },
  { src: 'assets/dams2.jpeg', name: '' },
  { src: 'assets/dams3.jpeg', name: '' },
  { src: 'assets/dams4.jpeg', name: '' }
];
buildingList = [
  { src: 'assets/institue1.jpeg', name: '' },
  { src: 'assets/institue2.jpeg', name: '' },
  { src: 'assets/institue3.jpeg', name: '' },
  { src: 'assets/building.jpg', name: '' }
];
hotelList = [
  { src: 'assets/hotels1.jpeg', name: '' },
  { src: 'assets/hotels2.jpeg', name: '' },
  { src: 'assets/hotels3.jpeg', name: '' },
  { src: 'assets/hotels4.jpeg', name: '' }
];
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.slideId = params.get('slideId');
    });
  }
}