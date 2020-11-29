<template>
  <div>
    <h1 class="text-h1 orange">
      登録済ユーザ情報入力
    </h1>
    <validation-observer ref="restPasswordForm" v-slot="{ invalid }">
      <form @submit.prevent="submit">
        <validation-provider
          v-slot="{ errors }"
          name="Name"
          rules="required|max:50"
        >
          <v-text-field
            v-model="name"
            :counter="50"
            :error-messages="errors"
            label="ユーザ名"
            required
          ></v-text-field>
        </validation-provider>
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
        <validation-provider
          v-slot="{ errors }"
          name="birthday"
          rules="required"
        >
          <v-text-field
            v-model="birthday"
            :error-messages="errors"
            label="生年月日"
            required
          ></v-text-field>
        </validation-provider>

        <v-btn class="mr-4" type="submit" :disabled="invalid">
          送信
        </v-btn>
        <v-btn @click="clear">
          戻る
        </v-btn>
      </form>
    </validation-observer>
  </div>
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
          .then((res) => {
            Message({
              message: "メール送信成功",
              type: "success",
              duration: 5 * 1000,
            });
            console.log("---OK");
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
