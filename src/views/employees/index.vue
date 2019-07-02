<template>
    <v-card>
        <v-card-title>
            <v-dialog v-model="dialog" max-width="500px">
                <template v-slot:activator="{ on }">
                    <v-btn color="primary" dark class="mb-2" v-on="on">Nowy pracownik</v-btn>
                </template>
                <v-card>
                    <v-card-title>
                        <span class="headline">Dodaj pracownika</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container grid-list-md>
                            <v-layout wrap>

                            </v-layout>
                        </v-container>
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" flat @click="">Anuluj</v-btn>
                        <v-btn color="blue darken-1" flat @click="">Zapisz</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
            <v-spacer></v-spacer>
            <v-text-field
                    v-model="search"
                    append-icon="search"
                    label="Szukaj"
                    single-line
                    hide-details
            ></v-text-field>
        </v-card-title>
        <v-data-table
                :headers="headers"
                :items="employees"
                :search="search"
        >
            <template v-slot:items="props">
                <td>{{ props.item.name }}</td>
                <td>{{ props.item.surname }}</td>
                <td class="justify-center layout px-0">
                    <v-icon
                            small
                            class="mr-2"
                            @click="editItem(props.item)"
                    >
                        edit
                    </v-icon>
                    <v-icon
                            small
                            @click="deleteItem(props.item)"
                    >
                        delete
                    </v-icon>
                </td>
            </template>
            <template v-slot:no-results>
                <v-alert :value="true" color="error" icon="warning">
                    Szukane słowo "{{ search }}" nie znaleziono.
                </v-alert>
            </template>
        </v-data-table>
    </v-card>
</template>

<script>
    export default {
        name: "index",
        data: function() {
            return  {
                employees: [],
                dialog: false,
                search: '',
                headers: [
                    { text: 'Imię', value: 'name' },
                    { text: 'Nazwisko', value: 'surname' },
                ],
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