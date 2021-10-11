import { Component, Input, OnInit } from '@angular/core';
import { Player } from 'src/models/Player.model';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {

  @Input() player: Player;
  @Input() id: number;

  constructor() { }

  ngOnInit(): void {
  }

}
