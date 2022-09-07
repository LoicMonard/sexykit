import Card from '../../lib/_components/Card/Card.svelte';

export default {
	title: 'Components/Card',
	component: Card,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/svelte/configure/story-layout
		layout: 'fullscreen'
	},
	argTypes: {
		fullWidth: { control: 'boolean' }
	}
};

const Template = (args) => ({
	Component: Card,
	props: args,
});

export const Default = Template.bind({});
Default.args = {
	fullWidth: true,
};
