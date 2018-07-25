import React, { Component } from 'react';

class Activity extends Component {

  handleClick = () => {
    // here is where the onClick prop gets instantiated which calls the enableEditing method and passes up the activiy.id as the arguement
    this.props.onClick(this.props.activity.id)
  }

  render () {
    return(
      <div className="tile">
        <span className="deleteButton">
          x
        </span>
        <h4 onClick={this.handleClick}>
          {this.props.activity.title}
        </h4>
      </div>
    )
  }
}

export default Activity;
