<template>
    <div v-bind:class="{ note: true, hard: task.priority == 'hard', medium: task.priority == 'medium', full: grid }" >
        <div class="note-header">
            <h2 @click="inputShowMt(id)" class="noteTitle">{{ task.name }}</h2>
            <input 
              ref="title"
              :class="{active: inputShow}"
              v-on:keyup.enter="editTitleTask(id, val)" 
              v-on:keyup.esc="inputShow = false" 
              v-model="val" 
              type="text" 
              class="titleEdit"  
            >
            <p @click="$emit('taskDelete')" style="cursor: pointer">x</p>
        </div>
        <div class="note-body">
            <p>
                {{ task.descr }}
            </p>
            <span>
                {{ task.time }}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    data () {
      return {
        focused: false,
        val: '',
        inputShow: false
      }
    },
    props: {
        task: {
            type: Object,
            required: true,
        },
        grid: {
            type: Boolean,
            required: true,
        },
        id: {
          type: Number,
          required: true,
        }
    },
    methods: {
      inputShowMt() {
        this.inputShow = true;
        this.val = this.task.name
        let input = this.$refs.title;
        this.$nextTick(() => {
          input.focus();
        });
      },
      editTitleTask(id, val) {
        let payment = {
          id, val
        }
        this.$store.dispatch('editTitleTask', payment)
          this.inputShow = false;
      }
    },
};
</script>

<style lang="scss" scoped>
.note {
  width: 48%;
  padding: 18px 20px;
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 5px;
  &.full {
    width: 100%;
  }
  &.hard {
    background-color: red;
    color: #fff;
    h2,
    input {
      color: #fff;
    }
    span {
      color: #fff;
    }
  }
  &.medium {
    background-color: orange;
    color: #fff;
    h2,
    input {
      color: #fff;
    }
    span {
      color: #fff;
    }
  }
}
.note-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  input {
    position: absolute;
    left: 0;
    top: 2px;
    z-index: 0;
    visibility: hidden;
    opacity: 0;
    color: #402caf;
    font-size: 32px;
    font-weight: 600;
    z-index: 40;
    width: 100%;
    height: 40px;
    border-radius: 0;
    padding: 0;
    outline: none;
    border: none;
    box-shadow: none;
    &.red {
        color: red;
    }
    &.active {
      visibility: visible;
      opacity: 1;
      color: #402caf;
      font-size: 32px;
      font-weight: 600;
      z-index: 40;
    }
  }
  h2 {
    display: block;
    font-size: 32px;
    z-index: 30;
    cursor: pointer;
  }
  h2 {
    color: #402caf;
    font-weight: 600;
  }
  svg {
    margin-right: 12px;
    color: #999999;
    cursor: pointer;
    &.active {
      color: #402caf;
    }
    &:last-child {
      margin-right: 0;
    }
  }
}
.note-body {
  p {
    margin: 20px 0;
  }
  span {
    font-size: 14px;
    color: #999;
  }
}
</style>