<template>
  <div
    class="relative bg-grey-white w-full h-[2030px] overflow-hidden text-left text-[50px] text-color-7 font-source-sans-pro"
  >
    <div class="absolute top-[641px] left-[495px] w-[915px] h-[169px]">
      <div
        class="absolute top-[0px] left-[0px] leading-[50px] inline-block w-[300px]"
      >
        Nossa história
      </div>
      <div
        class="absolute top-[94px] left-[2px] text-lg leading-[25px] inline-block w-[913px]"
      >
        A Camélia foi criada em 2023, como uma plataforma online para dar aos
        profissionais de diversas áreas a possibilidade de anunciarem os seus
        serviços. Com isso, é possível que os clientes encontrem os prestadores
        de serviços ideais para as suas necessidades, de forma rápida e prática.
      </div>
    </div>
    <div
      class="absolute top-[875px] left-[-7px] w-[1932px] h-[535px] text-center text-lg"
    >
      <div
        class="absolute top-[0px] left-[0px] bg-mediumaquamarine-500 w-[1932px] h-[535px]"
      />
      <div
        class="absolute top-[114px] left-[723.5px] text-21xl leading-[40px] inline-block w-[462.9px]"
      >
        Como funciona a Camélia
      </div>
      <div
        class="absolute top-[222px] left-[703.4px] leading-[25px] inline-block w-[195.2px]"
      >
        Para cliente:
      </div>
      <div
        class="absolute top-[273px] left-[661.1px] text-mid leading-[25px] inline-block w-[279.7px]"
      >
        Pelo nosso site, você descreve o que precisa e em menos de uma hora (em
        média) até 4 profissionais podem entrar em contato com você para te
        passar o orçamento.
      </div>
      <div
        class="absolute top-[222px] left-[1003.2px] leading-[25px] inline-block w-[234.5px]"
      >
        Para profissional:
      </div>
      <div
        class="absolute top-[273px] left-[986.1px] leading-[25px] inline-block w-[270.7px]"
      >
        Pelo app, você consegue oportunidades de clientes na sua região e
        escolhe quais quer atender. Ao liberar uma oportunidade, você negocia
        diretamente com o cliente e estabelece seus próprios preços.
      </div>
    </div>
    <div
      class="absolute top-[0px] left-[-4px] w-[1929px] h-[555px] text-40xl text-grey-white"
    >
      <div
        class="absolute top-[0px] left-[0px] bg-gray1-1500 w-[1929px] h-[555px]"
      />
      <div
        class="absolute top-[173px] left-[472px] leading-[60px] inline-block w-[357px]"
      >
        Quem somos?
      </div>
      <div
        class="absolute top-[281px] left-[472px] text-lg leading-[25px] inline-block w-[504px]"
      >
        Bem-vindo à nossa casa digital, onde conectamos quem precisa com quem
        sabe. Somos a principal plataforma online de serviços, dedicada a unir
        clientes a profissionais talentosos. Nosso aplicativo é um vasto mercado
        virtual, oferecendo serviços para atender a diversas necessidades.
      </div>
      <img
        class="absolute top-[42px] left-[461px] w-[129px] h-[99px] overflow-hidden cursor-pointer"
        alt=""
        src="/group-7-2.svg"
        @click="onGroup72Click"
      />
    </div>
    <div
      class="absolute top-[1410px] left-[-19px] w-[1959px] h-[632px] text-mini text-grey-white font-roboto"
    >
      <div
        class="absolute top-[0px] left-[0px] bg-gray1-1500 w-[1959px] h-[632px]"
      />
      <div
        class="absolute bottom-[316px] left-[763px] flex flex-row items-center justify-start gap-[30px]"
      >
        <div
          class="relative w-[99px] h-[75px] cursor-pointer text-5xl font-judson"
          @click="onGroupContainer3Click"
        >
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
      </div>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Sobre",
    methods: {
      onGroup72Click() {
        this.$router.push("/pagina-inicial");
      },
      onGroupContainer3Click() {
        this.$router.push("/pagina-inicial");
      },
    },
  });
</script>
