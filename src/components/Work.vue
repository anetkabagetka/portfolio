<template>
    <div class="work" v-for="work in works" :key="work.id">
        <img :src="work.image" :alt="work.title" class="work-image" loading="lazy" decoding="async">
        <div class="work-info">
            <button class="info" @click="toggleInfo">?</button>
            <div class="more-info">
                <button class="close" @click="closeInfo">x</button>
                <h3 class="work-title">{{ work.title }}</h3>
                <p class="work-description">{{ work.description }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { works } from '@/data/works.js';

const toggleInfo = (event) => {
    const infoButton = event.currentTarget;
    const moreInfo = infoButton.nextElementSibling;
    if (moreInfo) {
        moreInfo.classList.toggle('visible');
        const isVisible = moreInfo.classList.contains('visible');
        infoButton.classList.toggle('hidden', isVisible);
    }
};

const closeInfo = (event) => {
    const closeButton = event.currentTarget;
    const moreInfo = closeButton.parentElement;
    if (moreInfo) {
        moreInfo.classList.remove('visible');
    }
    const infoButton = moreInfo.previousElementSibling;
    if (infoButton) {
        infoButton.classList.remove('hidden');
    }
};
</script>

<style scoped>
.work {
    margin-top: 80px;
    display: flex;
    justify-content: center;

    img {
        width: auto;
        box-shadow: 10px 16px 16px rgba(0, 0, 0, 0.2);
        height: 400px;
        border-radius: 16px;
    }

    .work-info {
        position: relative;

        .info {
            width: 92px;
            height: 92px;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 90px;
            border-radius: 50%;
            border: none;
            font-size: 46px;
            cursor: pointer;
            font-family: 'Instrument Serif', serif;
            color: var(--primary-color);
            background-color: transparent;
            font-weight: 600;
            border: 4px solid var(--primary-color);
            transition: all 0.3s;

            &:hover {
                background-color: var(--primary-color);
                color: #fff;
            }
        }

        .hidden {
            display: none;
        }

        .close {
            position: absolute;
            top: 5px;
            right: 5px;
            background: none;
            border: none;
            font-size: 22px;
            cursor: pointer;
            color: var(--secondary-color);
            border-radius: 50%;
            width: 36px;
            height: 36px;
            font-weight: bold;
            font-family: 'Comfortaa';

        }

        .more-info {
            display: flex;
            flex-direction: column;
            position: absolute;
            font-family: 'Comfortaa';
            padding: 20px;
            z-index: 10;
            height: max-content;
            gap: 20px;
            width: 240px;
            background-color: var(--primary-color);
            color: var(--secondary-color);
            border-radius: 16px;
            left: 20px;
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
            transform: translateY(20%);
            transition: opacity 0.3s ease, transform 0.3s ease, visibility 0s linear 0.3s;
        }

        .more-info.visible {
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
            transform: translateY(0);
            transition: opacity 0.3s ease, transform 0.3s ease, visibility 0s;
        }

        .work-title {
            font-size: 18px;
            font-weight: 600;
        }

        .work-description {
            font-size: 14px;
        }
    }
}
</style>