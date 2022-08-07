import React from "react";

// Style
import Styled from "styled-components";

// Stars
import { Star } from "../Svg/Stars";

const ReviewContainer = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    .client-img {
        width: 78px;
        border-radius: 50%;
    }
    .client-name {
        color: #333333;
        font-size: 18px;
        text-transform: capitalize;
        margin: 1rem 0;
    }
    .client-job {
        color: #333333;
        text-transform: capitalize;
    }
    .client-explanation {
        color: grey;
        text-align: center;
        font-size: 15px;
        word-spacing: .1rem;
        line-height: 1.4rem;
    }
    svg {
        width: 16px;
        height: 20px;
        fill: #f0ce26;
    }
    // Tablet size
    @media (min-width: 768px) and (max-width: 1024px) {
        width: 60%;
        box-shadow: 0px 0px 24px #d0d0d0;
        border-radius: 8px;
    }
`

const Review = ( {Picture, Name, Job, Explanation} ) => {
    return(
        <ReviewContainer>
            <img src={Picture} className="client-img" alt="Client Avatar" />
            <h5 className="client-name">{Name}</h5>
            <p className="client-job">{Job}</p>
            <div className="client-stars">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
            </div>
            <p className="client-explanation">{Explanation}</p>
        </ReviewContainer>
    )
}

export default Review;