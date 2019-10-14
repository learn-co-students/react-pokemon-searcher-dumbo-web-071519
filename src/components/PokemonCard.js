import React from 'react'
import { Card } from 'semantic-ui-react'
import { timingSafeEqual } from 'crypto';
import { throws } from 'assert';

class PokemonCard extends React.Component {

  state = {
    clicked : false
  }


  imgClicked = () => {
    this.setState({ clicked : !this.state.clicked})
  }

  getImg = () => {
   return this.state.clicked ? this.props.pokemon.sprites.back : this.props.pokemon.sprites.front
  }
  render() {
   
    return (
      <Card>
        <div>
          <div className="image">
            <img alt="oh no!" src = {this.getImg()} onClick = {this.imgClicked}/>
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats.find(s => s.name === 'hp').value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
