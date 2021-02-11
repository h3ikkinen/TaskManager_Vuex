<template>
    <div class="new-note">
        <label>Title</label>
        <div>
            <input 
                type="text" 
                v-model="name"
            />
        </div>
        <p class="error" v-show="field">
            field is required!
        </p>
        <label >Description</label>
        <div>
            <textarea
                v-model="descr"
            ></textarea>
        </div>
        <h2 class="inpTitle">Choose the importance of the note</h2>
        <div class="radio">

            <div class="input__container">
                <input type="radio" id="Default" value="Default" v-model="priority">
                <label for="Default">Default</label>
            </div>
            <div class="input__container">
                <input type="radio" id="medium" value="medium" v-model="priority">
                <label for="medium">Medium</label>
            </div>
            <div class="input__container">
                <input type="radio" id="hard" value="hard" v-model="priority">
                <label for="hard">Hard</label>
            </div>
        </div>
        <div>Choose: {{ priority }}</div>
        <button @click="addNote" class="btn btnPrimary">New Task</button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            field: false,
            name: '',
            descr: '',
            time: '',
            priority: 'Default',
        }
    },
    methods: {
        addNote () {
            if (this.name == "") {
                this.field = true
            } else {
                this.field = false
                const newTask = {
                    name: this.name,
                    descr: this.descr,
                    time: new Date(Date.now()).toLocaleString(),
                    priority: this.priority
                }
                this.$store.dispatch('addTask', newTask)
                this.name = ''
                this.descr = ''
                this.priority = 'Default'
            }
        }   
    }
}
</script>

<style lang="scss" scoped>
    .new-note {
        text-align: center;
        margin-top: 2rem;
    }
    .error {
        color: red;
        margin-bottom: 1rem;
        margin-top: -1rem;
    }
    .radio {
        width: 100%;
        display: flex;
        justify-content: space-around;
        margin-top: 1rem;
        .input__container {
            width: 25%;
            display: flex;
            flex-direction: column-reverse;
            align-items: center;
        }
    }
    .btn {
        margin-top: 1rem;
    }
    .inpTitle {
        margin-top: 1rem;
    }
</style>