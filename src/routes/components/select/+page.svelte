<script>
	export const prerender = true;

	import Card from '$lib/_components/Card/Card.svelte';
	import Container from '$lib/_components/Container/Container.svelte';
	import CodeBlock from '$components/CodeBlock/CodeBlock.svelte';
	import Text from '$lib/_components/Text/Text.svelte';
	import Select from '$lib/_components/Select/Select.svelte';

	let selectedValue;
</script>

<Container direction="column" gap="20px" fullWidth>
	<Text>Select component is perfect to display plenty of options</Text>
	<Container direction="column" gap="20px" fullWidth>
		<h2>Basic usage</h2>
		<Text>
			The default <span class="property">Select</span>
			component is a simple input with a dropdown list. It works with any kind of data, as long as you
			provide the right keys to access the desired
			<span class="property">value</span>
			and
			<span class="property">label</span>
			.
		</Text>
		<Text>
			The <span class="property">Select</span>
			component also includes a search input to filter the list of options.
		</Text>
		<Card fullWidth bodyStyle="padding-bottom: 0px">
			<Container direction="column" gap="20px" fullWidth>
				<Container gap="10px" fullWidth>
					<Select
						placeholder="Choose an option"
						label="Option"
						options={[
							{ value: 'option1', label: 'Option 1' },
							{ value: 'option2', label: 'Option 2' },
							{ value: 'option3', label: 'Option 3' }
						]} />
				</Container>
				<CodeBlock
					code={`<script>
	import Select from 'pathToReplace/Select.svelte';
</script>

<Select
	placeholder="Choose an option"
	label="Option"
	options={[
		{ value: 'option1', label: 'Option 1' },
		{ value: 'option2', label: 'Option 2' },
		{ value: 'option3', label: 'Option 3' }
	]} 
/>`} />
			</Container>
		</Card>
	</Container>

	<Container direction="column" gap="20px" fullWidth>
		<h2>Sizes</h2>
		<Text>
			As the <span class="property">Select</span>
			component is based on the
			<span class="property">Textfield</span>
			component, it supports the same sizes. It can also be used with an icon with the
			<span class="property">icon</span>
			 property.
		</Text>
		<Card fullWidth bodyStyle="padding-bottom: 0px">
			<Container direction="column" gap="20px" fullWidth>
				<Container gap="10px" fullWidth>
					<Select
						placeholder="Choose an option"
						label="Large"
						size="large"
						options={[
							{ value: 'option1', label: 'Option 1' },
							{ value: 'option2', label: 'Option 2' },
							{ value: 'option3', label: 'Option 3' }
						]} />
					<Select
						placeholder="Choose an option"
						label="Medium"
						options={[
							{ value: 'option1', label: 'Option 1' },
							{ value: 'option2', label: 'Option 2' },
							{ value: 'option3', label: 'Option 3' }
						]} />
					<Select
						placeholder="Choose an option"
						label="Small"
						size="small"
						icon="lemon"
						options={[
							{ value: 'option1', label: 'Option 1' },
							{ value: 'option2', label: 'Option 2' },
							{ value: 'option3', label: 'Option 3' }
						]} />
				</Container>
				<CodeBlock
					code={`<script>
	import Select from 'pathToReplace/Select.svelte';
</script>

<Select
	placeholder="Choose an option"
	label="Option"
	options={[
		{ value: 'option1', label: 'Option 1' },
		{ value: 'option2', label: 'Option 2' },
		{ value: 'option3', label: 'Option 3' }
	]} 
/>`} />
			</Container>
		</Card>
	</Container>

	<Container direction="column" gap="20px" fullWidth>
		<h2>Data binding</h2>
		<Text>
			To add two way data binding over the <span class="property">Select</span>
			component, simply pass your reference as the
			<span class="property">value</span>
			property, and make sure to update your reference whenever the
			<span class="property">Select</span>
			<span class="property">change</span>
			event is fired.
		</Text>
		<Card fullWidth bodyStyle="padding-bottom: 0px">
			<Container direction="column" gap="20px" fullWidth>
				<Container gap="10px" fullWidth>
					<Select
						value={selectedValue}
						on:change={(e) => (selectedValue = e.detail)}
						options={[
							{ value: 'option1', label: 'Option 1' },
							{ value: 'option2', label: 'Option 2' },
							{ value: 'option3', label: 'Option 3' }
						]} />
					<Select
						value={selectedValue}
						on:change={(e) => (selectedValue = e.detail)}
						options={[
							{ value: 'option1', label: 'Option 1' },
							{ value: 'option2', label: 'Option 2' },
							{ value: 'option3', label: 'Option 3' }
						]} />
					<Select
						value={selectedValue}
						on:change={(e) => (selectedValue = e.detail)}
						options={[
							{ value: 'option1', label: 'Option 1' },
							{ value: 'option2', label: 'Option 2' },
							{ value: 'option3', label: 'Option 3' }
						]} />
				</Container>
				<CodeBlock
					code={`<script>
	import Select from 'pathToReplace/Select.svelte';

	let selectedValue;
	const options = [
		{ value: 'option1', label: 'Option 1' },
		{ value: 'option2', label: 'Option 2' },
		{ value: 'option3', label: 'Option 3' }
	];
</script>

<Select
	value={selectedValue}
	on:change={(e) => selectedValue = e.detail}
	{options} />
<Select
	value={selectedValue}
	on:change={(e) => selectedValue = e.detail}
	{options} />
<Select
	value={selectedValue}
	on:change={(e) => selectedValue = e.detail}
	{options} />
`} />
			</Container>
		</Card>
	</Container>

	<Container direction="column" gap="20px" fullWidth>
		<h2>Disabled select</h2>
		<Text>
			To disable the <span class="property">Select</span>
			component, simply pass the
			<span class="property">disabled</span>
			property.
		</Text>
		<Card fullWidth bodyStyle="padding-bottom: 0px">
			<Container direction="column" gap="20px" fullWidth>
				<Container gap="10px" fullWidth>
					<Select
						label="Disabled"
						disabled
						options={[
							{ value: 'option1', label: 'Option 1' },
							{ value: 'option2', label: 'Option 2' },
							{ value: 'option3', label: 'Option 3' }
						]} />
				</Container>
				<CodeBlock
					code={`<script>
	import Select from 'pathToReplace/Select.svelte';
</script>

<Select
	label="Disabled"
	disabled
	options={[
		{ value: 'option1', label: 'Option 1' },
		{ value: 'option2', label: 'Option 2' },
		{ value: 'option3', label: 'Option 3' }
	]} />
`} />
			</Container>
		</Card>
	</Container>

	<Container direction="column" gap="20px" fullWidth>
		<h2>Disabled options</h2>
		<Text>
			To disable a specific option, simply pass the
			<span class="property">disabled</span>
			property to the option object.
		</Text>
		<Card fullWidth bodyStyle="padding-bottom: 0px">
			<Container direction="column" gap="20px" fullWidth>
				<Container gap="10px" fullWidth>
					<Select
						options={[
							{ value: 'option1', label: 'Option 1' },
							{ value: 'option2', label: 'Option 2', disabled: true },
							{ value: 'option3', label: 'Option 3' }
						]} />
				</Container>
				<CodeBlock
					code={`<script>
	import Select from 'pathToReplace/Select.svelte';
</script>

<Select
	options={[
		{ value: 'option1', label: 'Option 1' },
		{ value: 'option2', label: 'Option 2', disabled: true },
		{ value: 'option3', label: 'Option 3' }
	]} />
`} />
			</Container>
		</Card>
	</Container>
</Container>
