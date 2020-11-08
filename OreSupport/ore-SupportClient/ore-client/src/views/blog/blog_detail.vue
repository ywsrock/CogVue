<template>
<div id="blog_detail">
  <body class>
    <div class="page-wrapper">
      <div id="header" class="header"></div>

      
      <div class="main">
        <div class="main-inner">
          <div class="container">
            <div class="orig-row">
              <div class="col-sm-8 col-lg-9">
                <div class="content">
                  <div class="page-title">
                    <h1 style="text-align: center; font-weight: bold;">{{ blogDetail.title }}</h1>
                    <div style="text-align: right;">
                      <button @click.prevent="blogEdit(id)">編集する</button>
                      <button @click.prevent="blogDelete(id)">削除する</button>
                      <button v-if="likedFlg" @click="destroyLike($event)">いいね取り消し</button>                        
                      <button v-else @click="createLike($event)">いいね！</button>
                    </div>
                  </div>
                  <!-- /.page-title -->
                  <div class="posts post-detail">
                    <div style="text-align: center;">
                      <img src="../../assets/img/tmp/20200920park.png" alt="blog image" />
                    </div>
                    <div class="post-meta clearfix">
                      <p style="margin-bottom: 5px">
                        <span class="tag-border">1@1.comさん</span>
                        <span class="tag-border">男性</span>
                        <span class="tag-border">50代</span>
                        <span class="tag-border">東京都</span>
                        <span class="tag-border">教師</span>
                        <span class="tag-border"><i class="fa fa-heart mr-2"></i>{{ likes.length }}</span>
                        <span class="tag-border"><i class="fa fa-comments mr-2"></i>{{ blogDetail.comment.length }}</span>
                        <span style="padding-left: 5px;">投稿日 2020年10月17日 13:00</span>
                      </p>
                      <p style="margin-bottom: 0px">
                        <span class="tag-border">行動タグ：焼肉、散歩、ダイエット</span>
                      </p>
                    </div>
                    <div class="post-content" style="font-size: 25px; min-height: 200px;">
                      <p>{{ blogDetail.content }}</p>
                    </div>
                    <h2 id="reviews"></h2>
                    <div v-for="item in blogDetail.comment" :key="item.commentID">
                      <div class="comments">
                        <div class="comment">
                          <div class="comment-image">
                            <img src="../../assets/img/tmp/agent-1.jpg" alt />
                          </div>
                          <!-- /.comment-image -->
                          <div class="comment-inner">
                            <div class="comment-header">
                              <h2>Nancy Collins</h2>
                              <span class="separator">&#8226;</span>
                              <span class="comment-date">08/24/2015</span>
                              <div class="comment-reply">
                                <a href="#">
                                  <i class="fa fa-reply"></i> Reply
                                </a>
                              </div>
                              <!-- /.comment-reply -->
                            </div>
                            <!-- /.comment-header -->
                            <div class="comment-content-wrapper">
                              <div class="comment-content">
                                <p>{{ item.Comment1 }}</p>
                              </div>
                              <!-- /.comment-content -->
                            </div>
                            <!-- /.comment-content-wrapper -->
                          </div>

                          <!-- /.comment-image -->
                          <div class="comment comment-children">
                            <!-- /.comment-inner -->
                          </div>
                          <!-- /.comment -->
                        </div>
                        <!-- /.comment -->
                      </div>
                      <!-- /.comment -->

                      <div class="comment">
                        <!-- /.comment-inner -->
                      </div>
                      <!-- /.comment -->
                    </div>
                    <!-- /.comments -->

                    <form @submit.prevent="postComment">
                      <div class="form-group col-sm-4" style="padding-left: 0;">
                        <h3 style="margin-top: 0px;">コメントを投稿する</h3>
                        <label for>
                          タイトル
                          <span class="required">*</span>
                        </label>
                        <input 
                          type="text"
                          ref="commentName"
                          placeholder="タイトル"
                          v-model="registForm.commentName"
                          name="commentName"
                          required
                          class="form-control"
                            />
                      </div>
                      <div class="orig-row">
                        <div class="form-group col-sm-12">
                          <label for>
                            内容
                            <span class="required">*</span>
                          </label>
                          <textarea
                            class="form-control"
                            rows="7"
                            placeholder="内容"
                            name="comment"
                            v-model="registForm.comment"
                          ></textarea>
                        </div>
                        <div class="col-sm-4">
                          <button class="btn btn-primary btn-block" type="submit">
                            <i class="fa fa-comments"></i>送信
                          </button>
                        </div>
                        <!-- /.col-sm-4 -->
                      </div>
                      <!-- /.row -->
                    </form>
                  </div>
                  <!-- /.post -->
                </div>
                <!-- /.content -->
              </div>
              <!-- /.col-* -->

              <div class="col-sm-4 col-lg-3">
                  <div class="sidebar"  style="width: 300px; margin: 0 0 0 auto;">
                    <div class="widget">
                      <blogCreateButton />
                      <h2 class="widgettitle">注目されているブログ</h2>
                      <recommendBlogItems />
                    </div>

                    <div class="widget">
                      <img
                        src="../../assets/img/tmp/campaign-sample.png"
                        alt="campaign"
                        style="width: 300px"
                      />
                    </div>

                    <div class="widget">
                      <h2 class="widgettitle">おすすめの行動タグ</h2>
                      <recommendActionTag />
                    </div>
                  </div>
                </div>
              <!-- /.col-* -->
            </div>
            <!-- /.row -->
          </div>
          <!-- /.container -->
        </div>
        <!-- /.main-inner -->
      </div>
      <!-- /.main -->

      <div id="footer" class="footer"></div>
    </div>
    <!-- /.page-wrapper -->
  </body>
