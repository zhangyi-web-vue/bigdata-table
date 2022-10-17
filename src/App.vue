<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <!--<table-demo></table-demo>-->
    <!--<ag-grid-table-demo></ag-grid-table-demo>-->
    <vxe-table-demo></vxe-table-demo>
  </div>
</template>

<script>
/*import TableDemo from './components/TableDemo'*/
/*import AgGridTableDemo from './components/AgGridTableDemo'*/
import VxeTableDemo from './components/VxeTableDemo'

export default {
  name: 'App',
  components: {
    /*TableDemo,*/
    /*AgGridTableDemo,*/
    VxeTableDemo
  }
}
</script>

<style>
html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  overflow: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
