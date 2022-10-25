<script>
	export const prerender = true;

	import Card from '$lib/_components/Card/Card.svelte';
	import Container from '$lib/_components/Container/Container.svelte';
	import CodeBlock from '$components/CodeBlock/CodeBlock.svelte';
	import Text from '$lib/_components/Text/Text.svelte';
	import Divider from '$lib/_components/Divider/Divider.svelte';
</script>

<Container direction="column" gap="20px" fullWidth>
	<Text>
		The <span class="property">Divider</span>
		component is used to separate content.
	</Text>
	<Container direction="column" gap="20px" fullWidth>
		<h2>Default divider</h2>
		<Card fullWidth bodyStyle="padding-bottom: 0px">
			<Container direction="column" gap="20px" fullWidth>
				<Container gap="10px" fullWidth>
					<Divider />
				</Container>
				<CodeBlock
					code={`<script>
	import Divider from 'pathToReplace/Divider.svelte';
</script>

<Divider />`} />
			</Container>
		</Card>
	</Container>

	<Container direction="column" gap="20px" fullWidth>
		<h2>Margin</h2>
		<Text>
			You can use the <span class="property">margin</span>
			property to control the vertical margin of the divider.
		</Text>
		<Card fullWidth bodyStyle="padding-bottom: 0px">
			<Container direction="column" gap="20px" fullWidth>
				<Container gap="10px" fullWidth>
					<Divider margin="20px" />
				</Container>
				<CodeBlock
					code={`<script>
	import Divider from 'pathToReplace/Divider.svelte';
</script>

<Divider margin="20px" />`} />
			</Container>
		</Card>
	</Container>
</Container>
