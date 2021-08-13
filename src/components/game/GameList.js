import React, { useContext, useEffect } from "react"
import { GameContext } from "./GameProvider.js"
import "./GameList.css"

export const GameList = (props) => {
    const { games, getGames } = useContext(GameContext)

    useEffect(() => {
        getGames()
    }, [])

    return (
        <article className="games">
            {
                games.map(game => {
                    return <section key={`game--${game.id}`} className="game">
                        <div className="game__title">{game.title} by {game.designer}</div>
                        <div className="game__description">  {game.description}</div>
                        <div className="game__players">{game.number_of_players} players needed</div>
                        <div className="game__year_released">Release Year {game.year_released}</div>
                        <div className="game__time">Game Play Time {game.estimated_time_to_play} hours</div>
                        <div className="game__age">Recommended age to play is {game.age_recommended}</div>
                    </section>
                })
            }
        </article>
    )
}