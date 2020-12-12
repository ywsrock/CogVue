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

        <v-btn elevation="2" tile block color="#FF7878" class="my-1" href="#">
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
          href="#"
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
  },
};
</script>
