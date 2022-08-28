<script>
	import { setContext } from 'svelte';
	import { tick } from 'svelte';
	import { writable } from 'svelte/store';
	import Card from '../Card/Card.svelte';

	import './tabs.scss';

	let tabs = [];

	let activeTab = writable(null);

	setContext('registerTab', {
		registerTab: (tab) => {
			tabs = [...tabs, tab];
			if (!$activeTab) {
				setActiveTab(tabs[0]);
			}
		}
	});

	const setActiveTab = async (tab) => {
		$activeTab = tab;
		await tick();
		computeSliderWidth();
		computeSliderOffset();
	};

	setContext('setActiveTab', setActiveTab);

	setContext('activeTab', { activeTab });

	let sliderWidth;
	let sliderOffset;

	const computeSliderWidth = () => {
		const tabWidth = document.querySelector('.tabs__header .tabs__nav--active').offsetWidth;
		sliderWidth = tabWidth;
	};
	const computeSliderOffset = () => {
		const tabLeft = document.querySelector('.tabs__header .tabs__nav--active').offsetLeft;
		sliderOffset = tabLeft;
	};
</script>

<div class="tabs">
	<div class="tabs__header">
		<div class="tabs__nav-slider" style="width: {sliderWidth}px; left: {sliderOffset}px;" />
		<div class="tabs__nav-wrapper">
			{#each tabs as tab}
				<div
					class={['tabs__nav', tab === $activeTab ? 'tabs__nav--active' : ''].join(' ')}
					on:click={() => setActiveTab(tab)}
				>
					{tab.name}
				</div>
			{/each}
		</div>
	</div>
	<Card fullWidth>
		<slot />
	</Card>
</div>
