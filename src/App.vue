<template>
    <div class="container">
        <data-table></data-table>
    </div>
</template>

<script>

    import DataTable from "./components/DataTable";

    export default {
        name: 'app',
        components: {
            dataTable:DataTable
        },
    }
</script>

