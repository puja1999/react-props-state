import React, { Component } from "react";

class DisplayComp extends Component {
  // to fecth a property in class component, use constructor and call props
  constructor(props) {
    super(props);
    // we should call a super constructor before calling a state
    this.state = {
      personData: this.props.person || [], // person object or empty array
    };
  }

  renderOutput = () => {
    console.log(this.state.personData);
    const data = this.state.personData;
    const mapData = data.map((persons) => (
      <React.Fragment key={persons.name}>
        <p>
          <span>Name: {persons.name}</span>
        </p>
        <p>
          <span>Age: {persons.age}</span>
        </p>
      </React.Fragment>
    ));
    return mapData;
  };

  switchNameHandler = () => {
    console.log("click me to change data");
    this.setState({
      personData: [
        { name: " Ram", age: 11 },
        { name: " shyam", age: 18 },
      ],
    });
  };
  render() {
    return (
      <div className="display">
        {this.renderOutput()}{" "}
        {/* calling method directly to display the data */}
        <button onClick={this.switchNameHandler}>Switch</button>
      </div>
    );
  }
}

export default DisplayComp;
