import { Component, OnInit } from '@angular/core';
import { FootballService } from '../../services/football.service';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { TeamInfo } from '../../shared/interfaces/team-info';
import { TeamPlayersComponent } from '../../shared/components/team-players/team-players.component';

@Component({
  selector: 'england',
  templateUrl: './england.component.html',
  styleUrls: ['./england.component.css']
})
export class EnglandComponent implements OnInit {

	leagueCountry: string;
  rounds: Array<any> = []; 
  leagueName: string;
  teams: Array<any> = []; // масив зі списком команд у лізі
  allTeamsInfo: Array<any> = []; // масив з усіма командами і інфою для таблиці (містить об'єкти)
  currentTeam: any;
  styleExp: string = "none";

  changeStyle(){
    if(this.styleExp == "none")
      this.styleExp = "inline";
    else
      this.styleExp == "none";
  }
  

  constructor(private footballService: FootballService, private route: ActivatedRoute) { }

  ngOnInit() {
  	this.leagueCountry = this.route.routeConfig.path;

    this.footballService.getLeagueInfo(this.leagueCountry) 
    .subscribe(
      (data)=>{
        this.rounds = data.rounds;
        this.leagueName = data.name;

      //Записуємо усі команди, які є в лізі
        this.teams = this.footballService.getAllTeams(this.rounds);
      //Записуємо усі дані з інфою по лізі
        this.allTeamsInfo = this.footballService.makeTableInfo(this.teams, this.rounds);
        // console.log(this.allTeamsInfo);
      },
      err => this.footballService.errorHandler(err),
      () => console.log('Дані загружені')
      );
  }

  selectTeam(selectTeam) {
    this.currentTeam = selectTeam;
  }
}
