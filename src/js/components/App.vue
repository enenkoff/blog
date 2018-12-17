<template>
    <div id="wrapper">
        <div class="container">
            <page-header></page-header>
            <div id="main" class="main">
                <div class="content content--sm">
                    <blog></blog>
                </div>
            </div>
            <page-footer></page-footer>
        </div>
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
            blog: require('./blog/Listing.vue'),
        }
    }
</script>