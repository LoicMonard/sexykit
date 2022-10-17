<script>
	import xml from 'svelte-highlight/languages/xml';
	import { onMount } from 'svelte';
	import Container from '$lib/_components/Container/Container.svelte';
	import Collapse from '$lib/_components/Collapse/Collapse.svelte';
	import CollapseItem from '$lib/_components/Collapse/CollapseItem.svelte';

	export let langtag = 'svelte';

	export let language = xml;

	export let code;

	let highlightComponent;
	let highlightStyles;

	const copyCode = () => {
		window.navigator.clipboard.writeText(code);
	};

	onMount(async () => {
		xml.name = langtag;
		highlightComponent = (await import('svelte-highlight')).Highlight;
		highlightStyles = (await import('svelte-highlight/styles/atom-one-dark')).default;
	});
</script>

<svelte:head>
	{#if highlightStyles}
		{@html highlightStyles}
	{/if}
</svelte:head>

<Collapse>
	<CollapseItem toggleOnTriggerOnly bordered={false}>
		<Container gap="10px" fullWidth slot="header" justify="end" style="padding-right: 8px">
			<i class="fa-solid fa-copy" style="font-size: 12px" on:click={copyCode} />
		</Container>
		<i class="fa-solid fa-code" style="font-size: 12px" slot="trigger" />
		<svelte:component this={highlightComponent} {language} langtag {code} />
	</CollapseItem>
</Collapse>
