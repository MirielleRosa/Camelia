<template>
  <div
    class="relative bg-gray1-100 w-full h-[1203px] overflow-hidden text-center text-base text-grey-white font-roboto"
  >
    <div class="absolute top-[0px] left-[0px] w-[329px] h-[1203px]">
      <div
        class="absolute top-[0px] left-[0px] bg-gray1-1500 w-[329px] h-[1203px]"
      />
      <div
        class="absolute top-[66px] left-[calc(50%_-_130.5px)] w-[254px] h-[187px]"
      >
        <div
          class="absolute top-[113.1px] left-[calc(50%_-_77px)] leading-[150%] inline-block w-[135.5px] h-[25.8px]"
        >
          Ednaldo Pereira
        </div>
        <div
          class="absolute top-[143.9px] left-[calc(50%_-_47.4px)] text-smi leading-[150%] text-darkgray-700 inline-block w-[76.4px] h-[22.1px]"
        >
          Pedreiro
        </div>
        <img
          class="absolute top-[0px] left-[calc(50%_-_61.3px)] rounded-[50%] w-[106.5px] h-[106.4px] object-cover"
          alt=""
          src="/unsplashohkelokq3re4@2x.png"
        />
        <img
          class="absolute top-[0px] left-[69.7px] rounded-81xl w-[98.5px] h-[98.4px] object-cover"
          alt=""
          src="/image-111@2x.png"
        />
        <div
          class="absolute top-[186.8px] left-[-0.2px] box-border w-[254.5px] h-[0.5px] border-t-[0.5px] border-solid border-whitesmoke-200"
        />
      </div>
      <div
        class="absolute top-[298px] left-[calc(50%_-_164.5px)] w-[329px] h-[905px] text-left text-xl text-gray-100"
      >
        <div
          class="absolute top-[10px] left-[0px] bg-gray1-1500 w-[313px] h-[41px] text-dimgray-500"
        >
          <img
            class="absolute top-[calc(50%_-_11.5px)] left-[24px] w-6 h-6 overflow-hidden opacity-[0.9]"
            alt=""
            src="/tab1.svg"
          />
          <div
            class="absolute top-[calc(50%_-_7.5px)] left-[71px] leading-[100%]"
          >
            Dashboard
          </div>
        </div>
        <div
          class="absolute top-[59px] left-[0px] w-60 h-12 cursor-pointer"
          @click="onNavLinksDark1Click"
        >
          <img
            class="absolute top-[calc(50%_-_12px)] left-[24px] w-6 h-6 overflow-hidden opacity-[0.9]"
            alt=""
            src="/business2.svg"
          />
          <div
            class="absolute top-[calc(50%_-_8px)] left-[71px] leading-[100%]"
          >
            Pedidos
          </div>
        </div>
        <div
          class="absolute top-[115px] left-[0px] w-60 h-12 cursor-pointer"
        >
          <img
            class="absolute top-[calc(50%_-_12px)] left-[24px] w-6 h-6 overflow-hidden opacity-[0.9]"
            alt=""
            src="/business2.svg"
          />
          <div
            class="absolute top-[calc(50%_-_8px)] left-[71px] leading-[100%]"
          >
            Chat
          </div>
        </div>
        <div
          class="absolute top-[171px] left-[0px] w-60 h-12 cursor-pointer"
          @click="onNavLinksDark3Click"
        >
          <img
            class="absolute top-[11.8px] left-[24px] w-6 h-6 overflow-hidden opacity-[0.9]"
            alt=""
            src="/settings2.svg"
          />
          <div
            class="absolute top-[calc(50%_-_8px)] left-[71px] leading-[100%]"
          >
            Configurações
          </div>
        </div>
        <div
          class="absolute top-[227px] left-[0px] w-60 h-12 cursor-pointer"
        >
          <div
            class="absolute top-[calc(50%_-_8px)] left-[71px] leading-[100%]"
          >
            Ajuda
          </div>
          <img
            class="absolute h-[41.67%] w-[8.33%] top-[32.92%] right-[80.83%] bottom-[25.42%] left-[10.83%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector1.svg"
          />
        </div>
      </div>
    </div>
    <div
      class="absolute top-[573px] left-[345px] w-[1064px] h-[599px] text-left text-6xl text-mediumaquamarine-100 font-body-input-14px-r"
    >
      <div
        class="absolute top-[0px] left-[0px] w-[1064px] h-[599px] text-gray1-1500 font-abel"
      >
        <div class="absolute top-[0px] left-[0px] w-[1064px] h-[599px]">
          <div
            class="absolute top-[0px] left-[0px] rounded-[15px] bg-whitesmoke-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[1064px] h-[599px]"
          />
          <div
            class="absolute top-[0px] left-[1052px] rounded-tl-none rounded-tr-xl rounded-br-xl rounded-bl-none bg-gray1-300 box-border w-3 h-[599px] border-r-[1px] border-solid border-grey-white border-l-[1px]"
          >
            <div
              class="absolute top-[12px] left-[calc(50%_-_3px)] rounded-81xl bg-lightgray-100 w-1.5 h-64"
            />
          </div>
        </div>
        <div class="absolute top-[65px] left-[15px] w-[1019px] h-[198px]">
          <div
            class="absolute top-[0px] left-[0px] rounded-sm bg-light-1 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[1019px] h-[198px]"
          />
          <div class="absolute top-[41px] left-[27px]">
            APLICAÇÃO DE PORCELANATO
          </div>
          <div class="absolute top-[10px] left-[49px] text-base">Pendente</div>
          <img
            class="absolute top-[10px] left-[22px] w-5 h-5"
            alt=""
            src="/infominor.svg"
          />
          <div
            class="absolute h-[32.32%] w-[56.82%] top-[50%] right-[5.79%] bottom-[17.68%] left-[37.39%] text-lg text-gray1-1100 font-roboto"
          >
            <div
              class="absolute h-[34.38%] w-[99.65%] top-[65.63%] right-[0%] bottom-[0%] left-[0.35%]"
            >
              <div class="absolute top-[0%] left-[0%]">
                Periodo para aprovação:
              </div>
              <div
                class="absolute top-[0%] left-[36.57%] font-lato text-gray1-800"
              >
                1 Novembro 2023 a 7 de Novembro de 2023
              </div>
            </div>
            <div
              class="absolute h-[34.38%] w-[37.82%] top-[0%] right-[62.18%] bottom-[65.63%] left-[0%]"
            >
              <div
                class="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]"
              >
                <div
                  class="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]"
                >
                  <div class="absolute top-[4.55%] left-[0%]">Oraçamento:</div>
                  <div
                    class="absolute top-[0%] left-[58.9%] font-lato text-gray1-800"
                  >
                    A combinar
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="absolute top-[294px] left-[15px] w-[1019px] h-[198px]">
          <div
            class="absolute top-[0px] left-[0px] rounded-sm bg-light-1 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[1019px] h-[198px]"
          />
          <div class="absolute top-[41px] left-[27px]">
            APLICAÇÃO DE PORCELANATO
          </div>
          <div class="absolute top-[10px] left-[48px] text-base">Pendente</div>
          <img
            class="absolute top-[10px] left-[22px] w-5 h-5"
            alt=""
            src="/infominor.svg"
          />
        </div>
        <div class="absolute top-[523px] left-[16px] w-[1019px] h-[76px]">
          <div
            class="absolute top-[0px] left-[0px] rounded-sm bg-light-1 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[1019px] h-[76px]"
          />
          <div class="absolute top-[41px] left-[27px]">
            APLICAÇÃO DE PORCELANATO
          </div>
          <div class="absolute top-[10px] left-[49px] text-base">Pendente</div>
          <img
            class="absolute top-[10px] left-[22px] w-5 h-5"
            alt=""
            src="/infominor.svg"
          />
        </div>
      </div>
      <img
        class="absolute top-[164px] left-[49px] rounded-[50%] w-[83px] h-[83px] object-cover"
        alt=""
        src="/unsplashrdeovte7vos@2x.png"
      />
      <div
        class="absolute top-[192px] left-[166px] w-[93px] flex flex-col items-start justify-center"
      >
        <div
          class="relative leading-[158.5%] font-semibold inline-block w-[307px] h-[34px] shrink-0"
        >
          Laura
        </div>
      </div>
      <img
        class="absolute top-[393px] left-[48px] rounded-[50%] w-[83px] h-[83px] object-cover"
        alt=""
        src="/unsplashc8ta0gwpbqg@2x.png"
      />
      <div
        class="absolute top-[417px] left-[160px] leading-[158.5%] font-semibold inline-block w-[307px] h-[34px]"
      >
        Robson
      </div>
      <div
        class="absolute h-[10.68%] w-[54.42%] top-[65.61%] right-[8.36%] bottom-[23.71%] left-[37.22%] text-lg text-gray1-1100 font-roboto"
      >
        <div
          class="absolute h-[34.38%] w-[37.82%] top-[0%] right-[62.18%] bottom-[65.63%] left-[0%]"
        >
          <div
            class="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]"
          >
            <div class="absolute top-[4.55%] left-[0%]">Oraçamento:</div>
            <div
              class="absolute top-[0%] left-[58.9%] font-lato text-gray1-800"
            >
              A combinar
            </div>
          </div>
        </div>
        <div
          class="absolute h-[34.38%] w-[99.65%] top-[65.63%] right-[0%] bottom-[0%] left-[0.35%]"
        >
          <div class="absolute top-[0%] left-[0%]">Periodo para aprovação:</div>
          <div class="absolute top-[0%] left-[36.57%] font-lato text-gray1-800">
            1 Novembro 2023 a 7 de Novembro de 2023
          </div>
        </div>
      </div>
    </div>
    <div
      class="absolute w-[calc(100%_-_329px)] top-[-2px] right-[0px] left-[329px] box-border h-[68px] overflow-hidden text-sm text-black-40 font-regular border-b-[1px] border-solid border-black-10"
    >
      <div
        class="absolute top-[20px] left-[28px] flex flex-row items-center justify-start gap-[8px]"
      >
        <div
          class="rounded-boundvariablesdata1 hidden flex-row flex-wrap items-center justify-start gap-[8px]"
        >
          <div
            class="rounded-boundvariablesdata1 hidden flex-row items-center justify-center p-1"
          >
            <div
              class="rounded-radius-8 hidden flex-row items-center justify-center"
            >
              <img
                class="relative w-size-20 h-size-20"
                alt=""
                src="/sidebar.svg"
              />
            </div>
          </div>
          <div
            class="rounded-boundvariablesdata1 hidden flex-row items-center justify-center p-1"
          >
            <div
              class="rounded-radius-8 flex flex-row items-center justify-center"
            >
              <img
                class="relative w-size-20 h-size-20"
                alt=""
                src="/star.svg"
              />
            </div>
          </div>
        </div>
        <div
          class="rounded-boundvariablesdata1 flex flex-row flex-wrap items-center justify-start gap-[8px]"
        >
          <div
            class="rounded-boundvariablesdata1 flex flex-row items-center justify-center py-boundvariablesdata2 px-boundvariablesdata"
          >
            <div
              class="rounded-boundvariablesdata1 flex flex-col items-start justify-center"
            >
              <div class="self-stretch relative leading-[20px]">Dashboards</div>
            </div>
          </div>
          <div
            class="rounded-boundvariablesdata1 flex flex-col items-start justify-center text-left text-black-20"
          >
            <div class="self-stretch relative leading-[20px]">/</div>
          </div>
          <div
            class="rounded-boundvariablesdata1 flex flex-row items-center justify-center py-boundvariablesdata2 px-boundvariablesdata text-black-100"
          >
            <div
              class="rounded-boundvariablesdata1 flex flex-col items-start justify-center"
            >
              <div class="self-stretch relative leading-[20px] hidden">
                Default
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="absolute top-[20px] left-[803px] flex flex-row items-start justify-start gap-[20px] text-left text-black-20"
      >
        <div
          class="rounded-boundvariablesdata1 bg-black-5 w-40 overflow-hidden shrink-0 flex flex-row flex-wrap items-center justify-start py-boundvariablesdata2 px-boundvariablesdata box-border gap-[8px]"
        >
          <div
            class="flex-1 rounded-boundvariablesdata1 flex flex-row flex-wrap items-center justify-start gap-[4px]"
          >
            <div
              class="rounded-radius-8 flex flex-row items-center justify-center"
            >
              <img
                class="relative w-boundvariablesdata5 h-boundvariablesdata5"
                alt=""
                src="/search.svg"
              />
            </div>
            <div
              class="flex-1 rounded-boundvariablesdata1 flex flex-col items-start justify-center"
            >
              <div class="self-stretch relative leading-[20px]">Search</div>
            </div>
          </div>
          <div
            class="rounded-boundvariablesdata1 flex flex-col items-start justify-center"
          >
            <div class="self-stretch relative leading-[20px] hidden">⌘/</div>
          </div>
        </div>
        <div
          class="rounded-boundvariablesdata1 flex flex-row flex-wrap items-center justify-start gap-[8px]"
        >
          <div
            class="rounded-boundvariablesdata1 flex flex-row items-center justify-center p-1"
          >
            <div
              class="rounded-radius-8 flex flex-row items-center justify-center"
            >
              <img class="relative w-size-20 h-size-20" alt="" src="/sun.svg" />
            </div>
          </div>
          <div
            class="rounded-boundvariablesdata1 flex flex-row items-center justify-center p-1"
          >
            <div
              class="rounded-radius-8 flex flex-row items-center justify-center"
            >
              <img
                class="relative w-size-20 h-size-20"
                alt=""
                src="/clockcounterclockwise.svg"
              />
            </div>
          </div>
          <div
            class="rounded-boundvariablesdata1 flex flex-row items-center justify-center p-1"
          >
            <div
              class="rounded-radius-8 flex flex-row items-center justify-center"
            >
              <img
                class="relative w-size-20 h-size-20"
                alt=""
                src="/bell.svg"
              />
            </div>
          </div>
          <div
            class="rounded-boundvariablesdata1 hidden flex-row items-center justify-center p-1"
          >
            <div
              class="rounded-radius-8 flex flex-row items-center justify-center"
            >
              <img
                class="relative w-size-20 h-size-20"
                alt=""
                src="/sidebar.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="absolute w-[64.98%] top-[calc(50%_-_468.5px)] right-[6.97%] left-[28.06%] h-[368px] text-right text-xs text-darkgray-500 font-nunito"
    >
      <div
        class="absolute w-full top-[calc(50%_-_184px)] right-[0%] left-[0%] h-[331px]"
      >
        <div
          class="absolute w-[2.19%] top-[calc(50%_+_102.5px)] left-[6.95%] font-medium inline-block h-[21px]"
        >
          10
        </div>
        <div
          class="absolute w-[1.18%] top-[calc(50%_+_144.5px)] left-[7.97%] font-medium inline-block h-[21px]"
        >
          0
        </div>
        <div
          class="absolute w-[2.19%] top-[calc(50%_+_60.7px)] left-[6.95%] font-medium inline-block h-[21px]"
        >
          20
        </div>
        <div
          class="absolute w-[2.19%] top-[calc(50%_+_18.5px)] left-[6.95%] font-medium inline-block h-[21px]"
        >
          30
        </div>
        <div
          class="absolute w-[2.19%] top-[calc(50%_-_23.5px)] left-[6.95%] font-medium inline-block h-[21px]"
        >
          40
        </div>
        <div
          class="absolute w-[2.19%] top-[calc(50%_-_65.5px)] left-[6.95%] font-medium inline-block h-[21px]"
        >
          50
        </div>
        <div
          class="absolute top-[0px] left-[0px] w-[935.7px] h-[60px] text-left text-gray1-600 font-body-input-14px-r"
        >
          <div
            class="absolute top-[30px] left-[587.7px] flex flex-row items-center justify-start gap-[30px]"
          >
            <div
              class="relative box-border w-[65px] h-1 border-t-[4px] border-solid border-grey-white"
            />
            <div class="relative leading-[20px]">Previsão anual</div>
            <div
              class="rounded bg-grey-white overflow-hidden flex flex-row items-center justify-start py-1 px-2.5 gap-[10px] text-sm text-light-black border-[1px] border-solid border-separator-light-default"
            >
              <div class="relative leading-[22px]">2023</div>
              <img
                class="relative w-3.5 h-3.5"
                alt=""
                src="/feathericon--calendar.svg"
              />
            </div>
            <div
              class="rounded bg-grey-white overflow-hidden flex flex-row items-center justify-start p-2 border-[1px] border-solid border-separator-light-default"
            >
              <img
                class="relative w-3.5 h-3.5"
                alt=""
                src="/feathericon--morehorizontal.svg"
              />
            </div>
          </div>
          <div
            class="absolute top-[0px] left-[0px] w-[159px] h-14 overflow-hidden flex flex-row items-center justify-start gap-[10px] text-11xl text-light-black font-abel"
          >
            <div class="relative">Demandas</div>
            <img
              class="relative w-[18px] h-[18px]"
              alt=""
              src="/feathericon--alertcircle1.svg"
            />
          </div>
        </div>
      </div>
      <div
        class="absolute top-[140px] left-[146.4px] w-[774.9px] h-[228px] text-left text-sm"
      >
        <div
          class="absolute top-[204px] left-[7px] w-[767.9px] h-6 flex flex-row items-center justify-start gap-[20px]"
        >
          <div
            class="relative font-medium inline-block w-[67px] h-[23px] shrink-0"
          >
            jan.
          </div>
          <div
            class="relative font-medium inline-block w-[67px] h-[23px] shrink-0"
          >
            fev.
          </div>
          <div
            class="relative font-medium inline-block w-[75px] h-[23px] shrink-0"
          >
            mar.
          </div>
          <div class="relative font-medium inline-block w-[63px] h-6 shrink-0">
            abr.
          </div>
          <div class="relative font-medium inline-block w-[76px] h-6 shrink-0">
            maio.
          </div>
          <div class="relative font-medium inline-block w-[68px] h-6 shrink-0">
            jun.
          </div>
          <div class="relative font-medium inline-block w-[68px] h-6 shrink-0">
            ago.
          </div>
          <div class="relative font-medium inline-block w-[73px] h-6 shrink-0">
            set.
          </div>
          <div
            class="relative font-medium inline-block w-12 h-[23.5px] shrink-0"
          >
            out.
          </div>
        </div>
        <div
          class="absolute top-[0px] left-[0px] w-[756.9px] flex flex-row items-end justify-start gap-[60px]"
        >
          <img
            class="relative w-[30px] h-[111.4px] mix-blend-normal"
            alt=""
            src="/rectangle1.svg"
          />
          <img
            class="relative w-[30px] h-[165.5px] mix-blend-normal"
            alt=""
            src="/rectangle-copy-3.svg"
          />
          <img
            class="relative w-[30px] h-[140.1px] mix-blend-normal"
            alt=""
            src="/rectangle-copy-4.svg"
          />
          <img
            class="relative w-[30px] h-[86px] mix-blend-normal"
            alt=""
            src="/rectangle-copy-5.svg"
          />
          <img
            class="relative w-[30px] h-[111.4px] mix-blend-normal"
            alt=""
            src="/rectangle1.svg"
          />
          <img
            class="relative w-[30px] h-[140.1px] mix-blend-normal"
            alt=""
            src="/rectangle-copy-4.svg"
          />
          <img
            class="relative w-[30px] h-[86px] mix-blend-normal"
            alt=""
            src="/rectangle-copy-5.svg"
          />
          <img
            class="relative w-[30px] h-[191px]"
            alt=""
            src="/rectangle-copy-21.svg"
          />
          <img
            class="relative w-[30px] h-[86px] mix-blend-normal"
            alt=""
            src="/rectangle-copy-5.svg"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "DashboardProfissional",
    methods: {
      onNavLinksDark1Click() {
        this.$router.push("/dashboard-profissional-pedidos");
      },
      onNavLinksDark2Click() {
        this.$router.push("/dashboard-profissional-chat");
      },
      onNavLinksDark3Click() {
        this.$router.push("/dashboard-profissional-configuraes");
      },
      onNavLinksDark4Click() {
        this.$router.push("/dashboard-profissional-configuraes1");
      },
    },
  });
</script>
