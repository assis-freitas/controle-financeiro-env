import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import components from "@/globalComponents";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faSpinner,
    faMoneyBillAlt,
    faReceipt,
    faWallet,
    faPlus,
    faMinus,
    faSortAmountUpAlt,
    faSearch
} from "@fortawesome/free-solid-svg-icons";

import {
    faCalendarAlt
} from "@fortawesome/free-regular-svg-icons";

library.add(faSpinner, faMoneyBillAlt, faReceipt, faWallet, faCalendarAlt, faPlus, faMinus, faSortAmountUpAlt, faSearch);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    components,
    render: h => h(App)
}).$mount("#app");
