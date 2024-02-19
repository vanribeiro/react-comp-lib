import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AbBotao, AbBotaoProps } from '../src';

export default {
  title: 'Componentes/AbBotao',
  component: AbBotao,
} as ComponentMeta<typeof AbBotao>;

// @ts-ignore
const Template: ComponentStory<typeof AbBotao> = args => <AbBotao {...args} />;

const Primario = Template.bind({});

Primario.args = {
  texto: 'Ab Botão Primário',
  tipo: 'primario',
} as AbBotaoProps;

const Secundario = Template.bind({});

Secundario.args = {
  texto: 'Ab Botão Secundário',
  tipo: 'secundario',
} as AbBotaoProps;

export { Primario, Secundario };
