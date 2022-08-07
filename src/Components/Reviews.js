import React, {Component} from "react";
import Styled from "styled-components";
import Review from "./Review";

// Pictures
import Client1 from "../Img/testimonial-1.jpg";
import Client2 from "../Img/testimonial-2.jpg";
import Client3 from "../Img/testimonial-3.jpg";

const ReviewsContainer = Styled.div`
    height: 70vh;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    
    .reviews-title {
        color: #505060;
        text-transform: capitalize;
        font-size: 30px;
        text-align: center;
    }
    .clients {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
    // Mobile & Tablet size
    @media (max-width: 1024px) {
        height: auto;
        padding: 2rem 0;
        .clients {
            margin: 2rem 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2rem;
        }
    }
`

class Reviews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clients: [
                {
                    id: "1",
                    picture: Client1,
                    name: "alizbeth jhon",
                    job: "web developer",
                    explanation: "Wow Very Nice Team. I'm so happy with your service. You managed to exceed my expectations! You guys are very efficient and I will refer more people to your company!"
                },
                {
                    id: "2",
                    picture: Client2,
                    name: "lona william",
                    job: "architect",
                    explanation: "Great Support. I would just like to say thank you for your prompt and effective service, for your friendly and professional support staff! I will recommend to all my friends."
                },
                {
                    id: "3",
                    picture: Client3,
                    name: "liam watson",
                    job: "social worker",
                    explanation: "I'm so happy with your service. You managed to exceed my expectations! You guys are very efficient and I will refer more people to your company!"
                }
            ]
        }
    }
    render() {
        const { clients } = this.state;
        return(
            <ReviewsContainer className="reviews">
                <h4 className="reviews-title">our clients say</h4>
                <div className="clients">
                    {clients.map(client => {
                        return <Review key={client.id} Picture={client.picture} Name={client.name} Job={client.job} Explanation={client.explanation} />
                    })}
                </div>
            </ReviewsContainer>
        )
    }
}

export default Reviews;