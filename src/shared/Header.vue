<template>
    <div class="header2">
        <h2>{{msg}}</h2>
    </div>
</template>

<script>

export default {
  name: 'heading',
  props: {
    msg: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
.header2 {
    text-align: left;
}
</style>
