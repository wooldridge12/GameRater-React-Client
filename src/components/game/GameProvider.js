import React, { useState } from "react"

export const GameContext = React.createContext()

export const GameProvider = (props) => {
    const [ games, setGames ] = useState([])
        
        const getGames = () => {
            return fetch("http://localhost:8000/games", {
                headers:{
                    "Authorization": `Token ${localStorage.getItem("lu_token")}`,
                    "Content-type": "application/json"
                }
            })
            .then(response => response.json())
            .then(setGames)
        }

        const createGame = (game) => {
            return fetch("http://localhost:8000/games", {
                mothod: "POST",
                headers: {
                    "Authorization": `Token ${localStorage.getItem("lu_token")}`,
                    "Content-type": "application/json"
                },
                body: JSON.stringify(game)
            })
                .then(response => response.json())
                .then(getGames)
        }

        return (
            <GameContext.Provider value={{ games, getGames, createGame }} >
                { props.children }
            </GameContext.Provider>
        )
}