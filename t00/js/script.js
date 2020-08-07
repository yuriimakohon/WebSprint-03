var superTeam = {
  members: [],
};

superTeam.title = prompt("Enter name of the team", "Team");
superTeam.leader = prompt("Enter leader of the team", "Leader");
superTeam.members = prompt("Enter team members separated by coma").split(',');
superTeam.agenda = prompt("Enter team's agenda", "Agenda");
let isEvil = prompt("Is your team evil?", false);

if (isEvil == "false") {
  superTeam.isEvil = false;
} else {
  superTeam.isEvil = true;
}

alert("Here's the team:\n"
  + "name - " + superTeam.title
  + "\nleader - " + superTeam.leader
  + "\nmembers - " + superTeam.members
  + "\nmeberCount - " + (superTeam.members.length + 1)
  + "\nagenda - " + superTeam.agenda
  + "\nIsEvil - " + superTeam.isEvil);
