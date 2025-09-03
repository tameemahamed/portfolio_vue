<template>
    <article class="certifications" data-page="certifications">
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

<style scoped>
/* Add these styles to your style.css or here to make the cards look better */
.certification-list {
    margin-top: 30px;
}

.certification-items {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
}

.certification-card {
    background: var(--eerie-black-2);
    padding: 20px;
    border-radius: 14px;
    box-shadow: var(--shadow-2);
}

.certificate-img-box {
    margin-bottom: 15px;
}

.certificate-img-box img {
    width: 100%;
    border-radius: 8px;
}

.certification-title {
    margin-bottom: 5px;
}

.certification-org {
    color: var(--light-gray);
    margin-bottom: 10px;
}

.certification-meta {
    color: var(--orange-yellow-crayola);
    margin-bottom: 15px;
}

.verification-link {
    color: var(--vegas-gold);
    font-size: var(--fs-8);
    font-weight: var(--fw-500);
}

.verification-link:hover {
    text-decoration: underline;
}
</style>