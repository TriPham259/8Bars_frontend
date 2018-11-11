<template>
  <v-app>
  <v-toolbar>
    <v-toolbar-title>
    <router-link to='/' tag="span" style="cursor: pointer">
        <v-icon left>event</v-icon>
        HAW Hamburg Kursplaner
    </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items >
      <v-btn
        flat
        v-for="item in menuItems"
        :key="item.title"
        :to="item.link"
        style="cursor: pointer">
        {{ item.title }}
      </v-btn>
  </v-toolbar-items>
  </v-toolbar>

  <main>
    <router-view></router-view>
  </main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      menuItems: [
        { title: 'Katalog', link: '/' },
        { title: 'Kursplanner', link: '/courseplanner' },
        { title: 'Anmelden', link: '/login' },
        { title: 'Registrieren', link: '/signup' }
      ]
    }
  },
  name: 'App'
}
</script>
