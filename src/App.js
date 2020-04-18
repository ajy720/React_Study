import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  constructor(props) {
    // 컴포넌트가 생성 된 직후, 렌더링 전
    super(props);
    console.log("hello");
  }

  state = {
    count: 0,
    count2: 0,
  };

  add = () => {
    this.setState((curret) => ({ count: curret.count + 1 }));
  };

  minus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
  };
  componentDidMount() {
    // 컴포넌트가 렌더링 된 직후
    console.log("component rendered");
  }
  componentDidUpdate() {
    // 컴포넌트가 업데이트 된 직후
    console.log("Updated");
  }
  componentWillUnmount() {
    // 컴포넌트가 삭제? 종료? 된 직후
    console.log("Die");
  }

  render() {
    console.log("rendering");
    return (
      <div>
        <h1>
          The number is : {this.state.count}, {this.state.count2}
        </h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
