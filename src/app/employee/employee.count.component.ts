import { Component, Input, Output, EventEmitter} from "@angular/core"

@Component({
    selector : "employee-count",
    templateUrl : 'app/employee/employee.count.component.html'
})

export class EmployeeCountComponent{ 
    @Input() all:number;
    @Input() male:number;
    @Input() female:number;

    selectedRadioBtnValue:string = "All";

    @Output()
    chnagedRadiobtnValue: EventEmitter<string> = new EventEmitter<string>();

    onchangeRadioBtn(){
        this.chnagedRadiobtnValue.emit(this.selectedRadioBtnValue);
        console.log(this.selectedRadioBtnValue);
    }

} 
