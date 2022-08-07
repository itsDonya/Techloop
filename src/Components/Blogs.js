import React, {Component} from "react";
import Blog from "./Blog";
import Styled from "styled-components";

// Pictures
import Blog1 from "../Img/blog-1.jpg";
import Blog2 from "../Img/blog-2.jpg";
import Blog3 from "../Img/blog-3.jpg";

const StyledBlogs = Styled.div`
    height: 88vh;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    .blogs-title {
        color: #505060;
        text-transform: capitalize;
        font-size: 30px;
        text-align: center;
    }
    .blogs-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2rem;
    }
    // Mobile size
    @media (max-width: 1024px) {
        height: auto;
        padding: 2rem 0;
        gap: 2rem;
        .blogs-container {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            gap: 2rem;
        }
    }
`

class Blogs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs: [
                {
                    id: "1", picture: Blog1, title: "What technologies are being used in e-commerce?", body: "All interconnected, AI, chatbots, and voice assistants are becoming necessary for any e-commerce business to be successful."
                },

                {
                    id: "2", picture: Blog2, title: "What are the types of application development?", body: "The most common types of development methodologies are: waterfall development, agile development and (RAD)."
                },
                
                {
                    id: "3", picture: Blog3, title: "What is the hottest technology trend and development?", body: "now the top and new technology trends to understand where your career...current with emerging technologies"
                }
            ]
        }
    }
    render() {
        const { blogs } = this.state;
        return(
            <StyledBlogs className="blogs">
                <h3 className="blogs-title">recent blog & article</h3>

                <div className="blogs-container">
                    {blogs.map(blog => {
                        return <Blog key={blog.id} Picture={blog.picture} Title={blog.title} Body={blog.body} />
                    })}
                </div>

            </StyledBlogs>
        )
    }
}

export default Blogs;