import { Component, OnInit } from '@angular/core';
import { FootballService } from '../../services/football.service';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'germany',
  templateUrl: './germany.component.html',
  styleUrls: ['./germany.component.css']
})
export class GermanyComponent implements OnInit {
  leagueCountry: string;
  rounds: Array<any> = []; 
  leagueName: string;
  teams: Array<any> = []; // масив зі списком команд у лізі
  allTeamsInfo: Array<any> = []; // масив з усіма командами і інфою для таблиці (містить об'єкти)

  constructor(private footballService: FootballService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.leagueCountry = this.route.routeConfig.path;

    this.footballService.getLeagueInfo(this.leagueCountry) 
    .subscribe(
      (data)=>{
        this.rounds = data.rounds;
        this.leagueName = data.name;
        // console.log(data);
        this.teams = this.footballService.getAllTeams(this.rounds);
        // console.log(this.teams);
        this.allTeamsInfo = this.footballService.makeTableInfo(this.teams, this.rounds);
        console.log(this.allTeamsInfo);
      },
      err => this.footballService.errorHandler(err),
      () => console.log('Дані загружені')
      );
  }
}
