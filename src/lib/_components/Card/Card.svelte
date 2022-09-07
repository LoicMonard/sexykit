<script>
	import './card.scss';

	/**
	 * If the card should take the full width of its container
	 */
	export let fullWidth = false;
</script>

<div class="card" style={fullWidth ? 'width: 100%;' : 'width: fit-content'}>
	{#if $$slots.header}
		<div class="card--header">
			<slot name="header" />
		</div>
	{/if}
	<div class="card--body">
		<slot />
	</div>
</div>
