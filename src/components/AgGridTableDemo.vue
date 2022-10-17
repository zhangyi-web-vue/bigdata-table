<template>
    <ag-grid-vue
            style="width: 100%; height: 500px"
            class="ag-theme-alpine"
            :columnDefs="columnDefs"
            :defaultColDef="defaultColDef"
            :autoGroupColumnDef="autoGroupColumnDef"
            :rowData="rowData"
            :treeData="true"
            :animateRows="true"
            :groupDefaultExpanded="groupDefaultExpanded"
            :getDataPath="getDataPath"></ag-grid-vue>
</template>

<script>
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridVue } from "ag-grid-vue";

export default {
    name: "AgGridTableDemo",
    components: {
        AgGridVue,
    },
    data: function () {
        return {
            columnDefs: [{ field: 'jobTitle' }, { field: 'employmentType' }],
            gridApi: null,
            columnApi: null,
            defaultColDef: {
                flex: 1,
            },
            autoGroupColumnDef: null,
            rowData: null,
            groupDefaultExpanded: null,
            getDataPath: null,
        };
    },
    created() {
        this.autoGroupColumnDef = {
            headerName: 'Organisation Hierarchy',
            minWidth: 300,
            cellRendererParams: {
                suppressCount: true,
            },
        };
        this.rowData = [
            {
                orgHierarchy: ['Erica Rogers'],
                jobTitle: 'CEO',
                employmentType: 'Permanent',
            },
            {
                orgHierarchy: ['Erica Rogers', 'Malcolm Barrett'],
                jobTitle: 'Exec. Vice President',
                employmentType: 'Permanent',
            },

            {
                orgHierarchy: ['Erica Rogers', 'Malcolm Barrett', 'Esther Baker'],
                jobTitle: 'Director of Operations',
                employmentType: 'Permanent',
            },
            {
                orgHierarchy: [
                    'Erica Rogers',
                    'Malcolm Barrett',
                    'Esther Baker',
                    'Brittany Hanson',
                ],
                jobTitle: 'Fleet Coordinator',
                employmentType: 'Permanent',
            },
            {
                orgHierarchy: [
                    'Erica Rogers',
                    'Malcolm Barrett',
                    'Esther Baker',
                    'Brittany Hanson',
                    'Leah Flowers',
                ],
                jobTitle: 'Parts Technician',
                employmentType: 'Contract',
            },
            {
                orgHierarchy: [
                    'Erica Rogers',
                    'Malcolm Barrett',
                    'Esther Baker',
                    'Brittany Hanson',
                    'Tammy Sutton',
                ],
                jobTitle: 'Service Technician',
                employmentType: 'Contract',
            },
            {
                orgHierarchy: [
                    'Erica Rogers',
                    'Malcolm Barrett',
                    'Esther Baker',
                    'Derek Paul',
                ],
                jobTitle: 'Inventory Control',
                employmentType: 'Permanent',
            },

            {
                orgHierarchy: ['Erica Rogers', 'Malcolm Barrett', 'Francis Strickland'],
                jobTitle: 'VP Sales',
                employmentType: 'Permanent',
            },
            {
                orgHierarchy: [
                    'Erica Rogers',
                    'Malcolm Barrett',
                    'Francis Strickland',
                    'Morris Hanson',
                ],
                jobTitle: 'Sales Manager',
                employmentType: 'Permanent',
            },
            {
                orgHierarchy: [
                    'Erica Rogers',
                    'Malcolm Barrett',
                    'Francis Strickland',
                    'Todd Tyler',
                ],
                jobTitle: 'Sales Executive',
                employmentType: 'Contract',
            },
            {
                orgHierarchy: [
                    'Erica Rogers',
                    'Malcolm Barrett',
                    'Francis Strickland',
                    'Bennie Wise',
                ],
                jobTitle: 'Sales Executive',
                employmentType: 'Contract',
            },
            {
                orgHierarchy: [
                    'Erica Rogers',
                    'Malcolm Barrett',
                    'Francis Strickland',
                    'Joel Cooper',
                ],
                jobTitle: 'Sales Executive',
                employmentType: 'Permanent',
            },
        ];
        this.groupDefaultExpanded = -1;
        this.getDataPath = (data) => {
            return data.orgHierarchy;
        };
    },
    methods: {
    },
}
</script>

<style scoped>

</style>