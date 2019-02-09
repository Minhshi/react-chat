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

export function createMessage(channel, author, content) {
  const body = { author, content };
  const url = `https://wagon-chat.herokuapp.com/${channel}/messages`;
  const promise = fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  }).then(response => response.json());
  return {
    type: "CREATE_MESSAGE",
    payload: promise
  };
}
