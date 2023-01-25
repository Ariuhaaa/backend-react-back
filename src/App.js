import logo from "./logo.svg";
import "./App.css";

import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [word, setWord] = useState();
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [result, setResult] = useState("");

  useEffect(() => {
    axios
      .get("http://local:8080/")
      .then((res) => {
        console.log(res.data);
        setWord(res.data.result[0].name);
      })
      .catch((err) => console.log(err));
  }, []);

  const sum = () => {
    let str = `http://localhost:8080/add?a=${a}&b=${b}`;
    axios
      .get(str)
      .then((res) => {
        console.log(res.data);
        setResult(res.data.value);
      })
      .catch((err) => console.log(err));
  };

  const has = () => {
    let str = `http://localhost:8080/has?a=${a}&b=${b}`;
    axios
      .get(str)
      .then((res) => {
        console.log(res.data);
        setResult(res.data.value);
      })
      .catch((err) => console.log(err));
  };

  const urj = () => {
    let str = `http://localhost:8080/urj?a=${a}&b=${b}`;
    axios
      .get(str)
      .then((res) => {
        console.log(res.data);
        setResult(res.data.value);
      })
      .catch((err) => console.log(err));
  };

  const huv = () => {
    let str = `http://localhost:8080/huv?a=${a}&b=${b}`;
    axios
      .get(str)
      .then((res) => {
        console.log(res.data);
        setResult(res.data.value);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container">
      <div className="back">
        <input
          className="form-control w-25"
          type={"text"}
          value={a}
          onChange={(e) => setA(e.target.value)}
        />
        <input
          className="form-control w-25"
          type={"text"}
          value={b}
          onChange={(e) => setB(e.target.value)}
        />

        <span className="res">Хариу:{result}</span>
        <br />
        {word}
        <button className="btn btn-light" onClick={sum}>
          +
        </button>
        <button className="btn btn-light" onClick={has}>
          -
        </button>
        <button className="btn btn-light" onClick={urj}>
          *
        </button>
        <button className="btn btn-light" onClick={huv}>
          /
        </button>
      </div>
    </div>
  );
}

export default App;
