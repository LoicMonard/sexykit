<script>
	export const prerender = true;

	import Card from '$lib/_components/Card/Card.svelte';
	import Container from '$lib/_components/Container/Container.svelte';
	import CodeBlock from '$components/CodeBlock/CodeBlock.svelte';
	import Text from '$lib/_components/Text/Text.svelte';
	import CollapseItem from '$lib/_components/Collapse/CollapseItem.svelte';
	import Collapse from '$lib/_components/Collapse/Collapse.svelte';
</script>

<Container direction="column" gap="20px" fullWidth>
	<Text>
		The <span class="property">Card</span>
		component is a container that can be used to group content.
	</Text>
	<Container direction="column" gap="20px" fullWidth>
		<h2>Default collapse</h2>
		<Text>
			<span class="property">Collapse</span>
			component works in pairs with
			<span class="property">CollapseItem</span>
			component.
		</Text>
		<Text>
			<span class="property">Collapse</span>
			component is the container of the items and
			<span class="property">CollapseItem</span>
			is the item itself.
		</Text>
		<Text>If no header slot is provided, the item will display its name.</Text>
		<Card fullWidth bodyStyle="padding-bottom: 0px">
			<Container direction="column" gap="20px" fullWidth>
				<Container gap="10px" fullWidth>
					<Collapse>
						<CollapseItem name="Introduction">
							<Text>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, pariatur.
							</Text>
						</CollapseItem>
						<CollapseItem name="Content">
							<Text>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, pariatur.
							</Text>
						</CollapseItem>
						<CollapseItem name="Conclusion">
							<Text>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, pariatur.
							</Text>
						</CollapseItem>
					</Collapse>
				</Container>
				<CodeBlock
					code={`<script>
	import Collapse from 'pathToReplace/Collapse.svelte';
	import CollapseItem from 'pathToReplace/CollapseItem.svelte';
	import Text from 'pathToReplace/Text.svelte';
</script>

<Collapse>
  <CollapseItem name="Introduction">
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, pariatur.
    </Text>
  </CollapseItem>
  <CollapseItem name="Content">
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, pariatur.
    </Text>
  </CollapseItem>
  <CollapseItem name="Conclusion">
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, pariatur.
    </Text>
  </CollapseItem>
</Collapse>`} />
			</Container>
		</Card>
	</Container>

	<Container direction="column" gap="20px" fullWidth>
		<h2>Accordion</h2>
		<Text>
			<span class="property">Collapse</span>
			can simply be turned into an accordion by adding the
			<span class="property">accordion</span>
			property.
		</Text>
		<Card fullWidth bodyStyle="padding-bottom: 0px">
			<Container direction="column" gap="20px" fullWidth>
				<Container gap="10px" fullWidth>
					<Collapse accordion>
						<CollapseItem name="Introduction">
							<Text>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, pariatur.
							</Text>
						</CollapseItem>
						<CollapseItem name="Content">
							<Text>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, pariatur.
							</Text>
						</CollapseItem>
						<CollapseItem name="Conclusion">
							<Text>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, pariatur.
							</Text>
						</CollapseItem>
					</Collapse>
				</Container>
				<CodeBlock
					code={`<script>
	import Collapse from 'pathToReplace/Collapse.svelte';
	import CollapseItem from 'pathToReplace/CollapseItem.svelte';
	import Text from 'pathToReplace/Text.svelte';
</script>

<Collapse accordion>
  <CollapseItem name="Introduction">
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, pariatur.
    </Text>
  </CollapseItem>
  <CollapseItem name="Content">
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, pariatur.
    </Text>
  </CollapseItem>
  <CollapseItem name="Conclusion">
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, pariatur.
    </Text>
  </CollapseItem>
</Collapse>`} />
			</Container>
		</Card>
	</Container>

	<Container direction="column" gap="20px" fullWidth>
		<h2>Content</h2>
		<Text>
			<span class="property">CollapseItem</span>
			supports 3 types of slots,
			<span class="property">header</span>
			,
			<span class="property">trigger</span>
			and the default slot which is used for the content.
		</Text>
		<Card fullWidth bodyStyle="padding-bottom: 0px">
			<Container direction="column" gap="20px" fullWidth>
				<Container gap="10px" fullWidth>
					<Collapse accordion>
						<CollapseItem name="Introduction">
							<Text slot="header" color="#EE6783">Custom header</Text>
							<Text>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, pariatur.
							</Text>
						</CollapseItem>
						<CollapseItem name="Content">
							<Container gap="4px" slot="trigger" align="center">
								Custom trigger
								<i class="fas fa-arrow-right" />
							</Container>
							<Text>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, pariatur.
							</Text>
						</CollapseItem>
						<CollapseItem name="Conclusion">
							<Text>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, pariatur.
							</Text>
						</CollapseItem>
					</Collapse>
				</Container>
				<CodeBlock
					code={`<script>
	import Collapse from 'pathToReplace/Collapse.svelte';
	import CollapseItem from 'pathToReplace/CollapseItem.svelte';
	import Text from 'pathToReplace/Text.svelte';
</script>

<Collapse accordion>
  <CollapseItem name="Introduction">
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, pariatur.
    </Text>
  </CollapseItem>
  <CollapseItem name="Content">
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, pariatur.
    </Text>
  </CollapseItem>
  <CollapseItem name="Conclusion">
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, pariatur.
    </Text>
  </CollapseItem>
</Collapse>`} />
			</Container>
		</Card>
	</Container>

	<Container direction="column" gap="20px" fullWidth>
		<h2>Other properties</h2>
		<Text>
			<span class="property">Collapse</span>
			component also supports an
			<span class="property">activeItemsNames</span>
			property, which is an array of strings. It can be used to set the active items by default.
		</Text>
		<Text>
			You can also provide a <span class="property">toggleOnTriggerOnly</span>
			property to the
			<span class="property">CollapseItem</span>
			component. If set to true, the collapse will only toggle when the trigger is clicked.
		</Text>
		<Text>
			You can also set the <span class="property">bordered</span>
			property to false to remove the border from the
			<span class="property">collapseItem</span>
			.
		</Text>
		<Card fullWidth bodyStyle="padding-bottom: 0px">
			<Container direction="column" gap="20px" fullWidth>
				<Container gap="10px" fullWidth>
					<Collapse activeItemsNames={['Introduction']}>
						<CollapseItem name="Introduction">
							<Text>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, pariatur.
							</Text>
						</CollapseItem>
						<CollapseItem name="Toggle on trigger only" toggleOnTriggerOnly>
							<Text>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, pariatur.
							</Text>
						</CollapseItem>
						<CollapseItem name="Conclusion" bordered={false}>
							<Text>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, pariatur.
							</Text>
						</CollapseItem>
					</Collapse>
				</Container>
				<CodeBlock
					code={`<script>
	import Collapse from 'pathToReplace/Collapse.svelte';
	import CollapseItem from 'pathToReplace/CollapseItem.svelte';
	import Text from 'pathToReplace/Text.svelte';
</script>

<Collapse activeItemsNames={['Introduction']}>
  <CollapseItem name="Introduction">
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, pariatur.
    </Text>
  </CollapseItem>
  <CollapseItem name="Toggle on trigger only" toggleOnTriggerOnly>
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, pariatur.
    </Text>
  </CollapseItem>
  <CollapseItem name="Conclusion" bordered={false}>
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, pariatur.
    </Text>
  </CollapseItem>
</Collapse>`} />
			</Container>
		</Card>
	</Container>
</Container>
