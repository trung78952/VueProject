import Home from './components/HelloWorld.vue'
import Todolist from './components/todolist/Todolist.vue'
import Listuser from './components/User/User.vue'
import Covid from './components/Covid/Covid.vue'
import Userdetail from './components/User/Userdetail.vue'
import notFound from './components/notFound.vue'
export const routes=[
    {path: '/',name: 'home',component: Home},
    {path:'/todolist',name: 'todolist',component: Todolist},
    {path:'/users',name: 'userlist',component: Listuser},
    {path:'/users/:id',name: 'userdetail',component: Userdetail},
    {path:'/covid',name: 'covid',component: Covid},
    {path:'*',name:'notfound',component: notFound}

]