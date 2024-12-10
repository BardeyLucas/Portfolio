<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <form @submit.prevent="submitForm" class="text-Violet">
      <input type="text" name="firstname" v-model="firstname"/>
      <input type="text" name="name" v-model="name"/>
      <input type="email" name="email"  v-model="email"/>
      <input type="text" name="object"  v-model="object"/>
      <textarea name="message" v-model="message"></textarea>
      <button type="submit">Send Message</button>
    </form>
  </template>

  <script>
  const WEB3FORMS_ACCESS_KEY = "3744730f-e212-4a67-9e52-ed816a4ea7a3";

  export default {
    data() {
      return {
        firstname: "",
        name: "",
        email: "",
        object: "",
        message: "",
      };
    },
    methods: {
      async submitForm() {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            firstname: this.firstname,
            name: this.name,
            email: this.email,
            object: this.object,
            message: this.message,
          }),
        });
        const result = await response.json();
        if (result.success) {
          console.log(result);
        }
      },
    },
  };
  </script>