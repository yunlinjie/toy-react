import { ToyReact, Component } from './ToyReact';

class MyComponent extends Component {
  render() {
    return (
      <div>
        <span>hello world !</span>
        <div>
          {true}
          {this.children}
        </div>
      </div>
    )
  }
}

let a = <MyComponent name="a" id="ida">
  <div>123</div>
</MyComponent>

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