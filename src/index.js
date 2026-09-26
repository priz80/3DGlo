import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal";
import scroll from "./modules/scroll";
import inputs from "./modules/inputs";
import submit from "./modules/submit";
import tabs from "./modules/tabs";
import slider from "./modules/slider";
import dot from "./modules/dot";
import calc from "./modules/calc";

timer("17 october 2026");
menu();
modal();
scroll();
inputs();
submit();
tabs();
dot({
  slideClass: ".portfolio-item",
  dotClass: ".dot",
});
slider({
  sliderBlockClass: ".portfolio-content",
  slideClass: ".portfolio-item",
  dotClass: ".dot",
});
calc(100);
