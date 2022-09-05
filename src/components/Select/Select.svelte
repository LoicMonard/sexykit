<script>
	import './select.scss';
	import Textfield from '../Textfield/Textfield.svelte';
	import ItemList from '../ItemList/ItemList.svelte';
	import { createEventDispatcher, tick } from 'svelte';

	export let value = '';
	export let label = 'Label';
	export let placeholder = 'Recherche';
	export let size = 'medium';
	export let icon = null;
	export let options = [];
	export let valueKey = null;

	$: filteredOptions = options.filter((o) =>
		o.label.toLowerCase().includes(displayedValue.toLowerCase())
	);

	$: displayedValue = value ? (valueKey ? value[valueKey] : value.label || '') : '';

	$: returnedValue = valueKey ? value[valueKey] : value;

	let open = false;

	let tmpValue;
	let tmpPlaceholder;

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
	
	const dispatch = createEventDispatcher();

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
