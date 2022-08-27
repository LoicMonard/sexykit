<script>
	import './container.scss';

	export let direction = 'row';
	export let justify = 'start';
	export let align = 'start';
	export let gap = '0px';
	export let fullWidth = false;
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
