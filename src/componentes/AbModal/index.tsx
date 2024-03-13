import React, { ReactNode } from 'react';
import styled from 'styled-components';

const ModalBg = styled.div<{ $fechaModal?: boolean }>`
    background-color: rgba(0, 0, 0, 0.250);
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: ${props => props.$fechaModal ? 'none': 'flex'};
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
`;

const ModalContent = styled.section<{ $padding?: string }>`
    background-color: #FFFFFF;
    border-radius: 24px;
    
    @media screen and (max-width: 428px){
        max-height: 590px;
        max-width: 378px;
        width: 89%;
        padding: ${props => props.$padding ? props.$padding: '24px'};
    }

    @media screen and (min-width: 429px){
        max-width: 378px;
        width: 89%;
        padding: ${props => props.$padding ? props.$padding: '24px'};
    }

    @media screen and (min-width: 1024px){
        max-width: 843px;
        max-height: 463px;
        width: 46%;
        padding: ${props => props.$padding ? props.$padding: '40px 48px 40px 40px'};
    }

    @media screen and (min-width: 1728px){
        max-width: 978px;
        max-height: 534px;
        width: 55%;
        padding: ${props => props.$padding ? props.$padding: '64px 48px 56px 48px'};
    }
`;

interface AbModal{
    fechaModal: boolean;
    padding?: string;
    children: ReactNode
}

const AbModal = ({
    fechaModal,
    padding,
    children
}: AbModal) => {

    return (
        <ModalBg $fechaModal={fechaModal} >
            <ModalContent $padding={padding}>
                {children}
            </ModalContent>
        </ModalBg>
    )
}

export {
    AbModal
}