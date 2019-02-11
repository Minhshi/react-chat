import React from "react";
import Channel from "../components/channel"
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchMessages, selectedChannel } from "../actions";

class ChannelList extends React.Component {
  render() {
    return (
      <div className="left-scene">
        <div className="logo">
          <img src="../assets/chat-46.svg" alt="" />
        </div>
        <div className="channels">
        <h2>Channels</h2>
        {this.props.channels.map((channel) => {return <Channel channel={channel} key={channel}/>})}
        </div>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMessages: fetchMessages }, dispatch);
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelList);
