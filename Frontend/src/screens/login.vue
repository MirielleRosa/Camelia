<template>
  <div class="login-prestador-de">
    <div class="center-container">
    <div class="overlap-wrapper">
      <div class="overlap">
        <div class="rectangle" />
        <div class="div" />
        <div class="group">
          <img class="img" alt="Group" src="https://c.animaapp.com/F5f4Yjvp/img/group-7-1.svg" />
          <img class="line" alt="Line" src="https://c.animaapp.com/F5f4Yjvp/img/line-21.svg" />
        </div>
        <div class="group-2">

          <div class="group-wrapper">
            <div class="overlap-group-wrapper">
                <button class="payments overlap-group" @click="verificarLogin">ENTRAR</button>
      
            </div>
          </div>

           <div class="div-wrapper">
            <div class="payments-wrapper">
              <input v-model="email" class="text-wrapper" type="email" placeholder="E-mail">
            </div>
          </div>
          <div class="group-3">
            <div class="group-4">
            <input v-model="senha" class="payments-2" type="senha" placeholder="Senha">
            </div>
          </div>
        </div>
        <div class="frame-wrapper">
          <div class="frame">
            <img class="group-5" alt="Group" src="https://c.animaapp.com/F5f4Yjvp/img/group-8.svg" />
            <div class="text-wrapper-2">Central de Ajuda</div>
            <div class="text-wrapper-3">Termos de Uso</div>
            <div class="text-wrapper-3">Termos de Uso</div>
          </div>
        </div>
        <div class="group-6">
          <div class="overlap-2">
            <div class="frame-2">
              <div class="text-wrapper-4">Serviços</div>
              <div class="text-wrapper-5">Seja um profissional</div>
            </div>
            <div class="group-7">
              <div class="text-wrapper-6">Início</div>
            </div>
          </div>
        </div>
        <p class="p">Não possui uma conta? Crie agora mesmo.</p>
        <img class="line-2" alt="Line" src="https://c.animaapp.com/F5f4Yjvp/img/line-25.svg" />
        <div class="frame-3">
          <div class="text-wrapper-7">BEM-VINDO DE VOLTA!</div>
        </div>
        <img
          class="tiro-isolado-de"
          alt="Tiro isolado de"
          src="https://c.animaapp.com/F5f4Yjvp/img/tiro-isolado-de-sorridente-faz-tudo-caucasiano-envelhecido-com-b.png"
        />
      </div>
    </div> 
  </div>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: "login",
  data() {
  return {
    email: '',
    senha: '',
    errorMessage: '', // Nova propriedade para armazenar mensagens de erro
  };
},


methods: {
  
  verificarLogin() {
  console.log('verificarLogin foi chamado');

  const requestData = {
    email: this.email,
    senha: this.senha,
  };

  axios.get('http://localhost:3000/login', { params: requestData })
    .then(response => {
      console.log('Resposta do Servidor:', response);

      if (response.data.loginValido) {
        console.log('O login é válido');
        console.log('Detalhes do Usuário:', response.data.usuario);
        if (this.$router.currentRoute.path !== '/dashboard') {
          this.$router.push('/dashboard')
        }
      } else {
        this.errorMessage = response.data.message;
      }
    })
    .catch(error => {
      console.error('Erro:', error);

      if (error.response) {
        console.error('Dados da Resposta do Servidor:', error.response.data);
        this.errorMessage = 'Erro de login: ' + error.response.data.message;
      }
    });
},



},

};

</script>

<style scoped>
@import "../../public/login.css";
</style>