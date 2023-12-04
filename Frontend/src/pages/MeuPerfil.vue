<template>
  <div
    class="relative bg-grey-white w-full h-[1739px] overflow-hidden text-center text-xl text-gray1-1500 font-roboto"
  >
    <div class="absolute top-[32px] left-[-11px] w-[1451px] h-[119px]">
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
    <div class="absolute top-[60px] left-[867px] w-[134px] h-[32.5px]">
      <div class="absolute top-[0px] left-[4px]">Meus Pedidos</div>
      <img
        class="absolute top-[32px] left-[0px] w-[134px] h-px"
        alt=""
        src="/line-232.svg"
      />
    </div>
    <div
      class="absolute w-full right-[0px] bottom-[-3.6px] left-[0px] h-[253.2px] text-left text-mini text-grey-white font-regular"
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
      class="absolute top-[32px] left-[1142px] w-[244.5px] h-[65px] text-6xl"
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
    <div class="absolute top-[32px] left-[1142px] w-[206px] h-[65px] text-6xl">
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
    <img
      class="absolute top-[252px] left-[492px] w-6 h-6"
      alt=""
      src="/vuesaxbrokenprofilecircle.svg"
    />
    <div
      class="absolute top-[1621px] left-[437px] flex flex-row items-center justify-start gap-[30px] text-left text-mini text-grey-white font-regular"
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
      class="absolute top-[427px] left-[75px] w-[1282px] h-[1153px] text-16xl text-darkslategray-300"
    >
      <div
        class="absolute top-[0px] left-[0px] rounded-4xs bg-grey-white box-border w-[1282px] h-[1070px] border-[1px] border-solid border-whitesmoke-600"
      />
      <div class="absolute top-[2px] left-[2px] w-[1277px] h-[188px]">
        <div
          class="absolute top-[0px] left-[0px] rounded-4xs bg-grey-white w-[1277px] h-[188px]"
        />
        <img
          class="absolute top-[65px] left-[1154px] rounded-4xs w-[60px] h-[53px] overflow-hidden cursor-pointer"
          alt=""
          src="/heroiconssolidchevronright.svg"
          @click="onHeroiconsSolidchevronRightClick"
        />
        <img
          class="absolute top-[30px] left-[45px] w-[131px] h-32"
          alt=""
          src="/group-48095602.svg"
        />
        <div class="absolute top-[48px] left-[212px] leading-[30px]">
          Dados da sua Conta
        </div>
        <div
          class="absolute top-[97px] left-[212px] text-6xl leading-[24px] text-darkgray-600"
        >
          Dados que representam sua conta na Camélia
        </div>
      </div>
      <div class="absolute top-[190px] left-[2px] w-[1277px] h-[306px]">
        <div class="absolute top-[0px] left-[0px] w-[1277px] h-[218.3px]">
          <div class="absolute top-[0px] left-[0px] w-[1277px] h-[218.3px]">
            <div
              class="absolute top-[0px] left-[0px] rounded-4xs bg-grey-white w-[1277px] h-[218.3px]"
            />
            <img
              class="absolute top-[75.5px] left-[1160px] rounded-4xs w-[60px] h-[61.5px] overflow-hidden"
              alt=""
              src="/heroiconssolidchevronright1.svg"
            />
            <img
              class="absolute top-[41px] left-[43px] w-[136.2px] h-[135.2px]"
              alt=""
              src="/group-480956021.svg"
            />
            <div
              class="absolute top-[55.7px] left-[218px] leading-[30px] inline-block w-[166px] h-[34.8px]"
            >
              Segurança
            </div>
            <div
              class="absolute top-[120.7px] left-[218px] text-6xl leading-[24px] text-darkgray-600 inline-block w-[393px] h-[27.9px]"
            >
              Você tem configurações pendentes
            </div>
            <img
              class="absolute top-[136px] left-[147px] rounded-4xs w-[29px] h-[32.5px]"
              alt=""
              src="/vuesaxbolddanger.svg"
            />
          </div>
        </div>
        <img
          class="absolute top-[267px] left-[121px] rounded-4xs w-[29px] h-[39px]"
          alt=""
          src="/line-22.svg"
        />
      </div>
      <div class="absolute top-[411px] left-[2px] w-[1277px] h-[306px]">
        <div class="absolute top-[0px] left-[0px] w-[1277px] h-[306px]">
          <div class="absolute top-[0px] left-[0px] w-[1277px] h-[218.3px]">
            <div class="absolute top-[0px] left-[0px] w-[1277px] h-[218.3px]">
              <div
                class="absolute top-[0px] left-[0px] rounded-4xs bg-grey-white w-[1277px] h-[218.3px]"
              />
              <img
                class="absolute top-[75.5px] left-[1160px] rounded-4xs w-[60px] h-[61.5px] overflow-hidden"
                alt=""
                src="/heroiconssolidchevronright1.svg"
              />
              <img
                class="absolute top-[41px] left-[43px] w-[136.2px] h-[135.2px]"
                alt=""
                src="/group-480956022.svg"
              />
              <div class="absolute top-[65px] left-[218px] leading-[30px]">
                Privacidade
              </div>
              <div
                class="absolute top-[121px] left-[218px] text-6xl leading-[24px] text-darkgray-600"
              >
                Preferências e Controle do uso de Seus Dados
              </div>
              <img
                class="absolute top-[135px] left-[154px] rounded-4xs w-[29px] h-[32.5px]"
                alt=""
                src="/line-22.svg"
              />
            </div>
          </div>
          <img
            class="absolute top-[267px] left-[121px] rounded-4xs w-[29px] h-[39px]"
            alt=""
            src="/line-22.svg"
          />
        </div>
        <img
          class="absolute top-[80px] left-[83px] rounded-4xs w-[61px] h-[63px]"
          alt=""
          src="/vuesaxlinearsecuritycard.svg"
        />
      </div>
      <div class="absolute top-[629px] left-[2px] w-[1277px] h-[306px]">
        <div class="absolute top-[0px] left-[0px] w-[1277px] h-[306px]">
          <div class="absolute top-[0px] left-[0px] w-[1277px] h-[306px]">
            <div class="absolute top-[0px] left-[0px] w-[1277px] h-[218.3px]">
              <div class="absolute top-[0px] left-[0px] w-[1277px] h-[218.3px]">
                <div
                  class="absolute top-[0px] left-[0px] rounded-4xs bg-grey-white w-[1277px] h-[218.3px]"
                />
                <img
                  class="absolute top-[75.5px] left-[1160px] rounded-4xs w-[60px] h-[61.5px] overflow-hidden"
                  alt=""
                  src="/heroiconssolidchevronright1.svg"
                />
                <img
                  class="absolute top-[41px] left-[43px] w-[136.2px] h-[135.2px]"
                  alt=""
                  src="/group-480956022.svg"
                />
                <div class="absolute top-[66px] left-[219px] leading-[30px]">
                  Comunicações
                </div>
                <div
                  class="absolute top-[125px] left-[219px] text-6xl leading-[24px] text-darkgray-600"
                >
                  Escolha que tipo de comunicação você quer receber
                </div>
                <img
                  class="absolute top-[135px] left-[154px] rounded-4xs w-[29px] h-[32.5px]"
                  alt=""
                  src="/line-22.svg"
                />
              </div>
            </div>
            <img
              class="absolute top-[267px] left-[121px] rounded-4xs w-[29px] h-[39px]"
              alt=""
              src="/line-22.svg"
            />
          </div>
          <img
            class="absolute top-[81px] left-[81px] rounded-4xs w-[60px] h-[62px] overflow-hidden"
            alt=""
            src="/heroiconsoutlinechatbubbleleft.svg"
          />
        </div>
      </div>
      <div class="absolute top-[847px] left-[2px] w-[1277px] h-[306px]">
        <div class="absolute top-[0px] left-[0px] w-[1277px] h-[306px]">
          <div class="absolute top-[0px] left-[0px] w-[1277px] h-[306px]">
            <div class="absolute top-[0px] left-[0px] w-[1277px] h-[306px]">
              <div class="absolute top-[0px] left-[0px] w-[1277px] h-[218.3px]">
                <div
                  class="absolute top-[0px] left-[0px] w-[1277px] h-[218.3px]"
                >
                  <div
                    class="absolute top-[0px] left-[0px] rounded-4xs bg-grey-white w-[1277px] h-[218.3px]"
                  />
                  <img
                    class="absolute top-[75.5px] left-[1160px] rounded-4xs w-[60px] h-[61.5px] overflow-hidden"
                    alt=""
                    src="/heroiconssolidchevronright1.svg"
                  />
                  <img
                    class="absolute top-[41px] left-[43px] w-[136.2px] h-[135.2px]"
                    alt=""
                    src="/group-480956022.svg"
                  />
                  <div class="absolute top-[66px] left-[219px] leading-[30px]">
                    Cartões
                  </div>
                  <div
                    class="absolute top-[127px] left-[219px] text-6xl leading-[24px] text-darkgray-600"
                  >
                    Cartões salvos na sua conta
                  </div>
                  <img
                    class="absolute top-[135px] left-[154px] rounded-4xs w-[29px] h-[32.5px]"
                    alt=""
                    src="/line-22.svg"
                  />
                </div>
              </div>
              <img
                class="absolute top-[267px] left-[121px] rounded-4xs w-[29px] h-[39px]"
                alt=""
                src="/line-22.svg"
              />
            </div>
          </div>
          <img
            class="absolute top-[81px] left-[81px] rounded-4xs w-[60px] h-[55px] overflow-hidden"
            alt=""
            src="/heroiconsoutlinecreditcard.svg"
          />
        </div>
      </div>
    </div>
    <div
      class="absolute top-[200px] left-[77px] w-[1282px] h-[178px] text-16xl text-darkslategray-100"
    >
      <div
        class="absolute top-[0px] left-[0px] rounded-lg bg-grey-white box-border w-[1282px] h-[178px] border-[1px] border-solid border-whitesmoke-600"
      />
      <div
        class="absolute top-[46px] left-[202.3px] leading-[30px] inline-block w-[353.2px]"
      >
        Francisco Paarthurnax
      </div>
      <img
        class="absolute top-[28px] left-[45.3px] w-[122.8px] h-[119.7px]"
        alt=""
        src="/group-48095630.svg"
      />
      <div
        class="absolute top-[88px] left-[202.3px] text-xl tracking-[0.25px] leading-[28px] text-darkgray-400 text-left inline-block w-[270.7px] h-7"
      >
        paartnaxFranc@gmail.com
      </div>
      <img
        class="absolute top-[117px] left-[137px] w-7 h-7"
        alt=""
        src="/group-48095631.svg"
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
</template>
<script>
  import { defineComponent } from "vue";
  import PopUpSair from "../components/PopUpSair.vue";
  import PortalPopup from "../components/PortalPopup.vue";
  export default defineComponent({
    name: "MeuPerfil",
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
      onHeroiconsSolidchevronRightClick() {
        this.$router.push("/meus-dados");
      },
    },
  });
</script>
