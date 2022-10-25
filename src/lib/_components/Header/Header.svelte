<script>
	import './header.scss';
	import Container from '../Container/Container.svelte';

	/**
	 * If the header is fixed or not
	 */
	export let fixed = false;
	/**
	 * The style of the header
	 */
	export let style = '';
</script>

<header class={`header ${fixed ? 'header--fixed' : ''}`} {style}>
	<Container direction="row" fullWidth fullHeight align="center">
		<slot />
	</Container>
</header>
