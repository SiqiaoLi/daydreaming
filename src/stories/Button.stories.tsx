// import { storiesOf } from "@storybook/react";
import { Button } from "../components/Button";
import { Story } from "@storybook/react";
import React, { ComponentProps } from "react";

// const stories = storiesOf("Button", module);
// stories.add("Button with Text", () => <Button>Hello</Button>);

export default {
    title: "Button",
    component: Button
};

const Template: Story<ComponentProps<typeof Button>> = (args) => <Button {...args}>click</Button>;

export const Primary = Template.bind({});

Primary.args = {
    primary: true,
    label: "Primary"
};
