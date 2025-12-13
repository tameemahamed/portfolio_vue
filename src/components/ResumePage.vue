<template>
    <article class="resume active" data-page="resume">
        <header>
            <h2 class="h2 article-title">Resume</h2>
        </header>
        <section class="timeline">
            <div class="title-wrapper">
                <div class="icon-box"><ion-icon name="book-outline"></ion-icon></div>
                <h3 class="h3">Education</h3>
            </div>
            <ol class="timeline-list">
                <li class="timeline-item" v-for="(edu, index) in data.education" :key="index">
                    <h4 class="h4 timeline-item-title">{{ edu.institution }}</h4>
                    <span>{{ edu.degree }}</span>
                    <p class="timeline-text">{{ edu.period }}</p>
                </li>
            </ol>
        </section>
        <section class="timeline">
            <div class="title-wrapper">
                <div class="icon-box"><ion-icon name="briefcase"></ion-icon></div>
                <h3 class="h3">Experience</h3>
            </div>
            <ol class="timeline-list">
                <li class="timeline-item" v-for="(exp, index) in data.experience" :key="index">
                    <h4 class="h4 timeline-item-title">{{ exp.organization }}</h4>
                    <span>{{ exp.role }}</span>
                    <p class="timeline-text">{{ exp.period }}</p>
                </li>
            </ol>
        </section>
        <section class="skill">
            <h3 class="h3 skills-title">My Skills</h3>
            <ul class="skills-list content-card">
                <li class="skills-item" v-for="(skill, index) in data.skills" :key="index">
                    <div class="title-wrapper">
                        <h5 class="h5">{{ skill.skill }}</h5>
                        <data :value="skill.value">{{ skill.value }}%</data>
                    </div>
                    <div class="skills-progress-bg">
                        <div class="skills-progress-fill" :style="{ width: skill.value + '%' }"></div>
                    </div>
                </li>
            </ul>
        </section>
    </article>
</template>

<script setup>
defineProps({
    data: Object
});
</script>