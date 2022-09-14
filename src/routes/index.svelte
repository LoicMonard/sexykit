<script>
	import Button from '$lib/_components/Button/Button.svelte';
	import Textfield from '$lib/_components/Textfield/Textfield.svelte';
	import Select from '$lib/_components/Select/Select.svelte';
	import Card from '$lib/_components/Card/Card.svelte';
	import Container from '$lib/_components/Container/Container.svelte';
	import Divider from '$lib/_components/Divider/Divider.svelte';
	import Tabs from '$lib/_components/Tabs/Tabs.svelte';
	import Tab from '$lib/_components/Tabs/Tab.svelte';
	import Dropdown from '$lib/_components/Dropdown/Dropdown.svelte';
	import Header from '$lib/_components/Header/Header.svelte';
	import Text from '$lib/_components/Text/Text.svelte';

	import Logo from '../static/SexykitLogoName.png';
	import Slogan from '../static/SexykitSlogan.png';

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

<Header>
	<Container fullWidth justify="center" fullHeight>
		<Container
			class="header--container"
			direction="row"
			align="center"
			justify="space-between"
			fullWidth
			fullHeight
			maxWidth="1280px"
		>
			<Container class="header--left" align="center" gap="10px" fullHeight>
				<img src={Logo} alt="Sexykit logo" class="header__logo" />
				<img src={Slogan} alt="Sexykit logo" class="header__slogan" />
			</Container>
			<Container class="header--right" align="center" gap="10px">
				<Text color="#EE6783" italic>v0.0.1</Text>
				<Button primary label="Let's go" />
			</Container>
		</Container>
	</Container>
</Header>

<Container fullWidth justify="center">
	<Container
		direction="column"
		justify="start"
		align="start"
		gap="20px"
		padding="20px"
		fullWidth
		maxWidth="1280px"
		style="margin-top: 64px"
	>
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
				<Container gap="10px" fullWidth>
					<Tabs>
						<Tab name="First tab">Content of the first tab</Tab>
						<Tab name="Second tab">Content of the second tab</Tab>
						<Tab name="Third tab">Content of the third tab</Tab>
					</Tabs>
				</Container>
			</Card>
		</Container>

		<Container direction="column" justify="start" fullWidth gap="20px">
			<h1>Dropdown</h1>
			<Card fullWidth>
				<Container gap="10px" fullWidth>
					<Dropdown
						on:change={(e) => console.log(e.detail)}
						items={[
							{ value: 'option1', label: 'Action 1' },
							{ value: 'option2', label: 'Action 2', disabled: true },
							{ value: 'option3', label: 'Action 3' }
						]}
					>
						<Button label="Dropdown" />
					</Dropdown>
					<Dropdown
						on:change={(e) => console.log(e.detail)}
						items={[
							{ value: 'option1', label: 'Action 1' },
							{ value: 'option2', label: 'Action 2', disabled: true },
							{ value: 'option3', label: 'Action 3' }
						]}
					>
						<Button leftIcon="plus" icon />
					</Dropdown>
				</Container>
			</Card>
		</Container>
	</Container>
</Container>

<style lang="scss">
</style>
