<template >
  <div>
  <loading-animation v-if="isLoading" />
  <div v-else>
  <q-layout view="hHh LpR fFf" :class="$q.dark.isActive ? 'bg-primary text-white' : 'bg-primary text-white'">

    <q-header reveal elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="drawer = !drawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          SorakaFlix
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
        <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 0 }">
          <q-list padding>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="inbox" />
              </q-item-section>

              <q-item-section>
                teste 1
              </q-item-section>
            </q-item>

            <q-item active clickable v-ripple>
              <q-item-section avatar>
                <q-icon :class="$q.dark.isActive ? 'text-white' : 'text-white'" name="star" />

              </q-item-section>

              <q-item-section :class="$q.dark.isActive ? 'text-white' : 'text-white'" name="star">
                teste 2
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="send" />
              </q-item-section>

              <q-item-section>
                teste 3
              </q-item-section>
            </q-item>

            <q-separator />

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="drafts" />
              </q-item-section>

              <q-item-section>
                teste 4
              </q-item-section>
            </q-item>
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
    style="border: none;">
  </iframe>
  <iframe
    frameborder="0"
    scrolling="no"
    id="chat_embed"
    src="https://www.twitch.tv/embed/sorakabananuda/chat?parent=stream.luansilva.com.br&darkpopout"
    height="58%"
    width="100%"
    style="border: none;">
  </iframe>
</q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</div>
  </div>
</template>
<style>
  #video_embed,
  #chat_embed {
    margin: 0;
    padding: 0;
    border: none; /* remove qualquer borda se houver */
  }
</style>

<script>
import { ref } from 'vue'
import LoadingAnimation from 'src/components/LoadingAnimation.vue'

export default {
  components: {
    LoadingAnimation
  },

  setup () {
    const isLoading = ref(true)
    const leftDrawerOpen = ref(false)
    const rightDrawerOpen = ref(false)

    setTimeout(() => {
      isLoading.value = false
    }, 3000)

    return {
      isLoading,
      leftDrawerOpen,
      drawer: ref(false),
      miniState: ref(true),

      rightDrawerOpen,
      toggleRightDrawer () {
        rightDrawerOpen.value = !rightDrawerOpen.value
      }
    }
  }
}
</script>
