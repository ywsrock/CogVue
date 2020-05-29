<template>
  <div class="ユーザ情報">
    <h1>ユーザINFINFO</h1>
    <h2>ようこそ：{{ getusername }}</h2>
  
    <ul>
      <li>
        <router-link v-bind:to="{name:'userRegister'}">登録</router-link>
      </li>
      <li>
        <router-link v-bind:to="{name:'userUpdate'}">変更</router-link>
      </li>
      <li>
        <router-link v-bind:to="{name:'userDel'}">削除</router-link>
      </li>
    </ul>
    <div>
      <router-view />
    </div>
    <div>
      <router-view name="sub" />
    </div>
  </div>
</template>

<script>
import store from "@/store"
export default {
  data() {
    return {
      username:""
    }
  },  
  computed: {
    getusername:() => store.getters.userName
  },
  
  
}
</script>
