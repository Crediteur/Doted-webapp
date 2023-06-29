<!-- different layout for user pages -->
<script>
  import '../../app.css';
  import Nav from '../../components/nav.svelte';
  import Footer from '../../components/footer.svelte';
</script>

<Nav />
<div class="mx-auto max-w-6xl overflow-hidden p-8 font-['Nunito']">
  <slot />
  <Footer />
</div>
