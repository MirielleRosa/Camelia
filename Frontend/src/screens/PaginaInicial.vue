<template>
  
  <div class="pagina-inicial">
    <div class="overlap-wrapper-2">
      <div class="overlap-8">
        <div class="text-wrapper-52">Pedidos mais requisitados</div>
        <div class="button-top" @click="onLoginClick()">
          
          <div class="text-wrapper-53">LOGIN</div>
        </div>
       
        <img class="group-15" alt="Group" src="https://c.animaapp.com/dmaOkRSZ/img/group-7-1.svg" />
        <Group />
        <img class="frame-3" alt="Frame" src="https://c.animaapp.com/dmaOkRSZ/img/frame-2-9.png" />
        <div class="rectangle" />
        <HeaderImage
          class="header-image-instance"
          unsplashKho="https://c.animaapp.com/dmaOkRSZ/img/unsplash-kho-jvns5xc-1.png"
          unsplashKhoClassName="design-component-instance-node"
        />
        <Frame />
        <OverlapWrapper />
        <p class="text-wrapper-54">14 de Outubro de 2023</p>
        <p class="text-wrapper-55">14 de Outubro de 2023</p>
        <img class="IMAGE-9" alt="Image" src="https://c.animaapp.com/dmaOkRSZ/img/image-6.svg" />
        <img class="IMAGE-10" alt="Image" src="https://c.animaapp.com/dmaOkRSZ/img/image-25.svg" />
        <div class="rectangle-2" />
        <div class="frame-4">
          <p class="text-wrapper-56">Unimos você aos melhores prestadores para soluções excelentes!</p>
        </div>
        <div class="button-top-2">
          <div class="text-wrapper-57">SEJA UM PROFISSIONAL</div>
        </div>
        <img
          class="icon-nav-arrow-left"
          alt="Icon nav arrow left"
          src="https://c.animaapp.com/dmaOkRSZ/img/---icon--nav-arrow-left--1@2x.png"
        />
        <img
          class="icon-nav-arrow-left-2"
          alt="Icon nav arrow left"
          src="https://c.animaapp.com/dmaOkRSZ/img/---icon--nav-arrow-left-@2x.png"
        />
        <div class="rectangle-3" />
        <div class="text-wrapper-58">SIGA-NOS</div>
        <div class="text-wrapper-59">ASSITÊNCIA</div>
        <div class="text-wrapper-60">Contate-nos</div>
        <div class="text-wrapper-61">Pagamento</div>
        <div class="text-wrapper-62">Feedback</div>
        <div class="text-wrapper-63">Sobre</div>
        <img class="line-2" alt="Line" src="https://c.animaapp.com/dmaOkRSZ/img/line-3.svg" />
        <FrameWrapper />
        <img class="button" alt="Button" src="https://c.animaapp.com/dmaOkRSZ/img/button.svg" />
        <Section />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderImage from "../components/HeaderImage.vue";
import Frame from "./PaginaInicial/sections/Frame.vue";
import FrameWrapper from "./PaginaInicial/sections/FrameWrapper.vue";
import Group from "./PaginaInicial/sections/Group.vue";
import OverlapWrapper from "./PaginaInicial/sections/OverlapWrapper.vue";
import Section from "./PaginaInicial/sections/Section.vue";


export default {
  name: "PaginaInicial",
  components: {
    HeaderImage,
    Frame,
    FrameWrapper,
    Group,
    OverlapWrapper,
    Section,
  },
  methods: {
  onLoginClick() {
    if (this.$router.currentRoute.path !== '/login') {
      this.$router.push('/login')
    }
  }
}
};
</script>

<style>

.pagina-inicial {
    min-height: 100vh; /* Defina a altura mínima como 100% da altura da viewport */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch; /* Faça com que os itens se estendam verticalmente */
  }


  .pagina-inicial .overlap-wrapper-2 {
    background-color: #ffffff;
    overflow: hidden;
    width: 100%; /* Faça com que o wrapper ocupe 100% da largura */
  }

  .pagina-inicial .overlap-8 {
    height: 100%; /* Faça com que o conteúdo se estenda até o final da tela */
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }


/* Add media query for smaller screens */
@media screen and (max-width: 768px) {
  .pagina-inicial .overlap-8 {
    flex-direction: column; /* Change to a column layout on smaller screens */
    align-items: center; /* Center the content on smaller screens */
  }
}

.pagina-inicial {
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}

.pagina-inicial .overlap-wrapper-2 {
  background-color: #ffffff;
  height: 3405px;
  overflow: hidden;
  width: 1440px;
}

.pagina-inicial .overlap-8 {
  height: 7959px;
  left: -232px;
  position: relative;
  top: -2799px;
  width: 1929px;
}

.pagina-inicial .text-wrapper-52 {
  color: #393939;
  font-family: "IBM Plex Serif", Helvetica;
  font-size: 48px;
  font-weight: 600;
  left: 654px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 4081px;
}

.pagina-inicial .button-top {
  background-color: #0c0c0c;
  border-radius: 36px;
  box-sizing: border-box;
  height: 65px;
  left: 1329px;
  position: absolute;
  top: 2836px;
  width: 289px;
  z-index: 100; 
  cursor: pointer; /* Add this line to indicate it's clickable */
}


.pagina-inicial .text-wrapper-53 {
  color: #ffffff;
  font-family: "Roboto", Helvetica;
  font-size: 20px;
  font-weight: 400;
  left: 0;
  letter-spacing: 0;
  line-height: 30.6px;
  position: absolute;
  text-align: center;
  top: 16px;
  width: 289px;
}

