<template>
  <!-- サイドメニュー -->
  <div>
    <div v-show="false" style="overflow: hidden;" class="mb-2">
      <v-btn
        elevation="2"
        tile
        style="background-color: #FA60F4; height: 80px; width: 48%; float: left;"
        href="#"
      >
        <v-icon color="black" size="30" style="padding-right: 5px;"
          >mdi-basket-plus</v-icon
        >
        <strong style="font-size: 16px;">商品</strong>
      </v-btn>
      <v-btn
        elevation="2"
        tile
        href="/#/blog/blogList"
        style="background-color: #FFFF00; height: 80px; width: 48%; float: right;"
      >
        <v-icon color="black" size="30" style="padding-right: 5px;"
          >mdi-book-open-page-variant</v-icon
        >
        <strong style="font-size: 16px;">ブログ</strong>
      </v-btn>
    </div>
    <div v-show="false" style="overflow: hidden;">
      <v-btn
        elevation="2"
        tile
        style="background-color: #8585FF; height: 80px; width: 48%; float: left;"
        href="#"
      >
        <v-icon color="black" size="30" style="padding-right: 5px;"
          >mdi-calendar-clock</v-icon
        >
        <strong style="font-size: 16px;">行動管理</strong>
      </v-btn>
      <v-btn
        elevation="2"
        tile
        style="background-color: #90EE90; height: 80px; width: 48%; float: right;"
        href="#"
      >
        <v-icon color="black" size="30" style="padding-right: 5px;"
          >mdi-school</v-icon
        >
        <strong style="font-size: 16px;"
          ><span style="padding-left: 8px;">認知<br /></span>機能大学</strong
        >
      </v-btn>
    </div>

    <v-hover v-slot="{ hover }">
      <v-card
        width="100%"
        :elevation="hover ? 8 : 2"
        :class="{ 'on-hover': hover }"
        class="mt-2"
        tile
      >
        <v-img height="100%" src="../../assets/img/tmp/start-cogevo.png">
        </v-img>

        <v-btn
          elevation="2"
          tile
          block
          color="#FF7878"
          class="my-1"
          href="#"
          @click.prevent.stop="runTask"
          target="_blank"
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
          color="#FF9800"
          class="my-1"
          href="https://cog-evo.jp/"
          target="_blank"
        >
          <v-row>
            <v-col cols="3" class="align-self-center">
              <v-icon color="black" size="30" style="padding-right: 5px;"
                >mdi-head-question-outline</v-icon
              >
            </v-col>
            <v-col cols="8" class="align-self-center text-h5">
              <strong>
                コグエボとは?
              </strong>
            </v-col>
          </v-row>
        </v-btn>

        <v-btn
          elevation="2"
          tile
          block
          left
          color="green lighten-3"
          class="my-1"
          @click.prevent.stop="blogClick(1)"
        >
          <v-row>
            <v-col cols="3" class="align-self-center">
              <v-icon color="black" size="30" style="padding-right: 5px;"
                >mdi-selection-search</v-icon
              >
            </v-col>
            <v-col cols="4" class="align-self-center text-h5">
              <strong>
                ブログ検索
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
            <v-col cols="4" class="align-self-center text-h5">
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
        class="mt-2"
        tile
      >
        <!--全体の利用割合-->
        <PieChart />

        <v-btn
          elevation="2"
          tile
          style="background-color: #FF7878; width: 95%; position: relative; left: 50%; transform: translateX(-50%); margin: 5px 0; font-size: 14px;"
          onClick="window.open('https://cog-evo.jp/', '_blank')"
        >
          <v-icon color="black" size="30">mdi-hand-pointing-right</v-icon>
          <strong>
            詳しくはこちら !!
          </strong>
        </v-btn>
      </v-card>
    </v-hover>

    <v-hover v-slot="{ hover }">
      <v-card
        max-width="100%"
        :elevation="hover ? 8 : 2"
        :class="{ 'on-hover': hover }"
        tile
        class="mt-2"
      >
        <img style="max-width: 100%;" src="../../assets/img/tmp/banner1.png" />
      </v-card>
    </v-hover>
    <v-hover v-slot="{ hover }">
      <v-card
        max-width="100%"
        :elevation="hover ? 8 : 2"
        :class="{ 'on-hover': hover }"
        tile
        class="mt-2"
      >
        <img style="max-width: 100%;" src="../../assets/img/tmp/banner2.png" />
      </v-card>
    </v-hover>
    <v-hover v-slot="{ hover }">
      <v-card
        max-width="100%"
        :elevation="hover ? 8 : 2"
        :class="{ 'on-hover': hover }"
        tile
        class="mt-2"
      >
        <img style="max-width: 100%;" src="../../assets/img/tmp/banner3.png" />
      </v-card>
    </v-hover>
    <v-hover v-slot="{ hover }">
      <v-card
        max-width="100%"
        :elevation="hover ? 8 : 2"
        :class="{ 'on-hover': hover }"
        tile
        class="mt-2"
      >
        <img style="max-width: 100%;" src="../../assets/img/tmp/banner4.png" />
      </v-card>
    </v-hover>
    <v-hover v-slot="{ hover }">
      <v-card
        max-width="100%"
        :elevation="hover ? 8 : 2"
        :class="{ 'on-hover': hover }"
        tile
        class="mt-2"
      >
        <img style="max-width: 100%;" src="../../assets/img/tmp/banner5.png" />
      </v-card>
    </v-hover>
    <v-hover v-slot="{ hover }">
      <v-card
        max-width="100%"
        :elevation="hover ? 8 : 2"
        :class="{ 'on-hover': hover }"
        tile
        class="mt-2"
      >
        <img style="max-width: 100%;" src="../../assets/img/tmp/banner6.png" />
      </v-card>
    </v-hover>
    <v-hover v-slot="{ hover }">
      <v-card
        max-width="100%"
        :elevation="hover ? 8 : 2"
        :class="{ 'on-hover': hover }"
        tile
        class="mt-2"
      >
        <img style="max-width: 100%;" src="../../assets/img/tmp/banner7.png" />
      </v-card>
    </v-hover>
  </div>
</template>

<script>
import PieChart from "./admin/components/PieChart";
import { getToken } from "@/utils/auth";
import { CGEV_SESSION_KEY } from "@/utils/const";
export default {
  components: {
    PieChart,
  },
  name: "taskSideMenu",
  methods: {
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
