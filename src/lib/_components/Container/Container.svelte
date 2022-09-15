<script>
	import './container.scss';

	/**
	 * The id of the component
	 */
	export let id;
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
	 * If the container should take the full height of its container
	 */
	export let fullHeight = false;
	/**
	 * The max width of the container
	 */
	export let maxWidth = '100%';
	/**
	 * The padding of the container
	 */
	export let padding = '0px';
	/**
	 * Additionnal style added to the container
	 */
	export let style = '';
</script>

<div
	{id}
	class="container"
	style="
		flex-direction: {direction};
	 	justify-content: {justify}; 
		align-items: {align}; 
		gap: {gap}; 
		padding: {padding}; 
		width: {fullWidth ? '100%' : 'fit-content'};
		height: {fullHeight ? '100%' : 'fit-content'};
		max-width: {maxWidth};
		{style}
	"
>
	<slot />
</div>