.pagina-inicial .group-15 {
  height: 99px;
  left: 275px;
  position: absolute;
  top: 2829px;
  width: 129px;
}

.pagina-inicial .frame-3 {
  height: 880px;
  left: 232px;
  object-fit: cover;
  position: absolute;
  top: 2954px;
  width: 1440px;
}

.pagina-inicial .rectangle {
  background-color: #2e2e2e80;
  height: 880px;
  left: 232px;
  position: absolute;
  top: 2954px;
  width: 1440px;
}

.pagina-inicial .header-image-instance {
  background-color: unset !important;
  border-radius: unset !important;
  height: 610px !important;
  left: 151px !important;
  position: absolute !important;
  top: 3225px !important;
  width: 610px !important;
}

.pagina-inicial .design-component-instance-node {
  height: 961px !important;
  left: 81px !important;
  top: -351px !important;
  width: 588px !important;
}

.pagina-inicial .text-wrapper-54 {
  color: #575757;
  font-family: "Source Sans Pro", Helvetica;
  font-size: 16px;
  font-weight: 400;
  left: 477px;
  letter-spacing: 0;
  line-height: 20.8px;
  position: absolute;
  top: 4515px;
  width: 187px;
}

.pagina-inicial .text-wrapper-55 {
  color: #575757;
  font-family: "Source Sans Pro", Helvetica;
  font-size: 16px;
  font-weight: 400;
  left: 1152px;
  letter-spacing: 0;
  line-height: 20.8px;
  position: absolute;
  top: 4515px;
  width: 187px;
}

.pagina-inicial .IMAGE-9 {
  height: 48px;
  left: 1157px;
  position: absolute;
  top: 4266px;
  width: 48px;
}

.pagina-inicial .IMAGE-10 {
  height: 50px;
  left: 466px;
  position: absolute;
  top: 4262px;
  width: 50px;
}

.pagina-inicial .rectangle-2 {
  background-color: #2e2e2e26;
  height: 880px;
  left: 232px;
  position: absolute;
  top: 2955px;
  width: 1445px;
}

.pagina-inicial .frame-4 {
  align-items: flex-start;
  display: inline-flex;
  flex-direction: column;
  left: 880px;
  position: absolute;
  top: 3214px;
}

.pagina-inicial .text-wrapper-56 {
  color: var(--cream);
  font-family: "Source Sans Pro", Helvetica;
  font-size: 48px;
  font-weight: 700;
  height: 219px;
  letter-spacing: 0.96px;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  width: 677px;
}

.pagina-inicial .button-top-2 {
  background-color: #0c0c0c;
  border-radius: 20px;
  height: 90px;
  left: 867px;
  position: absolute;
  top: 3530px;
  width: 630px;
  cursor: pointer; 
}


.pagina-inicial .text-wrapper-57 {
  color: #ffffff;
  font-family: "Roboto", Helvetica;
  font-size: 30px;
  font-weight: 400;
  height: 104px;
  left: 89px;
  letter-spacing: 0;
  line-height: 45.9px;
  position: absolute;
  text-align: center;
  top: 20px;
  width: 451px;
}

.pagina-inicial .icon-nav-arrow-left {
  height: 34px;
  left: 286px;
  position: absolute;
  top: 4382px;
  width: 23px;
}

.pagina-inicial .icon-nav-arrow-left-2 {
  height: 34px;
  left: 1560px;
  position: absolute;
  top: 4382px;
  width: 23px;
}

.pagina-inicial .rectangle-3 {
  background-color: #0c0c0c;
  height: 531px;
  left: 232px;
  position: absolute;
  top: 5673px;
  width: 1440px;
}

.pagina-inicial .text-wrapper-58 {
  color: #dfdddd;
  font-family: "Crimson Text", Helvetica;
  font-size: 18px;
  font-weight: 400;
  left: 302px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 5725px;
}

.pagina-inicial .text-wrapper-59 {
  color: #dfdddd;
  font-family: "Crimson Text", Helvetica;
  font-size: 18px;
  font-weight: 400;
  left: 1356px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 5713px;
}

.pagina-inicial .text-wrapper-60 {
  color: #e8e4e4;
  font-family: "Crimson Text", Helvetica;
  font-size: 18px;
  font-weight: 400;
  left: 1360px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 5761px;
}

.pagina-inicial .text-wrapper-61 {
  color: #e8e4e4;
  font-family: "Crimson Text", Helvetica;
  font-size: 18px;
  font-weight: 400;
  left: 1361px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 5799px;
}

.pagina-inicial .text-wrapper-62 {
  color: #e8e4e4;
  font-family: "Crimson Text", Helvetica;
  font-size: 18px;
  font-weight: 400;
  left: 1361px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 5837px;
}

.pagina-inicial .text-wrapper-63 {
  color: #e8e4e4;
  font-family: "Crimson Text", Helvetica;
  font-size: 18px;
  font-weight: 400;
  left: 1363px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 5878px;
}

.pagina-inicial .line-2 {
  height: 1px;
  left: 276px;
  object-fit: cover;
  position: absolute;
  top: 5970px;
  width: 1233px;
}

.pagina-inicial .button {
  height: 44px;
  left: 232px;
  position: absolute;
  top: 4911px;
  width: 42px;
}
</style>