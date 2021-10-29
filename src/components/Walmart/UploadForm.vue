<template>
    <div class="flex flex-col max-w-5xl md:h-52 bg-white rounded-lg shadow-lg overflow-hidden md:flex-row my-10">
        <div class="md:flex items-center justify-center md:w-1/2 md:bg-blue-600">
            <div class="py-6 px-8 md:py-0">
                <h2 class="text-gray-700 text-2xl font-bold md:text-gray-100">Upload a Excel/CSV File</h2>
                <p class="mt-2 text-gray-600 md:text-white">You can download the template below for Reference</p>
            </div>
        </div>
        <div class="flex items-center justify-center pb-6 md:py- md:w-1/2 md:border-b-8 border-blue-6.00 w-10">
            <form>
                <div class="flex flex-col rounded-lg overflow-hidden sm:flex-row">
                    <input type="file" class="py-3 px-4 bg-gray-200 text-gray-800 border-gray-300 border-2 outline-none placeholder-gray-500 focus:bg-gray-100" name="email" placeholder="Select File">
                    <button class="py-3 px-4 bg-yellow-400 text-black font-semibold uppercase hover:bg-gray-600">Upload File</button>
                </div>
            </form>
        </div>
    </div>
</template>