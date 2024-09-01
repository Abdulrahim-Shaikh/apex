import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdToolbarComponent } from './ad-toolbar.component';

describe('AdToolbarComponent', () => {
  let component: AdToolbarComponent;
  let fixture: ComponentFixture<AdToolbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdToolbarComponent]
    });
    fixture = TestBed.createComponent(AdToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
