<template>
  <div>
    <q-layout view="hHh LpR fFf" :class="$q.dark.isActive ? 'bg-primary text-white' : 'bg-primary text-white'">
      <q-header reveal elevated class="bg-primary text-white">
        <q-toolbar>
          <q-btn dense flat round icon="menu" @click="drawer = !drawer" />
          <q-toolbar-title class="toolbar-title">
            <router-link :to="{ path: '/' }" class="router-link">
              <q-avatar>
                <img src="../assets/logo-main.png">
              </q-avatar>
              SorakaFlix
            </router-link>
          </q-toolbar-title>
          <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        show-if-above
        reveal elevated
        :mini="miniState"
        @mouseover="miniState = false"
        @mouseout="miniState = true"
        :width="200"
        :breakpoint="500"
        :class="$q.dark.isActive ? 'bg-dark text-white' : 'bg-primary text-white'"
      >
        <q-scroll-area class="fit">
          <q-list>
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

      <q-drawer reveal elevated show-if-above v-model="rightDrawerOpen" side="right" width="400" :class="$q.dark.isActive ? 'bg-dark text-white' : 'bg-primary text-white'">
        <iframe
          id="video_embed"
          src="https://player.twitch.tv/?channel=sorakabananuda&parent=stream.luansilva.com.br"
          height="40%"
          width="100%"
          frameborder="0"
          scrolling="no"
          style="border: none;"
        ></iframe>
        <iframe
          frameborder="0"
          scrolling="no"
          id="chat_embed"
          src="https://www.twitch.tv/embed/sorakabananuda/chat?parent=stream.luansilva.com.br&darkpopout"
          height="58%"
          width="100%"
          style="border: none;"
        ></iframe>
      </q-drawer>

      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(false)
const miniState = ref(true)
const rightDrawerOpen = ref(false)

const menuList = [
  {
    icon: 'inbox',
    label: 'Inbox',
    separator: true,
    route: '/teste'
  },
  {
    icon: 'send',
    label: 'Outbox',
    separator: false
  },
  {
    icon: 'delete',
    label: 'Trash',
    separator: false
  },
  {
    icon: 'error',
    label: 'Spam',
    separator: true
  },
  {
    icon: 'settings',
    label: 'Settings',
    separator: false
  },
  {
    icon: 'feedback',
    label: 'Send Feedback',
    separator: false
  },
  {
    icon: 'help',
    label: 'Help',
    separator: false
  }
]

const toggleRightDrawer = () => {
  rightDrawerOpen.value = !rightDrawerOpen.value
}
</script>
<style scoped>
.toolbar-title .router-link {
  color: white;
  text-decoration: none;
}

.toolbar-title .router-link:hover,
.toolbar-title .router-link:focus {
  text-decoration: none;
}

</style>
