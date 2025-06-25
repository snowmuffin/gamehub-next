"use client";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Badge, Card, Col, Collapse, Dropdown, Form, Pagination, Row } from "react-bootstrap";
import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Seo from "@/shared/layout-components/seo/seo";

const SearchJobs = () => {

    const AirbnbSlider = styled(Slider)(({ theme }) => ({
        color: '#3a8589',
        height: 3,
        padding: '13px 0',
        '& .MuiSlider-thumb': {
            height: 27,
            width: 27,
            backgroundColor: '#fff',
            border: '1px solid currentColor',
            '&:hover': {
                boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
            },
            '& .airbnb-bar': {
                height: 9,
                width: 1,
                backgroundColor: 'currentColor',

                marginLeft: 1,
                marginRight: 1,
            },
        },
        '& .MuiSlider-track': {
            height: 3,
        },
        '& .MuiSlider-rail': {
            color: theme.palette.mode === 'dark' ? '#bfbfbf' : '#d8d8d8',
            opacity: theme.palette.mode === 'dark' ? undefined : 1,
            height: 3,
        },
    }));
    function AirbnbThumbComponent(props: any) {
        const { children, ...other } = props;
        return (
            <SliderThumb {...other}>
                {children}
                <span className="airbnb-bar" />
                <span className="airbnb-bar" />
                <span className="airbnb-bar" />
            </SliderThumb>
        );
    }

    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);

    return (
        <Fragment>
            <Seo title={"Search Jobs"} />
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body className="p-3">
                            <div className="row align-items-center">
                                <div className="col-sm-8">
                                    <div className="d-flex">
                                        <h5 className="fw-medium mb-0"><span className="fw-normal">Showing</span> 3456 Jobs</h5>
                                    </div>
                                </div>
                                <div className="col-sm-4 text-sm-end mt-3 mt-sm-0">
                                    <Dropdown>
                                        <Dropdown.Toggle variant='' className="btn btn-outline-light border dropdown-toggle-drop" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Sort By
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu as='ul'>
                                            <Dropdown.Item as='li' href="#!">Featured</Dropdown.Item>
                                            <Dropdown.Item as='li' href="#!">Newest</Dropdown.Item>
                                            <Dropdown.Item as='li' href="#!">Most Relevant</Dropdown.Item>
                                            <Dropdown.Item as='li' href="#!">Best Rated</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xxl={9} xl={8} className="">
                    <Row>
                        <Col xl={12}>
                            <Card className="custom-card featured-jobs">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <Card.Body className="">
                                    <div className="btn-list float-end">
                                        <Link href="#!" scroll={false} className="avatar avatar-sm bg-danger-transparent" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><span><i className="ri-heart-line fs-14 align-middle"></i></span></Link>
                                        <Link href="#!" scroll={false} className="avatar avatar-sm bg-warning-transparent" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Featured Jobs" data-bs-original-title="Featured Jobs"><span><i className="ri-star-fill fs-14 align-middle"></i></span></Link>
                                    </div>
                                    <div className="d-flex mb-3 flex-wrap gap-2 align-items-center">
                                        <span className="avatar avatar-lg bg-primary bg-opacity-10 border"><svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path fill="var(--primary-color)" d="M21.46777,2.3252A1.00007,1.00007,0,0,0,20.73,2H3.27a1.00039,1.00039,0,0,0-.99609,1.08887l1.52,17a.99944.99944,0,0,0,.72851.87451l7.2002,2A.99628.99628,0,0,0,11.99023,23a1.01206,1.01206,0,0,0,.26709-.03613l7.21973-2a1.00055,1.00055,0,0,0,.729-.875l1.52-17A1,1,0,0,0,21.46777,2.3252Zm-3.19238,16.896L11.99072,20.9624,5.72461,19.22168,4.36328,4H19.63672ZM7.81982,13h6.895l-.32714,3.271-2.56788.917L8.65625,16.05811a1.00017,1.00017,0,1,0-.67285,1.88378l3.5,1.25a1.00291,1.00291,0,0,0,.67285,0l3.5-1.25a1.00044,1.00044,0,0,0,.65869-.84228l.5-5A1.00064,1.00064,0,0,0,15.81982,11H8.72461L8.4248,8h7.895a1,1,0,0,0,0-2h-9a1.00064,1.00064,0,0,0-.99511,1.09961l.5,5A1.00012,1.00012,0,0,0,7.81982,13Z"></path></svg></span>
                                        <div>
                                            <h5 className="fw-medium mb-0 d-flex align-items-center"><Link href="#!" scroll={false}> HTML Developer - Fresher</Link> <span className="badge bg-info ms-2">Full Time</span></h5>
                                            <Link href="#!" scroll={false}>Innovatepix Co.in</Link>
                                        </div>
                                    </div>
                                    <div className="fs-13 mb-2">
                                        <span className="me-2 align-middle d-inline-block"><i className="ri-map-pin-line me-1 align-middle d-inline-block fs-11"></i>France</span>
                                        <span className="me-2 align-middle d-inline-block"><i className="ri-book-2-line me-1 align-middle d-inline-block fs-11"></i>13 Openings</span>
                                        <span className="me-2 align-middle d-inline-block"><i className="ri-briefcase-line me-1 align-middle d-inline-block fs-11"></i>Min - 2Years</span>
                                        <span><i className="ri-moon-clear-line me-1 align-middle d-inline-block fs-11"></i>flexible-shift</span>
                                    </div>
                                    <div className="d-flex justify-content-between mb-3 gap-2 flex-wrap">
                                        <div className="popular-tags">
                                            <span className="fw-medium fs-14 me-2 me-2">Skills:</span>
                                            <Link href="#!" scroll={false} className="badge bg-primary-transparent me-1">UX/UI</Link>
                                            <Link href="#!" scroll={false} className="badge bg-primary-transparent me-1">Javascript</Link>
                                            <Link href="#!" scroll={false} className="badge bg-primary-transparent me-1">React</Link>
                                            <Link href="#!" scroll={false} className="badge bg-primary-transparent me-1">Wireframe</Link>
                                            <Link href="#!" scroll={false} className="badge bg-primary-transparent me-1">Word Press</Link>
                                        </div>
                                        <div className="fs-13 text-muted">
                                            <i className="ri-subtract-fill text-success align-middle me-1 d-inline-block"></i> 12 Days Ago
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <h6 className="fw-medium mb-0">$15,000 - $37,000</h6>
                                        <Link href="" className="text-primary fw-medium fs-14 d-inline-flex">
                                            Apply Now <i className="fe fe-chevron-right transform-arrow ms-2 lh-base"></i>
                                        </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card featured-jobs">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <Card.Body className="">
                                    <div className="btn-list float-end">
                                        <Link href="#!" scroll={false} className="avatar avatar-sm bg-danger-transparent" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><span><i className="ri-heart-line fs-14 align-middle"></i></span></Link>
                                        <Link href="#!" scroll={false} className="avatar avatar-sm bg-warning-transparent" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Featured Jobs" data-bs-original-title="Featured Jobs"><span><i className="ri-star-fill fs-14 align-middle"></i></span></Link>
                                    </div>
                                    <div className="d-flex mb-3 flex-wrap gap-2 align-items-center">
                                        <span className="avatar avatar-lg bg-primary bg-opacity-10 border"><svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path fill="var(--primary-color)" d="M11.103,10.43793a1.78593,1.78593,0,1,0,2.43957.65362A1.786,1.786,0,0,0,11.103,10.43793Zm8.0047,1.93768q-.17587-.201-.37116-.40308.13641-.14337.264-.28649c1.60583-1.80427,2.28357-3.61371,1.65558-4.70154-.60217-1.043-2.39343-1.35382-4.63593-.91779q-.33132.06482-.659.14624-.06272-.21624-.13343-.43C14.467,3.49042,13.2381,1.99921,11.98206,2,10.77765,2.00055,9.61359,3.39709,8.871,5.5575q-.10959.31969-.20276.64471-.21908-.05375-.44-.0993c-2.366-.48578-4.27167-.16584-4.89844.9226-.601,1.04376.02753,2.74982,1.52851,4.47211q.22329.25562.45922.49976c-.18542.191-.361.38189-.52465.57171-1.4646,1.698-2.05719,3.37616-1.45716,4.41541.61969,1.07348,2.49854,1.42437,4.7854.97436q.278-.05511.55292-.124.10071.35156.22095.697c.73932,2.11706,1.89685,3.46863,3.097,3.4682,1.23944-.00073,2.48194-1.45288,3.23474-3.65875.05945-.17432.11573-.35535.16907-.54175q.35514.08835.71485.1568c2.20336.41687,3.95251.089,4.55145-.951C21.28058,15.93109,20.64288,14.12933,19.10767,12.37561ZM4.07019,7.45184c.38586-.67,1.94324-.93139,3.98608-.512q.19584.04027.39838.09a20.464,20.464,0,0,0-.42126,2.67767,20.88659,20.88659,0,0,0-2.10389,1.6936q-.21945-.22695-.42718-.4649l.00006.00006C4.21631,9.46057,3.708,8.08081,4.07019,7.45184Zm3.88666,5.72809c-.51056-.3866-.98505-.78265-1.41571-1.181.43036-.39587.90515-.79059,1.41467-1.17615q-.02746.58915-.02722,1.1792Q7.929,12.59117,7.95685,13.17993Zm-.00061,3.94061a7.23675,7.23675,0,0,1-2.63971.09314,1.766,1.766,0,0,1-1.241-.65631c-.36407-.63067.11176-1.978,1.36432-3.43023q.23621-.273.48791-.53174a20.49026,20.49026,0,0,0,2.10712,1.70007,20.80226,20.80226,0,0,0,.42621,2.712Q8.21011,17.07023,7.95624,17.12054Zm7.10113-8.03936q-.50309-.317-1.01861-.61365-.5073-.292-1.0268-.56207c.593-.24933,1.17591-.46228,1.73865-.63581A18.21775,18.21775,0,0,1,15.05737,9.08118ZM9.679,5.83521c.63623-1.85114,1.57763-2.98053,2.30352-2.98084.77308-.00037,1.77753,1.21826,2.43433,3.19763q.064.19355.121.38928a20.478,20.478,0,0,0-2.52716.9712,20.06145,20.06145,0,0,0-2.519-.98194Q9.578,6.13062,9.679,5.83521ZM9.27863,7.259a18.30717,18.30717,0,0,1,1.72967.642Q9.95746,8.4433,8.96094,9.0824C9.0412,8.4444,9.148,7.83313,9.27863,7.259ZM8.9624,14.91968q.49695.31813,1.00843.61273.52174.30039,1.05737.57556a18.19577,18.19577,0,0,1-1.74445.66492C9.15161,16.1908,9.04364,15.56879,8.9624,14.91968Zm5.45569,3.14551A7.23556,7.23556,0,0,1,13.18,20.39844l-.00006.00006a1.76585,1.76585,0,0,1-1.18841.747c-.72821.00042-1.65766-1.085-2.28992-2.89545q-.11169-.32108-.20551-.648a20.10863,20.10863,0,0,0,2.52918-1.0097,20.79976,20.79976,0,0,0,2.54736.97851Q14.50141,17.81983,14.41809,18.06519Zm.36224-1.32422c-.56921-.176-1.16058-.39252-1.76214-.64551q.50867-.2677,1.02472-.56543.52955-.30579,1.0321-.62689A18.1524,18.1524,0,0,1,14.78033,16.741Zm.44629-4.74268q.00111.91095-.05688,1.82044c-.49268.33343-1.01282.659-1.554.97143-.53894.31116-1.07293.59711-1.59674.8559q-.82682-.39624-1.62176-.854-.79047-.455-1.54468-.969-.06894-.90921-.06946-1.82172l.00012.00019q-.00063-.91187.06794-1.82184c.49255-.33637,1.00891-.66168,1.54278-.96991.53632-.30969,1.077-.59442,1.61469-.85248q.81664.39688,1.60382.85065.78992.454,1.549.95868.06519.91443.06524,1.83166Zm.95673-5.09283c1.92133-.37372,3.37-.12232,3.73291.50622.3866.66962-.16748,2.1485-1.55383,3.70636l-.00006.00006q-.1149.12891-.23841.25891A20.06118,20.06118,0,0,0,15.98,9.68915a20.04054,20.04054,0,0,0-.40546-2.64893Q15.88486,6.96387,16.18335,6.90546Zm-.12988,3.8847A18.16447,18.16447,0,0,1,17.51483,11.978a18.11912,18.11912,0,0,1-1.45672,1.20831q.02325-.59391.02288-1.18842Q16.08072,11.39389,16.05347,10.79016Zm3.8681,5.78876c-.36346.63116-1.76788.89435-3.65222.53784q-.32391-.06115-.66474-.14557a20.069,20.069,0,0,0,.38746-2.68176,19.93914,19.93914,0,0,0,2.13708-1.71588q.17643.18329.33563.36487v-.00007a7.23437,7.23437,0,0,1,1.40308,2.23792A1.76563,1.76563,0,0,1,19.92157,16.57892Z"></path></svg></span>
                                        <div>
                                            <h5 className="fw-medium mb-0 d-flex align-items-center"><Link href="#!" scroll={false}> React Lead Developer</Link><span className="badge bg-warning ms-2">Part Time</span></h5>
                                            <Link href="#!" scroll={false}>DigitalIntech PVT LTD</Link>
                                        </div>
                                    </div>
                                    <div className="fs-13 mb-2">
                                        <span className="me-2 align-middle d-inline-block"><i className="ri-map-pin-line me-1 align-middle d-inline-block fs-11"></i>France</span>
                                        <span className="me-2 align-middle d-inline-block"><i className="ri-book-2-line me-1 align-middle d-inline-block fs-11"></i>13 Openings</span>
                                        <span className="me-2 align-middle d-inline-block"><i className="ri-briefcase-line me-1 align-middle d-inline-block fs-11"></i>Min - 2Years</span>
                                        <span><i className="ri-moon-clear-line me-1 align-middle d-inline-block fs-11"></i>flexible-shift</span>
                                    </div>
                                    <div className="d-flex justify-content-between mb-3 gap-2 flex-wrap">
                                        <div className="popular-tags">
                                            <span className="fw-medium fs-14  me-2">Skills:</span>
                                            <Link href="#!" scroll={false} className="badge bg-primary-transparent me-1">UX/UI</Link>
                                            <Link href="#!" scroll={false} className="badge bg-primary-transparent me-1">Javascript</Link>
                                            <Link href="#!" scroll={false} className="badge bg-primary-transparent me-1">React</Link>
                                            <Link href="#!" scroll={false} className="badge bg-primary-transparent me-1">Wireframe</Link>
                                            <Link href="#!" scroll={false} className="badge bg-primary-transparent me-1">Word Press</Link>
                                        </div>
                                        <div className="fs-13 text-muted">
                                            <i className="ri-subtract-fill text-success align-middle me-1 d-inline-block"></i> 6 Days Ago
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <h6 className="fw-medium mb-0">$15,000 - $37,000</h6>
                                        <Link href="" className="text-primary fw-medium fs-14 d-inline-flex">
                                            Apply Now <i className="fe fe-chevron-right transform-arrow ms-2 lh-base"></i>
                                        </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card featured-jobs">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <Card.Body className="">
                                    <div className="btn-list float-end">
                                        <Link href="#!" scroll={false} className="avatar avatar-sm bg-danger-transparent" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><span><i className="ri-heart-line fs-14 align-middle"></i></span></Link>
                                        <Link href="#!" scroll={false} className="avatar avatar-sm bg-warning-transparent" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Featured Jobs" data-bs-original-title="Featured Jobs"><span><i className="ri-star-fill fs-14 align-middle"></i></span></Link>
                                    </div>
                                    <div className="d-flex mb-3 flex-wrap gap-2 align-items-center">
                                        <span className="avatar avatar-lg bg-primary bg-opacity-10 border"><svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path fill="var(--primary-color)" d="M22.86723,3.374a.99906.99906,0,0,0-.86622-.50195l-4.97064-.00391-.00738-.001-3.64356.001a1.00172,1.00172,0,0,0-.81787.42481l-.55859.7959L11.43851,3.291a.9983.9983,0,0,0-.81591-.42286l-3.646-.001H6.97611l-.00146.00018-.00147-.00018H6.96781l-4.97314.02734a.99989.99989,0,0,0-.85742,1.50586L11.15678,21.50586A1.00068,1.00068,0,0,0,12.01957,22h.001a1.00062,1.00062,0,0,0,.86328-.49609L22.8643,4.376A1.00212,1.00212,0,0,0,22.86723,3.374ZM10.10453,4.86816l1.085,1.53321a.99856.99856,0,0,0,.81641.42285h.00146a1.00252,1.00252,0,0,0,.8169-.42481l1.07519-1.53125,1.36267-.001-3.244,5.45373L8.7432,4.86719Zm1.9126,14.14942L3.7393,4.88477l2.66992-.01465,4.75342,7.918a1.00082,1.00082,0,0,0,.85742.48535H12.022l.001-.00012.001.00012h.002a1,1,0,0,0,.85742-.48926l4.708-7.916,2.66949.00293Z"></path></svg></span>
                                        <div>
                                            <h5 className="fw-medium mb-0 d-flex align-items-center"><Link href="#!" scroll={false}> Vuejs Frontend Developer</Link><span className="badge bg-info ms-2">Full Time</span></h5>
                                            <Link href="#!" scroll={false}>FutureBud Solutions</Link>
                                        </div>
                                    </div>
                                    <div className="fs-13 mb-2">
                                        <span className="me-2 align-middle d-inline-block"><i className="ri-map-pin-line me-1 align-middle d-inline-block fs-11"></i>France</span>
                                        <span className="me-2 align-middle d-inline-block"><i className="ri-book-2-line me-1 align-middle d-inline-block fs-11"></i>13 Openings</span>
                                        <span className="me-2 align-middle d-inline-block"><i className="ri-briefcase-line me-1 align-middle d-inline-block fs-11"></i>Min - 2Years</span>
                                        <span><i className="ri-moon-clear-line me-1 align-middle d-inline-block fs-11"></i>flexible-shift</span>
                                    </div>
                                    <div className="d-flex justify-content-between mb-3 gap-2 flex-wrap">
                                        <div className="popular-tags">
                                            <span className="fw-medium fs-14 me-2">Skills:</span>
                                            <Link href="#!" scroll={false} className="badge bg-primary-transparent me-1">UX/UI</Link>
                                            <Link href="#!" scroll={false} className="badge bg-primary-transparent me-1">Javascript</Link>
                                            <Link href="#!" scroll={false} className="badge bg-primary-transparent me-1">React</Link>
                                            <Link href="#!" scroll={false} className="badge bg-primary-transparent me-1">Wireframe</Link>
                                            <Link href="#!" scroll={false} className="badge bg-primary-transparent me-1">Word Press</Link>
                                        </div>
                                        <div className="fs-13 text-muted">
                                            <i className="ri-subtract-fill text-success align-middle me-1 d-inline-block"></i> 3 Days Ago
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <h6 className="fw-medium mb-0">$15,000 - $37,000</h6>
                                        <Link href="" className="text-primary fw-medium fs-14 d-inline-flex">
                                            Apply Now <i className="fe fe-chevron-right transform-arrow ms-2 lh-base"></i>
                                        </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card featured-jobs">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <Card.Body className="">
                                    <div className="btn-list float-end">
                                        <Link href="#!" scroll={false} className="avatar avatar-sm bg-danger-transparent" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><span><i className="ri-heart-line fs-14 align-middle"></i></span></Link>
                                        <Link href="#!" scroll={false} className="avatar avatar-sm bg-warning-transparent" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Featured Jobs" data-bs-original-title="Featured Jobs"><span><i className="ri-star-fill fs-14 align-middle"></i></span></Link>
                                    </div>
                                    <div className="d-flex mb-3 flex-wrap gap-2 align-items-center">
                                        <span className="avatar avatar-lg bg-primary bg-opacity-10 border"><svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path fill="var(--primary-color)" d="M12,2a10.00009,10.00009,0,1,0,10,9.99976A10.01117,10.01117,0,0,0,12,2ZM3.00928,11.99976a8.95547,8.95547,0,0,1,.77844-3.659L8.07654,20.09131A8.99123,8.99123,0,0,1,3.00928,11.99976ZM12,20.99121a8.98726,8.98726,0,0,1-2.54-.36633l2.69788-7.83869,2.7633,7.57135a.84386.84386,0,0,0,.06446.12391A8.97138,8.97138,0,0,1,12,20.99121ZM13.239,7.78436c.54126-.02844,1.02906-.08539,1.02906-.08539a.37165.37165,0,0,0-.05738-.741s-1.4563.11432-2.39648.11432c-.8833,0-2.3678-.11432-2.3678-.11432a.37165.37165,0,0,0-.057.741s.4585.05695.943.08539l1.40075,3.838-1.968,5.90087L6.49133,7.78436C7.033,7.75592,7.52026,7.699,7.52026,7.699a.37166.37166,0,0,0-.05749-.741s-1.45593.11432-2.39612.11432c-.1687,0-.36768-.00415-.57861-.01093A8.98815,8.98815,0,0,1,18.07117,5.36957c-.0387-.00238-.07654-.0072-.11634-.0072A1.55669,1.55669,0,0,0,16.445,6.958a4.21016,4.21016,0,0,0,.88317,2.1087,4.73577,4.73577,0,0,1,.74122,2.47955,10.88314,10.88314,0,0,1-.68409,2.9065l-.897,2.99634ZM16.52,19.771l2.74609-7.9397A8.489,8.489,0,0,0,19.94983,8.611a6.9105,6.9105,0,0,0-.06043-.92456A8.99224,8.99224,0,0,1,16.52,19.771Z"></path></svg></span>
                                        <div>
                                            <h5 className="fw-medium mb-0 d-flex align-items-center"><Link href="#!" scroll={false}> Wordpress Developer - Remote</Link><span className="badge bg-warning ms-2">Part Time</span></h5>
                                            <Link href="#!" scroll={false}>VisionaryMax Company</Link>
                                        </div>
                                    </div>
                                    <div className="fs-13 mb-2">
                                        <span className="me-2 align-middle d-inline-block"><i className="ri-map-pin-line me-1 align-middle d-inline-block fs-11"></i>France</span>
                                        <span className="me-2 align-middle d-inline-block"><i className="ri-book-2-line me-1 align-middle d-inline-block fs-11"></i>13 Openings</span>
                                        <span className="me-2 align-middle d-inline-block"><i className="ri-briefcase-line me-1 align-middle d-inline-block fs-11"></i>Min - 2Years</span>
                                        <span><i className="ri-moon-clear-line me-1 align-middle d-inline-block fs-11"></i>flexible-shift</span>
                                    </div>
                                    <div className="d-flex justify-content-between mb-3 gap-2 flex-wrap">
                                        <div className="popular-tags">
                                            <span className="fw-medium fs-14 me-2">Skills:</span>
                                            <Link href="#!" scroll={false} className="badge bg-primary-transparent me-1">UX/UI</Link>
                                            <Link href="#!" scroll={false} className="badge bg-primary-transparent me-1">Javascript</Link>
                                            <Link href="#!" scroll={false} className="badge bg-primary-transparent me-1">React</Link>
                                            <Link href="#!" scroll={false} className="badge bg-primary-transparent me-1">Wireframe</Link>
                                            <Link href="#!" scroll={false} className="badge bg-primary-transparent me-1">Word Press</Link>
                                        </div>
                                        <div className="fs-13 text-muted">
                                            <i className="ri-subtract-fill text-success align-middle me-1 d-inline-block"></i> 5 Days Ago
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <h6 className="fw-medium mb-0">$15,000 - $37,000</h6>
                                        <Link href="" className="text-primary fw-medium fs-14 d-inline-flex">
                                            Apply Now <i className="fe fe-chevron-right transform-arrow ms-2 lh-base"></i>
                                        </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card featured-jobs">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <Card.Body className="">
                                    <div className="btn-list float-end">
                                        <Link href="#!" scroll={false} className="avatar avatar-sm bg-danger-transparent" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><span><i className="ri-heart-line fs-14 align-middle"></i></span></Link>
                                        <Link href="#!" scroll={false} className="avatar avatar-sm bg-warning-transparent" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Featured Jobs" data-bs-original-title="Featured Jobs"><span><i className="ri-star-fill fs-14 align-middle"></i></span></Link>
                                    </div>
                                    <div className="d-flex mb-3 flex-wrap gap-2 align-items-center">
                                        <span className="avatar avatar-lg bg-primary bg-opacity-10 border"><svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path fill="var(--primary-color)" d="M21.46777,2.3252A1.00007,1.00007,0,0,0,20.73,2H3.27a1.00039,1.00039,0,0,0-.99609,1.08887l1.52,17a.99944.99944,0,0,0,.72851.87451l7.2002,2A.99628.99628,0,0,0,11.99023,23a1.01206,1.01206,0,0,0,.26709-.03613l7.21973-2a1.00055,1.00055,0,0,0,.729-.875l1.52-17A1,1,0,0,0,21.46777,2.3252Zm-3.19238,16.896L11.99072,20.9624,5.72461,19.22168,4.36328,4H19.63672ZM7.81982,13h6.895l-.32714,3.271-2.56788.917L8.65625,16.05811a1.00017,1.00017,0,1,0-.67285,1.88378l3.5,1.25a1.00291,1.00291,0,0,0,.67285,0l3.5-1.25a1.00044,1.00044,0,0,0,.65869-.84228l.5-5A1.00064,1.00064,0,0,0,15.81982,11H8.72461L8.4248,8h7.895a1,1,0,0,0,0-2h-9a1.00064,1.00064,0,0,0-.99511,1.09961l.5,5A1.00012,1.00012,0,0,0,7.81982,13Z"></path></svg></span>
                                        <div>
                                            <h5 className="fw-medium mb-0 d-flex align-items-center"><Link href="#!" scroll={false}> HTML Developer - Fresher</Link><span className="badge bg-warning ms-2">Part Time</span></h5>
                                            <Link href="#!" scroll={false}>Innovatepix Co.in</Link>
                                        </div>
                                    </div>
                                    <div className="fs-13 mb-2">
                                        <span className="me-2 align-middle d-inline-block"><i className="ri-map-pin-line me-1 align-middle d-inline-block fs-11"></i>France</span>
                                        <span className="me-2 align-middle d-inline-block"><i className="ri-book-2-line me-1 align-middle d-inline-block fs-11"></i>13 Openings</span>
                                        <span className="me-2 align-middle d-inline-block"><i className="ri-briefcase-line me-1 align-middle d-inline-block fs-11"></i>Min - 2Years</span>
                                        <span><i className="ri-moon-clear-line me-1 align-middle d-inline-block fs-11"></i>flexible-shift</span>
                                    </div>
                                    <div className="d-flex justify-content-between mb-3 gap-2 flex-wrap">
                                        <div className="popular-tags">
                                            <span className="fw-medium fs-14 me-2">Skills:</span>
                                            <Link href="#!" scroll={false} className="badge bg-primary-transparent me-1">UX/UI</Link>
                                            <Link href="#!" scroll={false} className="badge bg-primary-transparent me-1">Javascript</Link>
                                            <Link href="#!" scroll={false} className="badge bg-primary-transparent me-1">React</Link>
                                            <Link href="#!" scroll={false} className="badge bg-primary-transparent me-1">Wireframe</Link>
                                            <Link href="#!" scroll={false} className="badge bg-primary-transparent me-1">Word Press</Link>
                                        </div>
                                        <div className="fs-13 text-muted">
                                            <i className="ri-subtract-fill text-success align-middle me-1 d-inline-block"></i> 5 Hours Ago
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <h6 className="fw-medium mb-0">$15,000 - $37,000</h6>
                                        <Link href="" className="text-primary fw-medium fs-14 d-inline-flex">
                                            Apply Now <i className="fe fe-chevron-right transform-arrow ms-2 lh-base"></i>
                                        </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card featured-jobs">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <Card.Body className="">
                                    <div className="btn-list float-end">
                                        <Link href="#!" scroll={false} className="avatar avatar-sm bg-danger-transparent" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><span><i className="ri-heart-line fs-14 align-middle"></i></span></Link>
                                        <Link href="#!" scroll={false} className="avatar avatar-sm bg-warning-transparent" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Featured Jobs" data-bs-original-title="Featured Jobs"><span><i className="ri-star-fill fs-14 align-middle"></i></span></Link>
                                    </div>
                                    <div className="d-flex mb-3 flex-wrap gap-2 align-items-center">
                                        <span className="avatar avatar-lg bg-primary bg-opacity-10 border"><svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path fill="var(--primary-color)" d="M11.103,10.43793a1.78593,1.78593,0,1,0,2.43957.65362A1.786,1.786,0,0,0,11.103,10.43793Zm8.0047,1.93768q-.17587-.201-.37116-.40308.13641-.14337.264-.28649c1.60583-1.80427,2.28357-3.61371,1.65558-4.70154-.60217-1.043-2.39343-1.35382-4.63593-.91779q-.33132.06482-.659.14624-.06272-.21624-.13343-.43C14.467,3.49042,13.2381,1.99921,11.98206,2,10.77765,2.00055,9.61359,3.39709,8.871,5.5575q-.10959.31969-.20276.64471-.21908-.05375-.44-.0993c-2.366-.48578-4.27167-.16584-4.89844.9226-.601,1.04376.02753,2.74982,1.52851,4.47211q.22329.25562.45922.49976c-.18542.191-.361.38189-.52465.57171-1.4646,1.698-2.05719,3.37616-1.45716,4.41541.61969,1.07348,2.49854,1.42437,4.7854.97436q.278-.05511.55292-.124.10071.35156.22095.697c.73932,2.11706,1.89685,3.46863,3.097,3.4682,1.23944-.00073,2.48194-1.45288,3.23474-3.65875.05945-.17432.11573-.35535.16907-.54175q.35514.08835.71485.1568c2.20336.41687,3.95251.089,4.55145-.951C21.28058,15.93109,20.64288,14.12933,19.10767,12.37561ZM4.07019,7.45184c.38586-.67,1.94324-.93139,3.98608-.512q.19584.04027.39838.09a20.464,20.464,0,0,0-.42126,2.67767,20.88659,20.88659,0,0,0-2.10389,1.6936q-.21945-.22695-.42718-.4649l.00006.00006C4.21631,9.46057,3.708,8.08081,4.07019,7.45184Zm3.88666,5.72809c-.51056-.3866-.98505-.78265-1.41571-1.181.43036-.39587.90515-.79059,1.41467-1.17615q-.02746.58915-.02722,1.1792Q7.929,12.59117,7.95685,13.17993Zm-.00061,3.94061a7.23675,7.23675,0,0,1-2.63971.09314,1.766,1.766,0,0,1-1.241-.65631c-.36407-.63067.11176-1.978,1.36432-3.43023q.23621-.273.48791-.53174a20.49026,20.49026,0,0,0,2.10712,1.70007,20.80226,20.80226,0,0,0,.42621,2.712Q8.21011,17.07023,7.95624,17.12054Zm7.10113-8.03936q-.50309-.317-1.01861-.61365-.5073-.292-1.0268-.56207c.593-.24933,1.17591-.46228,1.73865-.63581A18.21775,18.21775,0,0,1,15.05737,9.08118ZM9.679,5.83521c.63623-1.85114,1.57763-2.98053,2.30352-2.98084.77308-.00037,1.77753,1.21826,2.43433,3.19763q.064.19355.121.38928a20.478,20.478,0,0,0-2.52716.9712,20.06145,20.06145,0,0,0-2.519-.98194Q9.578,6.13062,9.679,5.83521ZM9.27863,7.259a18.30717,18.30717,0,0,1,1.72967.642Q9.95746,8.4433,8.96094,9.0824C9.0412,8.4444,9.148,7.83313,9.27863,7.259ZM8.9624,14.91968q.49695.31813,1.00843.61273.52174.30039,1.05737.57556a18.19577,18.19577,0,0,1-1.74445.66492C9.15161,16.1908,9.04364,15.56879,8.9624,14.91968Zm5.45569,3.14551A7.23556,7.23556,0,0,1,13.18,20.39844l-.00006.00006a1.76585,1.76585,0,0,1-1.18841.747c-.72821.00042-1.65766-1.085-2.28992-2.89545q-.11169-.32108-.20551-.648a20.10863,20.10863,0,0,0,2.52918-1.0097,20.79976,20.79976,0,0,0,2.54736.97851Q14.50141,17.81983,14.41809,18.06519Zm.36224-1.32422c-.56921-.176-1.16058-.39252-1.76214-.64551q.50867-.2677,1.02472-.56543.52955-.30579,1.0321-.62689A18.1524,18.1524,0,0,1,14.78033,16.741Zm.44629-4.74268q.00111.91095-.05688,1.82044c-.49268.33343-1.01282.659-1.554.97143-.53894.31116-1.07293.59711-1.59674.8559q-.82682-.39624-1.62176-.854-.79047-.455-1.54468-.969-.06894-.90921-.06946-1.82172l.00012.00019q-.00063-.91187.06794-1.82184c.49255-.33637,1.00891-.66168,1.54278-.96991.53632-.30969,1.077-.59442,1.61469-.85248q.81664.39688,1.60382.85065.78992.454,1.549.95868.06519.91443.06524,1.83166Zm.95673-5.09283c1.92133-.37372,3.37-.12232,3.73291.50622.3866.66962-.16748,2.1485-1.55383,3.70636l-.00006.00006q-.1149.12891-.23841.25891A20.06118,20.06118,0,0,0,15.98,9.68915a20.04054,20.04054,0,0,0-.40546-2.64893Q15.88486,6.96387,16.18335,6.90546Zm-.12988,3.8847A18.16447,18.16447,0,0,1,17.51483,11.978a18.11912,18.11912,0,0,1-1.45672,1.20831q.02325-.59391.02288-1.18842Q16.08072,11.39389,16.05347,10.79016Zm3.8681,5.78876c-.36346.63116-1.76788.89435-3.65222.53784q-.32391-.06115-.66474-.14557a20.069,20.069,0,0,0,.38746-2.68176,19.93914,19.93914,0,0,0,2.13708-1.71588q.17643.18329.33563.36487v-.00007a7.23437,7.23437,0,0,1,1.40308,2.23792A1.76563,1.76563,0,0,1,19.92157,16.57892Z"></path></svg></span>
                                        <div>
                                            <h5 className="fw-medium mb-0 d-flex align-items-center"><Link href="#!" scroll={false}> React Lead Developer</Link><span className="badge bg-info ms-2">Full Time</span></h5>
                                            <Link href="#!" scroll={false}>DigitalIntech PVT LTD</Link>
                                        </div>
                                    </div>
                                    <div className="fs-13 mb-2">
                                        <span className="me-2 align-middle d-inline-block"><i className="ri-map-pin-line me-1 align-middle d-inline-block fs-11"></i>France</span>
                                        <span className="me-2 align-middle d-inline-block"><i className="ri-book-2-line me-1 align-middle d-inline-block fs-11"></i>13 Openings</span>
                                        <span className="me-2 align-middle d-inline-block"><i className="ri-briefcase-line me-1 align-middle d-inline-block fs-11"></i>Min - 2Years</span>
                                        <span><i className="ri-moon-clear-line me-1 align-middle d-inline-block fs-11"></i>flexible-shift</span>
                                    </div>
                                    <div className="d-flex justify-content-between mb-3 gap-2 flex-wrap">
                                        <div className="popular-tags">
                                            <span className="fw-medium fs-14 me-2">Skills:</span>
                                            <Link href="#!" scroll={false} className="badge bg-primary-transparent me-1">UX/UI</Link>
                                            <Link href="#!" scroll={false} className="badge bg-primary-transparent me-1">Javascript</Link>
                                            <Link href="#!" scroll={false} className="badge bg-primary-transparent me-1">React</Link>
                                            <Link href="#!" scroll={false} className="badge bg-primary-transparent me-1">Wireframe</Link>
                                            <Link href="#!" scroll={false} className="badge bg-primary-transparent me-1">Word Press</Link>
                                        </div>
                                        <div className="fs-13 text-muted">
                                            <i className="ri-subtract-fill text-success align-middle me-1 d-inline-block"></i> 3 Hours Ago
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <h6 className="fw-medium mb-0">$15,000 - $37,000</h6>
                                        <Link href="" className="text-primary fw-medium fs-14 d-inline-flex">
                                            Apply Now <i className="fe fe-chevron-right transform-arrow ms-2 lh-base"></i>
                                        </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card featured-jobs">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <Card.Body className="">
                                    <div className="btn-list float-end">
                                        <Link href="#!" scroll={false} className="avatar avatar-sm bg-danger-transparent" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><span><i className="ri-heart-line fs-14 align-middle"></i></span></Link>
                                        <Link href="#!" scroll={false} className="avatar avatar-sm bg-warning-transparent" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Featured Jobs" data-bs-original-title="Featured Jobs"><span><i className="ri-star-fill fs-14 align-middle"></i></span></Link>
                                    </div>
                                    <div className="d-flex mb-3 flex-wrap gap-2 align-items-center">
                                        <span className="avatar avatar-lg bg-primary bg-opacity-10 border"><svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path fill="var(--primary-color)" d="M22.86723,3.374a.99906.99906,0,0,0-.86622-.50195l-4.97064-.00391-.00738-.001-3.64356.001a1.00172,1.00172,0,0,0-.81787.42481l-.55859.7959L11.43851,3.291a.9983.9983,0,0,0-.81591-.42286l-3.646-.001H6.97611l-.00146.00018-.00147-.00018H6.96781l-4.97314.02734a.99989.99989,0,0,0-.85742,1.50586L11.15678,21.50586A1.00068,1.00068,0,0,0,12.01957,22h.001a1.00062,1.00062,0,0,0,.86328-.49609L22.8643,4.376A1.00212,1.00212,0,0,0,22.86723,3.374ZM10.10453,4.86816l1.085,1.53321a.99856.99856,0,0,0,.81641.42285h.00146a1.00252,1.00252,0,0,0,.8169-.42481l1.07519-1.53125,1.36267-.001-3.244,5.45373L8.7432,4.86719Zm1.9126,14.14942L3.7393,4.88477l2.66992-.01465,4.75342,7.918a1.00082,1.00082,0,0,0,.85742.48535H12.022l.001-.00012.001.00012h.002a1,1,0,0,0,.85742-.48926l4.708-7.916,2.66949.00293Z"></path></svg></span>
                                        <div>
                                            <h5 className="fw-medium mb-0 d-flex align-items-center"><Link href="#!" scroll={false}> Vuejs Frontend Developer</Link><span className="badge bg-warning ms-2">Part Time</span></h5>
                                            <Link href="#!" scroll={false}>FutureBud Solutions</Link>
                                        </div>
                                    </div>
                                    <div className="fs-13 mb-2">
                                        <span className="me-2 align-middle d-inline-block"><i className="ri-map-pin-line me-1 align-middle d-inline-block fs-11"></i>France</span>
                                        <span className="me-2 align-middle d-inline-block"><i className="ri-book-2-line me-1 align-middle d-inline-block fs-11"></i>13 Openings</span>
                                        <span className="me-2 align-middle d-inline-block"><i className="ri-briefcase-line me-1 align-middle d-inline-block fs-11"></i>Min - 2Years</span>
                                        <span><i className="ri-moon-clear-line me-1 align-middle d-inline-block fs-11"></i>flexible-shift</span>
                                    </div>
                                    <div className="d-flex justify-content-between mb-3 gap-2 flex-wrap">
                                        <div className="popular-tags">
                                            <span className="fw-medium fs-14 me-2">Skills:</span>
                                            <Link href="#!" scroll={false} className="badge bg-primary-transparent me-1">UX/UI</Link>
                                            <Link href="#!" scroll={false} className="badge bg-primary-transparent me-1">Javascript</Link>
                                            <Link href="#!" scroll={false} className="badge bg-primary-transparent me-1">React</Link>
                                            <Link href="#!" scroll={false} className="badge bg-primary-transparent me-1">Wireframe</Link>
                                            <Link href="#!" scroll={false} className="badge bg-primary-transparent me-1">Word Press</Link>
                                        </div>
                                        <div className="fs-13 text-muted">
                                            <i className="ri-subtract-fill text-success align-middle me-1 d-inline-block"></i> 2 Hours Ago
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <h6 className="fw-medium mb-0">$15,000 - $37,000</h6>
                                        <Link href="" className="text-primary fw-medium fs-14 d-inline-flex">
                                            Apply Now <i className="fe fe-chevron-right transform-arrow ms-2 lh-base"></i>
                                        </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card featured-jobs">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <Card.Body className="">
                                    <div className="btn-list float-end">
                                        <Link href="#!" scroll={false} className="avatar avatar-sm bg-danger-transparent" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><span><i className="ri-heart-line fs-14 align-middle"></i></span></Link>
                                        <Link href="#!" scroll={false} className="avatar avatar-sm bg-warning-transparent" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Featured Jobs" data-bs-original-title="Featured Jobs"><span><i className="ri-star-fill fs-14 align-middle"></i></span></Link>
                                    </div>
                                    <div className="d-flex mb-3 flex-wrap gap-2 align-items-center">
                                        <span className="avatar avatar-lg bg-primary bg-opacity-10 border"><svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path fill="var(--primary-color)" d="M21.46777,2.3252A1.00007,1.00007,0,0,0,20.73,2H3.27a1.00039,1.00039,0,0,0-.99609,1.08887l1.52,17a.99944.99944,0,0,0,.72851.87451l7.2002,2A.99628.99628,0,0,0,11.99023,23a1.01206,1.01206,0,0,0,.26709-.03613l7.21973-2a1.00055,1.00055,0,0,0,.729-.875l1.52-17A1,1,0,0,0,21.46777,2.3252Zm-3.19238,16.896L11.99072,20.9624,5.72461,19.22168,4.36328,4H19.63672ZM7.81982,13h6.895l-.32714,3.271-2.56788.917L8.65625,16.05811a1.00017,1.00017,0,1,0-.67285,1.88378l3.5,1.25a1.00291,1.00291,0,0,0,.67285,0l3.5-1.25a1.00044,1.00044,0,0,0,.65869-.84228l.5-5A1.00064,1.00064,0,0,0,15.81982,11H8.72461L8.4248,8h7.895a1,1,0,0,0,0-2h-9a1.00064,1.00064,0,0,0-.99511,1.09961l.5,5A1.00012,1.00012,0,0,0,7.81982,13Z"></path></svg></span>
                                        <div>
                                            <h5 className="fw-medium mb-0 d-flex align-items-center"><Link href="#!" scroll={false}> HTML Developer - Fresher</Link><span className="badge bg-info ms-2">Full Time</span></h5>
                                            <Link href="#!" scroll={false}>Innovatepix Co.in</Link>
                                        </div>
                                    </div>
                                    <div className="fs-13 mb-2">
                                        <span className="me-2 align-middle d-inline-block"><i className="ri-map-pin-line me-1 align-middle d-inline-block fs-11"></i>France</span>
                                        <span className="me-2 align-middle d-inline-block"><i className="ri-book-2-line me-1 align-middle d-inline-block fs-11"></i>13 Openings</span>
                                        <span className="me-2 align-middle d-inline-block"><i className="ri-briefcase-line me-1 align-middle d-inline-block fs-11"></i>Min - 2Years</span>
                                        <span><i className="ri-moon-clear-line me-1 align-middle d-inline-block fs-11"></i>flexible-shift</span>
                                    </div>
                                    <div className="d-flex justify-content-between mb-3 gap-2 flex-wrap">
                                        <div className="popular-tags">
                                            <span className="fw-medium fs-14 me-2">Skills:</span>
                                            <Link href="#!" scroll={false} className="badge bg-primary-transparent me-1">UX/UI</Link>
                                            <Link href="#!" scroll={false} className="badge bg-primary-transparent me-1">Javascript</Link>
                                            <Link href="#!" scroll={false} className="badge bg-primary-transparent me-1">React</Link>
                                            <Link href="#!" scroll={false} className="badge bg-primary-transparent me-1">Wireframe</Link>
                                            <Link href="#!" scroll={false} className="badge bg-primary-transparent me-1">Word Press</Link>
                                        </div>
                                        <div className="fs-13 text-muted">
                                            <i className="ri-subtract-fill text-success align-middle me-1 d-inline-block"></i> 3 Days Ago
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <h6 className="fw-medium mb-0">$15,000 - $37,000</h6>
                                        <Link href="" className="text-primary fw-medium fs-14 d-inline-flex">
                                            Apply Now <i className="fe fe-chevron-right transform-arrow ms-2 lh-base"></i>
                                        </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card featured-jobs">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <Card.Body className="">
                                    <div className="btn-list float-end">
                                        <Link href="#!" scroll={false} className="avatar avatar-sm bg-danger-transparent" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><span><i className="ri-heart-line fs-14 align-middle"></i></span></Link>
                                        <Link href="#!" scroll={false} className="avatar avatar-sm bg-warning-transparent" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Featured Jobs" data-bs-original-title="Featured Jobs"><span><i className="ri-star-fill fs-14 align-middle"></i></span></Link>
                                    </div>
                                    <div className="d-flex mb-3 flex-wrap gap-2 align-items-center">
                                        <span className="avatar avatar-lg bg-primary bg-opacity-10 border"><svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path fill="var(--primary-color)" d="M11.103,10.43793a1.78593,1.78593,0,1,0,2.43957.65362A1.786,1.786,0,0,0,11.103,10.43793Zm8.0047,1.93768q-.17587-.201-.37116-.40308.13641-.14337.264-.28649c1.60583-1.80427,2.28357-3.61371,1.65558-4.70154-.60217-1.043-2.39343-1.35382-4.63593-.91779q-.33132.06482-.659.14624-.06272-.21624-.13343-.43C14.467,3.49042,13.2381,1.99921,11.98206,2,10.77765,2.00055,9.61359,3.39709,8.871,5.5575q-.10959.31969-.20276.64471-.21908-.05375-.44-.0993c-2.366-.48578-4.27167-.16584-4.89844.9226-.601,1.04376.02753,2.74982,1.52851,4.47211q.22329.25562.45922.49976c-.18542.191-.361.38189-.52465.57171-1.4646,1.698-2.05719,3.37616-1.45716,4.41541.61969,1.07348,2.49854,1.42437,4.7854.97436q.278-.05511.55292-.124.10071.35156.22095.697c.73932,2.11706,1.89685,3.46863,3.097,3.4682,1.23944-.00073,2.48194-1.45288,3.23474-3.65875.05945-.17432.11573-.35535.16907-.54175q.35514.08835.71485.1568c2.20336.41687,3.95251.089,4.55145-.951C21.28058,15.93109,20.64288,14.12933,19.10767,12.37561ZM4.07019,7.45184c.38586-.67,1.94324-.93139,3.98608-.512q.19584.04027.39838.09a20.464,20.464,0,0,0-.42126,2.67767,20.88659,20.88659,0,0,0-2.10389,1.6936q-.21945-.22695-.42718-.4649l.00006.00006C4.21631,9.46057,3.708,8.08081,4.07019,7.45184Zm3.88666,5.72809c-.51056-.3866-.98505-.78265-1.41571-1.181.43036-.39587.90515-.79059,1.41467-1.17615q-.02746.58915-.02722,1.1792Q7.929,12.59117,7.95685,13.17993Zm-.00061,3.94061a7.23675,7.23675,0,0,1-2.63971.09314,1.766,1.766,0,0,1-1.241-.65631c-.36407-.63067.11176-1.978,1.36432-3.43023q.23621-.273.48791-.53174a20.49026,20.49026,0,0,0,2.10712,1.70007,20.80226,20.80226,0,0,0,.42621,2.712Q8.21011,17.07023,7.95624,17.12054Zm7.10113-8.03936q-.50309-.317-1.01861-.61365-.5073-.292-1.0268-.56207c.593-.24933,1.17591-.46228,1.73865-.63581A18.21775,18.21775,0,0,1,15.05737,9.08118ZM9.679,5.83521c.63623-1.85114,1.57763-2.98053,2.30352-2.98084.77308-.00037,1.77753,1.21826,2.43433,3.19763q.064.19355.121.38928a20.478,20.478,0,0,0-2.52716.9712,20.06145,20.06145,0,0,0-2.519-.98194Q9.578,6.13062,9.679,5.83521ZM9.27863,7.259a18.30717,18.30717,0,0,1,1.72967.642Q9.95746,8.4433,8.96094,9.0824C9.0412,8.4444,9.148,7.83313,9.27863,7.259ZM8.9624,14.91968q.49695.31813,1.00843.61273.52174.30039,1.05737.57556a18.19577,18.19577,0,0,1-1.74445.66492C9.15161,16.1908,9.04364,15.56879,8.9624,14.91968Zm5.45569,3.14551A7.23556,7.23556,0,0,1,13.18,20.39844l-.00006.00006a1.76585,1.76585,0,0,1-1.18841.747c-.72821.00042-1.65766-1.085-2.28992-2.89545q-.11169-.32108-.20551-.648a20.10863,20.10863,0,0,0,2.52918-1.0097,20.79976,20.79976,0,0,0,2.54736.97851Q14.50141,17.81983,14.41809,18.06519Zm.36224-1.32422c-.56921-.176-1.16058-.39252-1.76214-.64551q.50867-.2677,1.02472-.56543.52955-.30579,1.0321-.62689A18.1524,18.1524,0,0,1,14.78033,16.741Zm.44629-4.74268q.00111.91095-.05688,1.82044c-.49268.33343-1.01282.659-1.554.97143-.53894.31116-1.07293.59711-1.59674.8559q-.82682-.39624-1.62176-.854-.79047-.455-1.54468-.969-.06894-.90921-.06946-1.82172l.00012.00019q-.00063-.91187.06794-1.82184c.49255-.33637,1.00891-.66168,1.54278-.96991.53632-.30969,1.077-.59442,1.61469-.85248q.81664.39688,1.60382.85065.78992.454,1.549.95868.06519.91443.06524,1.83166Zm.95673-5.09283c1.92133-.37372,3.37-.12232,3.73291.50622.3866.66962-.16748,2.1485-1.55383,3.70636l-.00006.00006q-.1149.12891-.23841.25891A20.06118,20.06118,0,0,0,15.98,9.68915a20.04054,20.04054,0,0,0-.40546-2.64893Q15.88486,6.96387,16.18335,6.90546Zm-.12988,3.8847A18.16447,18.16447,0,0,1,17.51483,11.978a18.11912,18.11912,0,0,1-1.45672,1.20831q.02325-.59391.02288-1.18842Q16.08072,11.39389,16.05347,10.79016Zm3.8681,5.78876c-.36346.63116-1.76788.89435-3.65222.53784q-.32391-.06115-.66474-.14557a20.069,20.069,0,0,0,.38746-2.68176,19.93914,19.93914,0,0,0,2.13708-1.71588q.17643.18329.33563.36487v-.00007a7.23437,7.23437,0,0,1,1.40308,2.23792A1.76563,1.76563,0,0,1,19.92157,16.57892Z"></path></svg></span>
                                        <div>
                                            <h5 className="fw-medium mb-0 d-flex align-items-center"><Link href="#!" scroll={false}> React Lead Developer</Link><span className="badge bg-info ms-2">Full Time</span></h5>
                                            <Link href="#!" scroll={false}>DigitalIntech PVT LTD</Link>
                                        </div>
                                    </div>
                                    <div className="fs-13 mb-2">
                                        <span className="me-2 align-middle d-inline-block"><i className="ri-map-pin-line me-1 align-middle d-inline-block fs-11"></i>France</span>
                                        <span className="me-2 align-middle d-inline-block"><i className="ri-book-2-line me-1 align-middle d-inline-block fs-11"></i>13 Openings</span>
                                        <span className="me-2 align-middle d-inline-block"><i className="ri-briefcase-line me-1 align-middle d-inline-block fs-11"></i>Min - 2Years</span>
                                        <span><i className="ri-moon-clear-line me-1 align-middle d-inline-block fs-11"></i>flexible-shift</span>
                                    </div>
                                    <div className="d-flex justify-content-between mb-3 gap-2 flex-wrap">
                                        <div className="popular-tags">
                                            <span className="fw-medium fs-14 me-2">Skills:</span>
                                            <Link href="#!" scroll={false} className="badge bg-primary-transparent me-1">UX/UI</Link>
                                            <Link href="#!" scroll={false} className="badge bg-primary-transparent me-1">Javascript</Link>
                                            <Link href="#!" scroll={false} className="badge bg-primary-transparent me-1">React</Link>
                                            <Link href="#!" scroll={false} className="badge bg-primary-transparent me-1">Wireframe</Link>
                                            <Link href="#!" scroll={false} className="badge bg-primary-transparent me-1">Word Press</Link>
                                        </div>
                                        <div className="fs-13 text-muted">
                                            <i className="ri-subtract-fill text-success align-middle me-1 d-inline-block"></i> 2 Days Ago
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <h6 className="fw-medium mb-0">$15,000 - $37,000</h6>
                                        <Link href="" className="text-primary fw-medium fs-14 d-inline-flex">
                                            Apply Now <i className="fe fe-chevron-right transform-arrow ms-2 lh-base"></i>
                                        </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card featured-jobs">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <Card.Body className="">
                                    <div className="btn-list float-end">
                                        <Link href="#!" scroll={false} className="avatar avatar-sm bg-danger-transparent" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist" data-bs-original-title="Add to wishlist"><span><i className="ri-heart-line fs-14 align-middle"></i></span></Link>
                                        <Link href="#!" scroll={false} className="avatar avatar-sm bg-warning-transparent" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Featured Jobs" data-bs-original-title="Featured Jobs"><span><i className="ri-star-fill fs-14 align-middle"></i></span></Link>
                                    </div>
                                    <div className="d-flex mb-3 flex-wrap gap-2 align-items-center">
                                        <span className="avatar avatar-lg bg-primary bg-opacity-10 border"><svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path fill="var(--primary-color)" d="M22.86723,3.374a.99906.99906,0,0,0-.86622-.50195l-4.97064-.00391-.00738-.001-3.64356.001a1.00172,1.00172,0,0,0-.81787.42481l-.55859.7959L11.43851,3.291a.9983.9983,0,0,0-.81591-.42286l-3.646-.001H6.97611l-.00146.00018-.00147-.00018H6.96781l-4.97314.02734a.99989.99989,0,0,0-.85742,1.50586L11.15678,21.50586A1.00068,1.00068,0,0,0,12.01957,22h.001a1.00062,1.00062,0,0,0,.86328-.49609L22.8643,4.376A1.00212,1.00212,0,0,0,22.86723,3.374ZM10.10453,4.86816l1.085,1.53321a.99856.99856,0,0,0,.81641.42285h.00146a1.00252,1.00252,0,0,0,.8169-.42481l1.07519-1.53125,1.36267-.001-3.244,5.45373L8.7432,4.86719Zm1.9126,14.14942L3.7393,4.88477l2.66992-.01465,4.75342,7.918a1.00082,1.00082,0,0,0,.85742.48535H12.022l.001-.00012.001.00012h.002a1,1,0,0,0,.85742-.48926l4.708-7.916,2.66949.00293Z"></path></svg></span>
                                        <div>
                                            <h5 className="fw-medium mb-0 d-flex align-items-center"><Link href="#!" scroll={false}> Vuejs Frontend Developer</Link><span className="badge bg-warning ms-2">Part Time</span></h5>
                                            <Link href="#!" scroll={false}>FutureBud Solutions</Link>
                                        </div>
                                    </div>
                                    <div className="fs-13 mb-2">
                                        <span className="me-2 align-middle d-inline-block"><i className="ri-map-pin-line me-1 align-middle d-inline-block fs-11"></i>France</span>
                                        <span className="me-2 align-middle d-inline-block"><i className="ri-book-2-line me-1 align-middle d-inline-block fs-11"></i>13 Openings</span>
                                        <span className="me-2 align-middle d-inline-block"><i className="ri-briefcase-line me-1 align-middle d-inline-block fs-11"></i>Min - 2Years</span>
                                        <span><i className="ri-moon-clear-line me-1 align-middle d-inline-block fs-11"></i>flexible-shift</span>
                                    </div>
                                    <div className="d-flex justify-content-between mb-3 gap-2 flex-wrap">
                                        <div className="popular-tags">
                                            <span className="fw-medium fs-14 me-2">Skills:</span>
                                            <Link href="#!" scroll={false} className="badge bg-primary-transparent me-1">UX/UI</Link>
                                            <Link href="#!" scroll={false} className="badge bg-primary-transparent me-1">Javascript</Link>
                                            <Link href="#!" scroll={false} className="badge bg-primary-transparent me-1">React</Link>
                                            <Link href="#!" scroll={false} className="badge bg-primary-transparent me-1">Wireframe</Link>
                                            <Link href="#!" scroll={false} className="badge bg-primary-transparent me-1">Word Press</Link>
                                        </div>
                                        <div className="fs-13 text-muted">
                                            <i className="ri-subtract-fill text-success align-middle me-1 d-inline-block"></i> 1 Hour Ago
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <h6 className="fw-medium mb-0">$15,000 - $37,000</h6>
                                        <Link href="" className="text-primary fw-medium fs-14 d-inline-flex">
                                            Apply Now <i className="fe fe-chevron-right transform-arrow ms-2 lh-base"></i>
                                        </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Pagination className="pagination justify-content-end">
                        <Pagination.Item className=" disabled">
                            Previous
                        </Pagination.Item>
                        <Pagination.Item className="active">1</Pagination.Item>
                        <Pagination.Item className="">2</Pagination.Item>
                        <Pagination.Item className="">3</Pagination.Item>
                        <Pagination.Item className="">
                            Next
                        </Pagination.Item>
                    </Pagination>
                </Col>
                <Col xxl={3} xl={4} className="">
                    <Card className="custom-card products-navigation-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="card-header justify-content-between">
                            <div className="card-title">
                                Search Filter
                            </div>
                            <Link href="#!" scroll={false} className="text-info fw-medium badge bg-info-transparent">
                                Reset All
                            </Link>
                        </div>
                        <Card.Body className="p-0">
                            <div className="py-4 px-sm-4 p-3 border-bottom">
                                <h6 className="fw-medium mb-0">Categories</h6>
                                <div className="px-sm-2 px-0 py-3 pb-0">
                                    <div className="form-check mb-2 d-flex align-items-center gap-2 flex-wrap">
                                        <input className="form-check-input mb-1" type="checkbox" value="" id="c-1" defaultChecked />
                                        <label className="form-check-label" htmlFor="c-1">
                                            Information Technology
                                        </label>
                                        <span className="badge bg-light text-default fw-500 ms-auto">3,417</span>
                                    </div>
                                    <div className="form-check mb-2 d-flex align-items-center gap-2 flex-wrap">
                                        <input className="form-check-input mb-1" type="checkbox" value="" id="c-2" />
                                        <label className="form-check-label" htmlFor="c-2">
                                            Finance
                                        </label>
                                        <span className="badge bg-light text-default fw-500 ms-auto">345</span>
                                    </div>
                                    <div className="form-check mb-2 d-flex align-items-center gap-2 flex-wrap">
                                        <input className="form-check-input mb-1" type="checkbox" value="" id="c-3" defaultChecked />
                                        <label className="form-check-label" htmlFor="c-3">
                                            Marketing
                                        </label>
                                        <span className="badge bg-light text-default fw-500 ms-auto">15,427</span>
                                    </div>
                                    <div className="form-check mb-2 d-flex align-items-center gap-2 flex-wrap">
                                        <input className="form-check-input mb-1" type="checkbox" value="" id="c-4" defaultChecked />
                                        <label className="form-check-label" htmlFor="c-4">
                                            Transportation
                                        </label>
                                        <span className="badge bg-light text-default fw-500 ms-auto">2,457</span>
                                    </div>
                                    <div className="form-check mb-2 d-flex align-items-center gap-2 flex-wrap">
                                        <input className="form-check-input mb-1" type="checkbox" value="" id="c-5" />
                                        <label className="form-check-label" htmlFor="c-5">
                                            Telecommunications
                                        </label>
                                        <span className="badge bg-light text-default fw-500 ms-auto">1,542</span>
                                    </div>
                                    <Collapse in={open}>
                                        <div>
                                            <div className="form-check mb-1">
                                                <Form.Check type="checkbox" value="" id="c-6" />
                                                <Form.Label className="form-check-label" htmlFor="c-6">
                                                    Aerospace
                                                </Form.Label>
                                                <Badge bg="light" className="text-default fw-500 float-end">5,964</Badge>
                                            </div>
                                            <div className="form-check mb-1">
                                                <Form.Check type="checkbox" value="" id="c-7" />
                                                <Form.Label className="form-check-label" htmlFor="c-7">
                                                    Biotechnology
                                                </Form.Label>
                                                <Badge bg="light" className="text-default fw-500 float-end">2,123</Badge>
                                            </div>
                                        </div>
                                    </Collapse>
                                    <Link className="ecommerce-more-link" href="#!" scroll={false} aria-controls="#category-more" onClick={() => setOpen(!open)}
                                        aria-expanded={open}>MORE</Link>
                                </div>
                            </div>
                            <div className="py-4 px-sm-4 p-3 border-bottom">
                                <h6 className="fw-medium mb-0">Job Type</h6>
                                <div className="px-sm-2 px-0 py-3 pb-0">
                                    <div className="form-check mb-2 d-flex align-items-center gap-2 flex-wrap">
                                        <input className="form-check-input mb-1" type="checkbox" value="" id="j-1" defaultChecked />
                                        <label className="form-check-label" htmlFor="j-1">
                                            Full Time
                                        </label>
                                        <span className="badge bg-light text-default fw-500 ms-auto">512</span>
                                    </div>
                                    <div className="form-check mb-2 d-flex align-items-center gap-2 flex-wrap">
                                        <input className="form-check-input mb-1" type="checkbox" value="" id="j-2" defaultChecked />
                                        <label className="form-check-label" htmlFor="j-2">
                                            Part Time
                                        </label>
                                        <span className="badge bg-light text-default fw-500 ms-auto">2,186</span>
                                    </div>
                                    <div className="form-check mb-2 d-flex align-items-center gap-2 flex-wrap">
                                        <input className="form-check-input mb-1" type="checkbox" value="" id="j-3" defaultChecked />
                                        <label className="form-check-label" htmlFor="j-3">
                                            Internship
                                        </label>
                                        <span className="badge bg-light text-default fw-500 ms-auto">734</span>
                                    </div>
                                    <div className="form-check mb-2 d-flex align-items-center gap-2 flex-wrap">
                                        <input className="form-check-input mb-1" type="checkbox" value="" id="j-4" />
                                        <label className="form-check-label" htmlFor="j-4">
                                            Freelancer
                                        </label>
                                        <span className="badge bg-light text-default fw-500 ms-auto">16</span>
                                    </div>
                                    <div className="form-check d-flex align-items-center gap-2 flex-wrap">
                                        <input className="form-check-input mb-1" type="checkbox" value="" id="j-5" />
                                        <label className="form-check-label" htmlFor="j-5">
                                            Remote Job
                                        </label>
                                        <span className="badge bg-light text-default fw-500 ms-auto">1,432</span>
                                    </div>
                                </div>
                            </div>
                            <div className="py-4 px-sm-4 p-3 border-bottom">
                                <h6 className="fw-medium mb-0">Salary Range</h6>
                                <div className="px-sm-2 px-0 py-3 pb-0">
                                    <AirbnbSlider
                                        className='noUi-touch-area'
                                        slots={{ thumb: AirbnbThumbComponent }}
                                        getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
                                        defaultValue={[20, 40]}
                                    />
                                </div>
                            </div>
                            <div className="py-4 px-sm-4 p-3 border-bottom">
                                <h6 className="fw-medium mb-0">Qualification</h6>
                                <div className="px-sm-2 px-0 py-3 pb-0">
                                    <div className="form-check mb-2 d-flex align-items-center gap-2 flex-wrap">
                                        <input className="form-check-input mb-1" type="checkbox" value="" id="q-1" />
                                        <label className="form-check-label" htmlFor="q-1">
                                            All Education Levels
                                        </label>
                                        <span className="badge bg-light text-default fw-500 ms-auto">16,563</span>
                                    </div>
                                    <div className="form-check mb-2 d-flex align-items-center gap-2 flex-wrap">
                                        <input className="form-check-input mb-1" type="checkbox" value="" id="q-2" defaultChecked />
                                        <label className="form-check-label" htmlFor="q-2">
                                            10th Pass and Above
                                        </label>
                                        <span className="badge bg-light text-default fw-500 ms-auto">15,234</span>
                                    </div>
                                    <div className="form-check mb-2 d-flex align-items-center gap-2 flex-wrap">
                                        <input className="form-check-input mb-1" type="checkbox" value="" id="q-3" />
                                        <label className="form-check-label" htmlFor="q-3">
                                            12th Pass and Above
                                        </label>
                                        <span className="badge bg-light text-default fw-500 ms-auto">6,278</span>
                                    </div>
                                    <div className="form-check mb-2 d-flex align-items-center gap-2 flex-wrap">
                                        <input className="form-check-input mb-1" type="checkbox" value="" id="q-4" defaultChecked />
                                        <label className="form-check-label" htmlFor="q-4">
                                            Diploma and Graduate
                                        </label>
                                        <span className="badge bg-light text-default fw-500 ms-auto">4,531</span>
                                    </div>
                                    <div className="form-check d-flex align-items-center gap-2 flex-wrap">
                                        <input className="form-check-input mb-1" type="checkbox" value="" id="q-5" />
                                        <label className="form-check-label" htmlFor="q-5">
                                            Post Graduate
                                        </label>
                                        <span className="badge bg-light text-default fw-500 ms-auto">2,405</span>
                                    </div>
                                </div>
                            </div>
                            <div className="py-4 px-sm-4 p-3 border-bottom">
                                <h6 className="fw-medium mb-0">Experience</h6>
                                <div className="px-sm-2 px-0 py-3 pb-0">
                                    <div className="form-check mb-2 d-flex align-items-center gap-2 flex-wrap">
                                        <input className="form-check-input mb-1" type="checkbox" value="" id="e-1" defaultChecked />
                                        <label className="form-check-label" htmlFor="e-1">
                                            Fresher
                                        </label>
                                        <span className="badge bg-light text-default fw-500 ms-auto">23,156</span>
                                    </div>
                                    <div className="form-check mb-2 d-flex align-items-center gap-2 flex-wrap">
                                        <input className="form-check-input mb-1" type="checkbox" value="" id="e-2" />
                                        <label className="form-check-label" htmlFor="e-2">
                                            Less than 1 year
                                        </label>
                                        <span className="badge bg-light text-default fw-500 ms-auto">15,632</span>
                                    </div>
                                    <div className="form-check mb-2 d-flex align-items-center gap-2 flex-wrap">
                                        <input className="form-check-input mb-1" type="checkbox" value="" id="e-3" defaultChecked />
                                        <label className="form-check-label" htmlFor="e-3">
                                            Less than 2 year
                                        </label>
                                        <span className="badge bg-light text-default fw-500 ms-auto">15,032</span>
                                    </div>
                                    <div className="form-check d-flex align-items-center gap-2 flex-wrap">
                                        <input className="form-check-input mb-1" type="checkbox" value="" id="e-4" defaultChecked />
                                        <label className="form-check-label" htmlFor="e-4">
                                            More than 3 years
                                        </label>
                                        <span className="badge bg-light text-default fw-500 ms-auto">7,154</span>
                                    </div>
                                </div>
                            </div>
                            <div className="py-4 px-sm-4 p-3">
                                <h6 className="fw-medium mb-0">Skills</h6>
                                <div className="px-sm-2 px-0 py-3 pb-0">
                                    <div className="form-check mb-2 d-flex align-items-center gap-2 flex-wrap">
                                        <input className="form-check-input mb-1" type="checkbox" value="" id="s-1" defaultChecked />
                                        <label className="form-check-label" htmlFor="s-1">
                                            HTML5
                                        </label>
                                        <span className="badge bg-light text-default fw-500 ms-auto">23,156</span>
                                    </div>
                                    <div className="form-check mb-2 d-flex align-items-center gap-2 flex-wrap">
                                        <input className="form-check-input mb-1" type="checkbox" value="" id="s-2" defaultChecked />
                                        <label className="form-check-label" htmlFor="s-2">
                                            Javascript
                                        </label>
                                        <span className="badge bg-light text-default fw-500 ms-auto">15,632</span>
                                    </div>
                                    <div className="form-check mb-2 d-flex align-items-center gap-2 flex-wrap">
                                        <input className="form-check-input mb-1" type="checkbox" value="" id="s-3" />
                                        <label className="form-check-label" htmlFor="s-3">
                                            PHP
                                        </label>
                                        <span className="badge bg-light text-default fw-500 ms-auto">15,032</span>
                                    </div>
                                    <div className="form-check mb-2 d-flex align-items-center gap-2 flex-wrap">
                                        <input className="form-check-input mb-1" type="checkbox" value="" id="s-4" defaultChecked />
                                        <label className="form-check-label" htmlFor="s-4">
                                            CSS3
                                        </label>
                                        <span className="badge bg-light text-default fw-500 ms-auto">7,154</span>
                                    </div>
                                    <Collapse in={open1}>
                                        <div>
                                            <div className="form-check mb-1">
                                                <Form.Check type="checkbox" value="" id="c-6" />
                                                <Form.Label className="form-check-label" htmlFor="c-6">
                                                    Bootstrap
                                                </Form.Label>
                                                <Badge bg="light" className="text-default fw-500 float-end">5,964</Badge>
                                            </div>
                                            <div className="form-check mb-1">
                                                <Form.Check type="checkbox" value="" id="c-7" />
                                                <Form.Label className="form-check-label" htmlFor="c-7">
                                                    Angular
                                                </Form.Label>
                                                <Badge bg="light" className="text-default fw-500 float-end">2,123</Badge>
                                            </div>
                                            <div className="form-check mb-1">
                                                <Form.Check type="checkbox" value="" id="c-7" />
                                                <Form.Label className="form-check-label" htmlFor="c-7">
                                                    React
                                                </Form.Label>
                                                <Badge bg="light" className="text-default fw-500 float-end">2,123</Badge>
                                            </div>
                                        </div>
                                    </Collapse>
                                    <Link className="ecommerce-more-link" href="#!" scroll={false} aria-controls="#category-more" onClick={() => setOpen1(!open1)}
                                        aria-expanded={open1}>MORE</Link>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body className="">
                            <div className="">
                                <h5 className="fw-medium mb-3">Get Up-to-date Job Alerts</h5>
                                <p className="fs-14">Stay ahead in your job search journey with the latest updates tailored just for you.</p>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Email Here" aria-label="blog-email" aria-describedby="blog-subscribe" />
                                    <button className="btn btn-primary" type="button" id="blog-subscribe">Subscribe</button>
                                </div>
                                <label className="form-check-label">
                                    By Subscribing you accept to <Link href="#!" scroll={false} className="text-success"><u>privacy policy</u></Link>
                                </label>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default SearchJobs;
