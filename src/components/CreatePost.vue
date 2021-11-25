<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="red lighten-2"
          dark
          v-bind="attrs"
          v-on="on"
        >
          게시글 작성하기
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          게시글 작성하기
        </v-card-title>

        <v-card-text>
          서울에서 갔던 맛집을 추천해주세요 !
        </v-card-text>
        <v-text-field
            v-model="title"
            filled
            color="deep-purple"
            label="title"
        ></v-text-field>
        <v-text-field
            v-model="location"
            filled
            color="deep-purple"
            label="location"
        ></v-text-field>
        <v-textarea
            v-model="explain"
            auto-grow
            filled
            color="deep-purple"
            label="explain"
            rows="2"
        ></v-textarea>
        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="createPost"
          >
            작성하기
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        dialog: false,
        title: '',
        location: '',
        explain: '',
      }
    },
    computed: {
      listLength() {
        return this.$store.getters.listLength
      }
    },
    methods: {
        createPost () {
            const payload = {
                title: this.title,
                location: this.location,
                explain: this.explain,
            }
            this.$store.dispatch('createPost', payload)
            this.dialog = !this.dialog
            this.title = ""
            this.location = ""
            this.explain = ""
        }
    }
  }
</script>
<style scoped>
.v-card__text {
    margin-top: 20px;
}
</style>