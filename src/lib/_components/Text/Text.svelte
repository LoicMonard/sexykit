<script>
	import './text.scss';

	export let size = 'regular';

	export let bold;

	export let italic;

	export let color;
</script>

<span
	class={`text text--${size}${bold ? ' text--bold' : ''}${italic ? ' text--italic' : ''}`}
	style="color: {color}"
>
	<slot />
</span>
