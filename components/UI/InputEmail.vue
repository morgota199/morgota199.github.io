<script setup lang="ts">
import { useField } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as zod from 'zod'

const props = defineProps({
    modelValue: {
        type: String,
        default: '',
    },
})
const emit = defineEmits(['update:modelValue', 'isValid'])
const i18n = useI18n()

const fieldSchema = toTypedSchema(
    zod
        .string()
        .trim()
        .nonempty(i18n.t('validation.field_required'))
        .email({ message: i18n.t('UI.input_email.is_email') })
)
const { value, errorMessage } = useField('email', fieldSchema)

watch(
    () => errorMessage.value,
    () => {
        emit('isValid', !errorMessage.value)
    }
)

watch(
    () => value.value,
    () => emit('update:modelValue', value.value)
)
</script>

<template>
    <div class="input_email">
        <label for="email">{{ $t('ui.input_email.label') }}</label>
        <input
            name="email"
            v-model="value"
            type="email"
            :placeholder="$t('ui.input_email.placeholder')"
        />
        <Transition>
            <span v-if="errorMessage">{{ errorMessage }}</span>
        </Transition>
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

.input_email {
    display: flex;
    flex-direction: column;

    label[for='email'] {
        font-weight: normal;
        font-size: 12px;
        margin-bottom: 5px;
    }

    input[type='email'] {
        padding: 5px 10px;
        font-family: Roboto;
        font-size: 17px;
        font-weight: bold;
    }

    span {
        color: $error_color;
        font-weight: bold;
        font-size: 14px;
    }
}
</style>
