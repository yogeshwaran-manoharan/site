import React from 'react';
import {FaShoppingCart, FaEnvelopeOpenText, FaEnvelope, FaUsers, FaRegThumbsUp, FaRoad, FaRegComments, FaLaptop} from 'react-icons/fa';

const HOME_CALLOUTS = [
    {
        IMAGE: <FaShoppingCart/>,
        TITLE: 'Recover Abandoned Carts',
        COPY: 'Remind customers who have abandoned thier cart with automatic emails at set intervals and recover them.'
    },
    {
        IMAGE: <FaEnvelopeOpenText/>,
        TITLE: 'Follow-up Emails',
        COPY: 'Send a series of follow-up emails on autopilot and nurture your customers to build a lasting relationship.'
    },
    {
        IMAGE: <FaUsers/>,
        TITLE: 'Win-Back Inactive Customers',
        COPY: 'Bring back inactive customers with a series of messages designed to drive repeat purchases.'
    },
    {
        IMAGE: <FaRegThumbsUp/>,
        TITLE: 'Product Recommendations',
        COPY: 'Automatically boost sales by suggesting related products based on the purchase history of customers.'
    },
    {
        IMAGE: <FaEnvelope/>,
        TITLE: 'Welcome Emails',
        COPY: 'Create a great first impression and start building a brand loyalty right from their sign-up.'
    },
    {
        IMAGE: <FaRegComments/>,
        TITLE: 'On-site messages',
        COPY: 'Engage and convert your visitors into customers with on-site popups / slide-ins / action bars.'
    },
    {
        IMAGE: <FaLaptop/>,
        TITLE: 'Visual email builder',
        COPY: 'Create beautiful emails that reflect your brand with our intuitive drag-and-drop visual email builder.'
    },
    {
        IMAGE: <FaRoad/>,
        TITLE: 'Segmentation',
        COPY: 'Segment your customers based on their purchase history, total spending, location and more.'
    },
];

export default HOME_CALLOUTS;
