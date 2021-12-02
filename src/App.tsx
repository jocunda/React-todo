import './App.css';
import {
  MdPlaylistAdd,
} from 'react-icons/all';
import CardList from "./components/CardList"

export default function App() {

  return <>
    <div className="App">
      <h1>To do List</h1>
      <div className="input-add">
        <input type="text"
          name="todoadd"
          id="inputtodo"
          placeholder="Add..." />
        <MdPlaylistAdd />
      </div>
      <CardList />
    </div>
  </>
};