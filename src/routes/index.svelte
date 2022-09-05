<script>
	import Button from '$components/Button/Button.svelte';
	import Textfield from '$components/Textfield/Textfield.svelte';
	import Select from '../components/Select/Select.svelte';
	import Card from '../components/Card/Card.svelte';
	import Container from '../components/Container/Container.svelte';
	import Divider from '../components/Divider/Divider.svelte';
	import Tabs from '../components/Tabs/Tabs.svelte';
	import Tab from '../components/Tabs/Tab.svelte';

	const selectOptions = [
		{
			value: 'option1',
			label: 'Option 1'
		},
		{
			value: 'option2',
			label: 'Option 2'
		},
		{
			value: 'option3',
			label: 'Option 3'
		}
	];
</script>

<Container direction="column" justify="start" align="start" gap="20px" padding="20px" fullWidth>
	<Container direction="column" justify="start" fullWidth gap="20px">
		<h1>Button</h1>
		<Card fullWidth>
			<Container gap="10px">
				<Button size="large" label="Large" />
				<Button primary label="Button" icon="user" />
				<Button label="Button" />
				<Button label="Rounded" rounded />
				<Button primary label="Add" leftIcon="add" />
				<Button label="Delete" rightIcon="trash" />
				<Button leftIcon="plus" icon />
				<Button leftIcon="plus" icon rounded />
				<Button size="small" label="Small" />
			</Container>
		</Card>
	</Container>

	<Container direction="column" justify="start" fullWidth gap="20px">
		<h1>Textfield</h1>
		<Card fullWidth>
			<Container gap="10px">
				<Textfield placeholder="Search" />
				<Textfield placeholder="Enter a username" icon="user" label="Username" />
				<Textfield placeholder="Enter an email" label="Email" icon="at" size="small" />
				<Textfield value="Readonly input" readonly />
			</Container>
		</Card>
	</Container>

	<Container direction="column" justify="start" fullWidth gap="20px">
		<h1>Select</h1>
		<Card fullWidth>
			<Container gap="10px">
				<Select
					placeholder="Placeholder"
					label="Select an option"
					options={selectOptions}
					on:change={(e) => console.log(e.detail)}
				/>
				<Select
					on:change={(e) => console.log(e.detail)}
					placeholder="Choose a fruit"
					label="Fruit"
					icon="lemon"
					valueKey="label"
					options={[
						{ value: 'lemon', label: 'Lemon' },
						{ value: 'orange', label: 'Orange' }
					]}
				/>
				<Select
					placeholder="Placeholder"
					label="Select an option"
					options={[
						{ value: 'option1', label: 'Option 1' },
						{ value: 'option2', label: 'Option 2', disabled: true },
						{ value: 'option3', label: 'Option 3' }
					]}
				/>
			</Container>
		</Card>
	</Container>

	<Container direction="column" justify="start" fullWidth gap="20px">
		<h1>Card</h1>
		<Card fullWidth>
			<Container gap="10px" fullWidth>
				<Card>
					<div slot="header">Card title</div>
					<p>This is a card</p>
				</Card>
				<Card>
					<p>This is a card without title</p>
				</Card>
				<Card fullWidth>
					<div slot="header">Card title</div>
					<p>This is a full width card</p>
				</Card>
			</Container>
		</Card>
	</Container>

	<Container direction="column" justify="start" fullWidth gap="20px">
		<h1>Divider</h1>
		<Card fullWidth>
			<Divider />
		</Card>
	</Container>

	<Container direction="column" justify="start" fullWidth gap="20px">
		<h1>Tabs</h1>
		<Card fullWidth>
			<Tabs>
				<Tab name="First tab">Content of the first tab</Tab>
				<Tab name="Second tab">Content of the second tab</Tab>
				<Tab name="Third tab">Content of the third tab</Tab>
			</Tabs>
		</Card>
	</Container>
</Container>

<style lang="scss">
	@import '$styles/global.scss';
</style>
