import React from 'react'

export default class Head extends React.Component {
  render () {
    return (
      <div className='row'>
        <div className='col-sm-12 mt-4 mb-4'>
          <h1>{ this.props.title }</h1>
        </div>
      </div>
    )
  }
}
