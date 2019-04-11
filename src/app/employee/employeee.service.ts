import{ Injectable } from  "@angular/core"
import {IEmployee} from "./employee";
import { Http, Response }   from '@angular/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/Observable/throw'
import 'rxjs/add/operator/toPromise';
@Injectable()
export class EmployeeService{

    constructor(private _http : Http){};
    getEmployee():IEmployee[] {
        return [
            {code : "Emp01", name: "Tom", gender:"Male", salary:103600, dob:"12/07/1990"},
            {code : "Emp02", name: "Tom", gender:"Male", salary:1000, dob:"10/07/1998"},
            {code : "Emp03", name: "Tom", gender:"Female", salary:10700, dob:"09/07/1590"},            
            {code : "Emp04", name: "Tom", gender:"Male", salary:10060, dob:"01/07/1990"}               
        ]
    }

    getEmployeeHttp():Observable<IEmployee[]> {
        return this._http.get("http://localhost:4002/employeesData")
                .map( (response : Response) => <IEmployee[]>response.json())
                //.catch((error : Response) => Observable.throw(error));
                .catch(this.handleError);
    }

    getEmployeeCode(empCode:string):Observable<IEmployee> {
        return this._http.get("http://localhost:4002/employeesData?code="+empCode)
                .map( (response : Response) => <IEmployee>response.json())
                //.catch((error : Response) => Observable.throw(error));
                .catch(this.handleError);
    }

    getPromiseEmployeeCode(empCode: string): Promise<IEmployee> {
        return this._http.get("http://localhost:4002/employeessData?code="+empCode)
            .map((response: Response) => <IEmployee>response.json())
            .toPromise()
            .catch((error: Response) => {throw(error)});
    }    

    handleError(error : Response){
        console.error(error);
        return Observable.throw(error);
    }
    
}