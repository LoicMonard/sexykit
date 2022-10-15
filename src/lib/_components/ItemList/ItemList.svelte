<script>
	import './itemlist.scss';
	import { fly, slide } from 'svelte/transition';
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
	let focusedItem = null;
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
		dispatch('select', e);
	};
	/**
	 * A function that sets the focused item on ItemList display
	 */
	const handleFocus = () => {
		focusedItem = findNextAvailableItem(items, null);
	};
	/**
	 * A function that calls the closing method of the parent component
	 */
	const handleBlur = () => {
		dispatch('close');
	};
	/**
	 * An accessibility function that sets the focused item on keydown
	 * @param e
	 */
	const handleKeydown = (e) => {
		if (e.key === 'ArrowDown') {
			focusedItem = findNextAvailableItem(items, focusedItem);
		} else if (e.key === 'ArrowUp') {
			focusedItem = findPreviousAvailableItem(items, focusedItem);
		} else if (e.key === 'Enter') {
			dispatch('select', focusedItem);
		} else if (e.key === 'Escape') {
			dispatch('close');
		} else if (e.key === 'Tab') {
		}
	};
	/**
	 * A function that returns the next available item in the list
	 * @param items
	 * @param item
	 */
	const findNextAvailableItem = (items, item) => {
		let index = items.indexOf(item);
		const nextItem = items[index + 1];
		if (!nextItem || nextItem.disabled) {
			return findNextAvailableItem(items, nextItem);
		}
		return nextItem;
	};
	/**
	 * A function that returns the previous available item in the list
	 * @param items
	 * @param item
	 */
	const findPreviousAvailableItem = (items, item) => {
		let index = items.indexOf(item);
		const previousItem = items[index ? index - 1 : items.length - 1];
		if (!previousItem || previousItem.disabled) {
			return findPreviousAvailableItem(items, previousItem);
		}
		return previousItem;
	};
</script>

<div
	class="itemlist"
	tabindex="0"
	role="button"
	on:keydown={handleKeydown}
	on:focus={handleFocus}
	on:blur={handleBlur}
>
	<ul class="itemlist__options" transition:fly={{ y: -10, duration: 300 }}>
		{#each items as item}
			<li
				transition:slide
				class={[
					'itemlist__option',
					`${item.disabled ? 'itemlist__option--disabled' : ''}`,
					`${selectedItems.find((i) => i === item) ? 'itemlist__option--selected' : ''}`,
					`${focusedItem === item ? 'itemlist__option--focused' : ''}`
				].join(' ')}
				on:mousedown={handleMousedown(item)}
			>
				{item[itemLabel]}
			</li>
		{/each}
		{#if !items.length}
			<ul class="itemlist__option itemlist__option--empty">
				<li>{noResultText}</li>
			</ul>
		{/if}
	</ul>
</div>
