<script lang="ts">
	import './text.scss';

	type Size = 'small' | 'regular' | 'large';

	/**
	 * The size of the text
	 */
	export let size: Size = 'regular';
	/**
	 * If the text is bold
	 */
	export let bold: boolean = false;
	/**
	 * If the text is italic
	 */
	export let italic: boolean = false;
	/**
	 * If the text is a link
	 */
	export let link: boolean = false;
	/**
	 * The url of the link
	 */
	export let href: string = '';
	/**
	 * The color of the text
	 */
	export let color: string = '';
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
