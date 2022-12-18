<script lang="ts">
	import './button.scss';
	import { createEventDispatcher } from 'svelte';
	/**
	 * Is this the principal call to action on the page?
	 */
	export let primary: boolean = false;
	/**
	 * How large should the button be?
	 */
	export let size: string = 'medium';
	/**
	 * Button contents
	 */
	export let label: string = '';
	/**p
	 * Button left icon
	 */
	export let leftIcon: string = '';
	/**
	 * Button right icon
	 */
	export let rightIcon: string = '';
	/**
	 * Rounded button
	 */
	export let rounded: boolean = false;
	/**
	 * Icon button
	 */
	export let icon: boolean = false;

	let mode: string = primary ? 'button--primary' : 'button--secondary';

	const dispatch = createEventDispatcher();

	/**
	 * Optional click handler
	 */
	function onClick(event: Event): void {
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
