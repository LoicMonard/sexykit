<script>
	export const prerender = true;

	import Card from '$lib/_components/Card/Card.svelte';
	import Container from '$lib/_components/Container/Container.svelte';
	import CodeBlock from '$components/CodeBlock/CodeBlock.svelte';
	import Text from '$lib/_components/Text/Text.svelte';
	import Tabs from '$lib/_components/Tabs/Tabs.svelte';
	import Tab from '$lib/_components/Tabs/Tab.svelte';
</script>

<Container direction="column" gap="20px" fullWidth>
	<Text>
		<span class="property">Tabs</span>
		are used to switch between different views.
	</Text>
	<Text>
		A <span class="property">Tabs</span>
		component includes many
		<span class="property">Tab</span>
		components, and displays a view per tab.
	</Text>
	<Container direction="column" gap="20px" fullWidth>
		<h2>Default tabs</h2>
		<Text>
			The <span class="property">Tab</span>
			component just provides a
			<span class="property">name</span>
			property, and a default slot for your view.
		</Text>
		<Card fullWidth bodyStyle="padding-bottom: 0px">
			<Container direction="column" gap="20px" fullWidth>
				<Container gap="10px" fullWidth>
					<Tabs>
						<Tab name="First tab">Content of the first tab</Tab>
						<Tab name="Second tab">Content of the second tab</Tab>
						<Tab name="Third tab">Content of the third tab</Tab>
					</Tabs>
				</Container>
				<CodeBlock
					code={`<script>
	import Tabs from 'pathToReplace/Tabs.svelte';
	import Tab from 'pathToReplace/Tab.svelte';
</script>

<Tabs>
  <Tab name="First tab">Content of the first tab</Tab>
  <Tab name="Second tab">Content of the second tab</Tab>
  <Tab name="Third tab">Content of the third tab</Tab>
</Tabs>`} />
			</Container>
		</Card>
	</Container>
</Container>
