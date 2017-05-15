import React from 'react'

export default class Thought extends React.Component {
  render () {
    return (
      <div className='card mb-4'>
        <div className='card-block'>
          <h4 className='card-title'>{ this.props.title }</h4>
          <h6 className='card-subtitle'>{ this.props.subTitle }</h6>
          <p className='card-text'>
            { this.props.text }
          </p>
        </div>
      </div>
    )
  }
}
