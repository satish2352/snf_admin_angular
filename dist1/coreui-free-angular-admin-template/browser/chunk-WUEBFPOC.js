import{Jb as i,Kb as a,U as o,_ as s}from"./chunk-7ZEEEYEF.js";var l=(()=>{let r=class r{AddNewsItem(t){throw new Error("Method not implemented.")}deleteNewsItem(t){throw new Error("Method not implemented.")}constructor(t){this.http=t,this.carrosalurl="https://snf.backend.socialforumindia.com/carrosal",this.Home_2_Cardsurl="https://snf.backend.socialforumindia.com/home2cards",this.Home_4_Cardsurl="https://snf.backend.socialforumindia.com/home4cards",this.supporterurl="https://snf.backend.socialforumindia.com/supporter",this.mediaurl="https://snf.backend.socialforumindia.com/homemedia",this.Important_SNF_Project_para="https://snf.backend.socialforumindia.com/Important_SNF_Project_para",this.founderparticipateurl="https://snf.backend.socialforumindia.com/founderparticipates",this.Mentorsurl="https://snf.backend.socialforumindia.com/mentors",this.NRIParticipantsurl="https://snf.backend.socialforumindia.com/NRI_Participants",this.StateParticipantsurl="https://snf.backend.socialforumindia.com/stateparticipant",this.OnGoingProject_Clean_Water_Projecturl="https://snf.backend.socialforumindia.com/OnGoingProject_Clean_Water_Project",this.OnGoingProject_Shahid_Jawan_Fundurl="https://snf.backend.socialforumindia.com/OnGoingProject_Shahid_Jawan_Fund",this.OnGoingProject_Educational_Facilitiesurl="https://snf.backend.socialforumindia.com/OnGoingProject_Educational_Facilities",this.OnGoingProject_Health_MedicalProjectsurl="https://snf.backend.socialforumindia.com/OnGoingProject_Health_MedicalProjects",this.OnGoingProject_Environmental_Conservationurl="https://snf.backend.socialforumindia.com/OnGoingProject_Environmental_Conservation",this.OnGoingProject_Sport_Projectsurl="https://snf.backend.socialforumindia.com/OnGoingProject_Sport_Projects",this.OnGoingProject_Birthday_Celebrationsurl="https://snf.backend.socialforumindia.com/OnGoingProject_Birthday_Celebrations",this.article_on_snfurl="https://snf.backend.socialforumindia.com/article_on_snf",this.snf_in_news_papersurl="https://snf.backend.socialforumindia.com/homemedia",this.awards_recognationurl="https://snf.backend.socialforumindia.com/awards_recognation",this.upcoming_url="https://snf.backend.socialforumindia.com/upcomingeventsRoute",this.projectcategory_url="https://snf.backend.socialforumindia.com/upcomingeventstitleRoute"}addCarrosalItem(t){return this.http.post(`${this.carrosalurl}/post`,t)}getCarrosalData(){return this.http.get(`${this.carrosalurl}/get`)}updateCarrosalItem(t,e){return this.http.put(`${this.carrosalurl}/put/${t}`,e)}deleteCarrosalItem(t){let e=`${this.carrosalurl}/delete/${t}`;return this.http.delete(e,{responseType:"text"})}add_Home_2_Cards(t){return this.http.post(`${this.Home_2_Cardsurl}/post`,t)}get_Home_2_Cards(){return this.http.get(`${this.Home_2_Cardsurl}/get`)}update_Home_2_Cards(t,e){return this.http.put(`${this.Home_2_Cardsurl}/put/${t}`,e)}delete_Home_2_Cards(t){return this.http.delete(`${this.Home_2_Cardsurl}/delete/${t}`)}add_Home_4_Cards(t){return this.http.post(`${this.Home_4_Cardsurl}/post`,t)}get_Home_4_Cards(){return this.http.get(`${this.Home_4_Cardsurl}/get`)}update_Home_4_Cards(t,e){return this.http.put(`${this.Home_4_Cardsurl}/put/${t}`,e)}delete_Home_4_Cards(t){let e=`${this.Home_4_Cardsurl}/delete/${t}`;return this.http.delete(e,{responseType:"text"})}addSupporter(t){return this.http.post(`${this.supporterurl}/post`,t)}getSupporters(){return this.http.get(`${this.supporterurl}/get`)}updateSupporter(t,e){return this.http.put(`${this.supporterurl}/put/${t}`,e)}deleteSupporter(t){let e=`${this.supporterurl}/delete/${t}`;return this.http.delete(e,{responseType:"text"})}postHome_Media(t){return this.http.post(`${this.mediaurl}/post`,t)}getHome_Media(){return this.http.get(`${this.mediaurl}/get`)}updateHome_Media(t,e){return this.http.put(`${this.mediaurl}/put/${t}`,e)}deleteHome_Media(t){let e=`${this.mediaurl}/delete/${t}`;return this.http.delete(e,{responseType:"text"})}getImportant_SNF_Project_para(){return this.http.get(this.Important_SNF_Project_para+"/get")}addImportant_SNF_Project_para(t){return this.http.post(this.Important_SNF_Project_para+"/post",{para:t})}updateImportant_SNF_Project_para(t,e){return this.http.put(this.Important_SNF_Project_para+`/put/${t}`,{para:e})}deleteImportant_SNF_Project_para(t){return this.http.delete(this.Important_SNF_Project_para+`/delete/${t}`)}getFounderParticipants(){return this.http.get(`${this.founderparticipateurl}/get`)}addFounderParticipant(t){return this.http.post(`${this.founderparticipateurl}/post`,t)}updateFounderParticipant(t,e){return this.http.put(`${this.founderparticipateurl}/put/${t}`,e)}deleteFounderParticipant(t){let e=`${this.founderparticipateurl}/delete/${t}`;return this.http.delete(e,{responseType:"text"})}getMentors(){return this.http.get(`${this.Mentorsurl}/get`)}addMentors(t){return this.http.post(`${this.Mentorsurl}/post`,t)}updateMentors(t,e){return this.http.put(`${this.Mentorsurl}/put/${t}`,e)}deleteMentors(t){let e=`${this.Mentorsurl}/delete/${t}`;return this.http.delete(e,{responseType:"text"})}getNRI_Participants(){return this.http.get(`${this.NRIParticipantsurl}/get`)}addNRI_Participants(t){return this.http.post(`${this.NRIParticipantsurl}/post`,t)}updateNRI_Participants(t,e){return this.http.put(`${this.NRIParticipantsurl}/put/${t}`,e)}deleteNRI_Participants(t){let e=`${this.NRIParticipantsurl}/delete/${t}`;return this.http.delete(e,{responseType:"text"})}getState_Participants(){return this.http.get(`${this.StateParticipantsurl}/get`)}addState_Participants(t){return this.http.post(`${this.StateParticipantsurl}/post`,t)}updateState_Participants(t,e){return this.http.put(`${this.StateParticipantsurl}/put/${t}`,e)}deleteState_Participants(t){let e=`${this.StateParticipantsurl}/delete/${t}`;return this.http.delete(e,{responseType:"text"})}getOnGoingProject_Clean_Water_Project(){return this.http.get(`${this.OnGoingProject_Clean_Water_Projecturl}/get`)}addOnGoingProject_Clean_Water_Project(t){return this.http.post(`${this.OnGoingProject_Clean_Water_Projecturl}/post`,t)}updateOnGoingProject_Clean_Water_Project(t,e){return this.http.put(`${this.OnGoingProject_Clean_Water_Projecturl}/put/${t}`,e)}deleteOnGoingProject_Clean_Water_Project(t){return this.http.delete(`${this.OnGoingProject_Clean_Water_Projecturl}/delete/${t}`)}getOnGoingProject_Shahid_Jawan_Fund(){return this.http.get(`${this.OnGoingProject_Shahid_Jawan_Fundurl}/get`)}addOnGoingProject_Shahid_Jawan_Fund(t){return this.http.post(`${this.OnGoingProject_Shahid_Jawan_Fundurl}/post`,t)}updateOnGoingProject_Shahid_Jawan_Fund(t,e){return this.http.put(`${this.OnGoingProject_Shahid_Jawan_Fundurl}/put/${t}`,e)}deleteOnGoingProject_Shahid_Jawan_Fund(t){return this.http.delete(`${this.OnGoingProject_Shahid_Jawan_Fundurl}/delete/${t}`)}getOnGoingProject_Educational_Facilities(){return this.http.get(`${this.OnGoingProject_Educational_Facilitiesurl}/get`)}addOnGoingProject_Educational_Facilities(t){return this.http.post(`${this.OnGoingProject_Educational_Facilitiesurl}/post`,t)}updateOnGoingProject_Educational_Facilities(t,e){return this.http.put(`${this.OnGoingProject_Educational_Facilitiesurl}/put/${t}`,e)}deleteOnGoingProject_Educational_Facilities(t){return this.http.delete(`${this.OnGoingProject_Educational_Facilitiesurl}/delete/${t}`)}getOnGoingProject_Health_MedicalProjects(){return this.http.get(`${this.OnGoingProject_Health_MedicalProjectsurl}/get`)}addOnGoingProject_Health_MedicalProjects(t){return this.http.post(`${this.OnGoingProject_Health_MedicalProjectsurl}/post`,t)}updateOnGoingProject_Health_MedicalProjects(t,e){return this.http.put(`${this.OnGoingProject_Health_MedicalProjectsurl}/put/${t}`,e)}deleteOnGoingProject_Health_MedicalProjects(t){return this.http.delete(`${this.OnGoingProject_Health_MedicalProjectsurl}/delete/${t}`)}getOnGoingProject_Environmental_Conservation(){return this.http.get(`${this.OnGoingProject_Environmental_Conservationurl}/get`)}addOnGoingProject_Environmental_Conservation(t){return this.http.post(`${this.OnGoingProject_Environmental_Conservationurl}/post`,t)}updateOnGoingProject_Environmental_Conservation(t,e){return this.http.put(`${this.OnGoingProject_Environmental_Conservationurl}/put/${t}`,e)}deleteOnGoingProject_Environmental_Conservation(t){return this.http.delete(`${this.OnGoingProject_Environmental_Conservationurl}/delete/${t}`)}getOnGoingProject_Sport_Projects(){return this.http.get(`${this.OnGoingProject_Sport_Projectsurl}/get`)}addOnGoingProject_Sport_Projects(t){return this.http.post(`${this.OnGoingProject_Sport_Projectsurl}/post`,t)}updateOnGoingProject_Sport_Projects(t,e){return this.http.put(`${this.OnGoingProject_Sport_Projectsurl}/put/${t}`,e)}deleteOnGoingProject_Sport_Projects(t){return this.http.delete(`${this.OnGoingProject_Sport_Projectsurl}/delete/${t}`)}getOnGoingProject_Birthday_Celebrations(){return this.http.get(`${this.OnGoingProject_Birthday_Celebrationsurl}/get`)}addOnGoingProject_Birthday_Celebrations(t){return this.http.post(`${this.OnGoingProject_Birthday_Celebrationsurl}/post`,t)}updateOnGoingProject_Birthday_Celebrations(t,e){return this.http.put(`${this.OnGoingProject_Birthday_Celebrationsurl}/put/${t}`,e)}deleteOnGoingProject_Birthday_Celebrations(t){return this.http.delete(`${this.OnGoingProject_Birthday_Celebrationsurl}/delete/${t}`)}getarticle_on_snf(){return this.http.get(`${this.article_on_snfurl}/get`)}addarticle_on_snf(t){return this.http.post(`${this.article_on_snfurl}/post`,t)}updatearticle_on_snf(t,e){return this.http.put(`${this.article_on_snfurl}/put/${t}`,e)}deletearticle_on_snf(t){let e=`${this.article_on_snfurl}/delete/${t}`;return this.http.delete(e,{responseType:"text"})}getsnf_in_news_papers(){return this.http.get(`${this.snf_in_news_papersurl}/get`)}addsnf_in_news_papers(t){return this.http.post(`${this.snf_in_news_papersurl}/post`,t)}updatesnf_in_news_papers(t,e){return this.http.put(`${this.snf_in_news_papersurl}/put/${t}`,e)}deletesnf_in_news_papers(t){let e=`${this.snf_in_news_papersurl}/delete/${t}`;return this.http.delete(e,{responseType:"text"})}getawards_recognation(){return this.http.get(`${this.awards_recognationurl}/get`)}addawards_recognation(t){return this.http.post(`${this.awards_recognationurl}/post`,t)}updateawards_recognation(t,e){return this.http.put(`${this.awards_recognationurl}/put/${t}`,e)}deleteawards_recognation(t){let e=`${this.awards_recognationurl}/delete/${t}`;return this.http.delete(e,{responseType:"text"})}addupcomingproject(t){return this.http.post(`${this.upcoming_url}/post`,t)}getupcomingproject(){return this.http.get(`${this.upcoming_url}/get`)}updateupcomingproject(t,e){return this.http.put(`${this.upcoming_url}/put/${t}`,e)}deleteupcomingproject(t){let e=`${this.upcoming_url}/delete/${t}`;return this.http.delete(e,{responseType:"text"})}addProject(t){let e=new i({"Content-Type":"application/json"});return this.http.post(`${this.projectcategory_url}/post`,JSON.stringify(t),{headers:e})}updateProject(t,e){let p=new i({"Content-Type":"application/json"});return this.http.put(`${this.projectcategory_url}/put/${t}`,JSON.stringify(e),{headers:p})}deleteProject(t){let e=`${this.projectcategory_url}/delete/${t}`;return this.http.delete(e,{responseType:"text"})}getProject(){return this.http.get(`${this.projectcategory_url}/get`)}addupcomingimage(t){return this.http.post(`${this.upcoming_url}/addImagesByCategory`,t)}getupcomingimage(){return this.http.get("https://snf.backend.socialforumindia.com/upcomingeventsRoute/getAllImagesData")}updateupcomingimage(t,e){return this.http.put(`${this.upcoming_url}/putImages/${t}`,e)}deleteupcomingimage(t){return this.http.delete(`${this.upcoming_url}/deleteImages/${t}`)}};r.\u0275fac=function(e){return new(e||r)(s(a))},r.\u0275prov=o({token:r,factory:r.\u0275fac,providedIn:"root"});let n=r;return n})();export{l as a};
