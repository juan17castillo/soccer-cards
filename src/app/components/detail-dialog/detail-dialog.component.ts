import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Player } from 'src/models/Player.model';

interface playerInfo {
  name: string;
  email: string;
  birthdate: string;
  nationality: string;
}


@Component({
  selector: 'app-detail-dialog',
  templateUrl: './detail-dialog.component.html',
  styleUrls: ['./detail-dialog.component.scss']
})
export class DetailDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: playerInfo) {}

}
