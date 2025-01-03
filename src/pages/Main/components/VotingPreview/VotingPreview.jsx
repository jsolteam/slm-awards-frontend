import { forwardRef, useState } from "react";

import * as Styles from "./VotingPreview.styles";
import * as MainStyles from "../../Main.styles";
import { SidebarHandle } from "@components/Sidebar";
import { Nominated } from "./components/Nominated/Nominated";
import { Button, ButtonStyle, ButtonVariant } from "@components/ui/Button";
import { NextSlide } from "@components/ui/NextSlide";
import { NominatesData, OrderNominations } from "./VotingPreview.constants";
import { Counter } from "@components/ui/Counter";

export const VotingPreview = forwardRef((_, ref) => {
  const [currentNominate, setCurrentNominate] = useState(0);

  const { title, nominated } = NominatesData[OrderNominations[currentNominate]];

  return (
    <Styles.Wrapper ref={ref}>
      <Styles.Voting>
        <Styles.TextWrapper>
          <MainStyles.Category>голосование</MainStyles.Category>
          <Styles.Description>
            Для учета голоса, нужно проголосовать во всех номинациях
          </Styles.Description>
        </Styles.TextWrapper>
        <Styles.TitleWrapper>
          <Styles.Subtitle>номинация</Styles.Subtitle>
          <Styles.Title>{title}</Styles.Title>
        </Styles.TitleWrapper>
        <Styles.SidebarWrapper>
          <SidebarHandle>
            {nominated.map((el) => (
              <Nominated
                key={`${el.name}-${el.id}`}
                name={el.name}
                twitchLink={el.twitchLink}
                avatarUrl={el.avatarUrl}
              />
            ))}
          </SidebarHandle>
        </Styles.SidebarWrapper>
      </Styles.Voting>
      <Styles.SwitchingVoting>
        <Counter current={currentNominate} order={OrderNominations} />
        <Styles.Buttons>
          <Button
            style={ButtonStyle.white}
            variant={ButtonVariant.medium}
            onClick={() => setCurrentNominate((state) => state - 1)}
            disabled={currentNominate === 0}
          >
            Предыдущая страница
          </Button>
          <Button
            variant={ButtonVariant.medium}
            onClick={() => setCurrentNominate((state) => state + 1)}
            disabled={currentNominate === OrderNominations.length - 1}
          >
            Следующая страница
          </Button>
        </Styles.Buttons>
      </Styles.SwitchingVoting>
      <NextSlide>вопрос-ответ</NextSlide>
    </Styles.Wrapper>
  );
});

VotingPreview.displayName = "VotingPreview";
