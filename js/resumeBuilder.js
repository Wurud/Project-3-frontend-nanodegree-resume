var bio = {
    name: HTMLheaderName.replace("%data%", "Wurud AlDibasi"),
    role: HTMLheaderRole.replace("%data%", "Web Developer"),
    contacts: {
        mobile: HTMLmobile.replace("%data%", "0550480083"),
        email: HTMLemail.replace("%data%", "Wurud.AlDibasi@gmail.com"),
        github: HTMLgithub.replace("%data%", "Wurud"),
        twitter: HTMLtwitter.replace("%data%", "@Wurud_AlDibasi"),
        location: HTMLlocation.replace("%data%", "Riyadh")
    },
    welcomeMessage: HTMLwelcomeMsg.replace("%data%", "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti."),
    skills: ["JavaScript", "jQuery", "CSS", "HTML"],
    biopic: HTMLbioPic.replace("%data%", "images/387×315.jpg"),
    display: function() {

        $("#header").prepend(bio.name, bio.role);
        $("#header").append(bio.biopic, bio.welcomeMessage);
        $("#topContacts, #footerContacts").append(bio.contacts.mobile,
            bio.contacts.email,
            bio.contacts.github,
            bio.contacts.twitter,
            bio.contacts.location);

        // To loop through skills array
        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);

            bio.skills.forEach(function(skill) {
                var formattedSkill = HTMLskills.replace("%data%", skill);
                $("#skills").append(formattedSkill);
            });
        }
    }
};

var work = {
    jobs: [{
            employer: "BrightWare Co",
            title: "Application Analyst",
            location: "24.79604, 46.65529",
            dates: "Novamber, 2016 - Present",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
        },
        {
            employer: "Kcoderz",
            title: "Coach",
            location: "24.6416, 46.65449",
            dates: "June, 2015 - Present",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
        }
    ],
    display: function() {
        for (var i = 0; i < work.jobs.length; i++) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
            $(".work-entry:last").append(formattedEmployer + formattedTitle, formattedDatesWorked, formattedDescription);
        }
    }
};

var projects = {
    projects: [{
        title: "Project Sample",
        dates: "2015-2016",
        description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis.",
        images: ["images/197x148.gif", "images/197x148.gif", "images/197x148.gif", "images/197x148.gif", "images/197x148.gif"]
    }],
    display: function() {
        for (var p = 0; p < projects.projects.length; p++) {

            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[p].title);
            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[p].dates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[p].description);

            $("#projects").append(HTMLprojectStart);
            $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);

            for (var i = 0; i < projects.projects[p].images.length; i++) {
                formattedImages = HTMLprojectImage.replace("%data%", projects.projects[p].images[i]);
                $(".project-entry:last").append(formattedImages);
            }
        }
    }
};

// I used map location numbers in the objects below, to specify the locations of the places instesd the displaying
// the city only.
// I prefer to display the locations on the map, instead of displaying it in the right side ex: work experince section.
var education = {
    schools: [{
        name: "Princess Noura Bint Abdulrahman University",
        location: "24.84646, 46.72473",
        degree: "Bachelor degree",
        majors: ["IS"],
        dates: "2016",
        url: "http://www.pnu.edu.sa/en/Pages/default.aspx"
    }],
    onlineCourses: [{
            title: "Front-End Web Developer Nanodegree Program",
            school: "Udacity",
            dates: "2017",
            url: "https://www.udacity.com"
        },
        {
            title: "FullBridge XBA Business Fundementals",
            school: "FullBridge",
            dates: "2015",
            url: "https://fullbridge.com"
        }
    ],
    display: function() {
        for (var i = 0; i < education.schools.length; i++) {

            var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);

            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(formattedName + formattedDegree, formattedDates);

            for (var m = 0; m < education.schools[i].majors.length; m++) {
                formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors[m]);
                $(".education-entry:last").append(formattedMajor);
            }

        }

        for (var c = 0; c < education.onlineCourses.length; c++) {

            var formattedOnlineName = HTMLonlineTitle.replace("%data%", education.onlineCourses[c].title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[c].school);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[c].dates);
            var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[c].url);

            if (c === 0) {
                $(".education-entry:last").append(HTMLonlineClasses);
            }
            $(".education-entry:last").append(formattedOnlineName + formattedOnlineSchool, formattedOnlineDates, formattedOnlineUrl);
        }
    }
};

function displayLocation() {
    var mapString = googleMap;
    $("#mapDiv").append(mapString);
}

displayLocation();

function locationizer(work_obj) {
    var locationArray = [];
    for (var job = 0; job < work_obj.jobs.length; job++) {
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }
    return locationArray;
}

// call display functions for every project.
bio.display();
work.display();
projects.display();
education.display();
