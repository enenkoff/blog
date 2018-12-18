<template>
    <div class="blog">
        <ul>
            <li>
                <a href="https://medium.com/@egonelbre/psychology-of-code-readability-d23b1ff1258a"
                   target="_blank"
                   rel="nofollow"
                >
                    <div class="image">
                        <figure>
                            <img src="assets/images/uploads/454-292-Apple_Swift.jpg"
                                 alt="smashing_logo">
                            <div class="lang"><span>EN</span></div>
                        </figure>
                    </div>
                    <section>
                        <div class="labels">
                            <span>Best Practices</span>
                        </div>
                        <h3 class="title">Psychology of Code Readability</h3>
                        <div class="descr">Психология читабельного кода</div>
                    </section>
                </a>
            </li>
            <li>
                <a href="https://htmlacademy.ru/blog/371-flexbox-use-cases"
                   target="_blank"
                   rel="nofollow"
                >
                    <div class="image">
                        <figure>
                            <img src="assets/images/uploads/htmlAcademyLogo.png"
                                 alt="smashing_logo">
                            <div class="lang"><span>RU</span></div>
                        </figure>
                    </div>
                    <section>
                        <div class="labels">
                            <span>CSS</span>
                            <span>FlexBox</span>
                        </div>
                        <h3 class="title">Примеры использования флексбоксов</h3>
                        <div class="descr">Размышления, для чего на самом деле стоит применять флексы</div>
                    </section>
                </a>
            </li>
            <li>
                <a href="https://www.smashingmagazine.com/2018/08/flexbox-display-flex-container/"
                   target="_blank"
                   rel="nofollow"
                >
                    <div class="image">
                        <figure>
                            <img src="assets/images/uploads/smashing-logo.png"
                                 alt="smashing_logo">
                            <div class="lang"><span>EN</span></div>
                        </figure>
                    </div>
                    <section>
                        <div class="labels">
                            <span>CSS</span>
                            <span>FlexBox</span>
                        </div>
                        <h3 class="title">What Happens When You Create A Flexbox Flex Container?</h3>
                        <div class="descr">Что происходит, когда мы создаем ФлексБокс</div>
                    </section>
                </a>
            </li>
            <li>
                <a href="https://habr.com/post/332572/"
                   target="_blank"
                   rel="nofollow"
                >
                    <div class="image">
                        <figure>
                            <img src="assets/images/uploads/CSS_Grid-Layout.png"
                                 alt="css grid layout">
                            <div class="lang"><span>RU</span></div>
                        </figure>
                    </div>
                    <section>
                        <div class="labels">
                            <span>CSS</span>
                            <span>Grid Layout</span>
                        </div>
                        <h3 class="title">Правда ли уже пора использовать CSS Grid Layout?</h3>
                        <div class="descr">Зачем использовать гриды</div>
                    </section>
                </a>
            </li>
            <li>
                <a href="http://css-live.ru/faq/prokachivaem-navyki-otladki-s-pomoshhyu-instrumentov-razrabotchika-chrome-chast-1.html"
                   target="_blank"
                   rel="nofollow"
                >
                    <div class="image">
                        <figure>
                            <img src="assets/images/uploads/improve-your-debugging-skills-with-chrome-devtools_870x220.png"
                                 alt="Chrome Dev Tools">
                            <div class="lang"><span>RU</span></div>
                        </figure>
                    </div>
                    <section>
                        <div class="labels">
                            <span>Chrome</span>
                            <span>DevTools</span>
                        </div>
                        <h3 class="title">Прокачиваем навыки отладки с помощью инструментов разработчика Chrome (часть 1)</h3>
                        <div class="descr">Приёмы и советы по использованию отладчика Chrome</div>
                    </section>
                </a>
            </li>
            <li>
                <a href="http://css-live.ru/faq/prokachivaem-navyki-otladki-s-pomoshhyu-instrumentov-razrabotchika-chrome-chast-2.html"
                   target="_blank"
                   rel="nofollow"
                >
                    <div class="image">
                        <figure>
                            <img src="assets/images/uploads/improve-your-debugging-skills-with-chrome-devtools_870x220.png"
                                 alt="Chrome Dev Tools">
                            <div class="lang"><span>RU</span></div>
                        </figure>
                    </div>
                    <section>
                        <div class="labels">
                            <span>Chrome</span>
                            <span>DevTools</span>
                        </div>
                        <h3 class="title">Прокачиваем навыки отладки с помощью инструментов разработчика Chrome (часть 2)</h3>
                        <div class="descr">Продвинутые функции отладчика Chrome</div>
                    </section>
                </a>
            </li>
            <li>
                <a href="https://habr.com/company/mailru/blog/340922/.com[perevod]-obyasnyaem-sovremennyy-javascri"
                   target="_blank"
                   rel="nofollow"
                >
                    <div class="image">
                        <figure>
                            <img src="assets/images/uploads/dinosaur.jpg"
                                 alt="Chrome Dev Tools">
                            <div class="lang"><span>RU</span></div>
                        </figure>
                    </div>
                    <section>
                        <div class="labels">
                            <span>JavaScript</span>
                        </div>
                        <h3 class="title">Объясняем современный JavaScript динозавру</h3>
                        <div class="descr">Развитие инструментов в JavaScript вплоть до 2017-го</div>
                    </section>
                </a>
            </li>
            <template v-for="item in this.items">
                <li>
                    <blog-article :link="item.link"
                                  :imgSrc="item.imgSrc"
                                  :en="item.en"
                                  :labels="item.labels"
                                  :articleTitle="item.articleTitle"
                                  :articleDescr="item.articleDescr"
                                  :createDate="item.date"
                    ></blog-article>
                </li>
            </template>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "BlogListing",
        data () {
            return {
                items: [
                    {
                        link: 'https://calendar.perfplanet.com/2018/performance-anti-patterns-base64-encoding/',
                        imgSrc: 'Swift_Performance_Tips.jpeg',
                        en: true,
                        labels: [
                            'CSS',
                            'Performance',
                            'Images'
                        ],
                        articleTitle: 'Performance Anti-Patterns: Base64 Encoding',
                        articleDescr: 'Влияние кодировки base-64 на перфоманс',
                        date: '17.12.18',
                    },
                    {
                        link: 'http://blog.csssr.ru/2018/12/05/lint-your-css',
                        imgSrc: 'How-linting-and-ESLint-improve.jpeg',
                        en: false,
                        labels: [
                            'CSS',
                            'PostCSS',
                        ],
                        articleTitle: 'Безболезненный линтинг CSS с помощью stylelint',
                        articleDescr: 'Стандарты написания кода и подключения линтеров на проект',
                        date: '17.12.18',
                    },
                    {
                        link: 'https://blogs.dropbox.com/tech/2017/12/improving-document-preview-performance/',
                        imgSrc: 'Dropbox.logo_1.jpg',
                        en: true,
                        labels: [
                            'Performance',
                        ],
                        articleTitle: 'Improving Document Preview Performance',
                        articleDescr: 'Загрузка превью файла в дропбоксе',
                        date: '17.12.18',
                    },
                    {
                        link: 'http://css-live.ru/css/pravilnaya-shpargalka-po-css-kaskadu.html',
                        imgSrc: 'spor_functijns2.jpeg',
                        en: false,
                        labels: [
                            'CSS',
                            'Clear code',
                        ],
                        articleTitle: 'Правильная шпаргалка по CSS-каскаду',
                        articleDescr: 'Как правильно писать каскадные стили',
                        date: '17.12.18',
                    },
                    {
                        link: 'https://blog.sheddow.xyz/css-timing-attack/',
                        imgSrc: '6759.jpg',
                        en: true,
                        labels: [
                            'CSS',
                            'JavaScript',
                        ],
                        articleTitle: 'A timing attack with CSS selectors and Javascript',
                        articleDescr: 'Как прочитать практически любую строку из HTML атакуемого сайта с помощью CSS-селекторов и JavaScript.',
                        date: '17.12.18',
                    },
                    {
                        link: 'https://www.smashingmagazine.com/2018/11/interactive-infographic-vue-js/',
                        imgSrc: 'Lightpainting-animation-june2016.jpg',
                        en: true,
                        labels: [
                            'Vue',
                            'JavaScript',
                        ],
                        articleTitle: 'Building An Interactive Infographic With Vue.js',
                        articleDescr: 'Анимационная инфографика для vue.js',
                        date: '17.12.18',
                    },
                    {
                        link: 'https://blog.cloudflare.com/fast-google-fonts-with-cloudflare-workers/',
                        imgSrc: '2016-03-17fonts.jpg',
                        en: true,
                        labels: [
                            'Fonts',
                            'Google Fonts',
                            'Performance',
                        ],
                        articleTitle: 'Fast Google Fonts with Cloudflare Workers',
                        articleDescr: 'Как избежать медленной загрузки гугловских шрифтов',
                        date: '17.12.18',
                    },
                    {
                        link: 'https://medium.com/@egonelbre/psychology-of-code-readability-d23b1ff1258a',
                        imgSrc: 'header-pic.jpg',
                        en: true,
                        labels: [
                            'Clear code',
                        ],
                        articleTitle: 'Psychology of Code Readability',
                        articleDescr: 'Психология чтения кода',
                        date: '17.12.18',
                    },
                    {
                        link: 'https://hacks.mozilla.org/2016/08/using-feature-queries-in-css/',
                        imgSrc: 'EOA_MediaQueriesNEW_Blog.jpg',
                        en: true,
                        labels: [
                            'CSS',
                        ],
                        articleTitle: 'Using Feature Queries in CSS',
                        articleDescr: 'Медиа-запросы в CSS',
                        date: '10.12.18',
                    },
                ],
            };
        },
        components: {
            blogArticle: require('./Item.vue'),
        },
    }
</script>