<template>
  <!-- header: ប្រើ fixed position ពេញទទឹង ដោយគណនា offset តាមរយៈ CSS variable -->
  <header class="app-header">
    <div class="header-container">
      
      <!-- ផ្នែកខាងឆ្វេង: Menu button + Branding/Title -->
      <div class="header-left">
        <!-- btn-icon: ប៊ូតុងរង្វង់ទំនើប មាន hover effect ទន់ភ្លន់ -->
        <button class="btn-icon" aria-label="Toggle Sidebar" @click="$emit('toggle-sidebar')">
          <i class="bi bi-list"></i>
        </button>
        <div class="brand-wrapper">
          <span class="app-title">Task Management</span>
        </div>
      </div>

      <!-- ផ្នែកខាងស្តាំ: Action icons + User Profile Dropdown -->
      <div class="header-right">
        <!-- គ្រាប់ចុច Notification ដែលមាន status badge ក្រហម -->
        <button class="btn-icon notification-btn" aria-label="Notifications">
          <i class="bi bi-bell"></i>
          <span class="badge-dot"></span>
        </button>

        <!-- គ្រាប់ចុច Theme switcher -->
        <button class="btn-icon" aria-label="Toggle Theme" @click="toggleTheme" :title="isDark ? 'Switch to Light' : 'Switch to Dark'">
          <i :class="isDark ? 'bi bi-sun-fill text-amber-400' : 'bi bi-moon-stars'"></i>
        </button>

        <!-- divider បញ្ឈរ សម្រាប់ចែក Action buttons និង Profile ឱ្យមានរបៀប -->
        <div class="divider"></div>

        <!-- profile-menu: Pill-shaped wrapper បង្ហាញ Avatar, ឈ្មោះ និង Dropdown -->
        <div class="profile-dropdown">
          <button class="profile-trigger" @click="toggleDropdown">
            <div class="avatar">
              <i class="bi bi-person-fill"></i>
            </div>
            <div class="user-meta">
              <span class="user-name">Sophea</span>
              <span class="user-role">Admin</span>
            </div>
            <i class="bi bi-chevron-down caret-icon" :class="{ 'rotated': isDropdownOpen }"></i>
          </button>

          <!-- Dropdown items ដែលលេចឡើងពេលចុចលើ Profile -->
          <ul v-if="isDropdownOpen" class="dropdown-menu">
            <li class="dropdown-item">
              <i class="bi bi-person"></i>
              <span>My Profile</span>
            </li>
            <li class="dropdown-item">
              <i class="bi bi-gear"></i>
              <span>Settings</span>
            </li>
            <li class="dropdown-divider"></li>
            <li class="dropdown-item logout" @click="logout">
              <i class="bi bi-box-arrow-right"></i>
              <span>Logout</span>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const isDropdownOpen = ref(false);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const logout = () => {
  isDropdownOpen.value = false;
  router.push("/");
};
</script>

<style scoped>
/* ==========================================================
   CSS Variables: ងាយស្រួលគ្រប់គ្រងពណ៌ និង spacing មួយកន្លែង
   ========================================================== */
.app-header {
  position: fixed;
  top: 0;
  right: 0;
  left: var(--sidebar-width); /* រុញតាមទំហំ Sidebar ដោយស្វ័យប្រវត្តិ */
  height: var(--header-height);
  background-color: var(--bg-header);
  backdrop-filter: blur(8px); /* Glassmorphism ជួយឱ្យ Header មើលទៅថ្លា និងទំនើប */
  border-bottom: 1px solid var(--border-color);
  z-index: 50;
  transition: left 0.3s ease;
}

/* header-container: រៀប layout សងខាងឱ្យស្មើស្អាត */
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 1.5rem;
}

.header-left, .header-right {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.app-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-main);
  letter-spacing: -0.01em;
}

/* btn-icon: ប៊ូតុងរាងមូល minimalist style ដែលគេនិយមប្រើក្នុង SaaS dashboard */
.btn-icon {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: var(--text-muted);
  font-size: 1.25rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-icon:hover {
  background-color: var(--hover-bg);
  color: var(--text-main);
}

/* badge-dot: ចំណុចក្រហមសម្គាល់ថាមាន notification ថ្មី */
.badge-dot {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 8px;
  height: 8px;
  background-color: #ef4444;
  border-radius: 50%;
  border: 2px solid #ffffff;
}

/* divider: បន្ទាត់ខណ្ឌបញ្ឈរស្រាលៗ ជួយបំបែក group ប៊ូតុង */
.divider {
  width: 1px;
  height: 24px;
  background-color: var(--border-color);
  margin: 0 0.25rem;
}

/* Profile Dropdown Container */
.profile-dropdown {
  position: relative;
}

/* profile-trigger: UI ចុចបើក profile រាង pill ទំនើប */
.profile-trigger {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  padding: 4px 8px 4px 4px;
  border-radius: 9999px;
  border: 1px solid transparent;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.2s ease;
}

.profile-trigger:hover {
  background-color: var(--hover-bg);
  border-color: var(--border-color);
}

.avatar {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: var(--primary-light);
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
}

.user-meta {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.user-name {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-main);
  line-height: 1.2;
}

.user-role {
  font-size: 0.75rem;
  color: var(--text-muted);
}

.caret-icon {
  font-size: 0.75rem;
  color: var(--text-muted);
  transition: transform 0.2s ease;
}

.caret-icon.rotated {
  transform: rotate(180deg);
}

/* Dropdown Menu Box */
.dropdown-menu {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  width: 180px;
  background: var(--dropdown-bg);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.08);
  padding: 0.5rem 0;
  margin: 0;
  list-style: none;
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  color: var(--text-main);
  cursor: pointer;
  transition: background 0.15s ease;
}

.dropdown-item:hover {
  background-color: var(--hover-bg);
}

.dropdown-item.logout {
  color: #ef4444;
}

.dropdown-item.logout:hover {
  background-color: rgba(239, 68, 68, 0.12);
}

.dropdown-divider {
  height: 1px;
  background-color: var(--border-color);
  margin: 0.35rem 0;
}

/* Responsive: ពេលលើទូរស័ព្ទ ឬ Tablet មិនបាច់រុញ 250px ទៀតទេ */
@media (max-width: 768px) {
  .app-header {
    left: 0;
  }
  .user-meta {
    display: none; /* លាក់ឈ្មោះលើអេក្រង់តូច ដើម្បីសន្សំទំហំ */
  }
}
</style>