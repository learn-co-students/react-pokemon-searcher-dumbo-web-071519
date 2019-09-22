import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state={
    cardFront: true
  }

  flipCard = () => {
    this.setState({
      cardFront: !this.state.cardFront
    })
  }

  render() {
    return (
      <Card>
        <div>
          <div className="image" onClick={this.flipCard}>
            <img alt="oh no!" src={this.state.cardFront ? this.props.pokemon.sprites.front : this.props.pokemon.sprites.back} />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats.find(stat => stat.name === "hp").value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
