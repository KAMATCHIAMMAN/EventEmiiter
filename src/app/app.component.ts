import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ChildToParentUaingEventEmitter';
  constructor(){}
  ngOnInit(): void {
    
  }
  public childdata($event:any):void{
    console.log($event);
  }
}
