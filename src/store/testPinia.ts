import { ref } from 'vue'
import { defineStore } from "pinia"
export const usePiniaState = defineStore('pinia', ()=>{
    const userName = ref('')
    const getUserNmae = (data) => {
        userName.value = data
    }
    return { userName, getUserNmae}
})