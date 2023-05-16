<template>
    <div class="w-full m-auto my-36 max-w-xs">
      <div v-if='userCred.message'>
        <h1>{{ userCred.message }}</h1>
        <reloadButton />
      </div>
      <div v-else>
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text"
        name="username"
        id="username"
        v-model="userCred.username"
        placeholder="Username">
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none border  focus:border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="password"
        name="password"
        v-model="userCred.password"
        id="password"
        placeholder="password">
    </div>
    <div class="flex items-center justify-center">
      <button class='btn-dark rounded-md text-lg' type='button' @click='sendAdmin(userCred)'>
        Log In
      </button>
    </div>
  </form>
</div>
</div>

</template>

<script setup>
import logIn from '../../api/user';
import reloadButton from '../../components/ReloadButton.vue';

const { userCred, sendAdmin } = logIn();
</script>

<style lang="scss" scoped>
</style>
