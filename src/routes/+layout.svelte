<script>
	export const prerender = true;

	import Header from '$lib/_components/Header/Header.svelte';
	import Container from '$lib/_components/Container/Container.svelte';
	import Select from '$lib/_components/Select/Select.svelte';
	import Button from '$lib/_components/Button/Button.svelte';
	import Text from '$lib/_components/Text/Text.svelte';

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
</script>

<Container direction="column" align="center" fullWidth>
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

	<Container style="margin-top: 64px" fullWidth maxWidth="1280px">
		<slot />
	</Container>
</Container>
