<template>
  <nav class="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg border-t border-gray-200 dark:border-gray-700">
    <div class="container mx-auto">
      <div class="flex justify-around items-center h-16">
        <NuxtLink to="/" class="flex flex-col items-center px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-primary-700 dark:hover:text-primary-500">
          <i class="text-xl mb-1">📊</i>
          <span class="text-xs">Dashboard</span>
        </NuxtLink>
        <NuxtLink to="/salary" class="flex flex-col items-center px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-primary-700 dark:hover:text-primary-500">
          <i class="text-xl mb-1">💵</i>
          <span class="text-xs">Salary</span>
        </NuxtLink>
        <NuxtLink to="/expenses" class="flex flex-col items-center px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-primary-700 dark:hover:text-primary-500">
          <i class="text-xl mb-1">📝</i>
          <span class="text-xs">Expenses</span>
        </NuxtLink>
        <NuxtLink to="/statistics" class="flex flex-col items-center px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-primary-700 dark:hover:text-primary-500">
          <i class="text-xl mb-1">📈</i>
          <span class="text-xs">Statistics</span>
        </NuxtLink>
        <NuxtLink to="/settings" class="flex flex-col items-center px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-primary-700 dark:hover:text-primary-500">
          <i class="text-xl mb-1">⚙️</i>
          <span class="text-xs">Settings</span>
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>