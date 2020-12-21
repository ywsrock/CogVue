<template>
  <!-- サイドメニュー -->
  <div>
    <v-hover v-slot="{ hover }">
      <v-card
        width="100%"
        :elevation="hover ? 8 : 2"
        :class="{ 'on-hover': hover }"
        class="mt-2"
        tile
      >
        <v-img
          class="mt-5"
          height="100%"
          src="../../assets/img/tmp/start-cogevo.png"
        >
        </v-img>
        <v-btn
          elevation="2"
          tile
          block
          color="light-green accent-3"
          class="my-1"
          href="#"
        >
          <v-row>
            <v-col cols="3" class="align-self-center">
              <v-icon color="black" size="30" style="padding-right: 5px;"
                >mdi-account-question</v-icon
              >
            </v-col>
            <v-col cols="8" class="align-self-center text-h5">
              <strong>
                行動管理の使い方
              </strong>
            </v-col>
          </v-row>
        </v-btn>

        <v-btn
          elevation="2"
          tile
          block
          color="#FF7878"
          class="my-1"
          href="#"
          @click.prevent.stop="runTask"
        >
          <v-row>
            <v-col cols="3" class="align-self-center">
              <v-icon color="black" size="30" style="padding-right: 5px;"
                >mdi-head-heart-outline</v-icon
              >
            </v-col>
            <v-col cols="8" class="align-self-center text-h5">
              <strong>
                認知機能測定開始 !!
              </strong>
            </v-col>
          </v-row>
        </v-btn>

        <v-btn
          elevation="2"
          tile
          block
          left
          color="purple lighten-3"
          class="my-1"
          @click.prevent.stop="blogClick(2)"
        >
          <v-row>
            <v-col cols="3" class="align-self-center">
              <v-icon color="black" size="30" style="padding-right: 5px;"
                >mdi-blogger</v-icon
              >
            </v-col>
            <v-col cols="8" class="align-self-center text-h5">
              <strong>
                ブログ新規投稿
              </strong>
            </v-col>
          </v-row>
        </v-btn>
      </v-card>
    </v-hover>

    <v-hover v-slot="{ hover }">
      <v-card
        width="100%"
        :elevation="hover ? 8 : 2"
        :class="{ 'on-hover': hover }"
        class="my-5 text-h3"
        tile
      >
        <v-btn
          elevation="2"
          tile
          style="background-color: #FFAB49; width: 100%; font-size: 14px; height: 80px;"
          href="#"
          class="mt-2"
          @click="handleCreatAction()"
        >
          <v-row>
            <v-col cols="3" class="align-self-center">
              <v-icon color="black" size="40" style="padding-right: 5px;"
                >mdi-calendar-account-outline</v-icon
              >
            </v-col>
            <v-col cols="8" class="align-self-center text-h4">
              <strong>
                行動新規登録
              </strong>
            </v-col>
          </v-row>
        </v-btn>
      </v-card>
    </v-hover>
  </div>
</template>

<script>
import { getToken } from "@/utils/auth";
import { CGEV_SESSION_KEY } from "@/utils/const";
export default {
  name: "actionSideMenu",
  methods: {
    //アクションの編集
    handleCreatAction() {
      // 表示の場合、初期値に変更
      this.$parent.createOpen = false;
      //画面表示
      setTimeout(() => {
        this.$parent.createOpen = true;
      }, 100);
    },

    // ブログ
    blogClick: function(index) {
      switch (index) {
        //検索
        case 1:
          this.$router.push("/blog/blogList");
          break;
        //新規
        default:
          this.$router.push("/blog/createBlog");
      }
    },
    //タスク実行
    runTask: function() {
      const userToken = getToken();
      if (!userToken) {
        this.$router.push("/login");
        return;
      }
      // top画面に移動
      this.$router.push("/");
      // 新しいタブを開き、ページを表示
      this.$nextTick(async () => {
        let access_token = await this.$store.dispatch("cgev/authenticate");
        var url = location.href;
        var winFeature =
          "location=no,toolbar=no,menubar=no,scrollbars=yes,resizable=yes";

        let subWin = await window.open(
          `https://api.cgev-stg.com/v1/run/tasks?access_token=${access_token}&return_url=${url}`,
          "_blank",
          winFeature
        );
        // サブ画面閉じる時、指定画面遷移
        if (subWin !== null && subWin != undefined) {
          var that = this;
          const timer = setInterval(() => {
            if (!subWin.closed) return;
            clearInterval(timer);
            Object.keys(CGEV_SESSION_KEY).forEach(function(key) {
              if (that.$session.has(key)) {
                that.$session.remove(key);
              }
            });
            that.$router.push("/task/userSummary");
            subWin = null;
          }, 100);
        }
      });
    },
  },
};
</script>
