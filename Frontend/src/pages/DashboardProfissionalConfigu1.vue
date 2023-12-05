<template>
  <div
    class="relative bg-grey-white w-full h-[1440px] overflow-hidden text-left text-xl text-dimgray-300 font-roboto"
  >
    <img
      class="absolute top-[25px] left-[60px] w-[126px] h-[101px] object-cover"
      alt=""
      src="/free-sample-by-wix-1-1-1@2x.png"
    />
    <div
      class="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-8xs rounded-br-8xs rounded-bl-none bg-gray1-1500 shadow-[-1px_0px_0px_#3e3e3e_inset] w-[313px] h-[1440px] overflow-hidden text-center text-base text-grey-white"
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
            src="/unsplashohkelokq3re1@2x.png"
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
            class="absolute top-[calc(50%_-_7.5px)] left-[71px] leading-[100%] cursor-pointer" @click="onNavDashboard()"
          >
            Dashboard
          </div>
        </div>
        <div
          class="relative bg-gray1-1500 w-[313px] h-12 cursor-pointer"
          @click="onNavLinksDark1Click"
        >
          <img
            class="absolute top-[calc(50%_-_12px)] left-[24px] w-6 h-6 overflow-hidden opacity-[0.9]"
            alt=""
            src="/business.svg"
          />
          <div
            class="absolute top-[calc(50%_-_8px)] left-[71px] leading-[100%]"
          >
            Pedidos
          </div>
        </div>
        <div
          class="relative w-60 h-12 cursor-pointer"
        >
          <div
            class="absolute top-[calc(50%_-_8px)] left-[71px] leading-[100%]"
          >
            Chat
          </div>
          <img
            class="absolute h-[56.25%] w-[11.25%] top-[32.92%] right-[79.17%] bottom-[10.83%] left-[9.58%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/communication--chat-circle.svg"
          />
        </div>
        <div class="relative w-60 h-12 text-dimgray-500">
          <img
            class="absolute top-[11.8px] left-[24px] w-6 h-6 overflow-hidden opacity-[0.9]"
            alt=""
            src="/settings1.svg"
          />
          <div
            class="absolute top-[calc(50%_-_8px)] left-[71px] leading-[100%]"
          >
            Configurações
          </div>
        </div>
        <div
          class="relative w-60 h-12 cursor-pointer"
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
              <div class="self-stretch relative leading-[20px]">
                Configurações
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
      class="absolute top-[1333px] left-[1272px] w-[385px] h-[65px] text-center text-6xl text-grey-white"
    >
      <div class="absolute top-[0px] left-[0px] w-[385px] h-[65px]">
        <div
          class="absolute top-[0px] left-[0px] rounded-lg bg-color-7 w-[385px] h-[65px]"
        />
        <b
          class="absolute top-[18px] left-[155px] tracking-[0.25px] leading-[28px] inline-block w-[76px] h-7"
          >Salvar</b
        >
      </div>
    </div>
    <div
      class="absolute top-[1333px] left-[825px] w-[385px] h-[65px] cursor-pointer text-center text-6xl text-grey-white"
      @click="onGroupContainer5Click"
    >
      <div
        class="absolute top-[0px] left-[0px] rounded-lg bg-color-7 w-[385px] h-[65px]"
      />
      <b
        class="absolute top-[18px] left-[132px] tracking-[0.25px] leading-[28px] inline-block w-[122px] h-7"
        >Sair</b
      >
    </div>
    <div
      class="absolute top-[100px] left-[calc(50%_-_282.5px)] w-[211px] h-[211px]"
    >
      <img
        class="absolute top-[0px] left-[calc(50%_-_109.5px)] rounded-[50%] w-[219px] h-[219px] object-cover"
        alt=""
        src="/unsplashohkelokq3re2@2x.png"
      />
      <img
        class="absolute top-[0px] left-[0px] rounded-81xl w-[211px] h-[211px] object-cover"
        alt=""
        src="/image-110@2x.png"
      />
    </div>
    <div
      class="absolute top-[341px] left-[598px] text-11xl text-lightseagreen-100 inline-block w-[151px] h-[26px]"
    >
      Alterar foto
    </div>
    <div class="absolute top-[419px] left-[439px] w-[512px] h-[111.3px]">
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
        Ednaldo Pereira
      </div>
    </div>
    <div class="absolute top-[594px] left-[442px] w-[512px] h-[111.3px]">
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
        class="absolute top-[63px] left-[33px] tracking-[0.25px] leading-[28px] text-darkgray-400 inline-block w-[257px] h-9"
      >
        pereiraEdnaldo@gmail.com
      </div>
    </div>
    <div class="absolute top-[278px] left-[1079px] w-[512px] h-[80.3px]">
      <div
        class="absolute top-[0px] left-[0px] rounded-lg bg-grey-white box-border w-[512px] h-[80.3px] border-[1px] border-solid border-lightgray-200"
      />
    </div>
    <div
      class="absolute w-[25.28%] top-[calc(50%_-_473px)] right-[10.88%] left-[63.83%] h-[41.8px]"
    >
      <div
        class="absolute w-full top-[calc(50%_-_20.9px)] left-[0%] tracking-[0.25px] leading-[28px] inline-block h-[41.8px]"
      >
        Cidade
      </div>
    </div>
    <div
      class="absolute top-[306px] left-[1109px] tracking-[0.25px] leading-[28px] text-darkgray-400 inline-block w-[325px] h-9"
    >
      Mônaco
    </div>
    <div class="absolute top-[419px] left-[1079px] w-[512px] h-[111.3px]">
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
    <div class="absolute top-[592px] left-[1079px] w-[512px] h-[111.3px]">
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
    <div class="absolute top-[115px] left-[1079px] w-[512px] h-[111.3px]">
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
    <div class="absolute top-[937px] left-[441px] w-[512px] h-[152.3px]">
      <div class="absolute top-[0px] left-[0px] w-[512px] h-[152.3px]">
        
        <div class="absolute top-[72px] left-[0px] w-[512px] h-[80.3px]">
          <div
            class="absolute top-[0px] left-[0px] rounded-lg bg-grey-white box-border w-[512px] h-[80.3px] border-[1px] border-solid border-lightgray-200"
          />
          <img class="relative w-[24.7px] left-[450px] top-[25px] h-[24.7px]" alt="" src="/icon14.svg" />
        </div>
        
        <div
          class="absolute w-[83.69%] top-[calc(50%_-_76.15px)] right-[16.31%] left-[0%] h-[41.8px]"
        >
          <div
            class="absolute w-full top-[calc(50%_-_20.9px)] right-[0%] left-[0%] h-[41.8px]"
          >
            <div
              class="absolute w-full top-[calc(50%_-_20.9px)] left-[0%] tracking-[0.25px] leading-[28px] inline-block h-[41.8px]"
            >
              Anexe alguma alteração nos documentos requeridos no contrato
            </div>
          </div>
        </div>
      </div>
     
    </div>
    <div class="absolute top-[947px] left-[1083px] w-[512px] h-[129.3px]">
      <div class="absolute top-[0px] left-[0px] w-[512px] h-[129.3px]">
        <div class="absolute top-[0px] left-[0px] w-[512px] h-[129.3px]">
          <div class="absolute top-[49px] left-[0px] w-[512px] h-[80.3px]">
            <div
              class="absolute top-[0px] left-[0px] rounded-lg bg-grey-white box-border w-[512px] h-[80.3px] border-[1px] border-solid border-lightgray-200"
            />
          </div>
          <div
            class="absolute w-[83.69%] top-[calc(50%_-_64.65px)] right-[16.31%] left-[0%] h-[41.8px]"
          >
            <div
              class="absolute w-full top-[calc(50%_-_20.9px)] right-[0%] left-[0%] h-[41.8px]"
            >
              <div
                class="absolute w-full top-[calc(50%_-_20.9px)] left-[0%] tracking-[0.25px] leading-[28px] inline-block h-[41.8px]"
              >
                Profissão
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="absolute top-[75px] left-[36px] tracking-[0.25px] leading-[28px] text-darkgray-400 inline-block w-[325px] h-9"
      >
        Pedreiro
      </div>
    </div>
    <div class="absolute top-[765px] left-[445px] w-[512px] h-[129.3px]">
      <div class="absolute top-[0px] left-[0px] w-[512px] h-[129.3px]">
        <div class="absolute top-[0px] left-[0px] w-[512px] h-[129.3px]">
          <div class="absolute top-[49px] left-[0px] w-[512px] h-[80.3px]">
            <div
              class="absolute top-[0px] left-[0px] rounded-lg bg-grey-white box-border w-[512px] h-[80.3px] border-[1px] border-solid border-lightgray-200"
            />
          </div>
          <div
            class="absolute w-[83.69%] top-[calc(50%_-_64.65px)] right-[16.31%] left-[0%] h-[41.8px]"
          >
            <div
              class="absolute w-full top-[calc(50%_-_20.9px)] right-[0%] left-[0%] h-[41.8px]"
            >
              <div
                class="absolute w-full top-[calc(50%_-_20.9px)] left-[0%] tracking-[0.25px] leading-[28px] inline-block h-[41.8px]"
              >
                Dados Bancários
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="absolute top-[75px] left-[36px] tracking-[0.25px] leading-[28px] text-darkgray-400 inline-block w-[325px] h-9"
      >
        Cc 9876 Ag 123456789-0
      </div>
    </div>
    <div class="absolute top-[765px] left-[1095px] w-[512px] h-[129.3px]">
      <div class="absolute top-[0px] left-[0px] w-[512px] h-[129.3px]">
        <div class="absolute top-[0px] left-[0px] w-[512px] h-[129.3px]">
          <div class="absolute top-[49px] left-[0px] w-[512px] h-[80.3px]">
            <div
              class="absolute top-[0px] left-[0px] rounded-lg bg-grey-white box-border w-[512px] h-[80.3px] border-[1px] border-solid border-lightgray-200"
            />
          </div>
          <div
            class="absolute w-[83.69%] top-[calc(50%_-_64.65px)] right-[16.31%] left-[0%] h-[41.8px]"
          >
            <div
              class="absolute w-full top-[calc(50%_-_20.9px)] right-[0%] left-[0%] h-[41.8px]"
            >
              <div
                class="absolute w-full top-[calc(50%_-_20.9px)] left-[0%] tracking-[0.25px] leading-[28px] inline-block h-[41.8px]"
              >
                CPF
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="absolute top-[75px] left-[36px] tracking-[0.25px] leading-[28px] text-darkgray-400 inline-block w-[325px] h-9"
      >
        123.456.789-00
      </div>
    </div>
    <div
      class="absolute top-[172px] left-[784px] w-[794px] h-[879px] text-center text-mini text-grey-white"
    >
      <div
        class="absolute top-[0px] left-[631px] rounded-8xs bg-mediumaquamarine-300 w-40 h-7"
      />
      <b
        class="absolute top-[1px] left-[688px] tracking-[0.25px] leading-[28px] inline-block w-[52px] h-3"
        >Alterar</b
      >
      <div class="absolute top-[136px] left-[0px] w-[794px] h-[743px]">
        <div
          class="absolute top-[0px] left-[631px] rounded-8xs bg-mediumaquamarine-300 w-40 h-7"
        />
        <b
          class="absolute top-[1px] left-[688px] tracking-[0.25px] leading-[28px] inline-block w-[52px] h-3"
          >Alterar</b
        >
        <div class="absolute top-[174px] left-[0px] w-[794px] h-[569px]">
          <div
            class="absolute top-[167px] left-[631px] rounded-8xs bg-mediumaquamarine-300 w-40 h-7"
          />
          <b
            class="absolute top-[168px] left-[688px] tracking-[0.25px] leading-[28px] inline-block w-[52px] h-3"
            >Alterar</b
          >
          <div class="absolute top-[0px] left-[0px] w-[794px] h-[569px]">
            <div class="absolute top-[541px] left-[634px] w-40 h-7">
              <div
                class="absolute top-[0px] left-[0px] rounded-8xs bg-mediumaquamarine-300 w-40 h-7"
              />
              <b
                class="absolute top-[1px] left-[57px] tracking-[0.25px] leading-[28px] inline-block w-[52px] h-3"
                >Alterar</b
              >
            </div>
            <div class="absolute top-[0px] left-[0px] w-40 h-[198px]">
              <div
                class="absolute top-[170px] left-[0px] rounded-8xs bg-mediumaquamarine-300 w-40 h-7"
              />
              <b
                class="absolute top-[171px] left-[57px] tracking-[0.25px] leading-[28px] inline-block w-[52px] h-3"
                >Alterar</b
              >
              <div class="absolute top-[0px] left-[0px] w-40 h-7">
                <div
                  class="absolute top-[0px] left-[0px] rounded-8xs bg-mediumaquamarine-300 w-40 h-7"
                />
                <b
                  class="absolute top-[1px] left-[57px] tracking-[0.25px] leading-[28px] inline-block w-[52px] h-3"
                  >Alterar</b
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="absolute top-[1119px] left-[376px] w-[1287px] h-[171px] text-center text-11xl text-dimgray-600"
    >
      <img
        class="absolute top-[-0.4px] left-[0px] w-[1287px] h-[4.9px]"
        alt=""
        src="/line-211.svg"
      />
      <b class="absolute top-[23px] left-[33px] inline-block w-[371px] h-[34px]"
        >Alterar dados pessoais</b
      >
      <div
        class="absolute top-[79px] left-[55px] text-xl text-gray1-700 text-left inline-block w-[739px] h-[92px]"
      >
        Ao Alterar os dados pessoais da sua conta, você passará por um processo
        de avaliação, pois se trata de um contrato e devemos garantir que os
        dados sejam condizentes
      </div>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "DashboardProfissionalConfigu1",
    methods: {
      onNavLinksDark1Click() {
        this.$router.push("/dashboard-profissional-pedidos");
      },
      onNavDashboard() {
        this.$router.push("/dashboard-profissional");
      },
      onNavLinksDark2Click() {
        this.$router.push("/dashboard-profissional-chat");
      },
      onNavLinksDark4Click() {
        this.$router.push("/dashboard-profissional-configuraes1");
      },
      onGroupContainer5Click() {
        this.$router.push("/");
      },
    },
  });
</script>
