"use client";
import { useState, useEffect } from "react";
import { Card, Button, Alert } from "react-bootstrap";

const ApiDebugPage = () => {
  const [testResults, setTestResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const testEndpoints = [
    { name: "로컬 API 테스트", url: "/api/test" },
    { name: "사용자 랭킹 (rewrite)", url: "/api/user/rankings" },
    { name: "직접 API 호출", url: "https://REDACTED_API/user/rankings" }
  ];

  const testApi = async (endpoint: { name: string; url: string }) => {
    setLoading(true);
    try {
      const startTime = Date.now();
      const response = await fetch(endpoint.url, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const endTime = Date.now();

      const result = {
        name: endpoint.name,
        url: endpoint.url,
        status: response.status,
        statusText: response.statusText,
        responseTime: endTime - startTime,
        success: response.ok,
        timestamp: new Date().toISOString(),
        data: null as any,
        error: null as string | null
      };

      if (response.ok) {
        try {
          result.data = await response.json();
        } catch (e) {
          result.data = await response.text();
        }
      } else {
        result.error = `${response.status} ${response.statusText}`;
      }

      setTestResults(prev => [result, ...prev]);
    } catch (error: any) {
      const result = {
        name: endpoint.name,
        url: endpoint.url,
        status: 0,
        statusText: "Network Error",
        responseTime: 0,
        success: false,
        timestamp: new Date().toISOString(),
        data: null as any,
        error: error.message as string
      };
      setTestResults(prev => [result, ...prev]);
    } finally {
      setLoading(false);
    }
  };

  const clearResults = () => {
    setTestResults([]);
  };

  const testAllEndpoints = async () => {
    for (const endpoint of testEndpoints) {
      await testApi(endpoint);
      await new Promise(resolve => setTimeout(resolve, 1000)); // 1초 대기
    }
  };

  return (
    <div className="container mt-4">
      <h1>🔍 API 디버그 페이지</h1>
      <p>API 요청이 어떻게 처리되는지 확인할 수 있습니다.</p>

      <Card className="mb-4">
        <Card.Header>
          <h5>테스트 엔드포인트</h5>
        </Card.Header>
        <Card.Body>
          <div className="d-flex gap-2 mb-3">
            <Button variant="primary" onClick={testAllEndpoints} disabled={loading}>
              {loading ? "테스트 중..." : "모든 엔드포인트 테스트"}
            </Button>
            <Button variant="secondary" onClick={clearResults}>
              결과 지우기
            </Button>
          </div>

          <div className="row">
            {testEndpoints.map((endpoint, index) => (
              <div key={index} className="col-md-4 mb-2">
                <Button
                  variant="outline-primary"
                  size="sm"
                  onClick={() => testApi(endpoint)}
                  disabled={loading}
                  className="w-100"
                >
                  {endpoint.name}
                </Button>
              </div>
            ))}
          </div>
        </Card.Body>
      </Card>

      <Card>
        <Card.Header>
          <h5>테스트 결과 ({testResults.length})</h5>
        </Card.Header>
        <Card.Body>
          {testResults.length === 0 ? (
            <Alert variant="info">아직 테스트 결과가 없습니다.</Alert>
          ) : (
            testResults.map((result, index) => (
              <Alert key={index} variant={result.success ? "success" : "danger"} className="mb-3">
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <h6>{result.name}</h6>
                    <p className="mb-1">
                      <strong>URL:</strong> {result.url}
                    </p>
                    <p className="mb-1">
                      <strong>상태:</strong> {result.status} {result.statusText}
                      {result.responseTime > 0 && <span className="ms-2">({result.responseTime}ms)</span>}
                    </p>
                    {result.error && (
                      <p className="mb-1 text-danger">
                        <strong>에러:</strong> {result.error}
                      </p>
                    )}
                    {result.data && (
                      <details>
                        <summary>응답 데이터</summary>
                        <pre className="mt-2 p-2 bg-light border rounded">{JSON.stringify(result.data, null, 2)}</pre>
                      </details>
                    )}
                  </div>
                  <small className="text-muted">{new Date(result.timestamp).toLocaleTimeString()}</small>
                </div>
              </Alert>
            ))
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default ApiDebugPage;
