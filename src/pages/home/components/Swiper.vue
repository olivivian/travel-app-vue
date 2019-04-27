<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id" v-if="showSwiper">
        <img class="swiper-img" :src='item.imgUrl'/>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props:{
    list:Array
  },
  data () {
    return {
      swiperOption:{
        pagination:'.swiper-pagination',
        loop:true
      },
    }
  },
  computed:{
    showSwiper(){
      return this.list.length;
    }
  }
}
</script>

<!--
padding-bottom 26.66%
26.66%是图片的宽高比例，
保证宽高比例始终保持为26.66
实现图片宽高比例自适应

计算公式  高(200)/宽(750)*100

为了脱离scoped的限制，对页面类做一个穿透
 .wrapper >>>.swiper-pagination-bullet-active
-->
<style lang="stylus" scoped>
  .wrapper >>>.swiper-pagination-bullet-active
    background #fff
  .wrapper
    width: 100%
    height: 0
    overflow: hidden
    padding-bottom:26.66%
    background: #eee
    .swiper-img
      width: 100%
</style>
