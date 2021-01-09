import {ref, Ref} from 'vue'

// This defines which attributes and funciton swill be available to the component
interface Dropdown {
    dropdownElement: Ref<HTMLElement>;
    dropdown: Ref<boolean>;
    toggleDropdown(): void;
}

// And this is the re-usable function which will be called from the components
export function useDropdown(): Dropdown {
    const dropdownElement = ref(document.createElement('div'))
    const dropdown = ref(false)

    const toggleDropdown = () => {
        dropdown.value = !dropdown.value
    }

    return {
        dropdownElement,
        dropdown,
        toggleDropdown
    }

}