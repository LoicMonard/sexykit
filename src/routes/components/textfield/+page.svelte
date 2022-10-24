<script>
	export const prerender = true;

	import Card from '$lib/_components/Card/Card.svelte';
	import Container from '$lib/_components/Container/Container.svelte';
	import CodeBlock from '$components/CodeBlock/CodeBlock.svelte';
	import Text from '$lib/_components/Text/Text.svelte';
	import Textfield from '$lib/_components/Textfield/Textfield.svelte';

	let textfieldValue = 'Hello';
</script>

<Container direction="column" gap="20px" fullWidth>
	<Text>
		The <span class="property">Textfield</span>
		component is what replaces the input type text element.
	</Text>
	<Container direction="column" gap="20px" fullWidth>
		<h2>Basic</h2>
		<Text>
			The <span class="property">Textfield</span>
			component supports two way data binding with the
			<span class="property">bind:value</span>
			directive.
		</Text>
		<Card fullWidth bodyStyle="padding-bottom: 0px">
			<Container direction="column" gap="20px" fullWidth>
				<Container gap="10px" fullWidth align="center">
					<Textfield placeholder="Placeholder" bind:value={textfieldValue} />
					<Text bold>Value :</Text>
					{textfieldValue}
				</Container>
				<CodeBlock
					code={`<script>
  import Textfield from 'pathToReplace/Textfield.svelte';

	let textfieldValue = 'Hello';
</script>

<Textfield placeholder="Placeholder" bind:value={textfieldValue} />
`} />
			</Container>
		</Card>
	</Container>

	<Container direction="column" gap="20px" fullWidth>
		<h2>Sizes</h2>
		<Text>
			The <span class="property">Textfield</span>
			component supports three sizes:
			<span class="property">small</span>
			,
			<span class="property">medium</span>
			and
			<span class="property">large</span>
			.
		</Text>
		<Card fullWidth bodyStyle="padding-bottom: 0px">
			<Container direction="column" gap="20px" fullWidth>
				<Container gap="10px" fullWidth align="center">
					<Textfield placeholder="Placeholder" size="large" label="Large" />
					<Textfield placeholder="Placeholder" size="medium" label="Medium" />
					<Textfield placeholder="Placeholder" size="small" label="Small" />
				</Container>
				<CodeBlock
					code={`<script>
  import Textfield from 'pathToReplace/Textfield.svelte';
</script>

<Textfield placeholder="Placeholder" size="large" label="Large" />
<Textfield placeholder="Placeholder" size="medium" label="Medium" />
<Textfield placeholder="Placeholder" size="small" label="Small" />
`} />
			</Container>
		</Card>
	</Container>

	<Container direction="column" gap="20px" fullWidth>
		<h2>Disabled and readonly</h2>
		<Text>
			The <span class="property">Textfield</span>
			component supports two states:
			<span class="property">disabled</span>
			and
			<span class="property">readonly</span>
			.
		</Text>
		<Card fullWidth bodyStyle="padding-bottom: 0px">
			<Container direction="column" gap="20px" fullWidth>
				<Container gap="10px" fullWidth align="center">
					<Textfield placeholder="Disabled" label="Disabled" disabled />
					<Textfield placeholder="Readonly" label="Readonly" readonly />
				</Container>
				<CodeBlock
					code={`<script>
  import Textfield from 'pathToReplace/Textfield.svelte';
</script>

<Textfield placeholder="Disabled" label="Disabled" disabled />
<Textfield placeholder="Readonly" label="Readonly" readonly />
`} />
			</Container>
		</Card>
	</Container>

	<Container direction="column" gap="20px" fullWidth>
		<h2>With icon</h2>
		<Text>
			The <span class="property">Textfield</span>
			component supports icons.
		</Text>
		<Card fullWidth bodyStyle="padding-bottom: 0px">
			<Container direction="column" gap="20px" fullWidth>
				<Container gap="10px" fullWidth align="center">
					<Textfield placeholder="Enter your first name" label="First name" icon="person" />
				</Container>
				<CodeBlock
					code={`<script>
  import Textfield from 'pathToReplace/Textfield.svelte';
</script>

<Textfield placeholder="Enter your first name" label="First name" icon="person" />
`} />
			</Container>
		</Card>
	</Container>
</Container>
