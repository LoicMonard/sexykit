<script>
	import './modal.scss';
	import Card from '$lib/_components/Card/Card.svelte';
	import { fade } from 'svelte/transition';

	/**
	 * If the modal is displayed
	 */
	export let open = false;
	/**
	 * The title of the modal
	 */
	export let title;
</script>

<div class="modal">
	<div class="modal__trigger" on:click={() => (open = !open)}>
		<slot name="trigger" />
	</div>
	{#if open}
		<div class="modal__content-wrapper" transition:fade={{ duration: 100 }}>
			<div class="modal__overlay" on:click={() => (open = false)} />
			{#if title}
				<Card class="modal__content" shadow="always">
					<div slot="header">
						{title}
					</div>
					<slot />
				</Card>
			{:else}
				<Card class="modal__content">
					<slot />
				</Card>
			{/if}
		</div>
	{/if}
</div>
