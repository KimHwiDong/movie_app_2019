import React from "react";


 class App extends React.Component{

  constructor(propos) {
    super(propos);
    console.log("hello");
  }

   state = {
     count: 0 
   }

   add = () =>{
     console.log("add");
     this.setState(current => ({ count: current.count+1}));
   };
   minus = () =>{
     console.log("minus");
     this.setState(current => ({ count: current.count-1}));
   };

   componentDidMount(){
     console.log("component rendered");
   }

   componentDidUpdate(){
     console.log("I just updated");
   }

   componentWillUnmount(){
     console.log("Goodbye, cruel word");
   }
   render(){
     console.log("I'm rendering");
     return <div>
       <h1>The Number is : {this.state.count}</h1>
       <button onClick = {this.add}>add</button> 
       <button onClick = {this.minus}>minus</button>
     </div>
   }
 }
export default App;      