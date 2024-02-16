import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AbCard } from '../src';

export default {
  title: 'Componentes/AbCard',
  component: AbCard,
} as ComponentMeta<typeof AbCard>;

const Card = () => {
  return (
    <AbCard>
      <h1>Olá! Eu sou um card!</h1>
    </AbCard>
  );
};

export { Card };
