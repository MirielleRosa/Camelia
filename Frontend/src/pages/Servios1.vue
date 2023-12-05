<template>
  <div
    class="relative bg-grey-white w-full h-[2465px] overflow-hidden text-center text-xl text-gray1-1500 font-roboto"
  >
    <div class="absolute top-[32px] left-[-11px] w-[100%] h-[119px]">
      <div
        class="absolute top-[57.5px] left-[48%] box-border w-[79px] h-px border-t-[1px] border-solid border-gray1-1500"
      />
      <div
        class="absolute top-[28px] left-[43%] flex flex-row items-start justify-start gap-[50px]"
      >
        <div class="relative cursor-pointer" @click="onIncioText1Click()">Início</div>
        <div class="relative">Serviços</div>
      </div>
      <img
        class="absolute top-[0px] left-[68px] w-[129px] h-[99px] overflow-hidden"
        alt=""
        src="/group-7-12.svg"
      />
    </div>
    
    <div
      class="absolute top-[60px] left-[55%] w-[127px] h-[23px] cursor-pointer"
      @click="onGroupContainer2Click"
    >
      <div class="absolute top-[0px] left-[0px]">Meus Pedidos</div>
    </div>
    <div class="absolute top-[151px] left-[0px] w-[100%] h-[575px] text-2xs">
      <div class="absolute top-[0px] left-[0px] w-[100%] h-[467px]">
        <div
          class="absolute top-[0px] left-[0px] bg-mediumaquamarine-500 w-[100%] h-[467px]"
        />
      </div>
      <div
        class="absolute top-[485px] left-[20%] flex flex-col items-start justify-start"
      >
        <div class="flex flex-row items-end justify-start">
          <div class="relative w-[1284px] h-[90px]">
            <div class="absolute top-[0px] left-[0px] w-[94px] h-[90px]">
              <div
                class="absolute top-[0px] left-[0px] rounded-sm bg-grey-white shadow-[0px_2px_2px_#e5e5e5] w-[94px] h-[90px]"
              />
              <div
                class="absolute top-[65px] left-[6px] leading-[13px] inline-block w-[82px]"
              >
                Reforma
              </div>
              <img
                class="absolute top-[18px] left-[19px] w-12 h-12 overflow-hidden"
                alt=""
                src="/image2.svg"
              />
            </div>
            <div class="absolute top-[0px] left-[119px] w-[94px] h-[90px]">
              <div
                class="absolute top-[0px] left-[0px] rounded-sm bg-grey-white shadow-[0px_2px_2px_#e5e5e5] w-[94px] h-[90px]"
              />
              <img
                class="absolute top-[5px] left-[22px] w-[50px] h-[50px] overflow-hidden"
                alt=""
                src="/image13.svg"
              />
              <div
                class="absolute top-[58px] left-[19px] leading-[13px] inline-block w-14"
              >
                Serviços Hidráulicos
              </div>
            </div>
            <div class="absolute top-[0px] left-[238px] w-[94px] h-[90px]">
              <div
                class="absolute top-[0px] left-[0px] rounded-sm bg-grey-white shadow-[0px_2px_2px_#e5e5e5] w-[94px] h-[90px]"
              />
              <img
                class="absolute top-[5px] left-[22px] w-[50px] h-[50px] overflow-hidden"
                alt=""
                src="/image14.svg"
              />
              <div
                class="absolute top-[58px] left-[26px] leading-[13px] inline-block w-[43px]"
              >
                Serviços Elétricos
              </div>
            </div>
            <div class="absolute top-[0px] left-[357px] w-[94px] h-[90px]">
              <div
                class="absolute top-[0px] left-[0px] rounded-sm bg-grey-white shadow-[0px_2px_2px_#e5e5e5] w-[94px] h-[90px]"
              />
              <img
                class="absolute top-[5px] left-[22px] w-[50px] h-[50px] overflow-hidden"
                alt=""
                src="/image15.svg"
              />
              <div
                class="absolute top-[58px] left-[10px] leading-[13px] inline-block w-[75px]"
              >
                Serviços de Ar-condicionado
              </div>
            </div>
            <div class="absolute top-[0px] left-[476px] w-[94px] h-[90px]">
              <div
                class="absolute top-[0px] left-[0px] rounded-sm bg-grey-white shadow-[0px_2px_2px_#e5e5e5] w-[94px] h-[90px]"
              />
              <img
                class="absolute top-[5px] left-[22px] w-[50px] h-[50px] overflow-hidden"
                alt=""
                src="/image16.svg"
              />
              <div
                class="absolute top-[58px] left-[22px] leading-[13px] inline-block w-[49px]"
              >
                Pequenos Reparos
              </div>
            </div>
            <div class="absolute top-[0px] left-[595px] w-[94px] h-[90px]">
              <div
                class="absolute top-[0px] left-[0px] rounded-sm bg-grey-white shadow-[0px_2px_2px_#e5e5e5] w-[94px] h-[90px]"
              />
              <img
                class="absolute top-[12px] left-[22px] w-[50px] h-[50px] overflow-hidden"
                alt=""
                src="/image3.svg"
              />
              <div
                class="absolute top-[65px] left-[19px] leading-[13px] inline-block w-[57px]"
              >
                Instalações
              </div>
            </div>
            <div class="absolute top-[0px] left-[714px] w-[94px] h-[90px]">
              <div
                class="absolute top-[0px] left-[0px] rounded-sm bg-grey-white shadow-[0px_2px_2px_#e5e5e5] w-[94px] h-[90px]"
              />
              <img
                class="absolute top-[12px] left-[22px] w-[50px] h-[50px] overflow-hidden"
                alt=""
                src="/image17.svg"
              />
              <div
                class="absolute top-[65px] left-[21px] leading-[13px] inline-block w-[53px]"
              >
                Decoração
              </div>
            </div>
            <div class="absolute top-[0px] left-[833px] w-[94px] h-[90px]">
              <div
                class="absolute top-[0px] left-[0px] rounded-sm bg-grey-white shadow-[0px_2px_2px_#e5e5e5] w-[94px] h-[90px]"
              />
              <img
                class="absolute top-[5px] left-[22px] w-[50px] h-[50px] overflow-hidden"
                alt=""
                src="/image18.svg"
              />
              <div
                class="absolute top-[58px] left-[18px] leading-[13px] inline-block w-[57px]"
              >
                Serviços de Limpeza
              </div>
            </div>
            <div class="absolute top-[0px] left-[952px] w-[94px] h-[90px]">
              <div
                class="absolute top-[0px] left-[0px] rounded-sm bg-grey-white shadow-[0px_2px_2px_#e5e5e5] w-[94px] h-[90px]"
              />
              <img
                class="absolute top-[12px] left-[22px] w-[50px] h-[50px] overflow-hidden"
                alt=""
                src="/image19.svg"
              />
              <div
                class="absolute top-[65px] left-[6px] leading-[13px] inline-block w-[82px]"
              >
                Serviços de Piso
              </div>
            </div>
            <div class="absolute top-[0px] left-[1071px] w-[94px] h-[90px]">
              <div
                class="absolute top-[0px] left-[0px] rounded-sm bg-grey-white shadow-[0px_2px_2px_#e5e5e5] w-[94px] h-[90px]"
              />
              <img
                class="absolute top-[5px] left-[22px] w-[50px] h-[50px] overflow-hidden"
                alt=""
                src="/image20.svg"
              />
              <div
                class="absolute top-[58px] left-[13px] leading-[13px] inline-block w-[68px]"
              >
                Montagem de Móveis
              </div>
            </div>
            <div class="absolute top-[0px] left-[1190px] w-[94px] h-[90px]">
              <div
                class="absolute top-[0px] left-[0px] rounded-sm bg-grey-white shadow-[0px_2px_2px_#e5e5e5] w-[94px] h-[90px]"
              />
              <img
                class="absolute top-[12px] left-[22px] w-[50px] h-[50px] overflow-hidden"
                alt=""
                src="/image21.svg"
              />
              <div
                class="absolute top-[65px] left-[29px] leading-[13px] inline-block w-[35px]"
              >
                Pintura
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="absolute top-[153px] left-[617px] w-[594px] h-[124px] text-left text-lgi"
      >
        <div
          class="absolute top-[0px] left-[250px] leading-[24px] inline-block w-[594px]"
        >
          Encontre profissionais verificados e qualificados para o seu projeto
        </div>
        <div
          class="absolute top-[72px] left-[50px] w-[488px] h-[52px] text-mini text-gray1-1700"
        >
          <div
            class="absolute top-[0px] left-[250px] rounded-8xs bg-grey-white w-[488px] h-[52px]"
          />
          <div
            class="absolute top-[14px] left-[282px] leading-[24px] inline-block w-[153px]"
          >
            Buscar serviço
          </div>
        </div>
      </div>
    </div>
    <div class="absolute top-[187px] left-[186px] w-[310px] h-[431px]" />
    <img
      class="absolute top-[167px] left-[396px] w-[533px] h-[451px] object-cover"
      alt=""
      src="/canalizadorcomosbracoscruzadosremovebgpreview-1-1@2x.png"
    />
    <div
      class="absolute top-[780px] right-[1.5%] w-[100%] h-[1203px] text-left text-lg"
    >
      <div class="absolute top-[0px] left-[0px] w-[1400px] h-[361px]">
        <div
          class="absolute top-[55px] left-[600px] rounded-sm bg-grey-white shadow-[0px_5px_10px_rgba(0,_0,_0,_0.1)] w-[310.9px] h-[306px]"
        />
        <img
          class="absolute top-[55px] left-[600px] rounded-sm w-[241.4px] h-[200px] object-cover"
          alt=""
          src="/image50@2x.png"
        />
        <div
          class="absolute top-[55px] left-[1100px] rounded-sm bg-grey-white shadow-[0px_5px_10px_rgba(0,_0,_0,_0.1)] w-[310.9px] h-[306px]"
        />
        <img
          class="absolute top-[55px] left-[1100px] rounded-sm w-[241.4px] h-[200px] object-cover"
          alt=""
          src="/image24@2x.png"
        />
        <div
          class="absolute top-[55px] left-[1600px] rounded-sm bg-grey-white shadow-[0px_5px_10px_rgba(0,_0,_0,_0.1)] w-[310.9px] h-[306px]"
        />
        <img
          class="absolute top-[55px] left-[1600px] rounded-sm w-[241.4px] h-[200px] object-cover"
          alt=""
          src="/image51@2x.png"
        />
        <div
          class="absolute top-[0px] left-[130px] text-xl leading-[32px] inline-block w-[268.9px]"
        >
          Serviços Elétricos
        </div>
        <div class="absolute top-[55px] left-[90px] w-[310.9px] h-[306px]">
          <div
            class="absolute top-[0px] left-[0px] rounded-sm bg-grey-white shadow-[0px_5px_10px_rgba(0,_0,_0,_0.1)] w-[310.9px] h-[306px]"
          />
          <img
            class="absolute top-[0px] left-[34.8px] rounded-sm w-[241.4px] h-[200px] object-cover"
            alt=""
            src="/image22@2x.png"
          />
          <div
            class="absolute top-[226px] left-[40px] leading-[26px] inline-block w-[203.1px]"
          >
            Conserto de Interfone
          </div>
        </div>
        <div
          class="absolute top-[281px] left-[600px] leading-[26px] inline-block w-[128.5px]"
        >
          Eletricista
        </div>
        <div
          class="absolute top-[281px] left-[1100px] leading-[26px] inline-block w-[300.7px]"
        >
          Instalação de câmeras de segurança
        </div>
        <div
          class="absolute top-[281px] left-[1600px] leading-[26px] inline-block w-[291.8px]"
        >
          Instalação de chuveiro elétrico
        </div>
      </div>
      <div class="absolute top-[415px] left-[0px] w-[1409.2px] h-[361px]">
        <div
          class="absolute top-[43px] left-[110px] rounded-sm bg-grey-white shadow-[0px_5px_10px_rgba(0,_0,_0,_0.1)] w-[310.9px] h-[306px]"
        />
        <img
          class="absolute top-[55px] left-[110px] rounded-sm w-[248.9px] h-[200px] object-cover cursor-pointer"
          alt=""
          src="/image52@2x.png"
          @click="onIMAGE4Click"
        />
        <div
          class="absolute top-[55px] left-[600px] rounded-sm bg-grey-white shadow-[0px_5px_10px_rgba(0,_0,_0,_0.1)] w-[310.9px] h-[306px]"
        />
        <img
          class="absolute top-[64px] left-[600px] rounded-sm w-[248.9px] h-[200px] object-cover"
          alt=""
          src="/image27@2x.png"
        />
        <div
          class="absolute top-[55px] left-[1100px] rounded-sm bg-grey-white shadow-[0px_5px_10px_rgba(0,_0,_0,_0.1)] w-[310.9px] h-[306px]"
        />
        <img
          class="absolute top-[55px] left-[1100px] rounded-sm w-[248.9px] h-[200px] object-cover"
          alt=""
          src="/image28@2x.png"
        />
        <div
          class="absolute top-[55px] left-[1600px] rounded-sm bg-grey-white shadow-[0px_5px_10px_rgba(0,_0,_0,_0.1)] w-[310.9px] h-[306px]"
        />
        <img
          class="absolute top-[55px] left-[1600px] rounded-sm w-[248.9px] h-[200px] object-cover"
          alt=""
          src="/image29@2x.png"
        />
        <div
          class="absolute top-[0px] left-[110px] text-xl leading-[32px] inline-block w-[148.4px]"
        >
          Serviços de Piso
        </div>
        <div
          class="absolute top-[281px] left-[110px] leading-[26px] inline-block w-[227px]"
        >
          Colocação de piso cerâmico
        </div>
        <div
          class="absolute top-[281px] left-[600px] leading-[26px] inline-block w-[225px]"
        >
          Instalação de piso laminado
        </div>
        <div
          class="absolute top-[281px] left-[1100px] leading-[26px] inline-block w-[247.9px]"
        >
          Colocação de piso porcelanato
        </div>
        <div
          class="absolute top-[281px] left-[1600px] leading-[26px] inline-block w-[207.1px]"
        >
          Instalação de piso vinílico
        </div>
      </div>
      <div class="absolute top-[842px] left-[0px] w-[1409.2px] h-[361px]">
        <div
          class="absolute top-[55px] left-[110px] rounded-sm bg-grey-white shadow-[0px_5px_10px_rgba(0,_0,_0,_0.1)] w-[310.9px] h-[306px]"
        />
        <img
          class="absolute top-[56px] left-[110px] rounded-sm w-[248.9px] h-[200px] object-cover"
          alt=""
          src="/image30@2x.png"
        />
        <div
          class="absolute top-[55px] left-[600px] rounded-sm bg-grey-white shadow-[0px_5px_10px_rgba(0,_0,_0,_0.1)] w-[310.9px] h-[306px]"
        />
        <img
          class="absolute top-[56px] left-[600px] rounded-sm w-[248.9px] h-[200px] object-cover"
          alt=""
          src="/image53@2x.png"
        />
        <div
          class="absolute top-[55px] left-[1600px] rounded-sm bg-grey-white shadow-[0px_5px_10px_rgba(0,_0,_0,_0.1)] w-[310.9px] h-[306px]"
        />
        <div
          class="absolute top-[55px] left-[1098.3px] rounded-sm bg-grey-white shadow-[0px_5px_10px_rgba(0,_0,_0,_0.1)] w-[310.9px] h-[306px]"
        />
        <img
          class="absolute top-[55px] left-[1100px] rounded-sm w-[248.9px] h-[200px] object-cover"
          alt=""
          src="/image32@2x.png"
        />
       
        <img
          class="absolute top-[55px] left-[1600px] rounded-sm w-[248.9px] h-[200px] object-cover"
          alt=""
          src="/image33@2x.png"
        />
        <div
          class="absolute top-[0px] left-[110px] text-xl leading-[32px] inline-block w-[63.7px]"
        >
          Pintura
        </div>
        <div
          class="absolute top-[281px] left-[112px] leading-[26px] inline-block w-[47.8px]"
        >
          Pintor
        </div>
        <div
          class="absolute top-[281px] left-[600px] leading-[26px] inline-block w-[203.1px]"
        >
          Pintura de portão e grade
        </div>
        <div
          class="absolute top-[281px] left-[1102px] leading-[26px] inline-block w-[214.1px]"
        >
          Pintura de portas e janelas
        </div>
        <div
          class="absolute top-[281px] left-[1600px] leading-[26px] inline-block w-[122.5px]"
        >
          Pintura externa
        </div>
      </div>
    </div>
    <div
      class="absolute w-full right-[0px] bottom-[0.4px] left-[0px] h-[329.2px] text-left text-mini text-grey-white font-regular"
    >
      <div
        class="absolute w-full right-[0px] bottom-[0px] left-[0px] bg-gray1-1500 h-[329.2px]"
      />
      <div
        class="absolute top-[120.6px] left-[40%] h-[143.5px] flex flex-row items-center justify-start gap-[30px]"
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
    <div class="absolute top-[39px] left-[80%] w-[236px] h-[65px] text-6xl">
      <div class="absolute top-[0px] left-[0px] w-[206px] h-[65px]">
        <div class="absolute top-[23px] left-[97px]">Francisco</div>
        <div
          class="absolute top-[0px] left-[0px] rounded-[50%] bg-gray1-1500 w-[67px] h-[65px]"
        />
        <div
          class="absolute top-[0] left-[21px] text-21xl font-medium font-ibm-plex-serif text-grey-white"
        >
          F
        </div>
      </div>
      <img
        class="absolute h-[41.54%] w-[12.71%] top-[42.15%] right-[0%] bottom-[16.31%] left-[87.29%] max-w-full overflow-hidden max-h-full cursor-pointer"
        alt=""
        src="/arrow--caret-down-md2.svg"
        :onClick="openPopUpSair"
      />
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
  <div v-if="isPopUpSair2Open">
    <PortalPopup
      overlayColor="rgba(113, 113, 113, 0.3)"
      placement="Centered"
      :relativeLayerRef="$refs[groupContainer29Ref]"
      :onOutsideClick="closePopUpSair2"
    >
      <PopUpSair :onClose="closePopUpSair2" />
    </PortalPopup>
  </div>
  <div v-if="isPopUpSair1Open">
    <PortalPopup
      overlayColor="rgba(113, 113, 113, 0.3)"
      placement="Centered"
      :relativeLayerRef="$refs[arrowCaretDownMD1Ref]"
      :onOutsideClick="closePopUpSair1"
    >
      <PopUpSair :onClose="closePopUpSair1" />
    </PortalPopup>
  </div>
