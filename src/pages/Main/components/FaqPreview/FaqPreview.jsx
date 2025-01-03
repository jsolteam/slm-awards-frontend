import { forwardRef } from "react";

import slmNewsFaq from "@assets/img/slm-news-faq.png";

import { Button, ButtonStyle } from "@components/ui/Button";
import { HiddenText } from "@components/ui/HiddenText/HiddenText";

import * as MainStyles from "../../Main.styles";

import * as Styles from "./FaqPreview.styles";

export const FaqPreview = forwardRef(({ height }, ref) => (
  <Styles.Wrapper ref={ref} $height={height}>
    <Styles.Content>
      <Styles.NewsWrapper>
        <Styles.TitleWrapper>
          <Styles.TitleValue>
            Следите за последними новостями о премии только в{" "}
            <Styles.TitleValueBold>SLM News</Styles.TitleValueBold>
          </Styles.TitleValue>
          <Styles.TitleLogo src={slmNewsFaq} />
        </Styles.TitleWrapper>
        <Button style={ButtonStyle.irishGreen}>Перейти в канал</Button>
      </Styles.NewsWrapper>
      <Styles.QuestionsWrapper>
        <MainStyles.Category>вопрос-ответ</MainStyles.Category>
        <Styles.Questions>
          <HiddenText title="Как определяются победители в номинациях?">
            В этом году победителей определяют не только зрители, но и жюри.Жюри
            — ваши любимые стримеры. Это нужно для того, чтобы сбалансировать
            результаты голосования в случае внезапно нахлынувшей сторонней
            аудитории, а также учесть мнение реальных представителей
            индустрии.Но приоритет все равно остается у зрителей. Голоса будут
            учтены в соотношении 70:30, где 70% — мнение аудитории, а 30% —
            мнение жюри.
          </HiddenText>
          <HiddenText title="Как определяются победители в номинациях?">
            В этом году победителей определяют не только зрители, но и жюри.Жюри
            — ваши любимые стримеры. Это нужно для того, чтобы сбалансировать
            результаты голосования в случае внезапно нахлынувшей сторонней
            аудитории, а также учесть мнение реальных представителей
            индустрии.Но приоритет все равно остается у зрителей. Голоса будут
            учтены в соотношении 70:30, где 70% — мнение аудитории, а 30% —
            мнение жюри.
          </HiddenText>
          <HiddenText title="Как определяются победители в номинациях?">
            В этом году победителей определяют не только зрители, но и жюри.
            <br />
            <br />
            Жюри — ваши любимые стримеры. Это нужно для того, чтобы
            сбалансировать результаты голосования в случае внезапно нахлынувшей
            сторонней аудитории, а также учесть мнение реальных представителей
            индустрии.
            <br />
            <br />
            Но приоритет все равно остается у зрителей. Голоса будут учтены в
            соотношении 70:30, где 70% — мнение аудитории, а 30% — мнение жюри.
          </HiddenText>
          <HiddenText title="Как определяются победители в номинациях?">
            В этом году победителей определяют не только зрители, но и жюри.Жюри
            — ваши любимые стримеры. Это нужно для того, чтобы сбалансировать
            результаты голосования в случае внезапно нахлынувшей сторонней
            аудитории, а также учесть мнение реальных представителей
            индустрии.Но приоритет все равно остается у зрителей. Голоса будут
            учтены в соотношении 70:30, где 70% — мнение аудитории, а 30% —
            мнение жюри.
          </HiddenText>
        </Styles.Questions>
      </Styles.QuestionsWrapper>
    </Styles.Content>

    <Styles.Footer>
      <Styles.FooterCompany>SLM Awards 2024</Styles.FooterCompany>
      <Styles.FooterTeam>Создано командой JSOL Team</Styles.FooterTeam>
    </Styles.Footer>
  </Styles.Wrapper>
));

FaqPreview.displayName = "FaqPreview";
