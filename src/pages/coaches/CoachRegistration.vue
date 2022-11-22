<template>
  <div>
    <section>
      <h2>Register as a coach now!</h2>
      <base-card>
        <coach-form @save-data='saveData'></coach-form>
      </base-card>
    </section>
  </div>
</template>

<script>
import CoachForm from '@/components/coaches/CoachForm';
import BaseCard from '@/components/ui/BaseCard';
export default {
  name: 'CoachRegistration',
  components: { BaseCard, CoachForm },
  methods: {
    saveData(data) {
      this.$store.dispatch('coaches/registerCoach', data);
      this.$router.replace('/coaches'); // cannot go back
    }
  }
};
</script>

<style scoped>

</style>