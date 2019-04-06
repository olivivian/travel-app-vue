<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page, index) of pages" :key="index">
                <div
                        class="icon"
                        v-for="item of page"
                        :key="item.id"
                >
                    <div class='icon-img'>
                        <img class='icon-img-content' :src='item.imgUrl' />
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: 'HomeIcons',
        data () {
            return {
                list:[
                    {
                        id:'0001',
                        imgUrl:require('../../../assets/img/icons/icon1.png'),
                        desc:'景点门票'
                    },
                    {
                        id:'0002',
                        imgUrl:require('../../../assets/img/icons/icon2.png'),
                        desc:'海洋馆'
                    },
                    {
                        id:'0003',
                        imgUrl:require('../../../assets/img/icons/icon3.png'),
                        desc:'游乐场'
                    },
                    {
                        id:'0004',
                        imgUrl:require('../../../assets/img/icons/icon4.png'),
                        desc:'泡温泉'
                    },
                    {
                        id:'0005',
                        imgUrl:require('../../../assets/img/icons/icon5.png'),
                        desc:'一日游'
                    },
                    {
                        id:'0006',
                        imgUrl:require('../../../assets/img/icons/icon6.png'),
                        desc:'精品小团'
                    },
                    {
                        id:'0007',
                        imgUrl:require('../../../assets/img/icons/icon7.png'),
                        desc:'武夷山'
                    },
                    {
                        id:'0008',
                        imgUrl:require('../../../assets/img/icons/icon8.png'),
                        desc:'踏青赏花'
                    },
                    {
                        id:'0009',
                        imgUrl:require('../../../assets/img/icons/icon9.png'),
                        desc:'玩转贵安'
                    }
                    ,
                    {
                        id:'0010',
                        imgUrl:require('../../../assets/img/icons/icon10.png'),
                        desc:'城市观光'
                    }
                ],
                swiperOption: {
                    autoplay: false
                }
            }
        },
        computed: {
            pages () {
                const pages = []
                this.list.forEach((item, index) => {
                    const page = Math.floor(index / 8)
                    if (!pages[page]) {
                        pages[page] = []
                    }
                    pages[page].push(item)
                })
                return pages
            }
        }
    }
</script>


<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  @import "~styles/mixins.styl"
    .icons >>> .swiper-container
      height: 0
      padding-bottom: 50%
      .icon
        position:relative
        overflow: hidden
        float: left
        width: 25%//宽25%
        height:0
        padding-bottom: 25%//高也25%
        .icon-img
         position: absolute
         top: 0
         left: 0
         right: 0
         bottom: .44rem
         box-sizing border-box
         padding .1rem
        .icon-img-content
          display:block
          margin:0 auto
          height:100%
        .icon-desc
          position: absolute
          left: 0
          right: 0
          bottom:0
          height: .44rem
          line-height: .44rem
          text-align:center
          color:$darkTextColor
          ellipse()


</style>
