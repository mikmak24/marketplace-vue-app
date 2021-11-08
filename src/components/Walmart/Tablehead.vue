<template>
    <thead>
        <tr>
            <th v-for="rows in tableRows" :key="rows.EclipseID"
                class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                {{rows}}
            </th>
            </tr>
    </thead>
</template>
<script>
export default {
    props: ['tableRows']
}
</script>