import { forwardRef } from "react";

import * as Styles from "./Voting.styles";
import { SidebarHandle } from "@components/Sidebar";
import { Nominated } from "./components/Nominated/indes";

const temp = [
  {
    id: 0,
    name: "walkonskyy",
    twitchLink: "",
    avatarUrl:
      "https://s3-alpha-sig.figma.com/img/3b0a/d551/b121e6c9fbaf93e213261b2399edc2b0?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oWYZxj9IYtrw7aAt4mGn831pGhT8luS8L0Kyw5zMtaIGWe~1EeMFqa5xF0~agUrYnSPtnEsxuBrpm1mj4MJErTpGuEQumwCkkrAaSBZDiqQ8Rb9Jtme2556uQRm-L4GUtHXAwoLe8xu1dn3~QeFlafxQCyF07Kwh7D96h4RCOkcUMZRiRQMc0yx8Cg8bSwtVu~kmSv7mROtWyxlsrugtwZQnyOudGXmCsgk7dJhDAslp0AimLwCIiqnRmw3mG8PB-wpgmZG3v2uGkp8kSfvakdiEB5FMWmvH0qxRy50eBJxaNmukYeHEcfkPpn2kH7URaHGLAsl-WmO5jvDLU5Jg1Q__",
  },
  {
    id: 1,
    name: "Demlovesky",
    twitchLink: "",
    avatarUrl:
      "https://s3-alpha-sig.figma.com/img/97d4/bc3c/ccd4c5d84330c5a6f1d412cc06c8f7e9?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qWt7XndQygj0Irph-i5Ehqofpq5AgjyMAsc1ruq7q0xMpe54iE~DP06ng-ruEp1G2uMnHiygmxvvhRB~x1o5MvDIoEMtPRr5V3hp3ItPlBgd-YlsH5E-Is~WlQeJE6glF71a6~QCnrcv7Eh6TESv0bf8pxskOZA4xnplToxnh5GIQmZyxdjLX~1057FfXZ4rN65Et~yPFynutMLys6d9J-DfT5kD1ZaaIUYax~Zw1IDukFfT8XXW0prlOGofcIJ8-H2veCLYY6Tfy2Tq~whsiHMOWLDpk2dB8GwTKLBJakAIb8IPJtiNtKK6S8j6y6cZSUE48C4PY231Ot37RLGSig__",
  },
  {
    id: 2,
    name: "walkonskyy",
    twitchLink: "",
    avatarUrl:
      "https://s3-alpha-sig.figma.com/img/3b0a/d551/b121e6c9fbaf93e213261b2399edc2b0?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oWYZxj9IYtrw7aAt4mGn831pGhT8luS8L0Kyw5zMtaIGWe~1EeMFqa5xF0~agUrYnSPtnEsxuBrpm1mj4MJErTpGuEQumwCkkrAaSBZDiqQ8Rb9Jtme2556uQRm-L4GUtHXAwoLe8xu1dn3~QeFlafxQCyF07Kwh7D96h4RCOkcUMZRiRQMc0yx8Cg8bSwtVu~kmSv7mROtWyxlsrugtwZQnyOudGXmCsgk7dJhDAslp0AimLwCIiqnRmw3mG8PB-wpgmZG3v2uGkp8kSfvakdiEB5FMWmvH0qxRy50eBJxaNmukYeHEcfkPpn2kH7URaHGLAsl-WmO5jvDLU5Jg1Q__",
  },
  {
    id: 3,
    name: "Demlovesky",
    twitchLink: "",
    avatarUrl:
      "https://s3-alpha-sig.figma.com/img/97d4/bc3c/ccd4c5d84330c5a6f1d412cc06c8f7e9?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qWt7XndQygj0Irph-i5Ehqofpq5AgjyMAsc1ruq7q0xMpe54iE~DP06ng-ruEp1G2uMnHiygmxvvhRB~x1o5MvDIoEMtPRr5V3hp3ItPlBgd-YlsH5E-Is~WlQeJE6glF71a6~QCnrcv7Eh6TESv0bf8pxskOZA4xnplToxnh5GIQmZyxdjLX~1057FfXZ4rN65Et~yPFynutMLys6d9J-DfT5kD1ZaaIUYax~Zw1IDukFfT8XXW0prlOGofcIJ8-H2veCLYY6Tfy2Tq~whsiHMOWLDpk2dB8GwTKLBJakAIb8IPJtiNtKK6S8j6y6cZSUE48C4PY231Ot37RLGSig__",
  },
  {
    id: 4,
    name: "walkonskyy",
    twitchLink: "",
    avatarUrl:
      "https://s3-alpha-sig.figma.com/img/3b0a/d551/b121e6c9fbaf93e213261b2399edc2b0?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oWYZxj9IYtrw7aAt4mGn831pGhT8luS8L0Kyw5zMtaIGWe~1EeMFqa5xF0~agUrYnSPtnEsxuBrpm1mj4MJErTpGuEQumwCkkrAaSBZDiqQ8Rb9Jtme2556uQRm-L4GUtHXAwoLe8xu1dn3~QeFlafxQCyF07Kwh7D96h4RCOkcUMZRiRQMc0yx8Cg8bSwtVu~kmSv7mROtWyxlsrugtwZQnyOudGXmCsgk7dJhDAslp0AimLwCIiqnRmw3mG8PB-wpgmZG3v2uGkp8kSfvakdiEB5FMWmvH0qxRy50eBJxaNmukYeHEcfkPpn2kH7URaHGLAsl-WmO5jvDLU5Jg1Q__",
  },
  {
    id: 6,
    name: "Demlovesky",
    twitchLink: "",
    avatarUrl:
      "https://s3-alpha-sig.figma.com/img/97d4/bc3c/ccd4c5d84330c5a6f1d412cc06c8f7e9?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qWt7XndQygj0Irph-i5Ehqofpq5AgjyMAsc1ruq7q0xMpe54iE~DP06ng-ruEp1G2uMnHiygmxvvhRB~x1o5MvDIoEMtPRr5V3hp3ItPlBgd-YlsH5E-Is~WlQeJE6glF71a6~QCnrcv7Eh6TESv0bf8pxskOZA4xnplToxnh5GIQmZyxdjLX~1057FfXZ4rN65Et~yPFynutMLys6d9J-DfT5kD1ZaaIUYax~Zw1IDukFfT8XXW0prlOGofcIJ8-H2veCLYY6Tfy2Tq~whsiHMOWLDpk2dB8GwTKLBJakAIb8IPJtiNtKK6S8j6y6cZSUE48C4PY231Ot37RLGSig__",
  },
  {
    id: 7,
    name: "walkonskyy",
    twitchLink: "",
    avatarUrl:
      "https://s3-alpha-sig.figma.com/img/3b0a/d551/b121e6c9fbaf93e213261b2399edc2b0?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oWYZxj9IYtrw7aAt4mGn831pGhT8luS8L0Kyw5zMtaIGWe~1EeMFqa5xF0~agUrYnSPtnEsxuBrpm1mj4MJErTpGuEQumwCkkrAaSBZDiqQ8Rb9Jtme2556uQRm-L4GUtHXAwoLe8xu1dn3~QeFlafxQCyF07Kwh7D96h4RCOkcUMZRiRQMc0yx8Cg8bSwtVu~kmSv7mROtWyxlsrugtwZQnyOudGXmCsgk7dJhDAslp0AimLwCIiqnRmw3mG8PB-wpgmZG3v2uGkp8kSfvakdiEB5FMWmvH0qxRy50eBJxaNmukYeHEcfkPpn2kH7URaHGLAsl-WmO5jvDLU5Jg1Q__",
  },
  {
    id: 8,
    name: "Demlovesky",
    twitchLink: "",
    avatarUrl:
      "https://s3-alpha-sig.figma.com/img/97d4/bc3c/ccd4c5d84330c5a6f1d412cc06c8f7e9?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qWt7XndQygj0Irph-i5Ehqofpq5AgjyMAsc1ruq7q0xMpe54iE~DP06ng-ruEp1G2uMnHiygmxvvhRB~x1o5MvDIoEMtPRr5V3hp3ItPlBgd-YlsH5E-Is~WlQeJE6glF71a6~QCnrcv7Eh6TESv0bf8pxskOZA4xnplToxnh5GIQmZyxdjLX~1057FfXZ4rN65Et~yPFynutMLys6d9J-DfT5kD1ZaaIUYax~Zw1IDukFfT8XXW0prlOGofcIJ8-H2veCLYY6Tfy2Tq~whsiHMOWLDpk2dB8GwTKLBJakAIb8IPJtiNtKK6S8j6y6cZSUE48C4PY231Ot37RLGSig__",
  },
];

export const Voting = forwardRef(({ height }, ref) => {
  return (
    <Styles.Wrapper ref={ref} $height={height}>
      <Styles.TitleWrapper>
        <Styles.Subtitle>номинация</Styles.Subtitle>
        <Styles.Title>стример года</Styles.Title>
      </Styles.TitleWrapper>
      <Styles.SidebarWrapper>
        <SidebarHandle>
          {temp.map((el) => (
            <Nominated
              key={el.name}
              name={el.name}
              twitchLink={el.twitchLink}
              avatarUrl={el.avatarUrl}
            />
          ))}
        </SidebarHandle>
      </Styles.SidebarWrapper>
    </Styles.Wrapper>
  );
});

Voting.displayName = "Voting";
