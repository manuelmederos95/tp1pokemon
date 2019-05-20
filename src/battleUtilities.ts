import {Pokemon} from './models/pokemon';

export function getFastestPokemon(poke1:Pokemon, poke2:Pokemon) {
    if(poke1.speed > poke2.speed) {
        return poke1;
    }
    else{
        return poke2;
    }
}

