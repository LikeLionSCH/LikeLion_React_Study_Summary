import React from "react";
import "./App.css";

const headerStyle = {
  color: "red",
  fontWeight: 800
};

const WorldClock = props => {
  return (
    <div className="WorldClock">
      <h2>
        <span role="img" aria-label="Earth Emoji">
          🌏
        </span>{" "}
        {props.city}
      </h2>
      <p>
        <span role="img" aria-label="Clock Emoji">
          ⏰
        </span>{" "}
        {props.time}
      </p>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <h1 style={headerStyle}>Hello World!</h1>
      <h2 className={"titleStyle"}>ReactJS 둘러보기</h2>
      <WorldClock city="서울" time="10:00" />
      <WorldClock city="베이징" time="09:00" />
      <WorldClock city="시드니" time="12:00" />
      <WorldClock city="LA" time="17:00" />
    </div>
  );
}

export default App;
