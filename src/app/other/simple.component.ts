import{Component, Input, OnChanges, SimpleChange} from "@angular/core";
@Component({
    selector : "simple",
    template : " Your Entered :  {{simpleInput}}"

})

export class SimpleComponent{
    @Input() simpleInput : string ;

    ngOnChanges(SimpleChange:any){      
        for (let propertyName in SimpleChange){
             let change = SimpleChange[propertyName];
             //console.log(propertyName+" CurrentValue : " + JSON.stringify(change.currentValue)+ "  OldValue : "+JSON.stringify(change.previousValue));
             console.log(`${propertyName} CurrentValue : ${JSON.stringify(change.currentValue)} OldValue : ${JSON.stringify(change.previousValue)}`);
        }
    }
}