</template>
<script>
  import { defineComponent } from "vue";
  import PopUpSair from "../components/PopUpSair.vue";
  import PortalPopup from "../components/PortalPopup.vue";

  export default defineComponent({
    name: "Servios1",
    data() {
      return {
        isPopUpSairOpen: false,
        isPopUpSair1Open: false,
        isPopUpSair2Open: false,
      };
    },
    components: { PopUpSair, PortalPopup },
    methods: {
      onIncioText1Click() {
        this.$router.push("/pagina-inicial-cliente");
      },
      onGroup711Click() {
        this.$router.push("/pagina-inicial-cliente");
      },
      onGroupContainer2Click() {
        this.$router.push("/tela-inicial-cliente");
      },
      onIMAGE4Click() {
        this.$router.push("/-servios-3");
      },
      onSobreTextClick() {
        this.$router.push("/sobre");
      },
      openPopUpSair() {
        this.isPopUpSairOpen = true;
      },
      closePopUpSair() {
        this.isPopUpSairOpen = false;
      },
      openPopUpSair2() {
        this.isPopUpSair2Open = true;
      },
      closePopUpSair2() {
        this.isPopUpSair2Open = false;
      },
      openPopUpSair1() {
        this.isPopUpSair1Open = true;
      },
      closePopUpSair1() {
        this.isPopUpSair1Open = false;
      },
    },
  });
</script>
