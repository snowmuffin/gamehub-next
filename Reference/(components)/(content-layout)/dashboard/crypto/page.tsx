"use client";
import { Bitcoin, Conversationratio, Cryptoprice, Data1, DataPrice, Ethereum, IotaPrice, NeoPrice, PopTrades, RipplePrice, Totalcustomaers, Totaldeals, Totalrevenue1, Trading } from '@/shared/data/dashboard/cryptodata';
import Seo from '@/shared/layout-components/seo/seo';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import React, { Fragment } from 'react';
import { Button, Card, Col, ListGroup, Row, Table } from 'react-bootstrap';
const Select = dynamic(() => import("react-select"), { ssr: false });

const Crypto = () => {
    return (
        <Fragment>
            <Seo title={"Crypto"} />
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="top-right"></div>
                        <Card.Body className="py-0">
                            <div className="row align-items-center">
                                <Col xl={3} sm={6} className="">
                                    <div className="p-3 custom-border-end">
                                        <span className="d-block fs-12 mb-1">Balance</span>
                                        <h3 className="fw-semibold mb-0">$23,768</h3>
                                    </div>
                                </Col>
                                <Col xl={3} sm={6} className="">
                                    <div className="p-3 custom-border-end">
                                        <span className="d-block fs-12 mb-1">Coins</span>
                                        <div className="avatar-list-stacked">
                                            <span className="avatar avatar-rounded avatar-sm bg-primary">
                                                <img src="../../assets/images/crypto-currencies/crypto-icons/binance-usd-busd-logo.svg" alt="img" />
                                            </span>
                                            <span className="avatar avatar-rounded avatar-sm bg-primary">
                                                <img src="../../assets/images/crypto-currencies/crypto-icons/bitcoin-btc-logo.svg" alt="img" />
                                            </span>
                                            <span className="avatar avatar-rounded avatar-sm bg-primary">
                                                <img src="../../assets/images/crypto-currencies/crypto-icons/cardano-ada-logo.svg" alt="img" />
                                            </span>
                                            <span className="avatar avatar-rounded avatar-sm bg-primary">
                                                <img src="../../assets/images/crypto-currencies/crypto-icons/dogecoin-doge-logo.svg" alt="img" />
                                            </span>
                                            <span className="avatar avatar-rounded avatar-sm bg-primary">
                                                <img src="../../assets/images/crypto-currencies/crypto-icons/ethereum-eth-logo.svg" alt="img" />
                                            </span>
                                            <span className="avatar avatar-rounded avatar-sm bg-primary">
                                                <img src="../../assets/images/crypto-currencies/crypto-icons/solana-sol-logo.svg" alt="img" />
                                            </span>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={3} sm={6} className="">
                                    <div className="p-3 custom-border-end">
                                        <span className="d-block fs-12 mb-1">Today's Profit</span>
                                        <h3 className="fw-semibold mb-0">$5,233 <span className="fs-12"><i className="ri-arrow-up-s-fill text-success"></i> 4.7%</span></h3>
                                    </div>
                                </Col>
                                <Col xl={3} sm={6} className="">
                                    <div className="btn-list text-xl-end p-3 pb-4">
                                        <button className="btn btn-outline-primary"><i className="ri-send-plane-2-line me-1 align-middle"></i>Send Money</button>
                                        <button className="btn btn-primary"><i className="ri-add-line me-1 align-middle"></i>Buy Currency</button>
                                    </div>
                                </Col>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xxl={3} md={6} className="">
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="top-right"></div>
                        <Card.Body>
                            <div className="mb-3 d-flex align-items-start justify-content-between">
                                <div>
                                    <span className="avatar bg-primary-transparent">
                                        <i className="ri-btc-line fs-5"></i>
                                    </span>
                                </div>
                                <div id="total-revenue1">
                                    <Totalrevenue1 />
                                </div>
                            </div>
                            <h4 className="fw-semibold mb-2">$42577.10</h4>
                            <div className="d-flex align-items-center justify-content-between">
                                <span className="text-muted">Bitcoin</span>
                                <span className="badge bg-success-transparent"><i className="ti ti-trending-up me-1 align-middle"></i>+1.08%</span>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} md={6} className="">
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="top-right"></div>
                        <Card.Body>
                            <div className="mb-3 d-flex align-items-start justify-content-between">
                                <div>
                                    <span className="avatar bg-primary-transparent">
                                        <i className="ri-eth-line fs-5"></i>
                                    </span>
                                </div>
                                <div id="total-customers">
                                    <Totalcustomaers />
                                </div>
                            </div>
                            <h4 className="fw-semibold mb-2">$2529.41</h4>
                            <div className="d-flex align-items-center justify-content-between">
                                <span className="text-muted">Ethereum</span>
                                <span className="badge bg-danger-transparent"><i className="ti ti-trending-down me-1 align-middle"></i>-0.56%</span>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} md={6} className="">
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="top-right"></div>
                        <Card.Body>
                            <div className="mb-3 d-flex align-items-start justify-content-between">
                                <div>
                                    <span className="avatar bg-primary-transparent">
                                        <i className="ri-xtz-line fs-5"></i>
                                    </span>
                                </div>
                                <div id="conversion-ratio">
                                    <Conversationratio />
                                </div>
                            </div>
                            <h4 className="fw-semibold mb-2">$1.09</h4>
                            <div className="d-flex align-items-center justify-content-between">
                                <span className="text-muted">Tezos</span>
                                <span className="badge bg-success-transparent"><i className="ti ti-trending-up me-1 align-middle"></i>+4.63%</span>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} md={6} className="">
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="top-right"></div>
                        <Card.Body>
                            <div className="mb-3 d-flex align-items-start justify-content-between">
                                <div>
                                    <span className="avatar bg-primary-transparent">
                                        <i className="ri-xrp-line fs-5"></i>
                                    </span>
                                </div>
                                <div id="total-deals">
                                    <Totaldeals />
                                </div>
                            </div>
                            <h4 className="fw-semibold mb-2">$0.57</h4>
                            <div className="d-flex align-items-center justify-content-between">
                                <span className="text-muted">XRP</span>
                                <span className="badge bg-success-transparent"><i className="ti ti-trending-up me-1 align-middle"></i>+12.67%</span>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xxl={6} xl={12} className="">
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="top-right"></div>
                        <Card.Header>
                            <div className="card-title">
                                Crypto Currency Price
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-sm-flex align-items-center justify-content-between px-3">
                                <div className="mb-sm-0 mb-2">
                                    <span className="avatar rounded-0 p-2 bg-primary-transparent">
                                        <img src="../../assets/images/crypto-currencies/crypto-icons/tether-usdt-logo.svg" alt="" />
                                    </span>
                                </div>
                                <div className="d-flex align-items-center justify-content-sm-end flex-wrap">
                                    <div className="me-4">
                                        <span className="fs-12">Last Price</span>
                                        <p className="mb-0 fs-16 font-weight-semibold">$12,577.58</p>
                                    </div>
                                    <div className="me-4">
                                        <span className="fs-12">24h Volume</span>
                                        <p className="mb-0 fs-16 font-weight-semibold">85.45BTC</p>
                                    </div>
                                    <div className="me-4">
                                        <span className="fs-12">Open</span>
                                        <p className="mb-0 fs-16 font-weight-semibold">42,397.89</p>
                                    </div>
                                    <div className="me-4">
                                        <span className="fs-12">High</span>
                                        <p className="mb-0 fs-16 font-weight-semibold">99,373.38</p>
                                    </div>
                                    <div className="me-0">
                                        <span className="fs-12">Close</span>
                                        <p className="mb-0 fs-16 font-weight-semibold">85,158.74</p>
                                    </div>
                                </div>
                            </div>
                            <div id="crypto-price">
                                <Cryptoprice />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} className="">
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="top-right"></div>
                        <div className="card-header pb-2 border-bottom justify-content-between">
                            <div className="card-title">
                                Bitcoin Price Statistics
                            </div>
                            <Link href="#!" scroll={false} className="text-primary fs-12"><i className="ti ti-history fs-12 me-1"></i>Full History</Link>
                        </div>
                        <Card.Body className=" p-0">
                            <ListGroup as="ul" className="border-0 crypto-list">
                                <ListGroup.Item as="li" className="flex-column align-items-start border-top-0 border-start-0 border-end-0 border-bottom bg-transparent">
                                    <div className="d-flex w-100 justify-content-between align-items-center">
                                        <p className="fs-14 mb-0 font-weight-semibold text-dark">Bitcoin value in USD</p>
                                        <p className="text-dark mb-0 font-weight-normal fs-15">
                                            <span className="numberfont">$42,808.47</span>
                                        </p>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item as="li" className="flex-column align-items-start border-top-0 border-start-0 border-end-0 border-bottom bg-transparent">
                                    <div className="d-flex w-100 justify-content-between align-items-center">
                                        <p className="fs-14 mb-0 font-weight-semibold text-dark">Price Change</p>
                                        <p className="text-danger mb-0 font-weight-normal fs-13">
                                            <span className="numberfont">+380.30(0.26%)</span> <i className="ri-arrow-up-line align-middle"></i> today
                                        </p>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item as="li" className="flex-column align-items-start border-top-0 border-start-0 border-end-0 border-bottom bg-transparent">
                                    <div className="d-flex w-100 justify-content-between align-items-center">
                                        <p className="fs-14 mb-0 font-weight-normal text-dark">Trade Value</p>
                                        <p className="text-dark mb-0 fs-15">
                                            <span className="numberfont">$245,36,465.652</span>
                                        </p>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item as="li" className="flex-column align-items-start border-top-0 border-start-0 border-end-0 border-bottom bg-transparent">
                                    <div className="d-flex w-100 justify-content-between align-items-center">
                                        <p className="fs-14 mb-0 font-weight-semibold text-dark">Market Rank<span className="badge bg-secondary-transparent ms-3">3 Years</span></p>
                                        <p className="text-dark mb-0 fs-15">
                                            <span className="numberfont">#1</span>
                                        </p>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item as="li" className="flex-column align-items-start border-top-0 border-start-0 border-end-0 border-bottom bg-transparent">
                                    <div className="d-flex w-100 justify-content-between align-items-center">
                                        <p className="fs-14 mb-0 font-weight-semibold text-dark">This Week High</p>
                                        <p className="text-success mb-0 fs-15">
                                            <span className="numberfont">$68,990.90</span>
                                        </p>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item as="li" className="flex-column align-items-start border-top-0 border-start-0 border-end-0 border-bottom bg-transparent">
                                    <div className="d-flex w-100 justify-content-between align-items-center">
                                        <p className="fs-14 mb-0 font-weight-semibold text-dark">This Week Low</p>
                                        <p className="text-danger mb-0 fs-15">
                                            <span className="numberfont">$28,825.76</span>
                                        </p>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item as="li" className="flex-column align-items-start border-top-0 border-start-0 border-end-0 border-bottom bg-transparent">
                                    <div className="d-flex w-100 justify-content-between align-items-center">
                                        <p className="fs-14 mb-0 font-weight-semibold text-dark">Market Dominance</p>
                                        <p className="text-dark mb-0 fs-15">
                                            <span className="numberfont">70%</span>
                                        </p>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item as="li" className="flex-column align-items-start border-0 bg-transparent">
                                    <div className="d-flex w-100 justify-content-between align-items-center">
                                        <p className="fs-14 mb-0 font-weight-semibold text-dark">Alltime High</p>
                                        <p className="text-info mb-0 fs-15">
                                            <span className="numberfont">$68,990.90</span>
                                        </p>
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} className="">
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="top-right"></div>
                        <div className="card-header justify-content-between">
                            <div className="card-title">
                                Prediction Meter
                            </div>
                            <div className="form-group">
                                <Select
                                    name="state"
                                    options={Data1}
                                    className="basic-multi-select basic-custom-select"
                                    menuPlacement="auto"
                                    classNamePrefix="Select2"
                                    defaultValue={[Data1[0]]}
                                />
                            </div>
                        </div>
                        <Card.Body className=" pt-0">
                            <div id="popTrades" className="text-center">
                                <PopTrades />
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <div className="flex-fill d-flex align-items-center">
                                    <div className="me-2">
                                        <span className="avatar avatar-sm rounded-circle bg-primary-transparent"><i className="ti ti-activity-heartbeat fs-14"></i></span>
                                    </div>
                                    <span>Neutral</span>
                                </div>
                                <div className="text-end">
                                    <span className="badge bg-primary-transparent">45 - 65</span>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <div className="flex-fill d-flex align-items-center">
                                    <div className="me-2">
                                        <span className="avatar avatar-sm rounded-circle bg-danger-transparent"><i className="ti ti-bolt fs-14"></i></span>
                                    </div>
                                    <span>Sell</span>
                                </div>
                                <div className="text-end">
                                    <span className="badge bg-danger-transparent">0 - 45</span>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="flex-fill d-flex align-items-center">
                                    <div className="me-2">
                                        <span className="avatar avatar-sm rounded-circle bg-success-transparent"><i className="ti ti-bolt fs-14"></i></span>
                                    </div>
                                    <span>Buy</span>
                                </div>
                                <div className="text-end">
                                    <span className="badge bg-success-transparent">65 Above</span>
                                </div>
                            </div>
                            <div className="d-grid mt-4">
                                <Button variant='' className="btn btn-outline-primary">Start Prediction</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={4}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="top-right"></div>
                        <Card.Header>
                            <div className="card-title">
                                Trading History
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <Table className="table table-borderless table-striped text-nowrap">
                                    <thead>
                                        <tr>
                                            <th className="border-bottom-0 ps-4">Coin</th>
                                            <th className="border-bottom-0 ps-3">Price</th>
                                            <th className="border-bottom-0">Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Trading.map((idx) => (
                                            <tr key={Math.random()}>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2"><span className="avatar avatar-xs rounded-0"><img src={idx.src1} alt="" /></span>{idx.data}</div>
                                                </td>
                                                <td>{idx.price}<i className={`fe ${idx.icon1} ms-1`}></i></td>
                                                <td>{idx.amount}</td>
                                            </tr>
                                        ))}

                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={8}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="top-right"></div>
                        <Card.Header>
                            <div className="card-title">
                                Crypto Currencies Market Value
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <table className="table table-striped text-nowrap table-borderless">
                                    <thead>
                                        <tr>
                                            <th scope="col">S.No</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Symbol</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Market Cap</th>
                                            <th scope="col">Price Graph</th>
                                            <th scope="col">Volume</th>
                                            <th scope="col">Price Change</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Bitcoin</td>
                                            <td>
                                                <div className="lh-1 d-flex align-items-center">
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/crypto-currencies/regular/Bitcoin.svg" alt="" />
                                                    </span> - BTC
                                                </div>
                                            </td>
                                            <td>
                                                $16,839.10
                                            </td>
                                            <td>
                                                324.01B
                                            </td>
                                            <td>
                                                <div id="bitcoin-price-graph">
                                                    <Bitcoin />
                                                </div>
                                            </td>
                                            <td>
                                                14,674,311,168
                                            </td>
                                            <td>
                                                <span className="text-success">0.30% <i className="ti ti-arrow-big-up-lines ms-1"></i></span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Ethereum</td>
                                            <td>
                                                <div className="lh-1 d-flex align-items-center">
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/crypto-currencies/regular/Ethereum.svg" alt="" />
                                                    </span> - ETH
                                                </div>
                                            </td>
                                            <td>
                                                1,217.96
                                            </td>
                                            <td>
                                                $149,316,232,699
                                            </td>
                                            <td>
                                                <div id="Ethereum-price-graph">
                                                    <Ethereum />
                                                </div>
                                            </td>
                                            <td>
                                                $4,758,554,801
                                            </td>
                                            <td>
                                                <span className="text-success">0.30% <i className="ti ti-arrow-big-up-lines ms-1"></i></span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Dash</td>
                                            <td>
                                                <div className="lh-1 d-flex align-items-center">
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/crypto-currencies/regular/Dash.svg" alt="" />
                                                    </span> - DASH
                                                </div>
                                            </td>
                                            <td>
                                                $43.49
                                            </td>
                                            <td>
                                                $480,799,847
                                            </td>
                                            <td>
                                                <div id="dash-price-graph">
                                                    <DataPrice />
                                                </div>
                                            </td>
                                            <td>
                                                $52,626,563
                                            </td>
                                            <td>
                                                <span className="text-success">0.45% <i className="ti ti-arrow-big-up-lines ms-1"></i></span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Ripple</td>
                                            <td>
                                                <div className="lh-1 d-flex align-items-center">
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/crypto-currencies/regular/Ripple.svg" alt="" />
                                                    </span> - XRP
                                                </div>
                                            </td>
                                            <td>
                                                $0.3531
                                            </td>
                                            <td>
                                                $17,791,969,465
                                            </td>
                                            <td>
                                                <div id="ripple-price-graph">
                                                    <RipplePrice />
                                                </div>
                                            </td>
                                            <td>
                                                $511,598,941
                                            </td>
                                            <td>
                                                <span className="text-success">0.97% <i className="ti ti-arrow-big-up-lines ms-1"></i></span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>Iota</td>
                                            <td>
                                                <div className="lh-1 d-flex align-items-center">
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/crypto-currencies/regular/IOTA.svg" alt="" />
                                                    </span> - IOTA
                                                </div>
                                            </td>
                                            <td>
                                                $0.169741
                                            </td>
                                            <td>
                                                $471,800,600
                                            </td>
                                            <td>
                                                <div id="iota-price-graph">
                                                    <IotaPrice />
                                                </div>
                                            </td>
                                            <td>
                                                $5,524,385
                                            </td>
                                            <td>
                                                <span className="text-success">0.93% <i className="ti ti-arrow-big-up-lines ms-1"></i></span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>Neo</td>
                                            <td>
                                                <div className="lh-1 d-flex align-items-center">
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../assets/images/crypto-currencies/regular/Neo.svg" alt="" />
                                                    </span> - NEO
                                                </div>
                                            </td>
                                            <td>
                                                $6.43
                                            </td>
                                            <td>
                                                $453,601,667
                                            </td>
                                            <td>
                                                <div id="neo-price-graph">
                                                    <NeoPrice />
                                                </div>
                                            </td>
                                            <td>
                                                $12,904,320
                                            </td>
                                            <td>
                                                <span className="text-danger">0.49% <i className="ti ti-arrow-big-down-lines ms-1"></i></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Crypto;
