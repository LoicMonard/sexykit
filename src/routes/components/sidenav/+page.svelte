<script>
	export const prerender = true;

	import Card from '$lib/_components/Card/Card.svelte';
	import Container from '$lib/_components/Container/Container.svelte';
	import CodeBlock from '$components/CodeBlock/CodeBlock.svelte';
	import Text from '$lib/_components/Text/Text.svelte';
	import Sidenav from '$lib/_components/Sidenav/Sidenav.svelte';

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

<Container direction="column" gap="20px" fullWidth>
	<Text>
		The <span class="property">Sidenav</span>
		component is a navigation component that can be used to display a tree of items.
	</Text>
	<Container direction="column" gap="20px" fullWidth>
		<h2>Default sidenav</h2>
		<Text>
			An array of object is used to build the whole tree of items. An item can have a <span
				class="property">
				label
			</span>
			, an
			<span class="property">icon</span>
			and a
			<span class="property">children</span>
			array.
		</Text>
		<Card fullWidth bodyStyle="padding-bottom: 0px">
			<Container direction="column" gap="20px" fullWidth>
				<Container gap="10px" fullWidth>
					<Sidenav
						tree={sidenavTree}
						activeItem={activeSidenavItem}
						on:click={(e) => {
							activeSidenavItem = e.detail.label;
						}} />
				</Container>
				<CodeBlock
					code={`<script>
	import Sidenav from 'pathToReplace/Sidenav.svelte';

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

<Sidenav
  tree={sidenavTree}
  activeItem={activeSidenavItem}
  on:click={(e) => {
    activeSidenavItem = e.detail.label;
  }} />`} />
			</Container>
		</Card>
	</Container>

	<Container direction="column" gap="20px" fullWidth>
		<h2>Custom style sidenav</h2>
		<Text>
			The <span class="property">Sidenav</span>
			component can be customized with the following properties :
		</Text>
		<Text>
			- <span class="property">firstLevelItemStyle</span>
			which is used to customize the only first level item
		</Text>
		<Text>
			- <span class="property">itemStyle</span>
			which is used to customize every item
		</Text>
		<Card fullWidth bodyStyle="padding-bottom: 0px">
			<Container direction="column" gap="20px" fullWidth>
				<Container gap="10px" style="width: 200px;">
					<Sidenav
						tree={sidenavTree}
						activeItem={activeSidenavItem}
						firstLevelItemStyle="font-weight: bold"
						itemStyle="height: 40px"
						on:click={(e) => {
							activeSidenavItem = e.detail.label;
						}} />
				</Container>
				<CodeBlock
					code={`<script>
	import Sidenav from 'pathToReplace/Sidenav.svelte';
	import Container from 'pathToReplace/Container.svelte';

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

<Container gap="10px" style="width: 200px;">
  <Sidenav
    tree={sidenavTree}
    activeItem={activeSidenavItem}
    firstLevelItemStyle="font-weight: bold"
    itemStyle="height: 40px"
    on:click={(e) => {
      activeSidenavItem = e.detail.label;
    }} />
</Container>`} />
			</Container>
		</Card>
	</Container>
</Container>
