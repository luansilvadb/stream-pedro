<template>
  <q-layout view="hhr LpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://i.imgur.com/zuGML8J.png">
          </q-avatar>
          Soraka Bananuda
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />

      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered :width="400">
      <q-container  >
        <div >
    <q-video
      :ratio="16/9"

      src="https://www.youtube-nocookie.com/embed/_lfCATP8cMw"
    />
  </div>
      </q-container>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const rightDrawerOpen = ref(false)

    return {
      rightDrawerOpen,
      toggleRightDrawer () {
        rightDrawerOpen.value = !rightDrawerOpen.value
      }
    }
  }
}
</script>
