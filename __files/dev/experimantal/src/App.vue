<template>
    <div id="hello">
        <h2>{{message}}</h2>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data () {
            return {
                message: 'Welcome to Vue.js'
            }
        }
    }
</script>

<style>
    #hello {
        font-family: Verdana;
        color: navy;
    }
</style>