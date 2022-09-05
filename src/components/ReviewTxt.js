import React, { Component } from "react"

export default class ReviewTxt extends Component {
    constructor(props) {
        super(props);

        this.state = {
            txtVal: ""
        }
    }

    handleNewTxt = (e) => {

        this.setState({ txtVal: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault()
        if(this.state.txtVal !== "") {
            this.props.newReview(this.state.txtVal)
            this.setState({txtVal: ""})
        }
    }

    render() {
        return (
            <>

            <input type="text" value={this.state.txtVal} onChange={this.handleNewTxt}/>

            <div><br></br>
            <button id="sub" className="btn btn-info" onClick={this.onSubmit}>Submit</button>
            </div>

            </>
        )
    }
}
