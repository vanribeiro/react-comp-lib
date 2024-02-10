// @ts-ignore
import React from "react";
import styled from "styled-components";
import { AbBotao, AbCard } from "../../../../dist";

const Header = styled.header`
    padding-bottom: 2px;
`;

const H1 = styled.h1`
    color: #002F52;
    font-size: 18px;
    font-weight: 700;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;
    margin: 4px 0;
`;

const H2 = styled.h2`
    color: #EB9B00;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    margin: 4px 0;
`;

const BodyText = styled.div`
    padding: 0;
`;

const Text = styled.p`
    margin: 4px 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
`;

const PriceContainer = styled.div`
    margin-top: 8px;
`;

const PriceSpan = styled.span`
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
`;

const Price = styled.span`
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: left; 
    margin-left: 4px;
`;

const Card = () => {
    const price = 29.9;
    return (
            //@ts-ignore
            <AbCard>
                <Header>
                    <H2>
                        Sobre o livro:
                    </H2>
                    <H1>
                        Liderança em Design
                    </H1>
                </Header>
                <BodyText>
                    <Text>
                        Habilidades de gestão para alavancar sua carreira
                    </Text>
                    <Text>
                        Por: Vitor Zanini
                    </Text>
                </BodyText>
                <PriceContainer>
                    <PriceSpan>
                        A partir de:
                    </PriceSpan>
                    <Price>
                        {
                            price.toLocaleString(
                            'pt-br', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }
                            )
                        }
                    </Price>
                </PriceContainer>
                <AbBotao text={"Comprar"} />
            </AbCard>
    );
}

export {
    Card
};