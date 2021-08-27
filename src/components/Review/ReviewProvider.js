import React, {useState} from "react"

export const ReviewContext = React.createContext()

export const ReviewProvider = (props) => {
    const [reviews, setReviews] = useState([])

    const getReviews = () => {
        return fetch("http://localhost:8000/reviews", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("rater_token")}`,
                "Content-type": "application/json"
            }
        })
        .then(response => response.json())
        .then(setReviews)
    }

    return (
        <ReviewContext.Provider value={{reviews, getReviews}} >
            { props.children }
        </ReviewContext.Provider>
    )
}