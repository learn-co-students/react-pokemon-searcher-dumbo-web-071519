import React from 'react'
import { Card } from 'semantic-ui-react'
import { stat, Stats } from 'fs'

class PokemonCard extends React.Component {

  state = {
    clicked:false
  }

  beenClicked =()=>{
    this.setState({
      clicked: !this.state.clicked
    })
    
  }
  render() {
   
      const {name, sprites,stats} = this.props.poke
      // debugger
      let hp = stats.find(stat => stat.name === 'hp').value
      

    return (
      <Card>
        <div onClick={()=> this.beenClicked()}>
          <div className="image">
            <img src={this.state.clicked ? sprites.back : sprites.front } alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
