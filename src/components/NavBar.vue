<template>
  <div class="containerNavBar">
    <div class="dataNav">
      <h3>MPSchemas</h3>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavBar",
    props: {

    },

    computed: {
    }
  }
</script>

<style scoped>
  .containerNavBar {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.19);
    height: 60px;
    width: 100%;
    background: rgba(255, 255, 255, 0.09);
    margin-bottom: 40px;
    padding
  }

  .dataNav {
    max-width: 1350px;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }


</style>