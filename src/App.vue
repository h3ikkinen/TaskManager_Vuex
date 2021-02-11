<template>
  <div id="app">
    <div class="wrapper">
        <div class="container">
            <AddTask />
            <Search
              :value="search" 
              placeholder="Find your note" 
              @search="search = $event"
            />
            <TaskList
              :notes="notesFilter"
            />
        </div>
    </div>
  </div>

</template>

<script>
import TaskList from '@/components/TaskList.vue';
import AddTask from '@/components/addTask.vue';
import Search from '@/components/Search.vue';
export default {
  
  components: {
    TaskList,
    AddTask,
    Search
  },
  data () {
    return {
      search: '',
      notes: null
    }
  },
  created () {
      this.notes = this.$store.getters.getTaskList
  },
  computed: {
    notesFilter() {
      let array = this.notes,
          search = this.search;
      if (!search) return array;
      // small 
      search = search.trim().toLowerCase();
      // Filter 
      array = array.filter(function(item) {
        if (item.name.toLowerCase().indexOf(search) !== -1) {
          return item;
        }
      })
      return array;
    }
  },
  methods: {
    inputHide(e) {
      
      if (!e.target.classList.contains('titleEdit') && !e.target.classList.contains('noteTitle')) {
        
      }

    },
  }



}
</script>
