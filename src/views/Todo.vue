<template>
  <div class="home">
    <FieldAddTask />
    <ListTasks v-if="$store.state.tasks.length" />
    <NoTask v-else />
  </div>
</template>

<script>
// import { mapState } from 'vuex';
import FieldAddTask from '@/components/Todo/FieldAddTask.vue';
import ListTasks from '@/components/Todo/ListTasks.vue';
import NoTask from '@/components/Todo/NoTask.vue';
export default {
  name: 'Todo',
  data() {
    return {
      newTaskTitle: '',
    };
  },
  methods: {
    addTask() {
      this.$store.commit('addTask', this.newTaskTitle);
      this.newTaskTitle = '';
    },
  },
  components: {
    FieldAddTask,
    ListTasks,
    NoTask,
  },
  // computed: {
  //   entireTask() {
  //     return this.$store.state.tasks;
  //   },
  // },
  // computed: {
  //   ...mapState(['tasks']),
  // },
};
</script>

<style scoped></style>
