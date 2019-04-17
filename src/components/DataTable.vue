<template>
    <div class="container">
        <table class="table">
            <thead>
            <tr>
                <th><b>Name</b> <i class="fa fa-fw fa-sort" @click="sortName"></i></th>
                <th><b>Score</b> <i class="fa fa-fw fa-sort" @click="sortScore(data)"></i></th>
                <th><b>ID</b> <i class="fa fa-fw fa-sort"></i></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="d of data">
                <td>{{d.name}}</td>
                <td>{{d.score}}</td>
                <td>{{d.id}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "DataTable",
        data() {
            return {
                sortBy: true,
                data: [
                    {name: 'John', score: 320, id: 1},
                    {name: 'William.', score: 300, id: 2},
                    {name: 'James', score: 230, id: 3},
                    {name: 'Logan', score: 250, id: 4},
                    {name: 'Benjamin', score: 435, id: 5},
                    {name: 'Daniel', score: 28, id: 6},
                    {name: 'Robert', score: 99, id: 7},
                ]
            }
        },
        methods: {
            sortName() {
                this.data.sort((a, b) => {
                    if (a.name > b.name) return 1;
                    if (a.name < b.name) return -1;
                    return 0
                });

            },
            sortScore(data) {
                data.sort((a, b) => {
                    return a.score - b.score;
                });
            },
        },
    }
</script>
<style scoped>
    i:hover {
        cursor: pointer;
    }
</style>
