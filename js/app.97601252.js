(function(){"use strict";var e={2590:function(e,t,r){var o=r(3396);const i={id:"app",class:"bg-dark-gray h-screen w-screen overflow-x-hidden"};function n(e,t){const r=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",i,[(0,o.Wm)(r)])}var s=r(89);const l={},a=(0,s.Z)(l,[["render",n]]);var c=a,d=r(2483),m=r(9242);const u={class:"bg-dark-gray h-screen w-screen overflow-x-hidden"};function p(e,t,r,i,n,s){const l=(0,o.up)("Header"),a=(0,o.up)("Landing"),c=(0,o.up)("About"),d=(0,o.up)("Work"),m=(0,o.up)("Projects"),p=(0,o.up)("ContactForm");return(0,o.wg)(),(0,o.iD)("div",u,[(0,o.Wm)(l),(0,o.Wm)(a),(0,o.Wm)(c),(0,o.Wm)(d),(0,o.Wm)(m),(0,o.Wm)(p)])}var h=r.p+"img/Kyle_Logo.33c1c9cf.svg";const g={class:"flex p-4 justify-between items-center"},f=(0,o._)("img",{src:h,alt:"kyle_logo"},null,-1);function b(e,t,r,i,n,s){const l=(0,o.up)("NavBar");return(0,o.wg)(),(0,o.iD)("div",g,[f,(0,o.Wm)(l)])}var x=r.p+"img/mobile-nav-btn.00c29a71.svg";const w={class:"flex flex-col"},v=(0,o._)("img",{src:x,alt:"navBtn"},null,-1),y=[v],k={class:"fixed bg-project-black/80 right-0 top-0 py-14 h-[100lvh] w-[60%] z-[12] animate-slideLeftToRight sm:w-[40%] flex hidden flex-col bg:project-black md:flex md:flex-row md:relative md:top-0 md:right-0 md:bg-dark-gray md:h-auto md:w-auto md:py-0 md:animate-[none]"};function _(e,t,r,i,n,s){const l=(0,o.up)("NavBtn");return(0,o.wg)(),(0,o.iD)("div",w,[(0,o._)("button",{class:"h-8 w-8 self-end fixed top-7 z-[13] md:hidden",onClick:t[0]||(t[0]=(...e)=>s.toggleMobileNav&&s.toggleMobileNav(...e))},y),(0,o._)("nav",k,[(0,o.Wm)(l,{btnText:"About",btnLink:"#about"}),(0,o.Wm)(l,{btnText:"Work",btnLink:"#work"}),(0,o.Wm)(l,{btnText:"Projects",btnLink:"#projects"}),(0,o.Wm)(l,{btnText:"Contact",btnLink:"#contact"})])])}var j=r(7139);function S(e,t,r,i,n,s){return(0,o.wg)(),(0,o.iD)("button",{class:"hover:bg-dark-blue text-white rounded-2xl p-2 m-2",onClick:t[0]||(t[0]=(...e)=>s.scrollToSection&&s.scrollToSection(...e))},(0,j.zw)(r.btnText),1)}var C={name:"NavBtn",props:{btnText:{type:String,required:!0},btnLink:{type:String,required:!1}},methods:{scrollToSection(){const e=document.querySelector(this.btnLink);e.scrollIntoView({behavior:"smooth"})}}};const D=(0,s.Z)(C,[["render",S]]);var P=D,T={name:"NavBar",components:{NavBtn:P},methods:{toggleMobileNav(){const e=document.querySelector("nav");e.classList.toggle("animate-slideLeftToRight"),e.classList.toggle("animate-slideRightToLeft"),e.classList.contains("hidden")?(e.classList.toggle("hidden"),setTimeout((()=>{e.classList.toggle("overflow-hidden")}),400)):setTimeout((()=>{e.classList.toggle("hidden")}),400)}}};const A=(0,s.Z)(T,[["render",_]]);var L=A,W={name:"Header",components:{NavBar:L}};const H=(0,s.Z)(W,[["render",b]]);var M=H;const N={class:"mt-20 sm:mt-32 mx-12 cursor-default flex flex-col items-center"},z={class:"max-w-3xl"},q=(0,o._)("p",{class:"text-light-blue text-xl md:text-3xl lg:text-4xl"}," Hi, my name is ",-1),R=(0,o._)("h1",{class:"text-white text-4xl my-5 md:text-5xl lg:text-6xl"}," Kyle Damschen. ",-1),I=(0,o._)("p",{class:"text-dark-white text-base lg:text-lg"},[(0,o.Uk)(" I'm a career motivated software engineer that is currently working on a variety of projects with the "),(0,o._)("a",{class:"text-light-blue underline"},"Citrus Clonal Protection Program"),(0,o.Uk)(" to increase productivity of lab teams through technology. I am currently seeking to enhance my technical knowledge and solve complex problems as a software engineer. ")],-1),O=(0,o._)("button",{class:"text-light-blue border-solid border-2 border-light-blue p-2 rounded-2xl w-32 my-10 hover:animate-shadowPop"}," Resume ",-1);function U(e,t,r,i,n,s){const l=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",N,[(0,o._)("div",z,[q,R,I,(0,o.Wm)(l,{to:"/Kyle_Damschen_Resume.pdf",target:"_blank"},{default:(0,o.w5)((()=>[O])),_:1})])])}var J={name:"Landing"};const F=(0,s.Z)(J,[["render",U]]);var Z=F,E=r.p+"img/Personal_Photo.6ddc1d5e.jpg";const B={class:"text-dark-white flex flex-col mt-36 sm:mx-12 items-center justify-center mb-12",id:"about"},K={class:"max-w-6xl flex flex-col md:flex-row items-center justify-center"},V={class:"w-2/3 cursor-default"},Y=(0,o.uE)('<p class="mb-3"> Hello! I&#39;m Kyle Damschen, an enthusiastic recent graduate with a Computer Science degree, eager to embark on a journey in the world of software engineering. My passion for technology and problem-solving has driven me to pursue a career where I can transform innovative ideas into functional, user-centric software solutions. </p><p class="mb-3"> Currently I am working with the Citrus Clonal Protection Program at UC Riverside, where I am taking advantage of technology to enhance lab teams performance and their experience. I have also worked with ACM@UCR as a software developer, where I have been able to work on a variety of projects and gain valuable experience. </p><p class="mb-3"> Here are a few technologies I&#39;ve been working with recently: </p><div class="flex w-fill sm:justify-evenly"><ul class="mx-1 my-2"><li>JavaScript (ES6+)</li><li>Node.js</li><li>Python</li><li>C++</li></ul><ul class="mx-1 my-2"><li>HTML &amp; CSS</li><li>Git</li><li>SQL</li></ul></div>',4),G=(0,o._)("div",{class:"w-3/4 sm:w-2/4 md:w-1/3 sm:ml-12 border-light-blue border-2 mt-5 lg:mt-32 hover:animate-bgDrop"},[(0,o._)("div",{class:"relative bg-gradient-to-tl from-light-blue to-dark-blue top-[-10px] left-[-12px] hover:bg-none"},[(0,o._)("img",{class:"w-fill opacity-60 grayscale hover:grayscale-0 hover:opacity-100 hover:animate-imgPop",src:E,alt:"personal Photo"})])],-1);function Q(e,t,r,i,n,s){const l=(0,o.up)("SectionHeader");return(0,o.wg)(),(0,o.iD)("div",B,[(0,o._)("div",K,[(0,o._)("div",V,[(0,o.Wm)(l,{title:"About Me"}),Y]),G])])}const $={class:"mx-0 mt-[10px] mb-[20px] border-b-[1px] border-light-blue leading-[1em]"},X={class:"text-2xl text-white bg-dark-gray pr-5 py-[0px] top-[14px] relative"},ee=(0,o._)("template",null,null,-1);function te(e,t,r,i,n,s){return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("h1",$,[(0,o._)("span",X,(0,j.zw)(r.title),1)]),ee],64)}var re={name:"AboutMe",props:{title:{type:String,required:!0}}};const oe=(0,s.Z)(re,[["render",te]]);var ie=oe,ne={name:"About",components:{SectionHeader:ie}};const se=(0,s.Z)(ne,[["render",Q]]);var le=se;const ae={class:"mt-20 px-12 mb-10 w-screen flex flex-col items-center"},ce={class:"w-full max-w-3xl",id:"work"},de={class:"mt-12 flex flex-col sm:flex-row justify-between"},me={class:"sm:mr-12 overflow-x-auto sm:overflow-visible"},ue={class:"flex mb-2 sm:flex-col justify-between w-max"},pe=["onClick"],he={class:"work-description cursor-default mt-4"},ge={class:"text-white"},fe={class:"text-lg"},be={class:"text-light-blue"},xe={class:"mt-2"},we={class:"text-dark-white mt-4"};function ve(e,t,r,i,n,s){const l=(0,o.up)("SectionHeader"),a=(0,o.up)("WorkBullet");return(0,o.wg)(),(0,o.iD)("div",ae,[(0,o._)("div",ce,[(0,o.Wm)(l,{title:"My Experience"}),(0,o._)("div",de,[(0,o._)("div",me,[(0,o._)("ul",ue,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.jobs,((e,t)=>((0,o.wg)(),(0,o.iD)("li",{key:t,class:(0,j.C_)(["before:content-none w-full cursor-pointer px-2 py-2 border-b-2 sm:border-b-0 sm:border-l-2 text-sm",n.selectedJob===t?"text-light-blue border-light-blue bg-white/[3%]":"text-white hover:bg-white/[3%] hover:text-light-blue border-white/[3%]"]),onClick:e=>s.jobSelected(t)},(0,j.zw)(e.Company),11,pe)))),128))])]),(0,o._)("div",he,[(0,o._)("div",ge,[(0,o._)("h3",fe,[(0,o.Uk)((0,j.zw)(n.jobs[n.selectedJob].Title)+" ",1),(0,o._)("span",be,"@ "+(0,j.zw)(n.jobs[n.selectedJob].Company),1)]),(0,o._)("p",xe,(0,j.zw)(n.jobs[n.selectedJob].startDate)+" - "+(0,j.zw)(n.jobs[n.selectedJob].endDate),1)]),(0,o._)("div",we,[(0,o._)("ul",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.jobs[n.selectedJob].Description,((e,t)=>((0,o.wg)(),(0,o.j4)(a,{key:t,description:e},null,8,["description"])))),128))])])])])])])}const ye={class:"my-2"};function ke(e,t,r,i,n,s){return(0,o.wg)(),(0,o.iD)("li",ye,(0,j.zw)(r.description),1)}var _e={name:"WorkBullet",props:{description:{type:String,required:!0}}};const je=(0,s.Z)(_e,[["render",ke]]);var Se=je,Ce=JSON.parse('[{"Title":"Full Stack Developer","Company":"Citrus Clonal Protection Program","startDate":"09/2022","endDate":"Present","Description":["Developed a full stack web application which led to a 50% improvement in lab team input and retrieval time using JavaScript, JQuery, HTML, CSS, Microsoft SQL, Express.JS, and Node.JS.","Revamped a web application achieving 100% UI responsiveness using HTML, CSS, and JavaScript.","Developed a REST API server to handle communication between multiple applications."]},{"Title":"Software Developer","Company":"ACM at UCR","startDate":"10/2022","endDate":"01/2023","Description":["Developed a club web portal for members of ACM@UCR using React, Next.js, Firebase, Agile Methodologies, and Tailwind CSS to provide an easy way for members to keep up to date with club events and request services that the club offers.","Mentored Freshmen and Sophomore students in the club to help them learn new technologies that were currently being used in club projects.","Participated in code reviews to ensure that code was up to club standards and to help mentor other developers."]},{"Title":"Notary Clerk","Company":"UPS Store","startDate":"11/2019","endDate":"09/2022","Description":["Acheived 99% customer satisfaction for new and existing customers using communication skills and putting the customer first","Led my store in notary\'s performed"]}]'),De={name:"Work",components:{SectionHeader:ie,WorkBullet:Se},data(){return{jobs:Ce,selectedJob:0}},methods:{jobSelected(e){this.selectedJob=e;const t=document.querySelector(".work-description");t.classList.add("animate-textFadeIn"),setTimeout((()=>{t.classList.remove("animate-textFadeIn")}),500)}}};const Pe=(0,s.Z)(De,[["render",ve]]);var Te=Pe;const Ae={class:"mt-20 px-8 mb-10 w-screen flex flex-col items-center",id:"projects"},Le={class:"w-full max-w-4xl"};function We(e,t,r,i,n,s){const l=(0,o.up)("SectionHeader"),a=(0,o.up)("FeaturedProject"),c=(0,o.up)("OtherProjects");return(0,o.wg)(),(0,o.iD)("div",Ae,[(0,o._)("div",Le,[(0,o.Wm)(l,{title:"Things I have Built"}),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.featuredProjects,((e,t)=>((0,o.wg)(),(0,o.j4)(a,{key:t,index:t,image:e.image,description:e.description,skills:e.skills,title:e.title,link:e.link},null,8,["index","image","description","skills","title","link"])))),128))]),(0,o.Wm)(c)])}const He={class:"relative mt-10 bg-gradient-to-tl from-light-blue to-dark-blue hover:cursor-pointer"},Me=["href"],Ne=["src"],ze={class:"my-4"},qe=(0,o._)("h3",{class:"text-light-blue mb-2"},"Featured Project",-1),Re=["href"],Ie={class:"text-xl inline"},Oe=(0,o._)("span",{class:"absolute inset-x-0 bottom-[-4px] h-0.5 bg-light-blue transform scale-x-0 group-hover:scale-x-100 transition-transform origin-middle"},null,-1),Ue={class:"md:z-10"},Je={class:"text-sm text-dark-white md:bg-project-black md:p-5 md:bg-opacity-90 md:rounded-md md:shadow-[6px_6px_10px_#000]"},Fe={class:"list-none flex flex-wrap text-sm mt-4 z-10 text-dark-white md:justify-center md:bg-project-black/80 md:rounded-md md:shadow-[6px_6px_10px_#000]"};function Ze(e,t,r,i,n,s){return(0,o.wg)(),(0,o.iD)("div",{class:"bg-center bg-no-repeat bg-cover my-12 md:!bg-none md:grid md:grid-cols-5 md:grid-rows-1 md:items-center",style:(0,j.j5)({backgroundImage:`url(./imgs/${n.img})`})},[(0,o._)("div",{class:(0,j.C_)(["hidden my-12 px-10 py-5 md:my-0 md:px-0 md:py-0 md:block md:row-start-1 md:row-end-1",this.index%2===0?"md:col-start-1 md:col-end-4":"md:col-start-3 md:col-end-6"])},[(0,o._)("div",He,[(0,o._)("a",{href:r.link,target:"_blank"},[(0,o._)("img",{class:"object-cover md:h-[100%] md:w-auto opacity-50 animate-fadeOut hover:animate-fadeIn",src:"./imgs/"+n.img},null,8,Ne)],8,Me)])],2),(0,o._)("div",{class:(0,j.C_)(["text-white flex flex-col justify-center my-12 px-10 py-5 md:my-0 md:px-0 md:py-0 bg-dark-blue bg-opacity-70 md:row-start-1 md:row-end-1 md:bg-opacity-0 md:p-0 md:py-6 hover:cursor-default items-start",this.index%2===0?"md:col-start-3 md:col-end-6 md:items-end md:text-right":"md:col-start-1 md:col-end-4 md:text-left md:items-start"])},[(0,o._)("div",ze,[qe,(0,o._)("a",{href:r.link,target:"_blank",class:"group relative"},[(0,o._)("h2",Ie,(0,j.zw)(r.title),1),Oe],8,Re)]),(0,o._)("div",Ue,[(0,o._)("p",Je,(0,j.zw)(r.description),1)]),(0,o._)("ul",Fe,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.skills,((e,t)=>((0,o.wg)(),(0,o.iD)("li",{key:t,class:"m-2"},(0,j.zw)(e),1)))),128))])],2)],4)}var Ee={name:"FeaturedProject",props:{image:{type:String,required:!0},description:{type:String,required:!0},skills:{type:Array,required:!0},title:{type:String,required:!0},index:{type:Number,required:!0},link:{type:String,required:!0}},data(){return{img:this.image}}};const Be=(0,s.Z)(Ee,[["render",Ze]]);var Ke=Be;const Ve={class:"flex flex-col justify-center items-center w-[80%] max-w-[1300px]"},Ye=(0,o._)("div",{class:"flex flex-col justify-center items-center"},[(0,o._)("h3",{class:"text-white text-2xl md:text-3xl"},"Other Noteworthy Projects"),(0,o._)("a",{href:"https://github.com/kninja99",target:"_blank",class:"relative text-light-blue mt-5 group"},[(0,o._)("span",{class:"absolute inset-x-0 bottom-0 h-0.5 bg-light-blue transform scale-x-0 group-hover:scale-x-100 transition-transform origin-middle"}),(0,o.Uk)(" View the Archive ")])],-1),Ge={class:"flex flex-wrap mt-8 justify-center items-center"};function Qe(e,t,r,i,n,s){const l=(0,o.up)("ProjectCard");return(0,o.wg)(),(0,o.iD)("div",Ve,[Ye,(0,o._)("div",Ge,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.projects,((e,t)=>((0,o.wg)(),(0,o.j4)(l,{key:t,title:e.title,description:e.description,skills:e.skills,link:e.link,index:t},null,8,["title","description","skills","link","index"])))),128))])])}var $e=r.p+"img/Folder-Icon.95ea1b8a.svg";const Xe=["href"],et={class:"w-[300px] h-[300px] bg-project-black/90 rounded-md shadow-[6px_6px_10px_#000] flex flex-col mx-4 my-6 flex-1 basis-1/3 hover:animate-cardHoverUp animate-cardHoverDown"},tt=(0,o._)("div",{class:"py-5 mx-5"},[(0,o._)("img",{class:"w-[40px] h-[40px]",src:$e,alt:"folder"})],-1),rt={class:"text-white mx-5"},ot={class:"text-xl"},it={class:"my-2 text-dark-white/80"},nt={class:"list-none flex flex-wrap text-dark-white/70 text-sm my-2 mx-2 mt-auto"};function st(e,t,r,i,n,s){return(0,o.wg)(),(0,o.iD)("a",{href:r.link,target:"_blank",onClick:t[0]||(t[0]=(...e)=>s.cardClickEvent&&s.cardClickEvent(...e))},[(0,o._)("div",et,[tt,(0,o._)("div",rt,[(0,o._)("p",ot,(0,j.zw)(r.title),1),(0,o._)("p",it,(0,j.zw)(r.description),1)]),(0,o._)("ul",nt,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.skills,((e,t)=>((0,o.wg)(),(0,o.iD)("li",{class:"m-2",key:t},(0,j.zw)(e),1)))),128))])])],8,Xe)}var lt={name:"ProjectCard",props:{title:String,description:String,skills:Array,link:String,index:Number},methods:{cardClickEvent(e){""===this.link&&(e.preventDefault(),alert("Sorry but this repo is private. Please contact me for more info."))}}};const at=(0,s.Z)(lt,[["render",st]]);var ct=at,dt=JSON.parse('[{"title":"Embedded Trivia Game","description":"A trivia game built on a Arduino Uno using a state machine design patern and a variety of different components.","skills":["C++","Embedded Design","Arduino"],"link":"https://github.com/kninja99/Embedded-System-Trivia-Game"},{"title":"Stock News Bot","description":"A small python application that will scrape the web for up to date stock news and display it to the user so you don\'t miss out on any important news.","skills":["Python","JavaScript","HTML","CSS"],"link":"https://github.com/kninja99/Stonk-Bot-V1"},{"title":"Small French Compiler","description":"A small compiler that uses french key words to create a program that will then be compiled into assembly code.","skills":["C++","Assembly","Regex"],"link":"https://github.com/kninja99/Small-French-Compiler"},{"title":"Portfolio Website","description":"A single page web application that is used to display my projects and skills to potential employers.","skills":["JavaScript","Vue.js","Tailwind"],"link":"https://github.com/kninja99/Portfolio-Website"},{"title":"CSS Sorter","description":"A project that was inspired by a work task. This project is a python script that will sort a css file into alphabetical order.","skills":["Python","CSS"],"link":"https://github.com/kninja99/Css-sorter"},{"title":"Console Chess Game","description":"Built a console chess game in a team of 4 using a variety of different design patterns and best practices.","skills":["C++","Agile","Unit Testing"],"link":""}]'),mt={name:"OtherProjects",components:{ProjectCard:ct},data(){return{projects:dt}}};const ut=(0,s.Z)(mt,[["render",Qe]]);var pt=ut,ht=JSON.parse('[{"title":"Self Driving RC Car","description":"An autonmous RC car that was built in a team of 4. The car is capable of self-driving and collects real-time data to detect traffic and road blockages. The important traffic and road blockage data will be sent to the cloud through the middleware. After the cloud receives this data it will attempt to calulate a new route for the car to take. The car will then receive the new route and continue on its way.","skills":["Python","Machine Learning","Pub/Sub","Google CLoud","Arduino","C++"],"image":"Jet-Bot-Img.png","link":"https://github.com/kninja99/Self-Driving-RC-Car"},{"title":"Testing Center Application","description":"Built a full stack application in a team of 4 that allows 4 different types of users that can manage and book appointments for a testing center. The application was built so students could take tests outside of class time while also ensuring a secure testing enviorment.","skills":["Vue.js","Django","Docker","PostgreSQL","SCRUM/Agile","Software Testing"],"image":"testingCenterApp.png","link":"https://github.com/kninja99/UCR-Testing-Center-Application"},{"title":"ACM@UCR Web Portal","description":"Developed a club web portal for members of ACM@UCR to use. The web portal allows members to keep up to date with club events, view club resources, and schedule services. The web portal also allows club officers to manage club events, resources, and members.","skills":["React.js","Next.js","Firebase","Docker","Tailwind CSS","SCRUM/Agile","Software Testing"],"image":"AcmWebPortal.png","link":"https://github.com/kninja99/ACM-membership-portal"}]'),gt={name:"Projects",components:{SectionHeader:ie,FeaturedProject:Ke,OtherProjects:pt},data(){return{featuredProjects:ht}}};const ft=(0,s.Z)(gt,[["render",We]]);var bt=ft;const xt={class:"flex flex-col justify-center items-center mb-6 mx-4"},wt={id:"contact",class:"w-full max-w-4xl"},vt=(0,o._)("div",{class:"flex flex-col items-center"},[(0,o._)("p",{class:"text-light-blue text-3xl md:text-5xl mt-4"},"Get In Touch"),(0,o._)("p",{class:"text-center text-sm text-white/80 mb-6 mt-4 md:text-base w-[80%]"}," I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you! ")],-1),yt={class:"bg-project-black/90 rounded-md shadow-[6px_6px_10px_#000] px-5 py-5 flex flex-col items-center"},kt=(0,o._)("p",{class:"text-light-blue text-2xl mb-5 underline underline-offset-4 hover:cursor-default"}," Contact Me ",-1),_t={key:0,class:"text-error-red"},jt={key:1,class:"text-error-red"},St={key:2,class:"text-error-red"},Ct=(0,o._)("button",{class:"text-light-blue border-solid border-2 border-light-blue p-2 rounded-2xl w-32 mt-4 hover:animate-shadowPop",type:"submit"}," Send ",-1);function Dt(e,t,r,i,n,s){const l=(0,o.up)("SectionHeader");return(0,o.wg)(),(0,o.iD)("div",xt,[(0,o._)("div",wt,[(0,o.Wm)(l,{title:"What's Next?"}),vt,(0,o._)("div",yt,[(0,o._)("form",{class:"flex flex-col items-center w-[100%]",action:"https://formspree.io/f/mnqkzanz",method:"POST",onSubmit:t[3]||(t[3]=(...e)=>s.formSubmit&&s.formSubmit(...e))},[kt,(0,o.wy)((0,o._)("input",{class:"bg-dark-gray text-dark-white px-2 py-1 m-2 border-solid border-2 border-light-teal rounded-2xl w-[300px]",name:"name","onUpdate:modelValue":t[0]||(t[0]=e=>n.form.name=e),placeholder:"Name"},null,512),[[m.nr,n.form.name]]),null!=n.form.errors[0]?((0,o.wg)(),(0,o.iD)("p",_t,(0,j.zw)(n.form.errors[0]),1)):(0,o.kq)("",!0),(0,o.wy)((0,o._)("input",{class:"bg-dark-gray text-dark-white px-2 py-1 m-2 border-solid border-2 border-light-teal rounded-2xl w-[300px]",name:"email","onUpdate:modelValue":t[1]||(t[1]=e=>n.form.email=e),placeholder:"youremail@domain.com"},null,512),[[m.nr,n.form.email]]),null!=n.form.errors[1]?((0,o.wg)(),(0,o.iD)("p",jt,(0,j.zw)(n.form.errors[1]),1)):(0,o.kq)("",!0),(0,o.wy)((0,o._)("textarea",{class:"bg-dark-gray text-dark-white px-3 py-2 m-2 border-solid border-2 border-light-teal rounded-2xl w-[100%] h-[200px]",name:"message","onUpdate:modelValue":t[2]||(t[2]=e=>n.form.message=e),placeholder:"Type message here..."},null,512),[[m.nr,n.form.message]]),null!=n.form.errors[2]?((0,o.wg)(),(0,o.iD)("p",St,(0,j.zw)(n.form.errors[2]),1)):(0,o.kq)("",!0),Ct],32)])])])}var Pt={name:"ContactForm",components:{SectionHeader:ie},data(){return{form:{errors:[null,null,null],name:null,email:null,message:null}}},methods:{formSubmit(e){console.log(this.form),null==this.form.name||""==this.form.name?this.form.errors[0]="Name is required":this.form.errors[0]=null,null==this.form.email||""==this.form.email?this.form.errors[1]="Email is required":this.validEmail(this.form.email)?this.form.errors[1]=null:this.form.errors[1]="Email is invalid",null==this.form.message||""==this.form.message?this.form.errors[2]="Message is required":this.form.errors[2]=null,null==this.form.errors[0]&&null==this.form.errors[1]&&null==this.form.errors[2]||e.preventDefault()},validEmail:function(e){var t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(e)}}};const Tt=(0,s.Z)(Pt,[["render",Dt]]);var At=Tt,Lt={name:"App",components:{Header:M,Landing:Z,About:le,Work:Te,Projects:bt,ContactForm:At}};const Wt=(0,s.Z)(Lt,[["render",p]]);var Ht=Wt;const Mt={class:"bg-dark-gray h-screen w-screen overflow-x-hidden flex justify-center items-center flex-col"},Nt=(0,o._)("h1",{class:"text-white text-7xl"},"404",-1),zt=(0,o._)("h1",{class:"text-white text-2xl mt-6"},"Not found",-1),qt=(0,o._)("h1",{class:"text-white text-base mt-10 mx-6"}," The page requested could not be found on our server ",-1),Rt=[Nt,zt,qt];function It(e,t,r,i,n,s){return(0,o.wg)(),(0,o.iD)("div",Mt,Rt)}var Ot={name:"NotFound"};const Ut=(0,s.Z)(Ot,[["render",It]]);var Jt=Ut;const Ft={src:"Kyle_Damschen_Resume.pdf",type:"application/pdf",width:"100%",height:"100%"};function Zt(e,t){return(0,o.wg)(),(0,o.iD)("embed",Ft)}const Et={},Bt=(0,s.Z)(Et,[["render",Zt]]);var Kt=Bt;const Vt=[{path:"/",name:"Home",component:Ht,meta:{title:"Kyle's Portfolio"}},{path:"/resume",name:"resume",component:Kt,meta:{title:"Resume"}},{path:"/:pathMatch(.*)*",name:"NotFound",component:Jt,meta:{title:"404"}}],Yt=(0,d.p7)({history:(0,d.PO)(),routes:Vt}),Gt="Kyle's Portfolio";Yt.afterEach((e=>{document.title=e.meta.title||Gt})),(0,m.ri)(c).use(Yt).mount("#app");var Qt=Yt;let $t="",Xt="#app";const er=document.querySelector(Xt);er&&void 0!==er.__vue_app__?$t=er.__vue_app__._instance.proxy:($t=(0,m.ri)(c),$t.use(Qt),$t.mount(Xt))}},t={};function r(o){var i=t[o];if(void 0!==i)return i.exports;var n=t[o]={exports:{}};return e[o].call(n.exports,n,n.exports,r),n.exports}r.m=e,function(){var e=[];r.O=function(t,o,i,n){if(!o){var s=1/0;for(d=0;d<e.length;d++){o=e[d][0],i=e[d][1],n=e[d][2];for(var l=!0,a=0;a<o.length;a++)(!1&n||s>=n)&&Object.keys(r.O).every((function(e){return r.O[e](o[a])}))?o.splice(a--,1):(l=!1,n<s&&(s=n));if(l){e.splice(d--,1);var c=i();void 0!==c&&(t=c)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[o,i,n]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.p="/"}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,o){var i,n,s=o[0],l=o[1],a=o[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(i in l)r.o(l,i)&&(r.m[i]=l[i]);if(a)var d=a(r)}for(t&&t(o);c<s.length;c++)n=s[c],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(d)},o=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=r.O(void 0,[998],(function(){return r(2590)}));o=r.O(o)})();
//# sourceMappingURL=app.97601252.js.map