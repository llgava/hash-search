import React from 'react';
import fetch from 'node-fetch';

export default class NewTest extends React.Component {
  constructor() {
    super();
    this.state = {
      // dsID, dsUsername, wsRole, _id
      user: []
    }
  }

  componentDidMount() {
    fetch('/dashboard')
      .then(res => res.json())
      .then(user => this.setState({ user: user}, () => console.log('Fetched!', user)));
  }

  render() {
    if(this.state.user.length === 0) {
      return(
        <p>Vazio</p>
      );
    } else {
      return (
        <>
          <p>{this.state.user.dsID}</p>
          <p>{this.state.user.dsUsername}</p>
          <p>{this.state.user.wsRole}</p>
          <p>{this.state.user._id}</p>
        </>
     );
    }
  }
}
