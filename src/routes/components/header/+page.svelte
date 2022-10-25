<script>
	import Button from '$lib/_components/Button/Button.svelte';

	export const prerender = true;

	import Card from '$lib/_components/Card/Card.svelte';
	import Container from '$lib/_components/Container/Container.svelte';
	import CodeBlock from '$components/CodeBlock/CodeBlock.svelte';
	import Text from '$lib/_components/Text/Text.svelte';
	import Header from '$lib/_components/Header/Header.svelte';
</script>

<Container direction="column" gap="20px" fullWidth>
	<Text>
		Basic <span class="property">Header</span>
		component.
	</Text>
	<Container direction="column" gap="20px" fullWidth>
		<h2>Default header</h2>
		<Text>
			The <span class="property">Header</span>
			component acts like a container, it provides a default slot.
		</Text>
		<Card fullWidth bodyStyle="padding-bottom: 0px">
			<Container direction="column" gap="20px" fullWidth>
				<Container gap="10px" fullWidth>
					<Header style="border: 1px solid #e5e5e5;">
						<Container
							direction="row"
							justify="space-between"
							style="align-items: center"
							fullWidth>
							<Text>Header</Text>
							<Button label="Header button" />
						</Container>
					</Header>
				</Container>
				<CodeBlock
					code={`<script>
	import Header from 'pathToReplace/Header.svelte';
	import Container from 'pathToReplace/Container.svelte';
	import Text from 'pathToReplace/Button.svelte';
	import Button from 'pathToReplace/Button.svelte';
</script>

<Header style="border: 1px solid #e5e5e5;">
  <Container
    direction="row"
    justify="space-between"
    style="align-items: center"
    fullWidth>
    <Text>Header</Text>
    <Button label="Header button" />
  </Container>
</Header>`} />
			</Container>
		</Card>
	</Container>

	<Container direction="column" gap="20px" fullWidth>
		<h2>Fixed header</h2>
		<Text>
			The <span class="property">Header</span>
			component acts like a container, it provides a default slot.
		</Text>
		<Card fullWidth bodyStyle="padding-bottom: 0px">
			<Container direction="column" gap="20px" fullWidth>
				<Container gap="10px" fullWidth />
				<CodeBlock
					code={`<script>
	import Header from 'pathToReplace/Header.svelte';
	import Container from 'pathToReplace/Container.svelte';
	import Text from 'pathToReplace/Button.svelte';
	import Button from 'pathToReplace/Button.svelte';
</script>

<Header fixed style="border: 1px solid #e5e5e5;">
  <Container
    direction="row"
    justify="space-between"
    style="align-items: center"
    fullWidth>
    <Text>Header</Text>
    <Button label="Header button" />
  </Container>
</Header>`} />
			</Container>
		</Card>
	</Container>
</Container>
