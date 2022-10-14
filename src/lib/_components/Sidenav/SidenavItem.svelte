<script>
	import { quadOut } from 'svelte/easing';
	import { createEventDispatcher } from 'svelte';
	import './sidenavItem.scss';

	/**
	 * The item object of the SidenavItem, contains the name, the path and the children
	 */
	export let item;
	/**
	 * The depth of the SidenavItem, used to calculate the padding
	 */
	export let depth;
	/**
	 * The currently active SidenavItem, used to determine if the SidenavItem is active
	 */
	export let activeItem;
	/**
	 * The style for first level SidenavItems
	 */
	export let firstLevelItemStyle;
	/**
	 * The style for SidenavItems
	 */
	export let itemStyle;
	/**
	 * The defaultly expanded items
	 */
	export let defaultExpandedItems = [];

	/**
	 * If the SidenavItem is expanded
	 */
	let showChildren = defaultExpandedItems[0] == '*' || defaultExpandedItems.includes(item.label);

	const dispatch = createEventDispatcher();
	/**
	 * A method to toggle to SidenavItem
	 */
	const toggleCollapse = (e = null) => {
		if (e?.type === 'click' || e?.key === 'Enter') {
			showChildren = !showChildren;
			if (!item.children?.length) {
				dispatch('click', item);
			}
		}
	};
	/**
	 * A transition method to animate the SidenavItem toggling
	 *
	 * @param node
	 * @param param1
	 */
	const toggleHeight = (node, { speed = 1 }) => {
		return {
			duration: 200 * speed,
			css: (t) => `max-height: ${t * node.offsetHeight}px;`,
			easing: quadOut
		};
	};
</script>

<div class="sidenavItem {item.label === activeItem ? 'sidenavItem--active' : ''}">
	<div
		class="sidenavItem__trigger"
		style="padding-left: {(depth + 1) * 20}px; {itemStyle}"
		tabindex="0"
		role="button"
		on:click={toggleCollapse}
		on:keydown={toggleCollapse}
	>
		{#if item.icon}
			<div class="sidenavItem__icon">
				<i class="fa-solid fa-{item.icon}" />
			</div>
		{/if}
		<div class="sidenavItem__label" style={depth === 0 ? firstLevelItemStyle : ''}>
			{item.label}
		</div>
		{#if item.children?.length}
			<i
				class="sidenavItem__chevron {showChildren
					? 'sidenavItem__chevron--open'
					: ''} fa-solid fa-chevron-right"
			/>
		{/if}
	</div>
	{#if showChildren}
		<div transition:toggleHeight class="sidenavItem__children">
			{#each item.children as child}
				<svelte:self
					item={child}
					depth={depth + 1}
					{activeItem}
					{itemStyle}
					{firstLevelItemStyle}
					{defaultExpandedItems}
					on:click
				/>
			{/each}
		</div>
	{/if}
</div>
