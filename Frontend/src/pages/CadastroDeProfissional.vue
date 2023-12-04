<template>
  <div
    class="relative bg-grey-white w-full h-[1481px] overflow-hidden text-center text-xl text-gray1-1500 font-roboto"
  >
    <img
      class="absolute top-[20px] left-[0px] w-[1451px] h-[131px]"
      alt=""
      src="/group-48095519.svg"
    />
    <div class="absolute w-full right-[0px] bottom-[0px] left-[0px] h-[172px]">
      <div
        class="absolute w-full right-[0px] bottom-[0px] left-[0px] bg-gray1-1500 h-[172px]"
      />
    </div>
    <div
      class="absolute top-[375px] left-[142px] w-[1273px] h-[875.3px] text-left text-darkslategray-400"
    >
      <div
        class="absolute top-[795px] left-[364px] w-[449px] h-[80.3px] cursor-pointer text-center text-grey-white"
        :onClick="openRecadoCadastroProfissional"
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
        class="absolute w-[42.8%] top-[calc(50%_-_437.65px)] right-[57.2%] left-[0%] h-[122.2px]"
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
        class="absolute w-[42.8%] top-[calc(50%_-_437.65px)] right-[6.3%] left-[50.9%] h-[122.2px]"
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
        class="absolute w-[42.8%] top-[calc(50%_-_89.65px)] right-[57.2%] left-[0%] h-[122.2px]"
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
        class="absolute w-[42.8%] top-[calc(50%_+_90.35px)] right-[57.2%] left-[0%] h-[116.2px]"
      >
        <div
          class="absolute w-[78.65%] top-[calc(50%_-_58.1px)] right-[21.35%] left-[0%] h-[39.8px]"
        >
          <div
            class="absolute w-full top-[calc(50%_-_19.9px)] left-[0%] tracking-[0.25px] leading-[28px] inline-block h-[39.8px]"
          >
            Selecione o Cargo
          </div>
        </div>
        <div class="absolute top-[39.8px] left-[0px] w-[544.8px] h-[76.4px]">
          <div
            class="absolute top-[0px] left-[0px] rounded-xl bg-grey-white box-border w-[544.8px] h-[76.4px] border-[1px] border-solid border-lightgray-200"
          />
        </div>
      </div>
      <div
        class="absolute w-[42.8%] top-[calc(50%_+_90.35px)] right-[6.3%] left-[50.9%] h-[122.2px]"
      >
        <div
          class="absolute w-[78.65%] top-[calc(50%_-_61.1px)] right-[21.35%] left-[0%] h-[41.8px]"
        >
          <div
            class="absolute w-full top-[calc(50%_-_20.9px)] left-[0%] tracking-[0.25px] leading-[28px] inline-block h-[41.8px]"
          >
            Faça upload dos documentos requiridos
          </div>
        </div>
        <div class="absolute top-[41.8px] left-[0px] w-[544.8px] h-[80.3px]">
          <div
            class="absolute top-[0px] left-[0px] rounded-xl bg-grey-white box-border w-[544.8px] h-[80.3px] border-[1px] border-solid border-lightgray-200"
          />
        </div>
      </div>
      <div
        class="absolute w-[42.8%] top-[calc(50%_-_89.65px)] right-[6.3%] left-[50.9%] h-[122.2px]"
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
        class="absolute w-[42.8%] top-[calc(50%_-_263.65px)] right-[57.2%] left-[0%] h-[122.2px]"
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
        class="absolute w-[49.1%] top-[calc(50%_-_263.65px)] right-[0%] left-[50.9%] h-[116px]"
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
      <div
        class="absolute top-[702px] left-[342px] text-mini leading-[19px] [display:-webkit-inline-box] items-center overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical] w-[551px]"
      >
        Ao criar uma conta em Camélia você concorda com os nossos termos de uso.
      </div>
      <div
        class="absolute top-[calc(50%_+_285.35px)] left-[306px] w-[17px] h-3.5"
      >
        <div
          class="absolute top-[calc(50%_-_7px)] left-[0px] rounded-10xs bg-grey-white shadow-[0px_1px_2px_rgba(0,_0,_0,_0.2)_inset] w-[17px] h-3.5"
        />
      </div>
    </div>
    <div
      class="absolute top-[172px] left-[613px] w-[202.4px] h-[181px] font-ibm-plex-serif"
    >
      <div
        class="absolute top-[0px] left-[30.8px] rounded-[50%] bg-whitesmoke-700 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[138.6px] h-[138.5px]"
      />
      <div class="absolute top-[152px] left-[0px] w-[202.4px] h-[29px]">
        <div
          class="absolute top-[0px] left-[0px] font-medium inline-block w-[202.4px] h-[29px]"
        >
          Adicionar uma foto
        </div>
      </div>
      <img
        class="absolute top-[35.8px] left-[67.1px] w-[64.9px] h-[67px]"
        alt=""
        src="/vuesaxlinearuser1.svg"
      />
    </div>
    <div
      class="absolute top-[1362px] left-[469px] flex flex-row items-center justify-start gap-[30px] text-left text-mini text-grey-white font-regular"
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
      <div class="relative leading-[19px] flex items-center w-[121px] shrink-0">
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
    <div
      class="absolute top-[1116.5px] left-[899.5px] box-border w-[103px] h-px border-t-[1px] border-solid border-gray1-1600"
    />
    <img class="relative w-[24.7px] h-[24.7px]" alt="" src="/icon14.svg" />
    <img
      class="absolute h-[2.03%] w-[2.57%] top-[65.36%] right-[54.24%] bottom-[32.61%] left-[43.19%] max-w-full overflow-hidden max-h-full"
      alt=""
      src="/arrow--chevron-down.svg"
    />
    <div class="absolute top-[69px] left-[569px] w-[435px] h-[26px]">
      <div class="absolute top-[0px] left-[0px] w-[435px] h-[26px]">
        <div class="absolute top-[0px] left-[109px]">Serviços</div>
        <div
          class="absolute top-[0px] left-[257px] inline-block w-[61px] cursor-pointer"
          @click="onSobreText1Click"
        >
          Sobre
        </div>
      </div>
      <div
        class="absolute top-[0px] left-[4px] w-[49px] h-[23px] cursor-pointer"
        @click="onGroupContainer32Click"
      >
        <div class="absolute top-[0px] left-[0px]">Início</div>
      </div>
    </div>
    <div
      class="absolute top-[40px] left-[1107px] rounded-17xl bg-gray1-1500 w-[289px] h-[65px] cursor-pointer text-grey-white"
      @click="onButtonTopContainerClick"
    >
      <div
        class="absolute top-[17px] left-[0px] leading-[153%] inline-block w-[289px]"
      >
        LOGIN
      </div>
    </div>
  </div>
  <div v-if="isRecadoCadastroProfissionalOpen">
    <PortalPopup
      overlayColor="rgba(113, 113, 113, 0.3)"
      placement="Centered"
      :relativeLayerRef="$refs[groupContainer2Ref]"
      :onOutsideClick="closeRecadoCadastroProfissional"
    >
      <RecadoCadastroProfissional :onClose="closeRecadoCadastroProfissional" />
    </PortalPopup>
  </div>
</template>
<script>
  import { defineComponent } from "vue";
  import RecadoCadastroProfissional from "../components/RecadoCadastroProfissional.vue";

  export default defineComponent({
    name: "CadastroDeProfissional",
    data() {
      return { isRecadoCadastroProfissionalOpen: false };
    },
    components: { RecadoCadastroProfissional, PortalPopup },
    methods: {
      openRecadoCadastroProfissional() {
        this.isRecadoCadastroProfissionalOpen = true;
      },
      closeRecadoCadastroProfissional() {
        this.isRecadoCadastroProfissionalOpen = false;
      },
      onSobreTextClick() {
        this.$router.push("/sobre");
      },
      onSobreText1Click() {
        this.$router.push("/sobre");
      },
      onGroupContainer32Click() {
        this.$router.push("/pagina-inicial");
      },
      onButtonTopContainerClick() {
        this.$router.push("/logincliente");
      },
    },
  });
</script>
