import{Injectable} from '@angular/core'

@Injectable()
export class UserPreference{
    constructor(){
    console.log("create object ");
    }
    colorPreference:string = "orange";
}