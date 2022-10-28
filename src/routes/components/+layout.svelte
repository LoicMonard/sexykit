<script>
	export const prerender = true;

	import Card from '$lib/_components/Card/Card.svelte';
	import Container from '$lib/_components/Container/Container.svelte';
	import Sidenav from '$lib/_components/Sidenav/Sidenav.svelte';
	import Divider from '$lib/_components/Divider/Divider.svelte';
	import { goto } from '$app/navigation';
	import { navigating } from '$app/stores';
	import { onMount } from 'svelte';

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
		goto('/sexykit/components/' + e.path);
	};

	onMount(() => {
		const path = window.location.pathname.split('/');
		activeSidenavItem =
			path[path.length - 1].charAt(0).toUpperCase() + path[path.length - 1].slice(1);
	});

	$: if ($navigating) {
		activeSidenavItem =
			$navigating.to.routeId.split('/')[1].charAt(0).toUpperCase() +
			$navigating.to.routeId.split('/')[1].slice(1);
	}
</script>

<Container
	direction="row"
	fullWidth
	padding="20px"
	gap="20px"
	style="height: calc(100vh - 64px); overflow: hidden;">
	<Container maxWidth="240px" fullWidth fullHeight>
		<Card fullWidth shadow="never">
			<Sidenav
				tree={sidenavTree}
				activeItem={activeSidenavItem}
				firstLevelItemStyle="font-weight: bold"
				itemStyle="height: 40px"
				defaultExpandedItems={['*']}
				on:click={(e) => {
					selectNavItem(e.detail);
				}} />
		</Card>
	</Container>
	<Container
		style="flex: 1; height: 100%; overflow: auto; flex-wrap: initial"
		padding="20px"
		direction="column">
		<h1>{activeSidenavItem}</h1>
		<Divider margin="20px" />
		<slot />
	</Container>
</Container>
