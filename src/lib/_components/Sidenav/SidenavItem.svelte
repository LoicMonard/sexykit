<script>
	import { quadOut } from 'svelte/easing';
	import { createEventDispatcher } from 'svelte';
	import './sidenavItem.scss';

	export let item;

	export let depth;

	export let activeItem;

	let showChildren = false;

	const dispatch = createEventDispatcher();

	const toggleCollapse = () => {
		showChildren = !showChildren;
		if(!item.children?.length) {
			dispatch('click', item);
		}
	};

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
		style="padding-left: {(depth + 1) * 20}px"
		on:click={toggleCollapse}
	>
		{#if item.icon}
			<div class="sidenavItem__icon">
				<i class="fa-solid fa-{item.icon}" />
			</div>
		{/if}
		<div class="sidenavItem__label">
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
				<svelte:self item={child} depth={depth + 1} {activeItem} on:click/>
			{/each}
		</div>
	{/if}
</div>
