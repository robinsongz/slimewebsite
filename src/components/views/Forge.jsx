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
          <div>
            Fusing Cost Calculator
          </div>
          <img alt='fusing cost calculator' src={require('../Pictures/fusing cost calc example.png')} />
        </div>
        
        <h3>
          !fuse treasure
        </h3>

        <div className="section">
          <div>
            Treasure Pulls Fusing Cost
          </div>
          <img alt='treasure pulls' src={require('../Pictures/treasure example.png')} />
        </div>
        
        <h3>
          !fuse data
        </h3>

        <div className="section">
          <div>
            General Fusing Data
          </div>
          <img alt='fusing data' src={require('../Pictures/fusing data example.png')} />
        </div>
        
        <h3>
          !jewel [color]
        </h3>

        <div className="section">
          <div>
            Jewel Data
          </div>
          <img alt='jewel example' src={require('../Pictures/jewel example.png')} />
        </div>

        
        <h3>
          !jewel [color] setbonus
        </h3>

        <div className="section">
          <div>
            Jewel Set Bonus Data
          </div>
          <img alt='team add' src={require('../Pictures/jewel setbonus exmaple.png')}/>
        </div>

      </div>

    )
  }
}

export default Forge;
