import { ToyReact, Component } from './ToyReact';

window.Squares = {}
class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    }
  }
  render() {
    window.Squares[this.props['value']] = this;
    return (
      <button className="square" onClick={() => this.setState({ value: 'X' })}>
        {this.state.value ? this.state.value : ''}
      </button>
    );
  }
}
class Board extends Component {
  renderSquare(i) {
    return <Square value={i} />;
  }
  render() {
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}


let a = <Board />

ToyReact.render(
  a,
  document.body
);

/*
var a = ToyReact.createElement("div", {
  name: "a",
  id: "ida"
},
ToyReact.createElement("span", null, "Hello"),
ToyReact.createElement("span", null, "world"),
ToyReact.createElement("span", null, "!!!"));
console.log(a);
document.body.appendChild(a);
*/