import { Component, OnInit } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kizenproject';
  private roles: string[];
  isLoggedIn = false;
  name: string;
  surname: string;
  email: string;
  opened = true;
  change = 'side';
  routePageTo = ''
  pathShowToolBar = {
    'หน้าหลัก': 'หน้าหลัก',
    'home': 'หน้าหลัก',
    'user-data': 'ข้อมูลผู้เข้าพัก',
    'lease-agreement': 'สัญญาเช่า',
    'room': 'ผังห้องพัก',
    'bill': 'สร้างใบแจ้งชำระเงิน',
    'income': 'ข้อมูลรายรับ-รายจ่าย',
  }
  watcher: Subscription;

  constructor(
    mediaObserver: MediaObserver,
    public router: Router
  ) {
    this.opened = true;
    this.change = 'side';
    this.watcher = mediaObserver.media$.subscribe((change: MediaChange) => {
      if (change.mqAlias === 'xs') {
        this.opened = false;
        this.change = 'over';
      } else if (change.mqAlias === 'sm') {
        this.opened = false;
        this.change = 'over';
      } else if (change.mqAlias === 'md') {
        this.opened = true;
        this.change = 'side';
      }
      else {
        this.opened = true;
        this.change = 'side';
      }
    });

  }

  ngOnInit() {
  }

  routePathTo(path) {
    // this.routePageTo = this.pathShowToolBar[`${path}`]
  }
}
