import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useToggleStore = defineStore('toggle', () => {
    const isOpen = ref(false);

    const toggle = () => {
        isOpen.value = !isOpen.value;
    };

    return { isOpen, toggle };
});
