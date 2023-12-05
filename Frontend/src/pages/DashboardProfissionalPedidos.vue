<template>
  <div
    class="relative bg-grey-white w-full h-[1203px] overflow-hidden text-left text-lg text-gray1-1100 font-lato"
  >
    <img
      class="absolute top-[25px] left-[60px] w-[126px] h-[101px] object-cover"
      alt=""
      src="/free-sample-by-wix-1-1-1@2x.png"
    />
    <div
      class="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-8xs rounded-br-8xs rounded-bl-none bg-gray1-1500 shadow-[-1px_0px_0px_#3e3e3e_inset] w-[313px] h-[1203px] overflow-hidden text-center text-base text-grey-white font-roboto"
    >
      <div
        class="absolute top-[243px] left-[29.2px] box-border w-[254.5px] h-[0.5px] border-t-[0.5px] border-solid border-whitesmoke-200"
      />
      <div
        class="absolute top-[24.2px] left-[calc(50%_-_107px)] w-[214px] h-[219px] flex flex-col items-center justify-center"
      >
        <div class="relative w-[135.5px] h-[166px]">
          <div
            class="absolute top-[113.1px] left-[calc(50%_-_67.75px)] leading-[150%] inline-block w-[135.5px] h-[25.8px]"
          >
            Ednaldo Pereira
          </div>
          <div
            class="absolute top-[143.9px] left-[calc(50%_-_38.15px)] text-smi leading-[150%] text-darkgray-700 inline-block w-[76.4px] h-[22.1px]"
          >
            Pedreiro
          </div>
          <img
            class="absolute top-[0px] left-[calc(50%_-_52.05px)] rounded-[50%] w-[106.5px] h-[106.4px] object-cover"
            alt=""
            src="/unsplashohkelokq3re3@2x.png"
          />
          <img
            class="absolute top-[0px] left-[19.7px] rounded-81xl w-[98.5px] h-[98.4px] object-cover"
            alt=""
            src="/image-1@2x.png"
          />
        </div>
      </div>
      <div
        class="absolute top-[243.2px] left-[calc(50%_-_156.5px)] w-[313px] h-[884px] flex flex-col items-start justify-start py-2.5 px-0 box-border gap-[8px] text-left text-xl text-gray-100"
      >
        <div class="self-stretch relative bg-gray1-1500 h-[41px]">
          <img
            class="absolute top-[calc(50%_-_11.5px)] left-[24px] w-6 h-6 overflow-hidden opacity-[0.9]"
            alt=""
            src="/tab.svg"
          />
          <div
            class="absolute top-[calc(50%_-_7.5px)] left-[71px] leading-[100%] cursor-pointer " @click="onNavLinksDark2ClickDashboard()"
          >
            Dashboard
          </div>
        </div>
        <div class="relative bg-gray1-1500 w-[313px] h-12 text-dimgray-500">
          <img
            class="absolute top-[calc(50%_-_12px)] left-[24px] w-6 h-6 overflow-hidden opacity-[0.9]"
            alt=""
            src="/business1.svg"
          />
          <div
            class="absolute top-[calc(50%_-_8px)] left-[71px] leading-[100%]"
          >
            Pedidos
          </div>
        </div>
        <div
          class="relative w-60 h-12 cursor-pointer"
          @click="onNavLinksDark2Click"
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
          class="relative w-60 h-12 cursor-pointer"
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
          class="relative w-60 h-12 cursor-pointer"
          @click="onNavLinksDark4Click"
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
      class="absolute w-[calc(100%_-_313px)] top-[0px] right-[0px] left-[313px] box-border overflow-hidden flex flex-row items-center justify-between py-boundvariablesdata4 px-boundvariablesdata3 text-center text-sm text-black-40 font-regular border-b-[1px] border-solid border-black-10"
    >
      <div class="flex flex-row items-center justify-start gap-[8px]">
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
              <div class="self-stretch relative leading-[20px]">Pedidos</div>
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
        class="flex flex-row items-start justify-start gap-[20px] text-left text-black-20"
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
      class="absolute top-[68px] left-[313px] w-[100%] h-[1135px] text-center text-sm text-black-40 font-regular"
    >
      <div
        class="absolute top-[1.1px] left-[0px] rounded-8xs bg-grey-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[100%] h-[1133.9px]"
      />
      <div
        class="absolute w-full top-[104.4px] right-[0px] left-[0px] box-border h-[17.1px] overflow-hidden flex flex-row items-center justify-between py-boundvariablesdata4 px-boundvariablesdata3 border-b-[1px] border-solid border-black-10"
      >
        <div class="hidden flex-row items-center justify-start gap-[8px]">
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
                <div class="self-stretch relative leading-[20px]" >
                  Dashboards
                </div>
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
          class="hidden flex-row items-start justify-start gap-[20px] text-left text-black-20"
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
                <img
                  class="relative w-size-20 h-size-20"
                  alt=""
                  src="/sun.svg"
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
        class="absolute top-[0px] left-[0px] w-[100%] h-[117.2px] flex flex-row items-start justify-start gap-[105px] text-base text-gray1-1500 font-roboto"
      >
        <div class="relative w-[166px] h-[110px]">
          <div
            class="absolute top-[0px] left-[0px] bg-grey-white w-[166px] h-[106px]"
          />
          <div
            class="absolute top-[72px] left-[17px] leading-[13px] inline-block w-[132px] h-[38px]"
          >
            Aguardando Orçamento
          </div>
          <img
            class="absolute h-[35.45%] w-[25.9%] top-[19.09%] right-[37.95%] bottom-[45.45%] left-[36.14%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vuesaxoutlinetimer.svg"
          />
        </div>
        <div class="relative w-[166px] h-[107px]">
          <img
            class="absolute top-[0px] left-[0px] w-[166px] h-[106px]"
            alt=""
            src="/rectangle.svg"
          />
          <div
            class="absolute top-[72px] left-[16px] leading-[13px] inline-block w-[130px] h-[35px]"
          >
            Orçamento Enviado
          </div>
          <img
            class="absolute h-[40.19%] w-[28.31%] top-[18.69%] right-[39.16%] bottom-[41.12%] left-[32.53%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vuesaxoutlinemoneysend.svg"
          />
        </div>
        <div class="relative w-[166px] h-[106px]">
          <div
            class="absolute top-[0px] left-[0px] bg-grey-white w-[166px] h-[106px]"
          />
          <div
            class="absolute top-[69px] left-[10px] leading-[13px] inline-block w-[134px] h-[30px]"
          >
            Pedidos Contratados
          </div>
          <img
            class="absolute h-[42.45%] w-[28.92%] top-[16.98%] right-[38.55%] bottom-[40.57%] left-[32.53%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vuesaxoutlinedollarcircle.svg"
          />
        </div>
        <div class="relative w-[166px] h-[106px]">
          <div
            class="absolute top-[0px] left-[0px] bg-grey-white w-[166px] h-[106px]"
          />
          <div
            class="absolute top-[72px] left-[7px] leading-[13px] inline-block w-[148px] h-[34px]"
          >
            Pagamento Pendente
          </div>
          <img
            class="absolute h-[35.38%] w-[24.4%] top-[25.28%] right-[38.98%] bottom-[39.34%] left-[36.63%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector2.svg"
          />
        </div>
        <div class="relative w-[166px] h-[117px]">
          <div
            class="absolute top-[0px] left-[0px] bg-grey-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[166px] h-[117px]"
          />
          <div
            class="absolute top-[76.6px] left-[15.9px] leading-[13px] inline-block w-[134.2px] h-[15.3px]"
          >
            Concluídos
          </div>
          <img
            class="absolute h-[32.91%] w-[24.4%] top-[22.91%] right-[37.77%] bottom-[44.19%] left-[37.83%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector3.svg"
          />
        </div>
        <div class="relative w-[166px] h-[106px]">
          <div
            class="absolute top-[0px] left-[0px] bg-grey-white w-[166px] h-[106px]"
          />
          <div
            class="absolute top-[76.6px] left-[15.9px] leading-[13px] inline-block w-[134.2px] h-[15.3px]"
          >
            Cancelados
          </div>
          <img
            class="absolute h-[32.55%] w-[23.19%] top-[29.06%] right-[38.37%] bottom-[38.4%] left-[38.43%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector4.svg"
          />
        </div>
      </div>
     
    </div>
    <div class="absolute top-[238px] left-[346px] w-[100%] h-[747px]">
      <div
        class="absolute top-[1px] left-[0px] bg-mediumaquamarine-100 w-[35px] h-[223px]"
      />
      <div
        class="absolute top-[0px] left-[19px] rounded-lg bg-grey-white shadow-[0px_4px_12px_rgba(0,_0,_0,_0.12)] w-[100%] h-[223px]"
      />
      <img
        class="absolute top-[549px] left-[65px] w-[200px] h-[198px] object-cover"
        alt=""
        src="/rectangle-54@2x.png"
      />
    </div>
    <div class="absolute top-[774px] left-[346px] w-[100%] h-56">
      <div
        class="absolute top-[1px] left-[0px] bg-mediumaquamarine-100 w-[35px] h-[223px]"
      />
      <div
        class="absolute top-[0px] left-[19px] rounded-lg bg-grey-white shadow-[0px_4px_12px_rgba(0,_0,_0,_0.12)] w-[100%] h-[223px]"
      />
    </div>
    
    <div class="absolute top-[506px] left-[346px] w-[100%] h-56">
      <div
        class="absolute top-[1px] left-[0px] bg-mediumaquamarine-100 w-[35px] h-[223px]"
      />
      <div
        class="absolute top-[0px] left-[19px] rounded-lg bg-grey-white shadow-[0px_4px_12px_rgba(0,_0,_0,_0.12)] w-[100%] h-[223px]"
      />
    </div>
    <img
      class="absolute top-[254px] left-[403px] w-[200px] h-[194px] object-cover"
      alt=""
      src="/image-21@2x.png"
    />
    <img
      class="absolute top-[787px] left-[397px] w-[200px] h-[194px] object-cover"
      alt=""
      src="/image-3@2x.png"
    />
    <img
      class="absolute top-[521px] left-[397px] w-[200px] h-[194px] object-cover"
      alt=""
      src="/image-5@2x.png"
    />
    <b
      class="absolute top-[22.78%] left-[45.84%] text-5xl [transform:_rotate(0.18deg)] [transform-origin:0_0]"
      >Aplicação de argamassa</b
    >
    <div class="absolute top-[26.85%] left-[45.83%] font-roboto">Periodo :</div>
    <div class="absolute top-[29.59%] left-[45.83%] font-roboto">Cliente:</div>
    <div class="absolute top-[27.1%] left-[51.88%] text-gray1-800">
      3 Outubro 2020 a 6 de Outubro de 2020
    </div>
    <div class="absolute top-[29.76%] left-[50.76%] text-gray1-800">
      Anna Kathy
    </div>
    <div class="absolute top-[390px] left-[1116px] rounded-lg" />
    <div
      class="absolute w-[calc(100%_-_1336px)] top-[404px] right-[101px] left-[46%] rounded-lg bg-mediumaquamarine-200 box-border h-[29px] border-[1px] border-solid border-powderblue"
    />
    <div class="absolute top-[34%] left-[48%] text-mini text-color-7">
      Detalhes
    </div>
    <b
      class="absolute top-[45.47%] left-[45.84%] text-5xl [transform:_rotate(0.18deg)] [transform-origin:0_0]"
      >Aplicação de argamassa</b
    >
    <div class="absolute top-[49.49%] left-[45.83%] font-roboto">Periodo :</div>
    <div class="absolute top-[51.82%] left-[45.83%] font-roboto">Cliente:</div>
    <div class="absolute top-[49.49%] left-[50.9%] text-gray1-800">
      3 Outubro 2020 a 6 de Outubro de 2020
    </div>
    <div class="absolute top-[51.82%] left-[50.9%] text-gray1-800">
      Anna Kathy
    </div>
    <div
      class="absolute w-[calc(100%_-_1336px)] top-[676.4px] right-[101px] left-[46%] rounded-lg bg-mediumaquamarine-200 box-border h-[29px] border-[1px] border-solid border-powderblue"
    />
    <div class="absolute top-[56.64%] left-[48%] text-mini text-color-7">
      Detalhes
    </div>
    <b
      class="absolute top-[67.25%] left-[45.84%] text-5xl [transform:_rotate(0.18deg)] [transform-origin:0_0]"
      >Aplicação de argamassa</b
    >
    <div class="absolute top-[71.52%] left-[45.83%] font-roboto">Periodo :</div>
    <div class="absolute top-[73.85%] left-[45.83%] font-roboto">Cliente:</div>
    <div class="absolute top-[71.52%] left-[50.9%] text-gray1-800">
      3 Outubro 2020 a 6 de Outubro de 2020
    </div>
    <div class="absolute top-[73.85%] left-[50.9%] text-gray1-800">
      Anna Kathy
    </div>
    <div
      class="absolute w-[calc(100%_-_1336px)] top-[941.4px] right-[101px] left-[46%] rounded-lg bg-mediumaquamarine-200 box-border h-[29px] border-[1px] border-solid border-powderblue"
    />
    <div class="absolute top-[78.64%] left-[48%] text-mini text-color-7"> Detalhes </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  
  export default defineComponent({
    name: "DashboardProfissionalPedidos",
    methods: {
      onNavLinksDark2Click() {
        this.$router.push("/dashboard-profissional-chat");
      },
      onNavLinksDark3Click() {
        this.$router.push("/dashboard-profissional-configuraes");
      },
      onNavLinksDark4Click() {
        this.$router.push("/dashboard-profissional-configuraes1");
      },
      onNavLinksDark2ClickDashboard() {
        this.$router.push("/dashboard-profissional");
      },
    },
  });
</script>
