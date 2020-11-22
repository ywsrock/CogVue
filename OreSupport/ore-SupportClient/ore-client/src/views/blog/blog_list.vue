<template>
<div id="blog_list">
  <body class>
    <div class="page-wrapper">
      <div id="header" class="header"></div>

      <div class="main">
        <div class="main-inner">
          <div class="container">
            <form class="filter" method="post" action="?">
              <h2>詳細検索</h2>
              <div class="orig-row">
                <searchFormRadiobox
                  title="性別"
                  :options="sexOptions"
                  @emitSelectSex="emitSelectSex"
                />
                <searchFormSelectbox
                  title="年代"
                  :options="ageOptions"
                  @emitSelectAge="emitSelectAge"
                />
                <searchFormSelectbox
                  title="住所"
                  :options="prefecture"
                  @emitSelectPref="emitSelectPref"
                />
                <searchFormSelectbox title="職業" :options="professions" />
                <searchFormSelectDatebox title="投稿日" @emitSelectDate="emitSelectDate" />
                <searchFormCheckbox title="カテゴリ" :options="categories" />
                <searchFormCheckbox title="行動タグ" :options="actions" />
                <searchFormFreeWordbox title="フリーワード" @emitSelectFreeWord="emitSelectFreeWord" />
              </div>
              <hr />
              <div class="orig-row">
                <div class="col-sm-8">
                  <div class="filter-actions">
                    <a href @click.prevent="reset()">
                      <i class="fa fa-close"></i>検索条件リセット
                    </a>
                  </div>
                </div>
                <div class="col-sm-4">
                  <button
                    type="submit"
                    class="btn btn-primary"
                    href
                    @click.prevent.stop="searchBlog"
                  >検&nbsp;索</button>
                </div>
              </div>
            </form>
            <div class="orig-row">
              <div class="col-sm-12 col-lg-9">
                <div class="content">
                  <div class="page-title">
                    <h1>{{ list.tableData.length }}件ヒットしました</h1>
                  </div>
                  <div class="posts">
                    <div class="post" v-for="item in list.displayLists" :key="item.id">
                      <blogItem :item="item" />
                    </div>
                  </div>
                  <div class="pager">
                    <v-pagination
                      v-model="list.page"
                      :length="list.length"
                      :total-visible="7"
                      @input="pageChange"
                    ></v-pagination>
                  </div>
                </div>
              </div>

              <div class="col-sm-4 col-lg-3">
                <div class="sidebar" style="width: 300px; margin: 0 0 0 auto;">
                  <div class="widget">
                    <blogCreateButton />
                    <h2 class="widgettitle">注目されているブログ</h2>
                    <recommendBlogItems />
                  </div>

                  <div class="widget">
                    <img
                      src="../../assets/img/tmp/campaign-sample.png"
                      alt="campaign"
                      style="width: 300px"
                    />
                  </div>

                  <div class="widget">
                    <h2 class="widgettitle">おすすめの行動タグ</h2>
                    <recommendActionTag />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer" class="footer"></div>
    </div>
  </body>
</div>
</template>

<script>
import { Message } from "element-ui";
import searchFormSelectbox from "./search_form_selectbox";
import searchFormRadiobox from "./search_form_radiobox";
import searchFormSelectDatebox from "./search_form_select_datebox";
import searchFormCheckbox from "./search_form_checkbox";
import searchFormFreeWordbox from "./search_form_freewordbox";
import blogItem from "./blog_item";
import recommendBlogItems from "./recommend_blog_items";
import blogCreateButton from "./blog_create_button";
import recommendActionTag from "./recommend_action_tag";

