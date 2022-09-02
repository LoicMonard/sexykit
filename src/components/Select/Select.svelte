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

	$: filteredOptions = options.filter((o) =>
		o.label.toLowerCase().includes(displayedValue.toLowerCase())
	);

	$: displayedValue = value ? (valueKey ? value : value.label || '') : '';

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
		if (!option.disabled) {
			value = valueKey ? option[valueKey] : option;
		}
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
			<div class="select__options" transition:fly={{ y: -10, duration: 300 }}>
				{#each filteredOptions as option}
					<ul
						class={[
							'select__option',
							`${option.disabled ? 'select__option--disabled' : ''}`,
							`${
								(valueKey ? option[valueKey] : option) === tmpValue
									? 'select__option--selected'
									: ''
							}`
						].join(' ')}
						on:mousedown={selectOption(option)}
					>
						<li for="test">{option.label}</li>
					</ul>
				{/each}
				{#if filteredOptions.length === 0}
					<ul class="select__option select__option--empty">
						<li>Aucun résultat</li>
					</ul>
				{/if}
			</div>
		{/if}
	</div>
</div>
