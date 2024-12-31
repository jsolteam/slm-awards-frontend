import { forwardRef } from "react";

import lock1 from "@assets/img/lock-1.png";
import lock2 from "@assets/img/lock-2.png";
import lock3 from "@assets/img/lock-3.png";

import { NextSlide } from "@components/ui/NextSlide";

import * as MainStyles from "../../Main.styles";

import * as Styles from "./LocationEvent.styles";

export const LocationEvent = forwardRef(({ height }, ref) => (
  <Styles.Wrapper ref={ref} $height={height}>
    <MainStyles.Category>Место проведения</MainStyles.Category>
    <Styles.TitleWrapper>
      <Styles.EmojiImage1 src={lock1} />
      <Styles.Title>
        Церемония награждения будет проходить на Twitch канале -{" "}
        <Styles.TitleBold>DemLoveSky</Styles.TitleBold>
      </Styles.Title>
    </Styles.TitleWrapper>
    <Styles.LinkTwitch>
      <Styles.Link>Перейти на канал</Styles.Link>
    </Styles.LinkTwitch>
    <Styles.Bottom>
      <Styles.EmojiImage2 src={lock2} />
      <Styles.EmojiImage3 src={lock3} />
    </Styles.Bottom>
    <NextSlide>Голосование</NextSlide>
  </Styles.Wrapper>
));

LocationEvent.displayName = "LocationEvent";
