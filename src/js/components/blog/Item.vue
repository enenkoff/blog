<template>
    <a :href="this.link"
       target="_blank"
       rel="nofollow"
    >
        <div class="image">
            <figure>
                <img :src="'assets/images/uploads/' + this.imgSrc"
                     alt="Chrome Dev Tools">
                <div class="lang">
                    <span v-if="en">EN</span>
                    <span v-else>RU</span>
                </div>
            </figure>
        </div>
        <section>
            <div class="labels">
                <template>
                    <span v-for="label in labels">{{label}}</span>
                </template>
            </div>
            <h3 class="title">{{articleTitle}}</h3>
            <div class="descr">{{articleDescr}}</div>
            <div class="date">{{createDate}}</div>
        </section>
    </a>
</template>

<script>
    export default {
        name: "Item",
        props: {
            link: {
                required: true,
                type: String,
            },
            imgSrc: {
                required: true,
                type: String,
            },
            en: {
                required: true,
                type: Boolean,
            },
            labels: {
                required: true,
                type: Array,
            },
            articleTitle: {
                required: true,
                type: String,
            },
            articleDescr: {
                required: true,
                type: String,
            },
            createDate: {
                required: true,
                type: String,
            }
        },
    }
</script>