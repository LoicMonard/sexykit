<script lang="ts">
	import './collapse.scss';
	import { onMount, setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import type { Writable } from 'svelte/store';

	/**
	 * The default active items, it will open the collapse items with the matching name
	 */
	export let activeItemsNames: string[] = [];
	/**
	 * If the collapse items should be opened one at a time
	 */
	export let accordion: boolean = false;

	/**
	 * The active items store, passed to the collapse items
	 */
	let activeItems: Writable<string[]> = writable([]);
	/**
	 * The updateCollapseItems function, passed to the collapse items
	 * It re-arrange the collapse items if accordion is true
	 */
	setContext('updateCollapseItems', {
		updateCollapseItems: (collapseName: string): void => {
			if (accordion) {
				if ($activeItems[0] === collapseName) {
					activeItems.set([]);
				} else {
					activeItems.set([collapseName]);
				}
			}
		}
	});
	/**
	 * The active items passed to the collapse items
	 */
	setContext('activeItems', { activeItems });
	/**
	 * Sets the active items on mount
	 */
	onMount(async () => {
		if (accordion) {
			$activeItems = [activeItemsNames[0] || ''];
		} else {
			$activeItems = activeItemsNames;
		}
	});
</script>

<div class="collapse">
	<slot />
</div>
