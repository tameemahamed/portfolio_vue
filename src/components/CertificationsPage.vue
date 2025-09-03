<template>
    <article class="certifications active" data-page="certifications">
        <header>
            <h2 class="h2 article-title">Certifications</h2>
        </header>
        <section class="certification-list">
            <ul class="certification-items">
                <li class="certification-item" v-for="(cert, index) in certifications" :key="index">
                    <div class="certification-card">
                        <figure class="certificate-img-box">
                            <img :src="cert.imageUrl" :alt="cert.title" loading="lazy">
                        </figure>
                        <div class="certification-content">
                            <h3 class="h3 certification-title">{{ cert.title }}</h3>
                            <div class="certification-org">{{ cert.organization }}</div>
                            <div class="certification-meta">
                                <time :datetime="cert.date">{{ cert.date }}</time>
                            </div>
                            <a :href="cert.verifyUrl" target="_blank" class="verification-link">Verify Certification</a>
                        </div>
                    </div>
                </li>
            </ul>
        </section>
    </article>
</template>

<script setup>
defineProps({
    certifications: Array
});
</script>
