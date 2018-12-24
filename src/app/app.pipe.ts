import { PipeTransform, Pipe } from "@angular/core";
@Pipe({
    name:'dateFilter'
})
export class CustomPipe implements PipeTransform{
    transform(value:Date):any{
        console.log(value);

        let myDate = value;
        let year = myDate.getFullYear();
        let month = myDate.getMonth();
        let date = myDate.getDate();
        let hours = myDate.getHours();
        let minutes = myDate.getMinutes();
        let offset = myDate.getTimezoneOffset();

        
        console.log("YEAR "+year);
        console.log("month "+month);
        console.log("date "+date);
        console.log("hours "+hours);
        console.log("minutes "+minutes);
        console.log("offset type "+ typeof offset);

        if(offset === 240){
            let result = new Date(year,month+6,date,hours+1,minutes,myDate.getSeconds());
            console.log(result);
            return result;

        }




        //gives 240 for 4 hours

    }
}