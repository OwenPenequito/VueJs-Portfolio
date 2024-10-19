<template>
  <div class="contact-page">
    <div class="row">
      <div class="col-md-6 description">
        <h2>Get in Touch</h2>
        <p>
          Feel free to contact me through this page! I will be gladly read the message and talk about the possible opportunity on working with you.
        </p>
      </div>

      <!-- Contact Form: This is the container for the contact form in the contact page. -->
      <div class="col-md-6">
        <form @submit.prevent="submitForm">
          <!-- Name Input: Used to input name -->
          <div class="form-group">
            <label for="name"><strong>Name:</strong></label>
            <input 
              type="text" 
              id="name" 
              v-model="name" 
              class="form-control" 
              placeholder="Enter your name" 
              required
            />
          </div>

          <!-- Email Input: Used to input a valid email address -->
          <div class="form-group">
            <label for="email"><strong>Email:</strong></label>
            <input 
              type="email" 
              id="email" 
              v-model="email" 
              class="form-control" 
              placeholder="Enter your email" 
              required
            />
            <!-- This message is seen under the email input area. If the email is not valid the submit button will be disabled. -->
            <span v-if="!isValidEmail" class="error-message">Please enter a valid email address</span>
          </div>

          <!-- Subject: Used to input the subject -->
          <div class="form-group">
            <label for="subject"><strong>Subject:</strong></label>
            <textarea 
              id="subject" 
              v-model="subject" 
              class="form-control" 
              placeholder="Subject" 
              required
            ></textarea>
          </div>

          <!-- Message Input: Used to input a message -->
          <div class="form-group">
            <label for="message"><strong>Message:</strong></label>
            <textarea 
              id="message" 
              v-model="message" 
              class="form-control" 
              rows="5" 
              placeholder="Enter your message" 
              required
            ></textarea>
          </div>

          <!-- Submit Button: This button will be disabled if the form is not valid -->
          <button type="submit" class="btn btn-primary" :disabled="!isFormValid">Send Message</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  },
  computed: {
    isValidEmail() {
      // Validates the email if the input has a pattern such as  username@gmail.com
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(this.email);
    },
    isFormValid() {
      // The form is valid only if all fields are filled and the email is valid
      return this.name && this.isValidEmail && this.message && this.subject;
    }
  },
  methods: {
    submitForm() {
      // Simulating a message submission
      alert(`Message sent from ${this.name} (${this.email}, ${this.subject}): ${this.message}`);

      // Clear the form after submission
      this.name = '';
      this.email = '';
      this.message = '';
      this.subject = '';
    }
  }
};
</script>

<style scoped>
.contact-page {
  max-width: 1200px;
  margin: 50px auto;
  padding: 20px;
  background-color: gray;  
  border: 1px solid #ddd;
  border-radius: 8px;
}

.description {
  padding: 20px;
  padding-top: 200px;
  background-color: gray;
  border-right: 1px solid #ddd;
  font-family: cursive;
}

.form-group {
  margin-bottom: 15px;
}

.form-control {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.btn {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn:disabled {
  background-color: #ccc;
}

.error-message {
  color: white;
  font-size: 12px;
}
</style>
