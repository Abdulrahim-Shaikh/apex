import { Component, OnInit } from '@angular/core';
import { Category } from '../home/interfaces/app.interfaces'

@Component({
  selector: 'app-head-navbar',
  templateUrl: './head-navbar.component.html',
  styleUrls: ['./head-navbar.component.css']
})
export class HeadNavbarComponent implements OnInit {
  categories: Category[] | undefined;

  ngOnInit(): void {
    this.categories = [
      { name: 'Jobs / Employment', code: 'NY' },
      { name: 'Items for Sale', code: 'RM' },
      { name: 'Schooling / Teaching services', code: 'LDN' },
      { name: 'Housing', code: 'IST' },
      { name: 'Business', code: 'PRS' },
      { name: 'Childcare', code: 'PRS' },
      { name: 'Community', code: 'PRS' },
      { name: 'Services', code: 'PRS' }
    ];

  }

  constructor() {}
}
