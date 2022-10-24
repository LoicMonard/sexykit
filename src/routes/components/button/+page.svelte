<script>
	export const prerender = true;

	import Button from '$lib/_components/Button/Button.svelte';
	import Card from '$lib/_components/Card/Card.svelte';
	import Container from '$lib/_components/Container/Container.svelte';
	import CodeBlock from '$components/CodeBlock/CodeBlock.svelte';
	import Text from '$lib/_components/Text/Text.svelte';
</script>

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
				<CodeBlock
					code={`<Container gap="10px" fullWidth>
	<Button primary label="Button" icon="user" />
	<Button label="Button" />
	<Button label="Rounded" rounded />
</Container>`} />
			</Container>
		</Card>
	</Container>

	<Container direction="column" gap="20px" fullWidth>
		<h2>With icon</h2>
		<Text>Button with icon</Text>
		<Card fullWidth bodyStyle="padding-bottom: 0px">
			<Container direction="column" gap="20px" fullWidth>
				<Container gap="10px" fullWidth>
					<Button primary label="Add" leftIcon="add" />
					<Button label="Delete" rightIcon="trash" />
					<Button leftIcon="plus" icon />
					<Button leftIcon="plus" icon rounded />
				</Container>
				<CodeBlock
					code={`<Container gap="10px" fullWidth>
	<Button primary label="Add" leftIcon="add" />
	<Button label="Delete" rightIcon="trash" />
	<Button leftIcon="plus" icon />
	<Button leftIcon="plus" icon rounded />
</Container>`} />
			</Container>
		</Card>
	</Container>

	<Container direction="column" gap="20px" fullWidth>
		<h2>Sizes</h2>
		<Text>Button sizes</Text>
		<Card fullWidth bodyStyle="padding-bottom: 0px">
			<Container direction="column" gap="20px" fullWidth>
				<Container gap="10px" fullWidth>
					<Button size="large" label="Large" />
					<Button primary label="Medium" />
					<Button size="small" label="Small" />
				</Container>
				<CodeBlock
					code={`<Container gap="10px" fullWidth>
	<Button size="large" label="Large" />
	<Button primary label="Medium" />
	<Button size="small" label="Small" />
</Container>`} />
			</Container>
		</Card>
	</Container>
</Container>
