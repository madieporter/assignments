import React, { Component } from "react";
import UglyThings from "./UglyThings.js"; 
import { withUglyThings } from "./UglyThingsProvider.js";

class UglyThingsList extends Component {
  componentDidMount() {
      this.props.getUglyThings()
  }

  render() {
      console.log(this.props)
      const mappedUglyThings = this.props.uglyThings.map(uglyThing => <UglyThings key={uglyThing._id} uglyThing={uglyThing} />)
      return (
          <div>
              {mappedUglyThings}
          </div>
      )
  }
}

export default withUglyThings(UglyThingsList);