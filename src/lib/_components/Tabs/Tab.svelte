<script>
	import { onMount, getContext } from 'svelte';

	import './tab.scss';

	/**
	 * The tab label
	 */
	export let name;

	/**
	 * A reactive value that indicates if the tab is active depending on
	 * the instance props
	 */
	$: active = $activeTab === $$props;

	/**
	 * A function to access the parent registerTab method
	 */
	const { registerTab } = getContext('registerTab');
	/**
	 * A function to access the parent selectTab method
	 */
	const { activeTab } = getContext('activeTab');

	/**
	 * A function that register the tab to the parent component when
	 * the component is mounted
	 */
	onMount(() => {
		registerTab($$props);
	});
</script>

{#if active}
	<div class={['tab', active ? 'tab--active' : ''].join(' ')}>
		<slot />
	</div>
{/if}
