<template>
    <!-- aside: ប្រើ Semantic HTML សម្រាប់ sidebar រួមទាំង dynamic class បើក/បិទ លើ Mobile -->
    <aside class="app-sidebar" :class="{ 'is-open': isOpen }">

        <!-- ផ្នែកខាងលើ: Logo + App Name + Close Button សម្រាប់ Mobile -->
        <div class="sidebar-header">
            <div class="brand-logo">
                <i class="bi bi-kanban-fill"></i>
            </div>
            <div class="brand-text">
                <span class="brand-name">TaskFlow</span>
                <span class="brand-tag">Workspace</span>
            </div>
            <!-- ប៊ូតុងបិទ sidebar ពេលមើលលើអេក្រង់តូច -->
            <button class="btn-close-sidebar" @click="$emit('close-sidebar')">
                <i class="bi bi-x-lg"></i>
            </button>
        </div>

        <!-- ផ្នែកកណ្ដាល: Navigation Links (អាច Scroll បានបើ item ច្រើន) -->
        <nav class="sidebar-nav">
            <div class="search-menu">
                <i class="bi bi-search search-icon"></i>
                <input type="text" placeholder="Search Menu" class="search-input">
            </div>
            <!-- section-label: ចំណងជើងតូចសម្រាប់បែងចែកក្រុម menu -->
            <div class="nav-section-label">MAIN MENU</div>

            <ul class="nav-list">
                <li class="nav-item">
                    <!-- router-link: ប្រើ router-link ជំនួស <a> ធម្មតាដើម្បីកុំឱ្យ reload page -->
                    <router-link to="/dashboard" class="nav-link" active-class="active">
                        <i class="bi bi-grid-1x2-fill nav-icon"></i>
                        <span class="nav-text">Dashboard</span>
                    </router-link>
                </li>

                <li class="nav-item">
                    <router-link to="/tasks" class="nav-link" active-class="active">
                        <i class="bi bi-check2-square nav-icon"></i>
                        <span class="nav-text">My Tasks</span>
                        <!-- badge-counter: បង្ហាញចំនួន task ដែលនៅសល់ -->
                        <span class="badge-counter">8</span>
                    </router-link>
                </li>

                <li class="nav-item">
                    <router-link to="/projects" class="nav-link" active-class="active">
                        <i class="bi bi-folder2-open nav-icon"></i>
                        <span class="nav-text">Projects</span>
                    </router-link>
                </li>

                <li class="nav-item">
                    <router-link to="/team" class="nav-link" active-class="active">
                        <i class="bi bi-people-fill nav-icon"></i>
                        <span class="nav-text">Team Members</span>
                    </router-link>
                </li>
            </ul>

            <div class="nav-section-label">PREFERENCES</div>

            <ul class="nav-list">
                <li class="nav-item">
                    <router-link to="/settings" class="nav-link" active-class="active">
                        <i class="bi bi-gear-fill nav-icon"></i>
                        <span class="nav-text">Settings</span>
                    </router-link>
                </li>

                <li class="nav-item">
                    <router-link to="/help" class="nav-link" active-class="active">
                        <i class="bi bi-question-circle-fill nav-icon"></i>
                        <span class="nav-text">Help Center</span>
                    </router-link>
                </li>
            </ul>
        </nav>

        <!-- ផ្នែកខាងក្រោម: Mini User Profile & Quick Action -->
        <div class="sidebar-footer">
            <div class="user-card">
                <div class="user-avatar">
                    <i class="bi bi-person-fill"></i>
                </div>
                <div class="user-info">
                    <span class="user-name">Sophea Dev</span>
                    <span class="user-email">sophea@task.io</span>
                </div>
            </div>
            <button class="btn-logout" title="Logout" @click="handleLogout">
                <i class="bi bi-box-arrow-right"></i>
            </button>
        </div>

    </aside>
</template>

<script setup>
import { useRouter } from 'vue-router';

defineProps({
    isOpen: {
        type: Boolean,
        default: false
    }
});

defineEmits(['close-sidebar']);

const router = useRouter();

const handleLogout = () => {
    router.push('/');
};
</script>

<style scoped>
/* ==========================================================
   CSS Variables & Base Layout
   ========================================================== */
.app-sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: var(--sidebar-width);
    height: 100vh;
    background-color: var(--bg-sidebar);
    border-right: 1px solid var(--border-color);
    display: flex;
    flex-direction: column;
    z-index: 100;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* ==========================================================
   Header Section (Logo & Brand)
   ========================================================== */
.sidebar-header {
    height: 64px;
    padding: 0 1.25rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    border: 1px solid var(--border-color);
    flex-shrink: 0;
}

