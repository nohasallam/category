import React, { Component } from 'react'
import Nav from './navbar'
import Footer from './Footer'
import ReactDOM from 'react-dom'



class Index extends Component {

  render() {
    return (
       <div>
          <Nav />
          <div className="container ">
               <h1>Laravel + React 	Basic Authentication </h1>
        </div>
           <Footer/>
       </div>
    )
  }

}

export default Index

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
