import React from 'react'

export default class AddThought extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      subTitle: '',
      text: ''
    }
  }
  handleInputChange (e) {
    const target = e.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }
  handleSubmit (e) {
    e.preventDefault()
    this.props.addThoughtHandler(this.state)
  }
  render () {
    return (
      <div className='row mb-4'>
        <div className='col-sm-12'>
          <div className='card'>
            <div className='card-block'>
              <form onSubmit={this.handleSubmit.bind(this)}>
                <div className='form-group'>
                  <label htmlFor='title'>Title</label>
                  <input onChange={this.handleInputChange.bind(this)} name='title' type='text' className='form-control' />
                </div>
                <div className='form-group'>
                  <label htmlFor='subTitle'>Sub Title</label>
                  <input onChange={this.handleInputChange.bind(this)} name='subTitle' type='text' className='form-control' />
                </div>
                <div className='form-group'>
                  <label htmlFor='text'>Text</label>
                  <textarea onChange={this.handleInputChange.bind(this)} name='text' className='form-control' rows='3'></textarea>
                </div>
                <button type='submit' className='btn btn-primary'>Add Thought</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
