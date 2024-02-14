import React from 'react';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AbTag, AbTagProps } from '../src';

export default {
    title: 'Componentes/AbTag',
    component: AbTag
} as ComponentMeta<typeof AbTag>;

const Template: ComponentStory<typeof AbTag> = 
    (args) => <AbTag {...args}/>

const Tag = Template.bind({});

Tag.args = {
    texto: 'Ab Tag'
} as AbTagProps;

// const Secundario = Template.bind({});

// Secundario.args = {
//     texto: 'Ab Botão Secundário',
//     tipo: 'secundario'
// } as AbTagProps;


export {
    Tag,
    // Secundario
}