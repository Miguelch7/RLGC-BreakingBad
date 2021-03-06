import React from 'react';
import styled from '@emotion/styled';

const ContenedorFrase = styled.div`
    padding: 3rem;
    border-radius: .5rem;
    background-color: #fff;
    max-width: 800px;
    
    @media (min-width: 720px) {
        margin-top: 15rem;
    }

    h1 {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 4rem;

        &::before {
            content: open-quote;
            font-size: 10rem;
            color: #0f574e;
            position: absolute;
            left: -1rem;
            top: -2rem;
            margin-right: 1rem;
        }
    }

    p {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.4rem;
        font-weight: bold;
        text-align: right;
        color: #666;
        margin-top: 2rem;
        font-style: oblique;
    }
`;

const Frase = ({frase}) => {    
    const {author, quote} = frase;
    
    return ( 
        <ContenedorFrase>
            <h1>{quote}</h1>
            <p>- {author}</p>
        </ContenedorFrase>
    );
}
 
export default Frase;