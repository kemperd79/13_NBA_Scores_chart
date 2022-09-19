const warriorGames = [{
    awayTeam: {
      team: 'Golden State',
      points: 119,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 106,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 105,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 127,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 126,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 85,
      isWinner: false
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 92,
      isWinner: false
    },
    awayTeam: {
      team: 'Houston',
      points: 95,
      isWinner: true
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 94,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 98,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 115,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 86,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 101,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 92,
      isWinner: false
    }
  }
]

const makeChart = (games, targetTeam) => {
  
  const ulParent = document.createElement('ul');
  
  const header = document.createElement('h1');
  header.innerText = `${targetTeam} Scores`;
  ulParent.prepend(header);

  for(let game of games){
    const {homeTeam, awayTeam} = game;
    const gameLi = document.createElement('li');
    gameLi.innerHTML = buildScoreLine(game);
    gameLi.classList.add(isWinner(game, targetTeam) ? 'win' : 'loss');
    ulParent.appendChild(gameLi);
  }
  return ulParent;
}

const buildScoreLine = ({homeTeam, awayTeam}) => {
  const {team: hTeam, points: hPoints} = homeTeam;
  const {team: aTeam, points: aPoints} = awayTeam;
  const teamNames = `${aTeam} @ ${hTeam}`;
  
  let scoreLine = `${aPoints} - ${hPoints}`;
  if (aPoints > hPoints) {
    scoreLine = `<b>${aPoints}</b> - ${hPoints}`;
  } 
  else{
    scoreLine = `${aPoints} - <b>${hPoints}</b>`;
  }
  return `${teamNames} ${scoreLine}`;
}

const isWinner = ({homeTeam, awayTeam}, targetTeam) => {
  const winner = homeTeam.team === targetTeam ? homeTeam : awayTeam;
  return winner.isWinner;  // if the home team is tartgetTeam make winngingTeam variable the homeTeam object else awayTeam object.
}

const chart1 = makeChart(warriorGames, 'Golden State');
document.body.append(chart1);

const chart2 = makeChart(warriorGames, 'Houston');
document.body.append(chart2);