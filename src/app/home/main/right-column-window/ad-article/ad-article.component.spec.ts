import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdArticleComponent } from './ad-article.component';

describe('AdArticleComponent', () => {
  let component: AdArticleComponent;
  let fixture: ComponentFixture<AdArticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdArticleComponent]
    });
    fixture = TestBed.createComponent(AdArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
