import { Component } from '@angular/core';

@Component({
  selector: 'app-show-cars',
  templateUrl: './show-cars.component.html',
})
export class ShowCarsComponent {
  firstCar: string = '/assets/picts/teslaFirst.jpg';
  secondCar: string = "/assets/picts/teslaSecond.jpg";
  thirdCar: string = "/assets/picts/teslaThird.jpg";
  fourCar: string = "/assets/picts/teslaFour.jpg"
}
