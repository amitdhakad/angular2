import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'

import { AppComponent }  from './app.component';
import { EmployeeComponent  }  from './employee/employee.component';

import { DirectiveTestComponent, CoustomStrDirective ,NewCoustom}  from './directive/directive.test.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, EmployeeComponent, DirectiveTestComponent, CoustomStrDirective, NewCoustom],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
