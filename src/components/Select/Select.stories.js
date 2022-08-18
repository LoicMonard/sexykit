import Select from './Select.svelte';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes
export default {
	title: 'Inputs/Select',
	component: Select,
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
	Component: Select,
	props: args
});

export const Default = Template.bind({});
Default.args = {
	placeholder: 'Placeholder',
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ]
};
