<script setup lang="ts">
import TheBackground from '~/components/TheBackground.vue'
import { useLoaderStore } from '~/stores/loader'

const nuxtApp = useNuxtApp()

const loadingStore = useLoaderStore()

nuxtApp.hook('app:mounted', async () => {
    await loadingStore.setLoading(true)
})

nuxtApp.hook('page:finish', async () => {
    await loadingStore.setLoading(false)
})
</script>

<template>
    <TheBackground />
    <Transition mode="out-in">
        <div v-if="loadingStore.isLoading" class="loader">
            <div class="blob"></div>
        </div>
    </Transition>

    <div class="h-screen" :class="{ loading: loadingStore.isLoading }">
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<style>
.loader {
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100%;
    z-index: 50;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: progress;
}

.h-screen {
    height: 100vh;
}

.loading {
    background: #ffffff;
    filter: blur(4px);
}

.blob {
    width: 50px;
    aspect-ratio: 1;
    --c: no-repeat radial-gradient(farthest-side, #514b82 92%, #0000);
    background:
        var(--c) 50% 0,
        var(--c) 50% 100%,
        var(--c) 100% 50%,
        var(--c) 0 50%;
    background-size: 10px 10px;
    animation: l18 1s infinite;
    position: relative;
}
.blob::before {
    content: '';
    position: absolute;
    inset: 0;
    margin: 3px;
    background: repeating-conic-gradient(#0000 0 35deg, #514b82 0 90deg);
    -webkit-mask: radial-gradient(
        farthest-side,
        #0000 calc(100% - 3px),
        #000 0
    );
    border-radius: 50%;
}

@keyframes l18 {
    100% {
        transform: rotate(0.5turn);
    }
}

.page-enter-active,
.page-leave-active {
    transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(1rem);
}
</style>
