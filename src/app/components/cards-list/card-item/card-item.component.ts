import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Player } from 'src/models/Player.model';
import { DetailDialogComponent } from '../../detail-dialog/detail-dialog.component';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent {

  @Input() player: Player;
  @Input() id: number;
  PROFILE_PIC =
  'https://maricarmencamacho.com/wp-content/uploads/2021/01/defaultProfile.jpg';

  constructor(public dialog: MatDialog) { }

openDialog() : void {
  this.dialog.open(DetailDialogComponent, {
    data: {
      name: this.player.name,
      email: this.player.email,
      birthdate: this.player.birthDate,
      nationality: this.player.nationality,
    }
  });
}
}
