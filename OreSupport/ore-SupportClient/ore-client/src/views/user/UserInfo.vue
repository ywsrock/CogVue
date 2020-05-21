<template>
  <div class="ユーザ情報">
    <h1>ユーザINFINFO</h1>
    <ul>
      <li>
        <router-link to="{name:'userRegister'}">登録</router-link>
      </li>
      <li>
        <router-link to="{name:'userUpdate'}">変更</router-link>
      </li>
      <li>
        <router-link to="{name:'userDel'}">削除</router-link>
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
