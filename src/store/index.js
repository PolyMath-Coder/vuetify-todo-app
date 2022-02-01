import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: 1,
        title: 'Wake Up.',
        done: false,
      },
      {
        id: 2,
        title: 'Pray and Listen to a Teaching.',
        done: false,
      },
      {
        id: 3,
        title: 'Have some pizza and fresh milk.',
        done: false,
      },
    ],
  },
  mutations: {
    addTask(state, newTaskTitle) {
      let newTask = {
        id: Date.now(),
        title: newTaskTitle,
        done: false,
      };

      state.tasks.push(newTask);
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter((task) => task.id !== id);
      // console.log(this.tasks);
    },
    doneTask(state, id) {
      let task = state.tasks.filter((task) => task.id === id);
      console.log(task);
      task.done = !task.done;
    },
  },
  actions: {},
  modules: {},
});
