<script lang="ts">
	export let url: string;
	// export let text: string;
</script>

<a href={url} target="_blank">
	<span>{url}</span>
</a>

<style lang="scss">
	a {
		color: black;
		cursor: pointer;

		&:visited,
		&:hover,
		&:focus,
		&:active {
			color: black;
			cursor: pointer;
		}

		span {
			font-family: 'Fira Mono';
		}
	}
</style>
