import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import BlogContent from './components/BlogContent'
type Props = {}

type State = {}

class blog extends Component<Props, State> {
  state = {}

  render() {
    return (
      <>
        <Header/>
        <BlogContent/>
        <br /><br />
        <Footer/>
      </>
    )
  }
}

export default blog