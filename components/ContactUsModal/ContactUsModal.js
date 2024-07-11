import { defineStore } from 'pinia';

export const useContactUsModalStore = defineStore('contactUsModal', {
  state: () => ({
    isVisible: false,
  }),
  actions: {
    openModal() {
      this.isVisible = true;
      document.body.classList.add('blockScroll')
    },
    closeModal() {
      this.isVisible = false;
      document.body.classList.remove('blockScroll')
    }
  }
});
