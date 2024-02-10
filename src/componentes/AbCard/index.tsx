import React from "react";
import styled from "styled-components";

const Card = styled.div`
    background-color: #FFFFFF;
    box-shadow: 2px 2px 4px #1a1a1a;
    border-radius: 10px;
    font-family: Arial, Helvetica, sans-serif;
    width: 100%;

    @media screen and (min-width: 250px){
        max-width: 300px;
        max-height: 283px;
    }

    @media screen and (min-width: 280px){
        max-width: 350px;
    }

    @media screen and (min-width: 1028px){
        max-width: 715px;
        max-height: 266px;
    }

    @media screen and (min-width: 1200px){
        max-width: 551px;
        max-height: 374px;
    }
`;

const Container = styled.div`
    margin: auto;
    
    @media screen and (min-width: 250px){
        width: 240px;
        padding-top: 4px;
        padding-bottom: 4px;
    }

    @media screen and (min-width: 360px){
        width: 300px;
    }

    @media screen and (min-width: 1028px){
        width: 700px;
    }

    @media screen and (min-width: 1100px){
        width: 501px;
    }

`;

const AbCard = ({ children }: any) => {
    return (
        <Card>
            <Container>
                { children }
            </Container>
        </Card>
    );
}

export {
    AbCard
};