import React from 'react'

export default class Scrambler extends React.Component {
  scrambleMe () {
    this.props.thoughtsHandler(
      this.shuffleArray(this.props.thoughts)
    )
  }
  shuffleArray (array) {
    for (var i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
    return array
  }
  render () {
    return (
      <div className='row mb-4'>
        <div className='col-sm-12'>
          <div className='card'>
            <div className='card-block'>
              <button onClick={this.scrambleMe.bind(this)} className='btn btn-primary'>
                Scramble Me!
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
