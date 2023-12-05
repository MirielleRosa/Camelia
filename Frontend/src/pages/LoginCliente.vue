<template>
  <div
    class="relative bg-grey-white w-full h-[1024px] overflow-hidden text-left text-xl text-darkslategray-400 font-roboto"
  >
    <img
      class="absolute top-[82px] left-[60%] rounded-tl-8xs rounded-tr-none rounded-b-none w-[720px] h-[892px] object-cover"
      alt=""
      src="/tiroisoladodesorridentefaztudocaucasianoenvelhecidocombarbaporfazeroumontadorusandocapacetedesegurancaeoculosusandorebarbadoraparacorteemoagemtrabalhopesadoconstrucaoeconceitode-2@2x.png"
    />
    <div
      class="absolute h-[calc(100%_-_564.9px)] w-[calc(100%_-_801px)] top-[261px] right-[765px] bottom-[303.9px] left-[15%] text-mini"
    >
      <div
        class="absolute top-[392.1px] left-[15%] leading-[19px] [display:-webkit-inline-box] items-center overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical] w-[316px]"
      >
        Não possui uma conta? Crie agora mesmo.
      </div>
      
      <div
        class="absolute top-[0px] left-[0px] w-[639px] h-[63px] flex flex-row items-start justify-center text-13xl text-gray1-1500"
      >
        <div class="relative inline-block w-[348px] shrink-0">
          BEM-VINDO DE VOLTA!
        </div>
      </div>
    </div>
    <img
      class="absolute top-[10px] left-[99px] w-[129px] h-[99px] overflow-hidden cursor-pointer"
      alt=""
      src="/group-7-11.svg"
      @click="onGroup71Click"
    />
    <div
      class="absolute top-[29px] left-[35%] w-[626px] h-[26px] text-center text-gray1-1500"
    >
      <div class="absolute top-[0px] left-[0px] w-[626px] h-[26px]">
        <div
          class="absolute top-[0px] left-[109px] cursor-pointer"
        >
          Serviços
        </div>
        <div
          class="absolute top-[0px] left-[247px] cursor-pointer"
        >
          Seja um profissional
        </div>
        <div
          class="absolute top-[0px] left-[489px] cursor-pointer"
          @click="onSobreTextClick"
        >
          Sobre
        </div>
      </div>
      <div
        class="absolute top-[0px] left-[5.8px] w-[70.5px] h-[23px] cursor-pointer"
        @click="onGroupContainer1Click"
      >
        <div class="absolute top-[0px] left-[0px] inline-block w-[70.5px]">
          Início
        </div>
      </div>
    </div>
    <div
      class="absolute top-[367px] left-[18%] w-[560.4px] h-[441.1px] text-gray1-1000"
    >
   
<button class="absolute top-[360.5px] left-[4.1px] w-[556.3px] h-[80.7px] cursor-pointer text-center text-grey-white relative" @click="verificarLogin()">
  <div class="absolute top-0 left-0 w-full h-full rounded-xl bg-gray1-1500"></div>
  <span class="absolute w-86.05% top-[35%] left-[45%] inline-block tracking-[0.25px] text-center leading-[28px] text-white">
    ENTRAR
  </span>
</button>


      <div class="absolute top-[0px] left-[0px] w-[556.1px] h-[96.2px] ">
        <div class="absolute top-[0px] left-[0px] w-[556.1px] h-[96.2px] ">
          <div
            class="absolute top-[0px] left-[0px] rounded-xl bg-grey-white box-border border-gray-300 w-[556.1px] h-[96.2px] border-[1px] border-solid border-lightgray-500"
          />
        </div>
        <div
          class="absolute w-[78.65%] top-[calc(50%_-_12px)] right-[15.46%] left-[8.88%] h-[50.1px]"
        >
        
          <input v-model="email" class="absolute w-full top-[calc(50%_-_35.05px)] left-[0%] tracking-[0.25px] leading-[28px] inline-block h-[50.1px]" type="email" placeholder="E-mail">
          
        </div>
      </div>
      <div class="absolute top-[144.9px] left-[1px] w-[556.1px] h-[96.2px]">
        <div class="absolute top-[0px] left-[0px] w-[556.1px] h-[96.2px] ">
          <div
            class="absolute top-[0px] left-[0px] rounded-xl bg-grey-white box-border border-gray-300 w-[556.1px] h-[96.2px] border-[1px] border-solid border-lightgray-500"
          />
        </div>
        <div
          class="absolute w-[78.65%] top-[calc(50%_-_12px)] right-[17.68%] left-[8.67%] h-[50.1px]"
        >
        <input v-model="senha" class="absolute w-full top-[calc(50% - 25.05px)] left-[0%] tracking-[0.25px] leading-[28px] inline-block h-[50.1px] bg-transparent" type="password" placeholder="Senha" style="caret-color: transparent;">
                  </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { defineComponent } from "vue";
  import axios from 'axios';


  export default defineComponent({
    name: "LoginCliente",

    data() {
      return {
        email: '',
        senha: '',
        errorMessage: '', // Nova propriedade para armazenar mensagens de erro
      };
    },

    methods: {
      onGroup71Click() {
        this.$router.push("/");
      },
      onServiosTextClick() {
        this.$router.push("/servios");
      },
      onSejaUmProfissionalClick() {
        this.$router.push("/cadastro-de-profissional");
      },
      onSobreTextClick() {
        this.$router.push("/sobre");
      },
      onGroupContainer1Click() {
        this.$router.push("/");
      },
      onGroupContainer4Click() {
        this.$router.push("/tela-inicial-cliente");
      },

      verificarLogin() {
  console.log('verificarLogin foi chamado');

  const requestData = {
    email: this.email,
    senha: this.senha,
  };

  axios.get('http://localhost:3000/login', { params: requestData })
    .then(response => {
      console.log('Resposta do Servidor:', response);

      if (response.data.loginValido ) {
        console.log('O login é válido');
        console.log('Detalhes do Usuário:', response.data.usuario);
        if(response.data.usuario.user === 'Funcionario'){
          this.$router.push('/dashboard-profissional')
        } else if (response.data.usuario.user === 'Cliente'){
          this.$router.push('/tela-inicial-cliente')
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


  });
</script>
