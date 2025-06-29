import React, { useEffect, useState } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import {
  Container,
  Grid,
  Card,
  StyledTable,
  Th,
  Td,
  Section,
  Ticker,
  NewsGrid,
  NewsCard,
  Spinner,
} from '../styles/components';
import Hero from '../components/Hero';

function WorldCup() {
  const FINAL_DATE = new Date('2026-07-15T18:00:00Z');
  const [daysLeft, setDaysLeft] = useState(Math.ceil((FINAL_DATE - new Date()) / (1000 * 60 * 60 * 24)));

  const [standings, setStandings] = useState([]);
  const [upcomingMatches, setUpcomingMatches] = useState([]);
  const [pastMatches, setPastMatches] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const API_KEY = 'YOUR_API_KEY'; // Insert your API-Football key
  const API_BASE = 'https://v3.football.api-sports.io';
  const LEAGUE_ID = 545; // FIFA Club World Cup league id
  const SEASON = '2023';

  const fallbackStandings = [
    {
      group: 'Group A',
      teams: [
        { name: 'Team A', points: 6, wins: 2, losses: 0, draws: 0, logo: 'https://via.placeholder.com/20' },
        { name: 'Team B', points: 3, wins: 1, losses: 1, draws: 0, logo: 'https://via.placeholder.com/20' },
      ],
    },
  ];

  const fallbackUpcoming = [
    {
      date: '2023-12-15T16:00:00Z',
      team1: 'Team A',
      team2: 'Team B',
      stadium: 'National Stadium',
      city: 'City',
      logo1: 'https://via.placeholder.com/20',
      logo2: 'https://via.placeholder.com/20',
    },
  ];

  const fallbackPast = [
    {
      date: '2023-02-10T18:00:00Z',
      team1: 'Team C',
      team2: 'Team D',
      score1: 2,
      score2: 1,
      stadium: 'Old Stadium',
      city: 'City',
      logo1: 'https://via.placeholder.com/20',
      logo2: 'https://via.placeholder.com/20',
    },
  ];

  const fallbackNews = [
    {
      title: 'Host cities confirmed for Club World Cup',
      image: 'https://via.placeholder.com/300x140',
      snippet: 'FIFA announces the stadiums that will stage the upcoming tournament.',
      link: '#',
    },
    {
      title: 'Star players to watch this year',
      image: 'https://via.placeholder.com/300x140',
      snippet: 'A look at the key talents expected to shine on the big stage.',
      link: '#',
    },
    {
      title: 'How the teams qualified',
      image: 'https://via.placeholder.com/300x140',
      snippet: 'Reviewing the path clubs took to earn their place in the competition.',
      link: '#',
    },
  ];

  const formatDate = (d) => dayjs(d).format('MMM D, YYYY');
  const formatTime = (d) => dayjs(d).format('HH:mm');

  useEffect(() => {
    const id = setInterval(() => {
      setDaysLeft(Math.ceil((FINAL_DATE - new Date()) / (1000 * 60 * 60 * 24)));
    }, 86400000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const standingsRes = await axios.get(`${API_BASE}/standings`, {
          params: { league: LEAGUE_ID, season: SEASON },
          headers: { 'x-apisports-key': API_KEY },
        });
        const fixturesRes = await axios.get(`${API_BASE}/fixtures`, {
          params: { league: LEAGUE_ID, season: SEASON },
          headers: { 'x-apisports-key': API_KEY },
        });

        const groupsData = standingsRes.data.response[0].league.standings;
        const parsedStandings = groupsData.map((groupArr) => ({
          group: groupArr[0].group,
          teams: groupArr.map((t) => ({
            name: t.team.name,
            points: t.points,
            wins: t.all.win,
            losses: t.all.lose,
            draws: t.all.draw,
            logo: t.team.logo,
          })),
        }));

        const fixtures = fixturesRes.data.response.map((f) => ({
          date: f.fixture.date,
          team1: f.teams.home.name,
          team2: f.teams.away.name,
          logo1: f.teams.home.logo,
          logo2: f.teams.away.logo,
          score1: f.goals.home,
          score2: f.goals.away,
          stadium: f.fixture.venue.name,
          city: f.fixture.venue.city,
        }));
        const now = new Date();
        setUpcomingMatches(fixtures.filter((m) => new Date(m.date) >= now));
        setPastMatches(fixtures.filter((m) => new Date(m.date) < now));
        setStandings(parsedStandings);
      } catch (e) {
        console.error(e);
        setError(true);
        setStandings(fallbackStandings);
        setUpcomingMatches(fallbackUpcoming);
        setPastMatches(fallbackPast);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      <Ticker>
        {upcomingMatches.map((m, idx) => (
          <span key={idx} style={{ padding: '0 15px' }}>
            {dayjs(m.date).format('MMM D')} {m.team1} vs {m.team2}
          </span>
        ))}
      </Ticker>

      <Hero
        title="FIFA Club World Cup | Live Scores & Highlights"
        background="https://digitalhub.fifa.com/transform/87954546-0b34-4b94-a39f-dbc88fa7bdff"
      />

      <Section style={{ textAlign: 'center' }}>
        <h2>{daysLeft} days until the FIFA World Cup Final</h2>
      </Section>

      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '40px 0' }}>
          <Spinner />
        </div>
      ) : (
        <>
          <Section>
            <h3>🏟️ Club World Cup Headlines</h3>
            <NewsGrid>
              {fallbackNews.map((n, i) => (
                <NewsCard key={i}>
                  <img src={n.image} alt={n.title} />
                  <div>
                    <h4>{n.title}</h4>
                    <p>{n.snippet}</p>
                    <a href={n.link}>Read More</a>
                  </div>
                </NewsCard>
              ))}
            </NewsGrid>
          </Section>

          <Section>
            <h3>Group Standings</h3>
            <Grid>
              {standings.map((g) => (
                <Card as="details" key={g.group} style={{ minWidth: '250px' }}>
                  <summary>{g.group}</summary>
                  <StyledTable>
                    <thead>
                      <tr>
                        <Th>Team</Th>
                        <Th>Pts</Th>
                        <Th>W</Th>
                        <Th>L</Th>
                        <Th>D</Th>
                      </tr>
                    </thead>
                    <tbody>
                      {g.teams.map((t) => (
                        <tr key={t.name}>
                          <Td>
                            <img src={t.logo} alt={t.name} width="20" style={{ marginRight: '4px' }} />
                            {t.name}
                          </Td>
                          <Td>{t.points}</Td>
                          <Td>{t.wins}</Td>
                          <Td>{t.losses}</Td>
                          <Td>{t.draws}</Td>
                        </tr>
                      ))}
                    </tbody>
                  </StyledTable>
                </Card>
              ))}
            </Grid>
          </Section>

          <Section>
            <h3>Upcoming Matches</h3>
            <Grid>
              {upcomingMatches.map((m, idx) => (
                <Card key={idx} style={{ minWidth: '250px' }}>
                  <h4>
                    <img src={m.logo1} alt={m.team1} width="20" style={{ marginRight: '4px' }} />
                    {m.team1} vs {m.team2}
                    <img src={m.logo2} alt={m.team2} width="20" style={{ marginLeft: '4px' }} />
                  </h4>
                  <p>
                    {formatDate(m.date)} {formatTime(m.date)}
                  </p>
                  <p>
                    {m.stadium}, {m.city}
                  </p>
                </Card>
              ))}
            </Grid>
          </Section>

          <Section>
            <h3>Past Results</h3>
            <Grid>
              {pastMatches.map((m, idx) => (
                <Card key={idx} style={{ minWidth: '250px' }}>
                  <h4>
                    <img src={m.logo1} alt={m.team1} width="20" style={{ marginRight: '4px' }} />
                    {m.team1} {m.score1} - {m.score2} {m.team2}
                    <img src={m.logo2} alt={m.team2} width="20" style={{ marginLeft: '4px' }} />
                  </h4>
                  <p>
                    {formatDate(m.date)} {formatTime(m.date)}
                  </p>
                  <p>
                    {m.stadium}, {m.city}
                  </p>
                </Card>
              ))}
            </Grid>
          </Section>
        </>
      )}

      {error && <p style={{ marginTop: '20px' }}>Live data could not be loaded.</p>}
    </Container>
  );
}

export default WorldCup;
