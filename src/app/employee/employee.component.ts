import { Component } from "@angular/core"

@Component({
    selector : "my-employee",
    templateUrl : 'app/employee/employee.component.html'
})

export class EmployeeComponent{    
    firstName: string = "Amit";
    lastName: string = "Dhakad";
    gender: string = "Male";
    age: number = 28;
}