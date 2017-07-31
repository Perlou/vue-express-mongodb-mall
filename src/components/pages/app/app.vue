<template>
    <div id="app" class="app">
        <global-header></global-header>
        <router-view :key="$route.fullPath"></router-view>
        <global-footer></global-footer>
    </div>
</template>
<style src="./app.scss" lang="scss"></style>
