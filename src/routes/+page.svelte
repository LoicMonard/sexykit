<script>
	export const prerender = true;

	import Button from '$lib/_components/Button/Button.svelte';
	import Card from '$lib/_components/Card/Card.svelte';
	import Collapse from '$lib/_components/Collapse/Collapse.svelte';
	import CollapseItem from '$lib/_components/Collapse/CollapseItem.svelte';
	import Container from '$lib/_components/Container/Container.svelte';
	import Divider from '$lib/_components/Divider/Divider.svelte';
	import Dropdown from '$lib/_components/Dropdown/Dropdown.svelte';
	import Header from '$lib/_components/Header/Header.svelte';
	import Modal from '$lib/_components/Modal/Modal.svelte';
	import Select from '$lib/_components/Select/Select.svelte';
	import Sidenav from '$lib/_components/Sidenav/Sidenav.svelte';
	import Tab from '$lib/_components/Tabs/Tab.svelte';
	import Tabs from '$lib/_components/Tabs/Tabs.svelte';
	import Text from '$lib/_components/Text/Text.svelte';
	import Textfield from '$lib/_components/Textfield/Textfield.svelte';

	import Logo from '../static/SexykitLogoName.png';
	import Slogan from '../static/SexyKitSlogan.png';

	const indexCategories = [
		{
			label: 'Button',
			value: 'button'
		},
		{
			label: 'Textfield',
			value: 'textfield'
		},
		{
			label: 'Select',
			value: 'select'
		},
		{
			label: 'Card',
			value: 'card'
		},
		{
			label: 'Container',
			value: 'container'
		},
		{
			label: 'Divider',
			value: 'divider'
		},
		{
			label: 'Tabs',
			value: 'tabs'
		},
		{
			label: 'Dropdown',
			value: 'dropdown'
		},
		{
			label: 'Header',
			value: 'header'
		},
		{
			label: 'Text',
			value: 'text'
		},
		{
			label: 'Modal',
			value: 'modal'
		},
		{
			label: 'Collapse',
			value: 'collapse'
		}
	];

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

	const sidenavTree = [
		{
			label: 'Home',
			icon: 'home',
			children: [
				{
					label: 'level 1.1',
					children: [
						{
							label: 'level 1.1.1',
							children: [
								{
									label: 'level 1.1.1.1',
									children: []
								}
							]
						}
					]
				},
				{
					label: 'level 1.2',
					children: []
				}
			]
		},
		{
			label: 'Dashboard',
			icon: 'dashboard',
			children: [
				{
					label: 'level 2.1',
					children: []
				},
				{
					label: 'level 2.2',
					children: []
				},
				{
					label: 'level 2.3',
					children: []
				}
			]
		},
		{
			label: 'Settings',
			icon: 'gear',
			children: []
		}
	];

	let activeSidenavItem = 'Home';
</script>

<Header fixed>
	<Container fullWidth justify="center" fullHeight>
		<Container
			class="header--container"
			direction="row"
			align="center"
			justify="space-between"
			fullWidth
			fullHeight
			maxWidth="1280px">
			<Container class="header--left" align="center" gap="10px" fullHeight>
				<img src={Logo} alt="Sexykit logo" class="header__logo" />
				<img src={Slogan} alt="Sexykit logo" class="header__slogan" />
				<Select
					placeholder="Find a component"
					options={indexCategories}
					valueKey="value"
					on:change={(e) =>
						window.scroll({
							top: document.getElementById(e.detail).offsetTop - 74,
							behavior: 'smooth'
						})} />
			</Container>
			<Container class="header--right" align="center" gap="10px">
				<Text color="#EE6783" italic>v0.0.1</Text>
				<Button primary label="Let's go" />
			</Container>
		</Container>
	</Container>
</Header>

