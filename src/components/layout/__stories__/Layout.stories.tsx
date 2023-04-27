import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";
import DefaultLayout from "../DefaultLayout";


export default {
    title: "Layout",
    component: DefaultLayout,
    argTypes: {}
} as ComponentMeta<typeof DefaultLayout>


const Template: ComponentStory<typeof DefaultLayout> =
    (args) => <DefaultLayout/>

export const Default = Template.bind({})
