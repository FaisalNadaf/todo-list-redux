import "./App.css";
import Todo from "./componenet/todo";
import { Provider } from "react-redux";
import { store } from "./app/store.js";

function App() {
  return (
    <>
      <Provider store={store}>
        <Todo />
      </Provider>
    </>
  );
}

export default App;
