// Hello.
//
// This is JSHint, a tool that helps to detect errors and potential
// problems in your JavaScript code.
//
// To start, simply enter some JavaScript anywhere on this page. Your
// report will appear on the right side.
//
// Additionally, you can toggle specific options in the Configure
// menu.
var bio = {
    "name": "Jackie Anne Robson",
    "role": "Junior Web Developer",
    "contacts": {
        "mobile": "07984090124",
        "email": "jackie.anne.robson@gmail.com",
        "github": "Jackie-Robson",
        "location": "Canterbury",
    },
    "skills": ["javaScript", "CSS", "HTML"],
    "welcomeMessage": "Thank you for taking the time to look at my online Resume that i have built using javaScript!",
    "biopic": "images/profile.jpg",
    "display": function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").prepend(formattedName + formattedRole);
        $("#header").prepend(formattedBiopic);
        $("#topContacts,#footerContacts").append(formattedMobile);
        $("#topContacts,#footerContacts").append(formattedEmail);
        $("#topContacts,#footerContacts").append(formattedGithub);
        $("#topContacts,#footerContacts").append(formattedLocation);
        $("#topContacts,").append(formattedWelcome);
        $("#header").append(HTMLskillsStart);
        bio.skills.forEach(function(skill) {
            var formattedSkill = HTMLskills.replace("%data%", [skill]);
            $("#skills").prepend(formattedSkill);
        });

    }
};

bio.display();


var education = {
    "schools": [{
        "start": HTMLschoolStart,
        "name": "Hernebay Highschool",
        "location": "Hernebay, Kent",
        "degree": "GCSE",
        "majors": ["English", "Maths", "Science Double", "ICT GNVQ (4 grade eqivilant)", "French"],
        "dates": "2002-2007",
        "url": "www.hernebayhigh.kent.sch.uk/"
    }, {
        "start": HTMLschoolStart,
        "name": "Hernebay Sixth form",
        "location": "Hernebay, Kent",
        "degree": "A level",
        "majors": ["Business Studies", "ICT", "Media Studies"],
        "dates": "2007-2009",
        "url": "www.hernebayhigh.kent.sch.uk/51/how-to-apply"
    }],
    "onlineCourses": [{
        "start": HTMLschoolStart,
        "title": "NVQ level 2 Hairdressing",
        "school": "PH Academy",
        "dates": "January 2012- march 2013",
        "url": "www.phacademy.co.uk/"
    }, {
        "start": HTMLschoolStart,
        "title": "Front End Web Development Nano Degree",
        "school": "Udacity",
        "dates": "november 2016 - ",
        "url": "www.udacity.com"
    }],
};


education.display = function() {

    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);

        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
        var formattedSchoolMajors = HTMLschoolMajor.replace("%data%", school.majors);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedSchoolUrl = HTMLschoolName.replace("#", school.name);
        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
        $(".education-entry:last").append(formattedSchoolName);
        $(".education-entry:last").append(formattedSchoolDegree);
        $(".education-entry:last").append(formattedSchoolDates);
        $(".education-entry:last").append(formattedSchoolMajors);
        $(".education-entry:last").append(formattedSchoolLocation);
    });

    $(".education").append(HTMLonlineClasses);

    education.onlineCourses.forEach(function(school) {
        $("#education").append(HTMLschoolStart);

        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", school.title);
        $(".education-entry:last").append(formattedOnlineTitle);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", school.school);
        $(".education-entry:last").append(formattedOnlineSchool);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", school.dates);
        $(".education-entry:last").append(formattedOnlineDates);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", school.url);
        $(".education-entry:last").append(formattedOnlineURL);
    });
};

education.display();

var work = {
    "jobs": [{
        "employer": "LBC Downtown",
        "title": "Assistant Manager",
        "location": "London",
        "dates": "in Progress ",
        "description": "I have worked at LBC Downtown since I was 18 years old." +
            " I started out answering the phones and taking mini cab bookings and as i got to " +
            "know the company better i eventualy rose to the possition of manager" +
            ", which i have been at for the last 4 years."
    }]

};

work.display = function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedWorkDates = HTMLworkDates.replace("%data%", job.dates);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
        $(".work-entry:last").append(formattedTitle);
        $(".work-entry:last").append(formattedEmployer);
        $(".work-entry:last").append(formattedWorkDates);
        $(".work-entry:last").append(formattedWorkDescription);
        $(".work-entry:last").append(formattedWorkLocation);
    });
};
work.display();

var projects = {
    projects: [{
            "start": HTMLprojectStart,
            "name": "sample 1",
            "dates": "may 26th - june 30th",
            "description": "blah blah blah blah",
            "images": ["images/samp1.png"]

        },
        {
            "start": HTMLprojectStart,
            "name": "sample 2",
            "dates": "may 26th - june 30th",
            "description": "blah blah blah blah",
            "images": ["images/samp2.png", "images/samp1.png"]

        }
    ],
};



projects.display = function() {
    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.name);
        var formattedPojectDates = HTMLprojectDates.replace("%data%", project.dates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);

        project.images.forEach(function(image) {
            var formattedProjectImage = HTMLprojectImage.replace("%data%", image);
            $(".project-entry:last").append(formattedProjectImage);
        });

        $(".project-entry:last").append(formattedProjectTitle);
        $(".project-entry:last").append(formattedPojectDates);
        $(".project-entry:last").append(formattedProjectDescription);

    });
};

projects.display();


$("#mapDiv").append(googleMap);
$("#main").append(internationalizeButton);

function inName(name) {

    var inNameArray = bio.name.split(" ");
    inNameArray[2] = inNameArray[2].toUpperCase();
    var newName = inNameArray[0] + " " + inNameArray[1] + " " + inNameArray[2];
    return newName;
}