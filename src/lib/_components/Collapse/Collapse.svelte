<script>
	import './collapse.scss';
	import { onMount, setContext } from 'svelte';
	import { writable } from 'svelte/store';

	export let activeItemsNames = [];

	export let accordion = false;

	let activeItems = writable([]);

	setContext('updateCollapseItems', {
		updateCollapseItems: (collapseName) => {
			if (accordion) {
				if ($activeItems[0] === collapseName) {
					activeItems.set([]);
				} else {
					activeItems.set([collapseName]);
				}
			}
		}
	});

	setContext('activeItems', { activeItems });

	onMount(async () => {
		if (accordion) {
			$activeItems = [activeItemsNames[0] || []];
		} else {
			$activeItems = activeItemsNames;
		}
	});
</script>

<div class="collapse">
	<slot />
</div>
