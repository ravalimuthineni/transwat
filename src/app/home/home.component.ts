import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
slides = [
    {
      image: '/assets/slide1.jpg',
      title: 'Highway Engineering',
      link: '/'
    },
    {
      image: '/assets/slide2.jpg',
      title: 'Smart Cities Development',
      link: '/'
    },
    {
      image: '/assets/slide3.png',
      title: 'Water & Sanitation',
      link: '/'
    }
  ];

  currentSlide = 0;
  intervalId: any;

  ngOnInit(): void {
    this.intervalId = setInterval(() => this.nextSlide(), 2000); // Auto-slide every 2s
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide(): void {
    this.currentSlide =
      (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }
}
