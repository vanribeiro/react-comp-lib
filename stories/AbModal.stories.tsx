import  React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AbModal } from '../src';

export default {
    title: 'Componentes/AbModal',
    component: AbModal
} as ComponentMeta<typeof AbModal>;

const Modal = () => {
    const [closeModal, setCloseModal] = useState(false);

    const handleCloseModal = () => {
        setCloseModal(true);
    }

    return (
        <AbModal fechaModal={closeModal}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'end'
            }}>
                <button type='button' onClick={() => handleCloseModal()}>
                    fechar esta modal
                </button>
            </div>
            <h1>
                Oi, eu sou uma modal!
            </h1>
        </AbModal>
    )
}

// @ts-ignore
const Template: ComponentStory<typeof AbModal> = args => <AbModal {...args} />

const DefaultModal = Template.bind({});

DefaultModal.args = {
    fechaModal: false
}

export { Modal, DefaultModal };
