<script>
	import './header.scss';
	import Container from '../Container/Container.svelte';
</script>

<header class="header">
	<Container direction="row" fullWidth>
		<slot />
	</Container>
</header>
