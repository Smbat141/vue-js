import VueRouter from "vue-router";
import Home from "./pages/Home";
import Car from "./pages/Car";
import CarNumber from "./components/CarNumber";
import CarInfo from "./components/CarInfo";
export default new VueRouter ({
    routes:[
        {
            path:'/',
            component:Home,
        },
        {
            path:'/car',
            component:Car,
        },
        {
            path:'/car/:id',
            component:CarNumber,
            children:[
                {
                    path:'info',
                    component:CarInfo
                }
            ]
        },
    ],
    mode:'history'
})

