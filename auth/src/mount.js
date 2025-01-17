import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { createMemoryHistory } from "history";

export const mount = (el, { onNavigate, history } = {}) => {
  const _history = history ?? createMemoryHistory();

  _history.replace(window.location.pathname);

  if (onNavigate) {
    _history.listen(onNavigate);
  }

  ReactDOM.render(<App history={_history} />, el);

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = _history.location;

      if (nextPathname !== pathname) {
        _history.push(nextPathname);
      }
    },
  };
};
