import React from "react";
import { Card, Badge } from "react-bootstrap";

type Ranking = {
  steam_id: string;
  username: string;
  score: number;
};

type PlayerStatisticsCardProps = {
  rankings: Ranking[];
};

const PlayerStatisticsCard = ({ rankings }: PlayerStatisticsCardProps) => (
  <Card className="custom-card">
    <div className="top-left"></div>
    <div className="top-right"></div>
    <div className="bottom-left"></div>
    <div className="bottom-right"></div>
    <Card.Header className="justify-content-between">
      <div className="card-title">Player Statistics</div>
      <Badge className="bg-primary-transparent border border-primary border-opacity-10 rounded-0">
        View All
      </Badge>
    </Card.Header>
    <Card.Body className="player-statistics">
      <div className="table-responsive">
        {rankings.length > 0 ? (
          <table className="table text-nowrap table-borderless table-striped">
            <thead>
              <tr>
                <th scope="col">Rank</th>
                <th scope="col">Player</th>
                <th scope="col">Score</th>
              </tr>
            </thead>
            <tbody>
              {rankings.map((player: Ranking, index: number) => (
                <tr key={player.steam_id}>
                  <td>{index + 1}</td>
                  <td>{player.username}</td>
                  <td>{player.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="text-center">No data available</div>
        )}
      </div>
    </Card.Body>
  </Card>
);

export default PlayerStatisticsCard;
