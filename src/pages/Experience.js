import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";

export default function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--eduction"
          date="2015 OL"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        ><h3 className="vertical-timeline-element-title">AMal Init</h3>
        <p>Caption</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--eduction"
          date="2015 OL"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        ><h3 className="vertical-timeline-element-title">AMal Init</h3>
        <p>Caption</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--eduction"
          date="2015 OL"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        ><h3 className="vertical-timeline-element-title">AMal Init</h3>
        <p>Caption</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--eduction"
          date="2015 OL"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        ><h3 className="vertical-timeline-element-title">AMal Init</h3>
        <p>Caption</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
