<script>
	import './sidenav.scss';
	import SidenavItem from './SidenavItem.svelte';

	/**
	 * The tree structure of the Sidenav, passed to the SidenavItem components
	 */
	export let tree = [];
	/**
	 * The currently active SidenavItem, passed to the SidenavItem components
	 */
	export let activeItem;
	/**
	 * The style for first level SidenavItems, passed to the SidenavItem components
	 */
	export let firstLevelItemStyle;
	/**
	 * The style for SidenavItems, passed to the SidenavItem components
	 */
	export let itemStyle;
	/**
	 * The defaultly expanded items, passed to the SidenavItem components, if [*], all items are
	 * expanded
	 */
	export let defaultExpandedItems = [];
</script>

<div class="sidenav">
	{#each tree as item}
		<SidenavItem
			{item}
			depth={0}
			{activeItem}
			{itemStyle}
			{firstLevelItemStyle}
			{defaultExpandedItems}
			on:click
		/>
	{/each}
</div>
