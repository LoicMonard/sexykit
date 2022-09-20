<script>
	import './collapse.scss';
	import { onMount, setContext, tick } from 'svelte';
	import { writable } from 'svelte/store';

	export let activeItemsNames = [];

	let activeItems = writable([]);

	export let accordion = false;

	setContext('updateCollapseItems', {
		updateCollapseItems: (collapseName) => {
			if (accordion) {
				$activeItems = [collapseName];
			}
		}
	});

	onMount(async () => {
		if(accordion) {
			$activeItems = [activeItemsNames[0] || []];
		} else {
			$activeItems = activeItemsNames;
		}
	});

	setContext('activeItems', { activeItems });
</script>

<div class="collapse">
	<slot />
</div>
