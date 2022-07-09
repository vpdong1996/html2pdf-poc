export const HTML = `<html><head><style>
@page {
  size: 1024px 1446px;
  margin: 0 !important;
}

#proposal_editor_mode {
  margin-top: 0 !important;
  transform: unset !important;
}
.blockGroup {
  padding-top: 0 !important;
  overflow: auto !important;
}
.hide-in-viewmode {
  display: none !important;
}
.blockWrapper {
  height: 1446px !important;
  margin: 0 auto !important;
}
.blockContainerCoverPage {
  margin-top: 0 !important;
  transform: scale(1) !important;
  background-image: unset !important;
}
::-webkit-scrollbar {
  display: none;
  width: 0px; /* For Chrome, Safari, and Opera */
}

@media print {
  html,
  body {
    -webkit-print-color-adjust: exact !important;
    color-adjust: exact !important;
  }

  .page-break {
    break-after: always;
  }
  .blockStyle .areaDropBackground-image {
    background-image: unset !important;
  }
}
</style><link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&amp;family=Acme&amp;family=Alegreya+Sans:ital,wght@0,400;0,700;1,400;1,700&amp;family=Alegreya:ital,wght@0,400;0,700;1,400;1,700&amp;family=Alex+Brush&amp;family=Bebas+Neue&amp;family=Graduate&amp;family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&amp;family=Nunito:ital,wght@0,400;0,700;1,400;1,700&amp;family=Rakkas&amp;family=PT+Sans+Caption:wght@400;700&amp;family=PT+Sans+Narrow:wght@400;700&amp;family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&amp;family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&amp;family=Zilla+Slab:ital,wght@0,400;0,700;1,400;1,700&amp;display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&amp;family=Anton&amp;family=Archivo+Black&amp;family=Archivo+Narrow:ital,wght@0,400;0,700;1,400;1,700&amp;family=Archivo:ital,wght@0,400;0,700;1,400;1,700&amp;family=Arimo:ital,wght@0,400;0,700;1,400;1,700&amp;family=Arvo:ital,wght@0,400;0,700;1,400;1,700&amp;family=Asap+Condensed:ital,wght@0,400;0,700;1,400;1,700&amp;family=Berkshire+Swash&amp;family=Bilbo+Swash+Caps&amp;family=Lora:ital,wght@0,400;0,700;1,400;1,700&amp;family=Lovers+Quarrel&amp;family=Luckiest+Guy&amp;family=Mada:wght@400;700&amp;family=Raleway:ital,wght@0,400;0,700;1,400;1,700&amp;display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,400;0,700;1,400;1,700&amp;family=Black+Ops+One&amp;family=Bowlby+One+SC&amp;family=Bungee+Inline&amp;family=Cabin:ital,wght@0,400;0,700;1,400;1,700&amp;family=Cairo:wght@400;700&amp;family=Ceviche+One&amp;family=Cinzel:wght@400;700&amp;family=Clicker+Script&amp;family=Cormorant+Garamond:ital,wght@0,400;0,700;1,400;1,700&amp;family=Crete+Round:ital@0;1&amp;family=Cuprum:ital,wght@0,400;0,700;1,400;1,700&amp;family=Dancing+Script:wght@400;700&amp;family=Dosis:wght@400;700&amp;family=EB+Garamond:ital,wght@0,400;0,700;1,400;1,700&amp;family=Euphoria+Script&amp;family=Ewert&amp;display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Exo:ital,wght@0,400;0,700;1,400;1,700&amp;family=Faustina:ital,wght@0,400;0,700;1,400;1,700&amp;family=Fjalla+One&amp;family=Francois+One&amp;family=Fredericka+the+Great&amp;family=Great+Vibes&amp;family=Hind:wght@400;700&amp;family=Inconsolata:wght@400;700&amp;family=Indie+Flower&amp;family=Josefin+Sans:ital,wght@0,400;0,700;1,400;1,700&amp;family=Julee&amp;family=Just+Another+Hand&amp;family=Lato:ital,wght@0,400;0,700;1,400;1,700&amp;family=Leckerli+One&amp;family=Libre+Franklin:ital,wght@0,400;0,700;1,400;1,700&amp;family=Lobster+Two:ital,wght@0,400;0,700;1,400;1,700&amp;display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Manuale:ital,wght@0,400;0,700;1,400;1,700&amp;family=Maven+Pro:wght@400;700&amp;family=Merienda+One&amp;family=Merriweather:ital,wght@0,400;0,700;1,400;1,700&amp;family=Montserrat:ital,wght@0,400;0,700;1,400;1,700&amp;family=Mountains+of+Christmas:wght@400;700&amp;family=Mr+Dafoe&amp;family=Mukta+Vaani:wght@400;700&amp;family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&amp;family=Noto+Serif:ital,wght@0,400;0,700;1,400;1,700&amp;family=Oleo+Script:wght@400;700&amp;family=Open+Sans+Condensed:wght@700&amp;family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&amp;family=Oswald:wght@400;700&amp;family=Oxygen:wght@400;700&amp;display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Parisienne&amp;family=Passion+One:wght@400;700&amp;family=Pathway+Gothic+One&amp;family=Pirata+One&amp;family=Play:wght@400;700&amp;family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&amp;family=Poppins:ital,wght@0,400;0,700;1,400;1,700&amp;family=Roboto+Condensed&amp;family=Roboto+Slab:wght@400;700&amp;family=Roboto:ital,wght@0,400;0,700;1,400;1,700&amp;family=Ropa+Sans:ital@0;1&amp;family=Rye&amp;family=Saira+Condensed:wght@400;700&amp;family=Saira+Extra+Condensed:wght@400;700&amp;family=Saira+Semi+Condensed:wght@400;700&amp;family=Saira:ital,wght@0,400;0,700;1,400;1,700&amp;family=Sedgwick+Ave&amp;family=Sedgwick+Ave+Display&amp;family=Shadows+Into+Light+Two&amp;display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Allura&amp;family=Arizonia&amp;family=Bevan&amp;family=Cookie&amp;family=Creepster&amp;family=Damion&amp;family=Engagement&amp;family=Italianno&amp;family=Source+Sans+Pro:ital,wght@0,400;0,700;1,400;1,700&amp;family=Spectral:ital,wght@0,400;0,700;1,400;1,700&amp;family=Spicy+Rice&amp;family=Titillium+Web:ital,wght@0,400;0,700;1,400;1,700&amp;family=Ubuntu:ital,wght@0,400;0,700;1,400;1,700&amp;family=UnifrakturMaguntia&amp;family=Vidaloka&amp;family=Vollkorn:ital,wght@0,400;0,700;1,400;1,700&amp;family=Zilla+Slab+Highlight:wght@400;700&amp;display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Lemon&amp;family=Monoton&amp;family=Montez&amp;family=Norican&amp;family=Pacifico&amp;family=Piedra&amp;family=Playball&amp;family=Qwigley&amp;family=Rochester&amp;family=Ruthie&amp;family=Sacramento&amp;family=Shrikhand&amp;family=Yellowtail&amp;display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css?family=Droid+Sans:ital,wght@0,400;0,700;1,400;1,700%7CDroid+Serif:ital,wght@0,400;0,700;1,400;1,700%7CMerriweather+Sans:Muli:ital,wght@0,400;0,700;1,400;1,700&amp;display=swap" crossorigin="anonymous" rel="stylesheet"><link href="https://fonts.googleapis.com/css?family=Material+Icons%7CMaterial+Icons+Outlined" crossorigin="anonymous" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&amp;display=swap" rel="stylesheet"><link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet"><link href="https://docs.survivalapp.com/static/css/main.898bfb1f.css" rel="stylesheet"><link rel="stylesheet" type="text/css" href="https://docs.survivalapp.com/static/css/1057.c7f7c2e7.chunk.css"><style id="react-to-print-14">.dlxkXD { font-stretch: normal; font-style: normal; letter-spacing: normal; padding: 0px; margin: 0px; font-family: Roboto; font-size: 12px; font-weight: 400; line-height: 1.33; text-align: inherit; color: rgb(255, 255, 255); }
.eEdQNB { font-stretch: normal; font-style: normal; letter-spacing: normal; padding: 0px; margin: 0px; font-family: Roboto; font-size: 15px; font-weight: 400; line-height: 1.33; text-align: inherit; color: rgb(34, 43, 69); }
.gfVLhK { font-stretch: normal; font-style: normal; letter-spacing: normal; padding: 0px; margin: 0px; font-family: Roboto; font-size: 12px; font-weight: 400; line-height: 1.33; text-align: inherit; color: rgb(34, 43, 69); }
.dyWiEL { margin-left: 0px; margin-right: 8px; line-height: 0; }
.dyWiEL svg { width: 24px; height: 24px; }
.jcHMiK { padding: 0px 16px; font-size: 14px; height: 40px; line-height: 1.14; cursor: pointer; box-shadow: none; font-family: Roboto; font-weight: 700; border-radius: 4px; transition: all 0.2s ease 0s; display: flex; -webkit-box-align: center; align-items: center; -webkit-box-pack: center; justify-content: center; overflow: hidden; position: relative; }
.jcHMiK:disabled { opacity: 0.48; cursor: initial; }
.jcHMiK .ripple { position: absolute; border-radius: 50%; transform: scale(0); animation: 600ms linear 0s 1 normal none running BpRJU; background-color: rgba(0, 0, 0, 0.4); }
.kAsduk { padding: 0px 8px; font-size: 10px; height: 24px; line-height: 1.2; cursor: pointer; box-shadow: none; font-family: Roboto; font-weight: 700; border-radius: 4px; transition: all 0.2s ease 0s; display: flex; -webkit-box-align: center; align-items: center; -webkit-box-pack: center; justify-content: center; overflow: hidden; position: relative; }
.kAsduk:disabled { opacity: 0.48; cursor: initial; }
.kAsduk .ripple { position: absolute; border-radius: 50%; transform: scale(0); animation: 600ms linear 0s 1 normal none running BpRJU; background-color: rgba(0, 0, 0, 0.4); }
.eLbkLn { background: transparent; color: rgb(34, 43, 69); border: none; }
.eLbkLn:hover:enabled { background: rgb(237, 241, 247); color: rgb(34, 43, 69); }
.eLbkLn svg .svg-fill { fill: rgb(34, 43, 69); }
.EcazL { background: rgb(255, 90, 25); color: rgb(255, 255, 255); border: none; }
.EcazL:hover:enabled { background: rgb(219, 61, 18); }
.EcazL svg .svg-fill { fill: rgb(255, 255, 255); }
.cGHHAZ { background: rgb(228, 233, 242); color: rgb(34, 43, 69); border: none; }
.cGHHAZ:hover:enabled { background: rgb(197, 206, 224); }
.cGHHAZ svg .svg-fill { fill: rgb(34, 43, 69); }
.gyKUaj { background: rgb(44, 131, 235); color: rgb(255, 255, 255); border: none; }
.gyKUaj:hover:enabled { background: rgb(32, 101, 202); }
.gyKUaj svg .svg-fill { fill: rgb(255, 255, 255); }
.cklIMg { height: 40px; width: 40px; cursor: pointer; box-shadow: none; border-radius: 4px; transition: all 0.2s ease 0s; display: flex; -webkit-box-pack: center; justify-content: center; -webkit-box-align: center; align-items: center; overflow: hidden; position: relative; }
.cklIMg svg { width: 24px; height: 24px; }
.cklIMg:disabled { opacity: 0.48; cursor: initial; }
.cklIMg .ripple { position: absolute; border-radius: 50%; transform: scale(0); animation: 600ms linear 0s 1 normal none running BpRJU; background-color: rgba(0, 0, 0, 0.4); }
.eTyPAA { background: rgb(228, 233, 242); color: rgb(34, 43, 69); border: none; }
.eTyPAA svg .svg-fill { fill: rgb(34, 43, 69); }
.eTyPAA:hover:enabled { background: rgb(197, 206, 224); }
.cMBBOt { display: flex; -webkit-box-pack: center; justify-content: center; -webkit-box-align: center; align-items: center; flex-direction: column; height: 100%; }
.bBMTGB { color: rgb(26, 26, 26); font-size: 16px; font-weight: bold; }
.hFsoYV { margin: 0px; font-size: 14px; color: rgb(26, 26, 26); }
.gjjjDZ { font-size: 14px; color: rgb(26, 26, 26); font-weight: bold; padding-right: 5px; }
.iMmeky { padding: 70px 15px 42px; display: inline-flex; -webkit-box-pack: center; justify-content: center; -webkit-box-align: center; align-items: center; }
.hUhzMo { position: absolute; inset: 0px; z-index: 10001; background: white; }
.jYeuoV { display: flex; flex-direction: column; width: 100%; height: 100%; }
.jrAkgR { position: absolute; z-index: 2; cursor: pointer; background-color: rgb(255, 255, 255); box-shadow: rgb(219, 219, 219) 0px -1px 1px; border-radius: 8px; display: flex; -webkit-box-pack: center; justify-content: center; -webkit-box-align: center; align-items: center; top: -15px; right: calc(50% - 36px); width: 72px; height: 20px; border-bottom: none; }
.kzCtFS { position: absolute; z-index: 2; cursor: pointer; background-color: rgb(255, 255, 255); box-shadow: rgb(219, 219, 219) 1px 0px 1px; border-radius: 8px; display: flex; -webkit-box-pack: start; justify-content: flex-start; -webkit-box-align: center; align-items: center; top: calc(50% - 54px); right: -12px; width: 20px; height: 72px; border-left: none; }
.FstCh { position: relative; display: flex; height: 100vh; box-shadow: rgb(230, 230, 230) 1px 0px 0px 0px; cursor: default; transition: all 0.5s ease 0s; overflow: visible; box-sizing: border-box; z-index: 1001; }
@media screen and (min-width: 992px) {
.FstCh { height: calc(100vh - 56px); }
}
.hXvzVI { background-color: rgb(255, 255, 255); width: 100%; }
.eXGsoR { position: relative; width: 100%; height: 100%; box-sizing: border-box; padding-left: 16px; padding-right: 16px; overflow-y: scroll; padding-bottom: 64px; }
.eXGsoR::-webkit-scrollbar-track { border-radius: 5px; background-color: transparent; }
.eXGsoR::-webkit-scrollbar { width: 0px; background-color: transparent; }
.eXGsoR::-webkit-scrollbar-thumb { border-radius: 5px; background-color: transparent; }
@media screen and (min-width: 992px) {
.eXGsoR { padding-left: 24px; padding-right: 24px; padding-top: 16px; overflow: auto; }
}
.iPqUOB { width: 72px; background-image: linear-gradient(rgb(46, 137, 222), rgb(14, 92, 194)); font-size: 12px; position: relative; height: 100vh; bottom: 0px; z-index: 1000; box-sizing: border-box; display: flex; flex-direction: column; -webkit-box-align: center; align-items: center; padding-top: 8px; }
.bxuQsj { text-align: center; cursor: pointer; padding: 10px 1px; margin-top: 4px; border-radius: 4px; opacity: 0.7; background: initial; color: rgb(255, 255, 255); overflow: hidden; width: 64px; box-sizing: border-box; }
.bxuQsj svg { width: 24px; height: 24px; }
.bxuQsj svg path { fill: rgb(255, 255, 255); }
.bxuQsj:hover { background: rgba(16, 20, 38, 0.2); opacity: 1; }
.hBcSIS { text-align: center; cursor: pointer; padding: 10px 1px; margin-top: 4px; border-radius: 4px; opacity: 1; background: rgba(16, 20, 38, 0.2); color: rgb(255, 255, 255); overflow: hidden; width: 64px; box-sizing: border-box; }
.hBcSIS svg { width: 24px; height: 24px; }
.hBcSIS svg path { fill: rgb(255, 255, 255); }
.hBcSIS:hover { background: rgba(16, 20, 38, 0.2); opacity: 1; }
.ezKNGw { overflow: hidden; width: 100%; padding-left: 1px; padding-right: 1px; text-overflow: ellipsis; box-sizing: border-box; }
.jVRfms { padding: 0px 16px; display: flex; -webkit-box-pack: end; justify-content: flex-end; -webkit-box-align: center; align-items: center; height: 42px; border-top: 1px solid rgb(245, 245, 245); }
.ifbKxC { background-color: rgb(255, 255, 255); position: absolute; bottom: 0px; width: 100%; }
.fRzObb { position: relative; height: 0px; }
.njDcj { position: relative; height: 0px; border-top: 2px solid rgb(245, 245, 245); margin: 0px -10px; background-color: rgb(255, 255, 255); }
.hTMJBU { position: relative; z-index: 3; height: 100%; width: 100%; background-color: rgb(255, 255, 255); }
.cSwRQJ { width: 32px; height: 32px; display: flex; -webkit-box-align: center; align-items: center; -webkit-box-pack: center; justify-content: center; border: none; }
.cSwRQJ:hover { background: rgb(237, 241, 247) !important; }
.ddxVdm { width: 100px; height: 32px; margin: 0px 4px 0px 0px; padding: 6px 8px; border-radius: 4px; border: 1px solid rgb(237, 241, 247); background-color: rgb(255, 255, 255); box-sizing: border-box; display: flex; -webkit-box-pack: justify; justify-content: space-between; -webkit-box-align: center; align-items: center; white-space: nowrap; text-transform: capitalize; cursor: pointer; }
.KKIjK { font-size: 15px; line-height: 1.33; letter-spacing: normal; color: rgb(34, 43, 69); width: 80px; overflow: hidden; text-overflow: ellipsis; }
.haRBjf { height: 3px; width: 18px; position: absolute; top: 23px; margin: auto; }
.fAyJzg { height: 3px; width: 18px; background-color: rgb(255, 255, 255); position: absolute; top: 23px; margin: auto; }
.kpFFFt { height: 3px; width: 18px; background-color: transparent; position: absolute; top: 23px; margin: auto; }
.cttUkm { height: 3px; width: 18px; background: linear-gradient(90deg, rgb(182, 32, 224) 0%, rgb(98, 54, 255) 17%, rgb(0, 145, 255) 33%, rgb(109, 212, 0) 50%, rgb(247, 181, 0) 67%, rgb(250, 100, 0) 83%, rgb(224, 32, 32) 100%); position: absolute; top: 23px; margin: auto; }
.isOeFx { display: flex; -webkit-box-pack: center; justify-content: center; -webkit-box-align: center; align-items: center; }
.kxHzAu { border-right: 1px solid rgb(236, 236, 236); height: 18px; margin: 0px 2px; }
.cjvwNL { display: flex; min-width: 0px; overflow: hidden; }
.cjvwNL .wrapper-leftmenu { flex: 0 0 72px; }
.cjvwNL:not(.PRINT_MODE) { background: rgb(247, 249, 252); }
.cjvwNL.view-mode .hide-in-viewmode { display: none; }
.cjvwNL.PRINT_MODE { overflow: unset; }
.cjvwNL.PRINT_MODE .blockStyle { margin: 0px auto; }
.cjvwNL.PRINT_MODE .wrapper-leftmenu { display: none; }
.jLHMzj { flex: 1 1 0%; min-width: 0px; position: relative; }
.jLHMzj div:not(.blockGroup) { box-sizing: initial; }
.hCUXAY { display: flex; position: relative; -webkit-box-pack: center; justify-content: center; }
@media screen and (min-width: 576px) {
.hCUXAY { height: 100%; }
}
.fKKRiX { display: flex; flex-direction: column; -webkit-box-align: center; align-items: center; padding: 7px; border-radius: 3px; color: rgba(26, 26, 26, 0.3); font-size: 11px !important; border: none !important; }
.fKKRiX.canClick { color: rgb(44, 131, 235); }
.ekOrYM { display: flex; padding: 0px 5px; }
.dbMVfN { display: flex; color: rgb(160, 166, 184); font-size: 13px; -webkit-box-align: center; align-items: center; }
.fnxfTv { height: -webkit-fill-available; }
.fcezAH { margin-right: 8px; width: 112px; }
.ejlJjj .MuiPaper-rounded { border-radius: 8px; }
.jJEaVV { display: inline-flex; flex-direction: column; -webkit-box-align: center; align-items: center; }
.hAXAkp { border-radius: 100%; margin-bottom: 4px; width: 48px; height: 48px; }
.dvNYZQ { border-radius: 100%; margin-bottom: 4px; width: 48px; height: 48px; }
.gjkNTU { display: inline-flex; flex-direction: column; -webkit-box-align: center; align-items: center; }
.izhuAu .MuiPaper-rounded { border-radius: 8px; }
.llLXeQ { width: 312px; padding: 16px; }
.fLLaCk { margin-bottom: 24px; }
.iQJeqW { padding: 0px 16px; display: flex; gap: 30px; }
.eKrMim { margin-right: 8px; width: 112px; }
.bbRDYz { position: relative; border-bottom: 1px solid rgb(236, 236, 236); height: 56px; display: flex; -webkit-box-align: center; align-items: center; z-index: 10; top: 0px; left: 0px; right: 0px; }
.bbRDYz.change-position { position: fixed; bottom: 0px; top: unset; background-color: white; z-index: 10; }
.eqxFoP { cursor: pointer; }
.bJeYlm { display: flex; flex: 1 1 0%; -webkit-box-align: center; align-items: center; -webkit-box-pack: end; justify-content: flex-end; padding: 8px 0px; }
.bJeYlm .pageSizeBtn, .bJeYlm .draftBtn, .bJeYlm .publish-btn { padding: 0px 25px; height: 38px; border-radius: 2px; border: 1px solid rgb(119, 119, 119); background-color: rgb(255, 255, 255); font-family: Arial; font-size: 13px; line-height: 1.46; color: rgb(26, 26, 26); margin-right: 15px; }
.bJeYlm .publish-btn { color: white; background: rgb(44, 131, 235); }
.exVuSF { margin-right: 8px; width: 112px; }
.hWtJAu { display: flex; -webkit-box-align: center; align-items: center; }
.FYFlO { margin-right: 8px; width: 112px; }
.kKqicg { width: 100vw; height: 100vh; }
@-webkit-keyframes BpRJU { 
100% { transform: scale(4); opacity: 0; }
}
@keyframes BpRJU { 
100% { transform: scale(4); opacity: 0; }
}
.bHwcOq { display: flex; -webkit-box-pack: center; justify-content: center; -webkit-box-align: center; align-items: center; width: 100%; }
.bHwcOq .forgot-password-content-modal { background: rgb(255, 255, 255); padding: 40px 32px; }
.bOoLBD { position: absolute; bottom: 32px; right: 12px; }
.iQraAw { height: 32px; background: rgb(32, 101, 202); z-index: 2; width: 100%; display: flex; -webkit-box-pack: justify; justify-content: space-between; bottom: 0px; right: 0px; position: absolute; -webkit-box-align: center; align-items: center; }
.jqgdiE { margin-left: 12px; }
.hinhfG { display: flex; -webkit-box-align: center; align-items: center; margin-right: 12px; }
.krJiwq { margin-right: 12px; font-size: 9px; }
.dtzuUo { flex: 1 1 0%; max-width: 100%; margin: 0px auto; width: 1024px; height: calc(100% - 56px); padding: 50px 80px; text-align: center; background-color: rgb(255, 255, 255); color: rgb(26, 26, 26); font-size: 16px; z-index: 1; min-height: 1446px; font-family: Roboto, sans-serif; border-bottom: 1px solid rgb(229, 229, 229); }
.dtzuUo .place-holder { color: rgb(170, 170, 170); font-family: inherit; }
.dtzuUo .areaDrop { height: 10px; width: 100%; position: absolute; bottom: -6px; left: 0px; }
.dtzuUo .areaDropBackground-image { position: absolute; inset: 0px; z-index: 0; cursor: pointer; overflow: hidden; background-image: linear-gradient(transparent, transparent); }
.dtzuUo .areaDropBackground-image img { min-width: 100%; min-height: 100%; object-fit: cover; }
.dtzuUo .areaDropBackground-image.dragEnter { background: rgba(18, 143, 249, 0.41); z-index: 10; }
.dtzuUo .areaDropBackground-image::after { content: ""; position: absolute; inset: 0px; z-index: 1; }
.dtzuUo .areaDropBackground-header { position: absolute; inset: 0px; z-index: 1; cursor: pointer; overflow: hidden; }
.dtzuUo.current .action-focus { opacity: 1; transition: opacity 0.3s ease-in-out 0s; }
.dtzuUo:not(.current) .action-focus { pointer-events: none; opacity: 0; transition: opacity 0.3s ease-in-out 0s; }
.dtzuUo .tinymce-custom { line-height: 1.57; letter-spacing: normal; font-size: 16px; }
.dtzuUo .tinymce-custom h1 { font-size: 75px; line-height: 1.07; }
.dtzuUo .tinymce-custom h2 { font-size: 32px; }
.dtzuUo .tinymce-custom ul, .dtzuUo .tinymce-custom ol { padding-inline-start: 30px; margin: 0px; }
.dtzuUo .block { position: relative; max-width: 100%; margin: 0px auto 15px; width: 900px; }
.dtzuUo .block .field:first-child h1:first-child, .dtzuUo .block .field:first-child h2:first-child { margin-top: 0px; }
.dtzuUo .block .field:first-child > div { margin-top: 0px; }
.dtzuUo .block .field:first-child .editor-wrapper { padding: 0px; }
.dtzuUo .block .field:first-child .signature, .dtzuUo .block .field:first-child .videoWrapper { padding-top: 0px; }
.dtzuUo .block .field.last-field > div { margin-bottom: 0px; }
.dtzuUo .block .field.last-field h1:last-child, .dtzuUo .block .field.last-field h2:last-child { margin-bottom: 0px; }
.dtzuUo .block .field.last-field .editor-wrapper { padding: 0px; }
.dtzuUo .block .field.last-field .signature, .dtzuUo .block .field.last-field .videoWrapper { padding-bottom: 0px; }
.dtzuUo .block .field.last-field .tableFieldWrapper { padding-bottom: 30px; }
.dtzuUo .block .field.last-field .tableFieldWrapper .add_row { bottom: 0px; }
.dtzuUo .show { color: initial; }
.dtzuUo .toolsWrapper { font-size: 12px; }
.dtzuUo .toolbar-wrapper { font-size: 12px; }
.dtzuUo .videoWrapper div { color: rgb(26, 26, 26); }
.dtzuUo .tableField_TD { font-size: 14px; }
.dtzuUo .tableField_TD h1 { font-size: 40px; }
.dtzuUo .tableField_TD h2 { font-size: 28px; }
.dtzuUo .wrapper-assignee { -webkit-box-pack: center; justify-content: center; }
.dtzuUo div.TABLE .tool-bar { -webkit-box-pack: center; justify-content: center; }
.dtzuUo div.PARAGRAPH .tool-bar { -webkit-box-pack: center; justify-content: center; }
.dtzuUo blockquote { border-left: 5px solid rgb(26, 26, 26); margin: 0px; padding: 10px 30px; }
.fQOxAV { flex: 1 1 0%; max-width: 100%; margin: 0px auto; width: 1024px; height: calc(100% - 56px); padding: 50px 80px; text-align: left; background-color: rgb(255, 255, 255); color: rgb(26, 26, 26); font-size: 16px; z-index: 1; min-height: 1446px; font-family: Roboto, sans-serif; border-bottom: 1px solid rgb(229, 229, 229); }
.fQOxAV .place-holder { color: rgb(170, 170, 170); font-family: inherit; }
.fQOxAV .areaDrop { height: 10px; width: 100%; position: absolute; bottom: -6px; left: 0px; }
.fQOxAV .areaDropBackground-image { position: absolute; inset: 0px; z-index: 0; cursor: pointer; overflow: hidden; background-image: linear-gradient(transparent, transparent); }
.fQOxAV .areaDropBackground-image img { min-width: 100%; min-height: 100%; object-fit: cover; }
.fQOxAV .areaDropBackground-image.dragEnter { background: rgba(18, 143, 249, 0.41); z-index: 10; }
.fQOxAV .areaDropBackground-image::after { content: ""; position: absolute; inset: 0px; z-index: 1; }
.fQOxAV .areaDropBackground-header { position: absolute; inset: 0px; z-index: 1; cursor: pointer; overflow: hidden; }
.fQOxAV.current .action-focus { opacity: 1; transition: opacity 0.3s ease-in-out 0s; }
.fQOxAV:not(.current) .action-focus { pointer-events: none; opacity: 0; transition: opacity 0.3s ease-in-out 0s; }
.fQOxAV .tinymce-custom { line-height: 1.57; letter-spacing: normal; font-size: 16px; }
.fQOxAV .tinymce-custom h1 { font-size: 75px; line-height: 1.07; }
.fQOxAV .tinymce-custom h2 { font-size: 32px; }
.fQOxAV .tinymce-custom ul, .fQOxAV .tinymce-custom ol { padding-inline-start: 30px; margin: 0px; }
.fQOxAV .block { position: relative; max-width: 100%; margin: 0px auto 15px; width: 900px; }
.fQOxAV .block .field:first-child h1:first-child, .fQOxAV .block .field:first-child h2:first-child { margin-top: 0px; }
.fQOxAV .block .field:first-child > div { margin-top: 0px; }
.fQOxAV .block .field:first-child .editor-wrapper { padding: 0px; }
.fQOxAV .block .field:first-child .signature, .fQOxAV .block .field:first-child .videoWrapper { padding-top: 0px; }
.fQOxAV .block .field.last-field > div { margin-bottom: 0px; }
.fQOxAV .block .field.last-field h1:last-child, .fQOxAV .block .field.last-field h2:last-child { margin-bottom: 0px; }
.fQOxAV .block .field.last-field .editor-wrapper { padding: 0px; }
.fQOxAV .block .field.last-field .signature, .fQOxAV .block .field.last-field .videoWrapper { padding-bottom: 0px; }
.fQOxAV .block .field.last-field .tableFieldWrapper { padding-bottom: 30px; }
.fQOxAV .block .field.last-field .tableFieldWrapper .add_row { bottom: 0px; }
.fQOxAV .show { color: initial; }
.fQOxAV .toolsWrapper { font-size: 12px; }
.fQOxAV .toolbar-wrapper { font-size: 12px; }
.fQOxAV .videoWrapper div { color: rgb(26, 26, 26); }
.fQOxAV .tableField_TD { font-size: 14px; }
.fQOxAV .tableField_TD h1 { font-size: 40px; }
.fQOxAV .tableField_TD h2 { font-size: 28px; }
.fQOxAV .wrapper-assignee { -webkit-box-pack: start; justify-content: flex-start; }
.fQOxAV div.TABLE .tool-bar { -webkit-box-pack: center; justify-content: center; }
.fQOxAV div.PARAGRAPH .tool-bar { -webkit-box-pack: center; justify-content: center; }
.fQOxAV blockquote { border-left: 5px solid rgb(26, 26, 26); margin: 0px; padding: 10px 30px; }
.elBYJM { flex: 1 1 0%; max-width: 100%; margin: 0px auto; width: 1024px; height: calc(100% - 56px); padding: 50px 80px; text-align: center; background-color: rgb(255, 255, 255); color: rgb(26, 26, 26); font-size: 16px; z-index: 1; min-height: 1446px; font-family: Roboto, sans-serif; border-bottom: 1px solid rgb(229, 229, 229); }
.elBYJM .place-holder { color: rgb(170, 170, 170); font-family: inherit; }
.elBYJM .areaDrop { height: 10px; width: 100%; position: absolute; bottom: -6px; left: 0px; }
.elBYJM .areaDropBackground-image { position: absolute; inset: 0px; z-index: 0; cursor: pointer; overflow: hidden; background-image: linear-gradient(transparent, transparent); }
.elBYJM .areaDropBackground-image img { min-width: 100%; min-height: 100%; object-fit: cover; }
.elBYJM .areaDropBackground-image.dragEnter { background: rgba(18, 143, 249, 0.41); z-index: 10; }
.elBYJM .areaDropBackground-image::after { content: ""; position: absolute; inset: 0px; z-index: 1; }
.elBYJM .areaDropBackground-header { position: absolute; inset: 0px; z-index: 1; cursor: pointer; overflow: hidden; }
.elBYJM.current .action-focus { opacity: 1; transition: opacity 0.3s ease-in-out 0s; }
.elBYJM:not(.current) .action-focus { pointer-events: none; opacity: 0; transition: opacity 0.3s ease-in-out 0s; }
.elBYJM .tinymce-custom { line-height: 1.57; letter-spacing: normal; font-size: 16px; }
.elBYJM .tinymce-custom h1 { font-size: 75px; line-height: 1.07; }
.elBYJM .tinymce-custom h2 { font-size: 32px; color: rgb(25, 25, 112); }
.elBYJM .tinymce-custom ul, .elBYJM .tinymce-custom ol { padding-inline-start: 30px; margin: 0px; }
.elBYJM .block { position: relative; max-width: 100%; margin: 0px auto 15px; width: 900px; }
.elBYJM .block .field:first-child h1:first-child, .elBYJM .block .field:first-child h2:first-child { margin-top: 0px; }
.elBYJM .block .field:first-child > div { margin-top: 0px; }
.elBYJM .block .field:first-child .editor-wrapper { padding: 0px; }
.elBYJM .block .field:first-child .signature, .elBYJM .block .field:first-child .videoWrapper { padding-top: 0px; }
.elBYJM .block .field.last-field > div { margin-bottom: 0px; }
.elBYJM .block .field.last-field h1:last-child, .elBYJM .block .field.last-field h2:last-child { margin-bottom: 0px; }
.elBYJM .block .field.last-field .editor-wrapper { padding: 0px; }
.elBYJM .block .field.last-field .signature, .elBYJM .block .field.last-field .videoWrapper { padding-bottom: 0px; }
.elBYJM .block .field.last-field .tableFieldWrapper { padding-bottom: 30px; }
.elBYJM .block .field.last-field .tableFieldWrapper .add_row { bottom: 0px; }
.elBYJM .show { color: initial; }
.elBYJM .toolsWrapper { font-size: 12px; }
.elBYJM .toolbar-wrapper { font-size: 12px; }
.elBYJM .videoWrapper div { color: rgb(26, 26, 26); }
.elBYJM .tableField_TD { font-size: 14px; }
.elBYJM .tableField_TD h1 { font-size: 40px; }
.elBYJM .tableField_TD h2 { font-size: 28px; }
.elBYJM .wrapper-assignee { -webkit-box-pack: center; justify-content: center; }
.elBYJM div.TABLE .tool-bar { -webkit-box-pack: center; justify-content: center; }
.elBYJM div.PARAGRAPH .tool-bar { -webkit-box-pack: center; justify-content: center; }
.elBYJM blockquote { border-left: 5px solid rgb(26, 26, 26); margin: 0px; padding: 10px 30px; }
.dMleEl { flex: 1 1 0%; max-width: 100%; margin: 0px auto; width: 1024px; height: calc(100% - 56px); padding: 50px 80px; text-align: left; background-color: rgb(255, 255, 255); color: rgb(26, 26, 26); font-size: 16px; z-index: 1; min-height: 1446px; font-family: Roboto, sans-serif; border-bottom: 1px solid rgb(229, 229, 229); }
.dMleEl .place-holder { color: rgb(170, 170, 170); font-family: inherit; }
.dMleEl .areaDrop { height: 10px; width: 100%; position: absolute; bottom: -6px; left: 0px; }
.dMleEl .areaDropBackground-image { position: absolute; inset: 0px; z-index: 0; cursor: pointer; overflow: hidden; background-image: linear-gradient(transparent, transparent); }
.dMleEl .areaDropBackground-image img { min-width: 100%; min-height: 100%; object-fit: cover; }
.dMleEl .areaDropBackground-image.dragEnter { background: rgba(18, 143, 249, 0.41); z-index: 10; }
.dMleEl .areaDropBackground-image::after { content: ""; position: absolute; inset: 0px; z-index: 1; }
.dMleEl .areaDropBackground-header { position: absolute; inset: 0px; z-index: 1; cursor: pointer; overflow: hidden; }
.dMleEl.current .action-focus { opacity: 1; transition: opacity 0.3s ease-in-out 0s; }
.dMleEl:not(.current) .action-focus { pointer-events: none; opacity: 0; transition: opacity 0.3s ease-in-out 0s; }
.dMleEl .tinymce-custom { line-height: 1.57; letter-spacing: normal; font-size: 16px; }
.dMleEl .tinymce-custom h1 { font-size: 75px; line-height: 1.07; }
.dMleEl .tinymce-custom h2 { font-size: 32px; color: rgb(25, 25, 112); }
.dMleEl .tinymce-custom ul, .dMleEl .tinymce-custom ol { padding-inline-start: 30px; margin: 0px; }
.dMleEl .block { position: relative; max-width: 100%; margin: 0px auto 15px; width: 900px; }
.dMleEl .block .field:first-child h1:first-child, .dMleEl .block .field:first-child h2:first-child { margin-top: 0px; }
.dMleEl .block .field:first-child > div { margin-top: 0px; }
.dMleEl .block .field:first-child .editor-wrapper { padding: 0px; }
.dMleEl .block .field:first-child .signature, .dMleEl .block .field:first-child .videoWrapper { padding-top: 0px; }
.dMleEl .block .field.last-field > div { margin-bottom: 0px; }
.dMleEl .block .field.last-field h1:last-child, .dMleEl .block .field.last-field h2:last-child { margin-bottom: 0px; }
.dMleEl .block .field.last-field .editor-wrapper { padding: 0px; }
.dMleEl .block .field.last-field .signature, .dMleEl .block .field.last-field .videoWrapper { padding-bottom: 0px; }
.dMleEl .block .field.last-field .tableFieldWrapper { padding-bottom: 30px; }
.dMleEl .block .field.last-field .tableFieldWrapper .add_row { bottom: 0px; }
.dMleEl .show { color: initial; }
.dMleEl .toolsWrapper { font-size: 12px; }
.dMleEl .toolbar-wrapper { font-size: 12px; }
.dMleEl .videoWrapper div { color: rgb(26, 26, 26); }
.dMleEl .tableField_TD { font-size: 14px; }
.dMleEl .tableField_TD h1 { font-size: 40px; }
.dMleEl .tableField_TD h2 { font-size: 28px; }
.dMleEl .wrapper-assignee { -webkit-box-pack: start; justify-content: flex-start; }
.dMleEl div.TABLE .tool-bar { -webkit-box-pack: center; justify-content: center; }
.dMleEl div.PARAGRAPH .tool-bar { -webkit-box-pack: center; justify-content: center; }
.dMleEl blockquote { border-left: 5px solid rgb(26, 26, 26); margin: 0px; padding: 10px 30px; }
.fYSlFz { flex: 1 1 0%; max-width: 100%; margin: 0px auto; width: 1024px; height: calc(100% - 56px); padding: 50px 80px; text-align: center; background-color: rgb(255, 255, 255); color: rgb(26, 26, 26); font-size: 16px; z-index: 1; min-height: 1446px; font-family: Roboto, sans-serif; }
.fYSlFz .place-holder { color: rgb(170, 170, 170); font-family: inherit; }
.fYSlFz .areaDrop { height: 10px; width: 100%; position: absolute; bottom: -6px; left: 0px; }
.fYSlFz .areaDropBackground-image { position: absolute; inset: 0px; z-index: 0; cursor: pointer; overflow: hidden; background-image: linear-gradient(transparent, transparent); }
.fYSlFz .areaDropBackground-image img { min-width: 100%; min-height: 100%; object-fit: cover; }
.fYSlFz .areaDropBackground-image.dragEnter { background: rgba(18, 143, 249, 0.41); z-index: 10; }
.fYSlFz .areaDropBackground-image::after { content: ""; position: absolute; inset: 0px; z-index: 1; }
.fYSlFz .areaDropBackground-header { position: absolute; inset: 0px; z-index: 1; cursor: pointer; overflow: hidden; }
.fYSlFz.current .action-focus { opacity: 1; transition: opacity 0.3s ease-in-out 0s; }
.fYSlFz:not(.current) .action-focus { pointer-events: none; opacity: 0; transition: opacity 0.3s ease-in-out 0s; }
.fYSlFz .tinymce-custom { line-height: 1.57; letter-spacing: normal; font-size: 16px; }
.fYSlFz .tinymce-custom h1 { font-size: 75px; line-height: 1.07; }
.fYSlFz .tinymce-custom h2 { font-size: 32px; color: rgb(25, 25, 112); }
.fYSlFz .tinymce-custom ul, .fYSlFz .tinymce-custom ol { padding-inline-start: 30px; margin: 0px; }
.fYSlFz .block { position: relative; max-width: 100%; margin: 0px auto 15px; width: 900px; }
.fYSlFz .block .field:first-child h1:first-child, .fYSlFz .block .field:first-child h2:first-child { margin-top: 0px; }
.fYSlFz .block .field:first-child > div { margin-top: 0px; }
.fYSlFz .block .field:first-child .editor-wrapper { padding: 0px; }
.fYSlFz .block .field:first-child .signature, .fYSlFz .block .field:first-child .videoWrapper { padding-top: 0px; }
.fYSlFz .block .field.last-field > div { margin-bottom: 0px; }
.fYSlFz .block .field.last-field h1:last-child, .fYSlFz .block .field.last-field h2:last-child { margin-bottom: 0px; }
.fYSlFz .block .field.last-field .editor-wrapper { padding: 0px; }
.fYSlFz .block .field.last-field .signature, .fYSlFz .block .field.last-field .videoWrapper { padding-bottom: 0px; }
.fYSlFz .block .field.last-field .tableFieldWrapper { padding-bottom: 30px; }
.fYSlFz .block .field.last-field .tableFieldWrapper .add_row { bottom: 0px; }
.fYSlFz .show { color: initial; }
.fYSlFz .toolsWrapper { font-size: 12px; }
.fYSlFz .toolbar-wrapper { font-size: 12px; }
.fYSlFz .videoWrapper div { color: rgb(26, 26, 26); }
.fYSlFz .tableField_TD { font-size: 14px; }
.fYSlFz .tableField_TD h1 { font-size: 40px; }
.fYSlFz .tableField_TD h2 { font-size: 28px; }
.fYSlFz .wrapper-assignee { -webkit-box-pack: center; justify-content: center; }
.fYSlFz div.TABLE .tool-bar { -webkit-box-pack: center; justify-content: center; }
.fYSlFz div.PARAGRAPH .tool-bar { -webkit-box-pack: center; justify-content: center; }
.fYSlFz blockquote { border-left: 5px solid rgb(26, 26, 26); margin: 0px; padding: 10px 30px; }
.hhIdFy { flex: 1 1 0%; max-width: 100%; margin: 0px auto; width: 1024px; height: calc(100% - 56px); padding: 50px 80px; text-align: left; background-color: rgb(255, 255, 255); color: rgb(26, 26, 26); font-size: 16px; z-index: 1; min-height: 1446px; font-family: Roboto, sans-serif; }
.hhIdFy .place-holder { color: rgb(170, 170, 170); font-family: inherit; }
.hhIdFy .areaDrop { height: 10px; width: 100%; position: absolute; bottom: -6px; left: 0px; }
.hhIdFy .areaDropBackground-image { position: absolute; inset: 0px; z-index: 0; cursor: pointer; overflow: hidden; background-image: linear-gradient(transparent, transparent); }
.hhIdFy .areaDropBackground-image img { min-width: 100%; min-height: 100%; object-fit: cover; }
.hhIdFy .areaDropBackground-image.dragEnter { background: rgba(18, 143, 249, 0.41); z-index: 10; }
.hhIdFy .areaDropBackground-image::after { content: ""; position: absolute; inset: 0px; z-index: 1; }
.hhIdFy .areaDropBackground-header { position: absolute; inset: 0px; z-index: 1; cursor: pointer; overflow: hidden; }
.hhIdFy.current .action-focus { opacity: 1; transition: opacity 0.3s ease-in-out 0s; }
.hhIdFy:not(.current) .action-focus { pointer-events: none; opacity: 0; transition: opacity 0.3s ease-in-out 0s; }
.hhIdFy .tinymce-custom { line-height: 1.57; letter-spacing: normal; font-size: 16px; }
.hhIdFy .tinymce-custom h1 { font-size: 75px; line-height: 1.07; }
.hhIdFy .tinymce-custom h2 { font-size: 32px; color: rgb(25, 25, 112); }
.hhIdFy .tinymce-custom ul, .hhIdFy .tinymce-custom ol { padding-inline-start: 30px; margin: 0px; }
.hhIdFy .block { position: relative; max-width: 100%; margin: 0px auto 15px; width: 900px; }
.hhIdFy .block .field:first-child h1:first-child, .hhIdFy .block .field:first-child h2:first-child { margin-top: 0px; }
.hhIdFy .block .field:first-child > div { margin-top: 0px; }
.hhIdFy .block .field:first-child .editor-wrapper { padding: 0px; }
.hhIdFy .block .field:first-child .signature, .hhIdFy .block .field:first-child .videoWrapper { padding-top: 0px; }
.hhIdFy .block .field.last-field > div { margin-bottom: 0px; }
.hhIdFy .block .field.last-field h1:last-child, .hhIdFy .block .field.last-field h2:last-child { margin-bottom: 0px; }
.hhIdFy .block .field.last-field .editor-wrapper { padding: 0px; }
.hhIdFy .block .field.last-field .signature, .hhIdFy .block .field.last-field .videoWrapper { padding-bottom: 0px; }
.hhIdFy .block .field.last-field .tableFieldWrapper { padding-bottom: 30px; }
.hhIdFy .block .field.last-field .tableFieldWrapper .add_row { bottom: 0px; }
.hhIdFy .show { color: initial; }
.hhIdFy .toolsWrapper { font-size: 12px; }
.hhIdFy .toolbar-wrapper { font-size: 12px; }
.hhIdFy .videoWrapper div { color: rgb(26, 26, 26); }
.hhIdFy .tableField_TD { font-size: 14px; }
.hhIdFy .tableField_TD h1 { font-size: 40px; }
.hhIdFy .tableField_TD h2 { font-size: 28px; }
.hhIdFy .wrapper-assignee { -webkit-box-pack: start; justify-content: flex-start; }
.hhIdFy div.TABLE .tool-bar { -webkit-box-pack: center; justify-content: center; }
.hhIdFy div.PARAGRAPH .tool-bar { -webkit-box-pack: center; justify-content: center; }
.hhIdFy blockquote { border-left: 5px solid rgb(26, 26, 26); margin: 0px; padding: 10px 30px; }
.kkGKpV { background-image: url("linear-gradient(transparent, transparent)"); height: inherit; width: 100%; display: flex; box-sizing: border-box !important; }
.fHRVtR { position: relative; }
.eMgwyy .mce-content-body { outline: none; font-family: inherit; font-size: inherit; }
.eMgwyy .mce-content-body p { margin: 0px; }
.eMgwyy .mce-content-body table td, .eMgwyy .mce-content-body table th { border: 1px solid rgb(170, 170, 170); border-collapse: collapse; font-family: inherit; font-size: inherit; }
.eMgwyy .tox .tox-pop__dialog { padding: 15px; }
@media not all and (min-resolution: 0.001dpcm) {
@supports (-webkit-appearance:none) and (stroke-color:transparent) {
.cIZvQk .moveable-control-box { transform: translate3d(0px, 0px, 0px) !important; }
}
}
.cIZvQk .moveable-control-box .moveable-nw, .cIZvQk .moveable-control-box .moveable-ne, .cIZvQk .moveable-control-box .moveable-sw, .cIZvQk .moveable-control-box .moveable-se { background: rgb(255, 255, 255); border: 1px solid rgb(44, 131, 235); width: 12px; height: 12px; }
.cIZvQk .moveable-control-box .moveable-line { background: rgb(44, 131, 235); }
.gga-dzN { box-sizing: border-box; padding: 0px 2px; word-break: break-word; }
@media not all and (min-resolution: 0.001dpcm) {
@supports (-webkit-appearance:none) and (stroke-color:transparent) {
.gga-dzN { display: grid; overflow: hidden; }
.gga-dzN::-webkit-scrollbar-thumb { border: none; background-color: transparent; }
}
}
.gga-dzN .tinymce-custom { font-size: 16px; }
.gga-dzN .tinymce-custom h2.tiny_h2 { color: rgb(26, 26, 26); }
.gga-dzN .tinymce-custom div:last-child { overflow: hidden; }
.gga-dzN .tinymce-custom div:last-child::-webkit-scrollbar-thumb { border: none; background-color: transparent; }
.dQYyYb { max-width: 100%; max-height: 100%; width: 100%; height: 100%; display: block; object-fit: contain; }
.vAnsL .moveable-wrapper .moveable-line.moveable-rotation-line .moveable-control { margin-left: -9px; width: 20px; height: 20px; border-radius: 50%; padding: 2px; background-image: url("https://docs.survivalapp.com/static/media/loading.588e16a1a266ad3a514d6d6e17505d24.svg"); background-size: contain; background-position: center -1px; background-repeat: no-repeat; transform: rotate(-80deg); }
.vAnsL .moveable-wrapper .moveable-control { width: 11px; height: 11px; border: 1px solid rgb(44, 131, 235); background-color: rgb(255, 255, 255); border-radius: 0px; }
.vAnsL .moveable-control-box .moveable-nw, .vAnsL .moveable-control-box .moveable-ne, .vAnsL .moveable-control-box .moveable-sw, .vAnsL .moveable-control-box .moveable-se { background: rgb(255, 255, 255); border: 1px solid rgb(44, 131, 235); width: 12px; height: 12px; }
.vAnsL .moveable-control-box .moveable-line { background: rgb(44, 131, 235); }
.dFFDVM { position: relative; }
.dFFDVM .image-size-tooltip { font-size: 12px; font-family: Roboto; font-weight: 500; color: rgb(255, 255, 255); background-color: rgb(34, 43, 69); border-radius: 3px; padding: 0px 4px; position: absolute; bottom: -15px; right: -100px; display: none; }
.dFFDVM:hover .image-size-tooltip { display: block; }
.bViisf { position: unset; width: 100%; height: 100%; left: 0px; top: 0px; overflow: hidden; user-select: none; }
.bViisf:hover { border: 1px dashed rgb(44, 131, 235); }
.bViisf img { max-width: 100%; max-height: 100%; width: 100%; height: 100%; display: block; }
.fUzbHM { padding: 0px; overflow: scroll; }
.fUzbHM .mce-content-body table[data-mce-selected] { outline: none; }
.fUzbHM .tinymce-custom { font-size: 16px; }
.fUzbHM .mce-resizehandle { display: none; }
.fUzbHM table { border-collapse: collapse; overflow: hidden visible; table-layout: auto; white-space: nowrap; width: calc(100% - 2px) !important; height: auto !important; }
.fUzbHM table td { white-space: pre-line; }
.fUzbHM tr, .fUzbHM td { border: 1px solid rgb(95, 95, 95); position: relative; background-clip: padding-box; padding: 5px; }
.gOWYcC { box-sizing: border-box; padding: 0px 2px; word-break: break-word; position: relative; }
.gOWYcC .tinymce-custom { color: rgb(26, 26, 26); position: relative; z-index: 1; }
.gOWYcC .tinymce-custom .mce-content-body { padding: 20px 0px; }
.gOWYcC .tinymce-custom h1, .gOWYcC .tinymce-custom h2 { color: rgb(26, 26, 26); margin: 0px !important; }
.gOWYcC::after { content: ""; }
.ggOaNC { position: relative; padding-top: 15px; padding-bottom: 0px; display: flex; -webkit-box-pack: justify; justify-content: space-between; -webkit-box-align: center; align-items: center; flex-direction: row-reverse; margin-left: auto; }
.ggOaNC.ASSIGNEE { margin-left: unset; }
.ggOaNC .tox-tbtn:hover { background: rgb(44, 131, 235) !important; }
.ggOaNC .tox-tbtn:hover svg { fill: white !important; }
.ggOaNC .tox-tbtn:hover span { color: rgb(255, 255, 255) !important; }
.knOMqC { position: relative; padding-top: 30px; padding-bottom: 30px; display: flex; -webkit-box-pack: justify; justify-content: space-between; -webkit-box-align: center; align-items: center; flex-direction: row-reverse; margin-left: auto; }
.knOMqC.ASSIGNEE { margin-left: unset; }
.knOMqC .tox-tbtn:hover { background: rgb(44, 131, 235) !important; }
.knOMqC .tox-tbtn:hover svg { fill: white !important; }
.knOMqC .tox-tbtn:hover span { color: rgb(255, 255, 255) !important; }
.knpTYa { position: relative; padding-top: 15px; padding-bottom: 0px; display: flex; -webkit-box-pack: justify; justify-content: space-between; -webkit-box-align: center; align-items: center; flex-direction: row-reverse; margin-left: auto; }
.knpTYa.ASSIGNEE { margin-left: unset; }
.knpTYa .tox-tbtn:hover { background: rgb(44, 131, 235) !important; }
.knpTYa .tox-tbtn:hover svg { fill: white !important; }
.knpTYa .tox-tbtn:hover span { color: rgb(255, 255, 255) !important; }
.knpVUq { position: relative; padding-top: 15px; padding-bottom: 0px; display: flex; -webkit-box-pack: justify; justify-content: space-between; -webkit-box-align: center; align-items: center; flex-direction: row-reverse; margin-left: auto; }
.knpVUq.ASSIGNEE { margin-left: unset; }
.knpVUq .tox-tbtn:hover { background: rgb(44, 131, 235) !important; }
.knpVUq .tox-tbtn:hover svg { fill: white !important; }
.knpVUq .tox-tbtn:hover span { color: rgb(255, 255, 255) !important; }
.dyASwu { -webkit-box-pack: center; justify-content: center; flex: 1 1 800px; margin: 0px auto; max-width: 800px; }
.cBoHJr { -webkit-box-pack: start; justify-content: flex-start; flex: 1 1 800px; margin: 0px auto; max-width: 800px; }
.bMUvd { height: 100%; width: 100%; }
.kCoUTg { position: relative; height: calc(100% - 90px); box-sizing: border-box; overflow: hidden; }
@media screen and (min-width: 576px) {
.kCoUTg { padding-top: 32px; overflow: auto; }
}
.kCoUTg .hightlight_token { background-color: rgba(248, 232, 129, 0.25); }
</style><style id="react-to-print-15">.MuiSvgIcon-root { fill: currentcolor; width: 1em; height: 1em; display: inline-block; font-size: 1.28571rem; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; flex-shrink: 0; user-select: none; }
.MuiSvgIcon-colorPrimary { color: rgb(44, 131, 235); }
.MuiSvgIcon-colorSecondary { color: rgb(245, 0, 87); }
.MuiSvgIcon-colorAction { color: rgba(0, 0, 0, 0.54); }
.MuiSvgIcon-colorError { color: rgb(244, 67, 54); }
.MuiSvgIcon-colorDisabled { color: rgba(0, 0, 0, 0.26); }
.MuiSvgIcon-fontSizeInherit { font-size: inherit; }
.MuiSvgIcon-fontSizeSmall { font-size: 1.07143rem; }
.MuiSvgIcon-fontSizeLarge { font-size: 1.875rem; }
</style><style id="react-to-print-16">.MuiPaper-root { color: rgba(0, 0, 0, 0.87); transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; background-color: rgb(255, 255, 255); }
.MuiPaper-rounded { border-radius: 4px; }
.MuiPaper-outlined { border: 1px solid rgba(0, 0, 0, 0.12); }
.MuiPaper-elevation0 { box-shadow: none; }
.MuiPaper-elevation1 { box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px; }
.MuiPaper-elevation2 { box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px; }
.MuiPaper-elevation3 { box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px; }
.MuiPaper-elevation4 { box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px; }
.MuiPaper-elevation5 { box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 5px 8px 0px, rgba(0, 0, 0, 0.12) 0px 1px 14px 0px; }
.MuiPaper-elevation6 { box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px; }
.MuiPaper-elevation7 { box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 5px -2px, rgba(0, 0, 0, 0.14) 0px 7px 10px 1px, rgba(0, 0, 0, 0.12) 0px 2px 16px 1px; }
.MuiPaper-elevation8 { box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px; }
.MuiPaper-elevation9 { box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 6px -3px, rgba(0, 0, 0, 0.14) 0px 9px 12px 1px, rgba(0, 0, 0, 0.12) 0px 3px 16px 2px; }
.MuiPaper-elevation10 { box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 6px -3px, rgba(0, 0, 0, 0.14) 0px 10px 14px 1px, rgba(0, 0, 0, 0.12) 0px 4px 18px 3px; }
.MuiPaper-elevation11 { box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 7px -4px, rgba(0, 0, 0, 0.14) 0px 11px 15px 1px, rgba(0, 0, 0, 0.12) 0px 4px 20px 3px; }
.MuiPaper-elevation12 { box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 8px -4px, rgba(0, 0, 0, 0.14) 0px 12px 17px 2px, rgba(0, 0, 0, 0.12) 0px 5px 22px 4px; }
.MuiPaper-elevation13 { box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 8px -4px, rgba(0, 0, 0, 0.14) 0px 13px 19px 2px, rgba(0, 0, 0, 0.12) 0px 5px 24px 4px; }
.MuiPaper-elevation14 { box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 9px -4px, rgba(0, 0, 0, 0.14) 0px 14px 21px 2px, rgba(0, 0, 0, 0.12) 0px 5px 26px 4px; }
.MuiPaper-elevation15 { box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 9px -5px, rgba(0, 0, 0, 0.14) 0px 15px 22px 2px, rgba(0, 0, 0, 0.12) 0px 6px 28px 5px; }
.MuiPaper-elevation16 { box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 10px -5px, rgba(0, 0, 0, 0.14) 0px 16px 24px 2px, rgba(0, 0, 0, 0.12) 0px 6px 30px 5px; }
.MuiPaper-elevation17 { box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 11px -5px, rgba(0, 0, 0, 0.14) 0px 17px 26px 2px, rgba(0, 0, 0, 0.12) 0px 6px 32px 5px; }
.MuiPaper-elevation18 { box-shadow: rgba(0, 0, 0, 0.2) 0px 9px 11px -5px, rgba(0, 0, 0, 0.14) 0px 18px 28px 2px, rgba(0, 0, 0, 0.12) 0px 7px 34px 6px; }
.MuiPaper-elevation19 { box-shadow: rgba(0, 0, 0, 0.2) 0px 9px 12px -6px, rgba(0, 0, 0, 0.14) 0px 19px 29px 2px, rgba(0, 0, 0, 0.12) 0px 7px 36px 6px; }
.MuiPaper-elevation20 { box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 13px -6px, rgba(0, 0, 0, 0.14) 0px 20px 31px 3px, rgba(0, 0, 0, 0.12) 0px 8px 38px 7px; }
.MuiPaper-elevation21 { box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 13px -6px, rgba(0, 0, 0, 0.14) 0px 21px 33px 3px, rgba(0, 0, 0, 0.12) 0px 8px 40px 7px; }
.MuiPaper-elevation22 { box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 14px -6px, rgba(0, 0, 0, 0.14) 0px 22px 35px 3px, rgba(0, 0, 0, 0.12) 0px 8px 42px 7px; }
.MuiPaper-elevation23 { box-shadow: rgba(0, 0, 0, 0.2) 0px 11px 14px -7px, rgba(0, 0, 0, 0.14) 0px 23px 36px 3px, rgba(0, 0, 0, 0.12) 0px 9px 44px 8px; }
.MuiPaper-elevation24 { box-shadow: rgba(0, 0, 0, 0.2) 0px 11px 15px -7px, rgba(0, 0, 0, 0.14) 0px 24px 38px 3px, rgba(0, 0, 0, 0.12) 0px 9px 46px 8px; }
</style><style id="react-to-print-17">.MuiPopover-paper { outline: 0px; position: absolute; max-width: calc(100% - 32px); min-width: 16px; max-height: calc(100% - 32px); min-height: 16px; overflow: hidden auto; }
</style><style id="react-to-print-18">.jss22.jss23 .jss24 { transform: scale(1) translateY(-10px); }
.jss24 { top: -34px; z-index: 1; position: absolute; font-size: 0.642857rem; transform: scale(0); transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; font-family: Arial; font-weight: 400; line-height: 1.2; transform-origin: center bottom; }
.jss25 { width: 32px; height: 32px; display: flex; transform: rotate(-45deg); align-items: center; border-radius: 50% 50% 50% 0px; justify-content: center; background-color: currentcolor; }
.jss26 { color: rgb(255, 255, 255); transform: rotate(45deg); }
</style><style id="react-to-print-19">.MuiSlider-root { color: rgb(44, 131, 235); width: 100%; cursor: pointer; height: 2px; display: inline-block; padding: 13px 0px; position: relative; box-sizing: content-box; touch-action: none; -webkit-tap-highlight-color: transparent; }
.MuiSlider-root.Mui-disabled { color: rgb(189, 189, 189); cursor: default; pointer-events: none; }
.MuiSlider-root.MuiSlider-vertical { width: 2px; height: 100%; padding: 0px 13px; }
@media (pointer: coarse) {
.MuiSlider-root { padding: 20px 0px; }
.MuiSlider-root.MuiSlider-vertical { padding: 0px 20px; }
}
@media print {
.MuiSlider-root { -webkit-print-color-adjust: exact; }
}
.MuiSlider-colorSecondary { color: rgb(245, 0, 87); }
.MuiSlider-marked { margin-bottom: 20px; }
.MuiSlider-marked.MuiSlider-vertical { margin-right: 20px; margin-bottom: auto; }
.MuiSlider-rail { width: 100%; height: 2px; display: block; opacity: 0.38; position: absolute; border-radius: 1px; background-color: currentcolor; }
.MuiSlider-vertical .MuiSlider-rail { width: 2px; height: 100%; }
.MuiSlider-track { height: 2px; display: block; position: absolute; border-radius: 1px; background-color: currentcolor; }
.MuiSlider-vertical .MuiSlider-track { width: 2px; }
.MuiSlider-trackFalse .MuiSlider-track { display: none; }
.MuiSlider-trackInverted .MuiSlider-track { background-color: rgb(174, 207, 247); }
.MuiSlider-trackInverted .MuiSlider-rail { opacity: 1; }
.MuiSlider-thumb { width: 12px; height: 12px; display: flex; outline: 0px; position: absolute; box-sizing: border-box; margin-top: -5px; transition: box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; align-items: center; margin-left: -6px; border-radius: 50%; justify-content: center; background-color: currentcolor; }
.MuiSlider-thumb::after { inset: -15px; content: ""; position: absolute; border-radius: 50%; }
.MuiSlider-thumb.Mui-focusVisible, .MuiSlider-thumb:hover { box-shadow: rgba(44, 131, 235, 0.16) 0px 0px 0px 8px; }
.MuiSlider-thumb.MuiSlider-active { box-shadow: rgba(44, 131, 235, 0.16) 0px 0px 0px 14px; }
.MuiSlider-thumb.Mui-disabled { width: 8px; height: 8px; margin-top: -3px; margin-left: -4px; }
.MuiSlider-vertical .MuiSlider-thumb { margin-left: -5px; margin-bottom: -6px; }
.MuiSlider-vertical .MuiSlider-thumb.Mui-disabled { margin-left: -3px; margin-bottom: -4px; }
.MuiSlider-thumb.Mui-disabled:hover { box-shadow: none; }
@media (hover: none) {
.MuiSlider-thumb.Mui-focusVisible, .MuiSlider-thumb:hover { box-shadow: none; }
}
.MuiSlider-thumbColorSecondary.Mui-focusVisible, .MuiSlider-thumbColorSecondary:hover { box-shadow: rgba(245, 0, 87, 0.16) 0px 0px 0px 8px; }
.MuiSlider-thumbColorSecondary.MuiSlider-active { box-shadow: rgba(245, 0, 87, 0.16) 0px 0px 0px 14px; }
.MuiSlider-valueLabel { left: calc(-50% - 4px); }
.MuiSlider-mark { width: 2px; height: 2px; position: absolute; border-radius: 1px; background-color: currentcolor; }
.MuiSlider-markActive { opacity: 0.8; background-color: rgb(255, 255, 255); }
.MuiSlider-markLabel { top: 26px; color: rgba(0, 0, 0, 0.54); position: absolute; font-size: 0.75rem; transform: translateX(-50%); font-family: Arial; font-weight: 400; line-height: 1.43; white-space: nowrap; }
.MuiSlider-vertical .MuiSlider-markLabel { top: auto; left: 26px; transform: translateY(50%); }
@media (pointer: coarse) {
.MuiSlider-markLabel { top: 40px; }
.MuiSlider-vertical .MuiSlider-markLabel { left: 31px; }
}
.MuiSlider-markLabelActive { color: rgba(0, 0, 0, 0.87); }
</style><style id="react-to-print-20">@-webkit-keyframes mui-auto-fill { 
}
@-webkit-keyframes mui-auto-fill-cancel { 
}
.MuiInputBase-root { color: rgba(0, 0, 0, 0.87); cursor: text; display: inline-flex; position: relative; font-size: 0.857143rem; box-sizing: border-box; align-items: center; font-family: Arial; font-weight: 400; line-height: 1.1876em; }
.MuiInputBase-root.Mui-disabled { color: rgba(0, 0, 0, 0.38); cursor: default; }
.MuiInputBase-multiline { padding: 6px 0px 7px; }
.MuiInputBase-multiline.MuiInputBase-marginDense { padding-top: 3px; }
.MuiInputBase-fullWidth { width: 100%; }
.MuiInputBase-input { font: inherit; color: currentcolor; width: 100%; border: 0px; height: 1.1876em; margin: 0px; display: block; padding: 6px 0px 7px; min-width: 0px; background: none; box-sizing: content-box; animation-name: mui-auto-fill-cancel; letter-spacing: inherit; animation-duration: 10ms; -webkit-tap-highlight-color: transparent; }
.MuiInputBase-input::-webkit-input-placeholder { color: currentcolor; opacity: 0.42; transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; }
.MuiInputBase-input:focus { outline: 0px; }
.MuiInputBase-input:invalid { box-shadow: none; }
.MuiInputBase-input::-webkit-search-decoration { appearance: none; }
.MuiInputBase-input.Mui-disabled { opacity: 1; }
.MuiInputBase-input:-webkit-autofill { animation-name: mui-auto-fill; animation-duration: 5000s; }
label[data-shrink="false"] + .MuiInputBase-formControl .MuiInputBase-input::-webkit-input-placeholder { opacity: 0 !important; }
label[data-shrink="false"] + .MuiInputBase-formControl .MuiInputBase-input:focus::-webkit-input-placeholder { opacity: 0.42; }
.MuiInputBase-inputMarginDense { padding-top: 3px; }
.MuiInputBase-inputMultiline { height: auto; resize: none; padding: 0px; }
.MuiInputBase-inputTypeSearch { appearance: textfield; }
</style><style id="react-to-print-21">.MuiInput-root { position: relative; }
label + .MuiInput-formControl { margin-top: 16px; }
.MuiInput-colorSecondary.MuiInput-underline::after { border-bottom-color: rgb(245, 0, 87); }
.MuiInput-underline::after { left: 0px; right: 0px; bottom: 0px; content: ""; position: absolute; transform: scaleX(0); transition: transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms; border-bottom: 2px solid rgb(44, 131, 235); pointer-events: none; }
.MuiInput-underline.Mui-focused::after { transform: scaleX(1); }
.MuiInput-underline.Mui-error::after { transform: scaleX(1); border-bottom-color: rgb(244, 67, 54); }
.MuiInput-underline::before { left: 0px; right: 0px; bottom: 0px; content: "&nbsp;"; position: absolute; transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; border-bottom: 1px solid rgba(0, 0, 0, 0.42); pointer-events: none; }
.MuiInput-underline:hover:not(.Mui-disabled)::before { border-bottom: 2px solid rgba(0, 0, 0, 0.87); }
.MuiInput-underline.Mui-disabled::before { border-bottom-style: dotted; }
@media (hover: none) {
.MuiInput-underline:hover:not(.Mui-disabled)::before { border-bottom: 1px solid rgba(0, 0, 0, 0.42); }
}
</style><style id="react-to-print-22"></style><style id="react-to-print-23">.jss28 { }
</style><style id="react-to-print-24">.jss29 { display: flex; align-items: center; margin-bottom: 16px; justify-content: space-between; }
</style><style id="react-to-print-25">.jss30 { margin-top: 4px; margin-bottom: 4px; }
</style><style id="react-to-print-26">.jss31 { margin-top: 4px; margin-bottom: 4px; }
</style><style id="react-to-print-27">.jss32 { margin-top: 4px; margin-bottom: 4px; }
</style><style id="react-to-print-28">.jss33 { margin-top: 4px; margin-bottom: 4px; }
</style><style id="react-to-print-29">.MuiTypography-root { margin: 0px; }
.MuiTypography-body2 { font-size: 0.75rem; font-family: Arial; font-weight: 400; line-height: 1.43; }
.MuiTypography-body1 { font-size: 0.857143rem; font-family: Arial; font-weight: 400; line-height: 1.5; }
.MuiTypography-caption { font-size: 0.642857rem; font-family: Arial; font-weight: 400; line-height: 1.66; }
.MuiTypography-button { font-size: 0.75rem; font-family: Arial; font-weight: 500; line-height: 1.75; text-transform: none; }
.MuiTypography-h1 { font-size: 5.14286rem; font-family: Arial; font-weight: 300; line-height: 1.167; }
.MuiTypography-h2 { font-size: 3.21429rem; font-family: Arial; font-weight: 300; line-height: 1.2; }
.MuiTypography-h3 { font-size: 2.57143rem; font-family: Arial; font-weight: 400; line-height: 1.167; }
.MuiTypography-h4 { font-size: 1.82143rem; font-family: Arial; font-weight: 400; line-height: 1.235; }
.MuiTypography-h5 { font-size: 1.28571rem; font-family: Arial; font-weight: 400; line-height: 1.334; }
.MuiTypography-h6 { font-size: 1.07143rem; font-family: Arial; font-weight: 500; line-height: 1.6; }
.MuiTypography-subtitle1 { font-size: 0.857143rem; font-family: Arial; font-weight: 400; line-height: 1.75; }
.MuiTypography-subtitle2 { font-size: 0.75rem; font-family: Arial; font-weight: 500; line-height: 1.57; }
.MuiTypography-overline { font-size: 0.642857rem; font-family: Arial; font-weight: 400; line-height: 2.66; text-transform: uppercase; }
.MuiTypography-srOnly { width: 1px; height: 1px; overflow: hidden; position: absolute; }
.MuiTypography-alignLeft { text-align: left; }
.MuiTypography-alignCenter { text-align: center; }
.MuiTypography-alignRight { text-align: right; }
.MuiTypography-alignJustify { text-align: justify; }
.MuiTypography-noWrap { overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
.MuiTypography-gutterBottom { margin-bottom: 0.35em; }
.MuiTypography-paragraph { margin-bottom: 16px; }
.MuiTypography-colorInherit { color: inherit; }
.MuiTypography-colorPrimary { color: rgb(44, 131, 235); }
.MuiTypography-colorSecondary { color: rgb(245, 0, 87); }
.MuiTypography-colorTextPrimary { color: rgba(0, 0, 0, 0.87); }
.MuiTypography-colorTextSecondary { color: rgba(0, 0, 0, 0.54); }
.MuiTypography-colorError { color: rgb(244, 67, 54); }
.MuiTypography-displayInline { display: inline; }
.MuiTypography-displayBlock { display: block; }
</style><style id="react-to-print-30">.jss27 { margin: 8px 0px; padding: 8px; border-radius: 4px; background-color: rgba(0, 0, 0, 0.08); }
.jss27 > * { margin: 0px; }
</style><style id="react-to-print-31">.MuiTouchRipple-root { inset: 0px; z-index: 0; overflow: hidden; position: absolute; border-radius: inherit; pointer-events: none; }
.MuiTouchRipple-ripple { opacity: 0; position: absolute; }
.MuiTouchRipple-rippleVisible { opacity: 0.3; animation: 550ms cubic-bezier(0.4, 0, 0.2, 1) 0s 1 normal none running MuiTouchRipple-keyframes-enter; transform: scale(1); }
.MuiTouchRipple-ripplePulsate { animation-duration: 200ms; }
.MuiTouchRipple-child { width: 100%; height: 100%; display: block; opacity: 1; border-radius: 50%; background-color: currentcolor; }
.MuiTouchRipple-childLeaving { opacity: 0; animation: 550ms cubic-bezier(0.4, 0, 0.2, 1) 0s 1 normal none running MuiTouchRipple-keyframes-exit; }
.MuiTouchRipple-childPulsate { top: 0px; left: 0px; position: absolute; animation: 2500ms cubic-bezier(0.4, 0, 0.2, 1) 200ms infinite normal none running MuiTouchRipple-keyframes-pulsate; }
@-webkit-keyframes MuiTouchRipple-keyframes-enter { 
0% { opacity: 0.1; transform: scale(0); }
100% { opacity: 0.3; transform: scale(1); }
}
@-webkit-keyframes MuiTouchRipple-keyframes-exit { 
0% { opacity: 1; }
100% { opacity: 0; }
}
@-webkit-keyframes MuiTouchRipple-keyframes-pulsate { 
0% { transform: scale(1); }
50% { transform: scale(0.92); }
100% { transform: scale(1); }
}
</style><style id="react-to-print-32">.MuiButtonBase-root { color: inherit; border: 0px; cursor: pointer; margin: 0px; display: inline-flex; outline: 0px; padding: 0px; position: relative; align-items: center; user-select: none; border-radius: 0px; vertical-align: middle; justify-content: center; text-decoration: none; background-color: transparent; appearance: none; -webkit-tap-highlight-color: transparent; }
.MuiButtonBase-root.Mui-disabled { cursor: default; pointer-events: none; }
@media print {
.MuiButtonBase-root { -webkit-print-color-adjust: exact; }
}
</style><style id="react-to-print-33">.MuiButton-root { color: rgba(0, 0, 0, 0.87); padding: 6px 16px; font-size: 0.75rem; min-width: 64px; box-sizing: border-box; transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; font-family: Arial; font-weight: 500; line-height: 1.75; border-radius: 4px; text-transform: none; }
.MuiButton-root:hover { box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 150px 200px inset; text-decoration: none; }
.MuiButton-root.Mui-disabled { color: rgba(0, 0, 0, 0.26); }
@media (hover: none) {
.MuiButton-root:hover { }
}
.MuiButton-root:hover.Mui-disabled { background-color: transparent; }
.MuiButton-label { width: 100%; display: inherit; align-items: inherit; justify-content: inherit; }
.MuiButton-text { padding: 6px 8px; }
.MuiButton-textPrimary { color: rgb(44, 131, 235); }
.MuiButton-textPrimary:hover { background-color: rgba(44, 131, 235, 0.04); }
@media (hover: none) {
.MuiButton-textPrimary:hover { background-color: transparent; }
}
.MuiButton-textSecondary { color: rgb(245, 0, 87); }
.MuiButton-textSecondary:hover { background-color: rgba(245, 0, 87, 0.04); }
@media (hover: none) {
.MuiButton-textSecondary:hover { background-color: transparent; }
}
.MuiButton-outlined { border: 1px solid rgba(0, 0, 0, 0.23); padding: 5px 15px; }
.MuiButton-outlined.Mui-disabled { border: 1px solid rgba(0, 0, 0, 0.12); }
.MuiButton-outlinedPrimary { color: rgb(44, 131, 235); border: 1px solid rgba(44, 131, 235, 0.5); }
.MuiButton-outlinedPrimary:hover { border: 1px solid rgb(44, 131, 235); background-color: rgba(44, 131, 235, 0.04); }
@media (hover: none) {
.MuiButton-outlinedPrimary:hover { background-color: transparent; }
}
.MuiButton-outlinedSecondary { color: rgb(245, 0, 87); border: 1px solid rgba(245, 0, 87, 0.5); }
.MuiButton-outlinedSecondary:hover { border: 1px solid rgb(245, 0, 87); background-color: rgba(245, 0, 87, 0.04); }
.MuiButton-outlinedSecondary.Mui-disabled { border: 1px solid rgba(0, 0, 0, 0.26); }
@media (hover: none) {
.MuiButton-outlinedSecondary:hover { background-color: transparent; }
}
.MuiButton-contained { color: rgba(0, 0, 0, 0.87); box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px; background-color: rgb(224, 224, 224); }
.MuiButton-contained:hover { box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px; background-color: rgb(213, 213, 213); }
.MuiButton-contained.Mui-focusVisible { box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px; }
.MuiButton-contained:active { box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px; }
.MuiButton-contained.Mui-disabled { color: rgba(0, 0, 0, 0.26); box-shadow: none; background-color: rgba(0, 0, 0, 0.12); }
@media (hover: none) {
.MuiButton-contained:hover { box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px; background-color: rgb(224, 224, 224); }
}
.MuiButton-contained:hover.Mui-disabled { background-color: rgba(0, 0, 0, 0.12); }
.MuiButton-containedPrimary { color: rgb(255, 255, 255); background-color: rgb(44, 131, 235); }
.MuiButton-containedPrimary:hover { background-color: rgb(30, 91, 164); }
@media (hover: none) {
.MuiButton-containedPrimary:hover { background-color: rgb(44, 131, 235); }
}
.MuiButton-containedSecondary { color: rgb(255, 255, 255); background-color: rgb(245, 0, 87); }
.MuiButton-containedSecondary:hover { background-color: rgb(197, 17, 98); }
@media (hover: none) {
.MuiButton-containedSecondary:hover { background-color: rgb(245, 0, 87); }
}
.MuiButton-disableElevation { box-shadow: none; }
.MuiButton-disableElevation:hover { box-shadow: none; }
.MuiButton-disableElevation.Mui-focusVisible { box-shadow: none; }
.MuiButton-disableElevation:active { box-shadow: none; }
.MuiButton-disableElevation.Mui-disabled { box-shadow: none; }
.MuiButton-colorInherit { color: inherit; border-color: currentcolor; }
.MuiButton-textSizeSmall { padding: 4px 5px; font-size: 0.696429rem; }
.MuiButton-textSizeLarge { padding: 8px 11px; font-size: 0.803571rem; }
.MuiButton-outlinedSizeSmall { padding: 3px 9px; font-size: 0.696429rem; }
.MuiButton-outlinedSizeLarge { padding: 7px 21px; font-size: 0.803571rem; }
.MuiButton-containedSizeSmall { padding: 4px 10px; font-size: 0.696429rem; }
.MuiButton-containedSizeLarge { padding: 8px 22px; font-size: 0.803571rem; }
.MuiButton-fullWidth { width: 100%; }
.MuiButton-startIcon { display: inherit; margin-left: -4px; margin-right: 8px; }
.MuiButton-startIcon.MuiButton-iconSizeSmall { margin-left: -2px; }
.MuiButton-endIcon { display: inherit; margin-left: 8px; margin-right: -4px; }
.MuiButton-endIcon.MuiButton-iconSizeSmall { margin-right: -2px; }
.MuiButton-iconSizeSmall > :first-child { font-size: 18px; }
.MuiButton-iconSizeMedium > :first-child { font-size: 20px; }
.MuiButton-iconSizeLarge > :first-child { font-size: 22px; }
</style><style id="react-to-print-34">.MuiList-root { margin: 0px; padding: 0px; position: relative; list-style: none; }
.MuiList-padding { padding-top: 8px; padding-bottom: 8px; }
.MuiList-subheader { padding-top: 0px; }
</style><style id="react-to-print-35">.MuiMenu-paper { max-height: calc(100% - 96px); }
.MuiMenu-list { outline: 0px; }
</style><style id="react-to-print-36">.MuiListItem-root { width: 100%; display: flex; position: relative; box-sizing: border-box; text-align: left; align-items: center; padding-top: 8px; padding-bottom: 8px; justify-content: flex-start; text-decoration: none; }
.MuiListItem-root.Mui-focusVisible { background-color: rgba(0, 0, 0, 0.08); }
.MuiListItem-root.Mui-selected, .MuiListItem-root.Mui-selected:hover { background-color: rgba(0, 0, 0, 0.08); }
.MuiListItem-root.Mui-disabled { opacity: 0.5; }
.MuiListItem-container { position: relative; }
.MuiListItem-dense { padding-top: 4px; padding-bottom: 4px; }
.MuiListItem-alignItemsFlexStart { align-items: flex-start; }
.MuiListItem-divider { border-bottom: 1px solid rgba(0, 0, 0, 0.12); background-clip: padding-box; }
.MuiListItem-gutters { padding-left: 16px; padding-right: 16px; }
.MuiListItem-button { transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; }
.MuiListItem-button:hover { text-decoration: none; background-color: rgba(0, 0, 0, 0.04); }
@media (hover: none) {
.MuiListItem-button:hover { background-color: transparent; }
}
.MuiListItem-secondaryAction { padding-right: 48px; }
</style><style id="react-to-print-37">.MuiMenuItem-root { width: auto; overflow: hidden; font-size: 0.857143rem; box-sizing: border-box; min-height: 48px; font-family: Arial; font-weight: 400; line-height: 1.5; padding-top: 6px; white-space: nowrap; padding-bottom: 6px; }
@media (min-width: 600px) {
.MuiMenuItem-root { min-height: auto; }
}
.MuiMenuItem-dense { font-size: 0.75rem; min-height: auto; font-family: Arial; font-weight: 400; line-height: 1.43; }
</style><style id="react-to-print-38">.MuiCollapse-root { height: 0px; overflow: hidden; transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; }
.MuiCollapse-entered { height: auto; overflow: visible; }
.MuiCollapse-hidden { visibility: hidden; }
.MuiCollapse-wrapper { display: flex; }
.MuiCollapse-wrapperInner { width: 100%; }
</style><style id="react-to-print-39">.jss34 { overflow-y: auto; }
.jss35 { top: 10%; left: 50%; outline: none; position: absolute; transform: translate(-50%, 0px); box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 5px 8px 0px, rgba(0, 0, 0, 0.12) 0px 1px 14px 0px; background-color: rgb(255, 255, 255); }
.jss36 { margin: 8px; }
.jss37 { top: 8px; color: white; right: -35px; cursor: pointer; display: flex; position: absolute; font-size: 14px; align-items: flex-end; font-family: Arial; line-height: 20px; }
</style><style id="react-to-print-40">.MuiTooltip-popper { z-index: 1500; pointer-events: none; }
.MuiTooltip-popperInteractive { pointer-events: auto; }
.MuiTooltip-popperArrow[x-placement*="bottom"] .MuiTooltip-arrow { top: 0px; left: 0px; margin-top: -0.71em; margin-left: 4px; margin-right: 4px; }
.MuiTooltip-popperArrow[x-placement*="top"] .MuiTooltip-arrow { left: 0px; bottom: 0px; margin-left: 4px; margin-right: 4px; margin-bottom: -0.71em; }
.MuiTooltip-popperArrow[x-placement*="right"] .MuiTooltip-arrow { left: 0px; width: 0.71em; height: 1em; margin-top: 4px; margin-left: -0.71em; margin-bottom: 4px; }
.MuiTooltip-popperArrow[x-placement*="left"] .MuiTooltip-arrow { right: 0px; width: 0.71em; height: 1em; margin-top: 4px; margin-right: -0.71em; margin-bottom: 4px; }
.MuiTooltip-popperArrow[x-placement*="left"] .MuiTooltip-arrow::before { transform-origin: 0px 0px; }
.MuiTooltip-popperArrow[x-placement*="right"] .MuiTooltip-arrow::before { transform-origin: 100% 100%; }
.MuiTooltip-popperArrow[x-placement*="top"] .MuiTooltip-arrow::before { transform-origin: 100% 0px; }
.MuiTooltip-popperArrow[x-placement*="bottom"] .MuiTooltip-arrow::before { transform-origin: 0px 100%; }
.MuiTooltip-tooltip { color: rgb(255, 255, 255); padding: 4px 8px; font-size: 0.535714rem; max-width: 300px; overflow-wrap: break-word; font-family: Arial; font-weight: 500; line-height: 1.4em; border-radius: 4px; background-color: rgba(97, 97, 97, 0.9); }
.MuiTooltip-tooltipArrow { margin: 0px; position: relative; }
.MuiTooltip-arrow { color: rgba(97, 97, 97, 0.9); width: 1em; height: 0.71em; overflow: hidden; position: absolute; box-sizing: border-box; }
.MuiTooltip-arrow::before { width: 100%; height: 100%; margin: auto; content: ""; display: block; transform: rotate(45deg); background-color: currentcolor; }
.MuiTooltip-touch { padding: 8px 16px; font-size: 0.75rem; font-weight: 400; line-height: 1.14286em; }
.MuiTooltip-tooltipPlacementLeft { margin: 0px 24px; transform-origin: right center; }
@media (min-width: 600px) {
.MuiTooltip-tooltipPlacementLeft { margin: 0px 14px; }
}
.MuiTooltip-tooltipPlacementRight { margin: 0px 24px; transform-origin: left center; }
@media (min-width: 600px) {
.MuiTooltip-tooltipPlacementRight { margin: 0px 14px; }
}
.MuiTooltip-tooltipPlacementTop { margin: 24px 0px; transform-origin: center bottom; }
@media (min-width: 600px) {
.MuiTooltip-tooltipPlacementTop { margin: 14px 0px; }
}
.MuiTooltip-tooltipPlacementBottom { margin: 24px 0px; transform-origin: center top; }
@media (min-width: 600px) {
.MuiTooltip-tooltipPlacementBottom { margin: 14px 0px; }
}
</style><style id="react-to-print-41">.jss6 { color: white; padding: 7px 10px; font-size: 12px; box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 8px 0px; background-color: rgb(0, 0, 0); }
.jss7 { color: rgb(0, 0, 0); }
</style><style id="react-to-print-42">.MuiButtonGroup-root { display: inline-flex; border-radius: 4px; }
.MuiButtonGroup-contained { box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px; }
.MuiButtonGroup-disableElevation { box-shadow: none; }
.MuiButtonGroup-fullWidth { width: 100%; }
.MuiButtonGroup-vertical { flex-direction: column; }
.MuiButtonGroup-grouped { min-width: 40px; }
.MuiButtonGroup-groupedHorizontal:not(:first-child) { border-top-left-radius: 0px; border-bottom-left-radius: 0px; }
.MuiButtonGroup-groupedHorizontal:not(:last-child) { border-top-right-radius: 0px; border-bottom-right-radius: 0px; }
.MuiButtonGroup-groupedVertical:not(:first-child) { border-top-left-radius: 0px; border-top-right-radius: 0px; }
.MuiButtonGroup-groupedVertical:not(:last-child) { border-bottom-left-radius: 0px; border-bottom-right-radius: 0px; }
.MuiButtonGroup-groupedTextHorizontal:not(:last-child) { border-right: 1px solid rgba(0, 0, 0, 0.23); }
.MuiButtonGroup-groupedTextVertical:not(:last-child) { border-bottom: 1px solid rgba(0, 0, 0, 0.23); }
.MuiButtonGroup-groupedTextPrimary:not(:last-child) { border-color: rgba(44, 131, 235, 0.5); }
.MuiButtonGroup-groupedTextSecondary:not(:last-child) { border-color: rgba(245, 0, 87, 0.5); }
.MuiButtonGroup-groupedOutlinedHorizontal:not(:first-child) { margin-left: -1px; }
.MuiButtonGroup-groupedOutlinedHorizontal:not(:last-child) { border-right-color: transparent; }
.MuiButtonGroup-groupedOutlinedVertical:not(:first-child) { margin-top: -1px; }
.MuiButtonGroup-groupedOutlinedVertical:not(:last-child) { border-bottom-color: transparent; }
.MuiButtonGroup-groupedOutlinedPrimary:hover { border-color: rgb(44, 131, 235); }
.MuiButtonGroup-groupedOutlinedSecondary:hover { border-color: rgb(245, 0, 87); }
.MuiButtonGroup-groupedContained { box-shadow: none; }
.MuiButtonGroup-groupedContainedHorizontal:not(:last-child) { border-right: 1px solid rgb(189, 189, 189); }
.MuiButtonGroup-groupedContainedHorizontal:not(:last-child).Mui-disabled { border-right: 1px solid rgba(0, 0, 0, 0.26); }
.MuiButtonGroup-groupedContainedVertical:not(:last-child) { border-bottom: 1px solid rgb(189, 189, 189); }
.MuiButtonGroup-groupedContainedVertical:not(:last-child).Mui-disabled { border-bottom: 1px solid rgba(0, 0, 0, 0.26); }
.MuiButtonGroup-groupedContainedPrimary:not(:last-child) { border-color: rgb(30, 91, 164); }
.MuiButtonGroup-groupedContainedSecondary:not(:last-child) { border-color: rgb(197, 17, 98); }
</style><style id="react-to-print-43">.jss16 { width: 190px; }
.jss17 { width: 37px; }
.jss18 { color: rgb(44, 131, 235); }
.jss19 { border: none; min-width: 28px; }
.jss19 span { font-size: 15px; font-weight: 400; }
.jss20 { max-height: 200px; }
</style><style id="react-to-print-44">.jss21 { margin-left: 0px; }
</style><style id="react-to-print-45">@media print {
.MuiDialog-root { position: absolute !important; }
}
.MuiDialog-scrollPaper { display: flex; align-items: center; justify-content: center; }
.MuiDialog-scrollBody { overflow: hidden auto; text-align: center; }
.MuiDialog-scrollBody::after { width: 0px; height: 100%; content: ""; display: inline-block; vertical-align: middle; }
.MuiDialog-container { height: 100%; outline: 0px; }
@media print {
.MuiDialog-container { height: auto; }
}
.MuiDialog-paper { margin: 32px; position: relative; overflow-y: auto; }
@media print {
.MuiDialog-paper { box-shadow: none; overflow-y: visible; }
}
.MuiDialog-paperScrollPaper { display: flex; max-height: calc(100% - 64px); flex-direction: column; }
.MuiDialog-paperScrollBody { display: inline-block; text-align: left; vertical-align: middle; }
.MuiDialog-paperWidthFalse { max-width: calc(100% - 64px); }
.MuiDialog-paperWidthXs { max-width: 444px; }
@media (max-width: 507.95px) {
.MuiDialog-paperWidthXs.MuiDialog-paperScrollBody { max-width: calc(100% - 64px); }
}
.MuiDialog-paperWidthSm { max-width: 600px; }
@media (max-width: 663.95px) {
.MuiDialog-paperWidthSm.MuiDialog-paperScrollBody { max-width: calc(100% - 64px); }
}
.MuiDialog-paperWidthMd { max-width: 960px; }
@media (max-width: 1023.95px) {
.MuiDialog-paperWidthMd.MuiDialog-paperScrollBody { max-width: calc(100% - 64px); }
}
.MuiDialog-paperWidthLg { max-width: 1280px; }
@media (max-width: 1343.95px) {
.MuiDialog-paperWidthLg.MuiDialog-paperScrollBody { max-width: calc(100% - 64px); }
}
.MuiDialog-paperWidthXl { max-width: 1920px; }
@media (max-width: 1983.95px) {
.MuiDialog-paperWidthXl.MuiDialog-paperScrollBody { max-width: calc(100% - 64px); }
}
.MuiDialog-paperFullWidth { width: calc(100% - 64px); }
.MuiDialog-paperFullScreen { width: 100%; height: 100%; margin: 0px; max-width: 100%; max-height: none; border-radius: 0px; }
.MuiDialog-paperFullScreen.MuiDialog-paperScrollBody { margin: 0px; max-width: 100%; }
</style><style id="react-to-print-46">.jss3 { color: rgb(34, 43, 69); width: 300px; padding: 0px 5px; font-size: 15px; font-family: Roboto; font-weight: 500; margin-right: 8px; }
.jss4 { text-align: right; }
.jss5 { border: 1px solid rgb(44, 131, 235); text-align: left; border-radius: 3px; }
</style><style id="react-to-print-47">.jss1 { color: rgb(255, 207, 15); border: 1px solid rgb(255, 207, 15); }
.jss2 { color: black; }
</style><style id="react-to-print-48">.jss8 { overflow-y: auto; background-color: rgb(0, 0, 0); }
.jss9 { outline: none; background-color: rgb(255, 255, 255); }
@media (min-width: 960px) {
.jss9 { top: 10%; left: 50%; position: absolute; transform: translate(-50%, 0px); box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 5px 8px 0px, rgba(0, 0, 0, 0.12) 0px 1px 14px 0px; border-radius: 3px; }
}
.jss10 { margin: 8px; }
.jss11 { color: rgb(0, 0, 0); right: 0px; display: flex; background: rgb(255, 255, 255); align-items: center; }
@media (min-width: 960px) {
.jss11 { top: 0px; cursor: pointer; padding: 13px 17px; position: absolute; }
}
@media (max-width: 959.95px) {
.jss11 { top: 0px; padding: 13px 17px; position: fixed; font-size: 12px; box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 20px 0px; }
}
.jss12 { background: rgb(255, 255, 255); vertical-align: top; }
@media (min-width: 960px) {
.jss12 { width: auto; height: 100vh; display: inline-block; }
}
@media (max-width: 959.95px) {
.jss12 { width: 100%; }
}
.jss13 { position: relative; background: rgb(0, 0, 0); vertical-align: top; }
@media (min-width: 960px) {
.jss13 { width: calc(100vw - 360px); height: 100vh; display: inline-block; }
}
@media (max-width: 959.95px) {
.jss13 { width: 100%; border-top: 10px solid rgb(238, 238, 238); }
}
.jss14 { outline: none; }
@media (min-width: 960px) {
.jss14 { width: 100vw; height: 100vh; position: relative; }
}
@media (max-width: 959.95px) {
.jss14 { width: 100%; }
}
@media (min-width: 960px) {
.jss15 { top: 0px; left: 50%; color: rgb(255, 255, 255); margin: 50px 0px; position: absolute; font-size: 24px; transform: translateX(-50%); background: rgb(0, 0, 0); font-family: Arial; font-weight: bold; }
}
@media (max-width: 959.95px) {
.jss15 { display: none; }
}
</style><style id="react-to-print-49">.jss38 { display: flex; overflow: hidden; flex-grow: 2; font-family: Arial; border-radius: 4px; }
.jss39 { width: 250px; background-color: rgb(245, 245, 245); }
.jss39 .MuiTabs-indicator { display: none; }
.jss40 { height: 80px; font-size: 16px; font-weight: bold; line-height: 80px; border-color: rgb(229, 229, 229); border-style: solid; padding-left: 35px; text-transform: capitalize; border-bottom-width: 1px; }
.jss40 .MuiTab-wrapper { align-items: flex-start; }
.jss40.Mui-selected { color: rgb(255, 255, 255); border: none; background-color: rgb(44, 131, 235); }
@media (max-width: 1024px) {
.jss40 .MuiTab-wrapper { align-items: center; }
}
</style><style id="react-to-print-50">.jss41 { overflow-y: auto; background-color: rgb(0, 0, 0); }
.jss42 { outline: none; background-color: rgb(255, 255, 255); }
@media (min-width: 960px) {
.jss42 { top: 10%; left: 50%; position: absolute; transform: translate(-50%, 0px); box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 5px 8px 0px, rgba(0, 0, 0, 0.12) 0px 1px 14px 0px; }
}
.jss43 { margin: 8px; }
.jss44 { color: rgb(0, 0, 0); right: 0px; display: flex; background: rgb(255, 255, 255); align-items: center; }
@media (min-width: 960px) {
.jss44 { top: 0px; cursor: pointer; padding: 13px 17px; position: absolute; }
}
@media (max-width: 959.95px) {
.jss44 { top: 0px; padding: 13px 17px; position: fixed; font-size: 12px; box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 20px 0px; }
}
.jss45 { background: rgb(255, 255, 255); vertical-align: top; }
@media (min-width: 960px) {
.jss45 { width: auto; height: 100vh; display: inline-block; }
}
@media (max-width: 959.95px) {
.jss45 { width: 100%; }
}
.jss46 { position: relative; background: rgb(0, 0, 0); vertical-align: top; }
@media (min-width: 960px) {
.jss46 { width: calc(100vw - 360px); height: 100vh; display: inline-block; }
}
@media (max-width: 959.95px) {
.jss46 { width: 100%; border-top: 10px solid rgb(238, 238, 238); }
}
.jss47 { outline: none; }
@media (min-width: 960px) {
.jss47 { width: 100vw; height: 100vh; position: relative; }
}
@media (max-width: 959.95px) {
.jss47 { width: 100%; }
}
@media (min-width: 960px) {
.jss48 { top: 0px; left: 50%; color: rgb(255, 255, 255); position: absolute; font-size: 24px; transform: translateX(-50%); background: rgb(0, 0, 0); margin-top: 30px; font-family: Arial; font-weight: bold; margin-bottom: 50px; }
}
@media (max-width: 959.95px) {
.jss48 { display: none; }
}
</style><style id="react-to-print-51">.jss49 { display: flex; overflow: hidden; flex-grow: 2; font-family: Arial; border-radius: 4px; }
.jss50 { width: 166px; background-color: rgb(245, 245, 245); }
.jss50 .MuiTabs-indicator { display: none; }
.jss51 { height: 64px; font-size: 16px; font-weight: bold; line-height: 80px; padding-left: 15px; border-bottom: 1px solid rgb(229, 229, 229); text-transform: capitalize; }
.jss51 .MuiTab-wrapper { height: 64px; flex-direction: row; justify-content: flex-start; }
.jss51.Mui-selected { color: rgb(44, 131, 235); background-color: rgb(245, 245, 245); }
@media (max-width: 1024px) {
.jss51 .MuiTab-wrapper { align-items: center; }
}
.jss51 .MuiTab-wrapper .MuiSvgIcon-root { margin-right: 10px; margin-bottom: 4px; }
</style><style id="react-to-print-52">.jss55 { width: 100%; height: 56px; }
.jss55 .MuiStepIcon-root { width: 30px; height: 30px; }
.jss55 .MuiStepIcon-active { color: rgb(44, 131, 235); }
.jss55 .MuiStepLabel-active { color: rgb(44, 131, 235); font-weight: 600; }
.jss55 .MuiStepConnector-line { display: none; }
.jss56 { padding: 15px; }
.jss57 { left: 122px; width: 162px; height: 5px; position: absolute; margin-top: 7px; background-color: rgb(44, 131, 235); }
.jss58 { right: 126px; width: 162px; height: 5px; position: absolute; margin-top: 7px; background-color: rgb(44, 131, 235); }
</style><style id="react-to-print-53">.jss52 { overflow: hidden auto; background-color: rgb(255, 255, 255); }
.jss53 { outline: none; background-color: rgb(255, 255, 255); }
@media (min-width: 960px) {
.jss53 { top: 10%; left: 50%; position: absolute; transform: translate(-50%, 0px); box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 5px 8px 0px, rgba(0, 0, 0, 0.12) 0px 1px 14px 0px; }
}
.jss54 { outline: none; }
@media (min-width: 960px) {
.jss54 { width: 100vw; height: 100vh; overflow: hidden auto; }
}
@media (max-width: 959.95px) {
.jss54 { width: 100%; }
}
</style><style id="react-to-print-54">.MuiDrawer-docked { flex: 0 0 auto; }
.MuiDrawer-paper { top: 0px; flex: 1 0 auto; height: 100%; display: flex; outline: 0px; z-index: 1200; position: fixed; overflow-y: auto; flex-direction: column; }
.MuiDrawer-paperAnchorLeft { left: 0px; right: auto; }
.MuiDrawer-paperAnchorRight { left: auto; right: 0px; }
.MuiDrawer-paperAnchorTop { inset: 0px 0px auto; height: auto; max-height: 100%; }
.MuiDrawer-paperAnchorBottom { inset: auto 0px 0px; height: auto; max-height: 100%; }
.MuiDrawer-paperAnchorDockedLeft { border-right: 1px solid rgba(0, 0, 0, 0.12); }
.MuiDrawer-paperAnchorDockedTop { border-bottom: 1px solid rgba(0, 0, 0, 0.12); }
.MuiDrawer-paperAnchorDockedRight { border-left: 1px solid rgba(0, 0, 0, 0.12); }
.MuiDrawer-paperAnchorDockedBottom { border-top: 1px solid rgba(0, 0, 0, 0.12); }
</style><link rel="stylesheet" type="text/css" href="https://docs.survivalapp.com/static/css/3055.92f93f44.chunk.css"><link rel="stylesheet" type="text/css" href="https://docs.survivalapp.com/static/css/2985.fcb98fd3.chunk.css"><style id="react-to-print-57">.erd_scroll_detection_container > div::-webkit-scrollbar { display: none; }
.erd_scroll_detection_container_animation_active { animation-duration: 0.1s; animation-name: erd_scroll_detection_container_animation; }
@-webkit-keyframes erd_scroll_detection_container_animation { 
0% { opacity: 1; }
50% { opacity: 0; }
100% { opacity: 1; }
}
@keyframes erd_scroll_detection_container_animation { 
0% { opacity: 1; }
50% { opacity: 0; }
100% { opacity: 1; }
}
</style><style id="react-to-print-58">.rCS19atnxs { position: absolute; width: 1px; height: 1px; left: 0px; top: 0px; z-index: 3000; --moveable-color: #4af; --zoom: 1; --zoompx: 1px; will-change: transform; }
.rCS19atnxs .moveable-control-box { z-index: 0; }
.rCS19atnxs .moveable-line, .rCS19atnxs .moveable-control { position: absolute; left: 0px; top: 0px; will-change: transform; }
.rCS19atnxs .moveable-control { width: 14px; height: 14px; border-radius: 50%; box-sizing: border-box; background: var(--moveable-color); margin-top: -7px; margin-left: -7px; border: 2px solid rgb(255, 255, 255); z-index: 10; }
.rCS19atnxs .moveable-padding { position: absolute; top: 0px; left: 0px; width: 100px; height: 100px; transform-origin: 0px 0px; }
.rCS19atnxs .moveable-line { width: 1px; height: 1px; background: var(--moveable-color); transform-origin: 0px 50%; }
.rCS19atnxs .moveable-line.moveable-dashed { box-sizing: border-box; background: transparent; }
.rCS19atnxs .moveable-line.moveable-dashed.moveable-horizontal { border-top-width: 1px; border-top-style: dashed; border-top-color: var(--moveable-color); }
.rCS19atnxs .moveable-line.moveable-dashed.moveable-vertical { border-left-width: 1px; border-left-style: dashed; border-left-color: var(--moveable-color); }
.rCS19atnxs .moveable-line.moveable-vertical { transform: translateX(-50%); }
.rCS19atnxs .moveable-line.moveable-horizontal { transform: translateY(-50%); }
.rCS19atnxs .moveable-line.moveable-vertical.moveable-bold { width: 2px; }
.rCS19atnxs .moveable-line.moveable-horizontal.moveable-bold { height: 2px; }
.rCS19atnxs .moveable-control.moveable-origin { border-color: rgb(255, 85, 85); background: rgb(255, 255, 255); width: 12px; height: 12px; margin-top: -6px; margin-left: -6px; pointer-events: none; }
.rCS19atnxs .moveable-direction[data-rotation="0"] { cursor: url("data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32px\" height=\"32px\" viewBox=\"0 0 32 32\" ><path d=\"M 16,5 L 12,10 L 14.5,10 L 14.5,22 L 12,22 L 16,27 L 20,22 L 17.5,22 L 17.5,10 L 20, 10 L 16,5 Z\" stroke-linejoin=\"round\" stroke-width=\"1.2\" fill=\"black\" stroke=\"white\" style=\"transform:rotate(0deg);transform-origin: 16px 16px\"></path></svg>") 16 16, ns-resize; }
.rCS19atnxs .moveable-direction[data-rotation="15"] { cursor: url("data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32px\" height=\"32px\" viewBox=\"0 0 32 32\" ><path d=\"M 16,5 L 12,10 L 14.5,10 L 14.5,22 L 12,22 L 16,27 L 20,22 L 17.5,22 L 17.5,10 L 20, 10 L 16,5 Z\" stroke-linejoin=\"round\" stroke-width=\"1.2\" fill=\"black\" stroke=\"white\" style=\"transform:rotate(15deg);transform-origin: 16px 16px\"></path></svg>") 16 16, ns-resize; }
.rCS19atnxs .moveable-direction[data-rotation="30"] { cursor: url("data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32px\" height=\"32px\" viewBox=\"0 0 32 32\" ><path d=\"M 16,5 L 12,10 L 14.5,10 L 14.5,22 L 12,22 L 16,27 L 20,22 L 17.5,22 L 17.5,10 L 20, 10 L 16,5 Z\" stroke-linejoin=\"round\" stroke-width=\"1.2\" fill=\"black\" stroke=\"white\" style=\"transform:rotate(30deg);transform-origin: 16px 16px\"></path></svg>") 16 16, nesw-resize; }
.rCS19atnxs .moveable-direction[data-rotation="45"] { cursor: url("data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32px\" height=\"32px\" viewBox=\"0 0 32 32\" ><path d=\"M 16,5 L 12,10 L 14.5,10 L 14.5,22 L 12,22 L 16,27 L 20,22 L 17.5,22 L 17.5,10 L 20, 10 L 16,5 Z\" stroke-linejoin=\"round\" stroke-width=\"1.2\" fill=\"black\" stroke=\"white\" style=\"transform:rotate(45deg);transform-origin: 16px 16px\"></path></svg>") 16 16, nesw-resize; }
.rCS19atnxs .moveable-direction[data-rotation="60"] { cursor: url("data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32px\" height=\"32px\" viewBox=\"0 0 32 32\" ><path d=\"M 16,5 L 12,10 L 14.5,10 L 14.5,22 L 12,22 L 16,27 L 20,22 L 17.5,22 L 17.5,10 L 20, 10 L 16,5 Z\" stroke-linejoin=\"round\" stroke-width=\"1.2\" fill=\"black\" stroke=\"white\" style=\"transform:rotate(60deg);transform-origin: 16px 16px\"></path></svg>") 16 16, nesw-resize; }
.rCS19atnxs .moveable-direction[data-rotation="75"] { cursor: url("data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32px\" height=\"32px\" viewBox=\"0 0 32 32\" ><path d=\"M 16,5 L 12,10 L 14.5,10 L 14.5,22 L 12,22 L 16,27 L 20,22 L 17.5,22 L 17.5,10 L 20, 10 L 16,5 Z\" stroke-linejoin=\"round\" stroke-width=\"1.2\" fill=\"black\" stroke=\"white\" style=\"transform:rotate(75deg);transform-origin: 16px 16px\"></path></svg>") 16 16, ew-resize; }
.rCS19atnxs .moveable-direction[data-rotation="90"] { cursor: url("data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32px\" height=\"32px\" viewBox=\"0 0 32 32\" ><path d=\"M 16,5 L 12,10 L 14.5,10 L 14.5,22 L 12,22 L 16,27 L 20,22 L 17.5,22 L 17.5,10 L 20, 10 L 16,5 Z\" stroke-linejoin=\"round\" stroke-width=\"1.2\" fill=\"black\" stroke=\"white\" style=\"transform:rotate(90deg);transform-origin: 16px 16px\"></path></svg>") 16 16, ew-resize; }
.rCS19atnxs .moveable-direction[data-rotation="105"] { cursor: url("data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32px\" height=\"32px\" viewBox=\"0 0 32 32\" ><path d=\"M 16,5 L 12,10 L 14.5,10 L 14.5,22 L 12,22 L 16,27 L 20,22 L 17.5,22 L 17.5,10 L 20, 10 L 16,5 Z\" stroke-linejoin=\"round\" stroke-width=\"1.2\" fill=\"black\" stroke=\"white\" style=\"transform:rotate(105deg);transform-origin: 16px 16px\"></path></svg>") 16 16, ew-resize; }
.rCS19atnxs .moveable-direction[data-rotation="120"] { cursor: url("data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32px\" height=\"32px\" viewBox=\"0 0 32 32\" ><path d=\"M 16,5 L 12,10 L 14.5,10 L 14.5,22 L 12,22 L 16,27 L 20,22 L 17.5,22 L 17.5,10 L 20, 10 L 16,5 Z\" stroke-linejoin=\"round\" stroke-width=\"1.2\" fill=\"black\" stroke=\"white\" style=\"transform:rotate(120deg);transform-origin: 16px 16px\"></path></svg>") 16 16, nwse-resize; }
.rCS19atnxs .moveable-direction[data-rotation="135"] { cursor: url("data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32px\" height=\"32px\" viewBox=\"0 0 32 32\" ><path d=\"M 16,5 L 12,10 L 14.5,10 L 14.5,22 L 12,22 L 16,27 L 20,22 L 17.5,22 L 17.5,10 L 20, 10 L 16,5 Z\" stroke-linejoin=\"round\" stroke-width=\"1.2\" fill=\"black\" stroke=\"white\" style=\"transform:rotate(135deg);transform-origin: 16px 16px\"></path></svg>") 16 16, nwse-resize; }
.rCS19atnxs .moveable-direction[data-rotation="150"] { cursor: url("data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32px\" height=\"32px\" viewBox=\"0 0 32 32\" ><path d=\"M 16,5 L 12,10 L 14.5,10 L 14.5,22 L 12,22 L 16,27 L 20,22 L 17.5,22 L 17.5,10 L 20, 10 L 16,5 Z\" stroke-linejoin=\"round\" stroke-width=\"1.2\" fill=\"black\" stroke=\"white\" style=\"transform:rotate(150deg);transform-origin: 16px 16px\"></path></svg>") 16 16, nwse-resize; }
.rCS19atnxs .moveable-direction[data-rotation="165"] { cursor: url("data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32px\" height=\"32px\" viewBox=\"0 0 32 32\" ><path d=\"M 16,5 L 12,10 L 14.5,10 L 14.5,22 L 12,22 L 16,27 L 20,22 L 17.5,22 L 17.5,10 L 20, 10 L 16,5 Z\" stroke-linejoin=\"round\" stroke-width=\"1.2\" fill=\"black\" stroke=\"white\" style=\"transform:rotate(165deg);transform-origin: 16px 16px\"></path></svg>") 16 16, ns-resize; }
.rCS19atnxs .moveable-group { z-index: -1; }
.rCS19atnxs .moveable-area { position: absolute; }
.rCS19atnxs .moveable-area-pieces { position: absolute; top: 0px; left: 0px; display: none; }
.rCS19atnxs .moveable-area.moveable-avoid, .rCS19atnxs .moveable-area.moveable-pass { pointer-events: none; }
.rCS19atnxs .moveable-area.moveable-avoid + .moveable-area-pieces { display: block; }
.rCS19atnxs .moveable-area-piece { position: absolute; }
.rCS19atnxs { --bounds-color: #d66; }
.rCS19atnxs .moveable-guideline { pointer-events: none; z-index: 2; }
.rCS19atnxs .moveable-guideline.moveable-bounds { background: var(--bounds-color); }
.rCS19atnxs .moveable-guideline-group { position: absolute; top: 0px; left: 0px; }
.rCS19atnxs .moveable-guideline-group .moveable-size-value { position: absolute; color: rgb(255, 85, 85); font-size: 12px; font-weight: bold; }
.rCS19atnxs .moveable-guideline-group.moveable-horizontal .moveable-size-value { transform-origin: 50% 100%; transform: translateX(-50%); left: 50%; bottom: 5px; }
.rCS19atnxs .moveable-guideline-group.moveable-vertical .moveable-size-value { transform-origin: 0% 50%; top: 50%; transform: translateY(-50%); left: 5px; }
.rCS19atnxs .moveable-guideline.moveable-gap { background: rgb(255, 85, 85); }
.rCS19atnxs .moveable-size-value.moveable-gap { color: rgb(255, 85, 85); }
.rCS19atnxs .moveable-rotation { position: absolute; width: 1px; transform-origin: 50% 100%; height: calc(40px * var(--zoom)); top: auto; left: 0px; bottom: 100%; will-change: transform; }
.rCS19atnxs .moveable-rotation .moveable-rotation-line { display: block; width: 100%; height: 100%; transform-origin: 50% 50%; }
.rCS19atnxs .moveable-rotation .moveable-rotation-control { border-color: var(--moveable-color); background: rgb(255, 255, 255); cursor: alias; }
.rCS19atnxs[data-able-origindraggable] .moveable-control.moveable-origin { pointer-events: auto; }
.rCS19atnxs .moveable-control.moveable-clip-control { background: rgb(102, 221, 102); cursor: pointer; }
.rCS19atnxs .moveable-control.moveable-clip-control.moveable-clip-radius { background: rgb(221, 102, 102); }
.rCS19atnxs .moveable-line.moveable-clip-line { background: rgb(102, 238, 102); cursor: move; z-index: 1; }
.rCS19atnxs .moveable-clip-area { position: absolute; top: 0px; left: 0px; }
.rCS19atnxs .moveable-clip-ellipse { position: absolute; cursor: move; border: var(--zoompx) solid #6d6; border-radius: 50%; transform-origin: 0px 0px; }
.rCS19atnxs { --bounds-color: #d66; }
.rCS19atnxs .moveable-guideline { pointer-events: none; z-index: 2; }
.rCS19atnxs .moveable-line.moveable-guideline.moveable-bounds { background: var(--bounds-color); }
.rCS19atnxs .moveable-control.moveable-border-radius { background: rgb(221, 102, 102); cursor: pointer; }
.rCS19atnxs[data-able-roundable] .moveable-line.moveable-direction { cursor: pointer; }
</style><link rel="stylesheet" type="text/css" id="u0" href="https://editors-upload.s3.amazonaws.com/lib/tinymce/js/tinymce/skins/ui/oxide/skin.min.css"><link rel="stylesheet" type="text/css" id="u1" href="https://editors-upload.s3.amazonaws.com/lib/tinymce/js/tinymce/skins/ui/oxide/content.inline.min.css"></head><body data-new-gr-c-s-check-loaded="14.1067.0" data-gr-ext-installed=""><div class="sc-WymzF bMUvd proposal-editor" id="proposal_editor_mode" style="position: relative;"><div height="880" class="sc-jdUHtK kCoUTg blockGroup"><div class="blockWrapper paragraph" style="position: relative; max-width: 100%; width: 1024px; margin: 0px auto 4px; height: 1446px;"><div class="sc-jiGprZ kkGKpV blockContainerCoverPage" style="transform-origin: center top; transform: scale(1);"><div font-size="16" id="block-0" class="sc-KiOns fYSlFz block  blockStyle" font-family="Roboto, sans-serif" opacity="0.4" style="box-sizing: border-box; position: relative;"><div class="areaDropBackground-image"></div><div class="block blockContainer" data-block-uuid="855992fd-508c-482b-911c-e91102661f04"><div id="blockContainer-0" class="sc-klgPlp gfbeVB block-container ui-sortable"><div class="sc-dGHUoD ggOaNC PARAGRAPH false field " data-block-order="0" data-item-order="0" data-item-uuid="5deb6a35-f95f-4f71-be10-1bb62f50835e" data-background="back-ground-image" style="width: 100%; vertical-align: top;"><div class="sc-drRqme dyASwu" style="display: block; position: relative;"><div class="sc-cVusLo fHRVtR 855992fd-508c-482b-911c-e91102661f04_5deb6a35-f95f-4f71-be10-1bb62f50835e"><div class="sc-iVxNgP cIZvQk"><div id="paragraph-0-0" class="sc-eHAsqE gga-dzN editor-wrapper " font-size="16"><div class="tinymce-custom" style="position: relative;"><div style="display: none;"><p class="place-holder hide-in-viewmode" style="margin: 0px;">Go ahead and start typing...</p></div><div class="sc-hZaSAO eMgwyy" style="opacity: 1; position: unset;"><div id="tiny-react_27727982721657335269674" class="mce-content-body" contenteditable="true" style="position: relative;" spellcheck="false"><p><span style="font-size: 16pt;" data-mce-style="font-size: 16pt;"><strong><span class="dynamic-token" data-name="dynamic-token" data-type="token" data-key="[Poseidon’s Lair]">[Poseidon’s Lair]</span></strong></span></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p></div></div></div></div><div data-styled-id="rCS19atnxs" class="moveable-control-box    rCS19atnxs" data-able-resizable="true" data-able-padding="true" style="position: absolute; display: none; transform: translate3d(0px, 0px, 0px); --zoom:1; --zoompx:1px;"><div class="moveable-control moveable-direction moveable-sw " data-rotation="45" data-direction="sw" style="transform: translateZ(0px) translate(0px, 0px) rotate(0rad) scale(1);"></div><div class="moveable-line moveable-direction " data-rotation="-1" data-line-index="0" data-direction="" style="transform: translateY(-50%) translate(0px, 0px) rotate(0rad) scaleY(1); width: 0px;"></div><div class="moveable-line moveable-direction " data-rotation="-1" data-line-index="1" data-direction="" style="transform: translateY(-50%) translate(0px, 0px) rotate(0rad) scaleY(1); width: 0px;"></div><div class="moveable-line moveable-direction " data-rotation="-1" data-line-index="2" data-direction="" style="transform: translateY(-50%) translate(0px, 0px) rotate(0rad) scaleY(1); width: 0px;"></div><div class="moveable-line moveable-direction " data-rotation="-1" data-line-index="3" data-direction="" style="transform: translateY(-50%) translate(0px, 0px) rotate(0rad) scaleY(1); width: 0px;"></div></div></div></div><div class="erd_scroll_detection_container erd_scroll_detection_container_animation_active" style="visibility: hidden; display: inline; width: 0px; height: 0px; z-index: -1; overflow: hidden; margin: 0px; padding: 0px;"><div dir="ltr" class="erd_scroll_detection_container" style="position: absolute; flex: 0 0 auto; overflow: hidden; z-index: -1; visibility: hidden; width: 100%; height: 100%; left: 0px; top: 0px;"><div class="erd_scroll_detection_container" style="position: absolute; flex: 0 0 auto; overflow: hidden; z-index: -1; visibility: hidden; inset: -7px -5px -6px -6px;"><div style="position: absolute; flex: 0 0 auto; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;"><div style="position: absolute; left: 0px; top: 0px; width: 821px; height: 308px;"></div></div><div style="position: absolute; flex: 0 0 auto; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;"><div style="position: absolute; width: 200%; height: 200%;"></div></div></div></div></div></div></div><div class="sc-dGHUoD knOMqC TITLE false field " data-block-order="0" data-item-order="1" data-item-uuid="c65daf2d-0a95-45c0-a0f6-6bb6caff2b7e" data-background="back-ground-image" style="width: 100%; vertical-align: top;"><div class="sc-drRqme dyASwu" style="display: block; position: relative;"><div class="sc-cVusLo fHRVtR 855992fd-508c-482b-911c-e91102661f04_c65daf2d-0a95-45c0-a0f6-6bb6caff2b7e" id="paragraph-0-1"><div class="sc-cabyH gOWYcC editor-wrapper " style="background-color: transparent;"><div class="tinymce-custom" style="position: relative;"><div style="display: none;"><p class="place-holder hide-in-viewmode" style="margin: 0px;">Add Title here...</p></div><div class="sc-hZaSAO eMgwyy" style="opacity: 1; position: unset;"><div id="tiny-react_48789797131657335269680" class="mce-content-body" contenteditable="true" style="position: relative;" spellcheck="false"><h1><span style="font-size: 48pt; color: rgb(25, 25, 112);" data-mce-style="font-size: 48pt; color: #191970;">Business Plan</span></h1></div></div></div></div></div><div class="erd_scroll_detection_container erd_scroll_detection_container_animation_active" style="visibility: hidden; display: inline; width: 0px; height: 0px; z-index: -1; overflow: hidden; margin: 0px; padding: 0px;"><div dir="ltr" class="erd_scroll_detection_container" style="position: absolute; flex: 0 0 auto; overflow: hidden; z-index: -1; visibility: hidden; width: 100%; height: 100%; left: 0px; top: 0px;"><div class="erd_scroll_detection_container" style="position: absolute; flex: 0 0 auto; overflow: hidden; z-index: -1; visibility: hidden; inset: -7px -5px -6px -6px;"><div style="position: absolute; flex: 0 0 auto; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;"><div style="position: absolute; left: 0px; top: 0px; width: 821px; height: 143px;"></div></div><div style="position: absolute; flex: 0 0 auto; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;"><div style="position: absolute; width: 200%; height: 200%;"></div></div></div></div></div></div></div><div class="sc-dGHUoD ggOaNC PARAGRAPH last-field field " data-block-order="0" data-item-order="2" data-item-uuid="a059ccbb-91b7-41b1-a24f-83db981e1ee9" data-background="back-ground-image" style="width: 100%; vertical-align: top;"><div class="sc-drRqme dyASwu" style="display: block; position: relative;"><div class="sc-cVusLo fHRVtR 855992fd-508c-482b-911c-e91102661f04_a059ccbb-91b7-41b1-a24f-83db981e1ee9"><div class="sc-iVxNgP cIZvQk"><div id="paragraph-0-2" class="sc-eHAsqE gga-dzN editor-wrapper " font-size="16"><div class="tinymce-custom" style="position: relative;"><div style="display: none;"><p class="place-holder hide-in-viewmode" style="margin: 0px;">Go ahead and start typing...</p></div><div class="sc-hZaSAO eMgwyy" style="opacity: 1; position: unset;"><div id="tiny-react_32009666241657335269680" class="mce-content-body" contenteditable="true" style="position: relative;" spellcheck="false"><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><span style="font-size: 16pt;" data-mce-style="font-size: 16pt;">Prepared by</span></p><p><br></p><p><span style="font-size: 16pt;" data-mce-style="font-size: 16pt;"><strong><span class="dynamic-token" data-name="dynamic-token" data-type="token" data-key="[Henry Fortwright]">[Henry Fortwright]</span></strong></span></p><p><span style="font-size: 16pt;" data-mce-style="font-size: 16pt;"><strong><span class="dynamic-token" data-name="dynamic-token" data-type="token" data-key="[henry@poseidonslair.com]">[henry@poseidonslair.com]</span></strong></span></p><p><span style="font-size: 16pt;" data-mce-style="font-size: 16pt;">July 13, 2025</span></p></div></div></div></div><div data-styled-id="rCS19atnxs" class="moveable-control-box    rCS19atnxs" data-able-resizable="true" data-able-padding="true" style="position: absolute; display: none; transform: translate3d(0px, 0px, 0px); --zoom:1; --zoompx:1px;"><div class="moveable-control moveable-direction moveable-sw " data-rotation="45" data-direction="sw" style="transform: translateZ(0px) translate(0px, 0px) rotate(0rad) scale(1);"></div><div class="moveable-line moveable-direction " data-rotation="-1" data-line-index="0" data-direction="" style="transform: translateY(-50%) translate(0px, 0px) rotate(0rad) scaleY(1); width: 0px;"></div><div class="moveable-line moveable-direction " data-rotation="-1" data-line-index="1" data-direction="" style="transform: translateY(-50%) translate(0px, 0px) rotate(0rad) scaleY(1); width: 0px;"></div><div class="moveable-line moveable-direction " data-rotation="-1" data-line-index="2" data-direction="" style="transform: translateY(-50%) translate(0px, 0px) rotate(0rad) scaleY(1); width: 0px;"></div><div class="moveable-line moveable-direction " data-rotation="-1" data-line-index="3" data-direction="" style="transform: translateY(-50%) translate(0px, 0px) rotate(0rad) scaleY(1); width: 0px;"></div></div></div></div><div class="erd_scroll_detection_container erd_scroll_detection_container_animation_active" style="visibility: hidden; display: inline; width: 0px; height: 0px; z-index: -1; overflow: hidden; margin: 0px; padding: 0px;"><div dir="ltr" class="erd_scroll_detection_container" style="position: absolute; flex: 0 0 auto; overflow: hidden; z-index: -1; visibility: hidden; width: 100%; height: 100%; left: 0px; top: 0px;"><div class="erd_scroll_detection_container" style="position: absolute; flex: 0 0 auto; overflow: hidden; z-index: -1; visibility: hidden; inset: -7px -5px -6px -6px;"><div style="position: absolute; flex: 0 0 auto; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;"><div style="position: absolute; left: 0px; top: 0px; width: 821px; height: 534px;"></div></div><div style="position: absolute; flex: 0 0 auto; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;"><div style="position: absolute; width: 200%; height: 200%;"></div></div></div></div></div></div></div></div></div><div class="sc-gqUUDT iQraAw" style="max-width: 1024px;"><img src="https://docs.survivalapp.com/static/media/logo-branding.c5be7d2312c47457fc7bfbfa75fd54d1.svg" alt="logo-branding" class="sc-cyxtte jqgdiE"><div class="sc-evZas dlxkXD sc-dAKPfc krJiwq">Now create your own document- It's Free</div></div><div class="areaDrop hide-in-viewmode"></div><div class="erd_scroll_detection_container erd_scroll_detection_container_animation_active" style="visibility: hidden; display: inline; width: 0px; height: 0px; z-index: -1; overflow: hidden; margin: 0px; padding: 0px;"><div dir="ltr" class="erd_scroll_detection_container" style="position: absolute; flex: 0 0 auto; overflow: hidden; z-index: -1; visibility: hidden; width: 100%; height: 100%; left: 0px; top: 0px;"><div class="erd_scroll_detection_container" style="position: absolute; flex: 0 0 auto; overflow: hidden; z-index: -1; visibility: hidden; inset: -7px -5px -6px -6px;"><div style="position: absolute; flex: 0 0 auto; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;"><div style="position: absolute; left: 0px; top: 0px; width: 1045px; height: 1469px;"></div></div><div style="position: absolute; flex: 0 0 auto; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;"><div style="position: absolute; width: 200%; height: 200%;"></div></div></div></div></div></div></div></div><div class="page-break"></div><div class="blockWrapper paragraph" style="position: relative; max-width: 100%; width: 1024px; margin: 0px auto 4px; height: 1446px;"><div class="sc-jiGprZ kkGKpV blockContainerCoverPage" style="transform-origin: center top; transform: scale(1);"><div font-size="16" id="block-1" class="sc-KiOns hhIdFy block  blockStyle" font-family="Roboto, sans-serif" opacity="0.4" style="box-sizing: border-box; position: relative;"><div class="areaDropBackground-image"></div><div class="block blockContainer" data-block-uuid="c89cba33-1e7e-4a9d-9206-c59e3f3a0d59"><div id="blockContainer-1" class="sc-klgPlp gfbeVB block-container ui-sortable"><div class="sc-dGHUoD ggOaNC PARAGRAPH last-field field " data-block-order="1" data-item-order="0" data-item-uuid="8246cb25-c050-4694-b173-08a2bce2375f" data-background="back-ground-image" style="width: 100%; vertical-align: top;"><div class="sc-drRqme cBoHJr" style="display: block; position: relative;"><div class="sc-cVusLo fHRVtR c89cba33-1e7e-4a9d-9206-c59e3f3a0d59_8246cb25-c050-4694-b173-08a2bce2375f"><div class="sc-iVxNgP cIZvQk"><div id="paragraph-1-0" class="sc-eHAsqE gga-dzN editor-wrapper " font-size="16"><div class="tinymce-custom" style="position: relative;"><div style="display: none;"><p class="place-holder hide-in-viewmode" style="margin: 0px;">Go ahead and start typing...</p></div><div class="sc-hZaSAO eMgwyy" style="opacity: 1; position: unset;"><div id="tiny-react_84278571351657335269681" class="mce-content-body" contenteditable="true" style="position: relative;" spellcheck="false"><h2>Executive Summary</h2><p><strong>Objectives:&nbsp;</strong></p><ol class="mylist" style="list-style-type: decimal;" data-mce-style="list-style-type: decimal;"><li class="mynumberlistclass">To build 25 acres of water park in Minnesota by 2028</li><li class="mynumberlistclass">To reach at least $3,500,000.00 in total sales by July 12, 2027</li></ol><p><br></p><p><strong>Unique Selling Point:&nbsp;</strong></p><p><strong><span class="dynamic-token" data-name="dynamic-token" data-type="token" data-key="[Poseidon’s Lair]">[Poseidon’s Lair]</span> </strong>will be the biggest and grandest water amusement park in the whole of Minnesota. It will use state-of-the-art technology in all its facilities that ensure the safety of all its customers while they enjoy and have fun.</p><h2>About Us</h2><p>Located at Duluth, Minnesota, <strong><span class="dynamic-token" data-name="dynamic-token" data-type="token" data-key="[Poseidon’s Lair]">[Poseidon’s Lair]</span></strong> is owned and operated by Magistrate Properties Inc. The water park will offer access to different facilities, such as water slides, splash pads, wave pool, and water playgrounds for both children and adults.</p><h2>Services &amp; Pricing</h2><p>The water park offers family pack, two-pack combo, and general admission tickets for a price ranging from $20 to $29. It also offers 1% to 5% discounts for tickets that are good for two, three, and five days.</p></div></div></div></div><div data-styled-id="rCS19atnxs" class="moveable-control-box    rCS19atnxs" data-able-resizable="true" data-able-padding="true" style="position: absolute; display: none; transform: translate3d(0px, 0px, 0px); --zoom:1; --zoompx:1px;"><div class="moveable-control moveable-direction moveable-sw " data-rotation="45" data-direction="sw" style="transform: translateZ(0px) translate(0px, 0px) rotate(0rad) scale(1);"></div><div class="moveable-line moveable-direction " data-rotation="-1" data-line-index="0" data-direction="" style="transform: translateY(-50%) translate(0px, 0px) rotate(0rad) scaleY(1); width: 0px;"></div><div class="moveable-line moveable-direction " data-rotation="-1" data-line-index="1" data-direction="" style="transform: translateY(-50%) translate(0px, 0px) rotate(0rad) scaleY(1); width: 0px;"></div><div class="moveable-line moveable-direction " data-rotation="-1" data-line-index="2" data-direction="" style="transform: translateY(-50%) translate(0px, 0px) rotate(0rad) scaleY(1); width: 0px;"></div><div class="moveable-line moveable-direction " data-rotation="-1" data-line-index="3" data-direction="" style="transform: translateY(-50%) translate(0px, 0px) rotate(0rad) scaleY(1); width: 0px;"></div></div></div></div><div class="erd_scroll_detection_container erd_scroll_detection_container_animation_active" style="visibility: hidden; display: inline; width: 0px; height: 0px; z-index: -1; overflow: hidden; margin: 0px; padding: 0px;"><div dir="ltr" class="erd_scroll_detection_container" style="position: absolute; flex: 0 0 auto; overflow: hidden; z-index: -1; visibility: hidden; width: 100%; height: 100%; left: 0px; top: 0px;"><div class="erd_scroll_detection_container" style="position: absolute; flex: 0 0 auto; overflow: hidden; z-index: -1; visibility: hidden; inset: -7px -5px -6px -6px;"><div style="position: absolute; flex: 0 0 auto; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;"><div style="position: absolute; left: 0px; top: 0px; width: 821px; height: 633px;"></div></div><div style="position: absolute; flex: 0 0 auto; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;"><div style="position: absolute; width: 200%; height: 200%;"></div></div></div></div></div></div></div></div></div><div class="sc-gqUUDT iQraAw" style="max-width: 1024px;"><img src="https://docs.survivalapp.com/static/media/logo-branding.c5be7d2312c47457fc7bfbfa75fd54d1.svg" alt="logo-branding" class="sc-cyxtte jqgdiE"><div class="sc-evZas dlxkXD sc-dAKPfc krJiwq">Now create your own document- It's Free</div></div><div class="areaDrop hide-in-viewmode"></div><div class="erd_scroll_detection_container erd_scroll_detection_container_animation_active" style="visibility: hidden; display: inline; width: 0px; height: 0px; z-index: -1; overflow: hidden; margin: 0px; padding: 0px;"><div dir="ltr" class="erd_scroll_detection_container" style="position: absolute; flex: 0 0 auto; overflow: hidden; z-index: -1; visibility: hidden; width: 100%; height: 100%; left: 0px; top: 0px;"><div class="erd_scroll_detection_container" style="position: absolute; flex: 0 0 auto; overflow: hidden; z-index: -1; visibility: hidden; inset: -7px -5px -6px -6px;"><div style="position: absolute; flex: 0 0 auto; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;"><div style="position: absolute; left: 0px; top: 0px; width: 1045px; height: 1469px;"></div></div><div style="position: absolute; flex: 0 0 auto; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;"><div style="position: absolute; width: 200%; height: 200%;"></div></div></div></div></div></div></div></div><div class="page-break"></div><div class="blockWrapper paragraph" style="position: relative; max-width: 100%; width: 1024px; margin: 0px auto 4px; height: 1446px;"><div class="sc-jiGprZ kkGKpV blockContainerCoverPage" style="transform-origin: center top; transform: scale(1);"><div font-size="16" id="block-2" class="sc-KiOns hhIdFy block  blockStyle" font-family="Roboto, sans-serif" opacity="0.4" style="box-sizing: border-box; position: relative;"><div class="areaDropBackground-image"></div><div class="block blockContainer" data-block-uuid="f297f7ef-1007-46c9-bab6-e8c5d449ef4a"><div id="blockContainer-2" class="sc-klgPlp gfbeVB block-container ui-sortable"><div class="sc-dGHUoD ggOaNC PARAGRAPH false field " data-block-order="2" data-item-order="0" data-item-uuid="b208b6e2-2aa0-4922-bee0-0ef87a603ee4" data-background="back-ground-image" style="width: 100%; vertical-align: top;"><div class="sc-drRqme cBoHJr" style="display: block; position: relative;"><div class="sc-cVusLo fHRVtR f297f7ef-1007-46c9-bab6-e8c5d449ef4a_b208b6e2-2aa0-4922-bee0-0ef87a603ee4"><div class="sc-iVxNgP cIZvQk"><div id="paragraph-2-0" class="sc-eHAsqE gga-dzN editor-wrapper " font-size="16"><div class="tinymce-custom" style="position: relative;"><div style="display: none;"><p class="place-holder hide-in-viewmode" style="margin: 0px;">Go ahead and start typing...</p></div><div class="sc-hZaSAO eMgwyy" style="opacity: 1; position: unset;"><div id="tiny-react_30823943461657335269682" class="mce-content-body" contenteditable="true" style="position: relative;" spellcheck="false"><h2>Target Market</h2><p>The water park will target both the local population in Minnesota and tourists who visit the state. These are 3 years old and above who want to experience the best water park facilities and services.</p><h2>Competition</h2><p>The company’s competition are the following:</p><p><br></p><ol class="mylist" style="list-style-type: decimal;" data-mce-style="list-style-type: decimal;"><li class="mynumberlistclass">Neptune’s Waves<br><span style="font-family: inherit; font-size: inherit;" data-mce-style="font-family: inherit; font-size: inherit;">Neptune’s Waves is known for its massive wave pools. It achieved an estimated annual sales of $2,200,000.00.&nbsp;<br><br></span></li><li class="mynumberlistclass">Aegir’s Adventure Paradise<br>It is a Norse mythology-inspired water park that attracts over a million visitors every year from the Minnesota area alone. It generates $3,500,000.00 in annual sales.</li></ol><h2>SWOT Analysis</h2></div></div></div></div><div data-styled-id="rCS19atnxs" class="moveable-control-box    rCS19atnxs" data-able-resizable="true" data-able-padding="true" style="position: absolute; display: none; transform: translate3d(0px, 0px, 0px); --zoom:1; --zoompx:1px;"><div class="moveable-control moveable-direction moveable-sw " data-rotation="45" data-direction="sw" style="transform: translateZ(0px) translate(0px, 0px) rotate(0rad) scale(1);"></div><div class="moveable-line moveable-direction " data-rotation="-1" data-line-index="0" data-direction="" style="transform: translateY(-50%) translate(0px, 0px) rotate(0rad) scaleY(1); width: 0px;"></div><div class="moveable-line moveable-direction " data-rotation="-1" data-line-index="1" data-direction="" style="transform: translateY(-50%) translate(0px, 0px) rotate(0rad) scaleY(1); width: 0px;"></div><div class="moveable-line moveable-direction " data-rotation="-1" data-line-index="2" data-direction="" style="transform: translateY(-50%) translate(0px, 0px) rotate(0rad) scaleY(1); width: 0px;"></div><div class="moveable-line moveable-direction " data-rotation="-1" data-line-index="3" data-direction="" style="transform: translateY(-50%) translate(0px, 0px) rotate(0rad) scaleY(1); width: 0px;"></div></div></div></div><div class="erd_scroll_detection_container erd_scroll_detection_container_animation_active" style="visibility: hidden; display: inline; width: 0px; height: 0px; z-index: -1; overflow: hidden; margin: 0px; padding: 0px;"><div dir="ltr" class="erd_scroll_detection_container" style="position: absolute; flex: 0 0 auto; overflow: hidden; z-index: -1; visibility: hidden; width: 100%; height: 100%; left: 0px; top: 0px;"><div class="erd_scroll_detection_container" style="position: absolute; flex: 0 0 auto; overflow: hidden; z-index: -1; visibility: hidden; inset: -7px -5px -6px -6px;"><div style="position: absolute; flex: 0 0 auto; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;"><div style="position: absolute; left: 0px; top: 0px; width: 821px; height: 583px;"></div></div><div style="position: absolute; flex: 0 0 auto; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;"><div style="position: absolute; width: 200%; height: 200%;"></div></div></div></div></div></div></div><div class="sc-dGHUoD ggOaNC TABLE last-field field " data-block-order="2" data-item-order="1" data-item-uuid="a9ee12b3-7327-4b13-a9aa-7f4f49e76886" data-background="back-ground-image" style="width: 100%; vertical-align: top;"><div class="sc-drRqme cBoHJr" style="display: block; position: relative;"><div class="sc-cVusLo fHRVtR" id="table-2-1"><div font-size="16" class="sc-iAkJRg fUzbHM"><div class="tinymce-custom" style="position: relative;"><div style="display: none;"><p class="place-holder hide-in-viewmode" style="margin: 0px;">Go ahead and start typing...</p></div><div class="sc-hZaSAO eMgwyy" style="opacity: 1; position: unset;"><div id="tiny-react_13974508471657335269683" class="mce-content-body" contenteditable="true" style="position: relative;" spellcheck="false"><table style="border-collapse: collapse; width: 629px; height: 50px;" data-mce-style="border-collapse: collapse; width: 629px; height: 50px;" class="mce-item-table"><tbody><tr style="height: auto;" data-mce-style="height: auto;"><td class="tableField_TD" style="background-color: white; position: relative; width: 147px; height: 25px;" data-mce-style="background-color: white; position: relative; width: 147px; height: 25px;"><div class="tableField_Cell" style="text-align: center;" data-mce-style="text-align: center;"><strong>METRICS</strong></div></td><td style="background-color: white; position: relative; width: 248px;" data-mce-style="background-color: white; position: relative; width: 248px;"><div class="tableField_Cell" style="text-align: center;" data-mce-style="text-align: center;"><strong>POINT 1</strong></div></td><td class="tableField_TD" style="background-color: white; position: relative; width: 200px; height: 25px;" data-mce-style="background-color: white; position: relative; width: 200px; height: 25px;"><div class="tableField_Cell" style="text-align: center;" data-mce-style="text-align: center;"><strong>POINT 2</strong></div></td></tr><tr style="height: auto;" data-mce-style="height: auto;"><td class="tableField_TD" style="background-color: white; position: relative; width: 147px; height: 25px;" data-mce-style="background-color: white; position: relative; width: 147px; height: 25px;"><div class="tableField_Cell"><strong>Strengths</strong></div></td><td style="background-color: white; position: relative; width: 272px;" data-mce-style="background-color: white; position: relative; width: 272px;"><div class="tableField_Cell" style="text-align: center;" data-mce-style="text-align: center;">Offers affordable packages</div></td><td class="tableField_TD" style="background-color: white; position: relative; width: 251px; height: 25px;" data-mce-style="background-color: white; position: relative; width: 251px; height: 25px;"><div class="tableField_Cell" style="text-align: center;" data-mce-style="text-align: center;">A general manager with a decade of experience</div></td></tr><tr><td style="background-color: white; position: relative; width: 147px;" data-mce-style="background-color: white; position: relative; width: 147px;"><strong>Weaknesses</strong></td><td style="background-color: white; position: relative; width: 272px;" data-mce-style="background-color: white; position: relative; width: 272px;"><div class="tableField_Cell" style="text-align: center;" data-mce-style="text-align: center;">Location (far from the city)</div></td><td style="background-color: white; position: relative; width: 251px;" data-mce-style="background-color: white; position: relative; width: 251px;"><div class="tableField_Cell" style="text-align: center;" data-mce-style="text-align: center;">Lack of experienced workforce</div></td></tr><tr><td style="background-color: white; position: relative; width: 147px;" data-mce-style="background-color: white; position: relative; width: 147px;"><strong>Opportunities</strong></td><td style="background-color: white; position: relative; width: 272px;" data-mce-style="background-color: white; position: relative; width: 272px;"><div class="tableField_Cell" style="text-align: center;" data-mce-style="text-align: center;">Public transportation near the area</div></td><td style="background-color: white; position: relative; width: 251px;" data-mce-style="background-color: white; position: relative; width: 251px;"><div class="tableField_Cell" style="text-align: center;" data-mce-style="text-align: center;">Available online platforms to promote the business</div></td></tr><tr><td style="background-color: white; position: relative; width: 147px;" data-mce-style="background-color: white; position: relative; width: 147px;"><strong>Threats</strong></td><td style="background-color: white; position: relative; width: 272px;" data-mce-style="background-color: white; position: relative; width: 272px;"><div class="tableField_Cell" style="text-align: center;" data-mce-style="text-align: center;">Safety risks</div></td><td style="background-color: white; position: relative; width: 251px;" data-mce-style="background-color: white; position: relative; width: 251px;"><div class="tableField_Cell" style="text-align: center;" data-mce-style="text-align: center;">Changes in government theme park safety regulations may add to cost</div></td></tr></tbody></table></div></div></div></div></div><div class="erd_scroll_detection_container erd_scroll_detection_container_animation_active" style="visibility: hidden; display: inline; width: 0px; height: 0px; z-index: -1; overflow: hidden; margin: 0px; padding: 0px;"><div dir="ltr" class="erd_scroll_detection_container" style="position: absolute; flex: 0 0 auto; overflow: hidden; z-index: -1; visibility: hidden; width: 100%; height: 100%; left: 0px; top: 0px;"><div class="erd_scroll_detection_container" style="position: absolute; flex: 0 0 auto; overflow: hidden; z-index: -1; visibility: hidden; inset: -7px -5px -6px -6px;"><div style="position: absolute; flex: 0 0 auto; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;"><div style="position: absolute; left: 0px; top: 0px; width: 821px; height: 286px;"></div></div><div style="position: absolute; flex: 0 0 auto; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;"><div style="position: absolute; width: 200%; height: 200%;"></div></div></div></div></div></div></div></div></div><div class="sc-gqUUDT iQraAw" style="max-width: 1024px;"><img src="https://docs.survivalapp.com/static/media/logo-branding.c5be7d2312c47457fc7bfbfa75fd54d1.svg" alt="logo-branding" class="sc-cyxtte jqgdiE"><div class="sc-evZas dlxkXD sc-dAKPfc krJiwq">Now create your own document- It's Free</div></div><div class="areaDrop hide-in-viewmode"></div><div class="erd_scroll_detection_container erd_scroll_detection_container_animation_active" style="visibility: hidden; display: inline; width: 0px; height: 0px; z-index: -1; overflow: hidden; margin: 0px; padding: 0px;"><div dir="ltr" class="erd_scroll_detection_container" style="position: absolute; flex: 0 0 auto; overflow: hidden; z-index: -1; visibility: hidden; width: 100%; height: 100%; left: 0px; top: 0px;"><div class="erd_scroll_detection_container" style="position: absolute; flex: 0 0 auto; overflow: hidden; z-index: -1; visibility: hidden; inset: -7px -5px -6px -6px;"><div style="position: absolute; flex: 0 0 auto; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;"><div style="position: absolute; left: 0px; top: 0px; width: 1045px; height: 1469px;"></div></div><div style="position: absolute; flex: 0 0 auto; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;"><div style="position: absolute; width: 200%; height: 200%;"></div></div></div></div></div></div></div></div><div class="page-break"></div><div class="blockWrapper paragraph" style="position: relative; max-width: 100%; width: 1024px; margin: 0px auto 4px; height: 1446px;"><div class="sc-jiGprZ kkGKpV blockContainerCoverPage" style="transform-origin: center top; transform: scale(1);"><div font-size="16" id="block-3" class="sc-KiOns hhIdFy block  blockStyle" font-family="Roboto, sans-serif" opacity="0.4" style="box-sizing: border-box; position: relative;"><div class="areaDropBackground-image"></div><div class="block blockContainer" data-block-uuid="a96b3521-334b-4abd-8653-f3761c33df59"><div id="blockContainer-3" class="sc-klgPlp gfbeVB block-container ui-sortable"><div class="sc-dGHUoD ggOaNC PARAGRAPH false field " data-block-order="3" data-item-order="0" data-item-uuid="42b63ab9-f026-42bb-83ab-d8a4882abf38" data-background="back-ground-image" style="width: 100%; vertical-align: top;"><div class="sc-drRqme cBoHJr" style="display: block; position: relative;"><div class="sc-cVusLo fHRVtR a96b3521-334b-4abd-8653-f3761c33df59_42b63ab9-f026-42bb-83ab-d8a4882abf38"><div class="sc-iVxNgP cIZvQk"><div id="paragraph-3-0" class="sc-eHAsqE gga-dzN editor-wrapper " font-size="16"><div class="tinymce-custom" style="position: relative;"><div style="display: none;"><p class="place-holder hide-in-viewmode" style="margin: 0px;">Go ahead and start typing...</p></div><div class="sc-hZaSAO eMgwyy" style="opacity: 1; position: unset;"><div id="tiny-react_47807980681657335269683" class="mce-content-body" contenteditable="true" style="position: relative;" spellcheck="false"><h2>Marketing Plan</h2><p>The marketing plan will consist of promoting the water park on different social media platforms and advertising on television and radio. It will partner with companies that offer products and services relevant to the water park and will collaborate with influencers to feature the water park in their social media posts, blogs, and vlogs. Flyers and coupons for the opening day will be handed out to all customers and passers-by, including limited opening day offers and free tickets for the first 100 customers.</p><h2>Operational Plan</h2><p><strong><span class="dynamic-token" data-name="dynamic-token" data-type="token" data-key="[Poseidon’s Lair]">[Poseidon’s Lair]</span> </strong>will be located at 865 Ferrell St., Duluth, MN 55802 with an area of 80,560 sq ft. It will have a total of 1000 employees assigned to different departments.</p></div></div></div></div><div data-styled-id="rCS19atnxs" class="moveable-control-box    rCS19atnxs" data-able-resizable="true" data-able-padding="true" style="position: absolute; display: none; transform: translate3d(0px, 0px, 0px); --zoom:1; --zoompx:1px;"><div class="moveable-control moveable-direction moveable-sw " data-rotation="45" data-direction="sw" style="transform: translateZ(0px) translate(0px, 0px) rotate(0rad) scale(1);"></div><div class="moveable-line moveable-direction " data-rotation="-1" data-line-index="0" data-direction="" style="transform: translateY(-50%) translate(0px, 0px) rotate(0rad) scaleY(1); width: 0px;"></div><div class="moveable-line moveable-direction " data-rotation="-1" data-line-index="1" data-direction="" style="transform: translateY(-50%) translate(0px, 0px) rotate(0rad) scaleY(1); width: 0px;"></div><div class="moveable-line moveable-direction " data-rotation="-1" data-line-index="2" data-direction="" style="transform: translateY(-50%) translate(0px, 0px) rotate(0rad) scaleY(1); width: 0px;"></div><div class="moveable-line moveable-direction " data-rotation="-1" data-line-index="3" data-direction="" style="transform: translateY(-50%) translate(0px, 0px) rotate(0rad) scaleY(1); width: 0px;"></div></div></div></div><div class="erd_scroll_detection_container erd_scroll_detection_container_animation_active" style="visibility: hidden; display: inline; width: 0px; height: 0px; z-index: -1; overflow: hidden; margin: 0px; padding: 0px;"><div dir="ltr" class="erd_scroll_detection_container" style="position: absolute; flex: 0 0 auto; overflow: hidden; z-index: -1; visibility: hidden; width: 100%; height: 100%; left: 0px; top: 0px;"><div class="erd_scroll_detection_container" style="position: absolute; flex: 0 0 auto; overflow: hidden; z-index: -1; visibility: hidden; inset: -7px -5px -6px -6px;"><div style="position: absolute; flex: 0 0 auto; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;"><div style="position: absolute; left: 0px; top: 0px; width: 821px; height: 379px;"></div></div><div style="position: absolute; flex: 0 0 auto; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;"><div style="position: absolute; width: 200%; height: 200%;"></div></div></div></div></div></div></div><div class="sc-dGHUoD ggOaNC TABLE last-field field " data-block-order="3" data-item-order="1" data-item-uuid="797e67ec-23a6-474e-b382-3c68e24bdd90" data-background="back-ground-image" style="width: 100%; vertical-align: top;"><div class="sc-drRqme cBoHJr" style="display: block; position: relative;"><div class="sc-cVusLo fHRVtR" id="table-3-1"><div font-size="16" class="sc-iAkJRg fUzbHM"><div class="tinymce-custom" style="position: relative;"><div style="display: none;"><p class="place-holder hide-in-viewmode" style="margin: 0px;">Go ahead and start typing...</p></div><div class="sc-hZaSAO eMgwyy" style="opacity: 1; position: unset;"><div id="tiny-react_60188326491657335269684" class="mce-content-body" contenteditable="true" style="position: relative;" spellcheck="false"><table style="border-collapse: collapse;" data-mce-style="border-collapse: collapse;" class="mce-item-table"><tbody><tr style="height: auto;" data-mce-style="height: auto;"><td class="tableField_TD" style="background-color: white; position: relative; width: 314.5px;" data-mce-style="background-color: white; position: relative; width: 314.5px;"><div class="tableField_Cell" style="text-align: center;" data-mce-style="text-align: center;"><strong>ACTION</strong></div></td><td class="tableField_TD" style="background-color: white; position: relative; width: 157.25px; text-align: center;" data-mce-style="background-color: white; position: relative; width: 157.25px; text-align: center;"><div class="tableField_Cell"><strong>ASSIGNED TO</strong></div></td><td style="background-color: white; position: relative; width: 157.25px; text-align: center;" data-mce-style="background-color: white; position: relative; width: 157.25px; text-align: center;"><div class="tableField_Cell"><strong>END DATE</strong></div></td></tr><tr style="height: auto; text-align: center;" data-mce-style="height: auto; text-align: center;"><td class="tableField_TD" style="background-color: white; position: relative; width: 314.5px;" data-mce-style="background-color: white; position: relative; width: 314.5px;"><div class="tableField_Cell">Hand out flyers and limited-time coupons for walk-in customers</div></td><td class="tableField_TD" style="background-color: white; position: relative; width: 157.25px;" data-mce-style="background-color: white; position: relative; width: 157.25px;"><div class="tableField_Cell">Rufus Dufus</div></td><td style="background-color: white; position: relative; width: 157.25px;" data-mce-style="background-color: white; position: relative; width: 157.25px;"><div class="tableField_Cell">Daily</div></td></tr><tr><td style="background-color: white; position: relative; width: 314.5px; text-align: center;" data-mce-style="background-color: white; position: relative; width: 314.5px; text-align: center;">Update social media accounts and post ads</td><td style="background-color: white; position: relative; width: 157.25px; text-align: center;" data-mce-style="background-color: white; position: relative; width: 157.25px; text-align: center;"><div class="tableField_Cell">Alfalfa Mohair</div></td><td style="background-color: white; position: relative; width: 157.25px;" data-mce-style="background-color: white; position: relative; width: 157.25px;"><div class="tableField_Cell" style="text-align: center;" data-mce-style="text-align: center;">Weekly</div></td></tr></tbody></table></div></div></div></div></div><div class="erd_scroll_detection_container erd_scroll_detection_container_animation_active" style="visibility: hidden; display: inline; width: 0px; height: 0px; z-index: -1; overflow: hidden; margin: 0px; padding: 0px;"><div dir="ltr" class="erd_scroll_detection_container" style="position: absolute; flex: 0 0 auto; overflow: hidden; z-index: -1; visibility: hidden; width: 100%; height: 100%; left: 0px; top: 0px;"><div class="erd_scroll_detection_container" style="position: absolute; flex: 0 0 auto; overflow: hidden; z-index: -1; visibility: hidden; inset: -7px -5px -6px -6px;"><div style="position: absolute; flex: 0 0 auto; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;"><div style="position: absolute; left: 0px; top: 0px; width: 821px; height: 163px;"></div></div><div style="position: absolute; flex: 0 0 auto; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;"><div style="position: absolute; width: 200%; height: 200%;"></div></div></div></div></div></div></div></div></div><div class="sc-gqUUDT iQraAw" style="max-width: 1024px;"><img src="https://docs.survivalapp.com/static/media/logo-branding.c5be7d2312c47457fc7bfbfa75fd54d1.svg" alt="logo-branding" class="sc-cyxtte jqgdiE"><div class="sc-evZas dlxkXD sc-dAKPfc krJiwq">Now create your own document- It's Free</div></div><div class="areaDrop hide-in-viewmode"></div><div class="erd_scroll_detection_container erd_scroll_detection_container_animation_active" style="visibility: hidden; display: inline; width: 0px; height: 0px; z-index: -1; overflow: hidden; margin: 0px; padding: 0px;"><div dir="ltr" class="erd_scroll_detection_container" style="position: absolute; flex: 0 0 auto; overflow: hidden; z-index: -1; visibility: hidden; width: 100%; height: 100%; left: 0px; top: 0px;"><div class="erd_scroll_detection_container" style="position: absolute; flex: 0 0 auto; overflow: hidden; z-index: -1; visibility: hidden; inset: -7px -5px -6px -6px;"><div style="position: absolute; flex: 0 0 auto; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;"><div style="position: absolute; left: 0px; top: 0px; width: 1045px; height: 1469px;"></div></div><div style="position: absolute; flex: 0 0 auto; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;"><div style="position: absolute; width: 200%; height: 200%;"></div></div></div></div></div></div></div></div><div class="page-break"></div><div class="blockWrapper paragraph" style="position: relative; max-width: 100%; width: 1024px; margin: 0px auto 4px; height: 1446px;"><div class="sc-jiGprZ kkGKpV blockContainerCoverPage" style="transform-origin: center top; transform: scale(1);"><div font-size="16" id="block-4" class="sc-KiOns fYSlFz block  blockStyle" font-family="Roboto, sans-serif" opacity="0.4" style="box-sizing: border-box; position: relative;"><div class="areaDropBackground-image"></div><div class="block blockContainer" data-block-uuid="763b8b2d-bf4e-4df7-8b5a-9ef6d9abb477"><div id="blockContainer-4" class="sc-klgPlp gfbeVB block-container ui-sortable"><div class="sc-dGHUoD ggOaNC PARAGRAPH false field " data-block-order="4" data-item-order="0" data-item-uuid="c6bfc4ad-ce69-443b-bd26-2547422b8e47" data-background="back-ground-image" style="width: 100%; vertical-align: top;"><div class="sc-drRqme dyASwu" style="display: block; position: relative;"><div class="sc-cVusLo fHRVtR 763b8b2d-bf4e-4df7-8b5a-9ef6d9abb477_c6bfc4ad-ce69-443b-bd26-2547422b8e47"><div class="sc-iVxNgP cIZvQk"><div id="paragraph-4-0" class="sc-eHAsqE gga-dzN editor-wrapper " font-size="16"><div class="tinymce-custom" style="position: relative;"><div style="display: none;"><p class="place-holder hide-in-viewmode" style="margin: 0px;">Go ahead and start typing...</p></div><div class="sc-hZaSAO eMgwyy" style="opacity: 1; position: unset;"><div id="tiny-react_808793090101657335269685" class="mce-content-body" contenteditable="true" style="position: relative;" spellcheck="false"><h2 style="text-align: left;" data-mce-style="text-align: left;">Team</h2></div></div></div></div><div data-styled-id="rCS19atnxs" class="moveable-control-box    rCS19atnxs" data-able-resizable="true" data-able-padding="true" style="position: absolute; display: none; transform: translate3d(0px, 0px, 0px); --zoom:1; --zoompx:1px;"><div class="moveable-control moveable-direction moveable-sw " data-rotation="45" data-direction="sw" style="transform: translateZ(0px) translate(0px, 0px) rotate(0rad) scale(1);"></div><div class="moveable-line moveable-direction " data-rotation="-1" data-line-index="0" data-direction="" style="transform: translateY(-50%) translate(0px, 0px) rotate(0rad) scaleY(1); width: 0px;"></div><div class="moveable-line moveable-direction " data-rotation="-1" data-line-index="1" data-direction="" style="transform: translateY(-50%) translate(0px, 0px) rotate(0rad) scaleY(1); width: 0px;"></div><div class="moveable-line moveable-direction " data-rotation="-1" data-line-index="2" data-direction="" style="transform: translateY(-50%) translate(0px, 0px) rotate(0rad) scaleY(1); width: 0px;"></div><div class="moveable-line moveable-direction " data-rotation="-1" data-line-index="3" data-direction="" style="transform: translateY(-50%) translate(0px, 0px) rotate(0rad) scaleY(1); width: 0px;"></div></div></div></div><div class="erd_scroll_detection_container erd_scroll_detection_container_animation_active" style="visibility: hidden; display: inline; width: 0px; height: 0px; z-index: -1; overflow: hidden; margin: 0px; padding: 0px;"><div dir="ltr" class="erd_scroll_detection_container" style="position: absolute; flex: 0 0 auto; overflow: hidden; z-index: -1; visibility: hidden; width: 100%; height: 100%; left: 0px; top: 0px;"><div class="erd_scroll_detection_container" style="position: absolute; flex: 0 0 auto; overflow: hidden; z-index: -1; visibility: hidden; inset: -7px -5px -6px -6px;"><div style="position: absolute; flex: 0 0 auto; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;"><div style="position: absolute; left: 0px; top: 0px; width: 821px; height: 100px;"></div></div><div style="position: absolute; flex: 0 0 auto; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;"><div style="position: absolute; width: 200%; height: 200%;"></div></div></div></div></div></div></div><div class="sc-dGHUoD knpTYa IMAGE false field " data-block-order="4" data-item-order="1" data-item-uuid="937da799-4341-48a1-99de-88d2a03b8925" data-background="back-ground-image" style="width: 100%; vertical-align: top;"><div class="sc-drRqme dyASwu" style="display: flex; position: relative;"><div class="sc-cVusLo fHRVtR"><div class="sc-mGooh vAnsL image-dropzone-4-1"><div class="sc-kgblez dFFDVM"><div class="sc-bELNXw bViisf" style="width: 250px; height: auto;"><div id="resizable-4-1" class="btnMoveField" style="width: 100%; height: 100%;"><div style="width: 250px; height: auto;"><a href="javascript:void(0)"><img alt="img" crossOrigin="Anonymous" src="https://msapi.survivalapp.com/image/resize?image=proposal/images/771aef3b-fd63-4fe6-94d4-393ef4e656d7.jpeg&amp;width=250" draggable="false" class="sc-lbeWMy dQYyYb"></a></div></div></div></div></div></div><div class="erd_scroll_detection_container erd_scroll_detection_container_animation_active" style="visibility: hidden; display: inline; width: 0px; height: 0px; z-index: -1; overflow: hidden; margin: 0px; padding: 0px;"><div dir="ltr" class="erd_scroll_detection_container" style="position: absolute; flex: 0 0 auto; overflow: hidden; z-index: -1; visibility: hidden; width: 100%; height: 100%; left: 0px; top: 0px;"><div class="erd_scroll_detection_container" style="position: absolute; flex: 0 0 auto; overflow: hidden; z-index: -1; visibility: hidden; inset: -7px -5px -6px -6px;"><div style="position: absolute; flex: 0 0 auto; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;"><div style="position: absolute; left: 0px; top: 0px; width: 821px; height: 213px;"></div></div><div style="position: absolute; flex: 0 0 auto; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;"><div style="position: absolute; width: 200%; height: 200%;"></div></div></div></div></div></div></div><div class="sc-dGHUoD ggOaNC PARAGRAPH false field " data-block-order="4" data-item-order="2" data-item-uuid="efd217cb-12c2-456d-acf9-1cee479494dc" data-background="back-ground-image" style="width: 100%; vertical-align: top;"><div class="sc-drRqme dyASwu" style="display: block; position: relative;"><div class="sc-cVusLo fHRVtR 763b8b2d-bf4e-4df7-8b5a-9ef6d9abb477_efd217cb-12c2-456d-acf9-1cee479494dc"><div class="sc-iVxNgP cIZvQk"><div id="paragraph-4-2" class="sc-eHAsqE gga-dzN editor-wrapper " font-size="16"><div class="tinymce-custom" style="position: relative;"><div style="display: none;"><p class="place-holder hide-in-viewmode" style="margin: 0px;">Go ahead and start typing...</p></div><div class="sc-hZaSAO eMgwyy" style="opacity: 1; position: unset;"><div id="tiny-react_843053640111657335269687" class="mce-content-body" contenteditable="true" style="position: relative;" spellcheck="false"><p><strong>Rufus Dufus</strong></p><p><em><strong>Marke</strong></em><em><strong>ting Officer</strong></em></p><p><br></p></div></div></div></div><div data-styled-id="rCS19atnxs" class="moveable-control-box    rCS19atnxs" data-able-resizable="true" data-able-padding="true" style="position: absolute; display: none; transform: translate3d(0px, 0px, 0px); --zoom:1; --zoompx:1px;"><div class="moveable-control moveable-direction moveable-sw " data-rotation="45" data-direction="sw" style="transform: translateZ(0px) translate(0px, 0px) rotate(0rad) scale(1);"></div><div class="moveable-line moveable-direction " data-rotation="-1" data-line-index="0" data-direction="" style="transform: translateY(-50%) translate(0px, 0px) rotate(0rad) scaleY(1); width: 0px;"></div><div class="moveable-line moveable-direction " data-rotation="-1" data-line-index="1" data-direction="" style="transform: translateY(-50%) translate(0px, 0px) rotate(0rad) scaleY(1); width: 0px;"></div><div class="moveable-line moveable-direction " data-rotation="-1" data-line-index="2" data-direction="" style="transform: translateY(-50%) translate(0px, 0px) rotate(0rad) scaleY(1); width: 0px;"></div><div class="moveable-line moveable-direction " data-rotation="-1" data-line-index="3" data-direction="" style="transform: translateY(-50%) translate(0px, 0px) rotate(0rad) scaleY(1); width: 0px;"></div></div></div></div><div class="erd_scroll_detection_container erd_scroll_detection_container_animation_active" style="visibility: hidden; display: inline; width: 0px; height: 0px; z-index: -1; overflow: hidden; margin: 0px; padding: 0px;"><div dir="ltr" class="erd_scroll_detection_container" style="position: absolute; flex: 0 0 auto; overflow: hidden; z-index: -1; visibility: hidden; width: 100%; height: 100%; left: 0px; top: 0px;"><div class="erd_scroll_detection_container" style="position: absolute; flex: 0 0 auto; overflow: hidden; z-index: -1; visibility: hidden; inset: -7px -5px -6px -6px;"><div style="position: absolute; flex: 0 0 auto; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;"><div style="position: absolute; left: 0px; top: 0px; width: 821px; height: 98px;"></div></div><div style="position: absolute; flex: 0 0 auto; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;"><div style="position: absolute; width: 200%; height: 200%;"></div></div></div></div></div></div></div><div class="sc-dGHUoD ggOaNC IMAGE false field " data-block-order="4" data-item-order="3" data-item-uuid="db5a2820-ed03-4b79-8df0-a0ce54daa869" data-background="back-ground-image" style="width: 100%; vertical-align: top;"><div class="sc-drRqme dyASwu" style="display: flex; position: relative;"><div class="sc-cVusLo fHRVtR"><div class="sc-mGooh vAnsL image-dropzone-4-3"><div class="sc-kgblez dFFDVM"><div class="sc-bELNXw bViisf" style="width: 250px; height: auto;"><div id="resizable-4-3" class="btnMoveField" style="width: 100%; height: 100%;"><div style="width: 250px; height: auto;"><a href="javascript:void(0)"><img alt="img" crossOrigin="Anonymous" src="https://msapi.survivalapp.com/image/resize?image=proposal/images/4fc1eaed-81ca-40ff-b30e-7938eab3e906.jpeg&amp;width=250" draggable="false" class="sc-lbeWMy dQYyYb"></a></div></div></div></div></div></div><div class="erd_scroll_detection_container erd_scroll_detection_container_animation_active" style="visibility: hidden; display: inline; width: 0px; height: 0px; z-index: -1; overflow: hidden; margin: 0px; padding: 0px;"><div dir="ltr" class="erd_scroll_detection_container" style="position: absolute; flex: 0 0 auto; overflow: hidden; z-index: -1; visibility: hidden; width: 100%; height: 100%; left: 0px; top: 0px;"><div class="erd_scroll_detection_container" style="position: absolute; flex: 0 0 auto; overflow: hidden; z-index: -1; visibility: hidden; inset: -7px -5px -6px -6px;"><div style="position: absolute; flex: 0 0 auto; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;"><div style="position: absolute; left: 0px; top: 0px; width: 821px; height: 214px;"></div></div><div style="position: absolute; flex: 0 0 auto; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;"><div style="position: absolute; width: 200%; height: 200%;"></div></div></div></div></div></div></div><div class="sc-dGHUoD knpVUq PARAGRAPH last-field field " data-block-order="4" data-item-order="4" data-item-uuid="3cd945ad-529a-4230-ab03-586f7727b421" data-background="back-ground-image" style="width: 100%; vertical-align: top;"><div class="sc-drRqme dyASwu" style="display: block; position: relative;"><div class="sc-cVusLo fHRVtR 763b8b2d-bf4e-4df7-8b5a-9ef6d9abb477_3cd945ad-529a-4230-ab03-586f7727b421"><div class="sc-iVxNgP cIZvQk"><div id="paragraph-4-4" class="sc-eHAsqE gga-dzN editor-wrapper " font-size="16"><div class="tinymce-custom" style="position: relative;"><div style="display: none;"><p class="place-holder hide-in-viewmode" style="margin: 0px;">Go ahead and start typing...</p></div><div class="sc-hZaSAO eMgwyy" style="opacity: 1; position: unset;"><div id="tiny-react_665656888121657335269689" class="mce-content-body" contenteditable="true" style="position: relative;" spellcheck="false"><p><strong>Alfalfa Mohair</strong></p><p><em><strong>Sales &amp; </strong></em><em><strong>Marketing Manager</strong></em></p></div></div></div></div><div data-styled-id="rCS19atnxs" class="moveable-control-box    rCS19atnxs" data-able-resizable="true" data-able-padding="true" style="position: absolute; display: none; transform: translate3d(0px, 0px, 0px); --zoom:1; --zoompx:1px;"><div class="moveable-control moveable-direction moveable-sw " data-rotation="45" data-direction="sw" style="transform: translateZ(0px) translate(0px, 0px) rotate(0rad) scale(1);"></div><div class="moveable-line moveable-direction " data-rotation="-1" data-line-index="0" data-direction="" style="transform: translateY(-50%) translate(0px, 0px) rotate(0rad) scaleY(1); width: 0px;"></div><div class="moveable-line moveable-direction " data-rotation="-1" data-line-index="1" data-direction="" style="transform: translateY(-50%) translate(0px, 0px) rotate(0rad) scaleY(1); width: 0px;"></div><div class="moveable-line moveable-direction " data-rotation="-1" data-line-index="2" data-direction="" style="transform: translateY(-50%) translate(0px, 0px) rotate(0rad) scaleY(1); width: 0px;"></div><div class="moveable-line moveable-direction " data-rotation="-1" data-line-index="3" data-direction="" style="transform: translateY(-50%) translate(0px, 0px) rotate(0rad) scaleY(1); width: 0px;"></div></div></div></div><div class="erd_scroll_detection_container erd_scroll_detection_container_animation_active" style="visibility: hidden; display: inline; width: 0px; height: 0px; z-index: -1; overflow: hidden; margin: 0px; padding: 0px;"><div dir="ltr" class="erd_scroll_detection_container" style="position: absolute; flex: 0 0 auto; overflow: hidden; z-index: -1; visibility: hidden; width: 100%; height: 100%; left: 0px; top: 0px;"><div class="erd_scroll_detection_container" style="position: absolute; flex: 0 0 auto; overflow: hidden; z-index: -1; visibility: hidden; inset: -7px -5px -6px -6px;"><div style="position: absolute; flex: 0 0 auto; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;"><div style="position: absolute; left: 0px; top: 0px; width: 821px; height: 73px;"></div></div><div style="position: absolute; flex: 0 0 auto; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;"><div style="position: absolute; width: 200%; height: 200%;"></div></div></div></div></div></div></div></div></div><div class="sc-gqUUDT iQraAw" style="max-width: 1024px;"><img src="https://docs.survivalapp.com/static/media/logo-branding.c5be7d2312c47457fc7bfbfa75fd54d1.svg" alt="logo-branding" class="sc-cyxtte jqgdiE"><div class="sc-evZas dlxkXD sc-dAKPfc krJiwq">Now create your own document- It's Free</div></div><div class="areaDrop hide-in-viewmode"></div><div class="erd_scroll_detection_container erd_scroll_detection_container_animation_active" style="visibility: hidden; display: inline; width: 0px; height: 0px; z-index: -1; overflow: hidden; margin: 0px; padding: 0px;"><div dir="ltr" class="erd_scroll_detection_container" style="position: absolute; flex: 0 0 auto; overflow: hidden; z-index: -1; visibility: hidden; width: 100%; height: 100%; left: 0px; top: 0px;"><div class="erd_scroll_detection_container" style="position: absolute; flex: 0 0 auto; overflow: hidden; z-index: -1; visibility: hidden; inset: -7px -5px -6px -6px;"><div style="position: absolute; flex: 0 0 auto; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;"><div style="position: absolute; left: 0px; top: 0px; width: 1045px; height: 1469px;"></div></div><div style="position: absolute; flex: 0 0 auto; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;"><div style="position: absolute; width: 200%; height: 200%;"></div></div></div></div></div></div></div></div><div class="page-break"></div><div class="blockWrapper paragraph" style="position: relative; max-width: 100%; width: 1024px; margin: 0px auto 4px; height: 1446px;"><div class="sc-jiGprZ kkGKpV blockContainerCoverPage" style="transform-origin: center top; transform: scale(1);"><div font-size="16" id="block-5" class="sc-KiOns hhIdFy block  blockStyle" font-family="Roboto, sans-serif" opacity="0.4" style="box-sizing: border-box; position: relative;"><div class="areaDropBackground-image"></div><div class="block blockContainer" data-block-uuid="a12f57f4-94ac-4200-a881-4e7539be1752"><div id="blockContainer-5" class="sc-klgPlp gfbeVB block-container ui-sortable"><div class="sc-dGHUoD ggOaNC PARAGRAPH false field " data-block-order="5" data-item-order="0" data-item-uuid="4ded96a5-9dbb-4741-8037-ba4d5d1fc0bf" data-background="back-ground-image" style="width: 100%; vertical-align: top;"><div class="sc-drRqme cBoHJr" style="display: block; position: relative;"><div class="sc-cVusLo fHRVtR a12f57f4-94ac-4200-a881-4e7539be1752_4ded96a5-9dbb-4741-8037-ba4d5d1fc0bf"><div class="sc-iVxNgP cIZvQk"><div id="paragraph-5-0" class="sc-eHAsqE gga-dzN editor-wrapper " font-size="16"><div class="tinymce-custom" style="position: relative;"><div style="display: none;"><p class="place-holder hide-in-viewmode" style="margin: 0px;">Go ahead and start typing...</p></div><div class="sc-hZaSAO eMgwyy" style="opacity: 1; position: unset;"><div id="tiny-react_56235009131657335269690" class="mce-content-body" contenteditable="true" style="position: relative;" spellcheck="false"><h2>Projected Startup Costs</h2></div></div></div></div><div data-styled-id="rCS19atnxs" class="moveable-control-box    rCS19atnxs" data-able-resizable="true" data-able-padding="true" style="position: absolute; display: none; transform: translate3d(0px, 0px, 0px); --zoom:1; --zoompx:1px;"><div class="moveable-control moveable-direction moveable-sw " data-rotation="45" data-direction="sw" style="transform: translateZ(0px) translate(0px, 0px) rotate(0rad) scale(1);"></div><div class="moveable-line moveable-direction " data-rotation="-1" data-line-index="0" data-direction="" style="transform: translateY(-50%) translate(0px, 0px) rotate(0rad) scaleY(1); width: 0px;"></div><div class="moveable-line moveable-direction " data-rotation="-1" data-line-index="1" data-direction="" style="transform: translateY(-50%) translate(0px, 0px) rotate(0rad) scaleY(1); width: 0px;"></div><div class="moveable-line moveable-direction " data-rotation="-1" data-line-index="2" data-direction="" style="transform: translateY(-50%) translate(0px, 0px) rotate(0rad) scaleY(1); width: 0px;"></div><div class="moveable-line moveable-direction " data-rotation="-1" data-line-index="3" data-direction="" style="transform: translateY(-50%) translate(0px, 0px) rotate(0rad) scaleY(1); width: 0px;"></div></div></div></div><div class="erd_scroll_detection_container erd_scroll_detection_container_animation_active" style="visibility: hidden; display: inline; width: 0px; height: 0px; z-index: -1; overflow: hidden; margin: 0px; padding: 0px;"><div dir="ltr" class="erd_scroll_detection_container" style="position: absolute; flex: 0 0 auto; overflow: hidden; z-index: -1; visibility: hidden; width: 100%; height: 100%; left: 0px; top: 0px;"><div class="erd_scroll_detection_container" style="position: absolute; flex: 0 0 auto; overflow: hidden; z-index: -1; visibility: hidden; inset: -7px -5px -6px -6px;"><div style="position: absolute; flex: 0 0 auto; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;"><div style="position: absolute; left: 0px; top: 0px; width: 821px; height: 100px;"></div></div><div style="position: absolute; flex: 0 0 auto; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;"><div style="position: absolute; width: 200%; height: 200%;"></div></div></div></div></div></div></div><div class="sc-dGHUoD ggOaNC TABLE false field " data-block-order="5" data-item-order="1" data-item-uuid="bbdd4a45-0748-4c6f-a35b-f7a4ccfab056" data-background="back-ground-image" style="width: 100%; vertical-align: top;"><div class="sc-drRqme cBoHJr" style="display: block; position: relative;"><div class="sc-cVusLo fHRVtR" id="table-5-1"><div font-size="16" class="sc-iAkJRg fUzbHM"><div class="tinymce-custom" style="position: relative;"><div style="display: none;"><p class="place-holder hide-in-viewmode" style="margin: 0px;">Go ahead and start typing...</p></div><div class="sc-hZaSAO eMgwyy" style="opacity: 1; position: unset;"><div id="tiny-react_244731975141657335269691" class="mce-content-body" contenteditable="true" style="position: relative;" spellcheck="false"><table style="border-collapse: collapse;" data-mce-style="border-collapse: collapse;" class="mce-item-table"><tbody><tr style="height: auto;" data-mce-style="height: auto;"><td class="tableField_TD" style="background-color: white; position: relative; width: 314.5px;" data-mce-style="background-color: white; position: relative; width: 314.5px;"><div class="tableField_Cell" style="text-align: center;" data-mce-style="text-align: center;"><strong>DESCRIPTION</strong></div></td><td class="tableField_TD" style="background-color: white; position: relative; width: 157.25px; text-align: center;" data-mce-style="background-color: white; position: relative; width: 157.25px; text-align: center;"><div class="tableField_Cell"><strong>AMOUNT</strong></div></td><td style="background-color: white; position: relative; width: 157.25px;" data-mce-style="background-color: white; position: relative; width: 157.25px;"><div class="tableField_Cell" style="text-align: center;" data-mce-style="text-align: center;"><strong>PERCENTAGE</strong></div></td></tr><tr style="height: auto;" data-mce-style="height: auto;"><td class="tableField_TD" style="background-color: white; position: relative; width: 314.5px;" data-mce-style="background-color: white; position: relative; width: 314.5px;"><div class="tableField_Cell"><p>Land Property</p><p>(80,560 sq.ft.)</p></div></td><td class="tableField_TD" style="background-color: white; position: relative; width: 157.25px;" data-mce-style="background-color: white; position: relative; width: 157.25px;"><div class="tableField_Cell" style="text-align: center;" data-mce-style="text-align: center;">$975,000.00</div></td><td style="background-color: white; position: relative; width: 157.25px;" data-mce-style="background-color: white; position: relative; width: 157.25px;"><div class="tableField_Cell" style="text-align: center;" data-mce-style="text-align: center;">39%</div></td></tr><tr><td style="background-color: white; position: relative; width: 314.5px;" data-mce-style="background-color: white; position: relative; width: 314.5px;">Licenses and Permits</td><td style="background-color: white; position: relative; width: 157.25px;" data-mce-style="background-color: white; position: relative; width: 157.25px;"><div class="tableField_Cell" style="text-align: center;" data-mce-style="text-align: center;">$140,750.00</div></td><td style="background-color: white; position: relative; width: 157.25px;" data-mce-style="background-color: white; position: relative; width: 157.25px;"><div class="tableField_Cell" style="text-align: center;" data-mce-style="text-align: center;">5.63%</div></td></tr><tr><td style="background-color: white; position: relative; width: 314.5px;" data-mce-style="background-color: white; position: relative; width: 314.5px;">Equipment and Facilities</td><td style="background-color: white; position: relative; width: 157.25px;" data-mce-style="background-color: white; position: relative; width: 157.25px;"><div class="tableField_Cell" style="text-align: center;" data-mce-style="text-align: center;">$1,050,000.00</div></td><td style="background-color: white; position: relative; width: 157.25px;" data-mce-style="background-color: white; position: relative; width: 157.25px;"><div class="tableField_Cell" style="text-align: center;" data-mce-style="text-align: center;">42%</div></td></tr><tr><td style="background-color: white; position: relative; width: 314.5px;" data-mce-style="background-color: white; position: relative; width: 314.5px;">Other Expenses</td><td style="background-color: white; position: relative; width: 157.25px;" data-mce-style="background-color: white; position: relative; width: 157.25px;"><div class="tableField_Cell" style="text-align: center;" data-mce-style="text-align: center;">$334,250.00</div></td><td style="background-color: white; position: relative; width: 157.25px;" data-mce-style="background-color: white; position: relative; width: 157.25px;"><div class="tableField_Cell" style="text-align: center;" data-mce-style="text-align: center;">13.37%</div></td></tr><tr><td style="background-color: white; position: relative; width: 314.5px;" data-mce-style="background-color: white; position: relative; width: 314.5px;">Startup Fund Available</td><td style="background-color: white; position: relative; width: 157.25px;" data-mce-style="background-color: white; position: relative; width: 157.25px;"><div class="tableField_Cell" style="text-align: center;" data-mce-style="text-align: center;">$0.00</div></td><td style="background-color: white; position: relative; width: 157.25px;" data-mce-style="background-color: white; position: relative; width: 157.25px;"><div class="tableField_Cell" style="text-align: center;" data-mce-style="text-align: center;">0%</div></td></tr><tr><td style="background-color: white; position: relative; width: 314.5px;" data-mce-style="background-color: white; position: relative; width: 314.5px;"><strong>Total Startup Costs</strong></td><td style="background-color: white; position: relative; width: 157.25px;" data-mce-style="background-color: white; position: relative; width: 157.25px;"><div class="tableField_Cell" style="text-align: center;" data-mce-style="text-align: center;"><strong>$2,500,000.00</strong></div></td><td style="background-color: white; position: relative; width: 157.25px;" data-mce-style="background-color: white; position: relative; width: 157.25px;"><div class="tableField_Cell" style="text-align: center;" data-mce-style="text-align: center;"><strong>100%</strong></div></td></tr></tbody></table></div></div></div></div></div><div class="erd_scroll_detection_container erd_scroll_detection_container_animation_active" style="visibility: hidden; display: inline; width: 0px; height: 0px; z-index: -1; overflow: hidden; margin: 0px; padding: 0px;"><div dir="ltr" class="erd_scroll_detection_container" style="position: absolute; flex: 0 0 auto; overflow: hidden; z-index: -1; visibility: hidden; width: 100%; height: 100%; left: 0px; top: 0px;"><div class="erd_scroll_detection_container" style="position: absolute; flex: 0 0 auto; overflow: hidden; z-index: -1; visibility: hidden; inset: -7px -5px -6px -6px;"><div style="position: absolute; flex: 0 0 auto; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;"><div style="position: absolute; left: 0px; top: 0px; width: 821px; height: 308px;"></div></div><div style="position: absolute; flex: 0 0 auto; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;"><div style="position: absolute; width: 200%; height: 200%;"></div></div></div></div></div></div></div><div class="sc-dGHUoD knpVUq PARAGRAPH false field " data-block-order="5" data-item-order="2" data-item-uuid="27fd2181-e51f-4ac6-86f1-044db53f79ea" data-background="back-ground-image" style="width: 100%; vertical-align: top;"><div class="sc-drRqme cBoHJr" style="display: block; position: relative;"><div class="sc-cVusLo fHRVtR a12f57f4-94ac-4200-a881-4e7539be1752_27fd2181-e51f-4ac6-86f1-044db53f79ea"><div class="sc-iVxNgP cIZvQk"><div id="paragraph-5-2" class="sc-eHAsqE gga-dzN editor-wrapper " font-size="16"><div class="tinymce-custom" style="position: relative;"><div style="display: none;"><p class="place-holder hide-in-viewmode" style="margin: 0px;">Go ahead and start typing...</p></div><div class="sc-hZaSAO eMgwyy" style="opacity: 1; position: unset;"><div id="tiny-react_61972885151657335269691" class="mce-content-body" contenteditable="true" style="position: relative;" spellcheck="false"><h2>Projected Profit &amp; Loss Statement</h2></div></div></div></div><div data-styled-id="rCS19atnxs" class="moveable-control-box    rCS19atnxs" data-able-resizable="true" data-able-padding="true" style="position: absolute; display: none; transform: translate3d(0px, 0px, 0px); --zoom:1; --zoompx:1px;"><div class="moveable-control moveable-direction moveable-sw " data-rotation="45" data-direction="sw" style="transform: translateZ(0px) translate(0px, 0px) rotate(0rad) scale(1);"></div><div class="moveable-line moveable-direction " data-rotation="-1" data-line-index="0" data-direction="" style="transform: translateY(-50%) translate(0px, 0px) rotate(0rad) scaleY(1); width: 0px;"></div><div class="moveable-line moveable-direction " data-rotation="-1" data-line-index="1" data-direction="" style="transform: translateY(-50%) translate(0px, 0px) rotate(0rad) scaleY(1); width: 0px;"></div><div class="moveable-line moveable-direction " data-rotation="-1" data-line-index="2" data-direction="" style="transform: translateY(-50%) translate(0px, 0px) rotate(0rad) scaleY(1); width: 0px;"></div><div class="moveable-line moveable-direction " data-rotation="-1" data-line-index="3" data-direction="" style="transform: translateY(-50%) translate(0px, 0px) rotate(0rad) scaleY(1); width: 0px;"></div></div></div></div><div class="erd_scroll_detection_container erd_scroll_detection_container_animation_active" style="visibility: hidden; display: inline; width: 0px; height: 0px; z-index: -1; overflow: hidden; margin: 0px; padding: 0px;"><div dir="ltr" class="erd_scroll_detection_container" style="position: absolute; flex: 0 0 auto; overflow: hidden; z-index: -1; visibility: hidden; width: 100%; height: 100%; left: 0px; top: 0px;"><div class="erd_scroll_detection_container" style="position: absolute; flex: 0 0 auto; overflow: hidden; z-index: -1; visibility: hidden; inset: -7px -5px -6px -6px;"><div style="position: absolute; flex: 0 0 auto; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;"><div style="position: absolute; left: 0px; top: 0px; width: 821px; height: 126px;"></div></div><div style="position: absolute; flex: 0 0 auto; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;"><div style="position: absolute; width: 200%; height: 200%;"></div></div></div></div></div></div></div><div class="sc-dGHUoD ggOaNC TABLE last-field field " data-block-order="5" data-item-order="3" data-item-uuid="4461bca8-a75c-4be0-a3c9-ee26fe41ec90" data-background="back-ground-image" style="width: 100%; vertical-align: top;"><div class="sc-drRqme cBoHJr" style="display: block; position: relative;"><div class="sc-cVusLo fHRVtR" id="table-5-3"><div font-size="16" class="sc-iAkJRg fUzbHM"><div class="tinymce-custom" style="position: relative;"><div style="display: none;"><p class="place-holder hide-in-viewmode" style="margin: 0px;">Go ahead and start typing...</p></div><div class="sc-hZaSAO eMgwyy" style="opacity: 1; position: unset;"><div id="tiny-react_614593347161657335269692" class="mce-content-body" contenteditable="true" style="position: relative;" spellcheck="false"><table style="border-collapse: collapse;" data-mce-style="border-collapse: collapse;" class="mce-item-table"><tbody><tr style="height: auto;" data-mce-style="height: auto;"><td class="tableField_TD" style="background-color: white; position: relative; width: 314.5px;" data-mce-style="background-color: white; position: relative; width: 314.5px;"><div class="tableField_Cell" style="text-align: center;" data-mce-style="text-align: center;"><strong>DESCRIPTION</strong></div></td><td class="tableField_TD" style="background-color: white; position: relative; width: 157.25px; text-align: center;" data-mce-style="background-color: white; position: relative; width: 157.25px; text-align: center;"><div class="tableField_Cell"><strong>YEAR 1</strong></div></td><td style="background-color: white; position: relative; width: 157.25px;" data-mce-style="background-color: white; position: relative; width: 157.25px;"><div class="tableField_Cell" style="text-align: center;" data-mce-style="text-align: center;"><strong>YEAR 2</strong></div></td></tr><tr style="height: auto;" data-mce-style="height: auto;"><td class="tableField_TD" style="background-color: white; position: relative; width: 314.5px;" data-mce-style="background-color: white; position: relative; width: 314.5px;"><div class="tableField_Cell">Sales</div></td><td class="tableField_TD" style="background-color: white; position: relative; width: 157.25px;" data-mce-style="background-color: white; position: relative; width: 157.25px;"><div class="tableField_Cell" style="text-align: center;" data-mce-style="text-align: center;">$3,600,000.00</div></td><td style="background-color: white; position: relative; width: 157.25px;" data-mce-style="background-color: white; position: relative; width: 157.25px;"><div class="tableField_Cell" style="text-align: center;" data-mce-style="text-align: center;">$4,000,000.00</div></td></tr><tr><td style="background-color: white; position: relative; width: 314.5px;" data-mce-style="background-color: white; position: relative; width: 314.5px;">Cost of Sales</td><td style="background-color: white; position: relative; width: 157.25px;" data-mce-style="background-color: white; position: relative; width: 157.25px;"><div class="tableField_Cell" style="text-align: center;" data-mce-style="text-align: center;">$2,050,000.00</div></td><td style="background-color: white; position: relative; width: 157.25px;" data-mce-style="background-color: white; position: relative; width: 157.25px;"><div class="tableField_Cell" style="text-align: center;" data-mce-style="text-align: center;">$2,250,000.00</div></td></tr><tr><td style="background-color: white; position: relative; width: 314.5px;" data-mce-style="background-color: white; position: relative; width: 314.5px;">Gross Profit</td><td style="background-color: white; position: relative; width: 157.25px;" data-mce-style="background-color: white; position: relative; width: 157.25px;"><div class="tableField_Cell" style="text-align: center;" data-mce-style="text-align: center;">$1,550,000.00</div></td><td style="background-color: white; position: relative; width: 157.25px;" data-mce-style="background-color: white; position: relative; width: 157.25px;"><div class="tableField_Cell" style="text-align: center;" data-mce-style="text-align: center;">$1,750,000.00</div></td></tr><tr><td style="background-color: white; position: relative; width: 314.5px;" data-mce-style="background-color: white; position: relative; width: 314.5px;">Total Expenses</td><td style="background-color: white; position: relative; width: 157.25px;" data-mce-style="background-color: white; position: relative; width: 157.25px;"><div class="tableField_Cell" style="text-align: center;" data-mce-style="text-align: center;">$1,496,100.00</div></td><td style="background-color: white; position: relative; width: 157.25px;" data-mce-style="background-color: white; position: relative; width: 157.25px;"><div class="tableField_Cell" style="text-align: center;" data-mce-style="text-align: center;">$1,601,000.00</div></td></tr><tr><td style="background-color: white; position: relative; width: 314.5px;" data-mce-style="background-color: white; position: relative; width: 314.5px;"><strong>Net Profit (Loss)</strong></td><td style="background-color: white; position: relative; width: 157.25px;" data-mce-style="background-color: white; position: relative; width: 157.25px;"><div class="tableField_Cell" style="text-align: center;" data-mce-style="text-align: center;"><strong>$53,900.00</strong></div></td><td style="background-color: white; position: relative; width: 157.25px;" data-mce-style="background-color: white; position: relative; width: 157.25px;"><div class="tableField_Cell" style="text-align: center;" data-mce-style="text-align: center;"><strong>$149,000.00</strong></div></td></tr></tbody></table></div></div></div></div></div><div class="erd_scroll_detection_container erd_scroll_detection_container_animation_active" style="visibility: hidden; display: inline; width: 0px; height: 0px; z-index: -1; overflow: hidden; margin: 0px; padding: 0px;"><div dir="ltr" class="erd_scroll_detection_container" style="position: absolute; flex: 0 0 auto; overflow: hidden; z-index: -1; visibility: hidden; width: 100%; height: 100%; left: 0px; top: 0px;"><div class="erd_scroll_detection_container" style="position: absolute; flex: 0 0 auto; overflow: hidden; z-index: -1; visibility: hidden; inset: -7px -5px -6px -6px;"><div style="position: absolute; flex: 0 0 auto; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;"><div style="position: absolute; left: 0px; top: 0px; width: 821px; height: 247px;"></div></div><div style="position: absolute; flex: 0 0 auto; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;"><div style="position: absolute; width: 200%; height: 200%;"></div></div></div></div></div></div></div></div></div><div class="sc-gqUUDT iQraAw" style="max-width: 1024px;"><img src="https://docs.survivalapp.com/static/media/logo-branding.c5be7d2312c47457fc7bfbfa75fd54d1.svg" alt="logo-branding" class="sc-cyxtte jqgdiE"><div class="sc-evZas dlxkXD sc-dAKPfc krJiwq">Now create your own document- It's Free</div></div><div class="areaDrop hide-in-viewmode"></div><div class="erd_scroll_detection_container erd_scroll_detection_container_animation_active" style="visibility: hidden; display: inline; width: 0px; height: 0px; z-index: -1; overflow: hidden; margin: 0px; padding: 0px;"><div dir="ltr" class="erd_scroll_detection_container" style="position: absolute; flex: 0 0 auto; overflow: hidden; z-index: -1; visibility: hidden; width: 100%; height: 100%; left: 0px; top: 0px;"><div class="erd_scroll_detection_container" style="position: absolute; flex: 0 0 auto; overflow: hidden; z-index: -1; visibility: hidden; inset: -7px -5px -6px -6px;"><div style="position: absolute; flex: 0 0 auto; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;"><div style="position: absolute; left: 0px; top: 0px; width: 1045px; height: 1469px;"></div></div><div style="position: absolute; flex: 0 0 auto; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;"><div style="position: absolute; width: 200%; height: 200%;"></div></div></div></div></div></div></div></div><div class="page-break"></div><div class="blockWrapper paragraph" style="position: relative; max-width: 100%; width: 1024px; margin: 0px auto 4px; height: 1446px;"><div class="sc-jiGprZ kkGKpV blockContainerCoverPage" style="transform-origin: center top; transform: scale(1);"><div font-size="16" id="block-6" class="sc-KiOns hhIdFy block  blockStyle" font-family="Roboto, sans-serif" opacity="0.4" style="box-sizing: border-box; position: relative;"><div class="areaDropBackground-image"></div><div class="block blockContainer" data-block-uuid="950661ba-5917-4fdd-8754-9658bd411fb9"><div id="blockContainer-6" class="sc-klgPlp gfbeVB block-container ui-sortable"><div class="sc-dGHUoD ggOaNC PARAGRAPH false field " data-block-order="6" data-item-order="0" data-item-uuid="847dbee7-f070-4df7-99cd-09c384707458" data-background="back-ground-image" style="width: 100%; vertical-align: top;"><div class="sc-drRqme cBoHJr" style="display: block; position: relative;"><div class="sc-cVusLo fHRVtR 950661ba-5917-4fdd-8754-9658bd411fb9_847dbee7-f070-4df7-99cd-09c384707458"><div class="sc-iVxNgP cIZvQk"><div id="paragraph-6-0" class="sc-eHAsqE gga-dzN editor-wrapper " font-size="16"><div class="tinymce-custom" style="position: relative;"><div style="display: none;"><p class="place-holder hide-in-viewmode" style="margin: 0px;">Go ahead and start typing...</p></div><div class="sc-hZaSAO eMgwyy" style="opacity: 1; position: unset;"><div id="tiny-react_472423185171657335269692" class="mce-content-body" contenteditable="true" style="position: relative;" spellcheck="false"><h2>Projected Balance Sheet</h2></div></div></div></div><div data-styled-id="rCS19atnxs" class="moveable-control-box    rCS19atnxs" data-able-resizable="true" data-able-padding="true" style="position: absolute; display: none; transform: translate3d(0px, 0px, 0px); --zoom:1; --zoompx:1px;"><div class="moveable-control moveable-direction moveable-sw " data-rotation="45" data-direction="sw" style="transform: translateZ(0px) translate(0px, 0px) rotate(0rad) scale(1);"></div><div class="moveable-line moveable-direction " data-rotation="-1" data-line-index="0" data-direction="" style="transform: translateY(-50%) translate(0px, 0px) rotate(0rad) scaleY(1); width: 0px;"></div><div class="moveable-line moveable-direction " data-rotation="-1" data-line-index="1" data-direction="" style="transform: translateY(-50%) translate(0px, 0px) rotate(0rad) scaleY(1); width: 0px;"></div><div class="moveable-line moveable-direction " data-rotation="-1" data-line-index="2" data-direction="" style="transform: translateY(-50%) translate(0px, 0px) rotate(0rad) scaleY(1); width: 0px;"></div><div class="moveable-line moveable-direction " data-rotation="-1" data-line-index="3" data-direction="" style="transform: translateY(-50%) translate(0px, 0px) rotate(0rad) scaleY(1); width: 0px;"></div></div></div></div><div class="erd_scroll_detection_container erd_scroll_detection_container_animation_active" style="visibility: hidden; display: inline; width: 0px; height: 0px; z-index: -1; overflow: hidden; margin: 0px; padding: 0px;"><div dir="ltr" class="erd_scroll_detection_container" style="position: absolute; flex: 0 0 auto; overflow: hidden; z-index: -1; visibility: hidden; width: 100%; height: 100%; left: 0px; top: 0px;"><div class="erd_scroll_detection_container" style="position: absolute; flex: 0 0 auto; overflow: hidden; z-index: -1; visibility: hidden; inset: -7px -5px -6px -6px;"><div style="position: absolute; flex: 0 0 auto; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;"><div style="position: absolute; left: 0px; top: 0px; width: 821px; height: 100px;"></div></div><div style="position: absolute; flex: 0 0 auto; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;"><div style="position: absolute; width: 200%; height: 200%;"></div></div></div></div></div></div></div><div class="sc-dGHUoD ggOaNC TABLE false field " data-block-order="6" data-item-order="1" data-item-uuid="635ef9c7-4c5c-4eef-909c-6fd1fd64875c" data-background="back-ground-image" style="width: 100%; vertical-align: top;"><div class="sc-drRqme cBoHJr" style="display: block; position: relative;"><div class="sc-cVusLo fHRVtR" id="table-6-1"><div font-size="16" class="sc-iAkJRg fUzbHM"><div class="tinymce-custom" style="position: relative;"><div style="display: none;"><p class="place-holder hide-in-viewmode" style="margin: 0px;">Go ahead and start typing...</p></div><div class="sc-hZaSAO eMgwyy" style="opacity: 1; position: unset;"><div id="tiny-react_780725018181657335269693" class="mce-content-body" contenteditable="true" style="position: relative;" spellcheck="false"><table style="border-collapse: collapse; width: 629px; height: 275px;" data-mce-style="border-collapse: collapse; width: 629px; height: 275px;" class="mce-item-table"><tbody><tr style="height: auto;" data-mce-style="height: auto;"><td class="tableField_TD" style="background-color: white; position: relative; width: 291px; height: 25px;" data-mce-style="background-color: white; position: relative; width: 291px; height: 25px;"><div class="tableField_Cell" style="text-align: center;" data-mce-style="text-align: center;"><strong>DESCRIPTION</strong></div></td><td class="tableField_TD" style="background-color: white; position: relative; width: 151px; text-align: center; height: 25px;" data-mce-style="background-color: white; position: relative; width: 151px; text-align: center; height: 25px;"><div class="tableField_Cell"><strong>YEAR 1</strong></div></td><td style="background-color: white; position: relative; width: 153px; height: 25px;" data-mce-style="background-color: white; position: relative; width: 153px; height: 25px;"><div class="tableField_Cell" style="text-align: center;" data-mce-style="text-align: center;"><strong>YEAR 2</strong></div></td></tr><tr style="height: auto;" data-mce-style="height: auto;"><td class="tableField_TD" style="background-color: white; position: relative; width: 291px; height: 25px;" data-mce-style="background-color: white; position: relative; width: 291px; height: 25px;"><div class="tableField_Cell">Asset 1</div></td><td class="tableField_TD" style="background-color: white; position: relative; width: 151px; height: 25px;" data-mce-style="background-color: white; position: relative; width: 151px; height: 25px;"><div class="tableField_Cell" style="text-align: center;" data-mce-style="text-align: center;">$2,500,000.00</div></td><td style="background-color: white; position: relative; width: 153px; height: 25px;" data-mce-style="background-color: white; position: relative; width: 153px; height: 25px;"><div class="tableField_Cell" style="text-align: center;" data-mce-style="text-align: center;">$3,000,000.00</div></td></tr><tr style="height: 25px;" data-mce-style="height: 25px;"><td style="background-color: white; position: relative; width: 291px; height: 25px;" data-mce-style="background-color: white; position: relative; width: 291px; height: 25px;">Other Assets</td><td style="background-color: white; position: relative; width: 151px; height: 25px;" data-mce-style="background-color: white; position: relative; width: 151px; height: 25px;"><div class="tableField_Cell" style="text-align: center;" data-mce-style="text-align: center;">$1,211,000.00</div></td><td style="background-color: white; position: relative; width: 153px; height: 25px;" data-mce-style="background-color: white; position: relative; width: 153px; height: 25px;"><div class="tableField_Cell" style="text-align: center;" data-mce-style="text-align: center;">$1,360,000.00</div></td></tr><tr style="height: 25px;" data-mce-style="height: 25px;"><td style="background-color: white; position: relative; width: 291px; height: 25px;" data-mce-style="background-color: white; position: relative; width: 291px; height: 25px;"><strong>Total Assets</strong></td><td style="background-color: white; position: relative; width: 151px; height: 25px;" data-mce-style="background-color: white; position: relative; width: 151px; height: 25px;"><div class="tableField_Cell" style="text-align: center;" data-mce-style="text-align: center;"><strong>$3,711,000.00</strong></div></td><td style="background-color: white; position: relative; width: 153px; height: 25px;" data-mce-style="background-color: white; position: relative; width: 153px; height: 25px;"><div class="tableField_Cell" style="text-align: center;" data-mce-style="text-align: center;"><strong>$4,360,000.00</strong></div></td></tr><tr style="height: 25px;" data-mce-style="height: 25px;"><td style="background-color: white; position: relative; width: 291px; height: 25px;" data-mce-style="background-color: white; position: relative; width: 291px; height: 25px;">Liability 1</td><td style="background-color: white; position: relative; width: 151px; height: 25px;" data-mce-style="background-color: white; position: relative; width: 151px; height: 25px;"><div class="tableField_Cell" style="text-align: center;" data-mce-style="text-align: center;">$600,000.00</div></td><td style="background-color: white; position: relative; width: 153px; height: 25px;" data-mce-style="background-color: white; position: relative; width: 153px; height: 25px;"><div class="tableField_Cell" style="text-align: center;" data-mce-style="text-align: center;">$500,000.00</div></td></tr><tr style="height: 25px;" data-mce-style="height: 25px;"><td style="background-color: white; position: relative; width: 291px; height: 25px;" data-mce-style="background-color: white; position: relative; width: 291px; height: 25px;">Other Liabilities</td><td style="background-color: white; position: relative; width: 151px; height: 25px;" data-mce-style="background-color: white; position: relative; width: 151px; height: 25px;"><div class="tableField_Cell" style="text-align: center;" data-mce-style="text-align: center;">$1,314,900.00</div></td><td style="background-color: white; position: relative; width: 153px; height: 25px;" data-mce-style="background-color: white; position: relative; width: 153px; height: 25px;"><div class="tableField_Cell" style="text-align: center;" data-mce-style="text-align: center;">$462,900.00</div></td></tr><tr style="height: 25px;" data-mce-style="height: 25px;"><td style="background-color: white; position: relative; width: 291px; height: 25px;" data-mce-style="background-color: white; position: relative; width: 291px; height: 25px;"><strong>Total Liabilities</strong></td><td style="background-color: white; position: relative; width: 151px; height: 25px;" data-mce-style="background-color: white; position: relative; width: 151px; height: 25px;"><div class="tableField_Cell" style="text-align: center;" data-mce-style="text-align: center;"><strong>$1,914,900.00</strong></div></td><td style="background-color: white; position: relative; width: 153px; height: 25px;" data-mce-style="background-color: white; position: relative; width: 153px; height: 25px;"><div class="tableField_Cell" style="text-align: center;" data-mce-style="text-align: center;"><strong>$962,900.00</strong></div></td></tr><tr style="height: 25px;" data-mce-style="height: 25px;"><td style="background-color: white; position: relative; width: 291px; height: 25px;" data-mce-style="background-color: white; position: relative; width: 291px; height: 25px;">Equity Capital</td><td style="background-color: white; position: relative; width: 151px; height: 25px;" data-mce-style="background-color: white; position: relative; width: 151px; height: 25px;"><div class="tableField_Cell" style="text-align: center;" data-mce-style="text-align: center;">$300,000.00</div></td><td style="background-color: white; position: relative; width: 153px; height: 25px;" data-mce-style="background-color: white; position: relative; width: 153px; height: 25px;"><div class="tableField_Cell" style="text-align: center;" data-mce-style="text-align: center;">$300,000.00</div></td></tr><tr style="height: 25px;" data-mce-style="height: 25px;"><td style="background-color: white; position: relative; width: 291px; height: 25px;" data-mce-style="background-color: white; position: relative; width: 291px; height: 25px;">Retained Earnings</td><td style="background-color: white; position: relative; width: 151px; height: 25px;" data-mce-style="background-color: white; position: relative; width: 151px; height: 25px;"><div class="tableField_Cell" style="text-align: center;" data-mce-style="text-align: center;">$1,496,100.00</div></td><td style="background-color: white; position: relative; width: 153px; height: 25px;" data-mce-style="background-color: white; position: relative; width: 153px; height: 25px;"><div class="tableField_Cell" style="text-align: center;" data-mce-style="text-align: center;">$3,097,100.00</div></td></tr><tr style="height: 25px;" data-mce-style="height: 25px;"><td style="background-color: white; position: relative; width: 291px; height: 25px;" data-mce-style="background-color: white; position: relative; width: 291px; height: 25px;"><strong>Total Shareholder’s Equity</strong></td><td style="background-color: white; position: relative; width: 151px; height: 25px;" data-mce-style="background-color: white; position: relative; width: 151px; height: 25px;"><div class="tableField_Cell" style="text-align: center;" data-mce-style="text-align: center;"><strong>$1,796,100.00</strong></div></td><td style="background-color: white; position: relative; width: 153px; height: 25px;" data-mce-style="background-color: white; position: relative; width: 153px; height: 25px;"><div class="tableField_Cell" style="text-align: center;" data-mce-style="text-align: center;"><strong>$3,397,100.00</strong></div></td></tr><tr style="height: 25px;" data-mce-style="height: 25px;"><td style="background-color: white; position: relative; width: 291px; height: 25px;" data-mce-style="background-color: white; position: relative; width: 291px; height: 25px;"><strong>Total Liabilities &amp; Shareholder’s Equity</strong></td><td style="background-color: white; position: relative; width: 155px; height: 25px;" data-mce-style="background-color: white; position: relative; width: 155px; height: 25px;"><div class="tableField_Cell" style="text-align: center;" data-mce-style="text-align: center;"><strong>$3,711,000.00</strong></div></td><td style="background-color: white; position: relative; width: 157px; height: 25px;" data-mce-style="background-color: white; position: relative; width: 157px; height: 25px;"><div class="tableField_Cell" style="text-align: center;" data-mce-style="text-align: center;"><strong>$4,360,000.00</strong></div></td></tr></tbody></table></div></div></div></div></div><div class="erd_scroll_detection_container erd_scroll_detection_container_animation_active" style="visibility: hidden; display: inline; width: 0px; height: 0px; z-index: -1; overflow: hidden; margin: 0px; padding: 0px;"><div dir="ltr" class="erd_scroll_detection_container" style="position: absolute; flex: 0 0 auto; overflow: hidden; z-index: -1; visibility: hidden; width: 100%; height: 100%; left: 0px; top: 0px;"><div class="erd_scroll_detection_container" style="position: absolute; flex: 0 0 auto; overflow: hidden; z-index: -1; visibility: hidden; inset: -7px -5px -6px -6px;"><div style="position: absolute; flex: 0 0 auto; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;"><div style="position: absolute; left: 0px; top: 0px; width: 821px; height: 427px;"></div></div><div style="position: absolute; flex: 0 0 auto; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;"><div style="position: absolute; width: 200%; height: 200%;"></div></div></div></div></div></div></div><div class="sc-dGHUoD ggOaNC PARAGRAPH last-field field " data-block-order="6" data-item-order="2" data-item-uuid="a5347682-a67d-4857-964a-f3912836b312" data-background="back-ground-image" style="width: 100%; vertical-align: top;"><div class="sc-drRqme cBoHJr" style="display: block; position: relative;"><div class="sc-cVusLo fHRVtR 950661ba-5917-4fdd-8754-9658bd411fb9_a5347682-a67d-4857-964a-f3912836b312"><div class="sc-iVxNgP cIZvQk"><div id="paragraph-6-2" class="sc-eHAsqE gga-dzN editor-wrapper " font-size="16"><div class="tinymce-custom" style="position: relative;"><div style="display: none;"><p class="place-holder hide-in-viewmode" style="margin: 0px;">Go ahead and start typing...</p></div><div class="sc-hZaSAO eMgwyy" style="opacity: 1; position: unset;"><div id="tiny-react_12994257191657335269695" class="mce-content-body" contenteditable="true" style="position: relative;" spellcheck="false"><h2>Appendix</h2><ul style="list-style-type: disc;" data-mce-style="list-style-type: disc;" class="mylist"><li class="mybulletlistclass"><span style="text-decoration: underline;" data-mce-style="text-decoration: underline;"><strong>Poseidon’s Lair Services and Tickets</strong></span><br>A complete list of services available in the water park and the tickets</li></ul></div></div></div></div><div data-styled-id="rCS19atnxs" class="moveable-control-box    rCS19atnxs" data-able-resizable="true" data-able-padding="true" style="position: absolute; display: none; transform: translate3d(0px, 0px, 0px); --zoom:1; --zoompx:1px;"><div class="moveable-control moveable-direction moveable-sw " data-rotation="45" data-direction="sw" style="transform: translateZ(0px) translate(0px, 0px) rotate(0rad) scale(1);"></div><div class="moveable-line moveable-direction " data-rotation="-1" data-line-index="0" data-direction="" style="transform: translateY(-50%) translate(0px, 0px) rotate(0rad) scaleY(1); width: 0px;"></div><div class="moveable-line moveable-direction " data-rotation="-1" data-line-index="1" data-direction="" style="transform: translateY(-50%) translate(0px, 0px) rotate(0rad) scaleY(1); width: 0px;"></div><div class="moveable-line moveable-direction " data-rotation="-1" data-line-index="2" data-direction="" style="transform: translateY(-50%) translate(0px, 0px) rotate(0rad) scaleY(1); width: 0px;"></div><div class="moveable-line moveable-direction " data-rotation="-1" data-line-index="3" data-direction="" style="transform: translateY(-50%) translate(0px, 0px) rotate(0rad) scaleY(1); width: 0px;"></div></div></div></div><div class="erd_scroll_detection_container erd_scroll_detection_container_animation_active" style="visibility: hidden; display: inline; width: 0px; height: 0px; z-index: -1; overflow: hidden; margin: 0px; padding: 0px;"><div dir="ltr" class="erd_scroll_detection_container" style="position: absolute; flex: 0 0 auto; overflow: hidden; z-index: -1; visibility: hidden; width: 100%; height: 100%; left: 0px; top: 0px;"><div class="erd_scroll_detection_container" style="position: absolute; flex: 0 0 auto; overflow: hidden; z-index: -1; visibility: hidden; inset: -7px -5px -6px -6px;"><div style="position: absolute; flex: 0 0 auto; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;"><div style="position: absolute; left: 0px; top: 0px; width: 821px; height: 177px;"></div></div><div style="position: absolute; flex: 0 0 auto; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;"><div style="position: absolute; width: 200%; height: 200%;"></div></div></div></div></div></div></div></div></div><div class="sc-gqUUDT iQraAw" style="max-width: 1024px;"><img src="https://docs.survivalapp.com/static/media/logo-branding.c5be7d2312c47457fc7bfbfa75fd54d1.svg" alt="logo-branding" class="sc-cyxtte jqgdiE"><div class="sc-evZas dlxkXD sc-dAKPfc krJiwq">Now create your own document- It's Free</div></div><div class="areaDrop hide-in-viewmode"></div><div class="erd_scroll_detection_container erd_scroll_detection_container_animation_active" style="visibility: hidden; display: inline; width: 0px; height: 0px; z-index: -1; overflow: hidden; margin: 0px; padding: 0px;"><div dir="ltr" class="erd_scroll_detection_container" style="position: absolute; flex: 0 0 auto; overflow: hidden; z-index: -1; visibility: hidden; width: 100%; height: 100%; left: 0px; top: 0px;"><div class="erd_scroll_detection_container" style="position: absolute; flex: 0 0 auto; overflow: hidden; z-index: -1; visibility: hidden; inset: -7px -5px -6px -6px;"><div style="position: absolute; flex: 0 0 auto; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;"><div style="position: absolute; left: 0px; top: 0px; width: 1045px; height: 1469px;"></div></div><div style="position: absolute; flex: 0 0 auto; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;"><div style="position: absolute; width: 200%; height: 200%;"></div></div></div></div></div></div></div></div><div class="page-break"></div></div><div class="erd_scroll_detection_container erd_scroll_detection_container_animation_active" style="visibility: hidden; display: inline; width: 0px; height: 0px; z-index: -1; overflow: hidden; margin: 0px; padding: 0px;"><div dir="ltr" class="erd_scroll_detection_container" style="position: absolute; flex: 0 0 auto; overflow: hidden; z-index: -1; visibility: hidden; width: 100%; height: 100%; left: 0px; top: 0px;"><div class="erd_scroll_detection_container" style="position: absolute; flex: 0 0 auto; overflow: hidden; z-index: -1; visibility: hidden; inset: -7px -5px -6px -6px;"><div style="position: absolute; flex: 0 0 auto; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;"><div style="position: absolute; left: 0px; top: 0px; width: 1504px; height: 903px;"></div></div><div style="position: absolute; flex: 0 0 auto; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;"><div style="position: absolute; width: 200%; height: 200%;"></div></div></div></div></div></div></body><grammarly-desktop-integration data-grammarly-shadow-root="true"></grammarly-desktop-integration></html>`;
