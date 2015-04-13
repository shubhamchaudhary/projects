var projects = {
  "universal": "",
  "logmein": "",
  "logmein-android": "https://github.com/DevelopFreedom/logmein-android",
  "CCDroid": "https://github.com/CCDroid/CCDroid",
  "Pulla": "https://github.com/shubhamchaudhary/pulla",
  "GistIt": "https://github.com/shubhamchaudhary/GistIt",
};
projectList = "<ul>";
for (key in projects) {
  projectList += "<li>";
  projectList += key;
  if ((projects[key] !== undefined) && (projects[key] !== null) && (projects[key] !== "")) {
    projectList += " - "
    projectList += "<a href=" + projects[key] + "  target=\"_blank\">Source</a>";
  }
  projectList += "</li>";
}
projectList += "</ul>";
var div = document.getElementById('project_list');
div.innerHTML = div.innerHTML + projectList;
