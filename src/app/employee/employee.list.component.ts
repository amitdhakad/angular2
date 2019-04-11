import { Component , Directive ,ElementRef, HostListener , OnInit  } from "@angular/core"
import {IEmployee} from "./employee";
import {EmployeeService} from "./employeee.service";
import{UserPreference} from ".\./services/user.preference"
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/retrywhen';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/scan';

import {ISubscription} from 'rxjs/Subscription';

@Component({
    selector : "employeep-list",
    templateUrl : 'app/employee/employee.list.component.html',
    //providers:[EmployeeService,UserPreference]
})

export class EmployeeListComponent implements OnInit{    
    employess:IEmployee[];
    selectedRadioBtnValue:string = "All";
    statusMessage:string = "Loading data.... Please wait";
    subscription:ISubscription;
    constructor(private _employeeService:EmployeeService, private __preference:UserPreference){      
      
    }      

   
    get colordata():string{
        return this.__preference.colorPreference;
    }

    set colordata(value:string){
         this.__preference.colorPreference = value;
    }
    
    ngOnInit(){
       // this.employess = this._employeeService.getEmployee();
        this.subscription = this._employeeService.getEmployeeHttp()
                        .retryWhen((err) => {
                                return err.scan((retryCount)=>{
                                    retryCount += 1;
                                    if(retryCount < 6){
                                        this.statusMessage = "retrying attemp" + retryCount;
                                        return retryCount;
                                    }else
                                        throw(err);
                                        
                                },0).delay(2000)
                            }
                        )
                        .subscribe(employeeData => this.employess = employeeData
                        ,error => this.statusMessage = "Problem with the server please try after some time");
    }

    cancelRequestSubscription():void{
        this.statusMessage = "request cancle";
        this.subscription.unsubscribe();
    }

    getemployee():void{
        this.employess = [
            {code : "Emp01", name: "Tom", gender:"Male", salary:103600.5896, dob:"12/07/1990"},
            {code : "Emp02", name: "Tomy", gender:"Male", salary:1000.963258741, dob:"2/07/1998"},
            {code : "Emp03", name: "Anna", gender:"Female", salary:10700, dob:"6/07/1590"},            
            {code : "Emp04", name: "Tim", gender:"Male", salary:10060, dob:"9/07/1990"},
            {code : "Emp05", name: "Pam", gender:"Female", salary:10800, dob:"12/07/1990"},
            {code : "Emp06", name: "Teena", gender:"Female", salary:10900, dob:"11/09/1960"},
            {code : "Emp07", name: "Tom", gender:"Male", salary:1025500, dob:"9/07/1997"} ,
            {code : "Emp08", name: "Amit", gender:"Male", salary:100070, dob:"02/07/1990"}  
        ]
    }
    
    trackByEmployeeCode(index:number, employee:any): string {
        //console.log(employee.code,"employee.code");
        return employee.code;        
    }

    onEmployeeradiobtnchnage(selectedBtnValue:string):void{
        this.selectedRadioBtnValue = selectedBtnValue;
    }

    EmpCount():number{
        return this.employess.length;
    }

    maleEmpCount():number{
        return this.employess.filter(e=> e.gender === "Male").length;
    }

    femaleEmpCount():number{
        return this.employess.filter(e=> e.gender === "Female").length;
    }
    
    
   

    
} 
