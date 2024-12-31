import { Sidebar } from "@components/Sidebar";
import { Nomination } from "./components/Nomination";

import * as Styles from "./Info.styles";
import { forwardRef } from "react";

const temp = [
  {
    id: 0,
    title: "Стример года",
    description: "Самый лучший стример сквада по итогам года",
  },
  {
    id: 1,
    title: "Стример года",
    description: "Самый лучший стример сквада по итогам года",
  },
  {
    id: 2,
    title: "Стример года",
    description: "Самый лучший стример сквада по итогам года",
  },
  {
    id: 3,
    title: "Стример года",
    description: "Самый лучший стример сквада по итогам года",
  },
  {
    id: 4,
    title: "Стример года",
    description: "Самый лучший стример сквада по итогам года",
  },
  {
    id: 5,
    title: "Стример года",
    description: "Самый лучший стример сквада по итогам года",
  },
  {
    id: 6,
    title: "Стример года",
    description: "Самый лучший стример сквада по итогам года",
  },
  {
    id: 7,
    title: "Стример года",
    description: "Самый лучший стример сквада по итогам года",
  },
];

export const Info = forwardRef(({ height }, ref) => {
  return (
    <Styles.Wrapper ref={ref} $height={height}>
      <Styles.Subtitle>
        <Styles.SubtitleBold>SLM Awards</Styles.SubtitleBold> — это первая
        премия, созданная для признания и награждения талантливых стримеров и
        контент-креаторов, которые вдохновляют, развлекают и объединяют наше
        сообщество. Мы отмечаем достижения в самых разнообразных категориях — от
        мема года до лучшего стримера года.
      </Styles.Subtitle>
      <Styles.SidebarWrapper>
        <Sidebar>
          {temp.map((nomination) => (
            <Nomination
              key={`nomination-${nomination.id}`}
              title={`${nomination.title}-${nomination.id}`}
              subtitle={nomination.description}
            />
          ))}
        </Sidebar>
      </Styles.SidebarWrapper>
    </Styles.Wrapper>
  );
});

Info.displayName = "Info";
