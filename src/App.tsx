import React from 'react'
import {Home} from './home/Home'
import {Provider} from 'react-redux'
import {configureStore} from './configureStore'
import {
    BrowserRouter as Router, Route
} from 'react-router-dom'
import {PokemonDetail} from './home/components/components/pokemon-detail/PokemonDetail'

function App() {
    return (
        <Router>
            <Provider store={configureStore()}>
                <div >
                    <Route path='/' component={Home} exact={true}/>
                    <Route path='/:id' component={PokemonDetail} exact={true}/>
                </div>
            </Provider>
        </Router>
    )
}

export default App
