<template>
  <li class="card">
    <img :src="card.avatar" alt="card" class="card__img" />
    <div class="card__content">
      <div class="card__text">
        <h5 class="card__name">{{ `${card.first_name} ${card.last_name}` }}</h5>
        <a href="" class="card__email">{{ card.email }}</a>
      </div>
      <div class="card__btns">
        <button class="card__delete" @click="deleteCard">
          <img src="/src/assets/img/delete.svg" alt="remove" />
        </button>
        <ButtonMain class="card__btn">User details</ButtonMain>
      </div>
    </div>
  </li>
</template>

<script>
import ButtonMain from '@/ui/ButtonMain.vue';
import axios from 'axios';

export default {
  components: {
    ButtonMain,
  },

  props: {
    card: Object,
  },

  methods: {
    deleteCard() {
      axios
        .delete(`/cards/${this.card.id}`)
        .then(() => {
          this.$emit('deleted', this.card.id);
        })
        .catch((err) => {
          this.$emit('errorDeleted', this.card.id);
          console.error(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: fit-content;
  max-width: 340px;
  width: 100%;
  background-color: #fff;
  padding: 10px;
  display: flex;
  column-gap: 10px;
  border: 1px solid var(--grey);

  &__content {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__name {
    color: var(--black);
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 5px;
  }

  &__email {
    color: var(--black);
    text-decoration: none;
  }
  &__btns {
    margin-left: auto;
    display: flex;
    column-gap: 15px;
  }

  &__delete {
    max-width: 40px;
    border: 1px solid var(--red);
    padding: 5px;
    cursor: pointer;
    border-radius: 5px;
    background: var(--white);
    transition: 0.6s;

    img {
      width: 100%;
      height: fit-content;
    }

    &:hover {
      transform: scale(1.1);
      border-color: var(--red-light);
    }
  }
}
</style>
