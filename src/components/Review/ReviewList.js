import React, { useContext, useEffect } from "react"
import { ReviewContext } from "./ReviewProvider"
import { useHistory } from "react-router-dom"

export const ReviewList = (props) => {
    const history = useHistory()
    const { reviews, getReviews } = useContext(ReviewContext)

    useEffect(() => {
        getReviews()
    }, [])

    return (
        <article className="reviews">
            <button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    history.push({ pathname: "/games/new" })
                }}
                >Create Review</button>
        </article>
    )
}