import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { SoccerCardsService } from '../cards-list/soccer-cards.service';
import { Position } from '../../../models/Positon.model';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss'],
})
export class CardFormComponent implements OnInit {
  genders: string[] = ['Masculino', 'Femenino'];
  positions: Position[] = [];
  PROFILE_PIC =
    'https://maricarmencamacho.com/wp-content/uploads/2021/01/defaultProfile.jpg';
  addPlayerForm: FormGroup;

  constructor(
    private soccerCardsService: SoccerCardsService,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.positions = this.soccerCardsService.getPositions();
    this.addPlayerForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(90),
        // Validators.pattern('[-_a-zA-Z]*'),
      ]),
      position: new FormControl(null, [Validators.required]),
      nationality: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(40),
        Validators.pattern('[-_a-zA-Z]*'),
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
        Validators.minLength(3),
      ]),
      imgUrl: new FormControl(null, Validators.minLength(10)),
      gender: new FormControl('Masculino', Validators.required),
      birthdate: new FormControl(null, Validators.required),
    });
  }

  onSubmit(form: NgForm): void {
    const value = form.value;

    const newPlayer = {
      name: value.name,
      position: value.position,
      nationality: value.nationality,
      email: value.email,
      gender: value.gender,
      imgUrl: value.imgUrl ? null : this.PROFILE_PIC,
      birthDate: this.datePipe.transform(value.birthdate, 'dd/MM/yyyy'),
    };
    this.soccerCardsService.addPlayer(newPlayer);
    form.reset();
  }
}
