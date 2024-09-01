import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftColumnListComponent } from './left-column-list.component';

describe('LeftColumnListComponent', () => {
  let component: LeftColumnListComponent;
  let fixture: ComponentFixture<LeftColumnListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeftColumnListComponent]
    });
    fixture = TestBed.createComponent(LeftColumnListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
