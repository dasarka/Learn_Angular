import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'titlecast'
})
export class TitleCastPipe implements PipeTransform{
    transform(value : string): any{
        if(!value){
            return null;
        }
        let preposition = ['of','the'];
        let words =value.split(' ');
        
        value=(words[0].substr(0,1).toUpperCase()+words[0].substr(1,words[0].length).toLowerCase());
        for(var i=1;i<words.length;i++){
            value += ' ';
            words[i]=words[i].toLowerCase();
            value +=(preposition.includes(words[i]))? 
                    words[i] :
                    (words[i].substr(0,1).toUpperCase()+words[i].substr(1,words[i].length).toLowerCase())
        }
        return value;
    }
}