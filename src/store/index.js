import { createStore } from "vuex";
import { gameModule } from "@/store/modules/gameModule";

export default createStore({
   state: {
      popup: null,
      windowWidth: window.innerWidth,
   },
   mutations: {
      setPopup(state, val) {
         state.popup = val;
      },
      setWindowWidth(state, width) {
         state.windowWidth = width;
      },
   },
   actions: {},
   modules: {
      game: gameModule,
   },
});
