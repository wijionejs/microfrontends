import { mount } from "./mount";
import { createMemoryHistory } from "history";

const history = createMemoryHistory();

mount(document.getElementById("root"), { history });
