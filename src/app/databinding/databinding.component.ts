import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styles:[
    `
    .valid{
      color:green;
      background-color:red;
    }
    `
  ]
})
export class DatabindingComponent {

  username:string="";

  resetName(){
    this.username="";
  }

  getColor(){
    if(this.username.length>3)
    return "green";
    else
    return "red"
  }

}
