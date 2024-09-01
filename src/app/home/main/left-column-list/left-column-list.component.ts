import { Component, OnInit } from '@angular/core';
import { AdvertisementView } from '../interfaces/main.interfaces';
import { AdService } from '../services/ad.service';

@Component({
  selector: 'app-left-column-list',
  templateUrl: './left-column-list.component.html',
  styleUrls: ['./left-column-list.component.css']
})
export class LeftColumnListComponent implements OnInit {

  listings: AdvertisementView[] = [];

  constructor(private adService: AdService) {}

  ngOnInit(): void {
    this.listings = this.adService.getListings();
  }

  selectListing(listing: AdvertisementView): void {
    this.adService.selectListing(listing);
  }

}
