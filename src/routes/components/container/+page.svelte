<script>
	export const prerender = true;

	import Button from '$lib/_components/Button/Button.svelte';
	import Card from '$lib/_components/Card/Card.svelte';
	import Container from '$lib/_components/Container/Container.svelte';
	import CodeBlock from '$components/CodeBlock/CodeBlock.svelte';
	import Text from '$lib/_components/Text/Text.svelte';
</script>

<Container direction="column" gap="20px" fullWidth>
	<Text>
		The <span class="property">Container</span> component is used to organize your elements. It is
		flex and acts like flexboxes but embeds some useful features like
		<span class="property">gap</span>, <span class="property">direction</span>,
		<span class="property">alignment</span>, etc.
	</Text>
	<Container direction="column" gap="20px" fullWidth>
		<h2>Default container</h2>
		<Text>
			Default container only fits to its content, and is row-based. Simply add <span
				class="property">fullWidth</span
			> property so the Container can stretch to the parent width
		</Text>
		<Card fullWidth bodyStyle="padding-bottom: 0px">
			<Container direction="column" gap="20px" fullWidth>
				<Container>
					<div class="line" style="width: 150px" />
					<div class="line" style="width: 150px" />
					<div class="line" style="width: 150px" />
				</Container>
				<Container fullWidth>
					<div class="line" style="flex: 1" />
					<div class="line" style="flex: 1" />
					<div class="line" style="flex: 1" />
				</Container>
				<CodeBlock
					code={`<script>
	import Container from 'pathToReplace/Container.svelte';
</script>

<Container>
  <div class="line" style="width: 150px" />
  <div class="line" style="width: 150px" />
  <div class="line" style="width: 150px" />
</Container>

<Container fullWidth>
  <div class="line" style="flex: 1" />
  <div class="line" style="flex: 1" />
  <div class="line" style="flex: 1" />
</Container>`}
				/>
			</Container>
		</Card>
	</Container>

	<Container direction="column" gap="20px" fullWidth>
		<h2>Column container</h2>
		<Text>
			Containers inherits from flexbox, so you can use <span class="property">direction</span>
			property to change the direction of the container. You can also use
			<span class="property">fullHeight</span>
			property to make the container take the full height of its parent.
		</Text>
		<Card fullWidth bodyStyle="padding-bottom: 0px">
			<Container direction="column" gap="20px" fullWidth>
				<Container direction="row" gap="20px" style="height: 150px">
					<Container direction="column">
						<div class="line" style="width: 150px" />
						<div class="line" style="width: 150px" />
						<div class="line" style="width: 150px" />
					</Container>
					<Container direction="column" fullHeight justify="space-between">
						<div class="line" style="width: 150px; flex: 1;" />
						<div class="line" style="width: 150px; flex: 1;" />
						<div class="line" style="width: 150px; flex: 1;" />
					</Container>
				</Container>
				<CodeBlock
					code={`<script>
	import Container from 'pathToReplace/Container.svelte';
</script>

<Container direction="column">
  <div class="line" style="width: 150px" />
  <div class="line" style="width: 150px" />
  <div class="line" style="width: 150px" />
</Container>

<Container direction="column" fullHeight justify="space-between">
  <div class="line" style="width: 150px; flex: 1;" />
  <div class="line" style="width: 150px; flex: 1;" />
  <div class="line" style="width: 150px; flex: 1;" />
</Container>`}
				/>
			</Container>
		</Card>
	</Container>

	<Container direction="column" gap="20px" fullWidth>
		<h2>Alignment, justifying and spacing</h2>
		<Text>
			You can use <span class="property">align</span>, <span class="property">justify</span> and
			<span class="property">gap</span> properties to align, justify and space your elements.
		</Text>
		<Card fullWidth bodyStyle="padding-bottom: 0px">
			<Container direction="column" fullWidth gap="20px">
				<Container direction="column" fullWidth gap="20px">
					<Container direction="row" fullWidth gap="4px">
						<div class="line" style="flex: 1;" />
						<div class="line" style="flex: 1;" />
						<div class="line" style="flex: 1;" />
					</Container>
					<Container direction="row" fullWidth justify="center" gap="50px">
						<div class="line" style="width: 150px" />
						<div class="line" style="width: 150px" />
						<div class="line" style="width: 150px" />
					</Container>
					<Container direction="row" fullWidth justify="space-evenly">
						<div class="line" style="width: 150px" />
						<div class="line" style="width: 150px" />
						<div class="line" style="width: 150px" />
						<div class="line" style="width: 150px" />
						<div class="line" style="width: 150px" />
					</Container>
					<Container direction="row" fullWidth justify="space-between" gap="50px">
						<div class="line" style="flex: 1;" />
						<div class="line" style="flex: 1;" />
					</Container>
					<Container direction="row" fullWidth justify="end" gap="4px">
						<div class="line" style="width: 150px" />
						<div class="line" style="width: 150px" />
					</Container>
					<Container
						direction="column"
						fullWidth
						gap="4px"
						align="center"
						style="background-color: #f5f5f5"
					>
						<div class="line" style="width: 150px" />
						<div class="line" style="width: 150px" />
					</Container>
				</Container>
				<CodeBlock
					code={`<script>
	import Container from 'pathToReplace/Container.svelte';
</script>

<Container direction="column" fullWidth gap="20px">
  <Container direction="row" fullWidth gap="4px">
    <div class="line" style="flex: 1;" />
    <div class="line" style="flex: 1;" />
    <div class="line" style="flex: 1;" />
  </Container>

  <Container direction="row" fullWidth justify="center" gap="50px">
    <div class="line" style="width: 150px" />
    <div class="line" style="width: 150px" />
    <div class="line" style="width: 150px" />
  </Container>

  <Container direction="row" fullWidth justify="space-evenly">
    <div class="line" style="width: 150px" />
    <div class="line" style="width: 150px" />
    <div class="line" style="width: 150px" />
    <div class="line" style="width: 150px" />
    <div class="line" style="width: 150px" />
  </Container>

  <Container direction="row" fullWidth justify="space-between" gap="50px">
    <div class="line" style="flex: 1;" />
    <div class="line" style="flex: 1;" />
  </Container>

  <Container direction="row" fullWidth justify="end" gap="4px">
    <div class="line" style="width: 150px" />
    <div class="line" style="width: 150px" />
  </Container>
  
  <Container
    direction="column"
    fullWidth
    gap="4px"
    align="center"
    style="background-color: #f5f5f5"
  >
    <div class="line" style="width: 150px" />
    <div class="line" style="width: 150px" />
  </Container>
</Container>`}
				/>
			</Container>
		</Card>
	</Container>

	<Container direction="column" gap="20px" fullWidth>
		<h2>Custom style container</h2>
		<Text>
			You can use <span class="property">style</span> property to add custom style to your container.
		</Text>
		<Card fullWidth bodyStyle="padding-bottom: 0px">
			<Container direction="column" gap="20px" fullWidth>
				<Container
					direction="row"
					gap="20px"
					fullWidth
					justify="space-evenly"
					style="padding: 10px; background-color: #f5f5f5;"
				>
					<div class="line" style="width: 150px" />
					<div class="line" style="width: 150px" />
					<div class="line" style="width: 150px" />
				</Container>
				<CodeBlock
					code={`<script>
	import Container from 'pathToReplace/Container.svelte';
</script>

<Container direction="column">
  <div class="line" style="width: 150px" />
  <div class="line" style="width: 150px" />
  <div class="line" style="width: 150px" />
</Container>

<Container direction="column" fullHeight justify="space-between">
  <div class="line" style="width: 150px; flex: 1;" />
  <div class="line" style="width: 150px; flex: 1;" />
  <div class="line" style="width: 150px; flex: 1;" />
</Container>`}
				/>
			</Container>
		</Card>
	</Container>
</Container>

<style>
	.line {
		background-color: #ee6783;
		min-width: 100px;
		height: 30px;
		border-radius: 5px;
	}
	.line:nth-child(odd) {
		background-color: #f8d0d5;
	}
</style>
