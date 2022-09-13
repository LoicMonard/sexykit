<script>
	import './header.scss';
	import Container from '../Container/Container.svelte';

	export let fixed = false;
</script>

<header class={`header ${fixed ? 'header--fixed' : ''}`}>
	<Container direction="row" fullWidth fullHeight align="center">
		<slot />
	</Container>
</header>
