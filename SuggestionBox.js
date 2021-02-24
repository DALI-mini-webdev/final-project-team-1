
import './App.css';
import React from 'react';


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
                <h1>What would you like to suggest?</h1>
                <form>
                    <fieldset>
                        <p>
                        <label>Text Area</label>
                        <textarea> id = "myTextArea"
                            rows = "3"
                            cols = "80"
                        </textarea>
                        </p>
                    </fieldset>
                </form>
                <div>
                <button onClick={this.handleClick}>Submit!</button>
            </box>
        )
    }
}

export default Navbar
