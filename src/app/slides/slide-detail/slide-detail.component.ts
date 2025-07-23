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

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.slideId = params.get('slideId');
    });
  }
}