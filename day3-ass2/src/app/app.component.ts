import { Component } from '@angular/core';
import { ContentNamesService } from './content-names.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers : [ContentNamesService]
})
export class AppComponent {
  title = 'Welcome to angular-2 app!';
    names=[];
    constructor(private _names:ContentNamesService)
    {
    }
    ngOnInit()
    {
        this.names=this._names.getData();
    }
}
