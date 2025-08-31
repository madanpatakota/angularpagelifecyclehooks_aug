import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  subjectname = "js"

  constructor(){
    setTimeout(()=>{
      this.subjectname = "ar";
    },5000)
  }




  // btnclick(){
  //   this.subjectname = "ar";
  // }




}
