<template>
    <aside class="sidebar" :class="{ active: isMoreInfoVisible }" data-sidebar>
        <div class="sidebar-info">
            <figure class="avatar-box">
                <img class="my-img" src="/my-photo.png" alt="avatar" width="80">
            </figure>

            <div class="info-content">
                <h1 class="name" :title="info.name">{{ info.name }}</h1>
                <p class="title" style="margin-bottom: 2%;">{{ info.title1 }}</p>
                <p class="title" style="margin-bottom: 2%;">{{ info.title2 }}</p>
            </div>

            <button class="info-more-btn" data-sidebar-btn @click="toggleMoreInfo">
                <span>Show Contacts</span>
                <ion-icon name="chevron-down"></ion-icon>
            </button>
        </div>

        <div class="sidebar-info-more">
            <div class="separator"></div>
            <ul class="contacts-list">
                <li class="contact-item">
                    <div class="icon-box"><ion-icon name="mail-outline"></ion-icon></div>
                    <div class="contact-info">
                        <p class="contact-title">Email</p>
                        <a :href="`mailto:${info.email}`" class="contact-link">{{ info.email }}</a>
                    </div>
                </li>
                <li class="contact-item">
                    <div class="icon-box"><ion-icon name="phone-portrait-outline"></ion-icon></div>
                    <div class="contact-info">
                        <p class="contact-title">Phone</p>
                        <a :href="`tel:${info.phone.replace(/\s|-/g, '')}`" class="contact-link">{{ info.phone }}</a>
                    </div>
                </li>
                <li class="contact-item">
                    <div class="icon-box"><ion-icon name="location-outline"></ion-icon></div>
                    <div class="contact-info">
                        <p class="contact-title">Location</p>
                        <address>{{ info.location }}</address>
                    </div>
                </li>
            </ul>
            <div class="separator"></div>
            <ul class="social-list">
                <li class="social-item" v-if="info.github"><a :href="info.github" target="_blank"
                        class="social-link"><ion-icon name="logo-github"></ion-icon></a></li>
                <li class="social-item" v-if="info.linkedin"><a :href="info.linkedin" target="_blank"
                        class="social-link"><ion-icon name="logo-linkedin"></ion-icon></a></li>
                <li class="social-item" v-if="info.whatsapp"><a :href="info.whatsapp" target="_blank"
                        class="social-link"><ion-icon name="logo-whatsapp"></ion-icon></a></li>
                <li class="social-item" v-if="info.twitter"><a :href="info.twitter" target="_blank"
                        class="social-link"><ion-icon name="logo-twitter"></ion-icon></a></li>
                <li class="social-item" v-if="info.instagram"><a :href="info.instagram" target="_blank"
                        class="social-link"><ion-icon name="logo-instagram"></ion-icon></a></li>
                <li class="social-item" v-if="info.facebook"><a :href="info.facebook" target="_blank"
                        class="social-link"><ion-icon name="logo-facebook"></ion-icon></a></li>
            </ul>
        </div>
    </aside>
</template>

<script setup>
import { ref } from 'vue';
defineProps({
    info: Object
});

const isMoreInfoVisible = ref(true);

const toggleMoreInfo = () => {
    isMoreInfoVisible.value = !isMoreInfoVisible.value;
};
</script>