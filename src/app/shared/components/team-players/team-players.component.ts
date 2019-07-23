import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'team-players',
  templateUrl: './team-players.component.html',
  styleUrls: ['./team-players.component.css']
})
export class TeamPlayersComponent implements OnInit {
	@Input() inputedTeam: any;

  constructor() { }

  ngOnInit() {
  }

}
