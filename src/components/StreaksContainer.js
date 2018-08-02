import React, { Component } from 'react';
import axios from 'axios';

class StreaksContainer extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     streaks: this.props.streaks
  //   }
    // console.log("this is from StreaksContainer", this.props.streaks)
  // }

  componentDidMount() {
    axios({ method: 'GET',
            url: 'http://localhost:3001/v1/activities/-/streaks',
            headers: {
              'X-User-Email': localStorage.email,
              'X-User-Token': localStorage.accessToken
            }
          }).then(streaksRes => {
      if(streaksRes.status === 200)
        // console.log("from componentDidMount", streaksRes.data)
        // 👇 setSTATE of streaks[] to response.data array[]
        this.setState({ streaks: streaksRes.data })
      ;
    })
  }


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
