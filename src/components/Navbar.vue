<template>
    <nav class="navbar">
        <ul class="navbar-list">
            <li class="navbar-item" v-for="item in navItems" :key="item">
                <button class="navbar-link" :class="{ active: activePage === item.toLowerCase() }"
                    @click="$emit('navigate', item)" data-nav-link>
                    {{ item }}
                </button>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
    activePage: String
});
defineEmits(['navigate']);

const navItems = ref(['About', 'Resume', 'Certifications', 'Projects', 'Contact']);
</script>