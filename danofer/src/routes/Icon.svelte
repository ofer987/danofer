<script lang="ts">
	export let klass: string;
	export let src: string;
	export let alt: string;
	export let url: string;

	function navigateToUrl() {
		document.location.href = url;
	}
</script>

<div on:click={navigateToUrl} on:keydown={navigateToUrl} role="presentation">
	<img class={klass} {src} {alt} />
</div>

<style>
</style>
