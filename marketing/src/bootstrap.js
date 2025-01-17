import { mount } from "./mount";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

mount(document.getElementById("root"), { history });
