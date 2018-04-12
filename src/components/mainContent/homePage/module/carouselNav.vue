<template>
  <Carousel  autoplay-speed="1900" loop :height="430" collapsible="false" hide-trigger dots="outside">
    <CarouselItem :style="[carouseItemStyle,appCenterStyle]">
      <router-link to="/AppCenter" class="routeLink">
        App Center
      </router-link>
    </CarouselItem>
    <CarouselItem :style="[carouseItemStyle,dashBoardStyle]">
      <router-link to="/DashBoard" class="routeLink">
        DashBoard KPI
      </router-link>
    </CarouselItem>
    <CarouselItem :style="[carouseItemStyle,documentCenterStyle]">
      <router-link to="/DocumentCenter" class="routeLink">
        Document Center
      </router-link>
    </CarouselItem>
    <CarouselItem :style="[carouseItemStyle,birdEyeViewStyle]">
      <router-link to="/BirdEyeView" class="routeLink">
        3D Bird Eye View
      </router-link>
    </CarouselItem>
  </Carousel>
</template>

<script>
  export default {
    name: "carouselNav",
    data() {
      return {
        carouseItemStyle: {
          backgroundSize: 'cover',
          display: 'flex',
          flexFlow: 'row nowrap',
          justifyContent: 'center',
          alignItems: 'center'
        },
        appCenterStyle: {
          background: 'linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0)),url("/src/assets/mainContent/carousel/appCenter.jpg") no-repeat center center'
        },
        dashBoardStyle: {
          background: 'linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0)),url("/src/assets/mainContent/carousel/dashBoard.jpg") no-repeat center center'
        },
        birdEyeViewStyle: {
          background: 'linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0)),url("/src/assets/mainContent/carousel/3DBirdEye.png") no-repeat center center'
        },
        documentCenterStyle: {
          background: 'linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0)),url("/src/assets/mainContent/carousel/documentCenter.jpg") no-repeat center center'
        },
        blurContent: {
          'zIndex': 5,
          'position': 'absolute',
          'width': '100%',
          'height': '112%',
          'text-align': 'center',
          'vertical-align': 'middle',
          'padding': '1em',
          'transition': 'all 0.4s'
        }
      }
    },
    methods: {
      loadBlur(event) {
        event.currentTarget.setAttribute('class', 'blur')
      },
      removeBlur(event) {
        event.currentTarget.removeAttribute('class', 'blur')
      }
    }
  }
</script>

<style scoped>
  .routeLink {
    z-index: 8;
    color: white;
    font-size: 54px;
    padding: 10px 38px;
    border: 5px solid;
  }

  .blur {
    filter: blur(20px);
  }

</style>
