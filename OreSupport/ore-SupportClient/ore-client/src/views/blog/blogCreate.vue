<template>
  <div id="ユーザINFO">
    <body class="">
      <div class="page-wrapper">
        <div id="header" class="header"></div>

        <div class="main">
          <form @submit.prevent="createBlog" style="border:1px solid #ccc">
            <div class="main-inner">
              <div class="container">
                <div class="content">
                  <div class="page-title">
                    <h1>ブログ投稿</h1>
                  </div>
                  <!-- /.page-title -->

                  <div class="background-white p20 mb30">
                    <h3 class="page-title">
                      投稿内容
                    </h3>

                    <div class="row">
                      <div class="col-sm-8">
                        <div class="form-group col-sm-12">
                          <label for="title">タイトル</label>
                          <input
                            type="text"
                            ref="title"
                            placeholder="タイトル"
                            v-model="registForm.title"
                            name="title"
                            required
                            class="form-control"
                          />
                        </div>
                        <!-- /.form-group -->

                        <div class="col-sm-4">
                          <label>公開範囲</label>
                          <select>
                            <option value="公開">公開</option>
                            <option value="友達">友達</option>
                            <option value="個人">個人</option>
                          </select>
                        </div>
                        <!-- /.form-group -->

                        <div class="col-sm-4">
                          <label>コメント可否</label>
                          <select>
                            <option value="可">可</option>
                            <option value="不可">不可</option>
                          </select>
                        </div>
                        <!-- /.form-group -->

                        <div class="col-sm-4">
                          <label>日付</label>
                          <input
                            class="form-control"
                            type="date"
                            name="uploadday"
                          />
                        </div>
                        <!-- /.form-group -->
                      </div>
                      <!-- /.form-group -->

                      <div class="col-sm-4">
                        <div class="widget">
                          <div class="user-photo col-sm-6">
                            <a href="#">
                              <img
                                src="../../assets/img/tmp/agent-2.jpg"
                                alt="User Photo"
                              />
                              <span class="user-photo-action">画像を追加</span>
                            </a>
                          </div>
                          <!-- /.user-photo -->
                          <div class="user-photo col-sm-6">
                            <a href="#">
                              <img
                                src="../../assets/img/tmp/agent-2.jpg"
                                alt="User Photo"
                              />
                              <span class="user-photo-action">画像を追加</span>
                            </a>
                          </div>
                          <!-- /.user-photo -->
                        </div>
                        <!-- /.widget -->
                      </div>
                      <!-- col-sm-6 -->
                    </div>
                    <!-- /.row -->
                  </div>

                  <div class="background-white p20 mb30">
                    <h3 class="page-title">
                      内容

                      <div class="col-sm-4 pull-right">
                        <a href="#" class="btn btn-primary col-sm-5"
                          >タグを登録</a
                        >
                        <a href="#" class="btn btn-primary col-sm-5 pull-right"
                          >追加</a
                        >
                      </div>
                    </h3>

                    <div class="form-horizontal">
                      <div class="form-group">
                        <label class="col-sm-2">
                          <select>
                            <option value="質問">質問</option>
                            <option value="タグ">タグ</option>
                            <option value="カテゴリー">カテゴリー</option>
                          </select></label
                        >
                        <label class="col-sm-4">
                          <select>
                            <option value="質問"
                              >今日の朝ごはんはなんですか</option
                            >
                            <option value="タグ">今日の体調はどうですか</option>
                          </select></label
                        >

                        <div class="col-sm-6">
                          <input
                            type="text"
                            class="form-control"
                            value="パンとミルク"
                          />
                        </div>
                        <!-- /.col-* -->
                      </div>
                      <!-- /.form-group -->

                      <div class="form-group">
                        <label class="col-sm-2">
                          <select>
                            <option value="質問">質問</option>
                            <option value="タグ">タグ</option>
                            <option value="カテゴリー">カテゴリー</option>
                          </select></label
                        >
                        <label class="col-sm-4">
                          <select>
                            <option value="質問"
                              >今日の朝ごはんはなんですか</option
                            >
                            <option value="タグ" selected>睡眠時間は？</option>
                          </select></label
                        >

                        <div class="col-sm-6">
                          <input
                            type="text"
                            class="form-control"
                            value="7時間です"
                          />
                        </div>
                        <!-- /.col-* -->
                      </div>
                      <!-- /.form-group -->

                      <div class="form-group">
                        <label class="col-sm-2">
                          <select>
                            <option value="質問">質問</option>
                            <option value="タグ" selected>タグ</option>
                            <option value="カテゴリー">カテゴリー</option>
                          </select></label
                        >
                        <label class="col-sm-4">
                          <select>
                            <option value="質問">ランニング</option>
                            <option value="タグ">計算ドリル</option>
                            <option value="タグ">サプリメント</option>
                          </select></label
                        >

                        <div class="col-sm-6">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="12時間"
                          />
                        </div>
                        <!-- /.col-* -->
                      </div>
                      <!-- /.form-group -->

                      <div class="form-group">
                        <label class="col-sm-2">
                          <select>
                            <option value="質問">質問</option>
                            <option value="タグ" selected>タグ</option>
                            <option value="カテゴリー">カテゴリー</option>
                          </select></label
                        >
                        <label class="col-sm-4">
                          <select>
                            <option value="質問">ランニング</option>
                            <option value="タグ" selected>計算ドリル</option>
                            <option value="タグ">サプリメント</option>
                          </select></label
                        >

                        <div class="col-sm-6">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="1時間"
                          />
                        </div>
                        <!-- /.col-* -->
                      </div>
                      <!-- /.form-group -->

                      <div class="form-group">
                        <label class="col-sm-2">
                          <select>
                            <option value="質問">質問</option>
                            <option value="タグ">タグ</option>
                            <option value="カテゴリー" selected
                              >カテゴリー</option
                            >
                          </select></label
                        >
                        <label class="col-sm-4">
                          <select>
                            <option value="質問">日常</option>
                            <option value="タグ">CogEvo</option>
                          </select></label
                        >
                      </div>
                      <!-- /.form-group -->
                    </div>
                    <!-- /.form-inline -->
                  </div>
                  <!-- /.background-white -->

                  <div class="background-white p20 mb30">
                    <h3 class="page-title">
                      本文

                      <div class="col-sm-4 pull-right">
                        <a href="#" class="btn btn-primary col-sm-5"
                          >商品選択</a
                        >
                        <a href="#" class="btn btn-primary col-sm-5 pull-right"
                          >CogEvoデータ</a
                        >
                      </div>
                    </h3>

                    <label for="content"><b>内容</b></label>
                    <textarea
                      class="form-control"
                      rows="7"
                      placeholder="内容"
                      name="content"
                      v-model="registForm.content"
                      :readonly="is_readonly"
                    ></textarea>

                    <div class="background-white p20 mb30">
                      <div class="col-sm-4">
                        <button type="submit" href="#" class="btn btn-primary col-sm-5">
                          登録
                        </button>
                        <button
                          href="#"
                          class="btn btn-primary col-sm-5 pull-right"
                        >
                          一時保存
                        </button>
                        <br /><br />
                      </div>
                      <div class="col-sm-4 pull-right">
                        <a href @click.prevent="blogClick" class="btn btn-primary col-sm-5 pull-right">キャンセル</a>

                        <!-- <button type="reset"
                          href="#"
                          class="btn btn-primary col-sm-5 pull-right"
                        >
                          キャンセル
                        </button> -->
                      </div>
                    </div>
                  </div>
                  <!-- /.content -->
                </div>
                <!-- /.container -->
              </div>
              <!-- /.main-inner -->
            </div>
            <!-- /.main -->
          </form>
        </div>
        <div id="footer" class="footer"></div>
      </div>
      <!-- /.page-wrapper -->
    </body>
  </div>
</template>

<script>
import { Message } from "element-ui";
/* eslint-disable */
export default {
  data() {
    return {
      registForm: {
        title: "",
        content: "",
      },
    };
  },
  methods: {
    // blog登録処理ハンドラー
    createBlog: function(e) {
      // 二重コミット防止のため、ボタンを非活性
      e.target.disabled = true;
      // // 全項目チェック、問題なければ、登録処理を行う
      // const isValid = this.validate(this.registForm, this.rules);
      // if (!isValid) {
      // ユーザ登録処理
      this.$store
        .dispatch("blog/createBlog", this.registForm)
        .then((res) => {
          Message({
            message: "作成OK",
            type: "success",
            duration: 5 * 1000,
          }),
            // ログイン画面に遷移
            this.$router.push({ path: "/blog/blogList" }).catch((err) => {});
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
  },
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
</style>