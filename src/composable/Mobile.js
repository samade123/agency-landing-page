
import { ref, watch } from "@vue/runtime-core";
import { useWindowSize } from "vue-window-size";

export function widthFunction() {

    const { width, height } = useWindowSize();
    const setMobile = ref(false);


    watch(
        width,
        (width) => {
            width < 600 ? (setMobile.value = true) : (setMobile.value = false);
        },
        { immediate: true }
    );
    return {
        width, setMobile
    };

}