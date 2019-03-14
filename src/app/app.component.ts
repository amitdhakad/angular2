import { Component } from "@angular/core"

@Component({
  selector : "my-app",
  templateUrl : 'app/app.component.html'

})

export class AppComponent{
    pageHeader :String = "Employee Details";
    isDisabled :boolean = false;
    badHtml :string = "Hello <script> alert('bad HTMl'); </script> "
    name:string = "amit";

    condition:boolean = false;
    testValue:any = {"name":"test","lname":"dhakad"};


}