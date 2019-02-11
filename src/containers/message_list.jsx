import React from "react";
import Message from "../components/message";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchMessages } from "../actions";
import MessageForm from "./message_form";

class MessageList extends React.Component {
  //   static defaultProps = {
  //     messages: [
  //   {
  //     "author":"anonymous92",
  //     "content":"Hello world!",
  //     "created_at":"2017-09-26T23:03:16.365Z"
  //   },
  //   {
  //     "author":"anonymous77",
  //     "content":"My name is anonymous77",
  //     "created_at":"2017-09-26T23:03:21.194Z"
  //   }
  // ]
  //   }

  // componentWillMount() {
  //   this.props.setMessages();
  // }

  componentWillMount() {
    this.props.fetchMessages(this.props.selectedChannel);
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.props.fetchMessages(this.props.selectedChannel);
    }, 3000);
  }

  componentDidUpdate() {
    this.messageList.scrollTop = this.messageList.scrollHeight;
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="right-scene">
        <div className="channel-container">
          <div className="channel-title">
            <h2>
              Channel <span className="hash">#</span>
              {this.props.selectedChannel}
            </h2>
          </div>
          <div
            className="channel-content"
            ref={messageList => {
              this.messageList = messageList;
            }}
          >
            {this.props.messages.map(message => {
              return <Message message={message} key={message.id} />;
            })}
          </div>
          <MessageForm />
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
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageList);
