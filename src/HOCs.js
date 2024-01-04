import { render } from "@testing-library/react";
import { Component, useState } from "react";

const WithCounter = (WrappedComponent, incrementValue) => {
  class WithCounter extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }

    handleIncrement = () => {
      this.setState((prevState) => {
        return { count: prevState.count + incrementValue };
      });
    };

    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          handleIncrement={this.handleIncrement}
          {...this.props}
        />
      );
    }
  }

  return WithCounter;
};

// using functional component
function WithCounter1(WrappedComponent, incrementValue) {
  const WithCounter1 = () => {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
      setCount((prevCount) => {
        return prevCount + incrementValue;
      });
    };
    return (
      <div>
        <WrappedComponent count={count} handleIncrement={handleIncrement} />
      </div>
    );
  };
  return WithCounter1;
}

// ButtonCounter
function ButtonCounter({ count, handleIncrement }) {
  return (
    <div>
      <button onClick={handleIncrement}>clicked {count} times</button>
    </div>
  );
}

// ButtonCounter
function HoverCounter({ count, handleIncrement }) {
  return (
    <div>
      <p onMouseOver={handleIncrement}>Hovered {count} times</p>
    </div>
  );
}

const ButtonCounterWithCounter = WithCounter(ButtonCounter, 1);
const HoverCounterWithCounter = WithCounter(HoverCounter, 1);
const ButtonCounterWithFunctionCounter = WithCounter1(ButtonCounter, 1);
const HoverCounterWithFunctionCounter = WithCounter1(HoverCounter, 1);

export {
  ButtonCounterWithCounter,
  HoverCounterWithCounter,
  ButtonCounterWithFunctionCounter,
  HoverCounterWithFunctionCounter,
};
