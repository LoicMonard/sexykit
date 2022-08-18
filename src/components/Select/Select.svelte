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

	let open = true;

	const toggleSelect = (...args) => {
		const [, bool, ,] = args;
		open = bool;
	};
</script>

{open}

<div class="select">
	<div class="select__wrapper">
		<Textfield
			type="select"
			bind:value
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
				{#each options as option}
					<div class="select__option">
						<input type="radio" name="select" value={option.value} />
						<label>{option.label}</label>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</div>
