import { Component } from "@angular/core"

@Component({
  selector : "my-app",
  templateUrl : 'app/app.component.html'

})

export class AppComponent{
    pageHeader :String = "Employee Details";
    isDisabled :boolean = true;
    badHtml :string = "Hello <script> alert('bad HTMl'); </script> "

}