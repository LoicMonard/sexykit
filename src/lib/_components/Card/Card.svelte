<script>
	import './card.scss';

	/**
	 * If the card should take the full width of its container
	 */
	export let fullWidth = false;
	/**
	 * If the card should take the full width of its container
	 */
	export let shadow = 'hover';
</script>

<div
	class={`card card-shadow--${shadow}`}
	style={fullWidth ? 'width: 100%;' : 'width: fit-content'}
>
	{#if $$slots.header}
		<div class="card--header">
			<slot name="header" />
		</div>
	{/if}
	<div class="card--body">
		<slot />
	</div>
</div>
