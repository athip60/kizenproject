import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogResultComponent } from '../dialog-result/dialog-result.component';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  form = {
    'methanol_tb': 0,
    'methanol_fm': 0,
    'etoh_tb': 0,
    'etoh_fm': 0,
    'ethyl_acetate_1_tb': 0,
    'ethyl_acetate_1_fm': 0,
    'int_tb': 0,
    'int_fm': 0,
    'nba_tb': 0,
    'nba_fm': 0,
    'hcl_1_m_tb': 0,
    'hcl_1_m_fm': 0,
    'hcl_1_m_recheck_tb': 0,
    'hcl_1_m_recheck_fm': 0,
    'k2hpo4_tb': 0,
    'k2hpo4_fm': 0,
    'naoh_1_m_tb': 0,
    'naoh_1_m_fm': 0,
    'naoh_1_m_recheck_tb': 0,
    'naoh_1_m_recheck_fm': 0,
    'ethyl_acetate_2_tb': 0,
    'ethyl_acetate_2_fm': 0
  };
  value = []
  change = 'lg';
  watcher: Subscription;

  constructor(
    private dialog: MatDialog,
    mediaObserver: MediaObserver,
  ) {
    this.change = 'lg';
    this.watcher = mediaObserver.media$.subscribe((change: MediaChange) => {
      console.log(change.mqAlias);

      if (change.mqAlias === 'xs') {
        this.change = 'xs';
      } else if (change.mqAlias === 'sm') {
        this.change = 'sm';
      } else if (change.mqAlias === 'md') {
        this.change = 'md';
      }
      else {
        this.change = 'lg';
      }
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.value = []
    for (let index = 0; index < Object.values(this.form).length; index++) {
      this.value.push(Object.values(this.form)[index])
    }
    this.dialog.open(DialogResultComponent,
      {
        width: '90vh',
        disableClose: true,
        data: this.value
      }
    )
  }
}
