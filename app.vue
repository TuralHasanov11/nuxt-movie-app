<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script setup>
  import { useAppStore } from '~/stores/app'

  const store = useAppStore()
  await useAsyncData('app', () => store.appStarted())
</script>