import React, { Component } from 'react';

class StreaksContainer extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     streaks: this.props.streaks
  //   }
    // console.log("this is from StreaksContainer", this.props.streaks)
  // }


  // console.log(this.props.streaks)
  render () {
    console.log('I was triggered during StreaksContainer render', this.props.streaks)
    return(
      <div className=''>
        <h1> Current Streak: </h1>

        {this.props.streaks.map((streak) => {
          // const Idea = ({streak}) =>
          <div className="tile" key={streak.id}>
            <h4>{streak.current_streak}</h4>
          </div>
        })}
      </div>
    )
  }
}

export default StreaksContainer;