.brand-logo {
    width: 36px;
    height: 36px;
    border-radius: 8px;
    background: linear-gradient(135deg, #2563eb, #3b82f6);
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
}

.search-menu {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    padding: 10px 10px;
    border-bottom: 1px solid var(--border-color);
    flex-shrink: 0;
}

.search-icon {
    position: absolute;
    top: 50%;
    left: 28px;
    transform: translate(-50%, -50%);
    font-size: 1rem;
    color: var(--text-muted);
}

.search-input {
    width: 100%;
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--text-main);
    background-color: var(--bg-surface);
    border: 1px solid var(--border-color);
    outline: none;
    padding: 9px 12px 9px 38px;
    border-radius: 8px;
    transition: all 0.2s ease;
}

.search-input::placeholder {
    color: var(--text-muted);
}

.search-input:focus {
    background-color: var(--hover-bg);
    color: var(--text-main);
}

.brand-text {
    display: flex;
    flex-direction: column;
}

.brand-name {
    font-size: 1rem;
    font-weight: 700;
    color: var(--text-main);
    line-height: 1.2;
}

.brand-tag {
    font-size: 0.7rem;
    font-weight: 500;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.btn-close-sidebar {
    display: none;
    margin-left: auto;
    background: none;
    border: none;
    color: var(--text-muted);
    font-size: 1.2rem;
    cursor: pointer;
}

/* ==========================================================
   Navigation Menu Section
   ========================================================== */
.sidebar-nav {
    flex: 1;
    overflow-y: auto;
    /* អនុញ្ញាតឱ្យ scroll តែ menu ប៉ុណ្ណោះ ពេលអេក្រង់ទាប */
    padding: 0px 10px;
}

/* Scrollbar Style ស្អាតស្ដើង */
.sidebar-nav::-webkit-scrollbar {
    width: 4px;
}

.sidebar-nav::-webkit-scrollbar-thumb {
    background-color: var(--scrollbar-thumb);
    border-radius: 4px;
}

.nav-section-label {
    font-size: 0.6875rem;
    font-weight: 700;
    color: var(--text-muted);
    letter-spacing: 0.08em;
    padding: 0 0.75rem;
    margin-bottom: 0.5rem;
}

.nav-section-label:not(:first-child) {
    margin-top: 1.5rem;
}

.nav-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
}

.nav-link {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.625rem 0.75rem;
    border-radius: 8px;
    color: var(--text-muted);
    text-decoration: none;
    font-size: 0.875rem;
    font-weight: 500;
    transition: all 0.2s ease;
}

.nav-icon {
    font-size: 1.1rem;
}

.nav-link:hover {
    background-color: var(--hover-bg);
    color: var(--text-main);
}

/* active-class: Highlight ពណ៌ខៀវស្រាលពេល User កំពុងនៅទំព័រនោះ */
.nav-link.active {
    background-color: var(--active-bg);
    color: var(--active-color);
    font-weight: 600;
}

.nav-link.active .nav-icon {
    color: var(--active-color);
}

.badge-counter {
    margin-left: auto;
    background-color: #fee2e2;
    color: #dc2626;
    font-size: 0.75rem;
    font-weight: 600;
    padding: 2px 6px;
    border-radius: 9999px;
}

/* ==========================================================
   Footer Section (User Info & Logout)
   ========================================================== */
.sidebar-footer {
    padding: 0.875rem 1rem;
    border-top: 1px solid var(--border-color);
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--bg-footer);
    flex-shrink: 0;
}

.user-card {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    overflow: hidden;
}

.user-avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: var(--avatar-bg);
    color: var(--text-muted);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.95rem;
    flex-shrink: 0;
}

.user-info {
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.user-name {
    font-size: 0.8125rem;
    font-weight: 600;
    color: var(--text-main);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.user-email {
    font-size: 0.6875rem;
    color: var(--text-muted);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.btn-logout {
    background: none;
    border: none;
    color: var(--text-muted);
    font-size: 1.1rem;
    cursor: pointer;
    padding: 4px;
    border-radius: 4px;
    transition: all 0.2s ease;
}

.btn-logout:hover {
    color: #ef4444;
    background-color: rgba(239, 68, 68, 0.12);
}



/* ==========================================================
   Responsive Breakpoints
   ========================================================== */
@media (max-width: 768px) {
    .app-sidebar {
        transform: translateX(-100%);
        /* លាក់ Sidebar ទៅឆ្វេងពេលនៅ mobile */
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    }

    .app-sidebar.is-open {
        transform: translateX(0);
        /* បង្ហាញមកវិញពេលចុចប៊ូតុង Menu លើ Header */
    }

    .btn-close-sidebar {
        display: block;
        /* បង្ហាញប៊ូតុង Close លើ Mobile */
    }
}
</style>