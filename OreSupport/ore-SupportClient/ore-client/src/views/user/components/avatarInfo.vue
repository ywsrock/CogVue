<template>
  <div id="avatarInfo">
    <div class="user-photo">
      <a href="#">
        <img :src="avatar" @error="defaultAvatar" alt="User Photo" />
        <span class="user-photo-action">
          <label for="file_photo">
            写真アップロード
            <input
              ref="upfile"
              id="file_photo"
              type="file"
              accept=".jpg, .jpeg, .png"
              v-on:change="onchange"
              style="display:none;"
            />
          </label>
        </span>
      </a>
    </div>
  </div>
</template>

<script>
import { Message } from "element-ui";
var img = require("../../../../public/favicon.png");
export default {
  name: "userAvatar",
  data() {
    return {
      avatar: "" || img,
      defaultsrc: img,
    };
  },
  methods: {
    defaultAvatar: function() {
      return this.defaultsrc;
    },
    // 画像アップロード
    onchange: function() {
      let that = this;
      //ファイル取得
      let fl = this.$refs.upfile.files[0];
      //ファイルの形式
      const isJPG = fl.type === "image/jpeg";
      //ファイルサイズ
      const isLt2M = fl.size / 1024 / 1024 < 2;
      if (!isJPG) {
        Message({
          message: "[jpeg/jpg]形式の画像をアップロードしてくださり。",
          type: "error",
          duration: 3 * 1000,
        });
        return;
      }
      if (!isLt2M) {
        Message({
          message: "サイズは2MB以下のファイルをアップロードしてくだい。",
          type: "error",
          duration: 3 * 1000,
        });
        return;
      }
      //Content-Type:form/multipart で送信されます
      let data = new FormData();
      data.append("imgAvatar", fl, fl.name);
      this.$store
        .dispatch("user/imageUp", data)
        .then(function(data) {
          return data.imgUrl;
        })
        .then(function(text) {
          //基本情報の画像セット
          that.avatar = text;
        })
        .catch(function(error) {
          window.alert("Error: " + error.message);
        });
    },
  },
};
</script>
<style scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
