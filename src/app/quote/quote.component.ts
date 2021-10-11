import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl:'./quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

quotes:Quote[]=[
    new Quote("Brian","Stephen King","Get busy living or get busy dying.",4,3,new Date(2021,1,12)),
    new Quote("Mike","Mae West","You only live once, but if you do it right, once is enough.",3,2,new Date(2021,1,16)),
    new Quote("Tom","Thomas A. Edison","Many of life’s failures are people who did not realize how close they were to success when they gave up.",2,1, new Date(2012,12,12))
  ]
   
  get sortQuotes(){
    return this.quotes.sort((a,b) => {
       return b.likes - a.likes;
     })
   }

   addNewQuote(quote:any){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
  
    this.quotes.push(quote);
  }

  deleteQuote(isComplete:any,index:any){
    if(isComplete){
      let toDelete = confirm(`Are you sure you want to delete a quote by ${this.quotes[index].author}?`)
      if(toDelete){
        this.quotes.splice(index,1);
      }
    }

  }
  constructor() { }

  ngOnInit(): void {
  }

}
