import React, { Component } from 'react';
import { Accordion } from 'react-accessible-accordion';
import NewAccordionItem from '../Utilities/Accordion';

class FAQ extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titles: [
                "Can I change the FAQ expand icon?",
                "Can I change the app’s text direction?",
                "Is there a search option available?",
                "Can I change the FAQ’s opening behavior?",
                "Can I change the layout of the FAQs?",
                "Is the FAQ app GDPR compliant?",
                "Is it hard to embed your FAQ app?",
                "I have a feature request, how can I share it?"
            ],
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary."
        }
    }
    render() {
        const { titles, body } = this.state;
        ;
        return (
            <>
            <Accordion className='FAQ' style={{width: "86%",margin: "4rem auto"}}>
                {titles.map((title, index) => {
                    return <NewAccordionItem key={index} title={title} body={body} />
                })}
            </Accordion>
            </>
        );
    }
}

export default FAQ;