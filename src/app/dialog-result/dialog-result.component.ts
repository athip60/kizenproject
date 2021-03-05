import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-result',
  templateUrl: './dialog-result.component.html',
  styleUrls: ['./dialog-result.component.scss']
})
export class DialogResultComponent implements OnInit {

  data_result = [
    {
      'name': "Methanol",
      'tb_format': 16,
      'fm_format': 0,
      'tbml': 0,
      'fmml': 0,
      'tbmL': 0,
      'fmmL': 0,
      'totalml': 0,
      'totalmL': 0,
    },
    {
      'name': "EtOH",
      'tb_format': 8,
      'fm_format': 0,
      'tbml': 0,
      'fmml': 0,
      'tbmL': 0,
      'fmmL': 0,
      'totalml': 0,
      'totalmL': 0,
    },
    {
      'name': "Ethyl acetate",
      'tb_format': 8,
      'fm_format': 0,
      'tbml': 0,
      'fmml': 0,
      'tbmL': 0,
      'fmmL': 0,
      'totalml': 0,
      'totalmL': 0,
    },
    {
      'name': "Int",
      'tb_format': 0.1,
      'fm_format': 0.2,
      'tbml': 0,
      'fmml': 0,
      'tbmL': 0,
      'fmmL': 0,
      'totalml': 0,
      'totalmL': 0,
    },
    {
      'name': "2-NBA",
      'tb_format': 0.15,
      'fm_format': 0.4,
      'tbml': 0,
      'fmml': 0,
      'tbmL': 0,
      'fmmL': 0,
      'totalml': 0,
      'totalmL': 0,
    },
    {
      'name': "HCl 1 M",
      'tb_format': 0.25,
      'fm_format': 5,
      'tbml': 0,
      'fmml': 0,
      'tbmL': 0,
      'fmmL': 0,
      'totalml': 0,
      'totalmL': 0,
    },
    {
      'name': "HCl 1 M (Recheck)",
      'tb_format': 0.5,
      'fm_format': 0,
      'tbml': 0,
      'fmml': 0,
      'tbmL': 0,
      'fmmL': 0,
      'totalml': 0,
      'totalmL': 0,
    },
    {
      'name': "K2HPO4",
      'tb_format': 4,
      'fm_format': 4,
      'tbml': 0,
      'fmml': 0,
      'tbmL': 0,
      'fmmL': 0,
      'totalml': 0,
      'totalmL': 0,
    },
    {
      'name': "NaOH 1 M",
      'tb_format': 0.1,
      'fm_format': 0.5,
      'tbml': 0,
      'fmml': 0,
      'tbmL': 0,
      'fmmL': 0,
      'totalml': 0,
      'totalmL': 0,
    },
    {
      'name': "NaOH 1 M (Recheck)",
      'tb_format': 0.4,
      'fm_format': 0,
      'tbml': 0,
      'fmml': 0,
      'tbmL': 0,
      'fmmL': 0,
      'totalml': 0,
      'totalmL': 0,
    },
    {
      'name': "Ethyl acetate",
      'tb_format': 10,
      'fm_format': 10,
      'tbml': 0,
      'fmml': 0,
      'tbmL': 0,
      'fmmL': 0,
      'totalml': 0,
      'totalmL': 0,
    }
  ]
  data_format = {
  }

  constructor(@Inject(MAT_DIALOG_DATA) public data, public dialogRef: MatDialogRef<DialogResultComponent>) { }

  ngOnInit(): void {
    var index_format = 0
    for (let index = 0; index < this.data.length; index++) {
      if (index % 2 === 0) {
        if (this.data[index] !== 0) {
          this.data_result[index_format].tbml = this.data[index] * this.data_result[index_format].tb_format
          this.data_result[index_format].tbmL = (this.data[index] * this.data_result[index_format].tb_format) * 1000
          this.data_result[index_format].fmml = this.data[index + 1] * this.data_result[index_format].fm_format
          this.data_result[index_format].fmmL = (this.data[index + 1] * this.data_result[index_format].fm_format) * 1000
          this.data_result[index_format].totalml = (this.data[index] * this.data_result[index_format].tb_format) + (this.data[index + 1] * this.data_result[index_format].fm_format)
          this.data_result[index_format].totalmL = ((this.data[index] * this.data_result[index_format].tb_format) + (this.data[index + 1] * this.data_result[index_format].fm_format)) * 1000
          index_format += 1
        }
        else {
          index_format += 1
        }
      }
    }

  }
  closeDialog() {
    this.dialogRef.close(false)
  }

}
