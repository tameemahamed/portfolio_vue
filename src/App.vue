<template>
  <div v-if="state.loading" class="loader">Loading Portfolio...</div>
  <div v-if="state.error" class="error">{{ state.error }}</div>

  <main v-if="!state.loading && !state.error && portfolioData">
    <Sidebar :info="portfolioData.info" />
    <div class="main-content">
      <Navbar @navigate="handleNavigation" :active-page="activePage" />

      <AboutPage v-if="activePage === 'about'" :data="portfolioData" />
      <ResumePage v-if="activePage === 'resume'" :data="portfolioData" />
      <CertificationsPage v-if="activePage === 'certifications'" :certifications="portfolioData.certifications" />
      <ProjectsPage v-if="activePage === 'projects'" :projects="portfolioData.projects" />
      <ContactPage v-if="activePage === 'contact'" :info="portfolioData.info" />

    </div>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue';
import { usePortfolioData } from './composables/usePortfolioData';
import Sidebar from './components/Sidebar.vue';
import Navbar from './components/Navbar.vue';
import AboutPage from './components/AboutPage.vue';
import ResumePage from './components/ResumePage.vue';
import CertificationsPage from './components/CertificationsPage.vue';
import ProjectsPage from './components/ProjectsPage.vue';
import ContactPage from './components/ContactPage.vue';

const { state } = usePortfolioData();
const portfolioData = computed(() => state.data);

const activePage = ref('about');

const handleNavigation = (page) => {
  activePage.value = page.toLowerCase();
};
</script>

<style scoped>
/* Add styles for loader and error message if you want */
.loader,
.error {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 2rem;
  color: #ccc;
}

.error {
  color: red;
}
</style>
