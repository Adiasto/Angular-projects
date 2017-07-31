import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to angular-2 app!';
    values="";
    email="";
    texty="";
    names=['aditya','akash','suyog','swati','vaishali'];
    TypedIn(event:any)
        {
            this.values+=event.target.value;
        }
    toggleColor()
        {

        }
    setText(textHere)
    {
        this.texty=textHere;
    }
    getColor()
        {
        if(this.email.length%2==0){
        return 'red';}
        else
        {
            return 'blue';
        }
        }
}