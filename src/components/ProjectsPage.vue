<template>
    <article class="projects" data-page="projects">
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

<style scoped>
/* Add these styles to your style.css or here */
.project-items {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.project-card {
    background: var(--eerie-black-2);
    padding: 25px;
    border-radius: 14px;
    box-shadow: var(--shadow-2);
}

.project-title {
    margin-bottom: 10px;
}

.project-description {
    color: var(--light-gray);
    line-height: 1.6;
    font-size: var(--fs-6);
    margin-bottom: 20px;
}

.project-links {
    display: flex;
    gap: 15px;
}

.project-link {
    color: var(--vegas-gold);
    font-size: var(--fs-8);
    font-weight: var(--fw-500);
}

.project-link:hover {
    text-decoration: underline;
}
</style>