<script>
	import './itemlist.scss';
	import { fly } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
  
  export let items = [];

  export let itemLabel = 'label';

  export let noResultText = 'Pas de résultat';

	export let selectedItems = [];

  const dispatch = createEventDispatcher();

  const handleMousedown = (e) => {
    dispatch('mousedown', e);
  };
  
</script>

<div class="itemlist">
	<div class="itemlist__options" transition:fly={{ y: -10, duration: 300 }}>
		{#each items as item}
			<ul
				class={[
					'itemlist__option',
					`${item.disabled ? 'itemlist__option--disabled' : ''}`,
					`${selectedItems.find((i) => i === item) ? 'itemlist__option--selected' : ''}`
				].join(' ')}
				on:mousedown={handleMousedown(item)}
			>
				<li for="test">{item[itemLabel]}</li>
			</ul>
		{/each}
		{#if !items.length }
			<ul class="itemlist__option itemlist__option--empty">
				<li>{ noResultText }</li>
			</ul>
		{/if}
	</div>
</div>
