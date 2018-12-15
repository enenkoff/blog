<template>
    <div id="wrapper">
        <page-header></page-header>
        <main>Main</main>
        <page-footer></page-footer>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data () {
            return {
                message: 'Welcome to Vue.js'
            }
        },
        components: {
            pageHeader: require('./layout/Header.vue'),
            pageFooter: require('./layout/Footer.vue'),
        }
    }
</script>