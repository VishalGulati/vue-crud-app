<template>
    <header>
        <router-link class="nav-link" to="/">Vue.JS CRUD APP</router-link>
        <router-link class="nav-link charts-link" to="/charts">CHARTS</router-link>
    </header>
</template>

<script>

export default {
  name: 'AppHeader'
}
</script>

<style>
header {
    background-color: #1CD8D2;
    color: azure;
    text-align: left;
    font-size: 1.5rem;
    padding: 20px;
}

.nav-link {
    text-decoration: none;
    color: inherit;
}

.charts-link {
    float: right;
    color: orangered;
}
</style>
