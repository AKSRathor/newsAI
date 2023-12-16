import React, { Component } from 'react'
import spinner from './spinner.gif'

const Spinner = ()=> {
  // render() {
    return (
      <div className='loadingImageDiv '><img src={spinner} alt="loading" /></div>
    )
  // }
}
export default Spinner
