function skillsMember() {
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var memberBtn = document.getElementById("memberBtn");
    var skillsBtn = document.getElementById("skillsBtn");
    if (member.style.display === "none") {
        member.style.display = "block";
        skills.style.display = "none";
        memberBtn.style.backgroundColor = "#f7f7f7";
        skillsBtn.style.backgroundColor = "#e9e9e9";
    }
}