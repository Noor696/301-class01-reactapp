import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Main from "./component/Main";
import HornedBeast from "./component/HornedBeast";

class App extends React.Component{
  render(){
    return(
      <div>
        <Header />
        <Main />
        <Footer />
        <HornedBeast />
      </div>
    )

  }

}

export default App;