import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorDetailComponent } from './sector-detail.component';

describe('SectorDetailComponent', () => {
  let component: SectorDetailComponent;
  let fixture: ComponentFixture<SectorDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectorDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
