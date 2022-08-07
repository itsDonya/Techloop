import React from "react";
import Button from "../Utilities/Button";
import Styled from "styled-components";

const StyledBlog = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 6px;
    overflow: hidden;
    // box-shadow: 0px 0px 12px 3px #cccccc96;
    box-shadow: 0px 0px 24px #b1b1b192;
    .blog-img-container {
        .blog-img {
            width: 100%;
        }
    }
    .blog-details {
        padding: 1.2rem;
        text-align: center;
        .blog-title {
            font-size: 16px;
        }
        .blog-body {
            color: gray;
            font-size: 14px;
            margin: 1rem 0;
        }
    }
    // Mobile size
    @media (max-width: 1024px) {
        width: 80%;
    }
`

const Blog = ({ Picture, Title, Body }) => {
    return(
        <StyledBlog className="blog">
            <div className="blog-img-container">
                <img src={Picture} alt={Title} className="blog-img" />
            </div>
            <div className="blog-details">
                <h5 className="blog-title">{Title}</h5>
                <p className="blog-body">{Body}</p>
                <Button text="read more" />
            </div>
        </StyledBlog>
    )
}

export default Blog;