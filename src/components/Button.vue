<template>
	<button 
		class="app-button" 
		:class="{ double, triple, operation }"
		@click="$emit('onClick', label)"
		:disabled="disabled"
	>
		{{ label }}
	</button>
</template>

<script>
export default {
	props: {
		label: {},
		operation: { type: Boolean},
		double: { type: Boolean},
		triple: { type: Boolean},
		disabled: { type: Boolean }
	},
	name: 'AppButton',
	emits: ['click']
}
</script>

<style scoped>
.app-button {
	font-size: 1.4em;
	background: #f0f0f0;
	border: none;
	border-right: solid 1px #888;
	border-bottom: solid 1px #888;
	outline: none;
	cursor: pointer;
}

.app-button:active {
	background: #ccc;
}

.app-button.double {
	grid-column: span 2;
}

.app-button.triple {
	grid-column: span 3;
}

.app-button.operation {
	background: orange;
	color: white;
}

.app-button.operation:active {
	background: darkorange;
}
</style>