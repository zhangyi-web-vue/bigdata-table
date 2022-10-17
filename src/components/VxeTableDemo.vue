<template>
    <vxe-table
            show-overflow
            :show-header="true"
            height="500"
            ref="xTable"
            :tree-config="{transform: true}"
            :scroll-y="{mode: 'wheel',gt: 20}"
            :edit-config="{trigger: 'click', mode: 'row', showStatus: true}"
            :loading="loading"
            :data="tableData">
        <vxe-column type="seq" width="200" tree-node></vxe-column>
        <vxe-column field="name" title="Name" :filters="[{label: '名称1', value: '父节点2'}, {label: '名称2', value: '父节点10'}]"></vxe-column>
        <vxe-column field="size" title="Size" sortable></vxe-column>
        <vxe-column field="type" title="Type"></vxe-column>
        <vxe-column field="date" title="Date"></vxe-column>
    </vxe-table>
</template>

<script>
import VXETable from 'vxe-table'
export default {
    name: "VxeTableDemo",
    data() {
        return {
            loading: false,
            tableData: []
        }
    },
    created() {
        this.loading = true;
        setTimeout(() => {
            this.tableData = this.mockData(200,100);
            this.loading = false;
            const startTime = Date.now();
            this.$nextTick(() => {
                VXETable.modal.message({ content: `渲染 ${2000*100} 行，用时 ${Date.now() - startTime}毫秒`, status: 'info' })
            })
        }, 200)

    },
    methods: {
        mockData(rowSize, nodeSize) {
            let list = [];
            for (let i = 0; i < rowSize; i++) {
                //子节点
                for (let j = 0; j < nodeSize; j++) {
                    list.push({
                        id: `son-${i}`,
                        parentId: `parent-${i}`,
                        name: `子节点${i}`,
                        type: 'mp4',
                        size: Math.floor(Math.random() * 1000),
                        date: '2022-08-01'
                    })
                }
                list.push({
                    id: `parent-${i}`,
                    parentId: null,
                    name: `父节点${i}`,
                    type: 'mp3',
                    size: Math.floor(Math.random() * 1000),
                    date: '2020-08-01'
                })
            }
            return list
        }
    }
}
</script>

<style scoped>

</style>