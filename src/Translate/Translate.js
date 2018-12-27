import React, { Component } from 'react'

class Translate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textToTranslated: '',
      textTranslated: ''
    };

    this.handleChangeTextTranslated = this.handleChangeTextTranslated.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChangeTextTranslated(e) {
    return this.setState({
      textToTranslated: e.target.value
    })
  }

  handleClick(e) {
    fetch('http://localhost:9000/translate', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text: this.state.textToTranslated,
        to: 'en'
      })
    })
    .then((response) => response.json())
    .then((data) => {
      this.setState({
        textTranslated: data.text
      });
    })
    .catch((err) => console.log(err))
  }

  render() {
    return (
      <div>
        <input type="text"
               name="text-to-translate"
               value={this.state.textToTranslated}
               onChange={this.handleChangeTextTranslated}
        />
        <button type="button"
                onClick={this.handleClick}>Translate</button>
        <hr/>
        <p>{this.state.textTranslated}</p>
      </div>
    );
  }
}

export default Translate
