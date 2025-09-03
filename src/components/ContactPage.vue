<template>
    <article class="contact" data-page="contact">
        <header>
            <h2 class="h2 article-title">Contact</h2>
        </header>
        <section class="mapbox" data-mapbox>
            <figure>
                <iframe :src="info.googleMapUrl" width="400" height="300" loading="lazy"></iframe>
            </figure>
        </section>
        <section class="contact-form">
            <h3 class="h3 form-title">Contact Form</h3>
            <form ref="form" @submit.prevent="handleSubmit" class="form" data-form>
                <div class="input-wrapper">
                    <input type="text" name="entry.77494768" class="form-input" placeholder="Full name" required
                        data-form-input>
                    <input type="email" name="entry.1311410395" class="form-input" placeholder="Email Address" required
                        data-form-input>
                </div>
                <textarea name="entry.1126869933" class="form-input" placeholder="Your Message" required
                    data-form-input></textarea>
                <button class="form-btn" type="submit">
                    <ion-icon name="paper-plane"></ion-icon>
                    <span>Send Message</span>
                </button>
            </form>
            <div v-if="formMessage" class="form-message">{{ formMessage }}</div>
        </section>
    </article>
</template>

<script setup>
import { ref } from 'vue';
defineProps({
    info: Object
});

const form = ref(null);
const formMessage = ref('');

const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(form.value);
    const formAction = 'YOUR_GOOGLE_FORM_ACTION_URL_HERE'; // <-- IMPORTANT!

    try {
        await fetch(formAction, {
            method: 'POST',
            body: formData,
            mode: 'no-cors' // Google Forms blocks CORS, so 'no-cors' is needed. Response will be opaque.
        });
        formMessage.value = 'Thank you! Your message has been sent.';
        form.value.reset();
    } catch (error) {
        console.error('Form submission error:', error);
        formMessage.value = 'Sorry, there was an error sending your message. Please try again later.';
    }
};
</script>

<style scoped>
.form-message {
    margin-top: 15px;
    color: var(--vegas-gold);
}
</style>