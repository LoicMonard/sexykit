<script>
	export const prerender = true;

	import Card from '$lib/_components/Card/Card.svelte';
	import Container from '$lib/_components/Container/Container.svelte';
	import Sidenav from '$lib/_components/Sidenav/Sidenav.svelte';
	import { goto } from '$app/navigation';
	import Divider from '$lib/_components/Divider/Divider.svelte';

	const sidenavTree = [
		{
			label: 'Basic',
			children: [
				{
					label: 'Button',
					path: 'button',
					children: []
				},
				{
					label: 'Container',
					path: 'container',
					children: []
				},
				{
					label: 'Text',
					path: 'text',
					children: []
				}
			]
		},
		{
			label: 'Form',
			children: [
				{
					label: 'Select',
					path: 'select',
					children: []
				},
				{
					label: 'Textfield',
					path: 'textfield',
					children: []
				}
			]
		},
		{
			label: 'Data',
			children: [
				{
					label: 'Card',
					path: 'card',
					children: []
				},
				{
					label: 'Collapse',
					path: 'collapse',
					children: []
				}
			]
		},
		{
			label: 'Navigation',
			children: [
				{
					label: 'Dropdown',
					path: 'dropdown',
					children: []
				},
				{
					label: 'Header',
					path: 'header',
					children: []
				},
				{
					label: 'Sidenav',
					path: 'sidenav',
					children: []
				},
				{
					label: 'Tabs',
					path: 'tabs',
					children: []
				}
			]
		},
		{
			label: 'Feedback',
			children: [
				{
					label: 'Modal',
					path: 'modal',
					children: []
				}
			]
		},
		{
			label: 'Others',
			children: [
				{
					label: 'Divider',
					path: 'divider',
					children: []
				}
			]
		}
	];

	let activeSidenavItem = 'Button';

	const selectNavItem = (e) => {
		activeSidenavItem = e.label;
		goto('/sexykit/components/' + e.path);
	};
</script>

<Container direction="row" fullWidth padding="20px" gap="20px">
	<Container maxWidth="240px" fullWidth>
		<Card fullWidth shadow="never">
			<Sidenav
				tree={sidenavTree}
				activeItem={activeSidenavItem}
				firstLevelItemStyle="font-weight: bold"
				itemStyle="height: 40px"
				defaultExpandedItems={['*']}
				on:click={(e) => {
					selectNavItem(e.detail);
				}}
			/>
		</Card>
	</Container>
	<Container style="flex: 1;" padding="20px" direction="column">
		<h1>{activeSidenavItem}</h1>
		<Divider margin="20px" />
		<slot />
	</Container>
</Container>
