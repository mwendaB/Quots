import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

quotes:Quote[]=[
    new Quote("Brian","Stephen King","Get busy living or get busy dying.",4,3,new Date(2021,1,12)),
    new Quote("Mike","Mae West","You only live once, but if you do it right, once is enough.",3,2,new Date(2021,1,16)),
    new Quote("Tom","Thomas A. Edison","Many of life’s failures are people who did not realize how close they were to success when they gave up.",2,1, new Date(2012,12,12))
  ]
   
  constructor() { }

  ngOnInit(): void {
  }

}
