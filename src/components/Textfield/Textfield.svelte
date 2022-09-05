<script>
	import './textfield.scss';
	import { createEventDispatcher } from 'svelte';

	/**
	 * The value attached to the input
	 */
	export let value = '';
	/**
	 * The type of the input
	 */
	export let type = 'text';
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
	/**
	 * If the input is readonly
	 */
	export let readonly = false;

	/**
	 * The input dom element
	 */
	let input;

	/**
	 * An event dispatcher
	 */
	const dispatch = createEventDispatcher();

	/**
	 * A function that is called when the wrapper of the input is clicked.
	 * Triggers a focus or a blur on the input depending on the current state
	 *
	 */
	export const toggleInput = async () => {
		if (input === document.activeElement) {
			input.blur();
		} else if (input !== document.activeElement) {
			input.focus();
		}
	};
	/**
	 * A function that updates the value of the input and dispatch the input
	 * event
	 *
	 * @param e
	 */
	const handleInput = (e) => {
		value = e.target.value;
		dispatch('input', e);
	};
	/**
	 * A function that updates the value of the input and dispatch the change
	 * event
	 *
	 * @param e
	 */
	const handleChange = (e) => {
		value = e.target.value;
		dispatch('change', e);
	};
	/**
	 * A function that dispatch the focus event if the input isn't readonly
	 *
	 * @param e
	 */
	const handleFocus = (e) => {
		if (readonly) {
			e.target.blur();
		} else {
			dispatch('focus', e);
		}
	};
</script>

<div
	class={['textfield', `textfield--${size}`, `${readonly ? 'textfield--readonly' : ''}`].join(' ')}
>
	<label class="textfield__label" for="input">{label}</label>
	<div class="textfield__wrapper" on:mousedown|preventDefault={toggleInput}>
		{#if icon}
			<i class="textfield__icon fa-solid fa-{icon}" />
		{/if}
		<input
			bind:this={input}
			type="text"
			class="textfield__inner"
			name="input"
			{placeholder}
			{value}
			on:click
			on:mouseover
			on:mousedown
			on:mouseleave
			on:mouseenter
			on:blur
			on:focus={handleFocus}
			on:input={handleInput}
			on:change={handleChange}
		/>
		<slot />
	</div>
</div>
