<template>
  <v-container>
    <v-row>
      <v-card
        class="mx-auto my-12"
        max-width="374"
        v-for="item in shopList"
        :key="item.key"
      >
        <v-img
          height="250"
          src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
        ></v-img>

        <v-card-title>{{ item.title }}</v-card-title>

        <v-card-text>
          <div class="my-4 text-subtitle-1">
            {{ item.location }}
          </div>

          <div>{{ item.explain }}</div>
        </v-card-text>
        <v-card-actions>
          <edit-post :itemId="item.key"></edit-post>
          <v-btn
            color="deep-purple lighten-2"
            text
          >
            게시글 삭제하기
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>
<script>
import EditPost from './EditPost.vue'
export default {
    data() {
        return {
            loading: false,
            selection: 1,
        }
    },
    components: {
      EditPost,
    },
    computed: {
      shopList() {
        return this.$store.getters.getPostList
      },
    }
}
</script>