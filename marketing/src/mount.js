import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { createMemoryHistory } from "history";

export const mount = (el, { onNavigate, history } = {}) => {
  const _history = history ?? createMemoryHistory();

  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={_history} />, el);
};
