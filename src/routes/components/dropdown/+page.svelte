<script>
	export const prerender = true;

	import Card from '$lib/_components/Card/Card.svelte';
	import Container from '$lib/_components/Container/Container.svelte';
	import CodeBlock from '$components/CodeBlock/CodeBlock.svelte';
	import Text from '$lib/_components/Text/Text.svelte';
	import Dropdown from '$lib/_components/Dropdown/Dropdown.svelte';
	import Button from '$lib/_components/Button/Button.svelte';
</script>

<Container direction="column" gap="20px" fullWidth>
	<Text>
		The <span class="property">Dropdown</span>
		component is mainly used to display a list of clickable options
	</Text>
	<Container direction="column" gap="20px" fullWidth>
		<h2>Default dropdown</h2>
		<Text>
			As the <span class="property">Dropdown</span>
			component uses the same item list as the
			<span class="property">Select</span>
			component, you will need to pass an array of objects to the
			<span class="property">items</span>
			property.
		</Text>
		<Text>
			The <span class="property">Dropdown</span>
			component works with a single default slot.
		</Text>
		<Card fullWidth bodyStyle="padding-bottom: 0px">
			<Container direction="column" gap="20px" fullWidth>
				<Container gap="10px" fullWidth>
					<Dropdown
						on:change={(e) => console.log(e.detail)}
						items={[
							{ value: 'option1', label: 'Action 1' },
							{ value: 'option2', label: 'Action 2' },
							{ value: 'option3', label: 'Action 3' }
						]}>
						<Button label="Dropdown" />
					</Dropdown>
					<Dropdown
						on:change={(e) => console.log(e.detail)}
						items={[
							{ value: 'option1', label: 'Action 1' },
							{ value: 'option2', label: 'Action 2', disabled: true },
							{ value: 'option3', label: 'Action 3' }
						]}>
						<Text link>
							Trigger
							<i class="fa-solid fa-chevron-down" style="font-size: 12px" />
						</Text>
					</Dropdown>
				</Container>
				<CodeBlock
					code={`<script>
	import Dropdown from 'pathToReplace/Dropdown.svelte';
</script>

<Dropdown
  on:change={(e) => console.log(e.detail)}
  items={[
    { value: 'option1', label: 'Action 1' },
    { value: 'option2', label: 'Action 2' },
    { value: 'option3', label: 'Action 3' }
  ]}>
  <Button label="Dropdown" />
</Dropdown>
<Dropdown
  on:change={(e) => console.log(e.detail)}
  items={[
    { value: 'option1', label: 'Action 1' },
    { value: 'option2', label: 'Action 2', disabled: true },
    { value: 'option3', label: 'Action 3' }
  ]}>
  <Text link>
    Trigger
    <i class="fa-solid fa-chevron-down" style="font-size: 12px" />
  </Text>
</Dropdown>`} />
			</Container>
		</Card>
	</Container>
</Container>
