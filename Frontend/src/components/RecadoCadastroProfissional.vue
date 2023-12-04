<template>
  <div
    class="relative bg-grey-white w-[987px] h-[836px] overflow-hidden max-w-full max-h-full text-center text-11xl text-color-7 font-roboto"
  >
    <div
      class="absolute top-[144.5px] left-[63.5px] box-border w-[782px] h-px border-t-[1px] border-solid border-gray1-1500"
    />
    <div
      class="absolute top-[188px] left-[37px] tracking-[0.25px] leading-[40px] inline-block w-[901px]"
    >
      <p class="m-0">Olá, Agradecemos por escolher a Camélia!</p>
      <p class="m-0">&nbsp;</p>
      <p class="m-0">
        Queremos informar que recebemos seu cadastro e estamos atualmente
        analisando os dados pessoais e documentos que você gentilmente anexou.
        Nosso compromisso é assegurar a segurança e a precisão de todas as
        informações.
      </p>
      <p class="m-0">&nbsp;</p>
      <p class="m-0">
        Fique tranquilo(a), em breve entraremos em contato através do email
        cadastrado para fornecer o retorno sobre a conclusão da análise. Caso
        tenha alguma dúvida ou necessite de informações adicionais, não hesite
        em nos contatar.
      </p>
    </div>
    <div
      class="absolute top-[59px] left-[280px] text-16xl tracking-[0.25px] leading-[28px] inline-block w-[415px]"
    >
      Análise em Andamento
    </div>
    <div
      class="absolute top-[686px] left-[376px] w-[235px] h-20 cursor-pointer text-grey-white"
      @click="onGroupContainer1Click"
    >
      <div class="absolute top-[0px] left-[0px] w-[235px] h-20">
        <div
          class="absolute top-[0px] left-[0px] rounded-xl bg-gray1-1500 w-[235px] h-20"
        />
        <div
          class="absolute w-full top-[calc(50%_-_14px)] left-[0%] tracking-[0.25px] leading-[28px] inline-block h-7"
        >
          OK
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "RecadoCadastroProfissional",
    methods: {
      onGroupContainer1Click() {
        this.$router.push("/cadastro-de-profissional");
      },
    },
  });
</script>
