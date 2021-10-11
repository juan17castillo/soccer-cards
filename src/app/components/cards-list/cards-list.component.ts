import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Player } from 'src/models/Player.model';
import { SoccerCardsService } from './soccer-cards.service';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss'],
})
export class CardsListComponent implements OnInit, OnDestroy {
  players: Player[];
  private playersSub: Subscription;

  constructor(private soccerCardsService: SoccerCardsService) { }

  ngOnInit(): void {
    this.players = this.soccerCardsService.getPlayers();
    this.playersSub = this.soccerCardsService.playersEvent.subscribe(
      (players: Player[]) => {
        this.players = players;
      }
    );
  }

  ngOnDestroy(): void {
    this.playersSub.unsubscribe();
  }
}
