<template>
    <div class="TaskList">
        <h1>Task List</h1>
        <div class="grid">
            <span @click="grid = false"  v-bind:class="{active: !grid}">
                grid
            </span>
            <span @click="grid = true" v-bind:class="{active: grid}">
                column
            </span>
        </div>
        <div class="taskList__wrapper">
            <Task 
                :grid="grid"
                v-for="(task, index) in notes" :key="index"
                :id="index"
                :task="task"
                @taskDelete="taskDelete(index)"
            />
        </div>
    </div>
</template>

<script>
import Task from '@/components/UI/Task.vue'
export default {
    components: {
        Task
    },
    props: {
        notes: {
            type: Array,
            required: true,
        },
    },
    data () {
        return {
            TaskList: null,
            grid: false, 

        }
    },
    methods: {
        taskDelete (index) {
            this.$store.dispatch('deleteTask', index)
        }
    }
}
</script>

<style lang="scss" scoped>
    .grid {
        margin: 1rem;
        span {
            margin-left: 1rem;
            margin-right: 1rem;
        
            cursor: pointer;
            &:hover {
                color: blue;
            }
            &.active {
                color: blue;
            }
        }
    }
    .TaskList {
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-top: 2rem;
        h1 {
            color: blue;
            font-size: 38px;

        }
    }
    .taskList__wrapper {
        margin-top: 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;
    }
</style>