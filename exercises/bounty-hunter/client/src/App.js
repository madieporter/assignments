import React, { Component } from 'react';
import { withProvider } from "./BountyProvider";
import Form from "./Form";

class App extends Component {

  componentDidMount() {
    this.props.getBounties()
  }

  render() {

  const mappedBounties = this.props.bounties.map(bounty => <bounty key={bounty._id} bounty={bounty} />)

  return (
    <div>
      <Form />
    </div>
  )
  }
}
export default withProvider(App);
