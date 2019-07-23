import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { appRoutes } from './app.routing';

import { AppComponent } from './app.component';
import { EnglandComponent } from './components/england/england.component';
import { ItalyComponent } from './components/italy/italy.component';
import { SpainComponent } from './components/spain/spain.component';
import { GermanyComponent } from './components/germany/germany.component';
import { LeagueInfoComponent } from './shared/components/league-info/league-info.component';

import { FootballService } from './services/football.service';
import { AustriaComponent } from './components/austria/austria.component';
import { TeamPlayersComponent } from './shared/components/team-players/team-players.component';

@NgModule({
  declarations: [
    AppComponent,
    EnglandComponent,
    ItalyComponent,
    SpainComponent,
    GermanyComponent,
    LeagueInfoComponent,
    AustriaComponent,
    TeamPlayersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    FootballService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
