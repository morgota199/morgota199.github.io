<script setup lang="ts">
import InputTextarea from '~/components/UI/InputTextarea.vue'
import PrimaryButton from '~/components/UI/PrimaryButton.vue'
import InputEmail from '~/components/UI/InputEmail.vue'

const runtimeConfig = useRuntimeConfig()

const email = ref('')
const message = ref('')

const isValidEmail = ref(true)
const isValidMessage = ref(true)

const successSent = ref(false)

const checkValidationEmail = (flag: boolean) => (isValidEmail.value = flag)
const checkValidationMessage = (flag: boolean) => (isValidMessage.value = flag)

const send = async () => {
    if (
        (!email.value || !message.value) &&
        isValidMessage.value &&
        isValidEmail.value
    ) {
        isValidEmail.value = false
        isValidMessage.value = false

        return
    }

    if (!isValidEmail.value || !isValidMessage.value) return

    await sendTelegramMessage()
}

const sendTelegramMessage = async () => {
    try {
        await $fetch(
            `https://api.telegram.org/bot${runtimeConfig.public.telegramBotToken}/sendMessage`,
            {
                method: 'post',
                body: {
                    chat_id: runtimeConfig.public.telegramChatId,
                    text: `<b>Email: </b> ${email.value}\n<b>Message: </b> ${message.value}
                  `,
                    parse_mode: 'HTML',
                },
            }
        )

        successSent.value = true
    } catch (e) {
        console.log('Error: ', e.response)
    } finally {
        setTimeout(() => {
            successSent.value = false
        }, 5000)
    }
}
</script>

<template>
    <div class="email_section">
        <div class="email_form">
            <Transition>
                <span
                    v-if="!(isValidEmail && isValidMessage)"
                    class="email_form__item required_fields"
                    >{{ $t('contact.input_required_fields') }}</span
                >
            </Transition>
            <Transition>
                <span
                    v-if="successSent"
                    class="email_form__item success_sent"
                    >{{ $t('contact.success_sent') }}</span
                >
            </Transition>
            <InputEmail
                class="email_form__item"
                v-model="email"
                @is-valid="checkValidationEmail"
            />
            <InputTextarea
                class="email_form__item"
                v-model="message"
                @is-valid="checkValidationMessage"
            />
            <div class="sent_button_box">
                <PrimaryButton :text="$t('contact.send_email')" @click="send" />
            </div>
        </div>
    </div>
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

#contact {
    .email_section {
        display: flex;
        justify-content: center;
        padding: 20px;

        .email_form {
            max-width: 500px;
            width: 100%;

            .email_form__item {
                margin-bottom: 25px;
            }

            .required_fields {
                color: $error_color;
                font-weight: bold;
                font-size: 14px;
            }

            .success_sent {
                color: $success_color;
                font-weight: bold;
                font-size: 14px;
            }

            .sent_button_box {
                display: flex;
                justify-content: center;
            }
        }
    }
}
</style>
