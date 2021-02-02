<template>
  <div>
    <div class="post-image">
      <!-- <img src="../../assets/img/tmp/20200920park.png" alt="blog image" /> -->
       <img :src="userImage()" alt="User Photo" />
      <a class="read-more" href @click.prevent="getBlogDetail(item.id)">View</a>
    </div>
    <div class="post-content">
      <h2>
        <a href @click.prevent="getBlogDetail(item.id)">{{ item.title }}</a>
      </h2>
      <!-- <p style="margin-bottom: 5px">{{ item.content | content_slice }}</p> -->
      <p style="margin-bottom: 5px" v-html="content_slice"></p>
      <p style="margin-bottom: 5px">
        <span class="tag-border">{{ item.userName }}さん</span>
        <span class="tag-border">男性</span>
        <span class="tag-border">50代</span>
        <span class="tag-border">東京都</span>
        <span class="tag-border">教師</span>
        <span class="tag-border">投稿日</span>
        <span style="padding-left: 5px;">{{ item.timeStamp }}</span>
      </p>
      <p style="margin-bottom: 5px">
        <span class="tag-border">行動タグ：焼肉、散歩、ダイエット</span>
        <span class="tag-border">💬３コメント</span>
        <span style="padding-left: 5px;">３いいね👍</span>
      </p>
    </div>
  </div>
</template>

<script>
import { ORE_SUPPORT_API_BASE_PATH } from "../../utils/const";
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
    // userPhoto: {
    //   type: Object,
    // },
    data() {
      return {
        likes: [],
        likedFlg: false,
      };
    },
  },
  computed: {
    content_slice: function() {
      let parser = new DOMParser();
      let htmlText = this.item.content;
      let doc = parser.parseFromString(htmlText, "text/html");
      let value = doc.querySelector("body").textContent.trim();
      if (!value) return "";
      let target = value.toString();
      return target.slice(0, 50) + "....";
    },
  },
  methods: {
    getBlogDetail(id) {
      this.$router.push("/blog/blogDetail/?id=" + id);
    },

    userImage() {
      return (
        ORE_SUPPORT_API_BASE_PATH +
        "avatar/" +
        this.item.userProfile.UserProfile.Avatar
      );
    },
  },
};
</script>
