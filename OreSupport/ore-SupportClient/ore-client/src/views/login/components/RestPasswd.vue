<template>
  <v-app>
    <div class="page-wrapper">
      <div class="main">
        <p
          class="d-flex text-h5 orange  justify-center align-center"
          style="height:6%"
        >
          登録済ユーザ情報入力
        </p>
        <div class="main-inner">
          <div class="container">
            <div class="content">
              <div class="orig-row">
                <div class="col-sm-7 col-sm-offset-3">
                  <validation-observer
                    ref="restPasswordForm"
                    v-slot="{ invalid }"
                  >
                    <form @submit.prevent="submit">
                      <v-row>
                        <v-col cols="11">
                          <validation-provider
                            v-slot="{ errors }"
                            name="ユーザ名"
                            rules="required|max:50"
                          >
                            <v-text-field
                              v-model="name"
                              :counter="50"
                              color="blue darken-2"
                              :error-messages="errors"
                              label="ユーザ名"
                              required
                            ></v-text-field>
                          </validation-provider>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="11">
                          <validation-provider
                            v-slot="{ errors }"
                            name="email"
                            rules="required|email"
                          >
                            <v-text-field
                              v-model="email"
                              :error-messages="errors"
                              label="メールアドレス"
                              required
                            ></v-text-field>
                          </validation-provider>
                        </v-col>
                      </v-row>

                      <validation-provider
                        v-slot="{ errors }"
                        name="生年月日"
                        rules="required"
                      >
                        <v-row col="12">
                          <v-col cols="11">
                            <v-text-field
                              v-model="birthday"
                              :error-messages="errors"
                              label="生年月日"
                              required
                              readonly
                              @click.prevent="menu1 = true"
                            ></v-text-field>
                          </v-col>
                          <v-col>
                            <v-menu
                              class="float-left"
                              ref="menu1"
                              v-model="menu1"
                              :close-on-content-click="false"
                              transition="scale-transition"
                              offset-y
                              max-width="290px"
                              min-width="290px"
                            >
                              <v-date-picker
                                v-model="birthday"
                                locale="jp-ja"
                                :day-format="(date) => new Date(date).getDate()"
                                no-title
                                @input="menu1 = false"
                              ></v-date-picker>
                              <template v-slot:activator="{ on, attrs }">
                                <v-icon v-on="on" v-bind="attrs"
                                  >mdi-calendar</v-icon
                                >
                              </template>
                            </v-menu>
                          </v-col>
                        </v-row>
                      </validation-provider>
                      <!--<div class="float-right">-->
                      <v-btn
                        class="mr-4 text-h5"
                        type="submit"
                        :disabled="invalid"
                      >
                        送信
                      </v-btn>
                      <v-btn @click="clear" class="text-h5 ">
                        戻る
                      </v-btn>
                      <!--</div>-->
                    </form>
                  </validation-observer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-app>
</template>
<script>
import { required, email, max } from "vee-validate/dist/rules";
import { Message } from "element-ui";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";

setInteractionMode("eager");

extend("required", {
  ...required,
  message: "{_field_} 入力してください。",
});

extend("max", {
  ...max,
  message: "{_field_} 最大文字 {length} まで入力してください。",
});

extend("email", {
  ...email,
  message: "正しいメールアドレスを入力してください。",
});

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    name: "",
    email: "",
    birthday: "",
    menu1: false,
  }),

  methods: {
    async submit() {
      //   フォームチェック;
      await this.$refs.restPasswordForm.validate().then(async (success) => {
        if (!success) {
          return;
        }
        // サーバに送信
        await this.$store
          .dispatch("user/restPassword", {
            username: this.name,
            email: this.email,
            birthday: this.birthday,
          })
          // eslint-disable-next-line
          .then((res) => {
            Message({
              message: "メール送信成功",
              type: "success",
              duration: 5 * 1000,
            });

            this.$router.push("/");
          })
          .catch((err) => {
            console.log(err);
          });
      });
    },
    clear() {
      this.name = "";
      this.email = "";
      this.birthday = "";
      this.$refs.restPasswordForm.reset();
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.error--text {
  color: red !important;
  font-size: 20px;
}
.messages__wrapper {
  color: red !important;
  background-color: blue !important;
}
</style>
