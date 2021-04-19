//rcc
//rfc

import React, { Component } from "react";
import DisplayComp from "./DisplayComp";

class DataComp extends Component {
  // we should use construtor here, to initialize the value
  constructor() {
    super();

    // define state using this.state
    // a state which is passed in one component is gonna act as a property in the next component
    this.state = {
      persons: [
        { name: "Puja", age: 5 },
        { name: "Sah", age: 6 },
        { name: "PujaSah", age: 8 },
      ],
    };
  }
  render() {
    return (
      <>
        {/* person is object here, to pass a state, enclose it in curly braces */}
        <DisplayComp person={this.state.persons} />
      </>
    );
  }
}

export default DataComp;
