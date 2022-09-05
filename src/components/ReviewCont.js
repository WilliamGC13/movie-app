import React, { Component } from "react"
import ReviewTxt from './ReviewTxt'



export default class ReviewForm extends Component {

    constructor(props) {
        super(props)
        this.state = {

            reviews: [
            ]      
        }
    }





    newReview = (userReview) => {
        this.setState({reviews: this.state.reviews.concat(userReview)})
    }





    render() {
        return (
            <><br></br>

                    Type Review Below... <br></br>


                    <ReviewTxt newReview={this.newReview}/><br></br>
                
                    <h4>User Reviews:</h4>

                    <p>{this.state.reviews.join("\n")}</p>
   
            </>
        )
    }
}
