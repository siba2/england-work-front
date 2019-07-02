<template>
    <div>
        Expe <br>
        {{employees}}
    </div>
</template>

<script>
    export default {
        name: "index",
        data: function() {
            return  {
                employees: []
            }
        },
        created(){
            this.getEmployees()
        },
        methods:{
            getEmployees(){
                axios.get('http://localhost/england-work-api/public/api/employees/all').then((response) => {
                   this.employees = response.data
                })
            }
        }
    }
</script>

<style scoped>

</style>