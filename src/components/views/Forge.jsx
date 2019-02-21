import React, { Component } from 'react';
class Forge extends Component {

  render() {

    return (
      <div className="forge view-comp">

        <h2>
          Forge Commands
        </h2>

        
        <h3>
          !fuse [Fuse Item] [Fuse Material] [Fuse Material Cost]
        </h3>
        <div className="section">
          <div className="description">
            
            Fusing Cost Calculator
          </div>
          <div className="picture">
            <img alt='fusing cost calculator' src={require('../Pictures/fusing cost calc example.png')} />
          </div>
        </div>
        
        <h3>
          !fuse treasure
        </h3>
        <div className="section">
          <div className="description">
            Treasure Pulls Fusing Cost
          </div>
          <div className="picture">
            <img alt='treasure pulls' src={require('../Pictures/treasure example.png')} />
          </div>
        </div>
        
        <h3>
          !fuse data
        </h3>
        <div className="section">
          <div className="description">      
            General Fusing Data
          </div>
          <div className="picture">
            <img alt='fusing data' src={require('../Pictures/fusing data example.png')} />
          </div>
        </div>
        
        <h3>
          !jewel [color]
        </h3>
        <div className="section">   
          <div className="description">
          
            Jewel Data
          </div>
          <div className="picture">
            <img alt='jewel example' src={require('../Pictures/jewel example.png')} />
          </div>
        </div>

        
        <h3>
          !jewel [color] setbonus
        </h3>

        <div className="section">
          <div className="description">
            
            Jewel Set Bonus Data
          </div>
          <div className="picture">
            <img alt='team add' src={require('../Pictures/jewel setbonus exmaple.png')}/>
          </div>
        </div>


      </div>

    )
  }
}

export default Forge;
