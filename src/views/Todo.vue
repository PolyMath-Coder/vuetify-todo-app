<template>
  <div class="pa-3">
    <v-text-field
      v-model="newTaskTitle"
      @click:append="addTask"
      @keyup.enter="addTask"
      outlined
      label="Add Task..."
      append-icon="mdi-plus-circle"
      hide-details
      clearable
    ></v-text-field>
    <v-list v-if="$store.state.tasks.length" class="pt-0" flat>
      <div v-for="task in $store.state.tasks" :key="task.id">
        <v-list-item
          @click="$store.commit('doneTask', task.id)"
          :class="{ 'blue lighten-5': task.done }"
        >
          <template v-slot:default>
            <v-list-item-action>
              <v-checkbox :input-value="task.done" color="primary"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title
                :class="{ 'text-decoration-line-through': task.done }"
                >{{ task.title }}</v-list-item-title
              >
            </v-list-item-content>
            <v-list-item-action>
              <v-btn @click.stop="$store.commit('deleteTask', task.id)" icon>
                <v-icon color="primary lighten-1">mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </template>
        </v-list-item>
        <v-divider></v-divider>
      </div>
    </v-list>
    <div v-else class="no_tasks">
      <v-icon size="100px" color="primary"> mdi-check </v-icon>

      <div class="text-h5">NO Tasks! </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

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
  // computed: {
  //   entireTask() {
  //     return this.$store.state.tasks;
  //   },
  // },
  computed: {
    ...mapState(['tasks']),
  },
};
</script>

<style scoped>
.no_tasks {
  position: absolute;
  left: 50%;
  top: 50%;
  /* right: 40%; */
  transform: translate(-50%, -50%);
  opacity: 0.5;
}
</style>
