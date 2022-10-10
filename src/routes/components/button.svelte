<script>
	import Button from '$lib/_components/Button/Button.svelte';
	import Card from '$lib/_components/Card/Card.svelte';
	import Collapse from '$lib/_components/Collapse/Collapse.svelte';
	import CollapseItem from '$lib/_components/Collapse/CollapseItem.svelte';
	import Container from '$lib/_components/Container/Container.svelte';
	import Text from '$lib/_components/Text/Text.svelte';
	import xml from 'svelte-highlight/languages/xml';
	import { onMount } from 'svelte';

	let highlightComponent;
	let highlightStyles;

	onMount(async () => {
		xml.name = 'svelte';
		highlightComponent = (await import('svelte-highlight')).Highlight;
		highlightStyles = (await import('svelte-highlight/styles/atom-one-dark')).default;
	});
</script>

<svelte:head>
	{#if highlightStyles}
		{@html highlightStyles}
	{/if}
</svelte:head>

<Container direction="column" gap="20px" fullWidth>
	<Text>Comonly used button</Text>
	<Container direction="column" gap="20px" fullWidth>
		<h2>Basic</h2>
		<Text>Basic button</Text>
		<Card fullWidth bodyStyle="padding-bottom: 0px">
			<Container direction="column" gap="20px" fullWidth>
				<Container gap="10px" fullWidth>
					<Button primary label="Button" icon="user" />
					<Button label="Button" />
					<Button label="Rounded" rounded />
				</Container>
				<Collapse>
					<CollapseItem toggleOnTriggerOnly bordered={false}>
						<Container gap="10px" fullWidth slot="header">
							<Button leftIcon="plus" icon small />
						</Container>
						<i class="fa-solid fa-code" slot="trigger" />
						<svelte:component
							this={highlightComponent}
							language={xml}
							langtag
							code={`<Container gap="10px" fullWidth>
	<Button primary label="Button" icon="user" />
	<Button label="Button" />
	<Button label="Rounded" rounded />
</Container>`}
						/>
					</CollapseItem>
				</Collapse>
			</Container>
		</Card>
	</Container>

	<Container direction="column" gap="20px" fullWidth>
		<h2>With icon</h2>
		<Text>Button with icon</Text>
		<Card fullWidth>
			<Container direction="column" gap="20px" fullWidth>
				<Container gap="10px" fullWidth>
					<Button primary label="Add" leftIcon="add" />
					<Button label="Delete" rightIcon="trash" />
					<Button leftIcon="plus" icon />
					<Button leftIcon="plus" icon rounded />
				</Container>
				<Collapse>
					<CollapseItem name="Code here">Hello</CollapseItem>
				</Collapse>
			</Container>
		</Card>
	</Container>

	<Container direction="column" gap="20px" fullWidth>
		<h2>Sizes</h2>
		<Text>Button sizes</Text>
		<Card fullWidth>
			<Container direction="column" gap="20px" fullWidth>
				<Container gap="10px" fullWidth>
					<Button size="large" label="Large" />
					<Button primary label="Medium" />
					<Button size="small" label="Small" />
				</Container>
				<Collapse>
					<CollapseItem name="Code here">Hello</CollapseItem>
				</Collapse>
			</Container>
		</Card>
	</Container>
</Container>
