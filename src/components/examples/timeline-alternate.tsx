import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDescription,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline";

export default function TimelineAlternate() {
  return (
    <Timeline>
      <TimelineItem css={{ _before: { content: "''", flex: "1" } }}>
        <TimelineSeparator>
          <TimelineDot variant="outline" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <TimelineTitle>Eat</TimelineTitle>
          <TimelineDescription>Because you need strength</TimelineDescription>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem css={{ _after: { content: "''", flex: "1" } }}>
        <TimelineContent>
          <TimelineTitle>Code</TimelineTitle>
          <TimelineDescription>Because it&apos;s awesome!</TimelineDescription>
        </TimelineContent>
        <TimelineSeparator>
          <TimelineDot variant="outline" />
          <TimelineConnector />
        </TimelineSeparator>
      </TimelineItem>
      <TimelineItem css={{ _before: { content: "''", flex: "1" } }}>
        <TimelineSeparator>
          <TimelineDot variant="outline" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <TimelineTitle>Sleep</TimelineTitle>
          <TimelineDescription>Because you need rest</TimelineDescription>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem css={{ _after: { content: "''", flex: "1" } }}>
        <TimelineContent>
          <TimelineTitle>Repeat</TimelineTitle>
          <TimelineDescription>Because this is the life you love!</TimelineDescription>
        </TimelineContent>
        <TimelineSeparator>
          <TimelineDot variant="outline" />
        </TimelineSeparator>
      </TimelineItem>
    </Timeline>
  );
}
