<script>
	import './tabs.scss';
	import { setContext } from 'svelte';
	import { tick } from 'svelte';
	import { writable } from 'svelte/store';
	import Card from '../Card/Card.svelte';

	/**
	 * The list of the displayed tabs
	*/
	let tabs = [];
	/**
	 * The active tab, which is passed to the tab components.
	 * Init as a store variable to enable the reactivity in the child
	 * components
	 */
	let activeTab = writable(null);
	/**
	 * The computed slider width, based on the active tab
	 */
	let sliderWidth;
	/**
	 * The computed slider position, based on the active tab
	*/
	let sliderOffset;

	/**
	 * A function that is called when a tab is clicked, or during
	 * tab initialization. It sets the active tab and computes the
	 * slider position and width
	 * 
	 * @param tab
	 */
	const setActiveTab = async (tab) => {
		$activeTab = tab;
		await tick();
		computeSliderWidth();
		computeSliderOffset();
	};
	/**
	 * A function that computes the slider width based on the active tab
	 */
	const computeSliderWidth = () => {
		const tabWidth = document.querySelector('.tabs__header .tabs__nav--active').offsetWidth;
		sliderWidth = tabWidth;
	};
	/**
	 * A function that computes the slider offset based on the active tab
	 */
	const computeSliderOffset = () => {
		const tabLeft = document.querySelector('.tabs__header .tabs__nav--active').offsetLeft;
		sliderOffset = tabLeft;
	};
	
	/**
	 * A function that is called when a tab is initialized.
	 * It adds the tab to the tabs list and set the first tab as active
	 * if there is no active tab
	*/
	setContext('registerTab', {
		registerTab: (tab) => {
			tabs = [...tabs, tab];
			if (!$activeTab) {
				setActiveTab(tabs[0]);
			}
		}
	});
	/**
	 * A function that passes the setActiveTab function to the child
	*/
	setContext('setActiveTab', setActiveTab);
	/**
	 * A function that passes the activeTab store to the child
	*/
	setContext('activeTab', { activeTab });
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
