<script>
	import { onMount, getContext } from 'svelte';
	import './collapseItem.scss';

	export let name;

	let open = false;

	const { activeItems } = getContext('activeItems');

	onMount(() => {
		if (activeItems.includes(name)) {
			open = true;
		}
	});
</script>

<div class="collapse-item">
	<div class="collapse-item__header" on:click={() => (open = !open)}>
		{#if $$slots.header}
			<slot name="header" />
		{:else}
			{name}
		{/if}
	</div>
	{#if open}
		<div class="collapse-item__body">
			<slot />
		</div>
	{/if}
</div>
