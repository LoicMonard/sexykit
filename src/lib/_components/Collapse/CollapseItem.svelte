<script>
	import { getContext } from 'svelte';
	import { quadOut } from 'svelte/easing';
	import './collapseItem.scss';

	/**
	 * The name of the collapse item
	 */
	export let name;
	/**
	 * If the collapse can be toggled on the header click
	 */
	export let toggleOnTriggerOnly = false;
	/**
	 * If the collapse item has borders
	 */
	export let bordered = true;

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
	const toggleCollapse = (from, name) => {
		if (
			(from === 'trigger' && toggleOnTriggerOnly) ||
			(from === 'header' && !toggleOnTriggerOnly)
		) {
			updateCollapseItems(name);
			open = !open;
		} else {
			return;
		}
	};
	/**
	 * A transition function that is used to animate the collapse item
	 *
	 * @param node
	 * @param param1
	 */
	const toggleHeight = (node, { speed = 1 }) => {
		return {
			duration: 300 * speed,
			css: (t) => `max-height: ${t * node.offsetHeight}px; margin-bottom: ${t * 20}px;`,
			easing: quadOut
		};
	};
</script>

<div class="collapse-item {bordered ? '' : 'collapse-item--no-borders'}">
	<div class="collapse-item__header" on:click={toggleCollapse('header', name)}>
		{#if $$slots.header}
			<slot name="header" />
		{:else}
			{name}
		{/if}
		{#if $$slots.trigger}
			<div class="collapse-item__trigger" on:click={toggleCollapse('trigger', name)}>
				<slot name="trigger" />
			</div>
		{:else}
			<i
				class="collapse-item__chevron {open
					? 'collapse-item__chevron--open'
					: ''} fa-solid fa-chevron-right"
			/>
		{/if}
	</div>
	{#if open}
		<div transition:toggleHeight class="collapse-item__body">
			<slot />
		</div>
	{/if}
</div>