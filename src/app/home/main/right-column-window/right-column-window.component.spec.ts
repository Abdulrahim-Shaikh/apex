import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightColumnWindowComponent } from './right-column-window.component';

describe('RightColumnWindowComponent', () => {
  let component: RightColumnWindowComponent;
  let fixture: ComponentFixture<RightColumnWindowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RightColumnWindowComponent]
    });
    fixture = TestBed.createComponent(RightColumnWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
