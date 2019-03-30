import React, { Component } from 'react';
class Data extends Component {

  render() {

    return (
      <div className="data view-comp">
        <h2 className='view-comp__title'>
          Data Commands
        </h2>
        <div className='view-comp__section'>
          <h3 className='view-comp__section--title'>
            Fusing Cost Calculator
          </h3>
          <div className="view-comp__section--img">
            <img alt='fusing cost calculator' src={require('../Pictures/fusing cost calc example.png')} />
          </div>
        </div>
        
        <div className='view-comp__section'>
          <h3 className='view-comp__section--title'>
          Treasure Pulls Fusing Cost
          </h3>
          <div className='view-comp__section--img'>
            <img alt='treasure pulls' src={require('../Pictures/treasure example.png')} />
          </div>
        </div>
        <div className='view-comp__section'>
          <h3 className='view-comp__section--title'>
            General Fusing Data
          </h3>
          <div className="view-comp__section--note">      
            !fuse data
          </div>
          <div className='view-comp__section--img'>
            <img alt='fusing data' src={require('../Pictures/fusing data example.png')} />
          </div>
        </div>
        
        <div className='view-comp__section'>
          <h3 className='view-comp__section--title'>
            Jewel Data
          </h3>
          <div className="view-comp__section--img">
            <img alt='jewel example' src={require('../Pictures/jewel example.png')} />
          </div>
        </div>

        <div className='view-comp__section'>
          <h3 className='view-comp__section--title'>
            Jewel Set Bonus Data
          </h3>
          <div className="view-comp__section--img">
            <img alt='team add' src={require('../Pictures/jewel setbonus exmaple.png')}/>
          </div>
        </div>
      </div>

    )
  }
}

export default Data;
