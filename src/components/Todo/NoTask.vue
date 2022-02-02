<template>
  <div>
    <div class="no_tasks">
      <v-icon size="100px" color="primary"> mdi-check </v-icon>

      <div class="text-h5">NO Tasks! </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.no_tasks {
  position: absolute;
  left: 50%;
  top: 50%;
  /* right: 40%; */
  transform: translate(-50%, -50%);
  opacity: 0.5;
}
</style>
