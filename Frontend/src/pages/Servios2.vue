<template>
  <div
    class="relative bg-grey-white w-full h-[2724px] overflow-hidden text-center text-xl text-gray1-1500 font-roboto"
  >
    <div class="absolute top-[32px] left-[-11px] w-[1451px] h-[119px]">
      <div
        class="absolute top-[57.5px] left-[759.5px] box-border w-[79px] h-px border-t-[1px] border-solid border-gray1-1500"
      />
      <div
        class="absolute top-[28px] left-[661px] flex flex-row items-start justify-start gap-[50px]"
      >
        <div class="relative">Início</div>
        <div class="relative">Serviços</div>
      </div>
      <img
        class="absolute top-[0px] left-[68px] w-[129px] h-[99px] overflow-hidden"
        alt=""
        src="/group-7-12.svg"
      />
      <div
        class="absolute top-[118.5px] left-[-0.5px] box-border w-[1452px] h-px border-t-[1px] border-solid border-gray1-1500"
      />
    </div>
    <div class="absolute top-[32px] left-[-11px] w-[1451px] h-[119px]">
      <div
        class="absolute top-[57.5px] left-[759.5px] box-border w-[79px] h-px border-t-[1px] border-solid border-gray1-1500"
      />
      <div
        class="absolute top-[28px] left-[661px] flex flex-row items-start justify-start gap-[50px]"
      >
        <div class="relative cursor-pointer" @click="onIncioText1Click">
          Início
        </div>
        <div class="relative cursor-pointer" @click="onServiosText1Click">
          Serviços
        </div>
      </div>
      <img
        class="absolute top-[0px] left-[68px] w-[129px] h-[99px] overflow-hidden cursor-pointer"
        alt=""
        src="/group-7-12.svg"
        @click="onGroup711Click"
      />
      <div
        class="absolute top-[118.5px] left-[-0.5px] box-border w-[1452px] h-px border-t-[1px] border-solid border-gray1-1500"
      />
    </div>
    <div
      class="absolute top-[60px] left-[866px] w-[127px] h-[23px] cursor-pointer"
      @click="onGroupContainer2Click"
    >
      <div class="absolute top-[0px] left-[0px]">Meus Pedidos</div>
    </div>
    <div class="absolute top-[151px] left-[0px] w-[1440px] h-[575px] text-2xs">
      <div class="absolute top-[0px] left-[0px] w-[1440px] h-[467px]">
        <div
          class="absolute top-[0px] left-[0px] bg-mediumaquamarine-500 w-[1440px] h-[467px]"
        />
      </div>
      <div
        class="absolute top-[485px] left-[74px] flex flex-col items-start justify-start"
      >
        <div class="flex flex-row items-end justify-start">
          <div class="relative w-[1284px] h-[90px]">
            <div class="absolute top-[0px] left-[0px] w-[94px] h-[90px]">
              <div
                class="absolute top-[0px] left-[0px] rounded-sm bg-whitesmoke-500 shadow-[0px_2px_2px_#e5e5e5] w-[94px] h-[90px]"
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
          class="absolute top-[0px] left-[0px] leading-[24px] inline-block w-[594px]"
        >
          Encontre profissionais verificados e qualificados para o seu projeto
        </div>
        <div
          class="absolute top-[72px] left-[50px] w-[488px] h-[52px] text-mini text-gray1-1700"
        >
          <div
            class="absolute top-[0px] left-[0px] rounded-8xs bg-grey-white w-[488px] h-[52px]"
          />
          <div
            class="absolute top-[14px] left-[32px] leading-[24px] inline-block w-[153px]"
          >
            Buscar serviço
          </div>
        </div>
      </div>
    </div>
    <div class="absolute top-[187px] left-[186px] w-[310px] h-[431px]" />
    <img
      class="absolute top-[167px] left-[136px] w-[533px] h-[451px] object-cover"
      alt=""
      src="/canalizadorcomosbracoscruzadosremovebgpreview-1-1@2x.png"
    />
    <div
      class="absolute w-full right-[0px] bottom-[0px] left-[0px] h-[329.6px] text-left text-mini text-grey-white font-regular"
    >
      <div
        class="absolute w-full right-[0px] bottom-[0px] left-[0px] bg-gray1-1500 h-[329.6px]"
      />
      <div
        class="absolute top-[49.6px] left-[384px] h-[143.7px] flex flex-row items-center justify-start gap-[30px]"
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
      class="absolute top-[2276px] left-[578px] w-[316px] h-[37px] text-smi text-color-5 font-body-input-14px-r"
    >
      <div
        class="absolute top-[0px] left-[50px] rounded-31xl flex flex-row items-center justify-start py-2 px-4 border-[2px] border-solid border-color-5"
      >
        <div class="relative font-semibold">1</div>
      </div>
      <div
        class="absolute top-[0px] left-[147px] rounded-31xl flex flex-row items-center justify-start py-2 px-4 border-[2px] border-solid border-color-5"
      >
        <div class="relative font-semibold">3</div>
      </div>
      <div
        class="absolute top-[0px] left-[220px] rounded-31xl flex flex-row items-center justify-start py-2 px-4 border-[2px] border-solid border-color-5"
      >
        <div class="relative font-semibold">15</div>
      </div>
      <div
        class="absolute top-[0px] left-[278px] rounded-31xl flex flex-row items-center justify-start py-2 px-4 text-lg border-[2px] border-solid border-color-5"
      >
        <div
          class="relative font-semibold flex items-center justify-center w-1.5 h-[21px] shrink-0"
        >
          ›
        </div>
      </div>
      <div
        class="absolute top-[0px] left-[38px] rounded-31xl flex flex-row items-center justify-start py-2 px-4 [transform:_rotate(-180deg)] [transform-origin:0_0] text-lg border-[2px] border-solid border-color-5"
      >
        <div
          class="relative font-semibold flex items-center justify-center w-1.5 h-[21px] shrink-0"
        >
          ›
        </div>
      </div>
      <div
        class="absolute top-[0px] left-[97px] rounded-31xl bg-color-1 flex flex-row items-center justify-start py-2 px-4 text-color-7"
      >
        <div
          class="relative font-semibold flex items-center justify-center w-1.5 h-[21px] shrink-0"
        >
          2
        </div>
      </div>
      <div class="absolute top-[5px] left-[199px] text-sm leading-[210%]">
        ...
      </div>
    </div>
    <div class="absolute top-[39px] left-[1173px] w-[206px] h-[65px] text-6xl">
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
    </div>
    <div
      class="absolute top-[39px] left-[1173px] w-[236px] h-[65px] cursor-pointer text-6xl"
      :onClick="openPopUpSair1"
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
        class="absolute h-[45.85%] w-[12.71%] top-[35.38%] right-[0%] bottom-[18.77%] left-[87.29%] max-w-full overflow-hidden max-h-full cursor-pointer"
        alt=""
        src="/arrow--caret-down-md1.svg"
        :onClick="openPopUpSair"
      />
    </div>
    <div
      class="absolute top-[937.3px] left-[31px] w-[1409.2px] h-[1255.7px] text-left text-lg text-color-5"
    >
      <div
        class="absolute top-[0px] left-[0px] w-[1409.2px] h-[1255.7px] text-center text-xs font-body-input-14px-r"
      >
        <div
          class="absolute top-[0px] left-[0px] w-[1400px] h-[725.4px] text-left text-lg text-dimgray-100 font-roboto"
        >
          <div
            class="absolute top-[0px] left-[0px] rounded-sm bg-grey-white shadow-[0px_5px_10px_rgba(0,_0,_0,_0.1)] w-[311px] h-[342.8px]"
          />
          <img
            class="absolute top-[0px] left-[35px] rounded-sm w-[241px] h-[164.8px] object-cover"
            alt=""
            src="/image38@2x.png"
          />
          <div
            class="absolute top-[0px] left-[363px] rounded-sm bg-grey-white shadow-[0px_5px_10px_rgba(0,_0,_0,_0.1)] w-[311px] h-[342.8px]"
          />
          <img
            class="absolute top-[0px] left-[398px] rounded-sm w-[241px] h-[164.8px] object-cover"
            alt=""
            src="/image39@2x.png"
          />
          <div
            class="absolute top-[0px] left-[736px] rounded-sm bg-grey-white shadow-[0px_5px_10px_rgba(0,_0,_0,_0.1)] w-[311px] h-[342.8px] cursor-pointer"
            @click="onRectangle16Click"
          />
          <img
            class="absolute top-[0px] left-[768px] rounded-sm w-[241px] h-[164.8px] object-cover"
            alt=""
            src="/image40@2x.png"
          />
          <div
            class="absolute top-[0px] left-[1089px] rounded-sm bg-grey-white shadow-[0px_5px_10px_rgba(0,_0,_0,_0.1)] w-[311px] h-[342.8px]"
          />
          <img
            class="absolute top-[0px] left-[1124px] rounded-sm w-[241px] h-[164.8px] object-cover"
            alt=""
            src="/image41@2x.png"
          />
          <div
            class="absolute top-[266.3px] left-[29px] leading-[26px] inline-block w-[203.1px] h-[26.6px]"
          >
            R$ 1000
          </div>
          <div
            class="absolute top-[266.3px] left-[385px] leading-[26px] inline-block w-[203.1px] h-[26.6px]"
          >
            R$ 2000
          </div>
          <div
            class="absolute top-[266.3px] left-[768px] leading-[26px] inline-block w-[203.1px] h-[26.6px]"
          >
            R$ 3000
          </div>
          <div
            class="absolute top-[266.3px] left-[1127px] leading-[26px] inline-block w-[203.1px] h-[26.6px]"
          >
            R$ 4000
          </div>
          <div
            class="absolute top-[698.8px] left-[1130px] leading-[26px] inline-block w-[203.1px] h-[26.6px]"
          >
            R$ 1000
          </div>
          <div
            class="absolute top-[266.3px] left-[29px] leading-[26px] inline-block w-[203.1px] h-[26.6px]"
          >
            R$ 1000
          </div>
          <div
            class="absolute top-[231px] left-[28px] leading-[26px] text-color-7 inline-block w-[168px] h-[27px]"
          >
            Média de Orçamento
          </div>
          <div
            class="absolute top-[231px] left-[383px] leading-[26px] text-color-7 inline-block w-[168px] h-[27px]"
          >
            Média de Orçamento
          </div>
        </div>
        <div class="absolute top-[412.4px] left-[0px] w-[1409px] h-[370.5px]">
          <div
            class="absolute top-[0px] left-[0px] rounded-sm bg-grey-white shadow-[0px_5px_10px_rgba(0,_0,_0,_0.1)] w-[311px] h-[370.5px]"
          />
          <div class="absolute top-[190.9px] left-[30px] w-[152px] h-[31.1px]">
            <img
              class="absolute top-[10px] left-[-0.2px] w-[73.2px] h-[13px]"
              alt=""
              src="/group-133.svg"
            />
            <div
              class="absolute h-[46.62%] w-[54.61%] top-[33.44%] left-[53.95%] leading-[210%] flex items-center justify-center"
            >
              Reviews (32)
            </div>
          </div>
          <img
            class="absolute top-[12.3px] left-[25px] rounded-sm w-[264px] h-[156.6px] object-cover"
            alt=""
            src="/image42@2x.png"
          />
          <div
            class="absolute top-[12.3px] left-[362px] rounded-sm bg-grey-white shadow-[0px_5px_10px_rgba(0,_0,_0,_0.1)] w-[311px] h-[358.2px]"
          />
          <img
            class="absolute top-[21.5px] left-[394px] rounded-sm w-[249px] h-[147.4px] object-cover"
            alt=""
            src="/image43@2x.png"
          />
          <div
            class="absolute top-[12.3px] left-[736px] rounded-sm bg-grey-white shadow-[0px_5px_10px_rgba(0,_0,_0,_0.1)] w-[311px] h-[358.2px]"
          />
          <img
            class="absolute top-[12.3px] left-[767px] rounded-sm w-[249px] h-[156.6px] object-cover"
            alt=""
            src="/image44@2x.png"
          />
          <div
            class="absolute top-[12.3px] left-[1098px] rounded-sm bg-grey-white shadow-[0px_5px_10px_rgba(0,_0,_0,_0.1)] w-[311px] h-[358.2px]"
          />
          <img
            class="absolute top-[12.3px] left-[1120px] rounded-sm w-[249px] h-[156.6px] object-cover"
            alt=""
            src="/image45@2x.png"
          />
        </div>
        <div class="absolute top-[861.6px] left-[0px] w-[1409.2px] h-[394.1px]">
          <div
            class="absolute top-[0.1px] left-[0px] rounded-sm bg-grey-white shadow-[0px_5px_10px_rgba(0,_0,_0,_0.1)] w-[310.9px] h-[394px]"
          />
          <img
            class="absolute top-[1px] left-[15px] rounded-sm w-[249px] h-[172.2px] object-cover"
            alt=""
            src="/image46@2x.png"
          />
          <div
            class="absolute top-[0.1px] left-[362.5px] rounded-sm bg-grey-white shadow-[0px_5px_10px_rgba(0,_0,_0,_0.1)] w-[310.9px] h-[394px]"
          />
          <img
            class="absolute top-[1px] left-[393px] rounded-sm w-[249px] h-[172.2px] object-cover"
            alt=""
            src="/image47@2x.png"
          />
          <div
            class="absolute top-[0.1px] left-[735.9px] rounded-sm bg-grey-white shadow-[0px_5px_10px_rgba(0,_0,_0,_0.1)] w-[310.9px] h-[394px]"
          />
          <img
            class="absolute top-[0px] left-[767px] rounded-sm w-[249px] h-[173.2px] object-cover"
            alt=""
            src="/image48@2x.png"
          />
          <div
            class="absolute top-[0.1px] left-[1098.3px] rounded-sm bg-grey-white shadow-[0px_5px_10px_rgba(0,_0,_0,_0.1)] w-[310.9px] h-[394px]"
          />
          <img
            class="absolute top-[0px] left-[1129px] rounded-sm w-[249px] h-[173.2px] object-cover"
            alt=""
            src="/image49@2x.png"
          />
        </div>
        <div class="absolute top-[186.4px] left-[1129px] w-[152px] h-[31.1px]">
          <img
            class="absolute top-[10px] left-[-0.2px] w-[73.2px] h-[13px]"
            alt=""
            src="/group-133.svg"
          />
          <div
            class="absolute h-[46.62%] w-[54.61%] top-[33.44%] left-[53.95%] leading-[210%] flex items-center justify-center"
          >
            Reviews (32)
          </div>
        </div>
      </div>
      <div
        class="absolute top-[231px] left-[770px] leading-[26px] text-color-7 inline-block w-[168px] h-[27px]"
      >
        Média de Orçamento
      </div>
      <div
        class="absolute top-[231px] left-[1124px] leading-[26px] text-color-7 inline-block w-[168px] h-[27px]"
      >
        Média de Orçamento
      </div>
      <div
        class="absolute top-[656.2px] left-[1129px] leading-[26px] text-color-7 inline-block w-[168px] h-[27px]"
      >
        Média de Orçamento
      </div>
      <div
        class="absolute top-[650px] left-[768px] leading-[26px] text-color-7 inline-block w-[168px] h-[27px]"
      >
        Média de Orçamento
      </div>
      <div
        class="absolute top-[650px] left-[388px] leading-[26px] text-color-7 inline-block w-[168px] h-[27px]"
      >
        Média de Orçamento
      </div>
      <div
        class="absolute top-[650px] left-[28px] leading-[26px] text-color-7 inline-block w-[168px] h-[27px]"
      >
        Média de Orçamento
      </div>
      <div
        class="absolute top-[1112.6px] left-[23px] leading-[26px] text-color-7 inline-block w-[168px] h-[27px]"
      >
        Média de Orçamento
      </div>
      <div
        class="absolute top-[1112.6px] left-[397px] leading-[26px] text-color-7 inline-block w-[168px] h-[27px]"
      >
        Média de Orçamento
      </div>
      <div
        class="absolute top-[1112.6px] left-[774px] leading-[26px] text-color-7 inline-block w-[168px] h-[27px]"
      >
        Média de Orçamento
      </div>
      <div
        class="absolute top-[1112.6px] left-[1129px] leading-[26px] text-color-7 inline-block w-[168px] h-[27px]"
      >
        Média de Orçamento
      </div>
      <div
        class="absolute top-[1058.7px] left-[23px] w-[152px] h-[31.1px] text-center text-xs font-body-input-14px-r"
      >
        <img
          class="absolute top-[10px] left-[-0.2px] w-[73.2px] h-[13px]"
          alt=""
          src="/group-133.svg"
        />
        <div
          class="absolute h-[46.62%] w-[54.61%] top-[33.44%] left-[53.95%] leading-[210%] flex items-center justify-center"
        >
          Reviews (32)
        </div>
      </div>
      <div
        class="absolute top-[1058.7px] left-[388px] w-[152px] h-[31.1px] text-center text-xs font-body-input-14px-r"
      >
        <img
          class="absolute top-[10px] left-[-0.2px] w-[73.2px] h-[13px]"
          alt=""
          src="/group-133.svg"
        />
        <div
          class="absolute h-[46.62%] w-[54.61%] top-[33.44%] left-[53.95%] leading-[210%] flex items-center justify-center"
        >
          Reviews (32)
        </div>
      </div>
      <div
        class="absolute top-[1058.7px] left-[768px] w-[152px] h-[31.1px] text-center text-xs font-body-input-14px-r"
      >
        <img
          class="absolute top-[10px] left-[-0.2px] w-[73.2px] h-[13px]"
          alt=""
          src="/group-133.svg"
        />
        <div
          class="absolute h-[46.62%] w-[54.61%] top-[33.44%] left-[53.95%] leading-[210%] flex items-center justify-center"
        >
          Reviews (32)
        </div>
      </div>
      <div
        class="absolute top-[1051.4px] left-[1135px] w-[152px] h-[31.1px] text-center text-xs font-body-input-14px-r"
      >
        <img
          class="absolute top-[10px] left-[-0.2px] w-[73.2px] h-[13px]"
          alt=""
          src="/group-133.svg"
        />
        <div
          class="absolute h-[46.62%] w-[54.61%] top-[33.44%] left-[53.95%] leading-[210%] flex items-center justify-center"
        >
          Reviews (32)
        </div>
      </div>
      <div
        class="absolute top-[186.4px] left-[379px] w-[152px] h-[31.1px] text-center text-xs font-body-input-14px-r"
      >
        <img
          class="absolute top-[10px] left-[-0.2px] w-[73.2px] h-[13px]"
          alt=""
          src="/group-133.svg"
        />
        <div
          class="absolute h-[46.62%] w-[54.61%] top-[33.44%] left-[53.95%] leading-[210%] flex items-center justify-center"
        >
          Reviews (32)
        </div>
      </div>
      <div
        class="absolute top-[186.4px] left-[30px] w-[152px] h-[31.1px] text-center text-xs font-body-input-14px-r"
      >
        <img
          class="absolute top-[10px] left-[-0.2px] w-[73.2px] h-[13px]"
          alt=""
          src="/group-1331.svg"
        />
        <div
          class="absolute h-[46.62%] w-[54.61%] top-[33.44%] left-[53.95%] leading-[210%] flex items-center justify-center"
        >
          Reviews (32)
        </div>
      </div>
      <div
        class="absolute top-[181.2px] left-[773px] w-[152px] h-[31.1px] text-center text-xs font-body-input-14px-r"
      >
        <img
          class="absolute top-[10px] left-[-0.2px] w-[73.2px] h-[13px]"
          alt=""
          src="/group-133.svg"
        />
        <div
          class="absolute h-[46.62%] w-[54.61%] top-[33.44%] left-[53.95%] leading-[210%] flex items-center justify-center"
        >
          Reviews (32)
        </div>
      </div>
      <div
        class="absolute top-[603.3px] left-[382px] w-[152px] h-[31.1px] text-center text-xs font-body-input-14px-r"
      >
        <img
          class="absolute top-[10px] left-[-0.2px] w-[73.2px] h-[13px]"
          alt=""
          src="/group-133.svg"
        />
        <div
          class="absolute h-[46.62%] w-[54.61%] top-[33.44%] left-[53.95%] leading-[210%] flex items-center justify-center"
        >
          Reviews (32)
        </div>
      </div>
      <div
        class="absolute top-[603.3px] left-[767px] w-[152px] h-[31.1px] text-center text-xs font-body-input-14px-r"
      >
        <img
          class="absolute top-[10px] left-[-0.2px] w-[73.2px] h-[13px]"
          alt=""
          src="/group-133.svg"
        />
        <div
          class="absolute h-[46.62%] w-[54.61%] top-[33.44%] left-[53.95%] leading-[210%] flex items-center justify-center"
        >
          Reviews (32)
        </div>
      </div>
      <div
        class="absolute top-[603.3px] left-[1129px] w-[152px] h-[31.1px] text-center text-xs font-body-input-14px-r"
      >
        <img
          class="absolute top-[10px] left-[-0.2px] w-[73.2px] h-[13px]"
          alt=""
          src="/group-133.svg"
        />
        <div
          class="absolute h-[46.62%] w-[54.61%] top-[33.44%] left-[53.95%] leading-[210%] flex items-center justify-center"
        >
          Reviews (32)
        </div>
      </div>
      <div
        class="absolute top-[692.5px] left-[1127px] leading-[26px] text-dimgray-100 inline-block w-[203.1px] h-[26.6px]"
      >
        R$ 250
      </div>
      <div
        class="absolute top-[698.8px] left-[765px] leading-[26px] text-dimgray-100 inline-block w-[203.1px] h-[26.6px]"
      >
        R$ 300
      </div>
      <div
        class="absolute top-[698.8px] left-[388px] leading-[26px] text-dimgray-100 inline-block w-[203.1px] h-[26.6px]"
      >
        R$ 100
      </div>
      <div
        class="absolute top-[692.5px] left-[28px] leading-[26px] text-dimgray-100 inline-block w-[203.1px] h-[26.6px]"
      >
        R$ 71
      </div>
      <div
        class="absolute top-[1155.1px] left-[23px] leading-[26px] text-dimgray-100 inline-block w-[203.1px] h-[26.6px]"
      >
        R$ 203
      </div>
      <div
        class="absolute top-[1155.1px] left-[397px] leading-[26px] text-dimgray-100 inline-block w-[203.1px] h-[26.6px]"
      >
        R$ 600
      </div>
      <div
        class="absolute top-[1155.1px] left-[769px] leading-[26px] text-dimgray-100 inline-block w-[203.1px] h-[26.6px]"
      >
        R$ 400
      </div>
      <div
        class="absolute top-[1155.1px] left-[1135px] leading-[26px] text-dimgray-100 inline-block w-[203.1px] h-[26.6px]"
      >
        R$ 360
      </div>
    </div>
    <div
      class="absolute top-[794px] left-[54px] w-[1372px] h-[50px] text-smi text-color-5 font-body-input-14px-r"
    >
      <div
        class="absolute h-full w-[15.36%] top-[0%] right-[9.45%] bottom-[0%] left-[75.19%]"
      >
        <div
          class="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg box-border border-[2px] border-solid border-color-6"
        />
        <img
          class="absolute h-[32%] w-[8.92%] top-[34%] right-[7.26%] bottom-[34%] left-[83.82%] rounded-lg max-w-full overflow-hidden max-h-full"
          alt=""
          src="/frame-97.svg"
        />
        <div
          class="absolute w-[82.69%] top-[22%] left-[4.46%] leading-[210%] font-semibold flex items-center"
        >
          <span class="[line-break:anywhere] w-full">
            <span>Mostrar: 10</span>
            <span class="text-color-7"> por pag</span>
          </span>
        </div>
      </div>
      <div
        class="absolute h-full w-[15.11%] top-[0%] right-[25.75%] bottom-[0%] left-[59.14%]"
      >
        <div
          class="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg box-border border-[2px] border-solid border-color-6"
        />
        <img
          class="absolute h-[32%] w-[8.92%] top-[34%] right-[7.28%] bottom-[34%] left-[83.79%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/frame-971.svg"
        />
        <div
          class="absolute w-[82.68%] top-[22%] left-[4.49%] leading-[210%] font-semibold flex items-center justify-center"
        >
          Filtrar por: Avaliação
        </div>
      </div>
      <div
        class="absolute h-full w-[9.44%] top-[0%] right-[0%] bottom-[0%] left-[90.56%]"
      >
        <div
          class="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-grey-white"
        />
        <div
          class="absolute h-[64%] w-[29.11%] top-[18%] right-[53.59%] bottom-[18%] left-[17.3%] bg-grey-white overflow-hidden"
        >
          <div
            class="absolute h-3/5 w-[59.95%] top-[20%] right-[20.16%] bottom-[20%] left-[19.89%]"
          >
            <div
              class="absolute h-[23.96%] w-[23.89%] top-[0%] right-[76.11%] bottom-[76.04%] left-[0%] bg-color-7 box-border border-[1px] border-solid border-color-7"
            />
            <div
              class="absolute h-[23.96%] w-[23.89%] top-[38.02%] right-[76.11%] bottom-[38.02%] left-[0%] bg-color-7 box-border border-[1px] border-solid border-color-7"
            />
            <div
              class="absolute h-[23.96%] w-[23.89%] top-[76.04%] right-[76.11%] bottom-[0%] left-[0%] bg-color-7 box-border border-[1px] border-solid border-color-7"
            />
            <div
              class="absolute h-[23.96%] w-[23.89%] top-[38.02%] right-[38.05%] bottom-[38.02%] left-[38.05%] bg-color-7 box-border border-[1px] border-solid border-color-7"
            />
            <div
              class="absolute h-[23.96%] w-[23.89%] top-[76.04%] right-[38.05%] bottom-[0%] left-[38.05%] bg-color-7 box-border border-[1px] border-solid border-color-7"
            />
            <div
              class="absolute h-[23.96%] w-[23.89%] top-[0%] right-[38.05%] bottom-[76.04%] left-[38.05%] bg-color-7 box-border border-[1px] border-solid border-color-7"
            />
            <div
              class="absolute h-[23.96%] w-[23.89%] top-[38.02%] right-[0%] bottom-[38.02%] left-[76.11%] bg-color-7 box-border border-[1px] border-solid border-color-7"
            />
            <div
              class="absolute h-[23.96%] w-[23.89%] top-[76.04%] right-[0%] bottom-[0%] left-[76.11%] bg-color-7 box-border border-[1px] border-solid border-color-7"
            />
            <div
              class="absolute h-[23.96%] w-[23.89%] top-[0%] right-[0%] bottom-[76.04%] left-[76.11%] bg-color-7 box-border border-[1px] border-solid border-color-7"
            />
          </div>
        </div>
        <div
          class="absolute h-[64%] w-[29.11%] top-[18%] right-[16.29%] bottom-[18%] left-[54.59%] bg-grey-white overflow-hidden"
        >
          <div
            class="absolute h-[48.44%] w-[68.44%] top-[25.62%] right-[17.24%] bottom-[25.94%] left-[14.32%]"
          >
            <div
              class="absolute h-[17.42%] w-[41.86%] top-[82.58%] right-[58.14%] bottom-[0%] left-[0%] bg-color-5"
            />
            <div
              class="absolute h-[17.42%] w-full top-[0%] right-[0%] bottom-[82.58%] left-[0%] bg-color-5"
            />
            <div
              class="absolute h-[17.42%] w-[75.19%] top-[41.29%] right-[24.81%] bottom-[41.29%] left-[0%] bg-color-5"
            />
          </div>
        </div>
      </div>
      <div
        class="absolute top-[48%] left-[0%] text-mini leading-[16px] text-left text-darkgray-200 font-roboto"
      >
        <span>
          <span>Principais Profissionais na sua região</span>
          <span class="text-color-7"> </span>
        </span>
        <span class="text-color-7">
          <b>Cachoeiro de Itapemirim</b>
        </span>
      </div>
    </div>
  </div>
  <div v-if="isPopUpSair1Open">
    <PortalPopup
      overlayColor="rgba(113, 113, 113, 0.3)"
      placement="Centered"
      :relativeLayerRef="$refs[groupContainer25Ref]"
      :onOutsideClick="closePopUpSair1"
    >
      <PopUpSair :onClose="closePopUpSair1" />
    </PortalPopup>
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
    name: "Servios2",
    data() {
      return { isPopUpSairOpen: false, isPopUpSair1Open: false };
    },
    components: { PopUpSair, PortalPopup },
    methods: {
      onIncioText1Click() {
        this.$router.push("/pagina-inicial-cliente");
      },
      onServiosText1Click() {
        this.$router.push("/servios1");
      },
      onGroup711Click() {
        this.$router.push("/pagina-inicial-cliente");
      },
      onGroupContainer2Click() {
        this.$router.push("/tela-inicial-cliente");
      },
      onSobreTextClick() {
        this.$router.push("/sobre");
      },
      openPopUpSair1() {
        this.isPopUpSair1Open = true;
      },
      closePopUpSair1() {
        this.isPopUpSair1Open = false;
      },
      openPopUpSair() {
        this.isPopUpSairOpen = true;
      },
      closePopUpSair() {
        this.isPopUpSairOpen = false;
      },
      onRectangle16Click() {
        this.$router.push("/-servios-3");
      },
    },
  });
</script>
