<template>
  <div
    class="relative rounded-lg bg-grey-white w-[347px] h-[403px] overflow-hidden max-w-full max-h-full text-center text-base text-color-7 font-roboto"
  >
    <div
      class="absolute top-[28px] left-[24px] w-[179px] h-[65px] text-lgi text-gray1-1500"
    >
      <div class="absolute top-[0px] left-[0px] w-[179px] h-[65px]">
        <div class="absolute top-[10px] left-[96px]">Francisco</div>
        <div
          class="absolute top-[43px] left-[96px] text-base font-light cursor-pointer"
          @click="onMeuPerfilTextClick"
        >
          Meu perfil
        </div>
        <div
          class="absolute top-[0px] left-[0px] rounded-[50%] bg-gray1-1500 w-[67px] h-[65px]"
        />
      </div>
    </div>
    <img
      class="absolute h-[5.83%] w-[9.74%] top-[17.47%] right-[34.93%] bottom-[76.7%] left-[55.33%] max-w-full overflow-hidden max-h-full"
      alt=""
      src="/arrow--caret-down-md.svg"
    />
    <img
      class="absolute top-[124.5px] left-[0px] w-[347px] h-0.5"
      alt=""
      src="/line-21.svg"
    />
    <img
      class="absolute top-[337px] left-[0px] w-[347px] h-0.5"
      alt=""
      src="/line-22.svg"
    />
    <div class="absolute top-[127.9px] left-[0px] w-[347px] h-[62.1px]">
      <div
        class="absolute top-[0px] left-[0px] bg-grey-white w-[347px] h-[62.1px]"
      />
      <div
        class="absolute top-[13.9px] left-[31px] font-light flex items-center justify-center w-[106px] h-[33.4px]"
      >
        Meus Pedidos
      </div>
    </div>
    <div class="absolute top-[190px] left-[0px] w-[347px] h-[67px] text-left">
      <div
        class="absolute top-[0px] left-[0px] bg-grey-white w-[347px] h-[67px]"
      />
      <div
        class="absolute top-[16px] left-[34px] font-light flex items-center w-[74px] h-9"
      >
        Perguntas
      </div>
    </div>
    <div class="absolute top-[257px] left-[0px] w-[347px] h-[67px]">
      <div
        class="absolute top-[0px] left-[0px] bg-grey-white w-[347px] h-[67px]"
      />
      <div
        class="absolute top-[15px] left-[30px] font-light flex items-center justify-center w-36 h-9"
      >
        Código de Indicação
      </div>
    </div>
    <div
      class="absolute top-[345px] left-[1px] w-[347px] h-[57px] cursor-pointer text-left"
      @click="onBotaoSairContainerClick"
    >
      <div
        class="absolute top-[0px] left-[0px] bg-grey-white w-[347px] h-[57px]" />
      <div
        class="absolute top-[10px] left-[30px] font-light flex items-center w-7 h-9" >
        Sair
      </div>
    </div>
    <div
      class="absolute top-[34px] left-[45px] text-21xl font-medium font-ibm-plex-serif text-grey-white"
    >
      F
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "PopUpSair",
    methods: {
      onMeuPerfilTextClick() {
        this.$router.push("/meu-perfil");
      },
      onBotaoSairContainerClick() {
        this.$router.push("/");
      },
    },
  });
</script>
