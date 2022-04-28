const React = require('react');
const ReactDOM = require('react-dom')

function App(){
  return React.createElement("h1", null, "This is React App") //標籤 ,css ,文字
}
ReactDOM.render(React.createElement(App), document.querySelector("#root")) // 將APP 再綁到 public/index root上

function App2(){
  return React.createElement("div", null, [
    React.createElement("h1",null,"")
  ]) //標籤 ,css ,文字
}
ReactDOM.render(React.createElement(App2), document.querySelector("#root2")) // 將APP 再綁到 public/index root上