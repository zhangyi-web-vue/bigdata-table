<template>
    <ve-table style="width: 900px; border-radius: 10px"
              :columns="columns"
              max-height="80vh"
              :show-header="true"
              :virtual-scroll-option="virtualScrollOption"
              row-key-field-name="rowKey"
              :table-data="tableData" />
</template>

<script>

export default {
    name: "TableDemo",
    data() {
        return {
            virtualScrollOption: {
                // 是否开启
                enable: true,
            },
            columns: [
                {
                    field: "index",
                    key: "a",
                    title: "#",
                    width: 100,
                    align: "left",
                },
                {
                    field: "name",
                    key: "b",
                    title: "Name",
                    width: 200,
                    align: "left",
                },
                {
                    field: "hobby",
                    key: "c",
                    title: "Hobby",
                    width: 300,
                    align: "left",
                },
                {
                    field: "address",
                    key: "d",
                    title: "Address",
                    width: "",
                    align: "left",
                },
            ],
            tableData: [],
            /*columns: [
                { field: "name", key: "a", title: "Name", align: "center", operationColumn: true,edit: true},
                { field: "date", key: "b", title: "Date", align: "left"},
                {
                    field: "hobby",
                    key: "c",
                    title: "Hobby",
                    align: "right",
                },
                {
                    field: "address",
                    key: "d",
                    title: "Address",
                    operationColumn: true,
                },
            ],
            tableData: [
                {
                    name: "John",
                    date: "1900-05-20",
                    hobby: "coding and coding repeat",
                    address: "No.1 Century Avenue, Shanghai",
                },
                {
                    name: "Dickerson",
                    date: "1910-06-20",
                    hobby: "coding and coding repeat",
                    address: "No.1 Century Avenue, Beijing",
                },
                {
                    name: "Larsen",
                    date: "2000-07-20",
                    hobby: "coding and coding repeat",
                    address: "No.1 Century Avenue, Chongqing",
                },
                {
                    name: "Geneva",
                    date: "2010-08-20",
                    hobby: "coding and coding repeat",
                    address: "No.1 Century Avenue, Xiamen",
                },
                {
                    name: "Jami",
                    date: "2020-09-20",
                    hobby: "coding and coding repeat",
                    address: "No.1 Century Avenue, Shenzhen",
                },
            ],*/
        }
    },
    methods: {
        initData() {
            let data = [];
            for (let i = 0; i < 10000; i++) {
                data.push({
                    rowKey: i,
                    index: i,
                    name: `name${i}`,
                    hobby: `hobby${i}`,
                    address: `address${i}`,
                });
            }

            this.tableData = data;
        },
    },
    created() {
        this.initData();
    },

}
</script>

<style scoped>

</style>