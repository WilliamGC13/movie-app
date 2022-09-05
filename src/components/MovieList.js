import React, { Component } from 'react'
import MovieData from './MovieData'

export default class MovieList extends Component {
    render() {
        let movies = [

    {   id: 0,
        title: "Guardians of the Galaxy",
        image: "https://m.media-amazon.com/images/M/MV5BZTkwZjU3MTctMGExMi00YjU5LTgwMDMtOWNkZDRlZjQ4NmZhXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
        info:"Brash space adventurer Peter Quill (Chris Pratt) finds himself the quarry of relentless bounty hunters after he steals an orb coveted by Ronan, a powerful villain. To evade Ronan, Quill is forced into an uneasy truce with four disparate misfits: gun-toting Rocket Raccoon, treelike-humanoid Groot, enigmatic Gamora, and vengeance-driven Drax the Destroyer. But when he discovers the orb's true power and the cosmic threat it poses, Quill must rally his ragtag group to save the universe.",
    },

    {   id: 1,
        title: "Doctor Strange",
        image: "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_.jpg",
        info: "Dr. Stephen Strange's (Benedict Cumberbatch) life changes after a car accident robs him of the use of his hands. When traditional medicine fails him, he looks for healing, and hope, in a mysterious enclave. He quickly learns that the enclave is at the front line of a battle against unseen dark forces bent on destroying reality. Before long, Strange is forced to choose between his life of fortune and status or leave it all behind to defend the world as the most powerful sorcerer in existence.",
    },

    {   id: 2,
        title: "Thor: Ragnarok",
        image: "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg",
        info: "Imprisoned on the other side of the universe, the mighty Thor finds himself in a deadly gladiatorial contest that pits him against the Hulk, his former ally and fellow Avenger. Thor's quest for survival leads him in a race against time to prevent the all-powerful Hela from destroying his home world and the Asgardian civilization.",
    },

    {   id: 3,
        title: "Spider-Man: Far From Home",
        image: "https://m.media-amazon.com/images/M/MV5BZWFiOTU0ZjAtMThmMy00YzNmLTg5NmQtZDkzMTcxNDE1MWZiXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_.jpg",
        info: "Peter Parker's relaxing European vacation takes an unexpected turn when Nick Fury shows up in his hotel room to recruit him for a mission. The world is in danger as four massive elemental creatures -- each representing Earth, air, water and fire -- emerge from a hole torn in the universe. Parker soon finds himself donning the Spider-Man suit to help Fury and fellow superhero Mysterio stop the evil entities from wreaking havoc across the continent.",
    },

    {   id: 4,
        title: "Black Widow",
        image: "https://m.media-amazon.com/images/M/MV5BNDNhYmI1MDMtNWIxZS00N2RmLTk3MjYtZTc3ZDZlN2VmN2U2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
        info: "Natasha Romanoff, aka Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy, and the broken relationships left in her wake long before she became an Avenger.",
    },

]

return (


    <div className = "container">

       <MovieData {...{movie: movies[0]}}/>

       <MovieData {...{movie: movies[1]}}/>

       <MovieData {...{movie: movies[2]}}/>

       <MovieData {...{movie: movies[3]}}/>

       <MovieData {...{movie: movies[4]}}/>

    </div>


)
}
}