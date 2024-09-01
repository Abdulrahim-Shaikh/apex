import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdInfoComponent } from './ad-info.component';

describe('AdInfoComponent', () => {
  let component: AdInfoComponent;
  let fixture: ComponentFixture<AdInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdInfoComponent]
    });
    fixture = TestBed.createComponent(AdInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
