<template>
  <div
    class="relative bg-grey-white w-full h-[1203px] overflow-hidden text-left text-xl text-grey-white font-roboto"
  >
    <div
      class="absolute top-[20px] left-[-11px] w-[1451px] h-[131px] text-center"
    >
      <div
        class="absolute top-[17px] left-[1108px] rounded-17xl bg-gray1-1500 w-[289px] h-[65px] cursor-pointer"
        @click="onButtonTopContainerClick"
      >
        <div
          class="absolute top-[17px] left-[0px] leading-[153%] inline-block w-[289px]"
        >
          LOGIN
        </div>
      </div>
      <img
        class="absolute top-[0px] left-[57px] w-[129px] h-[99px] overflow-hidden cursor-pointer"
        alt=""
        src="/group-7-13.svg"
        @click="onGroup71Click"
      />
      <div
        class="absolute top-[130.5px] left-[-0.5px] box-border w-[1452px] h-px border-t-[1px] border-solid border-gray1-1500"
      />
    </div>
    <div
      class="absolute top-[238px] left-[111px] w-[1273px] h-[710.3px] text-darkslategray-400"
    >
      <div
        class="absolute top-[630px] left-[411px] w-[449px] h-[80.3px] cursor-pointer text-center text-grey-white"
        @click="onGroupContainer2Click"
      >
        <div class="absolute top-[0px] left-[0px] w-[449px] h-[80.3px]">
          <div
            class="absolute top-[0px] left-[0px] rounded-xl bg-gray1-1500 w-[449px] h-[80.3px]"
          />
          <div
            class="absolute w-[86.19%] top-[calc(50%_-_14.15px)] left-[6.9%] tracking-[0.25px] leading-[28px] inline-block h-7"
          >
            CADASTRAR
          </div>
        </div>
      </div>
      <div
        class="absolute w-[42.8%] top-[calc(50%_-_355.15px)] right-[57.2%] left-[0%] h-[122.2px]"
      >
        <div
          class="absolute w-[78.65%] top-[calc(50%_-_61.1px)] right-[21.35%] left-[0%] h-[41.8px]"
        >
          <div
            class="absolute w-full top-[calc(50%_-_20.9px)] left-[0%] tracking-[0.25px] leading-[28px] inline-block h-[41.8px]"
          >
            Primeiro Nome
          </div>
        </div>
        <div class="absolute top-[41.8px] left-[0px] w-[544.8px] h-[80.3px]">
          <div
            class="absolute top-[0px] left-[0px] rounded-xl bg-grey-white box-border w-[544.8px] h-[80.3px] border-[1px] border-solid border-lightgray-200"
          />
        </div>
      </div>
      <div
        class="absolute w-[42.8%] top-[calc(50%_-_355.15px)] right-[6.3%] left-[50.9%] h-[122.2px]"
      >
        <div
          class="absolute w-[78.65%] top-[calc(50%_-_61.1px)] right-[21.35%] left-[0%] h-[41.8px]"
        >
          <div
            class="absolute w-full top-[calc(50%_-_20.9px)] left-[0%] tracking-[0.25px] leading-[28px] inline-block h-[41.8px]"
          >
            Segundo Nome
          </div>
        </div>
        <div class="absolute top-[41.8px] left-[0px] w-[544.8px] h-[80.3px]">
          <div
            class="absolute top-[0px] left-[0px] rounded-xl bg-grey-white box-border w-[544.8px] h-[80.3px] border-[1px] border-solid border-lightgray-200"
          />
        </div>
      </div>
      <div
        class="absolute w-[42.8%] top-[calc(50%_-_7.15px)] right-[57.2%] left-[0%] h-[122.2px]"
      >
        <div
          class="absolute w-[78.65%] top-[calc(50%_-_61.1px)] right-[21.35%] left-[0%] h-[41.8px]"
        >
          <div
            class="absolute w-full top-[calc(50%_-_20.9px)] left-[0%] tracking-[0.25px] leading-[28px] inline-block h-[41.8px]"
          >
            Senha
          </div>
        </div>
        <div class="absolute top-[41.8px] left-[0px] w-[544.8px] h-[80.3px]">
          <div
            class="absolute top-[0px] left-[0px] rounded-xl bg-grey-white box-border w-[544.8px] h-[80.3px] border-[1px] border-solid border-lightgray-200"
          />
        </div>
      </div>
      <div
        class="absolute w-[42.8%] top-[calc(50%_-_7.15px)] right-[6.3%] left-[50.9%] h-[122.2px]"
      >
        <div
          class="absolute w-[78.65%] top-[calc(50%_-_61.1px)] right-[21.35%] left-[0%] h-[41.8px]"
        >
          <div
            class="absolute w-full top-[calc(50%_-_20.9px)] left-[0%] tracking-[0.25px] leading-[28px] inline-block h-[41.8px]"
          >
            Confirme a Senha
          </div>
        </div>
        <div class="absolute top-[41.8px] left-[0px] w-[544.8px] h-[80.3px]">
          <div
            class="absolute top-[0px] left-[0px] rounded-xl bg-grey-white box-border w-[544.8px] h-[80.3px] border-[1px] border-solid border-lightgray-200"
          />
        </div>
      </div>
      <div
        class="absolute w-[42.8%] top-[calc(50%_-_181.15px)] right-[57.2%] left-[0%] h-[122.2px]"
      >
        <div
          class="absolute w-[78.65%] top-[calc(50%_-_61.1px)] right-[21.35%] left-[0%] h-[41.8px]"
        >
          <div
            class="absolute w-full top-[calc(50%_-_20.9px)] left-[0%] tracking-[0.25px] leading-[28px] inline-block h-[41.8px]"
          >
            E-mail
          </div>
        </div>
        <div class="absolute top-[41.8px] left-[0px] w-[544.8px] h-[80.3px]">
          <div
            class="absolute top-[0px] left-[0px] rounded-xl bg-grey-white box-border w-[544.8px] h-[80.3px] border-[1px] border-solid border-lightgray-200"
          />
        </div>
      </div>
      <div
        class="absolute w-[49.1%] top-[calc(50%_-_181.15px)] right-[0%] left-[50.9%] h-[116px]"
      >
        <div
          class="absolute w-[65.42%] top-[calc(50%_-_58px)] right-[34.58%] left-[0%] h-[41.8px]"
        >
          <div
            class="absolute w-full top-[calc(50%_-_20.9px)] left-[0%] tracking-[0.25px] leading-[28px] inline-block h-[41.8px]"
          >
            Telefone
          </div>
        </div>
        <div
          class="absolute top-[36px] left-[0px] w-[625px] h-20 text-sm text-gray1-1500"
        >
          <div
            class="absolute top-[0px] left-[0px] rounded-xl bg-grey-white box-border w-[545px] h-20 border-[1px] border-solid border-lightgray-200"
          />
          <div
            class="absolute w-[12.16%] top-[calc(50%_-_15px)] left-[4.96%] tracking-[0.25px] leading-[28px] inline-block h-[55px] opacity-[0.4]"
          >
            +00
          </div>
          <div
            class="absolute w-[75.68%] top-[calc(50%_-_15px)] left-[24.32%] tracking-[0.25px] leading-[28px] inline-block h-[55px] opacity-[0.4]"
          >
            00 000 000
          </div>
        </div>
      </div>
    </div>
    <div
      class="absolute top-[calc(50%_+_220.5px)] left-[473px] rounded-10xs bg-grey-white shadow-[0px_1px_2px_rgba(0,_0,_0,_0.2)_inset] w-[17px] h-3.5"
    />
    <div
      class="absolute top-[803px] left-[504px] text-mini leading-[19px] text-darkslategray-400 [display:-webkit-inline-box] items-center overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical] w-[551px]"
    >
      Ao criar uma conta em Camélia você concorda com os nossos termos de uso.
    </div>
    <div
      class="absolute top-[844.5px] left-[919.5px] box-border w-[103px] h-px border-t-[1px] border-solid border-gray1-1600"
    />
    <div
      class="absolute w-full right-[0px] bottom-[0px] left-[0px] h-[172px] text-mini font-regular"
    >
      <div
        class="absolute w-full right-[0px] bottom-[0px] left-[0px] bg-gray1-1500 h-[172px]"
      />
      <div
        class="absolute top-[49px] left-[485px] flex flex-row items-center justify-start gap-[30px]"
      >
        <div class="relative w-[99px] h-[75px] text-5xl font-judson">
          <img
            class="absolute top-[50.5px] left-[13.5px] w-[61px] h-[25.1px]"
            alt=""
            src="/vector-3.svg"
          />
          <div
            class="absolute top-[25px] left-[0px] leading-[100%] inline-block w-[99px] h-[23px]"
          >
            CAMÉLIA
          </div>
          <img
            class="absolute top-[-0.6px] left-[13.5px] w-[61px] h-[26.1px]"
            alt=""
            src="/vector-1.svg"
          />
        </div>
        <div
          class="relative leading-[19px] flex items-center w-[121px] shrink-0"
        >
          Central de Ajuda
        </div>
        <div class="relative leading-[19px]">Termos de Uso</div>
        <div
          class="relative leading-[19px] cursor-pointer"
          @click="onSobreTextClick"
        >
          Sobre
        </div>
      </div>
    </div>
    <div
      class="absolute top-[69px] left-[396px] w-[626px] h-[26px] text-center text-gray1-1500"
    >
      <div class="absolute top-[0px] left-[0px] w-[626px] h-[26px]">
        <div
          class="absolute top-[0px] left-[109px] cursor-pointer"
          @click="onServiosTextClick"
        >
          Serviços
        </div>
        <div
          class="absolute top-[0px] left-[247px] cursor-pointer"
          @click="onSejaUmProfissionalClick"
        >
          Seja um profissional
        </div>
        <div
          class="absolute top-[0px] left-[489px] cursor-pointer"
          @click="onSobreText1Click"
        >
          Sobre
        </div>
      </div>
      <div
        class="absolute top-[0px] left-[5.8px] w-[70.5px] h-[23px] cursor-pointer"
        @click="onGroupContainer24Click"
      >
        <div class="absolute top-[0px] left-[0px] inline-block w-[70.5px]">
          Início
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "CadastroDeCliente",
    methods: {
      onButtonTopContainerClick() {
        this.$router.push("/logincliente");
      },
      onGroup71Click() {
        this.$router.push("/pagina-inicial");
      },
      onGroupContainer2Click() {
        this.$router.push("/tela-inicial-cliente");
      },
      onSobreTextClick() {
        this.$router.push("/sobre");
      },
      onServiosTextClick() {
        this.$router.push("/servios");
      },
      onSejaUmProfissionalClick() {
        this.$router.push("/cadastro-de-profissional");
      },
      onSobreText1Click() {
        this.$router.push("/sobre");
      },
      onGroupContainer24Click() {
        this.$router.push("/pagina-inicial");
      },
    },
  });
</script>
