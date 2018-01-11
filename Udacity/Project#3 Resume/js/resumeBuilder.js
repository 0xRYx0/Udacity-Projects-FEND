/*
This is empty on purpose! Your code to build the resume will go here.
 */

var data = "%data%";
var bio = {
   name : "Rakan Yamani",
   role : "Web Development",
   contacts : {
         mobile: "+966 5455333452",
         email: "rakan210@gmail.com",
         github: "rakan210",
         twitter: "@RHY_210",
         location: "KSA-DMM"
   },
   welcomeMessage: "\"Nothing is impossible, the word itself says 'I'm possible!'\", <small>Audrey Hepburn</small>",
   skills: ["Teamwork","Leadership","Enthusiastic","Detailed Oriented"],
   biopic: "images/prof.gif",
   display: function (){
      var formattedName = HTMLheaderName.replace(data, bio.name);
      var formattedRole = HTMLheaderRole.replace(data, bio.role);
      var formattedMobile= HTMLmobile.replace(data, bio.contacts.mobile);
      var formattedEmail= HTMLemail.replace(data, bio.contacts.email);
      var formattedTwitter = HTMLtwitter.replace(data, bio.contacts.twitter);
      var formattedGithub= HTMLgithub.replace(data, bio.contacts.github);
      var formattedLocation= HTMLlocation.replace(data, bio.contacts.location);
      var formattedPic= HTMLbioPic.replace(data, bio.biopic);
      var formattedMsg = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
      $("#header").prepend(formattedRole);
      $("#header").prepend(formattedName);
      $("#topContacts").append(formattedMobile);
      $("#topContacts").append(formattedEmail);
      $("#topContacts").append(formattedTwitter);
      $("#topContacts").append(formattedGithub);
      $("#topContacts").append(formattedLocation);
      $("#header").append(formattedPic);
      $("#header").append(formattedMsg);
      $("#header").append(HTMLskillsStart);
      $("#footerContacts").append(formattedMobile);
      $("#footerContacts").append(formattedEmail);
      $("#footerContacts").append(formattedTwitter);
      $("#footerContacts").append(formattedGithub);
      $("#footerContacts").append(formattedLocation);

      bio.skills.forEach(function(skill) {
          var formattedSkill = HTMLskills.replace(data, skill);
          $("#skills").append(formattedSkill);
      });
   }
};


var education = {
   schools: [
      {
         name: "King Fahd University of Petroleum and Minerals (KFUPM)",
         location: "Dhahran",
         degree: "Bachelor",
         majors: ["Computer Engineering"],
         dates: "2010-2015",
         url: "http://www.kfupm.edu.sa/default.aspx"
      }
   ],
   onlineCourses: [
      {
         title: "Front End Development - Udacity",
         school: "Udacity",
         dates: "Dec 2017 - Feb 2018",
         url: "https://sa.udacity.com/course/front-end-web-developer-nanodegree--nd001"
      },
      {
         title: "Intro to Programming - Udacity",
         school: "Udacity",
         dates: "Dec 2017 - Feb 2018",
         url: "https://sa.udacity.com/course/intro-to-programming-nanodegree--nd000"
      }
   ],
   display: function () {

      $("#education").append(HTMLschoolStart);
      education.schools.forEach(function(school) {
         var formattedShoolName = HTMLschoolName.replace(data, school.name);
         var formattedSchoolDegree = HTMLschoolDegree.replace(data, school.degree);
         var formattedSchoolDates = HTMLschoolDates.replace(data, school.dates);
         var formattedSchoolLocation = HTMLschoolLocation.replace(data, school.location);
         $(".education-entry").append(formattedShoolName);
         $(".education-entry").append(formattedSchoolDates);
         $(".education-entry").append(formattedSchoolLocation);

         school.majors.forEach(function(major) {
            var formattedSchoolMajor = HTMLschoolMajor.replace(data, major);
            $(".education-entry").append(formattedSchoolMajor);
         });
      });

      $("#education").append(HTMLonlineClasses);
      education.onlineCourses.forEach(function(course) {
         var formattedOnlineTitle = HTMLonlineTitle.replace(data, course.title);
         var formattedOnlineSchool = HTMLonlineSchool.replace(data, course.school);
         var formattedOnlineDates = HTMLonlineDates.replace(data, course.dates);
         var formattedOnlineURL = HTMLonlineURL.replace(data, course.url);
         $(".education-entry").append(formattedOnlineTitle);
         $(".education-entry").append(formattedOnlineSchool);
         $(".education-entry").append(formattedOnlineDates);
         $(".education-entry").append(formattedOnlineURL);
      });



   }
};


