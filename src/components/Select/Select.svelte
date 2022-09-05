<script>
	import './select.scss';
	import Textfield from '../Textfield/Textfield.svelte';
	import ItemList from '../ItemList/ItemList.svelte';
	import { createEventDispatcher, tick } from 'svelte';

	/**
	 * The value attached to the input
	 */
	export let value = '';
	/**
	 * The label attached to the input, passed to the Textfield
	 */
	export let label = 'Label';
	/**
	 * The placeholder attached to the input, passed to the Textfield
	 */
	export let placeholder = 'Recherche';
	/**
	 * The size of the input, passed to the Textfield
	 */
	export let size = 'medium';
	/**
	 * The icon of the input, passed to the Textfield
	 */
	export let icon = null;
	/**
	 * The items of the list
	 */
	export let options = [];
	/**
	 * The key of the desired value in the options,
	 * defines the returned value
	 */
	export let valueKey = null;

	/**
	 * If the select is toggled
	 */
	let open = false;
	/**
	 * A temporary value to keep the state while
	 * searching in the input
	 */
	let tmpValue;
	/**
	 * A temporary placeholder to keep the state while
	 * searching in the input
	 */
	let tmpPlaceholder;

	/**
	 * A filtered list of options based on the label key
	 * of the options
	 *
	 * @type {Array}
	 */
	$: filteredOptions = options.filter((o) =>
		o.label.toLowerCase().includes(displayedValue.toLowerCase())
	);
	/**
	 * The value displayed in the input, if a valueKey is
	 * set, returns the value of the option with the
	 * corresponding valueKey, else returns the label of
	 * the option
	 *
	 * @type {String}
	 */
	$: displayedValue = value ? (valueKey ? value[valueKey] : value.label || '') : '';
	/**
	 * The returned value, used for the event dispatcher
	 *
	 * @type {String}
	 */
	$: returnedValue = valueKey ? value[valueKey] : value;

	/**
	 * A function that is triggered when the input is
	 * focused and blurred, stores the current value and placeholder
	 * in temporary variables when focused, and sets
	 * them back when the input is blurred
	 *
	 * @param args
	 */
	const toggleSelect = (...args) => {
		if (value) {
			tmpValue = value;
			placeholder = tmpValue.label;
		}
		tmpPlaceholder = placeholder;
		value = '';
		const [, bool, from] = args;
		if (!value && from === 'blur') {
			value = tmpValue;
			placeholder = tmpPlaceholder;
		}
		open = bool;
	};
	/**
	 * An event dispatcher
	 */
	const dispatch = createEventDispatcher();
	/**
	 * A function that is triggered when an option gets clicked,
	 * sets the value to the clicked option, and dispatches the
	 * event
	 *
	 * @param e contains the clicked option
	 */
	const selectOption = async (e) => {
		const option = e.detail;
		if (!option.disabled) {
			value = option;
		}
		await tick();
		dispatch('change', returnedValue);
	};
</script>

<div class="select">
	<div class="select__wrapper">
		<Textfield
			id="test"
			type="select"
			bind:value={displayedValue}
			{placeholder}
			{icon}
			{size}
			{label}
			on:blur={(e) => toggleSelect(e, false, 'blur')}
			on:focus={(e) => toggleSelect(e, true, 'focus')}
		>
			<i class="select__chevron fa-solid fa-chevron-down" />
		</Textfield>
		{#if open === true}
			<ItemList
				items={filteredOptions}
				selectedItems={[tmpValue]}
				noResultText="Aucun résultat"
				on:mousedown={selectOption}
			/>
		{/if}
	</div>
</div>
