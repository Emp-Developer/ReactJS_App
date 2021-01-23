import React from 'react';


class MarkDownEditor extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {value: "Hello World!!!..."}
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    render() {
        return (
            <div className="MarkDownEditor">
                <div>{this.state.value}</div>
                <textarea onChange={this.handleChange}>{this.state.value}</textarea>
            </div>
        );
    }
}

export default MarkDownEditor;