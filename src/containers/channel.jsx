import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectedChannel } from "../actions";

class Channel extends React.Component {
  handleClick = () => {
    this.props.selectedChannel(this.props.channel);
  };

  render() {
    let classes = "channel";
    if (this.props.channel === this.props.activeChannel) {
      classes += " active";
    }
    return (
      <div className={classes} onClick={this.handleClick}>
        <span className="hash">#</span>
        {this.props.channel}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectedChannel: selectedChannel }, dispatch);
}

function mapStateToProps(state) {
  return {
    activeChannel: state.selectedChannel
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Channel);
