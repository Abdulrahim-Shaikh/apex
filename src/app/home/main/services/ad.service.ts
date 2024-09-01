import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AdvertisementView } from '../interfaces/main.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AdService {
  private listings: AdvertisementView[] = [
    { id: 'id1', viewId: 1, logo: '/assets/google.jpeg', advertiserName: 'Google', advertisementTitle: 'SDE 1', advertisementPublishDate: new Date(), location: 'here' },
    { id: 'id2', viewId: 2, logo: '/assets/amazon.jpeg', advertiserName: 'Amazon', advertisementTitle: 'Software Engineer', advertisementPublishDate: new Date(), location: 'Mumbai, Maharashtra, India' },
    { id: 'id3', viewId: 3, logo: '/assets/meta.webp', advertiserName: 'Meta', advertisementTitle: 'Software Developer', advertisementPublishDate: new Date(), location: 'Pune, Maharashtra, India' },
    { id: 'id4', viewId: 4, logo: '/assets/facebook.png', advertiserName: 'Facebook', advertisementTitle: 'Full Stack Developer', advertisementPublishDate: new Date(), location: 'Bengaluru, Karnataka, India' },
    { id: 'id5', viewId: 5, logo: '/assets/netflix.png', advertiserName: 'Netflix', advertisementTitle: 'Data Scientist', advertisementPublishDate: new Date(), location: 'California, USA' },
  ]

  private selectedListingSubject = new BehaviorSubject<AdvertisementView | null>(null);
  selectedListing$ = this.selectedListingSubject.asObservable();
  private isMobileView = window.innerWidth <= 820;

  constructor() {
    window.addEventListener('resize', () => {
      this.isMobileView = window.innerWidth <= 820;
      if (!this.isMobileView) {
        this.selectedListingSubject.next(null);
      }
    });
  }

  getListings(): AdvertisementView[] { return this.listings; }
  selectListing(listing: AdvertisementView): void {
    this.selectedListingSubject.next(listing);
    if (this.isMobileView) {
      console.log('in mobile view')
      const adElement = document.querySelector('app-right-column-window') as HTMLElement;
      adElement.style.display = 'block';
      const listElement = document.querySelector('app-left-column-list') as HTMLElement;
      listElement.style.display = 'none';
    }
  }

}