<Container fullWidth justify="center">
	<a href="/sexykit/components/button">click</a>
	<Container
		direction="column"
		justify="start"
		align="start"
		gap="20px"
		padding="20px"
		fullWidth
		maxWidth="1280px">
		<Container direction="column" justify="start" fullWidth gap="20px" id="sidenav">
			<h1>Sidenav</h1>
			<Card fullWidth>
				<Container gap="10px" fullWidth>
					<Sidenav
						tree={sidenavTree}
						activeItem={activeSidenavItem}
						on:click={(e) => {
							activeSidenavItem = e.detail.label;
						}} />
				</Container>
			</Card>
		</Container>

		<Container direction="column" justify="start" fullWidth gap="20px" id="button">
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

		<Container direction="column" justify="start" fullWidth gap="20px" id="textfield">
			<h1>Textfield</h1>
			<Card fullWidth>
				<Container gap="10px">
					<Textfield placeholder="Search" label="Label" />
					<Textfield placeholder="Enter a username" icon="user" label="Username" />
					<Textfield placeholder="Enter an email" label="Email" icon="at" size="small" />
					<Textfield value="Readonly input" label="Readonly input" readonly />
				</Container>
			</Card>
		</Container>

		<Container direction="column" justify="start" fullWidth gap="20px" id="select">
			<h1>Select</h1>
			<Card fullWidth>
				<Container gap="10px">
					<Select
						placeholder="Placeholder"
						label="Select an option"
						options={selectOptions}
						on:change={(e) => console.log(e.detail)} />
					<Select
						on:change={(e) => console.log(e.detail)}
						placeholder="Choose a fruit"
						label="Fruit"
						icon="lemon"
						valueKey="label"
						options={[
							{ value: 'lemon', label: 'Lemon' },
							{ value: 'orange', label: 'Orange' }
						]} />
					<Select
						placeholder="Placeholder"
						label="Disabled option"
						options={[
							{ value: 'option1', label: 'Option 1' },
							{ value: 'option2', label: 'Option 2', disabled: true },
							{ value: 'option3', label: 'Option 3' }
						]} />
				</Container>
			</Card>
		</Container>

		<Container direction="column" justify="start" fullWidth gap="20px" id="card">
			<h1>Card</h1>
			<Card fullWidth>
				<Container gap="10px" fullWidth>
					<Card>
						<div slot="header">Card title</div>
						<p>This is a card with a title</p>
					</Card>
					<Card>
						<p>This is a card without title</p>
					</Card>
					<Card shadow="always">
						<p>This is a card with a persistent shadow</p>
					</Card>
					<Card shadow="never">
						<p>This is a card without any shadow</p>
					</Card>
					<Card fullWidth>
						<div slot="header">Card title</div>
						<p>This is a full width card</p>
					</Card>
				</Container>
			</Card>
		</Container>

		<Container direction="column" justify="start" fullWidth gap="20px" id="divider">
			<h1>Divider</h1>
			<Card fullWidth>
				<Divider />
			</Card>
		</Container>

		<Container direction="column" justify="start" fullWidth gap="20px" id="tabs">
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

		<Container direction="column" justify="start" fullWidth gap="20px" id="dropdown">
			<h1>Dropdown</h1>
			<Card fullWidth>
				<Container gap="10px" fullWidth>
					<Dropdown
						on:change={(e) => console.log(e.detail)}
						items={[
							{ value: 'option1', label: 'Action 1' },
							{ value: 'option2', label: 'Action 2', disabled: true },
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
						<Button leftIcon="plus" icon />
					</Dropdown>
					<Dropdown
						on:change={(e) => console.log(e.detail)}
						items={[
							{ value: 'option1', label: 'Action 1' },
							{ value: 'option2', label: 'Action 2', disabled: true },
							{ value: 'option3', label: 'Action 3' }
						]}>
						<Text>Custom trigger</Text>
					</Dropdown>
				</Container>
			</Card>
		</Container>

		<Container direction="column" justify="start" fullWidth gap="20px" id="text">
			<h1>Text</h1>
			<Card fullWidth>
				<Container gap="10px">
					<Text size="small">Hello</Text>
					<Text>Hello</Text>
					<Text size="large">Hello</Text>
					<Text bold>Hello</Text>
					<Text italic>Hello</Text>
					<Text color="#EE6783">Hello</Text>
				</Container>
			</Card>
		</Container>

		<Container direction="column" justify="start" fullWidth gap="20px" id="modal">
			<h1>Modal</h1>
			<Card fullWidth>
				<Container gap="10px">
					<Modal>
						<Button label="Modal" slot="trigger" />
						This is the simplest modal template ever.
					</Modal>
					<Modal title="Short story">
						<Button label="Modal with title" slot="trigger" />
						Here is a short story about this modal.
					</Modal>
				</Container>
			</Card>
		</Container>

		<Container direction="column" justify="start" fullWidth gap="20px" id="collapse">
			<h1>Collapse</h1>
			<Card fullWidth>
				<Container gap="10px" fullWidth>
					<Collapse activeItemsNames={['Introduction', 'Custom Body']} accordion>
						<CollapseItem name="Introduction" toggleOnTriggerOnly>
							<Text slot="header" color="#EE6783">Custom title</Text>
							<i class="fas fa-arrow-right" />
							<Text>Hello, I'm the content of this collapse item</Text>
							<Container gap="4px" slot="trigger" align="center">
								Custom trigger
								<i class="fas fa-arrow-right" />
							</Container>
						</CollapseItem>
						<CollapseItem name="Custom Body">
							<Card>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, voluptatem error.
								Corporis illum ea consequuntur eaque, quam a ratione doloribus numquam odit,
								necessitatibus perspiciatis? A quia eligendi sunt illum fugit.
							</Card>
						</CollapseItem>
						<CollapseItem name="Conclusion">
							<Text>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, voluptatem error.
								Corporis illum ea consequuntur eaque, quam a ratione doloribus numquam odit,
								necessitatibus perspiciatis? A quia eligendi sunt illum fugit.
							</Text>
						</CollapseItem>
					</Collapse>
				</Container>
			</Card>
		</Container>
	</Container>
</Container>

<style lang="scss">
</style>
