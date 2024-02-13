<template>
	<footer class="footer">
		<div class="container footer__inner">
			© Copyright 2023
			<p>This project was created as a test task</p>
		</div>
	</footer>
</template>

<script>
	export default {
		
	}
</script>

<style lang="scss" scoped>
.footer {
	background-color: var(--white);
	border-top:1px solid var(--grey);
	padding: 10px 0;

	&__inner{
		display: flex;
		justify-content: space-between;
	}
}
</style>