import Button from './Button.svelte';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes
export default {
	title: 'Components/Button',
	component: Button,
	argTypes: {
		backgroundColor: { control: 'color' },
		label: { control: 'text' },
		onClick: { action: 'onClick' },
		primary: { control: 'boolean' },
		size: {
			control: { type: 'select' },
			options: ['small', 'medium', 'large']
		}
	}
};

// More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args
const Template = (args) => ({
	Component: Button,
	props: args,
	on: {
		click: args.onClick
	}
});

// More on args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Primary = Template.bind({});
Primary.args = {
	primary: true,
	label: 'Button'
};

export const Secondary = Template.bind({});
Secondary.args = {
	label: 'Button'
};

export const Rounded = Template.bind({});
Rounded.args = {
	label: 'Rounded',
	rounded: true
};

export const WithLeftIcon = Template.bind({});
WithLeftIcon.args = {
	primary: true,
	label: 'Add',
	leftIcon: 'add'
};

export const WithRightIcon = Template.bind({});
WithRightIcon.args = {
	label: 'Delete',
	rightIcon: 'trash'
};

export const SquaredIconButton = Template.bind({});
SquaredIconButton.args = {
	leftIcon: 'plus',
	icon: true
};

export const RoundedIconButton = Template.bind({});
RoundedIconButton.args = {
	leftIcon: 'plus',
	icon: true,
	rounded: true
};

export const Large = Template.bind({});
Large.args = {
	size: 'large',
	label: 'Button'
};

export const Small = Template.bind({});
Small.args = {
	size: 'small',
	label: 'Button'
};