var work = {
   jobs: [
      {
          employer: "Saudi Aramco",
          title: "Systems Analyst",
          location: "Dhahran",
          dates: "2017 - in progress",
          description: "A systems analyst is an information technology (IT) professional who specializes in analyzing, "+
          "designing and implementing information systems. Systems analysts assess the suitability of information systems "+
          "in terms of their intended outcomes and liaise with end users, software vendors and programmers in order to achieve these outcomes."
       },
       {
          employer: "Saudi Aramco",
          title: "Computer System Specilist III",
          location: "Dhahran",
          dates: "2015 - 2017",
          description: "A Security Operations Center (SOC) is a centralized unit that deals with security issues on an organizational"+
          " and technical level. A SOC within a building or facility is a central location from where staff supervises the site, using "+
          "data processing technology. Typically, a SOC is equipped for access monitoring, and controlling of alarms, and networks"
       }
    ],
    display: function (){
         $("#workExperience").append(HTMLworkStart);
         work.jobs.forEach(function(job) {
            var formattedWorkEmployer = HTMLworkEmployer.replace(data, job.employer);
            var formattedWorkTitle = HTMLworkTitle.replace(data, job.title);
            var formattedWorkDates = HTMLworkDates.replace(data, job.location);
            var formattedWorkLocation = HTMLworkLocation.replace(data, job.dates);
            var formattedWorkDescription = HTMLworkDescription.replace(data, job.description);
            $(".work-entry").append(formattedWorkEmployer);
            $(".work-entry").append(formattedWorkTitle);
            $(".work-entry").append(formattedWorkDates);
            $(".work-entry").append(formattedWorkLocation);
            $(".work-entry").append(formattedWorkDescription);
         });
    }
};


var projects ={
   projects: [
      {
          title: "Water Project - Example",
          dates: "2017",
          description: "The county courthouse is a historic building that is located in the oldest town in the state. Over the past few years several (localized) floods have occurred in the two-block region surrounding the courthouse. These floods develop as a result of rainfall events that are at or near the yearly maximum. The floodwaters have flowed both into the historic courthouse (photos were provided) and the adjoining annex, bordering the parking lot to the east of the courthouse. The floods originate in the vicinity of the parking lot and flow south and west into the courthouse complex, exiting onto the downhill streets adjacent to the courthouse.",
          images: ["images/project.jpg"]
       }
   ],
   display: function (){
         $("#projects").append(HTMLprojectStart);
         projects.projects.forEach(function(project) {
            var formattedProjectTitle = HTMLprojectTitle.replace(data, project.title);
            var formattedProjectDates= HTMLprojectDates.replace(data, project.dates);
            var formattedProjectDescription= HTMLprojectDescription.replace(data, project.description);
            $(".project-entry").append(formattedProjectTitle);
            $(".project-entry").append(formattedProjectDates);
            $(".project-entry").append(formattedProjectDescription);

            project.images.forEach(function(image) {
               var formattedProjectImage = HTMLprojectImage.replace(data, image);
               $(".project-entry").append(formattedProjectImage);
               $("#projectImg").attr("width","500");
            });
         });
   }

};

bio.display();
education.display();
work.display();
projects.display();
