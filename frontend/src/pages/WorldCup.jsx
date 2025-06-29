import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Grid, Card } from '../styles/components';
import Hero from '../components/Hero';

function WorldCup() {
  const FINAL_DATE = new Date('2026-07-15T18:00:00Z');
  const [daysLeft, setDaysLeft] = useState(Math.ceil((FINAL_DATE - new Date()) / (1000 * 60 * 60 * 24)));
  const [groups, setGroups] = useState([]);
  const [pastMatches, setPastMatches] = useState([]);
  const [upcomingMatches, setUpcomingMatches] = useState([]);
  const [error, setError] = useState(false);

  const fallbackGroups = [
    { name: 'Group A', teams: ['Canada', 'France', 'Brazil', 'Japan'] },
    { name: 'Group B', teams: ['USA', 'Germany', 'Spain', 'Mexico'] },
  ];

  const fallbackUpcoming = [
    {
      date: '2026-06-12',
      time: '18:00',
      team1: 'Canada',
      team2: 'France',
      stadium: 'Toronto Stadium',
      city: 'Toronto',
    },
    {
      date: '2026-06-13',
      time: '21:00',
      team1: 'Brazil',
      team2: 'Japan',
      stadium: 'Vancouver Arena',
      city: 'Vancouver',
    },
  ];

  useEffect(() => {
    const id = setInterval(() => {
      setDaysLeft(Math.ceil((FINAL_DATE - new Date()) / (1000 * 60 * 60 * 24)));
    }, 86400000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    axios
      .get('https://raw.githubusercontent.com/openfootball/worldcup.json/master/2018/worldcup.json')
      .then((res) => {
        const rounds = res.data.rounds;
        const groupStage = rounds.flatMap((r) => r.matches.filter((m) => m.group));

        const groupsMap = {};
        groupStage.forEach((m) => {
          const g = m.group;
          if (!groupsMap[g]) groupsMap[g] = new Set();
          groupsMap[g].add(m.team1.name);
          groupsMap[g].add(m.team2.name);
        });
        const groupsArr = Object.entries(groupsMap).map(([name, teams]) => ({
          name,
          teams: Array.from(teams),
        }));

        const matches = groupStage.map((m) => ({
          date: m.date,
          time: m.time,
          team1: m.team1.name,
          team2: m.team2.name,
          score1: m.score1,
          score2: m.score2,
          stadium: m.stadium && m.stadium.name,
          city: m.city,
        }));

        const now = new Date();
        const past = matches.filter((m) => new Date(m.date) < now);
        const upcoming = matches.filter((m) => new Date(m.date) >= now);

        setGroups(groupsArr);
        setPastMatches(past);
        setUpcomingMatches(upcoming.length ? upcoming : fallbackUpcoming);
      })
      .catch(() => {
        setError(true);
        setGroups(fallbackGroups);
        setUpcomingMatches(fallbackUpcoming);
      });
  }, []);

  return (
    <Container>
      <Hero
        title="World Cup"
        subtitle="Countdown, Results, and Live Updates"
        background="https://images.unsplash.com/photo-1506459225024-1428097a7e18?auto=compress&cs=tinysrgb&h=400"
      />
      <h2 style={{ textAlign: 'center', margin: '20px 0' }}>{daysLeft} days left until the Final</h2>

      <h3>Groups</h3>
      <Grid>
        {groups.map((g) => (
          <Card key={g.name} style={{ minWidth: '200px' }}>
            <h4>{g.name}</h4>
            <ul>
              {g.teams.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </Card>
        ))}
      </Grid>

      <h3 style={{ marginTop: '20px' }}>Upcoming Matches</h3>
      <Grid>
        {upcomingMatches.map((m, idx) => (
          <Card key={idx} style={{ minWidth: '200px' }}>
            <h4>
              {m.team1} vs {m.team2}
            </h4>
            <p>
              {m.date} {m.time}
            </p>
            {m.stadium && (
              <p>
                {m.stadium}, {m.city}
              </p>
            )}
          </Card>
        ))}
      </Grid>

      <h3 style={{ marginTop: '20px' }}>Past Results</h3>
      <Grid>
        {pastMatches.map((m, idx) => (
          <Card key={idx} style={{ minWidth: '200px' }}>
            <h4>
              {m.team1} {m.score1} - {m.score2} {m.team2}
            </h4>
            <p>
              {m.date} {m.time}
            </p>
            {m.stadium && (
              <p>
                {m.stadium}, {m.city}
              </p>
            )}
          </Card>
        ))}
      </Grid>

      {error && <p style={{ marginTop: '20px' }}>Live data could not be loaded.</p>}
    </Container>
  );
}

export default WorldCup;
