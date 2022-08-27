<script>
	// Import button
	import Button from '$components/Button/Button.svelte';
	import Textfield from '$components/Textfield/Textfield.svelte';
	import Select from '../components/Select/Select.svelte';

	const handleClick = (e) => {
		console.log('click', e);
	};

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
<Select
	placeholder="Placeholder"
	label="Select an option"
	options={[
		{ value: 'option1', label: 'Option 1' },
		{ value: 'option2', label: 'Option 2' }
	]}
/>

<style lang="scss">
	@import '$styles/global.scss';
</style>
