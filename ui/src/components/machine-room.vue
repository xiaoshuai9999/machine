<template>
  <div>
    <div class="hello">
      <h1 class="welcome_tip">{{ welcome }}</h1>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'machine-room',
    data() {
      return {
        welcome: 'Welcome to machine room!',
      }
    }
  }
</script>

<style scoped>
  .hello {
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -120px;
    margin-left: -520px;
    height: 240px;
    width: 1024px;
    text-align: center;
  }

  .welcome_tip {
    background-image: -webkit-linear-gradient(left, #42b983, #0e4a30, #42b983);
    background-image: -moz-linear-gradient(left, #42b983, #0e4a30, #42b983);
    background-image: -ms-linear-gradient(left, #42b983, #0e4a30, #42b983);
    background-image: -o-linear-gradient(left, #42b983, #0e4a30, #42b983);
    background-image: linear-gradient(to right, #42b983, #0e4a30, #42b983);
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    font-size: 90px;
    font-family: fantasy;
  }

  .powered {
    position: fixed;
    bottom: 10px;
    right: 10px;
    font-family: fantasy;
    color: rgb(127, 140, 141);
  }

</style>
