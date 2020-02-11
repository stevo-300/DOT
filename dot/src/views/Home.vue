<template>
  <div class="container">
    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 2px #000"
      fade
      img-width="1024"
      img-height="480"
    >
      <b-carousel-slide
        v-for="(item, i) in sliderData"
        v-bind:key="i"
        :caption="item.alt"
        :img-src="item.img"
      ></b-carousel-slide>
    </b-carousel>
    <div>{{ hello }}</div>
  </div>
</template>

<script>
// @ is an alias to /src
// import Carousel from "@/components/Modules/carousel";

export default {
  name: "home",
  components: {
    // Carousel
  },
  data() {
    return {
      sliderData: [
        {
          img: require("@/assets/Images/Home/code-small.jpg"),
          alt: "Coding as a hobby"
        },
        {
          img: require("@/assets/Images/Home/gadgets.jpg"),
          alt: "Number 2",
          credit: "Photo by Karol D from Pexels"
        },
        {
          img: "https://picsum.photos/1024/480/?image=22",
          alt: "Three is the charm"
        }
      ]
    };
  },
  methods: {
    //onSlideStart(slide) {
    //  this.sliding = true;
    //},
    //onSlideEnd(slide) {
    //  this.sliding = false;
    //}
  }
};
</script>
<style lang="css" scoped>
.img-fluid {
  height: 480px !important;
}
</style>
