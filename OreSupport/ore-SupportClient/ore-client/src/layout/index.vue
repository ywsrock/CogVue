<template>
    <div name="Layout">
        <TopHeader :key="key"/>
        <MainForm/>
    </div>
</template>


<script>
import MainForm from './components/MainForm'
import TopHeader from './components/TopHeader'

export default {
    name:"Layout",
    components:{
        MainForm,
        TopHeader
    },

   computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>