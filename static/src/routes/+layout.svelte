<script>
	import Header from './Header.svelte';
	import './styles.css';
	import './bootstrap.min.css';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer />
</div>

<style>
</style>
