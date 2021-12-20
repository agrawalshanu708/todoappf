import { useState } from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faTwitter,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

function Component() {
  const [change, setChange] = useState("");

  const [arr, setArr] = useState([]);

  function getColor(index) {
    if (index % 2 === 0) {
      return "#e2e8f0";
    }
    return "white";
  }

  function clickHandler(index) {
    setArr(arr.filter((item, ind) => ind !== index));
  }

  return (
    <section id="sec" style={{}}>
      <h3 style={{ color: "#0f172a", fontFamily: "cursive", fontSize: "30px" }}>
        {" "}
        List down your task{" "}
      </h3>

      <button
        style={{
          backgroundColor: "#0f172a",
          color: "white",
          padding: "0.5rem"
        }}
        onClick={() => {
          setArr([]);
        }}
      >
        {" "}
        Reset{" "}
      </button>

      <input
        style={{ padding: "0.5rem", margin: "0.5rem" }}
        placeholder="enter your task"
        onChange={(e) => {
          setChange(e.target.value);
        }}
      />
      <button
        style={{
          backgroundColor: "#0f172a",
          color: "white",
          padding: "0.5rem"
        }}
        onClick={() => {
          if (change === "") {
            alert("enter task");
          } else {
            setArr([change, ...arr]);
          }
        }}
      >
        {" "}
        Add{" "}
      </button>

      <ol reversed>
        {" "}
        {arr.map((item, index) => {
          return (
            <div>
              <li
                id={index}
                style={{
                  borderRadius: "1rem",
                  maxWidth: "40%",
                  margin: "auto",
                  backgroundColor: getColor(index),
                  padding: "1rem"
                }}
              >
                {item}{" "}
                <span
                  style={{
                    backgroundColor: "transparent",
                    cursor: "pointer",
                    textAlign: "right",
                    position: "absolute",
                    right: "10%"
                  }}
                  onClick={() => clickHandler(index)}
                >
                  {" "}
                  ✖{" "}
                </span>
                <span class="input">
                  <input id="box" type="checkbox" />

                  <span class="tooltip">task done</span>
                </span>
              </li>
            </div>
          );
        })}
      </ol>
    </section>
  );
}

export default function App() {
  return (
    <div className="App">
      <header
        style={{
          border: "2px solid #1e293b",
          backgroundColor: "#1e293b",
          maxHeight: "1rem",
          padding: "1rem",
          borderRadius: "1rem"
        }}
      >
        <div style={{ color: "#cbd5e1" }}> TODO </div>
      </header>

      <Component />

      <div
        id="footer"
        style={{
          borderRadius: "1rem",
          border: "2px solid #1e293b",
          backgroundColor: "#1e293b",
          bottom: "0%",
          width: "100%"
        }}
      >
        <div
          style={{ padding: "0.5rem", position: "static", bottom: "0" }}
          class="social-container"
        >
          <div style={{ color: "#cbd5e1" }}>Connect me</div>
          <a
            href="https://www.instagram.com/shanu.agrawal.30/"
            className="instagram social"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              size="2x"
              color="#cbd5e1"
              padding="0.5rem"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/shanu-agrawal-3b992a227/"
            className="linkedin social"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size="2x"
              color="#cbd5e1
"
            />
          </a>
          <a
            href="https://github.com/agrawalshanu708"
            className="gitHub social"
          >
            <FontAwesomeIcon
              icon={faGithub}
              size="2x"
              color="#cbd5e1
"
            />
          </a>
          <a
            href="https://twitter.com/shanuag44891297"
            className="twitter social"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              size="2x"
              color="#cbd5e1
"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
