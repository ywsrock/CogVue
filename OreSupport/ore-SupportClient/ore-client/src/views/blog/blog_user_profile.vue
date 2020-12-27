<template>
  <div class="card-small">
    <hr />
    プロフィール
    <v-row>
      <v-col cols="4">
        <v-avatar size="62">
          <span class="white--text headline"
            ><v-img
              max-height="200"
              max-width="200"
              src="https://picsum.photos/id/11/500/300"
            ></v-img
          ></span>
        </v-avatar>
      </v-col>
      <v-col>
        <div>
          <p>
            {{ item.userProfile.UserName }}
          </p>
          <div>
            <span class="tag-border">男性</span>
            <span class="tag-border">50代</span>
            <span class="tag-border">東京都</span>
            <span class="tag-border">教師</span>
          </div>
        </div>
      </v-col>
    </v-row>
    <div>
      {{ item.userProfile.UserProfile.Aboutme }}ここに自己紹介が入るけど、UserProfileのAboutme（自己紹介）にバグ
    </div>
    <hr />
  </div>
</template>

<script>
/* eslint-disable */
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>
