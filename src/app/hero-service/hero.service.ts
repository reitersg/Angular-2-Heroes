import {Injectable} from '@angular/core';
import {HEROES} from '../mock-heroes';
import {Hero} from '../hero-details/hero';

@Injectable()
export class HeroService {
    getHeroes() : Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }

    getHeroesSlowly() : Promise<Hero[]> {
        return new Promise(resolve => {
            setTimeout(()=> resolve(this.getHeroes()), 2000);
        })
    }
}
