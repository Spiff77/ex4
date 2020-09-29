import { Component, OnInit } from '@angular/core';
import {Vol} from '../models/vol';

@Component({
  selector: 'app-vols-list',
  templateUrl: './vols-list.component.html',
  styleUrls: ['./vols-list.component.css']
})
export class VolsListComponent implements OnInit {

  vols: Vol[] = [
    { id: 1,
      volNumber: '8475',
      departureAirportCode: 'CDG',
      arrivalAirportCode: 'RAK',
      departureDate: new Date(2019, 1, 2,  10, 34, 0),
      arrivalDate: new Date(2019, 1, 2,  12, 34, 0),
      late: false,
      price: 300
    },
    { id: 2,
      volNumber: '1445',
      departureAirportCode: 'CDG',
      arrivalAirportCode: 'RKV',
      departureDate: new Date(2019, 1, 2,  10, 34, 0),
      arrivalDate: new Date(2019, 1, 2,  12, 34, 0),
      late: false,
      price: 300
    },
    { id: 3,
      volNumber: '9934',
      departureAirportCode: 'CDG',
      arrivalAirportCode: 'NCE',
      departureDate: new Date(2019, 1, 2,  10, 34, 0),
      arrivalDate: new Date(2019, 1, 2,  12, 34, 0),
      late: true,
      price: 300
    },
    { id: 4,
      volNumber: '3944',
      departureAirportCode: 'CDG',
      arrivalAirportCode: 'RAK',
      departureDate: new Date(2019, 1, 2,  10, 34, 0),
      arrivalDate: new Date(2019, 1, 2,  12, 34, 0),
      late: false,
      price: 300
    }
  ];

  constructor() { }

  ngOnInit(): void {
    console.log(this.vols);
  }

}
