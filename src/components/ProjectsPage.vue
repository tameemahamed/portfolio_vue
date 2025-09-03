<template>
    <article class="projects active" data-page="projects">
        <header>
            <h2 class="h2 article-title">Projects</h2>
        </header>
        <section class="project-items">
            <div class="project-card" v-for="(project, index) in projects" :key="index">
                <h3 class="h3 project-title">{{ project.title }}</h3>
                <p class="project-description">{{ project.description }}</p>
                <div class="project-links">
                    <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" class="project-link">Live Demo</a>
                    <a v-if="project.sourceUrl" :href="project.sourceUrl" target="_blank" class="project-link">Source
                        Code</a>
                </div>
            </div>
        </section>
    </article>
</template>

<script setup>
defineProps({
    projects: Array
});
</script>

