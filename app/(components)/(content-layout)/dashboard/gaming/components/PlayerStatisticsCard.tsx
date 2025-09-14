import React from "react";
import { Card, Badge } from "react-bootstrap";

type Ranking = {
  steam_id: string;
  username: string;
  score: number;
};

type PlayerStatisticsCardProps = {
  rankings: Ranking[];
  loading?: boolean;
  error?: string | null;
  isLoggedIn?: boolean;
};

const PlayerStatisticsCard = ({ rankings, loading = false, error = null, isLoggedIn = false }: PlayerStatisticsCardProps) => (
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
        {!isLoggedIn ? (
          <div className="text-center p-4">
            <div className="mb-3">
              <i className="bi bi-lock text-primary fs-1"></i>
            </div>
            <h6 className="text-muted mb-2">Login Required</h6>
            <p className="text-muted small mb-3">Please login with Steam to view player rankings.</p>
            <div className="d-flex justify-content-center">
              <small className="text-muted">
                <i className="bi bi-arrow-up me-1"></i>
                Use the "Login with Steam" button in the header
              </small>
            </div>
          </div>
        ) : loading ? (
          <div className="text-center p-4">
            <div className="spinner-border spinner-border-sm me-2" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            Loading player statistics...
          </div>
        ) : error ? (
          <div className="text-center p-4">
            <div className="mb-3">
              <i className="bi bi-exclamation-triangle text-warning fs-1"></i>
            </div>
            <h6 className="text-muted mb-2">Failed to load rankings</h6>
            <p className="text-muted small mb-3">{error}</p>
            <button 
              className="btn btn-sm btn-outline-primary"
              onClick={() => window.location.reload()}
            >
              <i className="bi bi-arrow-clockwise me-1"></i>
              Try Again
            </button>
          </div>
        ) : rankings.length > 0 ? (
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
          <div className="text-center p-4">
            <div className="mb-3">
              <i className="bi bi-people text-muted fs-1"></i>
            </div>
            <h6 className="text-muted mb-2">No Rankings Available</h6>
            <p className="text-muted small">No player data to display at the moment.</p>
          </div>
        )}
      </div>
    </Card.Body>
  </Card>
);

export default PlayerStatisticsCard;
