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
            <form ref="formEl" @submit.prevent="handleSubmit" @input="validateForm" class="form" data-form>
                <div class="input-wrapper">
                    <input type="text" name="entry.77494768" class="form-input" placeholder="Full name" required
                        data-form-input>
                    <input type="email" name="entry.1311410395" class="form-input" placeholder="Email Address" required
                        data-form-input>
                </div>
                <textarea name="entry.1126869933" class="form-input" placeholder="Your Message" required
                    data-form-input></textarea>
                <button class="form-btn" type="submit" :disabled="isButtonDisabled">
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

const formEl = ref(null);
const isButtonDisabled = ref(true); // Button is disabled by default
const formMessage = ref('');

// This function runs on every input change in the form
const validateForm = () => {
    if (formEl.value) {
        // Use the native browser API to check validity
        isButtonDisabled.value = !formEl.value.checkValidity();
    }
};

const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(formEl.value);
    // Using the exact URL from your main.js
    const formAction = "https://docs.google.com/forms/d/e/1FAIpQLSfNiz05QG36UFtNme6gq9zOm_uo9zGOopP5lZ_a5ArYS-CfRw/formResponse";

    try {
        await fetch(formAction, {
            method: "POST",
            body: formData,
            mode: "no-cors" // Prevents CORS errors, response will be opaque
        });

        // Using a message div instead of alert() for better UX
        formMessage.value = 'Your message has been sent successfully!';
        formEl.value.reset();
        isButtonDisabled.value = true; // Re-disable button after successful submission

        // Clear the message after a few seconds
        setTimeout(() => {
            formMessage.value = '';
        }, 5000);

    } catch (error) {
        console.error("Form submission error:", error);
        formMessage.value = 'Sorry, there was an error sending your message. Please try again later.';
    }
};
</script>

<style scoped>
.form-message {
    margin-top: 15px;
    color: var(--vegas-gold);
}

/* Style for disabled button */
.form-btn:disabled {
    opacity: 0.7;
    cursor: not-allowed;
}
</style>