import Vue from "vue"
import Router from "vue-router"
// import Infos from "@/pages/infos/Infos"
// import Skill from "@/pages/skill/Skill"
// import Project from "@/pages/Project/Project"
// import Jobs from "@/pages/Jobs/Jobs"

const Infos = () => import('@/pages/infos/Infos')
const Skill = () => import('@/pages/skill/Skill')
const Project = () => import('@/pages/Project/Project')
const Jobs = () => import('@/pages/Jobs/Jobs')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "Infos",
      component: Infos
      // redirect() {
      //   return "/";
      // }
    },
    {
      path: "/skill",
      name: "Skill",
      component: Skill
    },
    {
      path: "/project",
      name: "Project",
      component: Project
    },
    {
      path: "/jobs",
      name: "Jobs",
      component: Jobs
    }
  ]
})
