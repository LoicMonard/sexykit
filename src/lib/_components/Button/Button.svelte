<script>
	import './button.scss';
	import { createEventDispatcher } from 'svelte';
	/**
	 * Is this the principal call to action on the page?
	 */
	export let primary = false;
	/**
	 * How large should the button be?
	 */
	export let size = 'medium';
	/**
	 * Button contents
	 */
	export let label = '';
	/**
	 * Button left icon
	 */
	export let leftIcon = '';
	/**
	 * Button right icon
	 */
	export let rightIcon = '';
	/**
	 * Rounded button
	 */
	export let rounded = false;
	/**
	 * Icon button
	 */
	export let icon = false;

	let mode = primary ? 'button--primary' : 'button--secondary';

	const dispatch = createEventDispatcher();

	/**
	 * Optional click handler
	 */
	function onClick(event) {
		dispatch('click', event);
	}
</script>

<button
	type="button"
	class={[
		'button',
		`button--${size}`,
		mode,
		rounded ? 'button--rounded' : '',
		icon ? 'button--icon' : ''
	].join(' ')}
	on:click={onClick}>
	{#if leftIcon}
		<i class="left-icon fa-solid fa-{leftIcon}" />
	{/if}
	{label}
	{#if rightIcon}
		<i class="right-icon fa-solid fa-{rightIcon}" />
	{/if}
</button>