/* eslint-disable */
export default {
  components: {
    searchFormSelectbox,
    searchFormRadiobox,
    searchFormSelectDatebox,
    searchFormCheckbox,
    searchFormFreeWordbox,
    blogItem,
    recommendBlogItems,
    blogCreateButton,
    recommendActionTag
  },
  data() {
    return {
      list: {
        page: 1,
        length: 0,
        tableData: [],
        search: "",
        displayLists: [],
        pageSize: 10
      },
      searchBlogKey: {
        sex: "",
        pref: "",
        age: "",
        freeWord: "",
        from: "",
        to: ""
      },
      searchBlogResult: {
        result: []
      },
      sexOptions: [
        { label: "男性", value: 2 },
        { label: "女性", value: 1 }
      ],
      prefecture: [
        "青森県",
        "岩手県",
        "宮城県",
        "秋田県",
        "山形県",
        "福島県",
        "茨城県",
        "栃木県"
      ],
      ageOptions: ["40代以下", "40-50代", "50-60代", "60-70代", "70代以上"],
      professions: ["教師", "銀行員", "エンジニア", "医師"],
      categories: [
        { label: "食事", value: 1 },
        { label: "運動", value: 2 },
        { label: "脳トレ", value: 3 },
        { label: "音楽", value: 4 },
        { label: "その他", value: 5 }
      ],
      actions: [
        { label: "筋トレ", value: 1 },
        { label: "登山", value: 2 },
        { label: "料理", value: 3 },
        { label: "バイオリン", value: 4 }
      ]
    };
  },
  mounted() {
    this.fetchBlogInfo();
    
  },
  methods: {
    fetchBlogInfo(){
      var that = this;
    //
    this.$store
      .dispatch("blog/getBlogList", this.$route.query.userid)
      .then(res => {
        this.$nextTick().then(function() {
          const blogInfo = that.$store.getters.get_content;
          that.list.tableData = blogInfo;
          that.list.length = Math.ceil(
            that.list.tableData.length / that.list.pageSize
          );
          that.list.displayLists = that.list.tableData.slice(
            0,
            that.list.pageSize
          );
        });
      })
      .catch(err => {
        console.log(err);
      });
    },

    pageChange: function(pageNumber) {
      this.list.displayLists = this.list.tableData.slice(
        this.list.pageSize * (pageNumber - 1),
        this.list.pageSize * pageNumber
      );
    },
    blogEdit(id) {
      //apiからサーバーに命令をだす。(store action)
      // console.log(`val = ${JSON.stringify(row)}`);
      // this.$router.push("/blogDetail");
      // this.$store.dispatch("blog/getBlogDetail",row.id)
      this.$store
        .dispatch("blog/getBlogDetail", id)
        .then(res => {
          //成功の場合
          this.$router.push("/blog/blogEdit?id=" + id);
        })
        .catch(error => {
          console.log("err=====");
        });
    },
    // handleEdit(index, row) {
    //   console.log(index, row)
    // },
    blogDelete(id) {
      // console.log(`val = ${JSON.stringify(row)}`);
      this.$store
        .dispatch("blog/blogDelete", id)
        .then(res => {
          //成功の場合
          var that = this;
          this.$store
            .dispatch("blog/getBlogList")
            .then(res => {
              this.$nextTick().then(function() {
                const blogInfo = that.$store.getters.get_content;
                that.list.tableData = blogInfo;
              });
              Message({
                message: "削除OK",
                type: "success",
                duration: 5 * 1000
              });
            })
            .catch(err => {
              console.log("err-------");
            });
        })
        .catch(error => {
          console.log("err=====");
        });
    },
    reset(){
    this.searchFormSelectbox = "";
    this.fetchBlogInfo();
    this.emitSelectSex() ;
  },
    searchBlog() {
      //apiからサーバーに命令をだす。(store action)
      var that = this;

      const params = new URLSearchParams();
      params.append("sex", this.searchBlogKey.sex);
      params.append("freeWord", this.searchBlogKey.freeWord);
      params.append("from", this.searchBlogKey.from);
      params.append("to", this.searchBlogKey.to);
      params.append("pref", this.searchBlogKey.pref);

      this.$store
        .dispatch("blog/searchBlog", params)
        //成功の場合
        .then(res => {
          this.$nextTick().then(function() {
            const blogInfo = that.$store.getters.get_content;
            that.list.tableData = blogInfo;
            that.list.length = Math.ceil(
              that.list.tableData.length / that.list.pageSize
            );
            that.list.displayLists = that.list.tableData.slice(
              0,
              that.list.pageSize
            );
          })
        })
        //失敗の場合
        .catch();
      console.log("err=====");
    },
    emitSelectSex(sex) {
      this.searchBlogKey.sex = sex;
    },
    emitSelectPref(pref) {
      this.searchBlogKey.pref = pref;
    },
    emitSelectDate(params) {
      this.searchBlogKey.from = params.from;
      this.searchBlogKey.to = params.to;
    },
    emitSelectAge(age) {
      this.searchBlogKey.age = age;
    },
    emitSelectFreeWord(freeWord) {
      this.searchBlogKey.freeWord = freeWord;
    }
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

.search-form-input {
  display: flex;
}

.search-form-input::before {
  display: flex;
}

.search-form-select {
  display: flex;
  width: 200px;
}

.search-form-select::before {
  display: flex;
}

.search-form-title {
  display: flex;
  color: black;
  font-size: 15px;
  border: solid 2px #e9e9e9;
  padding: 6px 0px;
  margin-right: 10px;
  width: 150px;
}

.tag-border {
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0 5px;
}
</style>