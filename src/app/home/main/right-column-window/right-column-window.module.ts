import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RightColumnWindowComponent } from './right-column-window.component';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from 'primeng/divider';
import { RippleModule } from 'primeng/ripple';
import { DialogModule } from 'primeng/dialog';
import { AdArticleComponent } from './ad-article/ad-article.component';
import { AdInfoComponent } from './ad-info/ad-info.component';
import { AdToolbarComponent } from './ad-toolbar/ad-toolbar.component';
import { ChipModule } from 'primeng/chip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
  declarations: [
    RightColumnWindowComponent,
    AdArticleComponent,
    AdInfoComponent,
    AdToolbarComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CommonModule,
    AvatarModule,
    ButtonModule,
    TagModule,
    ScrollPanelModule,
    InputTextModule,
    DividerModule,
    RippleModule,
    DialogModule,
    ChipModule,
    InputTextareaModule
  ],
  exports: [
    RightColumnWindowComponent
  ]
})
export class RightColumnWindowModule { }
