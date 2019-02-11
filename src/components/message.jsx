import React from "react";
import {emojify} from 'react-emojione';

function strToRGB(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i += 1) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
    console.log(hash)
  }
  const c = (hash & 0x00FFFFFF)
    .toString(16)
    .toUpperCase();
  return `#${"00000".substring(0, 6 - c.length)}${c}`;
}

class Message extends React.Component {
  render() {
    const time = new Date(this.props.message.created_at).toLocaleTimeString();
    return (
      <div className="message-container">
        <div className="message-author">
          <span style={{ color: strToRGB(this.props.message.author)}}>{this.props.message.author}</span> - {time}
        </div>
        <div className="message-content">{emojify(this.props.message.content)}</div>
      </div>
    );
  }
}

export default Message;
