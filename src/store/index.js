import { createStore } from 'vuex'
import library from "@/store/modules/library";

export default createStore({
  modules: {
    library,
  }
})
