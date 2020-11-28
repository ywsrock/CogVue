<template>
  <div id="Top">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
      />
      <!-- <link rel="shortcut icon" type="image/x-icon" href="assets/favicon.png">-->
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="../../assets/favicon.png"
      />
      <title>メイン</title>
    </head>

    <body class="orig-row">
      <div class="page-wrapper">
        <div id="header" class="header"></div>

        <div class="main">
          <div class="main-inner" style="padding: 0px !important;">
            <div class="content">
              <!-- モーダル -->
              <div class="container">
                <div v-if="isModalShow" class="modal-background">
                  <div
                    class="background-white p20 mb30"
                    style="width: 70%; height: 70%; position: absolute; top: 15%; left: 15%;"
                  >
                    <h3 class="page-title">
                      メンテナンスのお知らせ (2020/09/18)
                    </h3>
                    <p>
                      テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    </p>

                    <div
                      style="text-align: right;margin-bottom: 0;position: absolute;bottom: 20px;right: 20px;"
                    >
                      <button
                        @click="isModalShow = false"
                        type="button"
                        class="btn btn-primary mr-2"
                      >
                        閉じる
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- モーダル -->


              <div class="container">
                <div class="row">
                  <div class="col-lg-9">
                    <!-- スライダー -->
                    <el-carousel indicator-position="outside">
                      <el-carousel-item v-for="sliderImage in sliderImages" :key="sliderImage">
                          <img
                            :src="sliderImage"
                            style="width:100%;"
                            :alt="sliderImage"
                          />
                      </el-carousel-item>
                    </el-carousel>

                    <!-- インフォメーション -->
                    <div class="information-border">
                      <table style="color:black; border: solid 1px transparent; border-collapse: separate; border-spacing: 0 15px;">
                        <tbody>
                          <tr
                            v-for="information in informations"
                            :key="information.id"
                            style="color:black;"
                          >
                            <td style="width: 100px;">
                              {{ information.from }}
                            </td>
                            <td>
                              <strong>
                                <a
                                  @click="sohwInfoModal($event)"
                                  style="color:#de0000; border-bottom: solid 1px red;"
                                  >{{ information.title }}</a
                                >
                              </strong>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <!-- 新着ブログ -->
                    <div>
                      <h3 style="margin-bottom: 10px; border-bottom: solid 3px #FFFF00; padding-left: 15px; padding-bottom: 5px;">
                        新着ブログ
                        <div style="text-align: right;float:right;">
                          <a href="/#/blog/blogList" style="font-size: 14px; color: black; text-align: right;">
                            もっと見る＞
                          </a>
                        </div>
                      </h3>
                    </div>
                    <div class="row">
                      <template v-for="n of 4">
                        <div class="col-lg-3" :key="n">
                          <v-hover v-slot="{ hover }">
                            <v-card
                              max-width="200px"
                              :elevation="hover ? 8 : 2"
                              :class="{ 'on-hover': hover }"
                              tile
                            >
                              <v-img
                                height="100px"
                                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                              >
                              </v-img>
                              <v-card-title>Title</v-card-title>
                              <v-card-text class="text--primary">
                                <div>Whitehaven Beach</div>
                              </v-card-text>
                                <div style="text-align: right; margin: 5px 10px 5px 0;">
                                  <v-icon color="yellow" size="35" style="padding-bottom: 10px;">mdi-thumb-up</v-icon>
                                  <span style="font-size: 25px;">20</span>
                                </div>
                            </v-card>
                          </v-hover>
                        </div>
                      </template>
                    </div>

                    <!-- 新着商品 -->
                    <div>
                      <h3 style="margin-bottom: 10px; border-bottom: solid 3px #FA60F4; padding-left: 15px; padding-bottom: 5px;">
                        新着商品
                        <div style="text-align: right;float:right;">                        
                          <a href="#" style="font-size: 14px; color: black; text-align: right;">
                            もっと見る＞
                          </a>
                        </div>
                      </h3>
                    </div>
                    <div class="row">
                      <template v-for="n of 4">
                        <div class="col-lg-3" :key="n">
                          <v-hover v-slot="{ hover }">                          
                            <v-card
                              max-width="200px"
                              :elevation="hover ? 8 : 2"
                              :class="{ 'on-hover': hover }"
                              tile
                            >
                              <v-img
                                height="100px"
                                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                              >
                              </v-img>
                              <v-card-title>Title</v-card-title>
                              <v-card-text class="text--primary">
                                <div>Whitehaven Beach</div>
                              </v-card-text>
                              <div style="text-align: right; margin: 5px 10px 5px 0;">
                                <v-icon color="yellow" size="35" style="padding-bottom: 15px;">mdi-cursor-pointer</v-icon>
                                <span style="font-size: 20px;">CHECK!!</span>
                              </div>
                            </v-card>
                          </v-hover>                            
                        </div>
                      </template>
                    </div>

                    <!-- 新着セミナー -->
                    <div>
                      <h3 style="margin-bottom: 10px; border-bottom: solid 3px #90EE90; padding-left: 15px; padding-bottom: 5px;">
                        新着セミナー
                        <div style="text-align: right;float:right;">                       
                          <a href="#" style="font-size: 14px; color: black;">
                            もっと見る＞
                          </a>
                        </div>
                      </h3>
                    </div>
                    <div class="row">
                      <template v-for="n of 4">
                        <div class="col-lg-3" :key="n">
                          <v-hover v-slot="{ hover }">                                                    
                            <v-card
                              max-width="200px"
                              :elevation="hover ? 8 : 2"
                              :class="{ 'on-hover': hover }"
                              tile
                            >
                              <v-img
                                height="100px"
                                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                              >
                              </v-img>
                              <v-card-title>Title</v-card-title>
                              <v-card-text class="text--primary">
                                <div>Whitehaven Beach</div>
                              </v-card-text>
                              <div style="text-align: right; margin: 5px 10px 5px 0;">
                                <v-icon color="yellow" size="35" style="padding-bottom: 15px;">mdi-human</v-icon>
                                <span style="font-size: 20px;">JOIN!!</span>
                              </div>
                            </v-card>
                          </v-hover>
                        </div>
                      </template>
                    </div>

                    <!-- タブ -->
                    <el-tabs type="card" @tab-click="handleClick" style="margin-top: 20px;">
                      <el-tab-pane label="User">
                        <div class="row">
                          <div class="col-lg-6">
                            <div>
                              <h3 style="margin-bottom: 10px; border-bottom: solid 3px #FFFF00; padding-left: 15px; padding-bottom: 5px; margin-top: 0;">
                                人気ブログ
                                <div style="text-align: right;float:right;">                                                
                                  <a href="/#/blog/blogList" style="font-size: 14px; color: black;">もっと見る＞</a>
                                </div>
                              </h3>   
                            </div>
                            <template v-for="n of 3">
                              <v-hover v-slot="{ hover }" :key="n">                                                        
                                <v-card
                                  :elevation="hover ? 8 : 2"
                                  :class="{ 'on-hover': hover }"
                                  style="margin-bottom: 24px; height: 140px"
                                  tile
                                >
                                  <img
                                    src="../../assets/img/tmp/20200920park.png"
                                    alt="popular blog image"
                                    style="width: 170px; margin: 0 5px; height: auto; max-height: 130px; position: absolute; top: 50%; transform: translateY(-50%);"
                                  />
                                  <div style="text-align: right; padding: 100px 10px 5px 0;">
                                    <v-icon color="yellow" size="35" style="padding-bottom: 10px;">mdi-thumb-up</v-icon>
                                    <span style="font-size: 25px;">20</span>
                                  </div>
                                </v-card>
                              </v-hover>                              
                            </template>
                          </div>
                          <div class="col-lg-6">
                            <div>
                              <h3 style="margin-bottom: 10px; border-bottom: solid 3px #FA60F4; padding-left: 15px; padding-bottom: 5px; margin-top: 0;">
                                人気商品
                                <div style="text-align: right;float:right;">                                                                                
                                  <a href="#" style="font-size: 14px; color: black;">もっと見る＞</a>
                                </div>
                              </h3>            
                            </div>                                            
                            <template v-for="n of 3">
                              <v-hover v-slot="{ hover }" :key="n">                                                                                      
                                <v-card
                                  :elevation="hover ? 8 : 2"
                                  :class="{ 'on-hover': hover }"
                                  style="margin-bottom: 24px; height: 140px"
                                  tile
                                >
                                  <img
                                    src="../../assets/img/tmp/20200920imuseeye.png"
                                    alt="popular blog image"
                                    style="width: 170px; margin: 0 5px; height: auto; max-height: 130px; position: absolute; top: 50%; transform: translateY(-50%);"
                                  />
                                  <div style="text-align: right; padding: 100px 10px 5px 0;">
                                    <v-icon color="yellow" size="35" style="padding-bottom: 15px;">mdi-cursor-pointer</v-icon>
                                    <span style="font-size: 20px;">CHECK!!</span>
                                  </div>
                                </v-card>
                              </v-hover>
                            </template>
                          </div>
                        </div>
                      </el-tab-pane>
                      <el-tab-pane label="Config">
                        <div class="row">
                          <div class="col-lg-6">
                            <div>
                              <h3 style="margin-bottom: 10px; border-bottom: solid 3px #FFFF00; padding-left: 15px; padding-bottom: 5px; margin-top: 0;">
                                人気ブログ
                                <div style="text-align: right;float:right;">                                                
                                  <a href="/#/blog/blogList" style="font-size: 14px; color: black;">もっと見る＞</a>
                                </div>
                              </h3>   
                            </div>
                            <template v-for="n of 3">
                              <v-hover v-slot="{ hover }" :key="n">                                                                                                                    
                                <v-card
                                  :elevation="hover ? 8 : 2"
                                  :class="{ 'on-hover': hover }"
                                  style="margin-bottom: 24px; height: 140px"
                                  tile
                                >
                                  <img
                                    src="../../assets/img/tmp/20200920cogevo.png"
                                    alt="popular blog image"
                                    style="width: 170px; margin: 0 5px; height: auto; max-height: 130px; position: absolute; top: 50%; transform: translateY(-50%);"
                                  />
                                  <div style="text-align: right; padding: 100px 10px 5px 0;">
                                    <v-icon color="yellow" size="35" style="padding-bottom: 10px;">mdi-thumb-up</v-icon>
                                    <span style="font-size: 25px;">20</span>
                                  </div>
                                </v-card>
                              </v-hover>
                            </template>
                          </div>

                          <div class="col-lg-6">
                            <div>
                              <h3 style="margin-bottom: 10px; border-bottom: solid 3px #FA60F4; padding-left: 15px; padding-bottom: 5px; margin-top: 0;">
                                人気商品
                                <div style="text-align: right;float:right;">                                                                                
                                  <a href="#" style="font-size: 14px; color: black;">もっと見る＞</a>
                                </div>
                              </h3>            
                            </div>                                            
                            <template v-for="n of 3">
                              <v-hover v-slot="{ hover }" :key="n">                                                                                                                    
                                <v-card
                                  :elevation="hover ? 8 : 2"
                                  :class="{ 'on-hover': hover }"
                                  style="margin-bottom: 24px; height: 140px"
                                  tile
                                >
                                  <img
                                    src="../../assets/img/tmp/20200920oyasumi.png"
                                    alt="popular blog image"
                                    style="width: 170px; margin: 0 5px; height: auto; max-height: 130px; position: absolute; top: 50%; transform: translateY(-50%);"
                                  />
                                  <div style="text-align: right; padding: 100px 10px 5px 0;">
                                    <v-icon color="yellow" size="35" style="padding-bottom: 15px;">mdi-cursor-pointer</v-icon>
                                    <span style="font-size: 20px;">CHECK!!</span>
                                  </div>
                                </v-card>
                              </v-hover>
                            </template>
                          </div>
                        </div>
                      </el-tab-pane>
                      <el-tab-pane label="Role">
                        <div class="row">
                          <div class="col-lg-6">
                            <div>
                              <h3 style="margin-bottom: 10px; border-bottom: solid 3px #FFFF00; padding-left: 15px; padding-bottom: 5px; margin-top: 0;">
                                人気ブログ
                                <div style="text-align: right;float:right;">                                                
                                  <a href="/#/blog/blogList" style="font-size: 14px; color: black;">もっと見る＞</a>
                                </div>
                              </h3>   
                            </div>
                            <template v-for="n of 3">
                              <v-hover v-slot="{ hover }" :key="n">                                                                                                                    
                                <v-card
                                  :elevation="hover ? 8 : 2"
                                  :class="{ 'on-hover': hover }"
                                  style="margin-bottom: 24px; height: 140px"
                                  tile
                                >
                                  <img
                                    src="../../assets/img/tmp/20200920cd.jpg"
                                    alt="popular blog image"
                                    style="width: 170px; margin: 0 5px; height: auto; max-height: 130px; position: absolute; top: 50%; transform: translateY(-50%);"
                                  />
                                  <div style="text-align: right; padding: 100px 10px 5px 0;">
                                    <v-icon color="yellow" size="35" style="padding-bottom: 10px;">mdi-thumb-up</v-icon>
                                    <span style="font-size: 25px;">20</span>
                                  </div>
                                </v-card>
                              </v-hover>
                            </template>
                          </div>

                          <div class="col-lg-6">
                            <div>
                              <h3 style="margin-bottom: 10px; border-bottom: solid 3px #FA60F4; padding-left: 15px; padding-bottom: 5px; margin-top: 0;">
                                人気商品
                                <div style="text-align: right;float:right;">                                                                                
                                  <a href="#" style="font-size: 14px; color: black;">もっと見る＞</a>
                                </div>
                              </h3>            
                            </div>                                            
                            <template v-for="n of 3">
                              <v-hover v-slot="{ hover }" :key="n">                                                                                                                                                  
                                <v-card
                                  :elevation="hover ? 8 : 2"
                                  :class="{ 'on-hover': hover }"
                                  style="margin-bottom: 24px; height: 140px"
                                  tile
                                >
                                  <img
                                    src="../../assets/img/tmp/20200920candle2.jpg"
                                    alt="popular blog image"
                                    style="width: 170px; margin: 0 5px; height: auto; max-height: 130px; position: absolute; top: 50%; transform: translateY(-50%);"
                                  />
                                  <div style="text-align: right; padding: 100px 10px 5px 0;">
                                    <v-icon color="yellow" size="35" style="padding-bottom: 15px;">mdi-cursor-pointer</v-icon>
                                    <span style="font-size: 20px;">CHECK!!</span>
                                  </div>
                                </v-card>
                              </v-hover>
                            </template>
                          </div>
                        </div>
                      </el-tab-pane>
                      <el-tab-pane label="Task">
                        <div class="row">
                          <div class="col-lg-6">
                            <div>
                              <h3 style="margin-bottom: 10px; border-bottom: solid 3px #FFFF00; padding-left: 15px; padding-bottom: 5px; margin-top: 0;">
                                人気ブログ
                                <div style="text-align: right;float:right;">                                                
                                  <a href="/#/blog/blogList" style="font-size: 14px; color: black;">もっと見る＞</a>
                                </div>
                              </h3>   
                            </div>
                            <template v-for="n of 3">
                              <v-hover v-slot="{ hover }" :key="n">                                                                                                                    
                                <v-card
                                  :elevation="hover ? 8 : 2"
                                  :class="{ 'on-hover': hover }"
                                  style="margin-bottom: 24px; height: 140px"
                                  tile
                                >
                                  <img
                                    src="../../assets/img/tmp/3352188_s.jpg"
                                    alt="popular blog image"
                                    style="width: 170px; margin: 0 5px; height: auto; max-height: 130px; position: absolute; top: 50%; transform: translateY(-50%);"
                                  />
                                  <div style="text-align: right; padding: 100px 10px 5px 0;">
                                    <v-icon color="yellow" size="35" style="padding-bottom: 10px;">mdi-thumb-up</v-icon>
                                    <span style="font-size: 25px;">20</span>
                                  </div>
                                </v-card>
                              </v-hover>
                            </template>
                          </div>

                          <div class="col-lg-6">
                            <div>
                              <h3 style="margin-bottom: 10px; border-bottom: solid 3px #FA60F4; padding-left: 15px; padding-bottom: 5px; margin-top: 0;">
                                人気商品
                                <div style="text-align: right;float:right;">                                                                                
                                  <a href="#" style="font-size: 14px; color: black;">もっと見る＞</a>
                                </div>
                              </h3>            
                            </div>                                            
                            <template v-for="n of 3">
                              <v-hover v-slot="{ hover }" :key="n">                                                                                                                    
                                <v-card
                                  :elevation="hover ? 8 : 2"
                                  :class="{ 'on-hover': hover }"
                                  style="margin-bottom: 24px; height: 140px"
                                  tile
                                >
                                  <img
                                    src="../../assets/img/tmp/20200920kurumi.jpg"
                                    alt="popular blog image"
                                    style="width: 170px; margin: 0 5px; height: auto; max-height: 130px; position: absolute; top: 50%; transform: translateY(-50%);"
                                  />
                                  <div style="text-align: right; padding: 100px 10px 5px 0;">
                                    <v-icon color="yellow" size="35" style="padding-bottom: 15px;">mdi-cursor-pointer</v-icon>
                                    <span style="font-size: 20px;">CHECK!!</span>
                                  </div>
                                </v-card>
                              </v-hover>
                            </template>
                          </div>
                        </div>
                      </el-tab-pane>
                    </el-tabs>

                    <!-- 認知機能基礎知識 -->
                    <h3 style="margin-bottom: 10px; border-bottom: solid 3px #90EE90; padding-left: 15px; padding-bottom: 5px;">認知機能基礎知識</h3>
                    <img
                      src="../../assets/img/tmp/cogni.png"
                      alt="What is Cognitive function?"
                      style="height: 350px; position: relative; left: 50%; transform: translateX(-50%); margin: 15px 0;"                      
                    />
                    <ul style="color: black;">
                      <li>
                        <p>「認知」とは何でしょうか？Wikipediaによれば、「人間などが外界にある対象を知覚した上で、それが何かを判断したり、解釈したりする過程のこと」と定義されています。</p>
                      </li>
                      <li>
                        <p>私たちは、日々五感から入ってくる様々な情報を取捨選択しています。それによって、自分の置かれている状況を把握したり、言葉で表現したり、お金の計算をしたり、友人の名前やお店の場所を記憶したり、問題解決のための手段を考えたりしています。日常生活や仕事をする際には、様々な「認知」機能が働いています。</p>
                      </li>
                      <li>
                        <p>私たちは、認知機能を「見当識」「注意力」「記憶力」「計画力」「空間認識力」の5つに分類しています。これらの「認知」を改善することは、日常生活や仕事の質(QoL)を高めることを目的としており、医学の領域である「認知症」とは一線を引いています。しかしながら、「認知」の状態を把握し、その改善を図ることは、結果として認知症の予防にもつながるものと期待しています。</p>
                      </li>
                    </ul>


                    <div style="margin: 30px 0;">
                      <div style="overflow: hidden; margin: 10px 0;">
                        <v-card
                          elevation="2"
                          tile
                          style="background-color: #FF7878; height: 220px; width: 20%; float: left;"
                        >
                          <p style="position: absolute; top: 50%; transform: translateY(-50%); margin: 0 10px; font-size: 18px;"><strong>認知機能とは？</strong><br />この章では認知機能を学びます</p>
                        </v-card>
                        <v-card
                          elevation="2"
                          tile
                          style="background-color: #FFD4D4; height: 220px; margin-left: 5px; float: left; width: 78%;"
                        >
                          <div style="overflow: hidden;">
                            <template v-for="n of 4">
                              <div style="padding: 12px 5px; float: left;" :key="n">
                                <v-hover v-slot="{ hover }">
                                  <v-card
                                    max-width="150px"
                                    :elevation="hover ? 8 : 2"
                                    :class="{ 'on-hover': hover }"
                                    tile
                                    style="margin-left: 5px;"
                                  >
                                    <v-img
                                      height="100px"
                                      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                                    >
                                    </v-img>
                                    <v-card-title>Title</v-card-title>
                                    <!-- <v-card-text class="text--primary">
                                      <div>Whitehaven Beach</div>
                                    </v-card-text> -->
                                    <div style="text-align: right; margin: 5px 10px 5px 0;">
                                      <v-icon color="yellow" size="35" style="padding-bottom: 5px; margin-right: 5px;">mdi-book-open</v-icon>
                                      <span style="font-size: 15px;">READ MORE</span>
                                    </div>
                                  </v-card>
                                </v-hover>
                              </div>
                            </template>
                          </div>
                        </v-card>
                      </div>

                      <div style="overflow: hidden; margin: 10px 0;">
                        <v-card
                          elevation="2"
                          tile
                          style="background-color: #90EE90; height: 220px; width: 20%; float: left;"
                        >
                          <p style="position: absolute; top: 50%; transform: translateY(-50%); margin: 0 10px; font-size: 18px;"><strong>認知機能を把握し<br />改善する方法</strong></p>                      
                        </v-card>
                        <v-card
                          elevation="2"
                          tile
                          style="background-color: #DCFFDC; height: 220px; margin-left: 5px; float: left; width: 78%;"
                        >
                          <div style="overflow: hidden;">
                            <template v-for="n of 4">
                              <div style="padding: 12px 5px; float: left;" :key="n">
                                <v-hover v-slot="{ hover }">
                                  <v-card
                                    max-width="150px"
                                    :elevation="hover ? 8 : 2"
                                    :class="{ 'on-hover': hover }"
                                    tile
                                    style="margin-left: 5px;"                                    
                                  >
                                    <v-img
                                      height="100px"
                                      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                                    >
                                    </v-img>
                                    <v-card-title>Title</v-card-title>
                                    <!-- <v-card-text class="text--primary">
                                      <div>Whitehaven Beach</div>
                                    </v-card-text> -->
                                    <div style="text-align: right; margin: 5px 10px 5px 0;">
                                      <v-icon color="yellow" size="35" style="padding-bottom: 5px; margin-right: 5px;">mdi-book-open</v-icon>
                                      <span style="font-size: 15px;">READ MORE</span>
                                    </div>
                                  </v-card>
                                </v-hover>
                              </div>
                            </template>
                          </div>
                        </v-card>
                      </div>
                      <div style="overflow: hidden; margin: 10px 0;">
                        <v-card
                          elevation="2"
                          tile
                          style="background-color: #8585FF; height: 220px; width: 20%; float: left;"
                        >
                          <p style="position: absolute; top: 50%; transform: translateY(-50%); margin: 0 10px; font-size: 18px;"><strong>認知機能とQOL</strong></p>                      
                        </v-card>

                        <v-card
                          elevation="2"
                          tile
                          style="background-color: #ECECFF; height: 220px; margin-left: 5px; float: left; width: 78%;"
                        >
                          <div style="overflow: hidden;">
                            <template v-for="n of 4">
                              <div style="padding: 12px 5px; float: left;" :key="n">
                                <v-hover v-slot="{ hover }">
                                  <v-card
                                    max-width="150px"
                                    :elevation="hover ? 8 : 2"
                                    :class="{ 'on-hover': hover }"
                                    tile
                                    style="margin-left: 5px;"                                    
                                  >
                                    <v-img
                                      height="100px"
                                      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                                    >
                                    </v-img>
                                    <v-card-title>Title</v-card-title>                                    
                                    <!-- <v-card-text class="text--primary">
                                      <div>Whitehaven Beach</div>
                                    </v-card-text> -->
                                    <div style="text-align: right; margin: 5px 10px 5px 0;">
                                      <v-icon color="yellow" size="35" style="padding-bottom: 5px; margin-right: 5px;">mdi-book-open</v-icon>
                                      <span style="font-size: 15px;">READ MORE</span>
                                    </div>
                                  </v-card>
                                </v-hover>
                              </div>
                            </template>
                          </div>
                        </v-card>
                      </div>
                    </div>
                    

                    
                    
                    <!-- ボトムバナー -->
                    <div class="row">
                      <div class="col-sm-4">
                        <v-hover v-slot="{ hover }">
                          <v-card
                            max-width="100%"
                            :elevation="hover ? 8 : 2"
                            :class="{ 'on-hover': hover }"
                            tile
                          >
                            <img
                              style="max-width: 100%;"
                              src="../../assets/img/tmp/20200920orunitin.png"
                            />

                          </v-card>
                        </v-hover>
                      </div>
                      <div class="col-sm-4">
                        <v-hover v-slot="{ hover }">
                          <v-card
                            max-width="100%"
                            :elevation="hover ? 8 : 2"
                            :class="{ 'on-hover': hover }"
                            tile
                          >
                            <img
                              style="max-width: 100%;"
                              src="../../assets/img/tmp/20200920sitorurin.png"
                            />
                          </v-card>
                        </v-hover>
                      </div>
                      <div class="col-sm-4">
                        <v-hover v-slot="{ hover }">
                          <v-card
                            max-width="100%"
                            :elevation="hover ? 8 : 2"
                            :class="{ 'on-hover': hover }"
                            tile
                          >
                            <img
                              style="max-width: 100%;"
                              src="../../assets/img/tmp/20200920orunitinplus.png"
                            />
                          </v-card>
                        </v-hover>
                      </div>
                    </div>
                  </div>

                  <!-- サイドメニュー -->
                  <div class="col-lg-3">
                    <div style="overflow: hidden;" class="mb-2">
                      <v-btn
                        elevation="2"
                        tile
                        style="background-color: #FA60F4; height: 80px; width: 48%; float: left;"
                        href="#"
                      >
                        <v-icon color="black" size="30" style="padding-right: 5px;">mdi-basket-plus</v-icon>                                                                                           
                        <strong style="font-size: 16px;">商品</strong>
                      </v-btn>
                      <v-btn
                        elevation="2"
                        tile
                        href="/#/blog/blogList"
                        style="background-color: #FFFF00; height: 80px; width: 48%; float: right;"
                      >
                        <v-icon color="black" size="30" style="padding-right: 5px;">mdi-book-open-page-variant</v-icon>                                                                     
                        <strong style="font-size: 16px;">ブログ</strong>
                      </v-btn>
                    </div>
                    <div style="overflow: hidden;">
                      <v-btn
                        elevation="2"
                        tile
                        style="background-color: #8585FF; height: 80px; width: 48%; float: left;"
                        href="#"                          
                      >
                        <v-icon color="black" size="30" style="padding-right: 5px;">mdi-calendar-clock</v-icon>                                                                                           
                        <strong style="font-size: 16px;">行動管理</strong>
                      </v-btn>
                      <v-btn
                        elevation="2"
                        tile
                        style="background-color: #90EE90; height: 80px; width: 48%; float: right;"
                        href="#"                          
                      >
                        <v-icon color="black" size="30" style="padding-right: 5px;">mdi-school</v-icon>                                                                                           
                        <strong style="font-size: 16px;"><span style="padding-left: 8px;">認知<br /></span>機能大学</strong>
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
                        <v-img
                          height="100%"
                          src="../../assets/img/tmp/start-cogevo.png"
                        >
                        </v-img>
                        <v-btn
                          elevation="2"
                          tile
                          style="background-color: #FF7878; width: 95%; position: relative; left: 50%; transform: translateX(-50%); margin: 5px 0; font-size: 14px;"
                          href="#"                          
                        >
                          <v-icon color="black" size="30" style="padding-right: 5px;">mdi-head-heart-outline</v-icon>                                               
                          <strong>
                            認知機能測定開始 !!
                          </strong>                        
                        </v-btn>
                      </v-card>
                    </v-hover>

                    <v-btn
                      elevation="2"
                      tile
                      style="background-color: #FFAB49; width: 100%; font-size: 14px; height: 80px;"
                      href="#"                          
                      class="mt-2"
                    >
                      <v-icon color="black" size="40" style="padding-right: 5px;">mdi-hand-heart-outline</v-icon>
                      <strong>
                        はじめての方へ<br>
                        Cogneesの楽しみ方
                      </strong>                        
                    </v-btn>

                    <v-hover v-slot="{ hover }">
                      <v-card
                        width="100%"
                        :elevation="hover ? 8 : 2"
                        :class="{ 'on-hover': hover }"
                        class="mt-2"
                        tile
                      >
                        <v-img
                          height="100%"
                          src="../../assets/img/tmp/cogevo-puzzle.png"
                        >
                        </v-img>
                        <v-btn
                          elevation="2"
                          tile
                          style="background-color: #FF7878; width: 95%; position: relative; left: 50%; transform: translateX(-50%); margin: 5px 0; font-size: 14px;"
                          onClick="window.open('https://cog-evo.jp/', '_blank')"
                        >
                          <v-icon color="black" size="30" >mdi-hand-pointing-right</v-icon>                        
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
                        <img
                          style="max-width: 100%;"
                          src="../../assets/img/tmp/banner1.png"
                        />
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
                        <img
                          style="max-width: 100%;"
                          src="../../assets/img/tmp/banner2.png"
                        />
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
                        <img
                          style="max-width: 100%;"
                          src="../../assets/img/tmp/banner3.png"
                        />
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
                        <img
                          style="max-width: 100%;"
                          src="../../assets/img/tmp/banner4.png"
                        />
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
                        <img
                          style="max-width: 100%;"
                          src="../../assets/img/tmp/banner5.png"
                        />
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
                        <img
                          style="max-width: 100%;"
                          src="../../assets/img/tmp/banner6.png"
                        />
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
                        <img
                          style="max-width: 100%;"
                          src="../../assets/img/tmp/banner7.png"
                        />
                      </v-card>
                    </v-hover>
                  </div>
                </div>
                <!-- /.container -->
              </div>

              <!-- フッター -->
              <v-footer
                dark
                padless
              >
                <v-row
                  justify="center"
                  no-gutters
                  style="margin: 30px 0;"
                >
                  <v-btn
                    v-for="link in links"
                    :key="link"
                    color="yellow"
                    text
                    rounded
                    class="my-2"
                    style="font-size: 14px;"                    
                  >
                    {{ link }}
                  </v-btn>
                  <v-col
                    class="primary lighten-2 py-4 text-center"
                    style="color: yellow;"
                    cols="12"
                  >
                    {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
                  </v-col>
                </v-row>
              </v-footer>


            </div>
            <!-- /.content -->
          </div>
          <!-- /.main-inner -->
        </div>
        <!-- /.main -->









      </div>
      <!-- /.page-wrapper -->
    </body>
  </div>
</template>

<script>
export default {
  data() {
    return {
      informations: [],
      blogList: [],
      isModalShow: false,
      sliderImages: [require('../../assets/img/tmp/20200920rutein.png'), require('../../assets/img/tmp/20200920tbcwebinar.png'), require('../../assets/img/tmp/20200920amino.png'), require('../../assets/img/tmp/20200920tbcseminar.png')],
      links: ['ホーム', '認知概要', '認知測定', 'ブログ', '行動管理', 'ヘルプ'],
      activeName: 'first'
    };
  },
  mounted() {
    this.fetchInformations();
    this.fetchBlogList();
  },
  methods: {
    // タブクリックのイベント
    handleClick(tab, event) {
      console.log(tab, event);
    },
    // 公開されているお知らせを取得
    async fetchInformations() {
      try {
        const res = await this.$store.dispatch("information/getInformations");
        this.informations = res.informationList;
      } catch (err) {
        console.log("err:", err);
      }
    },

    // ブログを取得
    async fetchBlogList() {
      try {
        const res = await this.$store.dispatch("blog/getBlogList");
        this.blogList = res.content;
      } catch (err) {
        console.log("err:", err);
      }
    },
    sohwInfoModal: function($event) {
      $event.preventDefault();
      this.isModalShow = true;
    },
  },
};
</script>
<style>
.modal-background {
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99999;
  display: block;
  overflow-y: auto;
}
/* 外枠に設定する class */
.img_outer {
  position: relative;
  margin: 1em 0;
  height: 300px;
}

/* 画像に対して指定する class */
.inner_photo {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  height: auto;
  width: auto;
  max-width: 100%;
  max-height: 100%;
  margin: auto;
}

.statusbox h2 {
  color: black !important;
  font-size: 18px !important;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif !important;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

.information-border {
  padding: 5px 20px;
  border: 1px solid #de0000;
}

.v-card {
  transition: opacity .4s ease-in-out;
}

.v-card.on-hover {
  opacity: 0.8;
 }
</style>
