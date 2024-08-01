import React from 'react';
import styled from 'styled-components';

function Card() {
    return (
        <Section>
            <div className='title'>
                <h4>Net Profit</h4>
                <h5>$8960.67</h5>
            </div> 
        </Section>
    );
}

export default Card;

const Section = styled.section`
    .title {
        border: 2px solid black; /* Adjust border width */
        border-radius: 8px; /* Optional: Rounded corners */
        margin: 15px; /* Adjust margin */
        padding: 10px; /* Add padding for spacing */
        background-color: #f9f9f9; /* Optional: Background color */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional: Add shadow */
        
        h4 {
            font-weight: bold;
            margin: 0;
            color: #333; /* Optional: Text color */
        }
        
        h5 {
            margin: 0;
            color: #333; /* Optional: Text color */
        }
    }
`;
