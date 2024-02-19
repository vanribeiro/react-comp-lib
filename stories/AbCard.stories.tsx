import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AbCard } from '../src';

export default {
  title: 'Componentes/AbCard',
  component: AbCard,
} as ComponentMeta<typeof AbCard>;

const Card = () => {
  return (
    // @ts-ignore
    <AbCard>
      <h1>Olá! Eu sou um card!</h1>
    </AbCard>
  );
};

// @ts-ignore
const Template: ComponentStory<typeof AbCard> = args => <AbCard {...args} />;

const Default = Template.bind({});

export { Card, Default };
