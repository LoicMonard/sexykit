<script>
	import './itemlist.scss';
	import { fly } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';

	/**
	 * The items of the list
	 */
	export let items = [];
	/**
	 * The key of the desired displayed value of the items
	 */
	export let itemLabel = 'label';
	/**
	 * The text displayed when the list is empty
	 */
	export let noResultText = 'Pas de résultat';
	/**
	 * The list of the selected items, used to set the selected class
	 */
	export let selectedItems = [];
	/**
	 * An event dispatcher
	 */
	const dispatch = createEventDispatcher();
	/**
	 * A function that dispatches the mousedown event
	 *
	 * @param e contains the clicked item
	 */
	const handleMousedown = (e) => {
		dispatch('mousedown', e);
	};
</script>

<div class="itemlist">
	<div class="itemlist__options" transition:fly={{ y: -10, duration: 300 }}>
		{#each items as item}
			<ul
				class={[
					'itemlist__option',
					`${item.disabled ? 'itemlist__option--disabled' : ''}`,
					`${selectedItems.find((i) => i === item) ? 'itemlist__option--selected' : ''}`
				].join(' ')}
				on:mousedown={handleMousedown(item)}
			>
				<li for="test">{item[itemLabel]}</li>
			</ul>
		{/each}
		{#if !items.length}
			<ul class="itemlist__option itemlist__option--empty">
				<li>{noResultText}</li>
			</ul>
		{/if}
	</div>
</div>
