import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import { TeamInfo } from '../shared/interfaces/team-info';

@Injectable()
export class FootballService {

	baseLink: string = "https://raw.githubusercontent.com/opendatajson/football.json/master";
	season: string = "2015-16";
	
  constructor(private http: Http) { }

  // формуємо запит на вибраний роут
  getLeague(data){
	  switch (data) {
	  	case "germany":
	  		return "de.1.json";
  		case "england":
	  		return "en.1.json";
  		case "austria":
	  		return "at.1.json";
	  	case "spain":
	  		return "es.1.json";
	  	case "italy":
	  		return "it.1.json";
	  	default:
	  		return "en.1.json";
	  }
  }

  // запит на json файл з даними Ліги
  getLeagueInfo(league) {
    return this.http.get(`${this.baseLink}/${this.season}/${this.getLeague(league)}`)
      .map(result => result.json())
  }

  errorHandler(err){
  	alert("Помилка при завантаженні даних : " + err);
  }

	/********************/
	// Вибираємо команди, які грають у вибраній лізі
 
  getAllTeams(rounds){
    let teams: Array<any> = []; 

    rounds.forEach(element=>{
      
      element.matches.forEach(match=>{
        
        if(teams.every((element)=>{return element!==match.team1.name})){
          teams.push(match.team1.name);
        }
        if(teams.every((element)=>{return element!==match.team2.name})){
        	teams.push(match.team2.name);
        }
      });
    });

    return teams;
  }
	/*************************/

	/*------------------------------------------*/
	//Створення масиву з даними ліги для таблиці
  makeTableInfo(teams, rounds){
  	let teamsInfo: Array<any> = [];
    for(let i=0; i<=teams.length; i++){
      let teamInfo: TeamInfo= {
      	id: 0,
        team: '',
        playedGames: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        gf: 0,
        ga: 0,
        gd: 0,
        points: 0
      };
      teamInfo.team = teams[i];
      rounds.forEach(round=>{
        round.matches.forEach(match=>{

          if(match.team1.name == teams[i]){
            teamInfo.playedGames++;
            if(match.score1>match.score2){
              teamInfo.won++;
              teamInfo.points+=3;
            }else if(match.score1<match.score2){
              teamInfo.lost++;
            }else{
              teamInfo.drawn++;
              teamInfo.points+=1;
            }
            teamInfo.gf += match.score1;
            teamInfo.ga += match.score2;
          }
          if(match.team2.name == teams[i]){
            teamInfo.playedGames++;
            if(match.score1>match.score2){
              teamInfo.lost++;
            }else if(match.score1<match.score2){
              teamInfo.won++;
              teamInfo.points+=3;
            }else{
              teamInfo.drawn++;
              teamInfo.points+=1;
            }
            teamInfo.gf += match.score2;
            teamInfo.ga += match.score1;
          }
        });

      });
      teamInfo.gd = teamInfo.gf - teamInfo.ga;
      teamsInfo.push(teamInfo);
    }
		teamsInfo.sort((team1, team2)=> team2.points - team1.points);
		let i = 1;
		teamsInfo.forEach((team)=>{
			team.id = i;
			i++;
		});
    return teamsInfo;
  }
  /*------------------------------------------*/
}