</div>
</template>

<script>
import { Message } from "element-ui";
import recommendBlogItems from "./recommend_blog_items"
import blogCreateButton from "./blog_create_button"
import recommendActionTag from "./recommend_action_tag"

/* eslint-disable */
export default {
  components: {
    recommendBlogItems,
    blogCreateButton,
    recommendActionTag
  },
  data() {
    return {
      blogDetail: {
        title: "",
        content: "",
        comment: [],
        userProfile:[]
      },
      registForm: {
        comment: "",
        commentName: "",
        id:this.$route.query.id
      },
      likes: [],
      likedFlg: false
    };
  },
  mounted() {
    this.fetchBlogInfo();
    this.getLikes();
  },
  methods: {
    fetchBlogInfo() {
      var that = this;
      // console.log(this.$router.query); 次回の閻餐会
      //ブログ詳細取得
      this.$store
        .dispatch("blog/getBlogDetail", this.$route.query.id)
        .then(res => {
          //成功の場合
          // this.$router.push("/blogDetail?id=" + this.$route.query.id);
          
          this.$nextTick().then(function() {
            const content = that.$store.getters.get_content;
            const title = that.$store.getters.get_title;
            const comment = that.$store.getters.get_comment;
            const userProfile = that.$store.getters.get_userProfile
            that.blogDetail.content = content;
            that.blogDetail.title = title;
            that.blogDetail.comment = comment;
            that.blogDetail.userProfile = userProfile;
          });
        })
        .catch(error => {
          console.log(error);
        });
    },
    blogEdit(id) {
      //apiからサーバーに命令をだす。(store action)
      // console.log(`val = ${JSON.stringify(row)}`)
      //console.log(`val = ${JSON.stringify(row)}`);
      // this.$router.push("/blogDetail");
      // this.$store.dispatch("blog/getBlogDetail",row.id)
      this.$router.push("/blog/blogEdit?id=" + this.$route.query.id);
      // this.$store
      //   .dispatch("blog/getBlogDetail", this.$route.query.id)
      //   .then((res) => {
      //     //成功の場合
      //     this.$router.push("/blog/blogEdit?id=" + id);
      //   })
      //   .catch((error) => {
      //     console.log("err=====");
      //   });
    },
    // handleEdit(index, row) {
    //   console.log(index, row)
    // },
    blogDelete(id) {
      // console.log(`val = ${JSON.stringify(row)}`);
      this.$store
        .dispatch("blog/blogDelete", this.$route.query.id)
        .then(res => {
          Message({
            message: "削除OK",
            type: "success",
            duration: 5 * 1000
          }),
            // ログイン画面に遷移
            this.$router.push({ path: "/blog/blogList" }).catch(err => {});
        })
        .catch(error => {
          e.target.disabled = false;
          console.log(error.data);
          console.log("削除失敗");
        });
    },

    postComment: function(e) {
      // 二重コミット防止のため、ボタンを非活性
      e.target.disabled = true;
      // // 全項目チェック、問題なければ、登録処理を行う
      // const isValid = this.validate(this.registForm, this.rules);
      // if (!isValid) {
      // ユーザ登録処理
      this.$store
        .dispatch("blog/postComment", this.registForm,this.$route.query.id)
        .then((res) => {
          Message({
            message: "作成OK",
            type: "success",
            duration: 5 * 1000,
          }),
            // detail画面に遷移
            this.fetchBlogInfo();
            
        })
        .catch((error) => {
          e.target.disabled = false;
          console.log(error.data);
          console.log("作成失敗");
        });
    },

    blogClick: function() {
      this.$router.push("/blog/blogList");
    },


    async createLike($event) {
      $event.preventDefault()
      const params = {likeInfo: {userID: this.$session.get("UserID"), blogID: this.$route.query.id}};
      const res = await this.$store.dispatch("like/createLike", params);
      if (res.status == 20000) {
          Message({
            message: "いいねしました",
            type: "success",
            duration: 5 * 1000
          })
      }
      this.getLikes();
    },
    async destroyLike($event) {
      $event.preventDefault()
      const params = {likeInfo: {userID: this.$session.get("UserID"), blogID: this.$route.query.id}};
      const res = await this.$store.dispatch("like/destroyLike", params);
      if (res.status == 20000) {
          Message({
            message: "いいねを削除しました",
            type: "success",
            duration: 5 * 1000
          })
      }
      this.getLikes();
    },
    async getLikes($event) {
      const params = {blogID: this.$route.query.id};
      const res = await this.$store.dispatch("like/getLikes", params);
      this.likes = res.likes
      this.didLiked();
    },
    didLiked(){
      const userID = this.$session.get("UserID");
      this.likedFlg = false;
      let that = this;
      this.likes.some(function(like){
        if(like.userID === userID){ 
          that.likedFlg = true;
          return true; 
        }
      });
    }
  }
};
</script>

<style>
@import "https://fonts.googleapis.com/css?family=Nunito:300,400,700";
@import "../../../public/assets/libraries/font-awesome/css/font-awesome.min.css";
@import "../../../public/assets/libraries/owl.carousel/assets/owl.carousel.css";
@import "../../../public/assets/libraries/colorbox/example1/colorbox.css";
@import "../../../public/assets/libraries/bootstrap-select/bootstrap-select.min.css";
@import "../../../public/assets/libraries/bootstrap-fileinput/fileinput.min.css";
@import "../../../public/assets/css/superlist.css";
#content {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}
p {
  white-space: pre-wrap;
}

.tag-border {
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0 5px;
}

.post-meta {
  padding-left: 100px;  
  padding-right: 100px;  
}

</style>
