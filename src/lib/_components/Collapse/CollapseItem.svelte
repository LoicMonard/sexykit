<script>
	import { getContext } from 'svelte';
	import './collapseItem.scss';

	/**
	 * The name of the collapse item
	 */
	export let name;

	/**
	 * If the collapse item is toggled
	 */
	let open = false;
	/**
	 * Reactive property that is updated when the collapse item is toggled
	 * Opens or closes the collapse item depending on the parent activeItems store
	 */
	$: {
		if (Array.isArray($activeItems) && $activeItems.includes(name)) {
			open = true;
		} else {
			open = false;
		}
	}
	/**
	 * The active items store from the parent
	 */
	const { activeItems } = getContext('activeItems');
	/**
	 * A function to access the parent updateCollapseItems method
	 */
	const { updateCollapseItems } = getContext('updateCollapseItems');
	/**
	 * A function that toggles the collapse item and updates the active items store
	 *
	 * @param name
	 */
	const toggleCollapse = (name) => {
		open = !open;
		updateCollapseItems(name);
	};
	/**
	 * A transition function that is used to animate the collapse item
	 *
	 * @param node
	 * @param param1
	 */
	const toggleHeight = (node, { speed = 1 }) => {
		return {
			duration: 200 * speed,
			css: (t) => `max-height: ${t * node.offsetHeight}px; margin-bottom: ${t * 20}px;`
		};
	};
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
