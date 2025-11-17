import { Component } from "react";

class InputField extends Component {
    render() {
        return (
            <>
                <form>
                    <input placeholder={this.props.pHolder} />
                    <button>{this.props.btnHolder}</button>
                </form>
            </>
        )
    }
}

export default InputField