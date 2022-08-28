<script>
	import { getContext } from 'svelte';
	import { onMount } from 'svelte';

	import './tab.scss';

	export let name;

	const { registerTab } = getContext('registerTab');
	const { activeTab } = getContext('activeTab');

	$: active = $activeTab === $$props;

	onMount(() => {
		registerTab($$props);
	});
</script>

{#if active}
	<div
		class={['tab', active ? 'tab--active' : ''].join(' ')}
	>
		<slot />
	</div>
{/if}
