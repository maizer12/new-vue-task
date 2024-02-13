<template>
  <header class="header">
    <div class="header__inner container">
      <h2 class="logo__img">LOGO</h2>
      <nav class="menu">
        <a href="/" class="menu__link">Home</a>
        <a href="/" class="menu__link">Home</a>
        <a href="/" class="menu__link">Home</a>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.header{
  border-bottom:1px solid var(--grey);
  padding: 12px 0;
  background-color: #fff;

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
.menu{
  display: flex;
  column-gap: 15px;
  display: flex;
  
  &__link{
    color: var(--black);
    text-decoration: none;
    transition: 0.6s;

    &:hover{
      color:rgb(95, 95, 95);
    }
  }
}
.logo{


  &__inner {
    
  }
}
</style>
