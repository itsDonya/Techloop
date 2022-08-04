import React from 'react';

import {
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';

const NewAccordionItem = ({ title, body }) => {
    const titleStyle = {backgroundColor: "inherit"};
    const bodyStyle = {color: "#959595"};
    return (
        <AccordionItem>
            <AccordionItemHeading>
                <AccordionItemButton style={titleStyle}>
                    {title}
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <p style={bodyStyle}>
                    {body}
                </p>
            </AccordionItemPanel>
        </AccordionItem>
    );
}

export default NewAccordionItem;