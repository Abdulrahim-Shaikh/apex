import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Dialog } from 'primeng/dialog';

@Component({
  selector: 'app-ad-toolbar',
  templateUrl: './ad-toolbar.component.html',
  styleUrls: ['./ad-toolbar.component.css']
})
export class AdToolbarComponent implements OnInit {
  @ViewChild('dialog') dialog!: Dialog;
  visible: boolean = false;
  messageDialogStyle: Object = {};
  isMobileView = window.innerWidth <= 820;
  messageFormGroup: FormGroup | undefined;


  ngOnInit(): void {
    this.messageFormGroup = new FormGroup({
      text: new FormControl<string | null>(null)
    });
  }

  showMessageDialog() {
    this.visible = true;
    this.setDialogStyle();
  }

  @HostListener('window:resize',['$event'])
  onResize($event: Event) {
    this.setDialogStyle();
  }

  setDialogStyle() {
    if (this.isMobileView) {
      this.dialog.maximize();
    } else {
      this.messageDialogStyle = { width: '40vw', height: '600px' };
    }
  }

  sendMessage() {
    console.log(this.messageFormGroup?.get('text'));
  }
}
