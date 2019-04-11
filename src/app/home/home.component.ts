import { Component } from "@angular/core"
import{UserPreference} from ".\./services/user.preference"

@Component({
    template : `<h1>Home</h1>
                Color Preference : {{colordata}}
                <br>
                <input type="text" [(ngModel)]="colordata" [style.background]="colordata">
                `,
   // providers:[UserPreference]
})

export class HomeComponent{     
    constructor(private __preference:UserPreference){        
    }

    get colordata():string{
        return this.__preference.colorPreference;
    }

    set colordata(value:string){
         this.__preference.colorPreference = value;
    }
 }