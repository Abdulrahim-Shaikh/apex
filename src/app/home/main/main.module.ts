import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { RightColumnWindowModule } from './right-column-window/right-column-window.module';
import { AdService } from './services/ad.service';
import { LeftColumnListComponent } from './left-column-list/left-column-list.component';
import { RightColumnWindowComponent } from './right-column-window/right-column-window.component';

@NgModule({
  declarations: [
    MainComponent,
    LeftColumnListComponent,
  ],
  imports: [
    CommonModule,
    RightColumnWindowModule,
    AvatarModule,
    InputTextModule,
  ],
  providers: [AdService],
  exports: [MainComponent]
})
export class MainModule { }
