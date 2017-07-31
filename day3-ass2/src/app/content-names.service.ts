import { Injectable } from '@angular/core';

@Injectable()
export class ContentNamesService {
    names=['aditya','akash','suyog','swati','smita','vaishali'];
    getData()
    {
        return this.names
    }

}
