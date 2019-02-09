// import messages from "../messages";

// export function setMessages() {
//   return {
//     type: "SET_MESSAGES",
//     payload: messages
//   };
// }

// export function setMessages() {
//   return fetch("https://wagon-chat.herokuapp.com/general/messages")
//     .then(response => response.json())
//     .then(data => {
//       return {
//         type: "SET_MESSAGES",
//         payload: data.messages
//       };
//     });
// }

export function fetchMessages(channel) {
  const url = `https://wagon-chat.herokuapp.com/${channel}/messages`;
  return fetch(url)
    .then(response => response.json())
    .then(data => {
      return {
        type: "FETCH_MESSAGES",
        payload: data.messages
      };
    });
}

export function selectedChannel(channel) {
  return {
    type: "SELECTED_CHANNEL",
    payload: channel
  };
}
