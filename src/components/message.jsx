import React from "react";

class Message extends React.Component {
  render() {
    const time = new Date(this.props.message.created_at).toLocaleTimeString();
    return (
      <div className="message-container">
        <div className="message-author">
          <span>{this.props.message.author}</span> - {time}
        </div>
        <div className="message-content">{this.props.message.content}</div>
      </div>
    );
  }
}

export default Message;
