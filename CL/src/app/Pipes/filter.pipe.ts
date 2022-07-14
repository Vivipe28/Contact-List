import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filter'
})

export class FilterPipe implements PipeTransform{
    transform(value: any, arg: any): any {
        
        if(arg === ''){
            return value;
        } else{
          
        const resultContact = [];
        for(const contact of value){
            if(contact.name.indexOf(arg) > -1){
                resultContact.push(contact)
            }
        }
        return resultContact  
        }

    }
    
}