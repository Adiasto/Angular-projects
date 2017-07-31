import {Component} from '@angular/core';

@Component({
    selector:'user-names',
    templateUrl:'./child.component.html'
})

export class UsersShow
{
    visibility='hidden';
    names=['aditya','suyog','akash','swati','smita','vaishali'];
    getVisibility()
    {
    return this.visibility;
    }
    toggle()
    {

        if(this.visibility==='visible'){
            this.visibility='hidden';
        }
        else
        {
            this.visibility='visible';
        }
    }
}