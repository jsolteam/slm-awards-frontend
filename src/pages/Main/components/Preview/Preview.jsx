import MainLogo from "@assets/img/main-logo.png";
import JsolTeam from "@assets/img/jsol-team.png";
import Slmnews from "@assets/img/slm-news.png";

import { NextSlide } from "@components/ui/NextSlide";

import * as Styles from "./Preview.styles";
import { forwardRef, useMemo } from "react";
import { useResizeListener } from "@hooks/useResizeListener";
import { createLinerArray } from "./Preview.helpers";

export const Preview = forwardRef(({ height }, ref) => {
  const { width } = useResizeListener();
  const linerArray = useMemo(
    () =>
      createLinerArray({
        width,
      }),
    [width]
  );

  return (
    <Styles.Wrapper ref={ref} $height={height}>
      {linerArray.map((el, index) => (
        <Styles.Line key={`line-${el}`} $position={el} $index={index + 1} />
      ))}
      <Styles.TitleWrapper>
        <Styles.Logo src={MainLogo} />
        <Styles.Title>
          Первая
          <br />
          стримерская
          <br />
          премия сквада
        </Styles.Title>
      </Styles.TitleWrapper>
      <Styles.Support>
        <Styles.SupportTitle>При поддержке</Styles.SupportTitle>
        <Styles.SupportPartners>
          <Styles.SupportLogo src={JsolTeam} />
          <Styles.SupportLogo src={Slmnews} />
        </Styles.SupportPartners>
      </Styles.Support>
      <NextSlide>Информация о премии</NextSlide>
    </Styles.Wrapper>
  );
});

Preview.displayName = "Preview";
