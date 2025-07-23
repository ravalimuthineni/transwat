import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ParamMap, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sector-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],  
  templateUrl: './sector-detail.component.html',
  styleUrls: ['./sector-detail.component.scss']
})
export class SectorDetailComponent implements OnInit {
  sectorId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.sectorId = params.get('sectorId');
      console.log('sectorId:', this.sectorId);
    });
  }
  
}
