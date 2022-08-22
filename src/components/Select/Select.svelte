<script>
	import { fly } from 'svelte/transition';
	import './select.scss';
	import Textfield from '../Textfield/Textfield.svelte';

	export let value = '';
	export let label = 'Label';
	export let placeholder = 'Recherche';
	export let size = 'medium';
	export let icon = null;
	export let options = [];
	export let valueKey = null;

	$: filteredOptions = options.filter((o) => o.label.includes(displayedValue));

	$: displayedValue = value ? (valueKey ? value[valueKey] : value.label || '') : '';

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

	const selectOption = (option) => {
		value = valueKey ? option[valueKey] : option;
	};
</script>

<div class="select">
	<div class="select__wrapper">
		<Textfield
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
			<div class="select__options" transition:fly={{ y: -10, duration: 300 }}>
				{#each filteredOptions as option}
					<div class="select__option" on:click={selectOption(option)}>
						<label>{option.label}</label>
					</div>
				{/each}
				{#if filteredOptions.length === 0}
					<div class="select__option select__option__empty">
						<label>Aucun résultat</label>
					</div>
				{/if}
			</div>
		{/if}
	</div>
</div>
