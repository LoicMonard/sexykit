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
</script>

<div class="sidenav">
	{#each tree as item}
		<SidenavItem {item} depth={0} {activeItem} on:click />
	{/each}
</div>
