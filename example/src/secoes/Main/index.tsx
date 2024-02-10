// @ts-ignore
import React from 'react';
import styled from 'styled-components';
import { Card } from '../../componentes/Card';

const Container = styled.main`
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;

    @media screen and (min-width: 250px){
        max-width: 300px;
    }

    @media screen and (min-width: 280px){
        max-width: 350px;
    }

    @media screen and (min-width: 1028px){
        max-width: 715px;
    }

    @media screen and (min-width: 1200px){
        max-width: 1100px;
    }

    @media screen and (min-width: 1400px){
        max-width: 1200px;
    }
`;

const Main = () => {
    return (
        <Container>
            <Card />
            <Card />
            <Card />
            <Card />
        </Container>
    )
}

export {
    Main
}