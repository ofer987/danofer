<script lang="ts">
	import Icon from './Icon.svelte';

	export let url: string;
	export let text: string;
</script>

<a href={url} target="_blank">
	<div class="github">
		<Icon klass="github-avatar" />
		<div class="text">
			<span>{text}</span>
		</div>
	</div>
</a>

<style lang="scss">
	a {
		color: black;
		cursor: pointer;
		text-decoration: none;

		&:visited,
		&:hover,
		&:focus,
		&:active {
			color: black;
			cursor: pointer;
			text-decoration: none;
		}

		.github {
			display: flex;
			flex-direction: row;

			.text {
				display: flex;
				flex-direction: column;
				justify-content: space-around;

				span {
					display: flex;
					flex-direction: row;
					font-family: monospace;
				}
			}
		}
	}
</style>
