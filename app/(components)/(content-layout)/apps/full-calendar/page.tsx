"use client";
import { INITIAL_EVENTS, createEventId } from "@/shared/data/apps/fullcalendardata";
import React, { Component, Fragment } from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import Link from "next/link";
import Seo from "@/shared/layout-components/seo/seo";
import { Card, Col, Row } from "react-bootstrap";

class FullCalenderComponent extends Component {

  state = {
    calendarWeekends: true,

    // Data for ListCalendar******

    calendarEvents1: [
      { id: '1', title: "Event Now1", start: new Date() },
      { id: '2', title: "Event Now2", start: new Date() },
      { id: '3', title: "Event Now3", start: new Date() },
      { id: '4', title: "Event Now4", start: new Date() },
      { id: '5', title: "Event Now5", start: new Date() },
      { id: '6', title: "Event Now6", start: new Date() },
    ],

    // Data for FullCalendar******

    calendarEvents: [
      {
        title: "Atlanta Monster", start: new Date("2019-04-04 00:00"), id: "99999998"
      },
      {
        title: "My Favorite Murder", start: new Date("2019-04-05 00:00"), id: "99999999"
      }
    ],
    events: [

      { title: "Calendar Events", id: "1", bg: "bg-primary-transparent mb-2", icon: "ri-calendar-line" },

      { title: "Birthday Events", id: "2", bg: " bg-success-transparent mb-2", icon: "ri-cake-2-line" },
      { title: "Holiday Calendar", id: "3", bg: "bg-info-transparent mb-2", icon: "ri-calendar-check-line" },
      { title: "Office Events", id: "4", bg: "bg-danger-transparent mb-2", icon: "ri-home-office-line" },
      { title: "Other Events", id: "5", bg: "bg-warning-transparent mb-2", icon: "ri-calendar-event-line" },
      { title: "Festival Events", id: "6", bg: "bg-teal-transparent mb-2", icon: "ri-cake-line" },
      { title: "Timeline Events", id: "7", bg: "bg-dark-transparent mb-2", icon: "ri-timeline-view" },

    ],
  };
  handleEventClick: ((arg: any) => void) | undefined;
  componentDidMount() {
    const draggableEl: any = document.getElementById("external-events");
    new Draggable(draggableEl, {
      itemSelector: ".fc-event",
      eventData: function (eventEl) {
        const title = eventEl.getAttribute("title");
        const id = eventEl.getAttribute("data");

        return {
          title: title,
          id: id
        };
      }
    });
  }

  eventClick = (_eventClick: any) => {
  };
  handleEventClicks = (clickInfo: any) => {
    if (window.confirm(`Are you sure you want to delete the event? '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
    }
  };
  handleDateSelect = (selectInfo: any) => {
    const title = prompt("Event title");
    const calendarApi = selectInfo.view.calendar;
    calendarApi.unselect(); // clear date selection
    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }

  };
  render() {
    return (
      <Fragment>
        <Seo title={"Full Calendar"} />
        <Row>
          <Col xxl={3}>
            <Card className="custom-card">
              <div className="top-left"></div>
              <div className="top-right"></div>
              <div className="bottom-left"></div>
              <div className="bottom-right"></div>
              <Card.Header className=" justify-content-between">
                <div className="card-title">All Events</div>
                <button className="btn btn-sm btn-primary btn-wave"><i className="ri-add-line align-middle me-1 fw-medium d-inline-block"></i>Create Event</button>
              </Card.Header>
              <Card.Body className="p-0">
                <div id="external-events" className="border-bottom p-3">
                  {this.state.events.map(event => (
                    <Link href="#!" scroll={false} className={`fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event ${event.bg} `} title={event.title} datatype={event.id} key={event.id}>
                      <div className="">
                        <i className={`${event.icon} me-2 d-inline-block`}></i>
                        {event.title}</div>
                    </Link>
                  ))}
                </div>
              </Card.Body>
            </Card>
            <Card className="custom-card">
              <div className="top-left"></div>
              <div className="top-right"></div>
              <div className="bottom-left"></div>
              <div className="bottom-right"></div>
              <Card.Body className="p-0 pb-2">
                <div className="p-3 pb-2">
                  <div className="d-flex align-items-center justify-content-between gap-3">
                    <h6 className="fw-medium mb-0">
                      Today's Events (3):
                    </h6>
                    <button className="btn btn-primary-light btn-sm btn-wave waves-effect waves-light">View All</button>
                  </div>
                </div>
                <div className="p-3">
                  <ul className="list-unstyled mb-0">
                    <li className="mb-3">
                      <div className="d-flex gap-1 align-items-center flex-wrap">
                        <div className="avatar avatar-md avatar-rounded flex-shrink-0 me-1 bg-primary-transparent text-primary">
                          <i className="ri-user-line"></i>
                        </div>
                        <div>
                          <div className="mb-0 fs-14 fw-medium text-primary">Client Meeting</div>
                          <p className="mb-0 text-muted fs-12">
                            Meeting with a client.
                          </p>
                        </div>
                        <div className="ms-auto">
                          <span className="badge bg-light mb-1">10:00AM-12:00PM</span>
                        </div>
                      </div>
                    </li>
                    <li className="mb-3">
                      <div className="d-flex gap-1 align-items-center flex-wrap">
                        <div className="avatar avatar-md avatar-rounded flex-shrink-0 me-1 bg-secondary-transparent text-secondary">
                          <i className="ri-live-line"></i>
                        </div>
                        <div>
                          <div className="mb-0 fs-14 fw-medium text-primary">Team Meeting</div>
                          <p className="mb-0 text-muted fs-12">
                            Zoom Meeting with all Teams.
                          </p>
                        </div>
                        <div className="ms-auto">
                          <span className="badge bg-light mb-1">05:30PM-08:00PM</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex gap-1 align-items-center flex-wrap">
                        <div className="avatar avatar-md avatar-rounded flex-shrink-0 me-1 bg-warning-transparent text-warning">
                          <i className="ri-shake-hands-line"></i>
                        </div>
                        <div>
                          <div className="mb-0 fs-14 fw-medium text-primary">Meeting New Client</div>
                          <p className="mb-0 text-muted fs-12">
                            Meeting with a New Client.
                          </p>
                        </div>
                        <div className="ms-auto">
                          <span className="badge bg-light mb-1">8:30PM-09:00PM</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="px-3 d-xxl-block d-none">
                  <img src="../../assets/images/media/media-83.png" alt="" className="img-fluid px-5" />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xxl={9}>
            <Card className="custom-card">
              <div className="top-left"></div>
              <div className="top-right"></div>
              <div className="bottom-left"></div>
              <div className="bottom-right"></div>
              <Card.Header className="">
                <div className="card-title">Full Calendar</div>
              </Card.Header>
              <Card.Body>
                <div id='calendar2'>
                  <FullCalendar initialView="dayGridMonth"
                    headerToolbar={{ start: "prev,next today", center: "title", end: "dayGridMonth,timeGridWeek,timeGridDay,listWeek" }}
                    rerenderDelay={10}
                    eventDurationEditable={false}
                    editable={true}
                    droppable={true}
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    events={this.state.calendarEvents}
                    selectable={true}
                    selectMirror={true}
                    dayMaxEvents={true}
                    initialEvents={INITIAL_EVENTS}
                    select={this.handleDateSelect}
                    eventClick={this.handleEventClicks}
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Fragment>
    );
  }

}

export default FullCalenderComponent;
