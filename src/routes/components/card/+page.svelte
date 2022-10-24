<script>
	export const prerender = true;

	import Card from '$lib/_components/Card/Card.svelte';
	import Container from '$lib/_components/Container/Container.svelte';
	import CodeBlock from '$components/CodeBlock/CodeBlock.svelte';
	import Text from '$lib/_components/Text/Text.svelte';
	import Pumpkin from '$statics/pumpkin.jpg';
</script>

<Container direction="column" gap="20px" fullWidth>
	<Text>
		The <span class="property">Card</span>
		component is a container that can be used to group content.
	</Text>
	<Container direction="column" gap="20px" fullWidth>
		<h2>Default card</h2>
		<Text>By default, the card component has a white background and a shadow.</Text>
		<Card fullWidth bodyStyle="padding-bottom: 0px">
			<Container direction="column" gap="20px" fullWidth>
				<Container gap="10px" fullWidth>
					<Card>Hello I'm a card</Card>
				</Container>
				<CodeBlock
					code={`<script>
	import Card from 'pathToReplace/Card.svelte';
</script>

<Card>Hello I'm a card</Card>
					`} />
			</Container>
		</Card>
	</Container>

	<Container direction="column" gap="20px" fullWidth>
		<h2>Content</h2>
		<Text>
			Cards support two types of slots, <span class="property">header</span>
			which is displayed at the top of the card, and the default slot which is used for the body of the
			<span class="property">Card</span>
			. If the header slot is missing, the
			<span class="property">Card</span>
			will only display its body.
		</Text>
		<Card fullWidth bodyStyle="padding-bottom: 0px">
			<Container direction="column" gap="20px" fullWidth>
				<Container gap="10px" fullWidth>
					<Card>Hello I'm a card</Card>
					<Card>
						<Text slot="header">I'm a header</Text>
						Hello I'm a card
					</Card>
				</Container>
				<CodeBlock
					code={`<script>
	import Card from 'pathToReplace/Card.svelte';
</script>

<Card>Hello I'm a card</Card>
					`} />
			</Container>
		</Card>
	</Container>

	<Container direction="column" gap="20px" fullWidth>
		<h2>Shadows</h2>
		<Text>
			The <span class="property">shadow</span>
			property can be used to change the shadow of the card. The default value is
			<span class="property">hover</span>
			, which means that the shadow will only be visible when the mouse is over the card.
		</Text>
		<Card fullWidth bodyStyle="padding-bottom: 0px">
			<Container direction="column" gap="20px" fullWidth>
				<Container gap="10px" fullWidth>
					<Card>You need to hover me to see my shadow</Card>
					<Card shadow="always">You will always see my shadow</Card>
					<Card shadow="never">You will never see my shadow</Card>
				</Container>
				<CodeBlock
					code={`<script>
	import Card from 'pathToReplace/Card.svelte';
</script>

<Card>You need to hover me to see my shadow</Card>
<Card shadow="always">You will always see my shadow</Card>
<Card shadow="never">You will never see my shadow</Card>`} />
			</Container>
		</Card>
	</Container>

	<Container direction="column" gap="20px" fullWidth>
		<h2>Custom styles</h2>
		<Text>
			You can customize the styles of the <span class="property">Card</span>
			by using the
			<span class="property">headerStyle</span>
			and
			<span class="property">bodyStyle</span>
			props.
		</Text>
		<Card fullWidth bodyStyle="padding-bottom: 0px">
			<Container direction="column" gap="20px" fullWidth>
				<Container gap="10px" fullWidth>
					<Card headerStyle="padding: 0;" bodyStyle="max-width: 200px;">
						<img slot="header" src={Pumpkin} />
						<Text>
							A <Text bold>pumpkin</Text> is a cultivar of winter squash that is round with smooth, slightly
							ribbed skin, and is most often deep yellow to orange in coloration.
						</Text>
					</Card>
					<Card headerStyle="background: #f5f5f5;" bodyStyle="color: purple">
						<Text slot="header">I'm a header</Text>
						Hello I'm a card
					</Card>
				</Container>
				<CodeBlock
					code={`<script>
	import Card from 'pathToReplace/Card.svelte';
</script>

<Card headerStyle="padding: 0;" bodyStyle="max-width: 200px;">
	<img slot="header" src="path/to/image" />
	<Text>
		A <Text bold>pumpkin</Text> is a cultivar of winter squash that is round with smooth, slightly
		ribbed skin, and is most often deep yellow to orange in coloration.
	</Text>
</Card>
<Card headerStyle="background: #f5f5f5;" bodyStyle="color: purple">
	<Text slot="header">I'm a header</Text>
	Hello I'm a card
</Card>
					`} />
			</Container>
		</Card>
	</Container>
</Container>

<style>
	img {
		width: 200px;
	}
</style>
