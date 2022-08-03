import React, { Component } from "react";
import Styled from "styled-components";

const PaginationContainer = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3rem 0;
    gap: .6rem;
    .pagination-btn {
        width: 2.5rem;
        height: 2.5rem;
        display: block;
        padding: .6rem;
        border: none;
        border-radius: 4px;
        background-color: #ffffff;
        box-shadow: 0px 0px 14px 1px #cccccc90;
        transition: all .3s ease-in-out;
        cursor: pointer;
        &:hover, &:nth-child(3) {
            color: #ffffff;
            background: linear-gradient(177deg, #fa6832 0%, #d54513 100%);
        }
    }
`

class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            leftChevron: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>,

          rightChevron: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
        }
    }
    render() {
        const numberOfPages = Number(this.props.pages);
        const { leftChevron, rightChevron } = this.state;
        return(
            <PaginationContainer className="pagination">
                <button className="pagination-btn" id="pagination-back">{leftChevron}</button>

                {Array.apply(0, Array(numberOfPages)).map((x, i) => {
                    return <button className="pagination-btn" id={i} key={i}>{i+1}</button>
                })}

                <button className="pagination-btn" id="pagination-fore">{rightChevron}</button>
            </PaginationContainer>
        )
    }
}

export default Pagination;