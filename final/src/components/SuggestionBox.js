
import './App.css';
import React from 'react';
import './SuggestionBox.css'


<input type="text" onChange={onChangeFunction}/>


class SuggestionBox extends Component {
    state = { submitted: false }

    handleClick = () => {
        this.setState({ submitted: !this.state.submitted })
    }

    onChangeFunction = (event) => {
        console.log(event.target.value);
      } 

    render() {
        return(
            <box className = "textbox">
                <h2 className="green-text">What would you like to suggest?</h2>
                <div>
                <form>
                    <fieldset>
                        <p>
                        <label>Text Area</label>
                        <textarea className="textbox"> id = "myTextArea"
                            rows = "3"
                            cols = "80"
                        </textarea>
                        </p>
                    </fieldset>
                </form>
                </div>
                <button className="green-button" onClick={this.handleClick}>Submit!</button>
            </box>
        )
    }
}

export default SuggestionBox
