import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AbCard } from "../src";

export default {
    title: 'Componentes/AbCard',
    component: AbCard
} as ComponentMeta<typeof AbCard>;

const Template: ComponentStory<typeof AbCard> = 
    () => <AbCard />

export const Card = Template.bind({});