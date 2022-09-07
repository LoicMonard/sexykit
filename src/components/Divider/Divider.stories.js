import Divider from '../../lib/_components/Divider/Divider.svelte';

export default {
	title: 'Components/Divider',
	component: Divider,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/svelte/configure/story-layout
		layout: 'fullscreen'
	}
};

const Template = (args) => ({
	Component: Divider,
	props: args
});

export const Default = Template.bind({});
Default.args = {};
