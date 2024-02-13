<template>
  <ModalWindow title="Add user">
    <form v-on:submit.prevent class="form">
      <label class="form__label">
        First Name:
        <InputMain v-model="user.firstName" placeholder="Enter text" />
        <p v-if="firstNameError" class="error-message">{{ firstNameError }}</p>
      </label>
      <label class="form__label">
        Last Name:
        <InputMain v-model="user.lastName" placeholder="Enter text" />
        <p v-if="lastNameError" class="error-message">{{ lastNameError }}</p>
      </label>
      <label class="form__label">
        Email Address:
        <InputMain v-model="user.email" placeholder="Enter text" type="email" />
        <p v-if="emailError" class="error-message">{{ emailError }}</p>
      </label>
      <ButtonMain class="form__btn" @click="validateAndCreateUser">Add user</ButtonMain>
    </form>
    <h5 class="successes" v-if="successes">User successfully created.</h5>
  </ModalWindow>
</template>

<script>
import ModalWindow from '@/ui/ModalWindow.vue';
import InputMain from '@/ui/InputMain.vue';
import ButtonMain from '@/ui/ButtonMain.vue';
import axios from 'axios';

export default {
  components: {
    ModalWindow,
    InputMain,
    ButtonMain,
  },
  data() {
    return {
      user: {
        firstName: '',
        lastName: '',
        email: '',
      },
      firstNameError: '',
      lastNameError: '',
      emailError: '',
      successes: false,
    };
  },
  methods: {
    async validateAndCreateUser() {
      this.firstNameError = this.validateName(this.user.firstName);
      this.lastNameError = this.validateName(this.user.lastName);
      this.emailError = this.validateEmail(this.user.email);

      if (!this.firstNameError && !this.lastNameError && !this.emailError) {
        try {
          await axios.post('https://reqres.in/api/users', {
            first_name: this.user.firstName,
            last_name: this.user.lastName,
            email: this.user.email,
          });

          this.successes = true;
          setTimeout(() => {
            this.$emit('close');
          }, 1000);
        } catch (error) {
          console.error(error);
        }
      }
    },
    validateName(name) {
      if (!name) {
        return '*Please enter your first name';
      }
      return '';
    },
    validateEmail(email) {
      if (!email) {
        return '*Please enter your email address';
      }
      if (!/^\S+@\S+\.\S+$/.test(email)) {
        return '*Invalid email address';
      }
      return '';
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  row-gap: 25px;

  &__label {
    display: flex;
    flex-direction: column;
    row-gap: 6px;
    font-size: 17px;
  }

  &__btn {
    padding: 13px 21px;
    font-size: 16px;
  }
}
.successes {
  font-size: 21px;
  margin-top: 5px;
  color: var(--green);
  animation: opacityAnim 1 1s;
}
.error-message {
  color: var(--red-light);
  margin-top: 5px;
  animation: opacityAnim 1 1s;
}
</style>
