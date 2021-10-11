import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Player } from 'src/models/Player.model';
import { Position } from 'src/models/Positon.model';

@Injectable({
  providedIn: 'root',
})
export class SoccerCardsService {
  constructor() { }

  playersEvent = new Subject<Player[]>();

  private players: Player[] = [
    {
      name: 'Lionel Messi',
      position: 'MCO',
      nationality: 'Argentino',
      email: 'messi@s.com',
      gender: 'Masculino',
      imgUrl: 'data:image/jpeg;base64,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',
      birthDate: '24/05/1987',
    },
    {
      name: 'Cristiano Ronaldo',
      position: 'ST',
      nationality: 'Portugués',
      email: 'cristiano@s.com',
      gender: 'Masculino',
      imgUrl: 'https://i.pinimg.com/originals/ee/fe/56/eefe561e6626aec9448210d52d8bfb17.png',
      birthDate: '05/02/1985',
    },
    {
      name: 'Neymar Junior',
      position: 'EI',
      nationality: 'Brasileño',
      email: 'neymar@s.com',
      gender: 'Masculino',
      imgUrl: 'https://cdn.soccerwiki.org/images/player/38457.png',
      birthDate: '05/02/1992',
    },
    {
      name: 'Amadine Henry',
      position: 'MC',
      nationality: 'Francesa',
      email: 'henry@s.com',
      gender: 'Femenino',
      imgUrl: 'https://b.fssta.com/uploads/application/soccer/headshots/23716.vresize.350.350.medium.19.png',
      birthDate: '28/09/1989',
    },
    {
      name: 'Kylian Mbappe',
      position: 'ST',
      nationality: 'Frances',
      email: 'mbappe@s.com',
      gender: 'Masculino',
      imgUrl: 'https://sortitoutsi.net/uploads/megapacks/cutoutfaces/originals/13.10/85139014.png',
      birthDate: '20/12/1998',
    },
  ];

  private positions: Position[] = [
    { value: 'ST', viewValue: 'Delantero' },
    { value: 'EI', viewValue: 'Extremo izquierdo' },
    { value: 'ED', viewValue: 'Extremo derecho' },
    { value: 'MCO', viewValue: 'Volante ofensivo' },
    { value: 'MC', viewValue: 'Volante mixto' },
    { value: 'MCD', viewValue: 'Volante defensivo' },
    { value: 'RB', viewValue: 'Lateral derecho' },
    { value: 'LB', viewValue: 'Lateral izquierdo' },
    { value: 'DFC', viewValue: 'Defensor central' },
    { value: 'GK', viewValue: 'Arquero' }
  ];

  getPlayers() {
    if (!localStorage.getItem("players")) localStorage.setItem('players', JSON.stringify(this.players.slice()));
    return JSON.parse(localStorage.getItem("players"));
  }

  getPositions() {
    return this.positions.slice();
  }

  addPlayer(player: Player) {
    this.players.push(player);
    localStorage.setItem('players', JSON.stringify(this.players.slice()));
    this.playersEvent.next(this.players.slice());
  }
}
