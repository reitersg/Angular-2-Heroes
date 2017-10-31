import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero-details/hero';
import {HeroService} from '../hero-service/hero.service'

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers:[HeroService]

})
export class HeroesComponent implements OnInit{
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {

  }

  ngOnInit() : void {
    this.getHeroes();
  }

  getHeroes() : void {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }
  onSelect(hero: Hero) : void {
      this.selectedHero = hero;
  }
}
