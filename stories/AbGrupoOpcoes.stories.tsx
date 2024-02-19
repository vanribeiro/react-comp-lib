import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AbGrupoOpcoes } from '../src';

export default {
  title: 'Componentes/AbGrupoOpcoes',
  component: AbGrupoOpcoes,
} as ComponentMeta<typeof AbGrupoOpcoes>;

const Template: ComponentStory<typeof AbGrupoOpcoes> = args => (
  // @ts-ignore
  <AbGrupoOpcoes {...args} />
);

const Default = Template.bind({});

Default.args = {
  opcoes: [
    {
      id: 1,
      titulo: 'E-book',
      corpo: 'R$ 39.90',
      rodape: '.pdf, .epub, .mob',
    },
    {
      id: 2,
      titulo: 'Impresso',
      corpo: 'R$ 59.90',
      rodape: '.pdf, .epub, .mob',
    },
    {
      id: 3,
      titulo: 'Impresso + E-book',
      corpo: 'R$ 89.90',
      rodape: '.pdf, .epub, .mob',
    },
  ],
};

export { Default };
