<template>
  <Header :class="headerShadow">
    <Row>
      <Col span="3">
        <router-link to="/"><logo></logo></router-link>
      </Col>
      <Col span="5" offset="1">
        <global-search></global-search>
      </Col>
      <Col span="4" class="userPanel">
        <user-panel></user-panel>
      </Col>
    </Row>
  </Header>
</template>

<script>
  import Logo from "./module/logo";
  import GlobalSearch from "./module/globalSearch";
  import UserPanel from "./module/userPanel";

  export default {
    name: "topBar",
    components: {UserPanel, GlobalSearch, Logo},
    data() {
      return {
        shadow: {
          zIndex: '20',
          webkitBoxShadow: '3px 13px 32px 0 rgba(0, 0, 0, 0.65)',
          boxShadow: '3px 13px 32px 43px rgba(0, 0, 0, 0.35)'
        }
      }
    },
    computed: {
      headerShadow() {
        if (this.$route.path === '\\') {
          return this.shadow
        } else {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .userPanel {
    position: absolute;
    right: 0;
    margin-right: -135px;
  }

  .userPanel >>> ul {

  }
</style>
