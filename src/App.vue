<template>
  <v-app>
    <v-card>
      <v-app-bar color="green">
        <v-spacer></v-spacer>
        <create-post />
      </v-app-bar>
    </v-card>
    <router-view />
  </v-app>
</template>

<script>
import CreatePost from '@/components/CreatePost.vue'
export default {
  name: 'App',
  components: {
    CreatePost,
  },
  data: () => ({
    //
  }),
};
</script>
