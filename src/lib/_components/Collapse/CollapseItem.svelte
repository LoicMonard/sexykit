<script>
	import { getContext } from 'svelte';

	import './collapseItem.scss';

	export let name;

	let open = false;

	const { activeItems } = getContext('activeItems');

	const { updateCollapseItems } = getContext('updateCollapseItems');

	const toggleCollapse = (name) => {
		open = !open;
		updateCollapseItems(name);
	};

	const toggleHeight = (node, { speed = 1 }) => {
		return {
			duration: 200 * speed,
			css: (t) => `max-height: ${t * node.offsetHeight}px; margin-bottom: ${t * 20}px;`
		};
	};

	$: {
		if (Array.isArray($activeItems) && $activeItems.includes(name)) {
			open = true;
		} else {
			open = false;
		}
	}
</script>

<div class="collapse-item">
	<div class="collapse-item__header" on:click={toggleCollapse(name)}>
		{#if $$slots.header}
			<slot name="header" />
		{:else}
			{name}
		{/if}
		<i
			class="collapse-item__chevron {open
				? 'collapse-item__chevron--open'
				: ''} fa-solid fa-chevron-right"
		/>
	</div>
	{#if open}
		<div transition:toggleHeight class="collapse-item__body">
			<slot />
		</div>
	{/if}
</div>
