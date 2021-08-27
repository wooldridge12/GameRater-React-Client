import React, { useContext, useState, useEffect } from "react"
import { GameContext } from "./GameProvider"
import { useHistory } from "react-router-dom"


export const GameForm = () => {
    const history = useHistory()
    const { createGame, getGames, categories, getCategories } = useContext(GameContext)

    const [currentGame, setCurrentGame] = useState({
        title: "",
        player: localStorage.getItem("rater_token"),
        description: "",
        designer: "",
        yearReleased: 0,
        numberOfPlayers: 0,
        estimatedTimeToPlay: 0,
        ageRecommended: 0,
        category: 0
    })

    useEffect(() => {
        getCategories()
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

    const changeCategoryState = (event) => {
        const newGameState = { ...currentGame }
        newGameState.category = event.target.value
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
                <div className="form-group">
                    <label htmlFor="description">Description: </label>
                    <input type="text" description="description" required autoFocus className="form-control"
                        value={currentGame.description}
                        onChange={changeDescriptionState} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="designer">Designer: </label>
                    <input type="text" designer="designer" required autoFocus className="form-control"
                        value={currentGame.designer}
                        onChange={changeDesignerState} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="yearReleased">Release Year: </label>
                    <input type="text" yearreleased="yearReleased" required autoFocus className="form-control"
                        value={currentGame.yearReleased}
                        onChange={changeYearReleasedState} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="players">Number Of Players: </label>
                    <input type="number" players="players" required autoFocus className="form-control"
                        value={currentGame.numberOfPlayers}
                        onChange={changeGamePlayerState} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="time">Estimated Time To Play: </label>
                    <input type="number" time="time" required autoFocus className="form-control"
                        value={currentGame.estimatedTimeToPlay}
                        onChange={changeTimeState} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="age">Recommended Age To Play: </label>
                    <input type="number" age="age" required autoFocus className="form-control"
                        value={currentGame.ageRecommended}
                        onChange={changeAgeState} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="category">Category: </label>

                    <select name="category" id="category"
                    onChange={changeCategoryState}>
                        <option value="0">Select a category...</option>
                        {
                            categories.map(category => {
                               
                                return(<option key={category.id} value={category.id}>{category.label}</option>
                                )
                            })
                        }
                    </select>

                </div>
                
            </fieldset>

            <button type="submit"
            onClick={evt => {
                evt.preventDefault()

                const game = {
                    title: currentGame.title,
                    description: currentGame.description,
                    designer: currentGame.designer,
                    yearReleased: parseInt(currentGame.yearReleased),
                    numberOfPlayers: parseInt(currentGame.numberOfPlayers),
                    estimatedTimeToPlay: parseInt(currentGame.estimatedTimeToPlay),
                    ageRecommended: parseInt(currentGame.ageRecommended),
                    category: parseInt(currentGame.category)
                }
                createGame(game)
                    .then(() => history.push("/"))
            }}
            className="btn">Create</button>
        </form>
    )
}
