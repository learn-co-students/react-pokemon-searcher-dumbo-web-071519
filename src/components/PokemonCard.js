import React from 'react'
import { Card } from 'semantic-ui-react'



class PokemonCard extends React.Component {

  state = {
    picSide: this.props.pokemon.sprites.back
  }

  picFlipper = () => {
      // this.setState({ picSide: this.props.pokemon.sprites.front })
    if (this.state.picSide === this.props.pokemon.sprites.back){
      this.setState({ picSide: this.props.pokemon.sprites.front })
    }else {
      this.setState({ picSide: this.props.pokemon.sprites.back })
    }

  }


  render() {
    // console.log(this.props)
    return (
      <Card>
        <div>
          <div className="image" onClick={ this.picFlipper }>
            <img alt={this.props.pokemon.name} src={this.state.picSide} />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats[4].value} hps
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
