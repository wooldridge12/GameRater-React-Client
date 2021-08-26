import React, { useContext, useState, useEffect } from "react"
import { GameContext } from "./GameProvider"
import { useHistory } from "react-router-dom"


export const GameForm = () => {
    const history = useHistory()
    const { createGame, getGames } = useContext

    const [currentGame, setCurrentGame] = useState({
        title: "",
        player: localStorage.getItem("lu_token"),
        description: "",
        designer: "",
        yearReleased: 0,
        numberOfPlayers: 0,
        estimatedTimeToPlay: 0,
        ageRecommended: 0
    })

    useEffect(() => {
        getGames()
    }, [])

    const changeGameTitleState = (event) => {
        const newGameState = { ...currentGame }
        newGameState.title = event.target.value
        setCurrentGame(newGameState)
    }

    
    const changeDescriptionState = (event) => {
        const newGameState = { ...currentGame }
        newGameState.description = event.target.value
        setCurrentGame(newGameState)
    }
    
    const changeDesignerState = (event) => {
        const newGameState = { ...currentGame }
        newGameState.designer = event.target.value
        setCurrentGame(newGameState)
    }
    
    const changeYearReleasedState = (event) => {
        const newGameState = { ...currentGame }
        newGameState.yearReleased = event.target.value
        setCurrentGame(newGameState)
    }
    
    const changeGamePlayerState = (event) => {
        const newGameState = { ...currentGame }
        newGameState.numberOfPlayers = event.target.value
        setCurrentGame(newGameState)
    }

    const changeTimeState = (event) => {
        const newGameState = { ...currentGame }
        newGameState.estimatedTimeToPlay = event.target.value
        setCurrentGame(newGameState)
    }

    const changeAgeState = (event) => {
        const newGameState = { ...currentGame }
        newGameState.ageRecommended = event.target.value
        setCurrentGame(newGameState)
    }

    return (
        <form className="gameForm">
            <h2 className="ganeForm__title">Create New Game</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title: </label>
                    <input type="text" title="title" required autoFocus className="form-control"
                        value={currentGame.title}
                        onChange={changeGameTitleState} 
                    />

                </div>
            </fieldset>
        </form>
    )
}