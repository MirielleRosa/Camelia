<template>
  <div
    class="relative bg-grey-white w-full h-[2724px] overflow-hidden text-left text-xl text-dimgray-800 font-roboto"
  >
    <div
      class="absolute top-[32px] left-[-11px] w-[1451px] h-[119px] text-center text-gray1-1500"
    >
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
    <div
      class="absolute top-[32px] left-[-11px] w-[1451px] h-[119px] text-center text-gray1-1500"
    >
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
      class="absolute top-[60px] left-[866px] w-[127px] h-[23px] cursor-pointer text-center text-gray1-1500"
      @click="onGroupContainer2Click"
    >
      <div class="absolute top-[0px] left-[0px]">Meus Pedidos</div>
    </div>
    <div
      class="absolute top-[151px] left-[0px] w-[1440px] h-32 text-center text-2xs text-gray1-1500"
    >
      <div class="absolute top-[0px] left-[0px] w-[1440px] h-32">
        <div
          class="absolute top-[0px] left-[0px] bg-mediumaquamarine-500 w-[1440px] h-32"
        />
      </div>
      <div
        class="absolute top-[19px] left-[94px] flex flex-col items-start justify-start"
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
    </div>
    <div class="absolute top-[187px] left-[186px] w-[310px] h-[431px]" />
    <div
      class="absolute w-full right-[-72px] bottom-[-1185px] left-[72px] h-[329.6px] text-mini text-grey-white font-regular"
    >
      <div
        class="absolute w-full right-[0px] bottom-[0px] left-[0px] bg-gray1-1500 h-[329.6px]"
      />
      <div
        class="absolute top-[49.6px] left-[384px] h-[143.7px] flex flex-row items-center justify-start gap-[30px]"
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
        <div class="relative leading-[19px]">Sobre</div>
      </div>
    </div>
    <div
      class="absolute top-[39px] left-[1173px] w-[206px] h-[65px] text-center text-6xl text-gray1-1500"
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
    </div>
    <div
      class="absolute top-[39px] left-[1173px] w-[238px] h-[65px] cursor-pointer text-center text-6xl text-gray1-1500"
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
        class="absolute h-[45.85%] w-[12.61%] top-[40%] right-[0%] bottom-[14.15%] left-[87.39%] max-w-full overflow-hidden max-h-full cursor-pointer"
        alt=""
        src="/arrow--caret-down-md1.svg"
        :onClick="openPopUpSair"
      />
    </div>
    <div
      class="absolute h-[calc(100%_-_2224px)] w-[calc(100%_-_645px)] top-[402px] right-[603px] bottom-[1822px] left-[42px] overflow-hidden text-xs"
    >
      <div
        class="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] overflow-hidden text-grey-white"
      >
        <div
          class="absolute top-[0px] left-[0px] rounded-3xs w-[840px] h-[500px] overflow-hidden bg-[url('/public/image34@3x.png')] bg-cover bg-no-repeat bg-[top]"
        >
          <img
            class="absolute top-[0px] left-[0px] w-[840px] h-[500px] object-cover"
            alt=""
            src="/image-19@2x.png"
          />
          <div
            class="absolute right-[427.5px] bottom-[20px] rounded bg-dimgray-1100 w-[32.5px] h-[42px]"
          >
            <div
              class="absolute top-[14px] left-[7px] leading-[16px] flex items-center w-[18.8px] h-3.5"
            >
              1/8
            </div>
          </div>
        </div>
      </div>
      <div
        class="absolute top-[24px] left-[24px] rounded-8xs bg-grey-white w-[255px] h-10 text-base"
      >
        <img
          class="absolute h-[calc(100%_-_16px)] top-[8px] bottom-[8px] left-[13px] max-h-full w-4"
          alt=""
          src="/istyles-rating--icon--33n3w.svg"
        />
        <div
          class="absolute h-[calc(100%_-_16px)] top-[8px] bottom-[8px] left-[34px] w-[100.3px]"
        >
          <div
            class="absolute top-[2px] left-[0px] leading-[24px] font-medium flex items-center w-[100.7px] h-[19px]"
          >
            5.0 Excelente!
          </div>
        </div>
      </div>
      <div
        class="absolute top-[76px] left-[24px] rounded-8xs bg-grey-white w-[255px] h-[162px] text-sm"
      >
        <div
          class="absolute top-[18px] left-[16px] leading-[20px] flex items-center w-[141.5px] h-4"
        >
          Instalação ficou ótima,
        </div>
        <div
          class="absolute top-[38px] left-[16px] leading-[20px] flex items-center w-[188px] h-4"
        >
          acabamentos também. Foram
        </div>
        <div
          class="absolute top-[58px] left-[16px] leading-[20px] flex items-center w-[180.1px] h-4"
        >
          super rápidos e organizados.
        </div>
        <div
          class="absolute top-[78px] left-[16px] leading-[20px] flex items-center w-[78.7px] h-4"
        >
          Recomendo.
        </div>
        <div
          class="absolute w-full top-[112px] right-[0px] left-[0px] rounded-t-none rounded-b-8xs bg-mediumaquamarine-400 h-[50px] text-5xl text-grey-white"
        >
          <div
            class="absolute top-[calc(50%_-_16px)] left-[16px] rounded-[32px] bg-color-7 w-8 h-8"
          >
            <div
              class="absolute top-[2px] left-[8.5px] leading-[32px] font-medium flex items-center w-[15.4px] h-7"
            >
              R
            </div>
          </div>
          <div
            class="absolute top-[15px] left-[60px] text-sm leading-[20px] text-dimgray-800 flex items-center w-[74px] h-5"
          >
            Romario P.
          </div>
        </div>
      </div>
    </div>
    <div
      class="absolute w-[calc(100%_-_983px)] top-[402px] right-[84px] left-[899px] rounded-3xs bg-grey-white box-border h-[482px] text-base border-[1px] border-solid border-whitesmoke-400"
    >
      <div
        class="absolute top-[25px] left-[25px] rounded bg-steelblue-200 w-[103.4px] h-[34px] text-center text-xs text-color-7"
      >
        <div
          class="absolute top-[10px] left-[8px] leading-[18px] flex items-center justify-center w-[87.8px] h-3.5"
        >
          Serviços de piso
        </div>
      </div>
      <b
        class="absolute top-[88px] left-[25px] text-5xl leading-[32px] flex text-mediumaquamarine-100 items-center w-[409.4px] h-7"
        >Colocação de piso cerâmico em Cachoeiro de Itapemirim</b
      >
      <img
        class="absolute top-[152px] left-[25px] w-4 h-4 overflow-hidden"
        alt=""
        src="/icon.svg"
      />
      <div
        class="absolute top-[151px] left-[46px] leading-[24px] flex items-center w-[22.5px] h-6"
      >
        4.9
      </div>
      <div
        class="absolute top-[151px] left-[68.2px] leading-[24px] flex items-center w-[9.7px] h-6"
      >
        (
      </div>
      <div
        class="absolute top-[151px] left-[77.6px] leading-[24px] flex items-center w-[27.3px] h-6"
      >
        119
      </div>
      <div
        class="absolute top-[151px] left-[104.6px] leading-[24px] flex items-center w-[5.9px] h-6"
      >
        )
      </div>
      <div
        class="absolute top-[151px] left-[115.1px] leading-[24px] text-gray1-900 flex items-center w-[75.9px] h-6"
      >
        avaliações
      </div>
      <div
        class="absolute top-[355px] left-[28px] text-9xl leading-[36px] font-black flex items-center w-[41.2px] h-9"
      >
        R$
      </div>
      <div
        class="absolute top-[355px] left-[73px] text-9xl leading-[36px] font-black flex items-center w-[89px] h-9"
      >
        3.000
      </div>
      <div
        class="absolute top-[331px] left-[162px] text-9xl leading-[36px] font-black flex items-center w-[18.1px] h-9"
      >
        -
      </div>
      <div
        class="absolute top-[355px] left-[200px] text-9xl leading-[36px] font-black flex items-center w-[113.6px] h-9"
      >
        8.000,00
      </div>
      <div
        class="absolute top-[391px] left-[25px] text-xs leading-[16px] flex items-center w-[239.4px] h-4"
      >
        Preço médio estimado, pode haver variações
      </div>
      <div
        class="absolute w-[calc(100%_-_50px)] top-[423px] right-[25px] left-[25px] rounded-8xs bg-color-7 box-border h-[46px] text-center text-grey-white border-[1px] border-solid border-color-7"
      >
        <div
          class="absolute top-[13px] left-[128.3px] leading-[20px] font-medium flex items-center justify-center w-[175.8px] h-[19px]"
        >
          Pedir Orçamentos Grátis
        </div>
      </div>
    </div>
    <div
      class="absolute top-[595px] left-[924px] text-smi leading-[24px] text-color-7 flex items-center w-[347px]"
    >
      Olá, sou Louro José e tenho 15 anos de experiência no mercado de pisos de
      luxo, mergulhei no design de interiores, aprimorando técnicas e materiais
      refinados. Cada projeto foi uma oportunidade para inovar e atender às
      demandas exigentes dos clientes, sempre buscando criar espaços que
      combinem sofisticação e conforto.
    </div>
    <div
      class="absolute top-[889px] left-[calc(50%_+_310px)] text-sm leading-[14px] text-center flex items-center justify-center w-[181px] h-4"
    >
      Você ainda não será cobrado
    </div>
    <div
      class="absolute top-[1016px] left-[56px] w-[1176px] h-[588px] text-base"
    >
      <div
        class="absolute top-[0px] left-[1.2px] text-13xl leading-[48px] font-medium text-gray1-1300 flex items-center w-[972.9px] h-[51.2px]"
      >
        Tudo sobre Colocação de piso cerâmico em Cachoeiro de Itapemirim
      </div>
      <div
        class="absolute top-[89px] left-[0px] leading-[24px] flex items-center w-[1161.5px] h-[20.3px]"
      >
        Você poderá contratar profissionais para colocação de um piso cerâmico
        novo ou para substituição de um piso existente. Informe o local
      </div>
      <div
        class="absolute top-[114.6px] left-[0px] leading-[24px] flex items-center w-[747px] h-[20.3px]"
      >
        da casa e a metragem estimada que deseja instalar e receba orçamentos
        grátis em 24h.
      </div>
      <img
        class="absolute top-[170.7px] left-[0px] w-[27.4px] h-[25.6px] overflow-hidden"
        alt=""
        src="/section--ordered-list--item.svg"
      />
      <div
        class="absolute top-[172.9px] left-[41.7px] leading-[20px] font-medium text-gray1-1300 flex items-center w-[158.1px] h-[20.3px]"
      >
        Orçamentos grátis
      </div>
      <div
        class="absolute top-[209.2px] left-[0px] leading-[24px] flex items-center w-[1176px] h-[20.3px]"
      >
        Você faz seu pedido e dentro de alguns minutos você já pode receber
        orçamentos gratuitos dos profissionais Triider, mas o tempo máximo
      </div>
      <div
        class="absolute top-[234.8px] left-[0px] leading-[24px] flex items-center w-[83px] h-[20.3px]"
      >
        são 24hs.
      </div>
      <img
        class="absolute top-[290.3px] left-[0px] w-[27.4px] h-[25.6px] overflow-hidden"
        alt=""
        src="/section--ordered-list--item1.svg"
      />
      <div
        class="absolute top-[292.4px] left-[41.7px] leading-[20px] font-medium text-gray1-1300 flex items-center w-[203.8px] h-[20.3px]"
      >
        Agendamento pelo chat
      </div>
      <div
        class="absolute top-[328.7px] left-[0px] leading-[24px] flex items-center w-[1148.7px] h-[20.3px]"
      >
        Após escolher o melhor orçamento, você deve confirmar a contratação do
        profissional, e agendar o melhor dia e horário para executar o
      </div>
      <div
        class="absolute top-[354.3px] left-[0px] leading-[24px] flex items-center w-[589.1px] h-[20.3px]"
      >
        serviço, mas não se preocupe, você só paga após o serviço realizado.
      </div>
      <img
        class="absolute top-[409.8px] left-[0px] w-[27.4px] h-[25.6px] overflow-hidden"
        alt=""
        src="/section--ordered-list--item2.svg"
      />
      <div
        class="absolute top-[411.9px] left-[41.7px] leading-[20px] font-medium text-gray1-1300 flex items-center w-[173.8px] h-[20.3px]"
      >
        Material não incluso
      </div>
      <div
        class="absolute top-[446.1px] left-[0px] leading-[24px] flex items-center w-[1072.7px] h-[25.6px]"
      >
        Peças e materiais não estão inclusos no orçamento, mas você pode usar o
        chat para pedir a lista materiais para o profissional.
      </div>
      <img
        class="absolute top-[503.7px] left-[0px] w-[27.4px] h-[25.6px] overflow-hidden"
        alt=""
        src="/section--ordered-list--item3.svg"
      />
      <div
        class="absolute top-[505.8px] left-[41.7px] leading-[20px] font-medium text-gray1-1300 flex items-center w-[123.7px] h-[20.3px]"
      >
        Cancelamento
      </div>
      <div
        class="absolute top-[542.1px] left-[0px] leading-[24px] flex items-center w-[1166.2px] h-[20.3px]"
      >
        Você pode cancelar o pedido a qualquer momento 24hs antes da data
        agendada pelo chat. Em caso de qualquer imprevisto, comunique o
      </div>
      <div
        class="absolute top-[567.7px] left-[0px] leading-[24px] flex items-center w-[104.6px] h-[20.3px]"
      >
        profissional.
      </div>
    </div>
    <div
      class="absolute top-[1638px] left-[53px] text-13xl leading-[48px] font-medium text-gray1-1300 flex items-center w-[357px] h-12"
    >
      Avaliações e resenhas
    </div>
    <div
      class="absolute top-[1720px] left-[59px] text-[64px] leading-[36px] font-medium text-gray1-1300 flex items-center w-[102px] h-9"
    >
      4.9
    </div>
    <img
      class="absolute top-[1780px] left-[56px] w-[17px] h-4 overflow-hidden"
      alt=""
      src="/icon7.svg"
    />
    <img
      class="absolute top-[1780px] left-[82px] w-[17px] h-4 overflow-hidden"
      alt=""
      src="/icon7.svg"
    />
    <img
      class="absolute top-[1780px] left-[103px] w-[19px] h-4 overflow-hidden"
      alt=""
      src="/icon8.svg"
    />
    <img
      class="absolute top-[1780px] left-[126px] w-[17px] h-4 overflow-hidden"
      alt=""
      src="/icon7.svg"
    />
    <img
      class="absolute top-[1780px] left-[149px] w-[17px] h-4 overflow-hidden"
      alt=""
      src="/icon7.svg"
    />
    <div
      class="absolute top-[1812px] left-[59px] leading-[24px] text-steelblue-100 flex items-center w-[207px] h-6"
    >
      Média com base em
    </div>
    <div
      class="absolute top-[1812px] left-[266px] leading-[24px] text-steelblue-100 flex items-center w-[38px] h-6"
    >
      119
    </div>
    <div
      class="absolute top-[1812px] left-[304px] leading-[24px] text-steelblue-100 flex items-center w-[111px] h-6"
    >
      avaliações
    </div>
    <div
      class="absolute top-[1654px] left-[825px] leading-[24px] flex items-center w-[13px] h-6"
    >
      5
    </div>
    <img
      class="absolute top-[1655px] left-[849px] w-6 h-[22px] overflow-hidden"
      alt=""
      src="/icon9.svg"
    />
    <div
      class="absolute w-[calc(100%_-_1194px)] top-[calc(50%_+_302px)] right-[310px] left-[884px] rounded bg-whitesmoke-400 h-1"
    >
      <div
        class="absolute w-[calc(100%_-_16.7px)] top-[0px] right-[16.7px] left-[0px] rounded bg-mediumturquoise h-1"
      />
    </div>
    <div
      class="absolute top-[1688px] left-[825px] leading-[24px] flex items-center w-[13px] h-6"
    >
      4
    </div>
    <img
      class="absolute top-[1689px] left-[849px] w-6 h-[22px] overflow-hidden"
      alt=""
      src="/icon9.svg"
    />
    <div
      class="absolute w-[calc(100%_-_1194px)] top-[calc(50%_+_338px)] right-[410px] left-[890px] rounded bg-whitesmoke-400 h-1"
    >
      <div
        class="absolute w-[calc(100%_-_155.5px)] top-[3px] right-[93.5px] left-[145px]  rounded bg-mediumturquoise h-1 [transform:_rotate(180deg)] [transform-origin:0_0]"
      />
    </div>
    <div
      class="absolute top-[1722px] left-[825px] leading-[24px] flex items-center w-[13px] h-6"
    >
      3
    </div>
    <img
      class="absolute top-[1723px] left-[849px] w-6 h-[22px] overflow-hidden"
      alt=""
      src="/icon9.svg"
    />
    <div
      class="absolute w-[calc(100%_-_1194px)] top-[calc(50%_+_375px)] right-[275px] left-[890px] rounded bg-whitesmoke-400 h-1"
    >
      <div
        class="absolute w-[calc(100%_-_151.7px)] top-[3px] right-[93.7px] left-[145px] rounded bg-mediumturquoise h-1 [transform:_rotate(180deg)] [transform-origin:0_0]"
      />
    </div>
    <div
      class="absolute top-[1756px] left-[825px] leading-[24px] flex items-center w-[13px] h-6"
    >
      2
    </div>
    <div
      class="absolute top-[1787px] left-[825px] leading-[24px] flex items-center w-[13px] h-6"
    >
      1
    </div>
    <img
      class="absolute top-[1757px] left-[849px] w-6 h-[22px] overflow-hidden"
      alt=""
      src="/icon9.svg"
    />
    <div
      class="absolute w-[calc(100%_-_1194px)] top-[calc(50%_+_406px)] right-[307px] left-[887px] rounded bg-whitesmoke-400 h-1"
    />
    <img
      class="absolute top-[1791px] left-[849px] w-6 h-[22px] overflow-hidden"
      alt=""
      src="/icon9.svg"
    />
    <div
      class="absolute w-[calc(100%_-_1194px)] top-[calc(50%_+_443px)] right-[275px] left-[919px] rounded bg-whitesmoke-400 h-1"
    >
      <div
        class="absolute w-[calc(100%_-_151.7px)] top-[3px] right-[89.7px] left-[887px] rounded bg-mediumturquoise h-1 [transform:_rotate(180deg)] [transform-origin:0_0]"
      />
    </div>
    <div
      class="absolute top-[1654px] left-[1325px] leading-[24px] flex items-center w-[37px] h-6"
    >
      110
    </div>
    <div
      class="absolute top-[1688px] left-[1325px] leading-[24px] flex items-center w-[13px] h-6"
    >
      4
    </div>
    <div
      class="absolute top-[1722px] left-[1325px] leading-[24px] flex items-center w-[13px] h-6"
    >
      2
    </div>
    <div
      class="absolute top-[1758px] left-[1325px] leading-[24px] flex items-center w-[13px] h-6"
    >
      2
    </div>
    <div
      class="absolute top-[1791px] left-[1325px] leading-[24px] flex items-center w-[13px] h-6"
    >
      1
    </div>
    <div
      class="absolute top-[3543px] left-[90px] text-sm leading-[20px] text-steelblue-100 flex items-center w-[83px] h-5"
    >
      19/04/2022
    </div>
    <div
      class="absolute w-[calc(100%_+_239px)] top-[3637px] right-[-329px] left-[90px] box-border h-px overflow-hidden border-t-[1px] border-solid border-whitesmoke-400"
    />
    <div
      class="absolute h-[calc(100%_-_2676px)] top-[3662px] bottom-[-986px] left-[90px] rounded-29xl bg-orangered w-[53px] text-grey-white"
    >
      <div
        class="absolute top-[12px] left-[17.2px] leading-[32px] font-medium flex items-center w-3.5 h-6"
      >
        G
      </div>
    </div>
    <div
      class="absolute top-[3662px] left-[161px] text-base leading-[20px] font-medium flex items-center w-[104px] h-5"
    >
      Georgiene A.
    </div>
    <div
      class="absolute top-[4067px] left-[-555px] text-base leading-[20px] font-medium flex items-center w-[63px] h-5"
    >
      avaliou
    </div>
    <div
      class="absolute top-[3686px] left-[161px] text-sm leading-[20px] flex items-center w-[23px] h-5"
    >
      5.0
    </div>
    <img
      class="absolute top-[3705px] left-[192px] w-5 h-[18px] overflow-hidden"
      alt=""
      src="/icon10.svg"
    />
    <img
      class="absolute top-[4110px] left-[-605px] w-5 h-[18px] overflow-hidden"
      alt=""
      src="/icon10.svg"
    />
    <img
      class="absolute top-[4110px] left-[-582px] w-5 h-[18px] overflow-hidden"
      alt=""
      src="/icon10.svg"
    />
    <img
      class="absolute top-[4110px] left-[-561px] w-5 h-[18px] overflow-hidden"
      alt=""
      src="/icon10.svg"
    />
    <img
      class="absolute top-[4110px] left-[-538px] w-5 h-[18px] overflow-hidden"
      alt=""
      src="/icon10.svg"
    />
    <div
      class="absolute top-[3732px] left-[90px] text-base leading-[24px] flex items-center w-[1350px] h-[19px]"
    >
      O serviço realizado foi piso sobre piso. O porcelanato foi instalado com
      muito capricho. Surpresa positiva com os detalhes nos recortes
      necessários. Tudo muito alinhado.
    </div>
    <div
      class="absolute top-[3756px] left-[90px] text-base leading-[24px] flex items-center w-[889px] h-[19px]"
    >
      Com certeza iremos solicitar novamente o serviço do excelente
      profissional. Obrigada a todos que participaram.
    </div>
    <div
      class="absolute top-[3794px] left-[90px] text-sm leading-[20px] text-steelblue-100 flex items-center w-[83px] h-5"
    >
      19/09/2021
    </div>
    <div
      class="absolute h-[calc(100%_-_2546px)] top-[2861px] bottom-[-315px] left-[2875px] bg-gray1-400 w-[313px] text-center text-xs text-steelblue-100"
    >
      <div
        class="absolute w-[calc(100%_-_32px)] top-[52px] right-[16px] left-[16px] rounded-xl bg-steelblue-200 h-8"
      >
        <div
          class="absolute top-[9px] left-[calc(50%_-_79.3px)] leading-[16px] font-medium flex items-center justify-center w-40 h-3.5"
        >
          André S. atendeu esse pedido
        </div>
      </div>
      <div
        class="absolute w-[calc(100%_-_32px)] top-[108px] right-[16px] left-[16px] rounded-8xs bg-grey-white box-border h-[46px] text-base text-dimgray-800 border-[1px] border-solid border-dimgray-800"
      >
        <div
          class="absolute top-[13px] left-[27.5px] leading-[20px] font-medium flex items-center justify-center w-[193.3px] h-[19px]"
        >
          Receber orçamentos grátis
        </div>
      </div>
    </div>
    <div
      class="absolute w-[calc(100%_+_239px)] top-[3864px] right-[-329px] left-[90px] box-border h-px overflow-hidden border-t-[1px] border-solid border-whitesmoke-400"
    />
    <div
      class="absolute top-[3889px] left-[161px] text-base leading-[20px] font-medium flex items-center w-[111px] h-5"
    >
      Alessandro R.
    </div>
    <div
      class="absolute top-[4294px] left-[-547px] text-base leading-[20px] font-medium flex items-center w-[63px] h-5"
    >
      avaliou
    </div>
    <div
      class="absolute top-[3913px] left-[161px] text-sm leading-[20px] flex items-center w-[23px] h-5"
    >
      5.0
    </div>
    <img
      class="absolute top-[3932px] left-[192px] w-5 h-[18px] overflow-hidden"
      alt=""
      src="/icon10.svg"
    />
    <img
      class="absolute top-[4337px] left-[-605px] w-5 h-[18px] overflow-hidden"
      alt=""
      src="/icon10.svg"
    />
    <img
      class="absolute top-[4337px] left-[-582px] w-5 h-[18px] overflow-hidden"
      alt=""
      src="/icon10.svg"
    />
    <img
      class="absolute top-[4337px] left-[-561px] w-5 h-[18px] overflow-hidden"
      alt=""
      src="/icon10.svg"
    />
    <img
      class="absolute top-[4337px] left-[-538px] w-5 h-[18px] overflow-hidden"
      alt=""
      src="/icon10.svg"
    />
    <div
      class="absolute h-[calc(100%_-_2676px)] top-[3889px] bottom-[-1213px] left-[90px] w-[53px] overflow-hidden"
    >
      <div
        class="absolute w-full top-[0px] right-[0px] left-[0px] h-12 overflow-hidden"
      >
        <div class="absolute top-[0px] left-[0px] w-12 h-12 overflow-hidden">
          <div
            class="absolute top-[calc(50%_-_24px)] left-[calc(50%_-_24px)] w-12 h-12 overflow-hidden"
          />
        </div>
      </div>
      <img
        class="absolute top-[0px] left-[0px] rounded-29xl w-12 h-12 overflow-hidden object-cover"
        alt=""
        src="/image35@2x.png"
      />
    </div>
    <div
      class="absolute top-[3957px] left-[90px] text-base leading-[24px] flex items-center w-[1120px] h-6"
    >
      Ótimo trabalho! Comprometimento com a qualidade do trabalho realizado e
      horário combinado!! Colocação do piso ficou ótima! Recomendo!!
    </div>
    <div
      class="absolute top-[3997px] left-[90px] text-sm leading-[20px] text-steelblue-100 flex items-center w-[83px] h-5"
    >
      31/03/2019
    </div>
    <div
      class="absolute h-[calc(100%_-_2546px)] top-[2704px] bottom-[-158px] left-[1384px] bg-gray1-400 w-[313px] text-center text-xs text-steelblue-100"
    >
      <div
        class="absolute w-[calc(100%_-_32px)] top-[52px] right-[16px] left-[16px] rounded-xl bg-steelblue-200 h-8"
      >
        <div
          class="absolute top-[9px] left-[calc(50%_-_82.7px)] leading-[16px] font-medium flex items-center justify-center w-[166.7px] h-3.5"
        >
          Nelson A. atendeu esse pedido
        </div>
      </div>
      <div
        class="absolute w-[calc(100%_-_32px)] top-[108px] right-[16px] left-[16px] rounded-8xs bg-grey-white box-border h-[46px] text-base text-dimgray-800 border-[1px] border-solid border-dimgray-800"
      >
        <div
          class="absolute top-[13px] left-[27.5px] leading-[20px] font-medium flex items-center justify-center w-[193.3px] h-[19px]"
        >
          Receber orçamentos grátis
        </div>
      </div>
    </div>
    <div
      class="absolute w-[calc(100%_+_239px)] top-[4091px] right-[-329px] left-[90px] box-border h-px overflow-hidden border-t-[1px] border-solid border-whitesmoke-400"
    />
    <div
      class="absolute top-[4116px] left-[161px] text-base leading-[20px] font-medium flex items-center w-20 h-5"
    >
      Camilla d.
    </div>
    <div
      class="absolute top-[4521px] left-[-578px] text-base leading-[20px] font-medium flex items-center w-[62px] h-5"
    >
      avaliou
    </div>
    <div
      class="absolute top-[4545px] left-[-658px] text-sm leading-[20px] flex items-center w-[23px] h-5"
    >
      5.0
    </div>
    <img
      class="absolute top-[4159px] left-[192px] w-5 h-[18px] overflow-hidden"
      alt=""
      src="/icon10.svg"
    />
    <img
      class="absolute top-[4564px] left-[-605px] w-5 h-[18px] overflow-hidden"
      alt=""
      src="/icon10.svg"
    />
    <img
      class="absolute top-[4564px] left-[-582px] w-5 h-[18px] overflow-hidden"
      alt=""
      src="/icon10.svg"
    />
    <img
      class="absolute top-[4564px] left-[-561px] w-5 h-[18px] overflow-hidden"
      alt=""
      src="/icon10.svg"
    />
    <img
      class="absolute top-[4564px] left-[-538px] w-5 h-[18px] overflow-hidden"
      alt=""
      src="/icon10.svg"
    />
    <div
      class="absolute h-[calc(100%_-_2676px)] top-[4116px] bottom-[-1440px] left-[90px] w-[53px] overflow-hidden"
    >
      <div
        class="absolute w-full top-[0px] right-[0px] left-[0px] h-12 overflow-hidden"
      >
        <div class="absolute top-[0px] left-[0px] w-12 h-12 overflow-hidden">
          <div
            class="absolute top-[calc(50%_-_24px)] left-[calc(50%_-_24px)] w-12 h-12 overflow-hidden"
          />
        </div>
      </div>
      <img
        class="absolute top-[0px] left-[0px] rounded-29xl w-12 h-12 overflow-hidden object-cover"
        alt=""
        src="/image36@2x.png"
      />
    </div>
    <div
      class="absolute top-[4589px] left-[-729px] text-base leading-[24px] flex items-center w-[921px] h-6"
    >
      Mariano é um excelente profissional. Ele reformou toda a minha cozinha e
      meu banheiro e ficou ótimo. Recomendo!!
    </div>
    <div
      class="absolute h-[calc(100%_-_2546px)] top-[2931px] bottom-[-385px] left-[1384px] bg-gray1-400 w-[313px] text-center text-xs text-steelblue-100"
    >
      <div
        class="absolute w-[calc(100%_-_32px)] top-[52px] right-[16px] left-[16px] rounded-xl bg-steelblue-200 h-8"
      >
        <div
          class="absolute top-[9px] left-[calc(50%_-_86.1px)] leading-[16px] font-medium flex items-center justify-center w-[173.5px] h-3.5"
        >
          Mariano G. atendeu esse pedido
        </div>
      </div>
      <div
        class="absolute w-[calc(100%_-_32px)] top-[108px] right-[16px] left-[16px] rounded-8xs bg-grey-white box-border h-[46px] text-base text-dimgray-800 border-[1px] border-solid border-dimgray-800"
      >
        <div
          class="absolute top-[13px] left-[27.5px] leading-[20px] font-medium flex items-center justify-center w-[193.3px] h-[19px]"
        >
          Receber orçamentos grátis
        </div>
      </div>
    </div>
    <div
      class="absolute w-full right-[3px] bottom-[2.4px] left-[-3px] h-[329.6px] text-mini text-grey-white font-regular"
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
          @click="onSobreText1Click"
        >
          Sobre
        </div>
      </div>
    </div>
    <div
      class="absolute top-[1972px] left-[113px] text-base leading-[20px] font-medium flex items-center w-[71px] h-5"
    >
      Lira
    </div>
    <div
      class="absolute top-[1972px] left-[184px] text-base leading-[20px] font-medium flex items-center w-[68px] h-5"
    >
      avaliou
    </div>
    <div
      class="absolute top-[1996px] left-[113px] text-sm leading-[20px] flex items-center w-[25px] h-5"
    >
      5.0
    </div>
    <img
      class="absolute top-[1997px] left-[147px] w-[21px] h-[18px] overflow-hidden"
      alt=""
      src="/icon11.svg"
    />
    <img
      class="absolute top-[1997px] left-[170px] w-[22px] h-[18px] overflow-hidden"
      alt=""
      src="/icon12.svg"
    />
    <img
      class="absolute top-[1997px] left-[195px] w-[22px] h-[18px] overflow-hidden"
      alt=""
      src="/icon12.svg"
    />
    <img
      class="absolute top-[1997px] left-[219px] w-[22px] h-[18px] overflow-hidden"
      alt=""
      src="/icon12.svg"
    />
    <img
      class="absolute top-[1997px] left-[243px] w-[23px] h-[18px] overflow-hidden"
      alt=""
      src="/icon13.svg"
    />
    <div
      class="absolute h-[calc(100%_-_2676px)] top-[1972px] bottom-[704px] left-[43px] w-12 overflow-hidden"
    >
      <div
        class="absolute w-full top-[0px] right-[0px] left-[0px] h-12 overflow-hidden"
      >
        <div class="absolute top-[0px] left-[0px] w-12 h-12 overflow-hidden">
          <div
            class="absolute top-[calc(50%_-_24px)] left-[calc(50%_-_24px)] w-12 h-12 overflow-hidden"
          />
        </div>
      </div>
      <div
        class="absolute top-[0px] left-[0px] rounded-29xl w-12 h-12 overflow-hidden bg-[url('/public/image37@3x.png')] bg-cover bg-no-repeat bg-[top]"
      >
        <img
          class="absolute top-[0px] left-[0px] w-52 h-[239px] object-cover"
          alt=""
          src="/image-22@2x.png"
        />
      </div>
    </div>
    <div
      class="absolute h-[calc(100%_-_2546px)] top-[1957px] bottom-[589px] left-[1130px] bg-gray1-400 w-[246px] text-xs text-grey-white"
    >
      <img
        class="absolute top-[0px] left-[0px] w-[246px] h-[189px] object-cover"
        alt=""
        src="/image-20@2x.png"
      />
      <div
        class="absolute top-[164px] left-[114px] leading-[16px] flex items-center w-[18.8px] h-3.5"
      >
        1/8
      </div>
    </div>
    <div
      class="absolute top-[1957px] left-[284px] text-xs leading-[16px] text-color-7 flex items-center w-[779px] h-[119px]"
    >
      <span class="[line-break:anywhere] w-full">
        <p class="m-0">
          Receber a orientação de Louro José foi como encontrar um farol em meio
          ao mar de opções de pisos. Sua experiência e conhecimento não apenas
          ajudaram na escolha do piso ideal, mas também trouxeram uma nova
          perspectiva para o meu projeto de interiores. O piso selecionado não é
          apenas um elemento físico, é uma peça que transformará completamente
          meu espaço, e isso se deve à orientação especializada e à paixão que
          Louro demonstra por seu trabalho. Sua atenção aos detalhes e
          compromisso em garantir que cada cliente encontre não apenas um piso,
          mas a peça perfeita para seu ambiente, são verdadeiramente
          inspiradores. Essa experiência me deixou não apenas satisfeito, mas
          genuinamente impressionado com a dedicação e a expertise de Louro
          José.
        </p>
      </span>
    </div>
    <div
      class="absolute top-[2204px] left-[113px] text-base leading-[20px] font-medium flex items-center w-[71px] h-5"
    >
      Lira
    </div>
    <div
      class="absolute top-[2204px] left-[184px] text-base leading-[20px] font-medium flex items-center w-[68px] h-5"
    >
      avaliou
    </div>
    <div
      class="absolute top-[2228px] left-[113px] text-sm leading-[20px] flex items-center w-[25px] h-5"
    >
      5.0
    </div>
    <img
      class="absolute top-[2229px] left-[147px] w-[21px] h-[18px] overflow-hidden"
      alt=""
      src="/icon11.svg"
    />
    <img
      class="absolute top-[2229px] left-[170px] w-[22px] h-[18px] overflow-hidden"
      alt=""
      src="/icon12.svg"
    />
    <img
      class="absolute top-[2229px] left-[195px] w-[22px] h-[18px] overflow-hidden"
      alt=""
      src="/icon12.svg"
    />
    <img
      class="absolute top-[2229px] left-[219px] w-[22px] h-[18px] overflow-hidden"
      alt=""
      src="/icon12.svg"
    />
    <img
      class="absolute top-[2229px] left-[243px] w-[23px] h-[18px] overflow-hidden"
      alt=""
      src="/icon13.svg"
    />
    <div
      class="absolute h-[calc(100%_-_2676px)] top-[2204px] bottom-[472px] left-[43px] w-12 overflow-hidden"
    >
      <div
        class="absolute w-full top-[0px] right-[0px] left-[0px] h-12 overflow-hidden"
      >
        <div class="absolute top-[0px] left-[0px] w-12 h-12 overflow-hidden">
          <div
            class="absolute top-[calc(50%_-_24px)] left-[calc(50%_-_24px)] w-12 h-12 overflow-hidden"
          />
        </div>
      </div>
      <div
        class="absolute top-[0px] left-[0px] rounded-29xl w-12 h-12 overflow-hidden bg-[url('/public/image37@3x.png')] bg-cover bg-no-repeat bg-[top]"
      >
        <img
          class="absolute top-[0px] left-[0px] w-52 h-[239px] object-cover"
          alt=""
          src="/image-22@2x.png"
        />
      </div>
    </div>
    <div
      class="absolute h-[calc(100%_-_2546px)] top-[2189px] bottom-[357px] left-[1130px] bg-gray1-400 w-[246px] text-xs text-grey-white"
    >
      <img
        class="absolute top-[0px] left-[0px] w-[246px] h-[189px] object-cover"
        alt=""
        src="/image-20@2x.png"
      />
      <div
        class="absolute top-[164px] left-[114px] leading-[16px] flex items-center w-[18.8px] h-3.5"
      >
        1/8
      </div>
    </div>
    <div
      class="absolute top-[2189px] left-[284px] text-xs leading-[16px] text-color-7 flex items-center w-[779px] h-[119px]"
    >
      <span class="[line-break:anywhere] w-full">
        <p class="m-0">
          Receber a orientação de Louro José foi como encontrar um farol em meio
          ao mar de opções de pisos. Sua experiência e conhecimento não apenas
          ajudaram na escolha do piso ideal, mas também trouxeram uma nova
          perspectiva para o meu projeto de interiores. O piso selecionado não é
          apenas um elemento físico, é uma peça que transformará completamente
          meu espaço, e isso se deve à orientação especializada e à paixão que
          Louro demonstra por seu trabalho. Sua atenção aos detalhes e
          compromisso em garantir que cada cliente encontre não apenas um piso,
          mas a peça perfeita para seu ambiente, são verdadeiramente
          inspiradores. Essa experiência me deixou não apenas satisfeito, mas
          genuinamente impressionado com a dedicação e a expertise de Louro
          José.
        </p>
      </span>
    </div>
  </div>
  <div v-if="isPopUpSair1Open">
    <PortalPopup
      overlayColor="rgba(113, 113, 113, 0.3)"
      placement="Centered"
      :relativeLayerRef="$refs[groupContainer22Ref]"
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
    name: "Servios3",
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
      onSobreText1Click() {
        this.$router.push("/sobre");
      },
    },
  });
</script>
