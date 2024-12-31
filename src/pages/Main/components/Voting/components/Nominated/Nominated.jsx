import * as Styles from "./Nominated.styles";

export const Nominated = ({ name, twitchLink, avatarUrl }) => {
  return (
    <Styles.Wrapper>
      <Styles.Content>
        <Styles.MiniLogo src={avatarUrl} />
        <Styles.Title>{name}</Styles.Title>
        <Styles.Subtitle href={twitchLink}>Twitch-канал</Styles.Subtitle>
      </Styles.Content>
    </Styles.Wrapper>
  );
};
