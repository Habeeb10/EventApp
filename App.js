import React from "react";
import { Provider } from "react-redux";
import Navigator from "./src/navigator/navigation";
import { Event } from "./src/screens/event/Event";
import configureStore from "./src/store/configureStore";

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
