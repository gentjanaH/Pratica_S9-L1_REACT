import { Component } from "react";

class InputField extends Component {
    render() {
        return (
            <>
                <form className={this.props.className}>
                    <input placeholder={this.props.formName} />
                    <input placeholder={this.props.formSurname} />
                    <input placeholder={this.props.formEmail} />
                    <input placeholder={this.props.formPassword} />
                    <button>{this.props.btnHolder}</button>
                </form>
            </>
        )
    }
}

export default InputField