<template>
	<div class="control-panel">
		<h1 class="control-panel__title">Users:</h1>
		<button-main @click="$emit('openModal')">Add user</button-main>
	</div>
</template>

<script>
	import ButtonMain from '@/ui/ButtonMain.vue'

	export default {
		components:{
			ButtonMain
		}
	}
</script>

<style lang="scss" scoped>
.control-panel{
	margin-top: 45px;
	background-color: var(--white);
	padding: 10px;
	border: 1px solid var(--grey);
	display: flex;
	justify-content: space-between;
	align-content: center;

	&__title {
		color: var(--black);
		font-weight: 400; 
	}
}
</style>