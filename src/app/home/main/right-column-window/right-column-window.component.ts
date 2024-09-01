import { Component, OnInit } from '@angular/core';
import { AdService } from '../services/ad.service';
import { Observable } from 'rxjs';
import { AdvertisementView } from '../interfaces/main.interfaces';

@Component({
  selector: 'app-right-column-window',
  templateUrl: './right-column-window.component.html',
  styleUrls: ['./right-column-window.component.css']
})
export class RightColumnWindowComponent implements OnInit {

  selectedListing$: Observable<AdvertisementView | null>;

  constructor(private adService: AdService) {
    this.selectedListing$ = this.adService.selectedListing$;
  }
  ngOnInit(): void {}
}
