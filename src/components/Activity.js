import React, { Component } from 'react';

class Activity extends Component {

  handleClick = () => {
    this.props.onClick(this.props.activity.id)
    // console.log(this.props)
  }

  render () {
    return(
      <div className="tile">
        <h4 onClick={this.handleClick}>
          {this.props.activity.title}
        </h4>
      </div>
    )
  }
}

export default Activity;
