import { Component, Input , 
  OnChanges, SimpleChanges,
OnInit,

AfterViewInit,
AfterViewChecked,
ViewChild,
ElementRef,
AfterContentInit,
AfterContentChecked,
ContentChild,
DoCheck,
OnDestroy , } from '@angular/core';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css']
})

//angular create the object for this componnt
export class CompAComponent implements
 OnChanges , 
 OnInit  ,
  AfterViewInit ,
  AfterContentInit ,
   OnDestroy 
AfterContentChecked,
AfterViewChecked,
DoCheck
 {

  //@Input('firstValue') fValue:any;
  @Input('name') fname:any;



  collegeName = "Sksc";  //db


  //Sksc degree college




  data:any = [];


//1 . its the part of the javascrp
//2 . consutro can acceipt pramaetsr.
  constructor(){
     console.log("consutiror is loaded");
  }


  // 10 , 20 ,30 ,40

  //stage 1 

  //suitbale palce to handle the input values from the parent.
  ngOnChanges(changes : any): void{
    console.log(changes);
    //console.log
    // console.log(this.fValue);
    // this.fValue = this.fValue + 10;

    if(this.fname == "js"){
        this.fname = "Javascript"
    }
    else{
        this.fname = "Angular"
    }
  }


  //subscribes , Data init  , when its loading>>>>>>>>>>>>>
  ngOnInit(): void {
    let test = [10,20,30];
    this.data.push(...test); //[10,20,30]  // spread paramter
   // this.data.push(test); //[[10,20,30]]    // without spread paramter
  }




  @ViewChild('paragraph') paragraph!:ElementRef;
  //wen view you got it.


  //View init 

//if you want to get the value of element this is best place
//or if you try to update the elements which are configured by the viewchild

 //4 load


 
  //3 load
  @ContentChild('paragraph1') paragraph1!:ElementRef;
  ngAfterContentInit():void{
    setInterval(()=>{
            this.paragraph1.nativeElement.style.color           = 'purple';
            this.paragraph1.nativeElement.style.backgroundColor = 'gray';
            this.paragraph1.nativeElement.style.fontSize        = '20px';
            //this.collegeName = "Sksc deggree college";
        },5000)
      }



  ngAfterViewInit(): void {
     setInterval(()=>{
        this.paragraph.nativeElement.style.color           = 'purple';
        this.paragraph.nativeElement.style.backgroundColor = 'gray';
        this.paragraph.nativeElement.style.fontSize        = '20px';

        this.collegeName = "Sksc deggree college";
     },2000)
     
     //this.paragraph.nativeElement.style.color = 'purple';

    //  this.collegeName == "sksc"

  }


// ngOnInit *

//unsubscribe or data related kill
  ngOnDestroy(): void {
    
  }


  // //observable

  // //your view child is uppdated
  // ngAfterViewChecked(): void {
    
  // }


  // //your content is updated
  // ngAfterContentChecked(): void {
    
  // }


  // //20 elements
  // //if you update anything in component 
  // ngDoCheck(): void {
    
  // }
  
  


}
