import React, { Component } from "react"
import Stars from "../components/Stars"
// import ReviewForm from "./ReviewForm"
import ReviewCont from "./ReviewCont"

export default class MovieData extends Component {

    constructor(props) {
        super(props)
        this.state = {
            movie: props.movie,
    
        }
    }


    render() {
        let movie = this.state.movie
        return (

            <div className="card w-50">
                <div className="card-header bg-info text-dark">

                    <h1>{movie.title}</h1> 

                </div>


                <div className="card-body">
                    
                    <img className="image" src={movie.image} alt="Movie Poster"></img>
                    <br/>

                    <div className="card-body-info">

                        <h5>Summary: </h5> {movie.info}

                    </div>
                    <br/>
                    
                    <Stars />

                    <ReviewCont /><br></br>

                </div>
            </div>

        )
    }
}