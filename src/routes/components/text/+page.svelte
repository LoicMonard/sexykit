<script>
	export const prerender = true;

	import Card from '$lib/_components/Card/Card.svelte';
	import Container from '$lib/_components/Container/Container.svelte';
	import CodeBlock from '$components/CodeBlock/CodeBlock.svelte';
	import Text from '$lib/_components/Text/Text.svelte';
</script>

<Container direction="column" gap="20px" fullWidth>
	<Text>The text component provides a simple way to style text.</Text>
	<Container direction="column" gap="20px" fullWidth>
		<h2>Default text</h2>
		<Text>
			The default text you would be using. It replaces <span class="property">span</span>
			tags and helps homogeneity between your pages.
		</Text>
		<Card fullWidth bodyStyle="padding-bottom: 0px">
			<Container direction="column" gap="20px" fullWidth>
				<Container gap="10px" fullWidth>
					<Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis?</Text>
				</Container>
				<CodeBlock
					code={`<script>
	import Text from 'pathToReplace/Text.svelte';
</script>

<Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis?</Text>
					`} />
			</Container>
		</Card>
	</Container>

	<Container direction="column" gap="20px" fullWidth>
		<h2>Other text types</h2>
		<Text>
			You can use a bunch of properties to change the text type, like <span class="property">
				bold
			</span>
			,
			<span class="property">italic</span>
			, or even use a custom color with
			<span class="property">color</span>
			. Text component also offers a
			<span class="property">size</span>
			property to change the text size.
		</Text>
		<Card fullWidth bodyStyle="padding-bottom: 0px">
			<Container direction="column" gap="20px" fullWidth>
				<Container direction="column" gap="10px" fullWidth>
					<Text size="small">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis?
					</Text>
					<Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis?</Text>
					<Text size="large">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis?
					</Text>
					<Text bold>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis?</Text>
					<Text italic>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis?</Text>
					<Text color="red">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis?
					</Text>
				</Container>
				<CodeBlock
					code={`<script>
	import Text from 'pathToReplace/Text.svelte';
</script>
				
<Text size="small">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis?</Text>
<Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis?</Text>
<Text size="large">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis?</Text>
<Text bold>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis?</Text>
<Text italic>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis?</Text>
<Text color="red">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis?</Text>
					`} />
			</Container>
		</Card>
	</Container>
</Container>
