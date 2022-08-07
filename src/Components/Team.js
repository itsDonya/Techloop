import React, {Component} from "react";
import Styled from "styled-components";

// Component
import TeamMember from "./TeamMember";

// Pictures
import Member1 from "../Img/team-1.jpg";
import Member2 from "../Img/team-2.jpg";
import Member3 from "../Img/team-3.jpg";
import Member4 from "../Img/team-4.jpg";

const TeamContainer = Styled.div`
    height: 76vh;
    background-color: #d7d7d72b;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    
    .team-title {
        color: #505060;
        text-transform: capitalize;
        font-size: 30px;
        text-align: center;
    }
    .members {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1.4rem;
    }
    // Mobile size
    @media (max-width: 768px) {
        height: auto;
        padding: 2rem 0;
        gap: 1rem;
        .members {
            flex-direction: column;
        }
        .team-title {
            font-size: 24px;
        }
    }
    
    // Tablet size
    @media (min-width: 768px) and (max-width: 1024px) {
        height: auto;
        padding: 2rem 0;
        gap: 2rem;
        .members {
            display: grid;
            grid-template-columns: repeat(2, 40vw);
        }
        .team-title {
            font-size: 24px;
        }
    }
`

class Team extends Component {
    constructor(props) {
        super(props);
        this.state = {
            members: [
                { id: "1", fullname: "rose hopkins", job: "Founder, ceo", picture: Member1 },

                { id: "2", fullname: "ruben houston", job: "web developer", picture: Member2 },

                { id: "3", fullname: "monica frazier", job: "creative officer", picture: Member3 },

                { id: "4", fullname: "kevin haley", job: "project manager", picture: Member4 }

            ]
        }
    }
    render() {
        const { members } = this.state;
        return(
            <TeamContainer className="team">
                <h4 className="team-title">our team</h4>
                <div className="members">
                    {members.map(member => {
                        return <TeamMember fullname={member.fullname} job={member.job} picture={member.picture} key={member.id} />
                    })}
                </div>
            </TeamContainer>
        )
    }
}

export default Team;