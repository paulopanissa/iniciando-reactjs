import React, {Component} from 'react'
import StateInput from '../StateInput/StateInput'

class HelloWorld extends Component {
  constructor(props) {
    super(props);

    console.log(props, this.props);

    this.state = {
      name: 'Paulo Panissa',
      txt: this.props.txt
    }
  }

  render() {
    const result = 2;
    const style = {
      color: '#ff0005',
      fontSize: 50
    };

    return (
      <div className="my-class-from-react">
        <StateInput />
        {/* Este primeiro component */}
        <h1 style={style}>{this.state.txt}</h1>
        <h4>{ result === 2 * 2 ? <div>
          <ul>
            <li>'TRUE' </li>
          </ul>
        </div>: <div>
          <ul>
            <li>'FALSE'</li>
          </ul>
        </div> }</h4>
        <span>{this.state.name}</span>
      </div>
    )
  }
}

export default HelloWorld
