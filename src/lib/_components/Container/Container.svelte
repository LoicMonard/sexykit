<script>
	import './container.scss';

	/**
	 * The direction of the container
	 */
	export let direction = 'row';
	/**
	 * The justify content of the container
	 */
	export let justify = 'start';
	/**
	 * The alignment items of the container
	 */
	export let align = 'start';
	/**
	 * The gap between the items of the container
	 */
	export let gap = '0px';
	/**
	 * If the container should take the full width of its container
	 */
	export let fullWidth = false;
	/**
	 * The padding of the container
	 */
	export let padding = '0px';
</script>

<div
	class="container"
	style="
		flex-direction: {direction};
	 	justify-content: {justify}; 
		align-items: {align}; 
		gap: {gap}; 
		padding: {padding}; 
		width: {fullWidth ? '100%' : 'fit-content'};
	"
>
	<slot />
</div>
