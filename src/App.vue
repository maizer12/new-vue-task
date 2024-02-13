<template>
  <Header />
  <main class="page">
    <div class="container">
      <ControlPanel @openModal="openAddUser = true" />
      <ul class="cards">
        <user-card :card="card" :key="card.id" v-for="card in data.data" @errorDeleted="errorDeleted = true" />
      </ul>
    </div>
  </main>
  <Footer />
  <AddUser @close="openAddUser = false" v-if="openAddUser" />
  <ModalWindow title="Error" v-if="errorDeleted" @close="errorDeleted = false">
    <p class="error-text">*Unfortunately, the operation to delete the user has failed.</p>
  </ModalWindow>
  <UserInfo/>
</template>
<script>
import Header from './views/Header.vue';
import UserCard from './components/UserCard.vue';
import ControlPanel from './components/ControlPanel.vue';
import Footer from './views/Footer.vue';
import AddUser from './components/AddUser.vue';
import ModalWindow from './ui/ModalWindow.vue';
import API from './api';
import UserInfo from './components/UserInfo.vue';

export default {
  components: {
    Header,
    UserCard,
    Footer,
    ControlPanel,
    AddUser,
    ModalWindow,
    UserInfo,
  },

  data() {
    return {
      data: [],
      openAddUser: false,
      errorDeleted: false,
    };
  },

  methods: {
    async getCards() {
      this.data = await API.getCards();
    },
  },
  created() {
    this.getCards();
  },
  mounted() {},
};
</script>
<style scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
  column-gap: 20px;
  row-gap: 20px;
  width: fit-content;
  justify-content: center;
  margin-top: 50px;
}
.error-text {
  color: var(--red);
}
</style>
