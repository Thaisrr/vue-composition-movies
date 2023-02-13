<script setup>

import Nav from "@/layout/Nav.vue";
import {useUser} from "@/pinia";
import {onMounted} from "vue";

const store = useUser();
onMounted(store.init);
</script>

<template>
    <Nav/>
    <router-view></router-view>
</template>



<style scoped>

</style>
