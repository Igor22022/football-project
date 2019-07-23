import { Component, Input, ViewChild } from '@angular/core';
import { FootballService } from './services/football.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private footballService: FootballService){ }

  ngOnInit(){

  }
    
}
