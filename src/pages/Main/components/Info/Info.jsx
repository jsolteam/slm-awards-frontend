import { forwardRef } from "react";

import lock1 from "@assets/img/lock-1.png";
import lock2 from "@assets/img/lock-2.png";
import lock3 from "@assets/img/lock-3.png";

import { Sidebar } from "@components/Sidebar";
import { NextSlide } from "@components/ui/NextSlide";
import {
  Button,
  ButtonStyle,
  ButtonType,
  ButtonVariant,
} from "@components/ui/Button";

import * as MainStyles from "../../Main.styles";

import * as Styles from "./Info.styles";

import { Nomination } from "./components/Nomination";
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

export const Info = forwardRef((_, ref) => {
  return (
    <Styles.Wrapper ref={ref}>
      <Styles.Info>
        <Styles.Subtitle>
          <Styles.SubtitleBold>SLM Awards</Styles.SubtitleBold> — это первая
          премия, созданная для признания и награждения талантливых стримеров и
          контент-креаторов, которые вдохновляют, развлекают и объединяют наше
          сообщество. Мы отмечаем достижения в самых разнообразных категориях —
          от мема года до лучшего стримера года.
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
      </Styles.Info>
      <Styles.LocationEvent>
        <MainStyles.Category>Место проведения</MainStyles.Category>
        <Styles.TitleWrapper>
          <Styles.EmojiImage1 src={lock1} />
          <Styles.Title>
            Церемония награждения будет проходить на Twitch канале -{" "}
            <Styles.TitleBold>DemLoveSky</Styles.TitleBold>
          </Styles.Title>
        </Styles.TitleWrapper>
        <Button
          type={ButtonType.link}
          style={ButtonStyle.eminence}
          variant={ButtonVariant.medium}
        >
          Перейти на канал
        </Button>
        <Styles.Bottom>
          <Styles.EmojiImage2 src={lock2} />
          <Styles.EmojiImage3 src={lock3} />
        </Styles.Bottom>
      </Styles.LocationEvent>
      <NextSlide>Голосование</NextSlide>
    </Styles.Wrapper>
  );
});

Info.displayName = "Info";
