<script>
	import './text.scss';

	/**
	 * The size of the text
	 */
	export let size = 'regular';
	/**
	 * If the text is bold
	 */
	export let bold;
	/**
	 * If the text is italic
	 */
	export let italic;
	/**
	 * If the text is a link
	 */
	export let link;
	/**
	 * The url of the link
	 */
	export let href;
	/**
	 * The color of the text
	 */
	export let color;
</script>

{#if link}
	<a
		{href}
		class={`text text--${size}${bold ? ' text--bold' : ''}${italic ? ' text--italic' : ''}${
			link ? ' text--link' : ''
		}`}
		style="color: {color}">
		<slot />
	</a>
{:else}
	<span
		class={`text text--${size}${bold ? ' text--bold' : ''}${italic ? ' text--italic' : ''}${
			link ? ' text--link' : ''
		}`}
		style="color: {color}">
		<slot />
	</span>
{/if}
