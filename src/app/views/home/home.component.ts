import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'cf-home',
  template: `
    <p>
     Now {{now}}
     Tomorrow {{tomorrow}}
    </p>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor(){}

  now =  moment().format();
  tomorrow = moment().add(1,"days");

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
