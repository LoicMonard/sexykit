<script>
	import { getContext } from 'svelte';
	import { onMount } from 'svelte';
	import Button from '$components/Button/Button.svelte';

	import './tab.scss';

	export let name;

	const { registerTab } = getContext('registerTab');
	const { activeTab } = getContext('activeTab');
	const { setActiveTab } = getContext('setActiveTab');

	$: active = $activeTab === $$props;

	onMount(() => {
		registerTab($$props);
	});
</script>

{#if active}
	<div class={['tab', active ? 'tab--active' : '']}>
		<slot />
	</div>
{/if}
