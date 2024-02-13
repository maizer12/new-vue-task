<template>
	<div class="modal-window" @click="$emit('close')">
		<div class="modal-window__content" @click.prevent.stop>
			<div class="modal-header">
				<h3 class="modal-header__title">{{ title }}</h3>
				<button class="modal-header__close" @click="$emit('close')">
					<svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8.00191 9.41621C7.61138 9.02569 7.61138 8.39252 8.00191 8.002C8.39243 7.61147 9.0256 7.61147 9.41612 8.002L12.0057 10.5916L14.5896 8.00771C14.9801 7.61719 15.6133 7.61719 16.0038 8.00771C16.3943 8.39824 16.3943 9.0314 16.0038 9.42193L13.4199 12.0058L16.0039 14.5897C16.3944 14.9803 16.3944 15.6134 16.0039 16.004C15.6133 16.3945 14.9802 16.3945 14.5896 16.004L12.0057 13.42L9.42192 16.0038C9.03139 16.3943 8.39823 16.3943 8.00771 16.0038C7.61718 15.6133 7.61718 14.9801 8.00771 14.5896L10.5915 12.0058L8.00191 9.41621Z" fill="#0F0F0F"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M23 4C23 2.34315 21.6569 1 20 1H4C2.34315 1 1 2.34315 1 4V20C1 21.6569 2.34315 23 4 23H20C21.6569 23 23 21.6569 23 20V4ZM21 4C21 3.44772 20.5523 3 20 3H4C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4Z" fill="#0F0F0F"></path> </g></svg>
				</button> 
			</div>
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		props:{
			title:String
		}
	}
</script>

<style lang="scss" scoped>
.modal-window {
	position: fixed;
	z-index: 20;
	width: 100%;
	height: 100%;
	background-color: rgba( #000000, 0.6);
	display: flex;
	justify-content: center;
	align-items: center;
	animation: opacityAnim 1 1s;

	&__content {
		width: fit-content;
		padding: 20px;
		background-color: var(--white);
		min-width: 420px;
	}
}
.modal-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 35px;

	&__title {
		font-size: 26px;
		font-weight: 700;
	}

	&__close{
		max-width: 35px;
		background: none;
		border: none;
		cursor: pointer;

		svg {
			width: 100%;
			height: fit-content;
		}
		svg path{
			transition: 0.7s;
		}

		&:hover {
			svg path {
				fill:var(--red);
			}
		}
	}
}
</style>