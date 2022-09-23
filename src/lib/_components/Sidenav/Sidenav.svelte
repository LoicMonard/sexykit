<script>
	import './sidenav.scss';
	import SidenavItem from './SidenavItem.svelte';

	export let tree = [];

	export let activeItem;
</script>

<div class="sidenav">
	{#each tree as item}
		<SidenavItem {item} depth={0} {activeItem} on:click />
	{/each}
</div>
