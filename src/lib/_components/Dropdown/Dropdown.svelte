<script>
	import './dropdown.scss';
	import { createEventDispatcher, tick } from 'svelte';
	import { clickOutside } from '../../_utils/functions';
	import ItemList from '../ItemList/ItemList.svelte';

	/**
	 * The items of the list
	 */
	export let items = [];

	/**
	 * If the dropdown is toggled
	 */
	let open = false;

	/**
	 * An event dispatcher
	 */
	const dispatch = createEventDispatcher();
	/**
	 * A function that is triggered when an option gets clicked,
	 * and dispatches the event with the selected item
	 *
	 * @param e contains the clicked option
	 */
	const selectOption = async (e) => {
		const option = e.detail;
		if (!option.disabled) {
			await tick();
			dispatch('change', option);
			open = false;
		}
	};
	/**
	 * A function that is triggered when the dropdown is toggled
	 */
	const toggleDropdown = (e = null) => {
		if (e?.type === 'click' || e?.keyCode === 13) {
			open = !open;
		}
	};
	/**
	 * A function that closes the dropdown items when clicked outside
	 */
	const handleClickOutside = () => {
		open = false;
	};
</script>

<div class="dropdown" use:clickOutside on:click_outside={handleClickOutside}>
	<div
		class="dropdown__trigger"
		on:click={toggleDropdown}
		on:keydown={toggleDropdown}
		tabindex="0"
		role="button"
	>
		<slot />
	</div>
	{#if open}
		<ItemList {items} on:mousedown={selectOption} />
	{/if}
</div>
