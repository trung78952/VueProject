import Home from './components/Home.vue'
import Todolist from './components/todolist/Todolist.vue'
import Listuser from './components/User/User.vue'
import Covid from './components/Covid/Covid.vue'
import Userdetail from './components/User/Userdetail.vue'
import notFound from './components/notFound.vue'
import Login from './components/Login.vue'
export const routes=[
    {path: '/',name: 'home',component: Login},
    {path:'/todolist',name: 'todolist',component: Todolist},
    {path:'/users',name: 'userlist',component: Listuser},
    {path:'/users/:id',name: 'userdetail',component: Userdetail},
    {path:'/covid',name: 'covid',component: Covid},
    {path:'*',name:'notfound',component: notFound}

]