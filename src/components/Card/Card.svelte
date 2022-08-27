<script>
	import './card.scss';

	export let fullWidth = false;
</script>

<div class="card" style={fullWidth ? 'width: 100%;' : 'width: fit-content'}>
	<!-- Title slot -->
	{#if $$slots.header}
		<div class="card--header">
			<slot name="header" />
		</div>
	{/if}
	<div class="card--body">
		<slot />
	</div>
</div>
