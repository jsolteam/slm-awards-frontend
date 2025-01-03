import { ArrowAgle } from "@components/ui/Icons";
import * as Styles from "./Nominated.styles";
import { Button } from "@components/ui/Button";

export const Nominated = ({ name, twitchLink, avatarUrl }) => {
  return (
    <Styles.Nominated>
      <Styles.Wrapper>
        <Styles.Content>
          <Styles.MiniLogo src={avatarUrl} />
          <Styles.Title>{name}</Styles.Title>
          <Styles.Link href={twitchLink}>
            <Styles.LinkValue>Twitch-канал</Styles.LinkValue> <ArrowAgle />
          </Styles.Link>
        </Styles.Content>
      </Styles.Wrapper>
      <Button>Выбрать</Button>
    </Styles.Nominated>
  );
};
