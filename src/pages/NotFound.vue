<template>
  <section>
    <base-card>
      <h2>Page not found</h2>
      <p>This page could not be found</p>
      <p><router-link to='/coaches'>Go to coaches list</router-link></p>
    </base-card>
  </section>
</template>

<script>
import BaseCard from '@/components/ui/BaseCard';
export default {
  name: 'NotFound',
  components: { BaseCard }
};
</script>

<style scoped>

</style>