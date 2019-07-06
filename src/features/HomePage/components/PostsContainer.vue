<template>
    <div class="posts">
        <Header msg="Current posts:" />
        <v-data-table v-if="!this.$store.state.isLoading" :pagination.sync="pagination" :headers="headers" :items="posts" class="elevation-1">
            <template v-slot:items="props">
                <td class="text-xs-left">{{ props.item.userId }}</td>
                <td class="text-xs-left">{{ props.item.id }}</td>
                <td class="text-xs-left">{{ props.item.title }}</td>
            </template>
        </v-data-table>
    </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/shared/Header.vue'

export default {
  name: 'PostsContainer',
  data () {
    return {
      pagination: {
        ascending: true,
        sortBy: 'userId',
        rowsPerPage: 5,
        page: 1
      },
      headers: [
        {
          text: 'User ID', value: 'userId'
        },
        { text: 'ID', value: 'id' },
        { text: 'Title', value: 'title' }
      ]
    }
  },
  computed: {
    posts () {
      return this.$store.state.posts
    }
  },
  components: {
    Header
  }
}
</script>

<style>
.posts {
    margin: 20px;
    color: white;
}
</style>
