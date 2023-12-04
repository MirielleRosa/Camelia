<template>
  <div
    class="relative bg-grey-white w-full h-[1203px] overflow-hidden text-center text-xl text-gray1-1500 font-roboto"
  >
    <div class="absolute top-[32px] left-[-11px] w-[100%] h-[119px]">
      <div
        class="absolute top-[28px] left-[45%] flex flex-row items-start justify-start gap-[50px]"
      >
        <div class="relative cursor-pointer" @click="onIncioTextClick">
          Início
        </div>
        <div class="relative cursor-pointer" @click="onServiosTextClick">
          Serviços
        </div>
      </div>
      <img
        class="absolute top-[0px] left-[68px] w-[129px] h-[99px] overflow-hidden cursor-pointer"
        alt=""
        src="/group-7-12.svg"
        @click="onGroup71Click"
      />
      <div
        class="absolute top-[118.5px] left-[-0.5px] box-border w-[100%] h-px border-t-[1px] border-solid border-gray1-1500"
      />
    </div>
    <div
      class="absolute top-[191px] left-[154px] text-29xl text-darkslategray-200 text-left"
    >
      Meus Pedidos
    </div>
    <div class="absolute top-[60px] right-[37%] w-[134px] h-[32.5px]">
      <div class="absolute top-[0px] left-[4px]">Meus Pedidos</div>
      <img
        class="absolute top-[32px] left-[0px] w-[134px] h-px"
        alt=""
        src="/line-232.svg"
      />
    </div>
    <div
      class="absolute w-full right-[0px] bottom-[-363px] left-[0px] h-[535px] text-left text-mini text-grey-white font-regular"
    >
      <div
        class="absolute w-full right-[0px] bottom-[359.4px] left-[0px] bg-gray1-1500 h-[175.6px]"
      />
      <div
        class="absolute top-[458.4px] left-[487px] h-[76.6px] flex flex-row items-center justify-start gap-[30px]"
      >
        <div class="relative w-[99px] h-[75px] text-5xl font-judson">
          <img
            class="absolute top-[51px] left-[14px] w-[60px] h-6"
            alt=""
            src="/vector-3.svg"
          />
          <div
            class="absolute top-[25px] left-[0px] leading-[100%] inline-block w-[99px] h-[23px]"
          >
            CAMÉLIA
          </div>
          <img
            class="absolute top-[0px] left-[14px] w-[60px] h-[25px]"
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
        <div class="relative leading-[19px]">Termos de Uso</div>
      </div>
    </div>
    <div
      class="absolute top-[1082px] right-[37%] flex flex-row items-center justify-start gap-[30px] text-left text-mini text-grey-white font-regular"
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
    <img
      class="absolute top-[411px] left-[45%] w-[200px] h-[52px] object-cover"
      alt=""
      src="/image54@2x.png"
    />
    <img
      class="absolute top-[480px] left-[50%] w-[200px] h-[52px] object-cover"
      alt=""
      src="/image54@2x.png"
    />
    <img
      class="absolute top-[549px] left-[45%] w-[200px] h-[53px] object-cover"
      alt=""
      src="/image55@2x.png"
    />
    <div
      class="absolute top-[662px] left-[42%] leading-[16px] inline-block w-[363px] h-[21px]"
    >
      Nenhum pedido aberto
    </div>
    <div
      class="absolute top-[711px] left-[25%] text-base leading-[24px] text-darkgray-600 inline-block w-[966px] h-[63px]"
    >
      Que tal escolhermos um serviço e abrirmos um pedido para receber
      orçamentos? Lembrando que é totalmente sem compromisso e você só paga após
      o serviço ser realizado!
    </div>
    <div
      class="absolute top-[839px] left-[60%] text-base leading-[24px] font-quicksand text-grey-white inline-block w-[150px] h-8"
    >
      Explorar serviços
    </div>
    <div
      class="absolute top-[842px] left-[472px] w-[449px] h-[80.3px] cursor-pointer text-grey-white"
      @click="onGroupContainer6Click"
    >
      <div class="absolute top-[0px] left-[0px] w-[449px] h-[80.3px]">
        <div
          class="absolute top-[0px] left-[65%] rounded-xl bg-gray1-1500 w-[449px] h-[80.3px]"
        />
        <div
          class="absolute w-[86.19%] top-[calc(50%_-_14.15px)] left-[70%] tracking-[0.25px] leading-[28px] inline-block h-7"
        >
          EXPLORAR SEVIÇOS
        </div>
      </div>
    </div>
    <div
      class="absolute top-[287px] left-[154px] w-[390px] h-6 text-left text-lg text-lightgray-300"
    >
      <div
        class="absolute top-[0px] left-[0px] leading-[24px] text-mediumaquamarine-100 inline-block w-[92px]"
      >
        Abertos (0)
      </div>
      <div
        class="absolute top-[0px] left-[122px] leading-[24px] inline-block w-[117px]"
      >
        Concluídos (0)
      </div>
      <div
        class="absolute top-[0px] left-[269px] text-mid leading-[24px] inline-block w-[121px]"
      >
        Cancelados (0)
      </div>
    </div>
    <div class="absolute top-[32px] left-[80%] w-[236px] h-[65px] text-6xl">
      <div class="absolute top-[0px] left-[0px] w-[206px] h-[65px]">
        <div class="absolute top-[23px] left-[97px]">Francisco</div>
        <div
          class="absolute top-[0px] left-[0px] rounded-[50%] bg-gray1-1500 w-[67px] h-[65px]"
        />
        <div
          class="absolute top-[0px] left-[21px] text-21xl font-medium font-ibm-plex-serif text-grey-white"
        >
          F
        </div>
      </div>
      <img
        class="absolute h-2/5 w-[12.71%] top-[38.46%] right-[0%] bottom-[21.54%] left-[87.29%] max-w-full overflow-hidden max-h-full cursor-pointer"
        alt=""
        src="/arrow--caret-down-md4.svg"
        :onClick="openPopUpSair"
      />
    </div>
    <div class="absolute top-[32px] left-[1142px] w-[206px] h-[65px] text-6xl">
     
    </div>
  </div>
  <div v-if="isPopUpSairOpen">
    <PortalPopup
      overlayColor="rgba(113, 113, 113, 0.3)"
      placement="Centered"
      :relativeLayerRef="$refs[arrowCaretDownMDRef]"
      :onOutsideClick="closePopUpSair"
    >
      <PopUpSair :onClose="closePopUpSair" />
    </PortalPopup>
  </div>
</template>
<script>
  import { defineComponent } from "vue";
  import PopUpSair from "../components/PopUpSair.vue";
  import PortalPopup from "../components/PortalPopup.vue";

  export default defineComponent({
    name: "TelaInicialCliente",
    data() {
      return { isPopUpSairOpen: false };
    },
    components: { PopUpSair, PortalPopup },
    methods: {
      onIncioTextClick() {
        this.$router.push("/pagina-inicial-cliente");
      },
      onServiosTextClick() {
        this.$router.push("/servios1");
      },
      onGroup71Click() {
        this.$router.push("/pagina-inicial-cliente");
      },
      onSobreTextClick() {
        this.$router.push("/sobre");
      },
      onGroupContainer6Click() {
        this.$router.push("/servios1");
      },
      openPopUpSair() {
        this.isPopUpSairOpen = true;
      },
      closePopUpSair() {
        this.isPopUpSairOpen = false;
      },
    },
  });
</script>
