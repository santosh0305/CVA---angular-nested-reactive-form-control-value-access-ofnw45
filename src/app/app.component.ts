import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

  constructor(private builder: FormBuilder) {}

  formGroup: FormGroup;

  cars = [
    {
      make: 'chevrolet',
      year: 1987,
      color: 'red'
    },
    {
      make: 'chevrolet',
      year: 2001,
      color: 'black'
    },
    {
      make: 'ford',
      year: 2015,
      color: 'blue'
    }
  ]

  ngOnInit() {
    this.formGroup = this.setUpForm(this.cars);
  }

  setUpForm(cars: any[] ) {
    return this.builder.group({
      cars: this.builder.array(cars.map((car) => this.createCar(car)))
    });
  }
  
  createCar(car: any) {
    return this.builder.control({
      make: car.make,
      color: car.color,
      year: car.year
    });
  }

}
