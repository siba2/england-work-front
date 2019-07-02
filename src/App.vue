<template>
  <v-app id="inspire">
    <v-navigation-drawer
            v-model="drawer"
            fixed
            app>
      <v-list dense>
        <v-list-tile router :to="'/menu'">
          <v-list-tile-action>
            <v-icon>apps</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Menu</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile router :to="'/employees'">
          <v-list-tile-action>
            <v-icon>people</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Pracownicy</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile router :to="'/work-hours'">
          <v-list-tile-action>
            <v-icon>timer</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Godziny pracy</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile router :to="'/expenses'">
          <v-list-tile-action>
            <v-icon>money</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Wydatki</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Praca w Wielkiej Brytanii </v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container >
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null
    }),
    props: {
      source: String
    }
  }
</script>