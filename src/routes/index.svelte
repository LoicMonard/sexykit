<script>
	// Import button
	import Button from '$components/Button/Button.svelte';
	import Textfield from '$components/Textfield/Textfield.svelte';

	const handleClick = (e) => {
		console.log('click', e);
	}
	
	const handleInput = (e) => {
		console.log(e.detail);
	};
	
	const handleChange = (e) => {
		console.log(e.detail);
	};

	const handleMouseover = (e) => {
		console.log('mouseover');
	};

	let test = 'test';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<Button primary label="Button" icon="user" on:click={handleClick} />
<Textfield
	bind:value={test}
	placeholder="Search"
	on:input={handleInput}
	on:mouseover={handleMouseover}
	on:change={handleChange}
/>
{test}
<i class="fa-solid fa-user" />

<style lang="scss">
	@import '$styles/global.scss';
</style>
