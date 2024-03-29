import Textfield from '../../lib/_components/Textfield/Textfield.svelte';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes
export default {
	title: 'Inputs/Textfield',
	component: Textfield,
	parameters: {
		actions: {
			handles: ['mouseover', 'input', 'click']
		}
	},
	argTypes: {
		placeholder: { control: 'text' },
		icon: { control: 'text' },
		size: {
			control: { type: 'select' },
			options: ['small', 'medium', 'large']
		}
	}
};

// More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args
const Template = (args) => ({
	Component: Textfield,
	props: args
});

export const Default = Template.bind({});
Default.args = {
	placeholder: 'Placeholder'
};

export const WithIcon = Template.bind({});
WithIcon.args = {
	placeholder: 'Enter a username',
	icon: 'user',
	label: 'Username'
};

export const Small = Template.bind({});
Small.args = {
	placeholder: 'Enter an email',
	label: 'Email',
	icon: 'at',
	size: 'small'
};

export const Readonly = Template.bind({});
Readonly.args = {
	value: 'Readonly input',
	readonly: true
};
