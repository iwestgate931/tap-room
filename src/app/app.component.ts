import { Component } from '@angular/core';
import { Keg } from './../keg';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portland Tap Room';

  masterBeerList: Keg[] = [
    {
      img: './assets/img/fancy-barrel.jpg',
      name: 'Fancy Beer',
      brand: 'The Fanciest',
      price: 5,
      abv: 4.8,
      pints: 124
    },
    {
      img: './assets/img/whiskey-barrel.jpg',
      name: 'Pliny the Elder',
      brand: 'Russian River',
      price: 9,
      abv: 5.5,
      pints: 124
    },
    {
      img: './assets/img/oak-barrel.jpg',
      name: 'Miller Lite',
      brand: 'Miller',
      price: 3,
      abv: 3.4,
      pints: 124
    }
  ]
  //
  // masterBeerList: Keg[] = [
  //   {
  //     img: './assets/img/fancy-barrel.jpg',
  //     name: 'Fancy Beer',
  //     brand: 'The Fanciest',
  //     price: 5,
  //     abv: 4.8,
  //     pints: 124
  //   },
  //   {
  //     img: './assets/img/whiskey-barrel.jpg',
  //     name: 'Pliny the Elder',
  //     brand: 'Russian River',
  //     price: 9,
  //     abv: 5.5,
  //     pints: 124
  //   },
  //   {
  //     img: './assets/img/oak-barrel.jpg',
  //     name: 'Miller Lite',
  //     brand: 'Miller',
  //     price: 3,
  //     abv: 3.4,
  //     pints: 124
  //   }
  // ]
}
