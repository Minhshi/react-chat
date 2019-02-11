import React from "react";

class Channel extends React.Component {
  render() {
    return (
      <div className="channel">
        <span className="hash">#</span>
        {this.props.channel}
      </div>
    );
  }
}

export default Channel;
