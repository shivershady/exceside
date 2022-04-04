<template>
  <div class="app">
    <form class="addNote">
      <label for="title">Tiêu đề</label>
      <input type="text" id="title" v-model="title">
      <label for="content">Nội dung</label>
      <input type="text" id="content" v-model="content">
      <button @click="addNote()">Thêm note</button>
    </form>
    <div class="list-note" v-for="(noteItem,noteIndex) in listNote" :key="noteIndex">
      <div class="note-item">
        <div class="title">Tiêu đề : {{ noteItem.title }}</div>
        <div class="content">Nội dung : {{ noteItem.content }}</div>
        <div class="input-box">
          Tiêu đề :<input type="text" v-model="title">
          Nội dung: <input type="text" v-model="content">
        </div>
        <div class="btn">
          <button class="update" @click="updateNote(noteItem.id,title,content)">Sửa</button>
          <button class="delete" @click="deleteNote(noteItem.id)">Xoa</button>
        </div>
      </div>
    </div>
    <div class="search">
      <input type="number" v-model="idSearch">
      <button @click="findByIdNote(idSearch)">Search</button>
      <div class="title-by-id">Tiêu đề: {{titleFindById}}</div>
      <div class="content-by-id">Nội dung: {{contentFindById}}</div>
    </div>
  </div>
</template>

<script>
import VModal from 'vue-js-modal';

export default {
  data() {
    return {
      listNote: [],
      title: '',
      content: '',
      show: true,
      idSearch: 1,
      titleFindById: '',
      contentFindById: ''
    }
  },
  methods: {
    getListNoteApi() {
      fetch('http://192.168.1.38/note_cy/hieu/listNote.php', {
            method: 'GET',
          }
      )
          .then(response => response.json())
          .then(data => {
            this.listNote = [...data];
          })
          .catch(error => console.log(error))
    },

    addNote() {
      const formData = new FormData();
      formData.append("title", this.title);
      formData.append("content", this.content);
      fetch('http://192.168.1.38/note_cy/hieu/addNote.php', {
            method: 'POST',
            body: formData,
          }
      )
          .then(() => {
                alert('Thêm thành công');
                this.getListNoteApi();
              }
          )
          .catch(error => console.log(error))
    },
    deleteNote(noteId) {
      const formData = new FormData();
      formData.append("id", noteId);
      fetch('http://192.168.1.38/note_cy/hieu/deleteNote.php', {
            method: 'POST',
            body: formData,
          }
      )
          .then(() => {
                alert('Xoá thành công');
                this.getListNoteApi();
              }
          )
          .catch(error => console.log(error))
    },
    updateNote(noteId, titleNote, contentNote) {
      const formData = new FormData();
      formData.append("id", noteId);
      formData.append("title", titleNote);
      formData.append("content", contentNote);
      fetch('http://192.168.1.38/note_cy/hieu/updateNote.php', {
            method: 'POST',
            body: formData,
          }
      )
          .then(() => {
                alert('sửa thành công');
                this.getListNoteApi();
              }
          )
          .catch(error => console.log(error))
    },
    findByIdNote(idNote) {
      fetch(`http://192.168.1.38/note_cy/hieu/findById.php?id=${idNote}`, {
            method: 'Get',
          }
      )
          .then(response => response.json())
          .then((data) => {
            this.titleFindById = data.title;
            this.contentFindById = data.content;
          })
          .catch(error => console.log(error))
    }
  },

  mounted() {
    this.getListNoteApi();
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}


</style>