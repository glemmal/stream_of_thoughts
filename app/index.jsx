import React from 'react'
import {render} from 'react-dom'
import Thought from './thought.jsx'
import Head from './head.jsx'
import Scrambler from './scrambler.jsx'
import AddThought from './addThought.jsx'

class App extends React.Component {

  constructor (props) {
    super(props)
    const thoughts = window.localStorage.getItem('thoughts');
    this.state = {
      title: 'Not deletable stream of thoughts',
      thoughts: thoughts ? JSON.parse(thoughts) : []
    }
  }

  changeThoughts (newThoughts) {
    window.localStorage.setItem('thoughts', JSON.stringify(newThoughts))
    this.setState({
      thoughts: newThoughts
    })
  }

  addThought (newThought) {
    let thoughts = this.state.thoughts
    thoughts.push(newThought)
    this.changeThoughts(thoughts)
  }

  deleteThought (thought) {
    let thoughts = this.state.thoughts
    let index = thoughts.indexOf(thought)
    thoughts.splice(index, 1)
    this.changeThoughts(thoughts)
  }

  render () {
    return (
      <div className='container'>
        <Head title={this.state.title} />
        <AddThought addThoughtHandler={this.addThought.bind(this)} />
        <Scrambler thoughts={this.state.thoughts} thoughtsHandler={this.changeThoughts.bind(this)} />
        {this.state.thoughts.map((thought) => {
          return <Thought
            title={thought.title}
            subTitle={thought.subTitle}
            text={thought.text}
            />
        })}
      </div>
    )
  }
}

render(<App />, document.getElementById('app'))
