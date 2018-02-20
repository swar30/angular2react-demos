import React, {Input} from 'react'
import { react2angular } from 'react2angular'
import { Three } from './Three'

// export let Two = ({ two }) =>
//   <div>
//     two: {two}
//     <Three three={two * 2} />
//   </div>

export class Two extends React.Component {
  constructor () {
    super()

    this.state = {
      factor: 2
    }
  }

  onIncrement () {
    this.setState({
      factor: this.state.factor + 1
    })
  }

  render () {
    return (<div>
      two: {this.props.two}
      <Three three={this.props.two * this.state.factor} />
      <input type="button" value="increment" onClick={e => this.onIncrement()}/>
    </div>
    )
  }
}

export let TwoAngular = react2angular(Two, ['two'])
