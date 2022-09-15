<script>
	import './collapse.scss';
	import { setContext } from 'svelte';

	export let activeItems = [];

	setContext('activeItems', { activeItems });
</script>

<div class="collapse">
	<slot />
</div>
