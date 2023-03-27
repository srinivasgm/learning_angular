import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styles:[
    `
    .log{
      color:red
    }
    `
  ],
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {

  isClicked=false;
  clicks:Date[]=[];
  

  logClicks(){
    
    this.isClicked=!this.isClicked;
    this.clicks.push(new Date());
  }
  

}
