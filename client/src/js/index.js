import React from 'react';
import { render } from 'react-dom';

import Router from './Router';

const rootElement = document.getElementById('main');

render(<Router />, rootElement);



// import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import { Form } from './components';

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       value: ""
//     };

//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(event) {
//     const { value } = event.target;
//     this.setState(() => {
//       return {
//         value
//       };
//     });
//   }

//   render() {
//     return <Form />
//     // return <h1>THIS IS FORM</h1>
//   }
// }

// export default App;

// const wrapper = document.getElementById("main");
// wrapper ? ReactDOM.render(<App />, wrapper) : false;
