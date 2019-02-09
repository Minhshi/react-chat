import React from "react";
import ChannelList from "../containers/channel_list";
import MessageList from "../containers/message_list";

class App extends React.Component {
  render() {
    return (
      <div>
        <ChannelList />
        <MessageList />
      </div>
    );
  }
}

export default App;
