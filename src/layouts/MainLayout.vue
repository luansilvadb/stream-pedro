<template>
  <div :class="[$q.dark.isActive ? 'bg-dark text-white' : 'bg-white text-dark']">
    <q-layout view="hHh LpR fFf" :class="[$q.dark.isActive ? 'bg-dark text-white' : 'bg-white text-dark']">
      <q-header :class="[$q.dark.isActive ? 'bg-dark text-white' : 'bg-white text-dark']">
        <q-toolbar :class="[$q.dark.isActive ? 'bg-dark text-white' : 'bg-white text-dark']">
          <q-btn dense flat round icon="menu" @click="toggleDrawer" />
          <q-toolbar-title class="toolbar-title">
            <router-link :to="{ path: '/' }" class="router-link" @mouseover="hover = true" @mouseleave="hover = false">
              <q-avatar>
                <img src="../assets/logo-main.png" />
              </q-avatar>
              <b :style="{ color: getColor() }">SorakaFlix</b>
            </router-link>
          </q-toolbar-title>
          <q-btn dense flat round icon="dark_mode" @click="toggleDarkMode" />
        </q-toolbar>
      </q-header>

      <q-drawer v-model="drawer" show-if-above :mini="miniState" @mouseover="miniState = false"
        @mouseout="miniState = true" :width="200" :breakpoint="500"
        :class="[$q.dark.isActive ? 'bg-dark text-white' : 'bg-white text-dark']">
        <q-scroll-area class="fit" :class="[$q.dark.isActive ? 'bg-dark text-white' : 'bg-white text-dark']">
          <q-list :class="[$q.dark.isActive ? 'bg-dark text-white' : 'bg-white text-dark']">
            <template v-for="(menuItem, index) in menuList" :key="index">
              <q-item clickable v-ripple :to="menuItem.route">
                <q-item-section avatar>
                  <q-icon :name="menuItem.icon" />
                </q-item-section>
                <q-item-section>
                  {{ menuItem.label }}
                </q-item-section>
              </q-item>
              <q-separator :key="'sep' + index" v-if="menuItem.separator" />
            </template>
          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-drawer show-if-above v-model="rightDrawerOpen" side="right" width="340"
        :class="[$q.dark.isActive ? 'bg-dark text-white' : 'bg-white text-dark']">
        <div
          style="position: relative; height: 40%; width: 100%; display: flex; align-items: center; justify-content: center;">
          <q-spinner v-if="iframeLoading" :color="$q.dark.isActive ? 'white' : 'primary'" size="7em" />
          <iframe id="video_embed" src="https://player.twitch.tv/?channel=sorakabananuda&parent=stream.luansilva.com.br"
            height="100%" width="100%" frameborder="0" scrolling="no" style="border: none;"
            v-show="!iframeLoading"></iframe>
        </div>

        <div
          style="position: relative; height: 58%; width: 100%; display: flex; align-items: center; justify-content: center;">
          <q-spinner v-if="iframeLoading" :color="$q.dark.isActive ? 'white' : 'primary'" size="7em" />
          <iframe frameborder="0" scrolling="no" id="chat_embed" :src="darkModeUrl" @load="iframeLoaded" height="100%"
            width="100%" style="border: none;" v-show="!iframeLoading"></iframe>
        </div>
      </q-drawer>

      <q-page-container :class="[$q.dark.isActive ? 'bg-dark text-white' : 'bg-white text-dark']">
        <router-view />
      </q-page-container>

    </q-layout>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useQuasar } from 'quasar'

const drawer = ref(false)
const miniState = ref(true)
const rightDrawerOpen = ref(false)
const iframeLoading = ref(true)
const $q = useQuasar()

const menuList = [

  {
    icon: 'help',
    label: 'Versão',
    separator: false,
    route: '/atualizacao'
  }
]

const darkModeUrl = computed(() => {
  return $q.dark.isActive ? 'https://www.twitch.tv/embed/sorakabananuda/chat?parent=stream.luansilva.com.br&darkpopout' : 'https://www.twitch.tv/embed/sorakabananuda/chat?parent=stream.luansilva.com.br'
})

const toggleDrawer = () => {
  drawer.value = !drawer.value
}

const toggleDarkMode = () => {
  $q.dark.toggle()
  iframeLoading.value = true
  $q.nextTick(() => {
    iframeLoaded()
  })
}

const iframeLoaded = () => {
  iframeLoading.value = false
}
const hover = ref(false)

const getColor = () => {
  if (hover.value) return '#1976D2'
  return $q.dark.isActive ? 'white' : 'black'
}

</script>

<style scoped>
.router-link {
  text-decoration: none;
}

.router-link:hover {
  cursor: pointer !important;
}

.bg-dark,
.bg-white {
  transition: background-color 1s ease, color 1s ease;
}
</style>
