import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

 id:number=10;
 valueInput:string='mark';
 
 isClicked="not clicked";
 

  get getId(){
    return this.id;
  }

  onClickButton(){
    this.isClicked="clicked";
  }

  onInputChange(event:Event){
this.valueInput=(<HTMLInputElement>event.target).value;
  }
  
}
