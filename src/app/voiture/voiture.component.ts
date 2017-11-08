import { Component, OnInit } from '@angular/core';

export class Voiture {
marque: string;
modèle: string;
année: number;
picture: string;
price: string;
couleur: string;
}

const VOITURES: Voiture[] = [
  {
    marque: 'Mercedes', modèle: '220', année: 2013,
    picture: 'https://i.pinimg.com/originals/9a/8d/11/9a8d118b1036a78eb9cab9dca0718328.jpg', 
    price: '150/1j', couleur: 'black'
  },
  {
    marque: 'Jeep', modèle: 'renegade', année: 2015,
    // tslint:disable-next-line:max-line-length
    picture: 'https://www.jeep.fr/content/dam/jeep/crossmarket/model/renegade/trims/sport/colorizer/387x238/monotone/sport_granitecrystal_standard.png',
    price: '100/1j', couleur: 'white'
  }
];


@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.css']
})
export class VoitureComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
