import { Directive,HostListener, ElementRef, Input, Output } from '@angular/core';

@Directive({
  selector: '[appInputFromat]'
})
export class InputFromatDirective {
  @Input('appInputFromat') format;
  @Output('datavalidation') dataValidation;
  constructor(private el:ElementRef) { }

  @HostListener('blur') onBlur(){
    console.log("On Blur");
    let value: string= this.el.nativeElement.value;
    switch(this.format){
      case 'lowercase':{
        this.el.nativeElement.value=value.toLowerCase();
        break;
      }
      case 'uppercase':{
        this.el.nativeElement.value=value.toUpperCase();
        break;
      }
      case 'indphone':{
        let exp=new RegExp("[0-9]","g");
        if(value.length<11 && value.match(exp)){
          this.dataValidation=true;
          this.el.nativeElement.value = '+91-'+value.substr(0,4)+'-'+value.substr(4,3)+'-'+value.substr(7,3);
        }else{
          this.dataValidation=false;
        }
        break;
      }
      default: break;
    }
    
  }
  
  

}
