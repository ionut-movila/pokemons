import {SAVE_POKEMON_DETAIL} from './pokemonDetail.actions'
import { IAction} from '../../../../../reducers'
import {createSelector} from 'reselect'
import {homeBaseSelector} from '../../../../redux/home.reducers'
import {IPokemonDetail, IPokemonDetailMapper} from '../../../../PokemonInterfaces'


// TODO FIX  returned INTERFACE from  pokemonDetailReducer
export const pokemonDetailReducer = (state: IPokemonDetailMapper | {} = {}, action: IAction): IPokemonDetailMapper | {} => {
    switch (action.type) {
        case SAVE_POKEMON_DETAIL:
            // properties to display : description, sprites, type/types, stats
            //added properties  height and weight
            const payload:IPokemonDetail = action.payload
            const {name, sprites, types, stats, weight, height} = payload
            console.log('Pokemon Detail',action.payload)
            return {...state, [name]: {name, sprites, types, stats,weight,height} }
        default:
            return state
    }
}
 export const pokemonDetailSelector = createSelector(
    homeBaseSelector,
    (home) => home.pokemonDetail
)

