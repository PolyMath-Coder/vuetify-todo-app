<template>
  <div>
    <v-list v-if="$store.state.tasks.length" class="pt-0" flat>
      <Task v-for="task in $store.state.tasks" :task="task" :key="task.id" />
      <v-divider></v-divider>
    </v-list>
  </div>
</template>

<script>
import Task from '@/components/Todo/Task.vue';
export default {
  components: {
    Task,
  },
};
</script>

<style lang="scss" scoped></style>
