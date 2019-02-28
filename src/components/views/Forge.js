import React, { Component } from 'react';
class Forge extends Component {

  render() {

    return (
      <div className="forge view-comp">

        <h2>
          Forge Commands
        </h2>

        
        <h3>
          Fusing Cost Calculator
        </h3>
        <div className="section">
          <div className="note">
            
          !fuse [Fuse Item] [Fuse Material] [Fuse Material Cost]
          </div>
          <div className="picture">
            <img alt='fusing cost calculator' src={require('../Pictures/fusing cost calc example.png')} />
          </div>
        </div>
        
        <h3>
        Treasure Pulls Fusing Cost
        </h3>
        <div className="section">
          <div className="note">
            !fuse treasure
          </div>
          <div className="picture">
            <img alt='treasure pulls' src={require('../Pictures/treasure example.png')} />
          </div>
        </div>
        
        <h3>
          General Fusing Data
        </h3>
        <div className="section">
          <div className="note">      
            !fuse data
          </div>
          <div className="picture">
            <img alt='fusing data' src={require('../Pictures/fusing data example.png')} />
          </div>
        </div>
        
        <h3>
          Jewel Data
        </h3>
        <div className="section">   
          <div className="note">
          !jewel [color]
          </div>
          <div className="picture">
            <img alt='jewel example' src={require('../Pictures/jewel example.png')} />
          </div>
        </div>

        
        <h3>
          Jewel Set Bonus Data
        </h3>

        <div className="section">
          <div className="note">
            
          !jewel [color] setbonus
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
