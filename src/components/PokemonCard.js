import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  
  getPokemonHP(pokemon){
    return pokemon.stats.find(s => s.name === 'hp').value
  }

  render() {
    const pokemon = this.props.pokemon,
          url = pokemon.isClicked ? pokemon.sprites.back : pokemon.sprites.front

    return (
      <Card>
        <div onClick={() => this.props.toggleImage(pokemon)}>
          <div className="image">
            <img src={url} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.getPokemonHP(pokemon)}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
