<template>
  <div
    class="fixed z-10 w-full inset-0 overflow-y-auto"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
    >
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>
      <span
        class="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
        >&#8203;</span
      >
      <div
        class="inline-block align-bottom rounded-lg text-left overflow-hidden transform transition-all sm:my-8 sm:align-middle w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl"
      >
        <div class="flex items-center justify-center space-x-2 animate-pulse">
          <div
            style="border-top-color: transparent"
            class="w-28 h-28 border-4 border-green-400 border-solid rounded-full animate-spin"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
