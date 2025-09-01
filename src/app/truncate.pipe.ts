import { Pipe, PipeTransform } from '@angular/core';


//uppercase , lowercase default pipes of angualr 

// truncate i have created custom pipe
@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }


   //unknown and any???
   transform(value: string , limit:number = 4 , substring:string) {
        console.log("value is           " , value);

        if(value.length >= limit){
            value = value.slice(0, limit) + ("...").concat(substring);
        }
        return value;
   }
}
