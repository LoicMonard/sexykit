<script lang="ts">
	import './card.scss';

	/**
	 * If the card should take the full width of its container
	 */
	export let fullWidth: boolean = false;
	/**
	 * If the card should take the full width of its container
	 */
	export let shadow: string = 'hover';
	/**
	 * Card header style
	 */
	export let headerStyle: string = '';
	/**
	 * Card body style
	 */
	export let bodyStyle: string = '';
</script>

<div
	class={`card card-shadow--${shadow}`}
	style={fullWidth ? 'width: 100%;' : 'width: fit-content'}>
	{#if $$slots.header}
		<div class="card--header" style={headerStyle}>
			<slot name="header" />
		</div>
	{/if}
	<div class="card--body" style={bodyStyle}>
		<slot />
	</div>
</div>
