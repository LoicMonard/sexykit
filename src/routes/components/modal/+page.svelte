<script>
	export const prerender = true;

	import Card from '$lib/_components/Card/Card.svelte';
	import Container from '$lib/_components/Container/Container.svelte';
	import CodeBlock from '$components/CodeBlock/CodeBlock.svelte';
	import Text from '$lib/_components/Text/Text.svelte';
	import Modal from '$lib/_components/Modal/Modal.svelte';
	import Button from '$lib/_components/Button/Button.svelte';
</script>

<Container direction="column" gap="20px" fullWidth>
	<Text>
		The <span class="property">Modal</span>
		component is used to display a modal window.
	</Text>
	<Container direction="column" gap="20px" fullWidth>
		<h2>Default modal</h2>
		<Text>
			The <span class="property">Modal</span>
			component just provides a
			<span class="property">title</span>
			property, and a default slot for your content.
		</Text>
		<Card fullWidth bodyStyle="padding-bottom: 0px">
			<Container direction="column" gap="20px" fullWidth>
				<Container gap="10px" fullWidth>
					<Modal>
						<Button label="Modal" slot="trigger" />
						This is the simplest modal template ever.
					</Modal>
					<Modal title="Short story">
						<Button label="Modal with title" slot="trigger" />
						Here is a short story about this modal.
					</Modal>
				</Container>
				<CodeBlock
					code={`<script>
	import Modal from 'pathToReplace/Modal.svelte';
	import Button from 'pathToReplace/Button.svelte';
</script>

<Modal>
  <Button label="Modal" slot="trigger" />
  This is the simplest modal template ever.
</Modal>
<Modal title="Short story">
  <Button label="Modal with title" slot="trigger" />
  Here is a short story about this modal.
</Modal>`} />
			</Container>
		</Card>
	</Container>
</Container>
