const app = Vue.createApp({
  data() {
      return {
          users: []
      };
  },
  created() {
      this.fetchUsers();
  },
  methods: {
      fetchUsers() {
          axios.get('https://jsonplaceholder.typicode.com/users')
              .then(response => {
                  this.users = response.data;
              })
              .catch(error => {
                  console.error('Error fetching users:', error);
              });
      },
      getAddress(address) {
          return `${address.city}-${address.street}(${address.zipcode})`;
      }
  }
});
app.mount('#app');
