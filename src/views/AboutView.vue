<template>
    <section id="about">
        <h1 class="section-title">
            About me
            <img src="/src/assets/avatar-me.png" alt="Me" class="about-avatar me">
            <img src="/src/assets/avatar.png" alt="Avatar" class="about-avatar">
        </h1>
        <div class="about-socials">
            <div class="social-link">
                <img src="/src/assets/at_icon.png" alt="email icon" class="social-icon" />
                <a href="mailto:aneta.bolibruchova@gmail.com">aneta.bolibruchova@gmail.com</a>
            </div>
            <div class="social-link">
                <img src="/src/assets/hash_icon.png" alt="hashtag icon" class="social-icon" />
                <a href="tel:+4550286284">+45 50 28 62 84</a>
            </div>
            <div class="social-link">
                <img src="/src/assets/linkedin_icon.png" alt="linked icon" class="social-icon" />
                <a href="https://linkedin.com/in/anetabolibruchova" target="_blank"
                    rel="noopener noreferrer">in/anetabolibruchova</a>
            </div>
        </div>
        <div class="about-content">
            <p>
                Hi, my name is Aneta.
                Iam a wannabe graphic designer and illustrator.
                Curretly studying Multimedia Design at S-E-A academy, Esbjerg.
            </p>
            <p>I enjoy anything art and cutting my bangs too short.</p>
            <p>Goals: improving coding skills, upgrading animation skills, gaining an internship</p>
        </div>
        <div class="about-actions">
            <div class="cv-link">
                <img src="/src/assets/arr_down.png" alt="download icon" class="arr-icon" />
                <a href="/src/assets/cv-aneta-bolibruchova.pdf" target="_blank" rel="noopener noreferrer">Download my
                    CV</a>
            </div>
            <div class="cv-link">
                <img src="/src/assets/arr_right.png" alt="download icon" class="arr-icon" />
                <a href="https://youtu.be/HYHCchJtHOY" target="_blank" rel="noopener noreferrer">See video CV</a>
            </div>
        </div>
    </section>
    <FolderNavigation />
</template>

<script setup>
import FolderNavigation from '@/components/FolderNavigation.vue';
</script>

<style scoped>
.about-avatar {
    height: 180px;
    right: 0;
    position: absolute;
}

.about-avatar.me {
    right: 15px;
    z-index: 10;
    top: 10px;
    transform: rotate(3deg);
    width: 125px;
    height: 155px;
}

.about-socials {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    gap: 20px;

    .social-link {
        display: flex;
        align-items: center;
        gap: 12px;

        a {
            font-size: 24px;
            font-family: var(--font-ui);
            color: #000;
            text-decoration: none;

            &:hover {
                color: var(--primary-color);
            }
        }

        .social-icon {
            width: 32px;
            height: 32px;
        }
    }
}

.about-actions {
    display: flex;
    gap: 40px;
    margin-top: 20px;
}

.cv-link {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 30px;

    a {
        font-size: 24px;
        font-family: var(--font-ui);
        color: #000;
        text-decoration: none;

        &:hover {
            color: var(--primary-color);
        }
    }

    .arr-icon {
        width: 32px;
        height: 32px;
    }
}

.about-content {
    font-size: 24px;
    font-family: var(--font-ui);
    color: #000;
    margin-top: 40px;
    line-height: 1.618;

    p {
        margin-bottom: 20px;
    }
}
</style>