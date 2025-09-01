import { Directive , ElementRef, Input, OnInit , OnChanges,
   SimpleChanges , HostListener , HostBinding } from '@angular/core';
// [ngStyle]
//ngoninit , ngOnchanges 

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective 
 implements  OnChanges , OnInit {
  constructor(private el:ElementRef) { }
  //native place ---> exact name --> Proddatur ,
  //nativeElement   --> exct element details
  

   @Input('eleColor') eleColor?:string;
   @Input('eleFontSize') eleFontSize?:string;
   @Input('eleBackgroundColor') eleBackgroundColor?:string

  //  stage1
  ngOnChanges(changes: SimpleChanges): void {
       //after 1 sec 
      // setTimeout(()=>{
      //   this.el.nativeElement.style.color = this.eleColor;
       //},1000)
  }


  //stage2
  ngOnInit(): void {
      //  this.el.nativeElement.style.backgroundColor = this.eleBackgroundColor
      //  this.el.nativeElement.style.color           = this.eleColor;
      //  this.el.nativeElement.style.fontSize        = this.eleFontSize;
  }
  

  //<p style="{background-color:'blue'}"></p>

  @HostBinding('style.color') elementcolor = "purple";

  //event datatbinding
  @HostListener('mouseenter') onmouseenter(){
    this.el.nativeElement.style.backgroundColor = 'green';
    this.elementcolor = 'white';
  }


  //event datatbinding
  @HostListener('mouseleave') onmouseleave(){
    this.el.nativeElement.style.backgroundColor = this.eleBackgroundColor;
    this.elementcolor = 'white';
  }




}






      //  //let x:any = "Madan";
      
      // //let y = x as string;

      // //instruciton to the ts compilet then it will give the intellisence


      //  console.log("From Directive", this.el);   // elementref 
      //  console.log("From Directive", this.el.nativeElement); // actual elementr



      // //  let ele = this.el.nativeElement.style.backgroundColor as HTMLElement;
      // //  ele.style.backgroundColor = "yellow"; 
      