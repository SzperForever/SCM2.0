<template>
  <Header class="header">
    <Row>
      <Col span="3">
        <logo></logo>
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
      }
    }
  }
</script>

<style scoped>
  .header{
    z-index: 20;
    -webkit-box-shadow: 3px 13px 32px 0 rgba(0,0,0,0.65);
    box-shadow: 3px 13px 32px 43px rgba(0,0,0,0.35);
  }

.userPanel{
  position: absolute;
  right: 0;
  margin-right: -135px;
}
  .userPanel>>>ul{

  }
</style>
