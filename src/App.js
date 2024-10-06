import React from "react";
class  App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
    };
  }
  componentDidMount() {
    this.timerID = setInterval(()=>this.tick(), 1000);
  }
  tick() {
    this.setState({
      time: new Date().toLocaleTimeString(),
    });
  }
  render() {
    return (
      <div className="c1">
        <button className="c3">{this.state.time}</button>
      </div>
    );
  }
}
export default  App