import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-view',
  templateUrl: './child-view.component.html',
  styleUrls: ['./child-view.component.css'],
  inputs : ['parentData']
})
export class ChildViewComponent implements OnInit {

  public parentData:string;
  constructor() { }

  ngOnInit() {
  }

}
