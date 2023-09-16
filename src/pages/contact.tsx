import React, { Component } from 'react'
import ContactContent from './components/ContactContent'
import Footer from './components/Footer'
import Header from './components/Header'
type Props = {}

type State = {}

class contact extends Component<Props, State> {
  state = {}

  render() {
    return (
     <>
     <Header/>
     <ContactContent/>
     <Footer/>
     </>
    )
  }
}

export default contact