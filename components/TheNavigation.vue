<script setup lang="ts">
import BurgerIcon from '~/assets/icons/burger.svg'
import { useNavigationMenu } from '~/stores/navigation-menu'

const navigationStore = useNavigationMenu()
</script>

<template>
    <nav class="navigation">
        <Transition>
            <ul class="mobile-nav" v-if="navigationStore.isVisible">
                <li>
                    <NuxtLink to="about" replace>{{
                        $t('navigation.about')
                    }}</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="services" replace>{{
                        $t('navigation.services')
                    }}</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="technologies" replace>{{
                        $t('navigation.technologies')
                    }}</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="portfolio" replace>{{
                        $t('navigation.portfolio')
                    }}</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="contact" replace>{{
                        $t('navigation.contact')
                    }}</NuxtLink>
                </li>

                <li class="language-selector"><TheLanguageSelector /></li>
            </ul>
        </Transition>

        <ul class="desktop-nav">
            <li>
                <NuxtLink to="about" replace>{{
                    $t('navigation.about')
                }}</NuxtLink>
            </li>
            <li>
                <NuxtLink to="services" replace>{{
                    $t('navigation.services')
                }}</NuxtLink>
            </li>
            <li>
                <NuxtLink to="technologies" replace>{{
                    $t('navigation.technologies')
                }}</NuxtLink>
            </li>
            <li>
                <NuxtLink to="portfolio" replace>{{
                    $t('navigation.portfolio')
                }}</NuxtLink>
            </li>
            <li>
                <NuxtLink to="contact" replace>{{
                    $t('navigation.contact')
                }}</NuxtLink>
            </li>
        </ul>

        <div class="burger-container">
            <BurgerIcon class="burger" @click="navigationStore.toggle()" />
        </div>
    </nav>
</template>

<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.navigation {
    display: flex;
    align-items: center;

    .desktop-nav {
        list-style: none;

        li {
            margin: 0 10px;

            a {
                text-decoration: none;
                color: black;
                position: relative;

                &:after,
                &:before {
                    transition: all 0.5s;
                }

                &:after {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    margin: auto;
                    width: 0;
                    content: '.';
                    color: transparent;
                    background: #aaa;
                    height: 1px;
                }

                &:hover {
                    color: #555;
                }

                &:hover:after {
                    width: 100%;
                }
            }
        }
    }

    .mobile-nav {
        list-style: none;
        z-index: 1;

        li {
            margin: 0 10px;

            a {
                text-decoration: none;
                color: black;
            }
        }

        .language-selector {
            display: none;
        }
    }

    .burger-container {
        .burger {
            width: 60px;
            height: auto;
        }
    }

    @media (min-width: $mobile-min) and (max-width: $mobile-max) {
        .desktop-nav {
            display: none;
        }

        .mobile-nav {
            flex-direction: column;
            position: absolute;
            left: 0;
            top: 15%;
            height: 100vh;
            width: 100%;

            li {
                margin-top: 10px;
                margin-bottom: 15px;

                a {
                    font-size: 24px;
                }
            }

            .language-selector {
                display: block !important;
            }
        }
    }

    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        .desktop-nav {
            display: none;
        }

        .mobile-nav {
            flex-direction: column;
            position: absolute;
            left: 0;
            top: 10%;
            height: 100vh;
            width: 100%;

            li {
                margin-top: 10px;
                margin-bottom: 15px;

                a {
                    font-size: 24px;
                }
            }

            .language-selector {
                display: block !important;
            }
        }
    }

    @media (min-width: $laptop-min) and (max-width: $laptop-max) {
        .desktop-nav {
            display: flex;

            li {
                a {
                    font-size: 11px;
                }
            }
        }

        .burger-container {
            display: none;
        }
    }

    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        .desktop-nav {
            display: flex;
        }

        .burger-container {
            display: none;
        }
    }

    @media (min-width: $tv-min) {
        .desktop-nav {
            display: flex;

            li {
                a {
                    font-size: 20px;
                }
            }
        }

        .burger-container {
            display: none;
        }
    }
}
</style>
