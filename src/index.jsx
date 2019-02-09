import React from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';

import App from './components/app'

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

// const Hello = ({ name }) => {
//   return (
//     <div>
//       Hello,
//       {name}
//     </div>
//   );
// };

import messagesReducer from './reducers/messages_reducer';
import channelsReducer from './reducers/channels_reducer';
import selectedChannelReducer from './reducers/selected_channel_reducer';
import currentUserReducer from './reducers/current_user_reducer'

const reducers = combineReducers({
messages: messagesReducer,
channels: channelsReducer,
selectedChannel: selectedChannelReducer,
currentUser: currentUserReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);

const initialState = {
  messages: [],
  channels: ["general", "react", "paris"],
  selectedChannel: "general",
  currentUser: prompt("What is your username?" || `anonymous-${Math.floor(Math.random() * 10)}`)
}

// const root = document.getElementById('root');
// if (root) {
//   ReactDOM.render(<Hello name="World" />, root);
// }

ReactDOM.render(
<Provider store={createStore(reducers, {}, middlewares)}>
<App />
</Provider>,
document.getElementById('root'));
