<script>
	import './textfield.scss';
	import { createEventDispatcher } from 'svelte';

	/**
	 * The value attached to the input
	 */
	export let value = '';
	/**
	 * The label for the input
	 */
	export let label = 'Label';
	/**
	 * Input placeholder
	 */
	export let placeholder = 'Recherche';
	/**
	 * How large should the button be?
	 */
	export let size = 'medium';
	/**
	 * Icon button
	 */
	export let icon = null;

	const dispatch = createEventDispatcher();

	const handleInput = (e) => {
		value = e.target.value;
		dispatch('input', e);
	};

	const handleChange = (e) => {
		value = e.target.value;
		dispatch('change', e);
	};
</script>

<div class={['textfield', `textfield--${size}`].join(' ')}>
	<label class="textfield__label" for="input">{label}</label>
	<div class="textfield__wrapper">
		{#if icon}
			<i class="textfield__icon fa-solid fa-{icon}" />
		{/if}
		<input
			type="text"
			class="textfield__inner"
			name="input"
			{placeholder}
			{value}
			on:click
			on:mouseover
			on:mouseleave
			on:mouseenter
			on:blur
			on:focus
			on:input={handleInput}
			on:change={handleChange}
		/>
	</div>
</div>
