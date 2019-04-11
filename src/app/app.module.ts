import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'
import { HttpModule }   from '@angular/http'
import {RouterModule, Routes} from "@angular/router"

import { AppComponent }  from './app.component';
import { EmployeeComponent  }  from './employee/employee.component';
import { EmployeeListComponent  }  from './employee/employee.list.component';
import { EmployeeCountComponent  }  from './employee/employee.count.component';
import { HomeComponent  }  from './home/home.component';
import { PageNotFoundComponent  }  from './other/page.not.found.component';
import {EmployeeService} from "./employee/employeee.service";
import{UserPreference} from "./services/user.preference"

import {SimpleComponent} from "./other/simple.component"

import { DirectiveTestComponent, CoustomStrDirective ,NewCoustom}  from './directive/directive.test.component';

import { EmployeeTitlePipe  }  from './employee/employee.title.pipe';

const appRoutes : Routes =[{path:'home', component:HomeComponent},
                           {path:'employees', component:EmployeeListComponent},
                           {path:'employees/:code', component:EmployeeComponent},
                           {path:'', redirectTo:"/employees", pathMatch:'full'},
                           {path:'**', component:PageNotFoundComponent}
                          ]

@NgModule({
  imports:[ BrowserModule, 
            FormsModule, 
            HttpModule, 
            RouterModule.forRoot(appRoutes,{useHash:true})],

  declarations: [ AppComponent, 
                  EmployeeComponent, 
                  DirectiveTestComponent,
                  CoustomStrDirective, 
                  NewCoustom,
                  EmployeeListComponent,
                  EmployeeTitlePipe, 
                  EmployeeCountComponent, 
                  SimpleComponent,
                  HomeComponent, 
                  PageNotFoundComponent],
  providers:[EmployeeService, UserPreference],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
