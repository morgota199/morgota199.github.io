<script setup lang="ts">
import { useLoaderStore } from '~/stores/loader'

const options = {
    background: {
        color: {
            value: '#fff',
        },
    },
    fpsLimit: 120,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: 'push',
            },
            onHover: {
                enable: true,
                mode: 'repulse',
            },
        },
        modes: {
            bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
            },
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
        },
    },

    particles: {
        color: {
            value: '#aaa',
        },
        links: {
            color: '#aaa',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        move: {
            direction: 'none',
            enable: true,
            outModes: 'out',
            random: false,
            speed: 3,
            straight: false,
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
            },
        },
        number: {
            density: {
                enable: true,
            },
            value: 380,
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
            },
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000',
            },
            polygon: {
                nb_sides: 5,
            },
        },
        size: {
            value: { min: 1, max: 5 },
        },
    },
    detectRetina: true,
}

const loadingStore = useLoaderStore()
</script>

<template>
    <NuxtParticles id="background" :options="options" />
</template>

<style scoped lang="scss">
#background {
    position: absolute;
    z-index: -1;
}
</style>
