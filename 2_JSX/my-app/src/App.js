import React from "react";
import "./App.css";

const headerStyle = {
    color: "red",
    fontWeight: 800
};

function App() {
    return (
        <div className="App">
            <h1 style={headerStyle}>Hello World!</h1>
            <h2 className={"titleStyle"}>ReactJS 둘러보기</h2>
        </div>
    );
}

export default App;
