import { Component ,OnInit } from "@angular/core"
import {IEmployee} from "./employee";
import {EmployeeService} from "./employeee.service";
import {ActivatedRoute, Router} from "@angular/router"

@Component({
    selector : "my-employee",
    templateUrl : 'app/employee/employee.component.html',
     providers:[EmployeeService]
})

export class EmployeeComponent{    
    // firstName: string = "Amit";
    // lastName: string = "Dhakad";
    // gender: string = "Male";
    // age: number = 28;
    
    employess:IEmployee
    showDetails:boolean = false;
    statusMessage:string

    constructor(private __activatedRoute : ActivatedRoute, 
                private __empService :EmployeeService,
                private __router : Router){
    }

    backtoEmp():void{
        this.__router.navigate(["/employees"]);
    }

    ngOnInit() {
        let empCode : string = this.__activatedRoute.snapshot.params['code'];
        // this.__empService.getEmployeeCode(empCode)
        //             .subscribe(employeeData =>{
        //                   if(employeeData == null)
        //                     this.statusMessage  = "Employee code does not exist "
        //                   else
        //                     this.employess = employeeData;
                          
        //             },error => this.statusMessage = "Problem with the server please try after some time");
        
        this.__empService.getPromiseEmployeeCode(empCode)
                        .then(employeeData =>{
                          if(employeeData == null)
                            this.statusMessage  = "Employee code does not exist "
                          else
                            this.employess = employeeData;
                          
                    }).catch(error => this.statusMessage = "Problem with the server please try after some time");
    }

    toggleDetails():void{
        this.showDetails = !this.showDetails;
    }
} 
