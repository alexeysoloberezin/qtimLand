<template>
  <div
      class="modal bg-background py-[30px] px-[45px] h-[100vh]"
      :class="{'active': isVisible}"
  >
    <Logo/>
    <div class="flex justify-between h-full pb-8 pt-4">
      <div class="flex flex-col ">
        <h3 class="subtitle-lg ">СВЯЖИТЕСЬ <br/>С НАМИ</h3>
        <h4 class="text-md mt-4 max-w-[490px]">Опишите ваш проект или задачи, которые вы хотите решить, а мы с радостью впишемся.</h4>
        <Button @click="closeModal"
                :size="'lg'"
                :color="'main-outline'"
                :outline="true"
                class="flex items-center gap-2 mt-auto w-fit"
        > Назад <ArrowDown /></Button>

      </div>

      <form @submit.prevent="submitForm" class="w-[40%] flex flex-col gap-4">
        <Card title="ПЛАТФОРМА">
          <div class="flex items-center flex-wrap gap-2 mt-3">
            <div
                v-for="el in platformList"
                @click="formData.platform = el"
                class="badge cursor-pointer"
                :class="{'active': el === formData.platform}"
            >{{ el }}
            </div>
          </div>
        </Card>
        <Card title="БЮДЖЕТ">
          <div class="flex items-center flex-wrap gap-2 mt-3">
            <div
                v-for="el in budgetList"
                @click="formData.budget = el"
                class="badge cursor-pointer"
                :class="{'active': el === formData.budget}"
            >{{ el }}
            </div>
          </div>
        </Card>

        <Card title="ФОРМА ОБРАТНОЙ СВЯЗИ" class="h-full" style="flex-grow: 1">
          <div class="flex flex-col gap-2 my-3 h-full">
            <Input v-model="formData.name" :label="'Как вас зовут'"/>
            <Input v-model="formData.phone" :label="'Телефон'"/>
            <Input v-model="formData.message" :label="'Опишите свой проект'"/>
            <Button :size="'xl'" class="mt-auto mb-[20px]">Оставить заявку</Button>
          </div>
        </Card>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from "~/components/icons/Logo.vue";
import Card from "~/components/Cards/Card.vue";
import Input from "~/components/Form/Input.vue";
import Button from "~/components/Button.vue";
import {useContactUsModalStore} from "~/components/ContactUsModal/ContactUsModal";
import {storeToRefs} from "pinia";
import ArrowDown from "~/components/icons/ArrowDown.vue";

const modalStore = useContactUsModalStore();
const {isVisible} = storeToRefs(modalStore)
const {closeModal} = modalStore

const formData = ref({
  platform: null,
  budget: null,
  name: '',
  phone: '',
  message: ''
})

const platformList = [
  "Web",
  "Mobile",
  "App",
  "Другое"
]

const budgetList = [
  "до 3 млн",
  "от 3 до 10 млн",
  "от 10 млн"
]

const { $socket }: any = useNuxtApp();

const submitForm = () => {
  $socket.emit('submitForm', formData.value);
};

$socket.on('formSubmitted', (response: {status: string, message: string}) => {
  if (response.status === 'success') {
    alert(response.message);
    closeModal();
  }
});
</script>

<style scoped lang="scss">
.modal {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100vw;
  overflow-y: auto;
  height: 100vh;
  transform: translateY(-110%);
  pointer-events: none;
  opacity: 0.8;
  transition: .7s ease-in-out;

  &.active {
    transform: translateY(0);
    pointer-events: initial;
    opacity: 1;
  }
}
</style>