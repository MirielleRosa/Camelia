<template>
  <div
    class="relative bg-grey-white w-full h-[1739px] overflow-hidden text-left text-xl text-grey-white font-roboto"
  >
    <div
      class="absolute top-[32px] left-[-11px] w-[1451px] h-[119px] text-center text-gray1-1500"
    >
      <div
        class="absolute top-[28px] left-[661px] flex flex-row items-start justify-start gap-[50px]"
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
        class="absolute top-[118.5px] left-[-0.5px] box-border w-[1452px] h-px border-t-[1px] border-solid border-gray1-1500"
      />
    </div>
    <div
      class="absolute top-[60px] left-[867px] w-[134px] h-[32.5px] text-center text-gray1-1500"
    >
      <div class="absolute top-[0px] left-[4px]">Meus Pedidos</div>
      <img
        class="absolute top-[32px] left-[0px] w-[134px] h-px"
        alt=""
        src="/line-232.svg"
      />
    </div>
    <div
      class="absolute w-full right-[0px] bottom-[-3.6px] left-[0px] h-[253.2px] text-mini font-regular"
    >
      <div
        class="absolute w-full right-[0px] bottom-[0px] left-[0px] bg-gray1-1500 h-[175.6px]"
      />
      <div
        class="absolute top-[0px] left-[487px] h-[76.6px] flex flex-row items-center justify-start gap-[30px]"
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
        <div class="relative leading-[19px]">Termos de Uso</div>
      </div>
    </div>
    <div
      class="absolute top-[1082px] left-[458px] flex flex-row items-center justify-start gap-[30px] text-mini font-regular"
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
      <div class="relative leading-[19px]">Termos de Uso</div>
    </div>
    <div
      class="absolute top-[32px] left-[1142px] w-[244.5px] h-[65px] text-center text-6xl text-gray1-1500"
    >
      <div class="absolute top-[0px] left-[0px] w-[206px] h-[65px]">
        <div class="absolute top-[23px] left-[97px]">Francisco</div>
        <div
          class="absolute top-[0px] left-[0px] rounded-[50%] bg-gray1-1500 w-[67px] h-[65px]"
        />
        <div
          class="absolute top-[6px] left-[21px] text-21xl font-medium font-ibm-plex-serif text-grey-white"
        >
          F
        </div>
      </div>
      <img
        class="absolute h-[57.85%] w-[12.07%] top-[35.38%] right-[0%] bottom-[6.77%] left-[87.93%] max-w-full overflow-hidden max-h-full cursor-pointer"
        alt=""
        src="/arrow--caret-down-md3.svg"
        :onClick="openPopUpSair"
      />
    </div>
    <div
      class="absolute top-[32px] left-[1142px] w-[206px] h-[65px] text-center text-6xl text-gray1-1500"
    >
      <div class="absolute top-[0px] left-[0px] w-[206px] h-[65px]">
        <div class="absolute top-[23px] left-[97px]">Francisco</div>
        <div
          class="absolute top-[0px] left-[0px] rounded-[50%] bg-gray1-1500 w-[67px] h-[65px]"
        />
        <div
          class="absolute top-[0px] left-[0px] rounded-[50%] bg-gray1-1500 w-[67px] h-[65px]"
        />
        <div
          class="absolute top-[6px] left-[21px] text-21xl font-medium font-ibm-plex-serif text-grey-white"
        >
          F
        </div>
      </div>
    </div>
    <div
      class="absolute top-[198px] left-[72px] text-[45px] text-dimgray-200 inline-block w-[571px] h-[46px]"
    >
      Dados Pessoais
    </div>
    <div
      class="absolute top-[257px] left-[72px] text-base text-dimgray-400 inline-block w-[562px] h-[22px]"
    >
      <p class="m-0">Altere seus dados e mantenha o seu perfil atualizado!</p>
    </div>
    <div
      class="absolute top-[306px] left-[64px] bg-grey-white box-border w-[1287px] h-[1228px] border-[1px] border-solid border-silver"
    />
    <img
      class="absolute top-[381px] left-[250px] w-[282px] h-[267px]"
      alt=""
      src="/vuesaxlinearprofilecircle.svg"
    />
    <img
      class="absolute top-[252px] left-[492px] w-6 h-6"
      alt=""
      src="/vuesaxbrokenprofilecircle.svg"
    />
    <div
      class="absolute top-[648px] left-[320px] text-11xl text-lightseagreen-100 inline-block w-[151px] h-[26px]"
    >
      Alterar foto
    </div>
    <div
      class="absolute top-[780px] left-[122px] w-[512px] h-[111.3px] text-dimgray-300"
    >
      <div class="absolute top-[31px] left-[0px] w-[512px] h-[80.3px]">
        <div
          class="absolute top-[0px] left-[0px] rounded-lg bg-grey-white box-border w-[512px] h-[80.3px] border-[1px] border-solid border-lightgray-200"
        />
      </div>
      <div
        class="absolute w-[83.69%] top-[calc(50%_-_55.65px)] right-[15.72%] left-[0.59%] h-[41.8px]"
      >
        <div
          class="absolute w-full top-[calc(50%_-_20.9px)] left-[0%] tracking-[0.25px] leading-[28px] inline-block h-[41.8px]"
        >
          Nome
        </div>
      </div>
      <div
        class="absolute top-[59px] left-[30px] tracking-[0.25px] leading-[28px] text-darkgray-400 inline-block w-[325px] h-9"
      >
        Francisco Augusto Paarthurnax
      </div>
    </div>
    <div
      class="absolute top-[613px] left-[788px] w-[512px] h-[111.3px] text-dimgray-300"
    >
      <div class="absolute top-[31px] left-[0px] w-[512px] h-[80.3px]">
        <div
          class="absolute top-[0px] left-[0px] rounded-lg bg-grey-white box-border w-[512px] h-[80.3px] border-[1px] border-solid border-lightgray-200"
        />
      </div>
      <div
        class="absolute w-[83.69%] top-[calc(50%_-_55.65px)] right-[15.72%] left-[0.59%] h-[41.8px]"
      >
        <div
          class="absolute w-full top-[calc(50%_-_20.9px)] left-[0%] tracking-[0.25px] leading-[28px] inline-block h-[41.8px]"
        >
          Cidade
        </div>
      </div>
      <div
        class="absolute top-[59px] left-[30px] tracking-[0.25px] leading-[28px] text-darkgray-400 inline-block w-[325px] h-9"
      >
        Mônaco
      </div>
    </div>
    <div
      class="absolute top-[785px] left-[788px] w-[512px] h-[111.3px] text-dimgray-300"
    >
      <div class="absolute top-[31px] left-[0px] w-[512px] h-[80.3px]">
        <div
          class="absolute top-[0px] left-[0px] rounded-lg bg-grey-white box-border w-[512px] h-[80.3px] border-[1px] border-solid border-lightgray-200"
        />
        <img
          class="absolute top-[24px] left-[447px] w-[38px] h-10 overflow-hidden"
          alt=""
          src="/icon--field--calendar.svg"
        />
      </div>
      <div
        class="absolute w-[83.69%] top-[calc(50%_-_55.65px)] right-[15.72%] left-[0.59%] h-[41.8px]"
      >
        <div
          class="absolute w-full top-[calc(50%_-_20.9px)] left-[0%] tracking-[0.25px] leading-[28px] inline-block h-[41.8px]"
        >
          Data de Nascimento
        </div>
      </div>
      <div
        class="absolute top-[59px] left-[30px] tracking-[0.25px] leading-[28px] text-darkgray-400 inline-block w-[325px] h-9"
      >
        31/12/1984
      </div>
    </div>
    <div
      class="absolute top-[949px] left-[122px] w-[512px] h-[111.3px] text-dimgray-300"
    >
      <div class="absolute top-[31px] left-[0px] w-[512px] h-[80.3px]">
        <div
          class="absolute top-[0px] left-[0px] rounded-lg bg-whitesmoke-300 box-border w-[512px] h-[80.3px] border-[1px] border-solid border-lightgray-200"
        />
      </div>
      <div
        class="absolute w-[83.69%] top-[calc(50%_-_55.65px)] right-[15.72%] left-[0.59%] h-[41.8px]"
      >
        <div
          class="absolute w-full top-[calc(50%_-_20.9px)] left-[0%] tracking-[0.25px] leading-[28px] inline-block h-[41.8px]"
        >
          Email
        </div>
      </div>
      <div
        class="absolute top-[59px] left-[30px] tracking-[0.25px] leading-[28px] text-darkgray-400 inline-block w-[257px] h-9"
      >
        paartnaxFranc@gmail.com
      </div>
    </div>
    <div
      class="absolute top-[958px] left-[788px] w-[512px] h-[111.3px] text-dimgray-300"
    >
      <div class="absolute top-[31px] left-[0px] w-[512px] h-[80.3px]">
        <div
          class="absolute top-[0px] left-[0px] rounded-lg bg-whitesmoke-300 box-border w-[512px] h-[80.3px] border-[1px] border-solid border-lightgray-200"
        />
      </div>
      <div
        class="absolute w-[83.69%] top-[calc(50%_-_55.65px)] right-[15.72%] left-[0.59%] h-[41.8px]"
      >
        <div
          class="absolute w-full top-[calc(50%_-_20.9px)] left-[0%] tracking-[0.25px] leading-[28px] inline-block h-[41.8px]"
        >
          Senha
        </div>
      </div>
      <div
        class="absolute top-[59px] left-[30px] tracking-[0.25px] leading-[28px] text-darkgray-400 inline-block w-[257px] h-9"
      >
        ****************
      </div>
    </div>
    <div
      class="absolute top-[422px] left-[791px] w-[512px] h-[111.3px] text-dimgray-300"
    >
      <div class="absolute top-[31px] left-[0px] w-[512px] h-[80.3px]">
        <div
          class="absolute top-[0px] left-[0px] rounded-lg bg-whitesmoke-300 box-border w-[512px] h-[80.3px] border-[1px] border-solid border-lightgray-200"
        />
      </div>
      <div
        class="absolute w-[83.69%] top-[calc(50%_-_55.65px)] right-[15.72%] left-[0.59%] h-[41.8px]"
      >
        <div
          class="absolute w-full top-[calc(50%_-_20.9px)] left-[0%] tracking-[0.25px] leading-[28px] inline-block h-[41.8px]"
        >
          Telefone
        </div>
      </div>
      <div
        class="absolute top-[59px] left-[30px] tracking-[0.25px] leading-[28px] text-darkgray-400 inline-block w-[257px] h-9"
      >
        +55 28999000000
      </div>
    </div>
    <div
      class="absolute top-[1008px] left-[458px] rounded-8xs bg-lightseagreen-200 w-40 h-7"
    />
    <div
      class="absolute top-[1022px] left-[1134px] rounded-8xs bg-lightseagreen-100 w-40 h-7"
    />
    <b
      class="absolute top-[1008px] left-[512px] text-mini tracking-[0.25px] leading-[28px] inline-block text-center w-[52px] h-3"
      >Alterar</b
    >
    <b
      class="absolute top-[1021px] left-[1191px] text-mini tracking-[0.25px] leading-[28px] inline-block text-center w-[52px] h-3"
      >Alterar</b
    >
    <div
      class="absolute top-[479px] left-[1134px] w-40 h-7 text-center text-mini"
    >
      <div
        class="absolute top-[0px] left-[0px] rounded-8xs bg-lightseagreen-200 w-40 h-7"
      />
      <b
        class="absolute top-[1px] left-[57px] tracking-[0.25px] leading-[28px] inline-block w-[52px] h-3"
        >Alterar</b
      >
    </div>
    <div
      class="absolute top-[1621px] left-[437px] flex flex-row items-center justify-start gap-[30px] text-mini font-regular"
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
      class="absolute top-[1170px] left-[1021px] rounded-lg bg-color-7 w-[269px] h-[46px]"
    />
    <div
      class="absolute top-[1170px] left-[699px] rounded-lg bg-color-7 w-[269px] h-[46px]"
    />
    <div
      class="absolute top-[1170px] left-[699px] rounded-lg bg-grey-white box-border w-[269px] h-[46px] cursor-pointer border-[1px] border-solid border-color-7"
      @click="onRectangle13Click"
    />
    <div
      class="absolute top-[1179px] left-[1112px] text-6xl tracking-[0.25px] leading-[28px] font-semibold text-center inline-block w-[76px] h-7"
    >
      Salvar
    </div>
    <div
      class="absolute top-[1179px] left-[769px] text-6xl tracking-[0.25px] leading-[28px] font-semibold text-color-7 text-center inline-block w-[109px] h-7"
    >
      Cancelar
    </div>
    <div
      class="absolute top-[1297px] left-[70px] w-[1287px] h-[163px] text-center text-dimgray-1000"
    >
      <img
        class="absolute top-[-0.4px] left-[0px] w-[1287px] h-[4.9px]"
        alt=""
        src="/line-211.svg"
      />
      <div
        class="absolute top-[97px] left-[924px] rounded-lg bg-grey-white box-border w-[312px] h-[65px] border-[1px] border-solid border-gray1-500"
      />
      <div class="absolute top-[120px] left-[998px]">Excluir minha conta</div>
      <b
        class="absolute top-[57px] left-[43px] text-11xl inline-block text-dimgray-600 w-[230px] h-[34px]"
        >Excluir Conta</b
      >
      <div
        class="absolute top-[113px] left-[65px] text-gray1-700 text-left inline-block w-[739px] h-[50px]"
      >
        Você pode deletar sua conta e não armazenaremos nenhum dado seu em nossa
        base.
      </div>
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
    name: "MeusDados",
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
      openPopUpSair() {
        this.isPopUpSairOpen = true;
      },
      closePopUpSair() {
        this.isPopUpSairOpen = false;
      },
      onSobreTextClick() {
        this.$router.push("/sobre");
      },
      onRectangle13Click() {
        this.$router.push("/meu-perfil");
      },
    },
  });
</script>
