<template>
  <div class="loading-animation">
    <div class="spinner"></div>
  </div>
</template>

<style scoped>
.loading-animation {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  animation: fade-in 0.5s;
  background-color: #222;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #ccc;
  border-top-color: #888;
  border-radius: 50%;
  animation: spin 1s infinite linear;
  border-color: #888;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes fade-in {
  0% {
    opacity: 0.7;
  }
  100% {
    opacity: 1;
  }
}
</style>
