<template>
    <article class="about active" data-page="about">
        <header>
            <h2 class="h2 article-title">About me</h2>
        </header>
        <section class="about-text">
            <p 
                v-for="(p, index) in data.about_paragraphs" 
                :key="index" 
                v-html="renderMarkdown(p.text)" 
            />                
        </section>
        <section class="service">
            <h3 class="h3 service-title">What I'm doing</h3>
            <ul class="service-list">
                <li class="service-item" v-for="(service, index) in data.about_services" :key="index">
                    <div class="service-icon-box">
                        <img :src="service.iconUrl" alt="icon" width="40">
                    </div>
                    <div class="service-content-box">
                        <h4 class="h4 service-item-title">{{ service.title }}</h4>
                        <p class="service-item-text">{{ service.text }}</p>
                    </div>
                </li>
            </ul>
        </section>
    </article>
</template>

<script setup>
import { marked } from 'marked';

defineProps({
    data: Object
});

const renderMarkdown = (text) => {
    return marked.parse(text || "")
};
</script>