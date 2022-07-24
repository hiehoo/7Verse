import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import styled from "@emotion/styled";
import Image from "next/image";

import { SafeAny } from "@core/models/common";
import useWindowDimensions from "@core/hooks/useWindowDimensions";
import Drawer from "antd/lib/drawer";
import MenuOutlined from "@ant-design/icons/lib/icons/MenuOutlined";

import icoLogo from "public/images/common/main-logo.png";
import icoMainLogo from "public/images/common/main-logo.png";

const Header = () => {
  const router = useRouter();
  const [width, height] = useWindowDimensions();
  const [visible, setVisible] = useState(false);

  const isMobile = useMemo(() => {
    return width <= 576;
  }, [width]);

  const menuItems = useMemo(() => {
    let menuList = [
      {
        label: "NFT Marketplace",
        url: "/",
        isBtn: false,
        isNewTab: false,
      },
      {
        label: "SQUAD BUILDER",
        url: "/",
        isBtn: false,
        isNewTab: false,
      },
      {
        label: "BET N EARN",
        url: "/",
        isBtn: false,
        isNewTab: false,
      },
      {
        label: "WHITEPAPER",
        url: "https://docs.7verse.football/",
        isBtn: false,
        isNewTab: true,
      },
      {
        label: "Connect Wallet",
        url: "/",
        isBtn: true,
        isNewTab: false,
      },
    ];
    return menuList;
  }, []);

  const onCloseDrawer = useCallback(() => {
    setVisible(false);
  }, []);

  if (isMobile) {
    return (
      <HeaderWrapper>
        <div className="container">
          <HeaderWrapperMobi>
            <LogoWrapMobi onClick={() => router.push("/")}>
              <Image src={icoLogo} alt="" />
            </LogoWrapMobi>
            <IconShowDrawer>
              <MenuOutlined
                onClick={() => {
                  setVisible(true);
                }}
                style={{
                  fontSize: "22px",
                  color: "#fff",
                  cursor: "pointer",
                }}
              />
            </IconShowDrawer>
          </HeaderWrapperMobi>
          <Drawer
            title="7 VERSE"
            placement="right"
            onClose={onCloseDrawer}
            visible={visible}
          >
            {menuItems.map((item, index) => {
              return (
                <MenuItemMobiWrap key={index} isBtn={item.isBtn}>
                  {item.isNewTab ? (
                    <Link href={item.url} passHref>
                      <a target="_blank" rel="noopener noreferrer">
                        {item.label}
                      </a>
                    </Link>
                  ) : (
                    <span
                      onClick={() =>
                        router.push(item.url, null, { shallow: true })
                      }
                    >
                      {item.label}
                    </span>
                  )}
                </MenuItemMobiWrap>
              );
            })}
          </Drawer>
        </div>
      </HeaderWrapper>
    );
  }

  return (
    <HeaderWrapper id="headerElement">
      <div className="container">
        <HeaderWrap>
          <LogoWrap>
            <Image src={icoMainLogo} alt="" />
          </LogoWrap>
          <MenuWrap>
            {menuItems.map((item, index) => {
              return (
                <MenuItemWrap key={index} isBtn={item.isBtn}>
                  {item.isNewTab ? (
                    <Link href={item.url} passHref>
                      <a target="_blank" rel="noopener noreferrer">
                        {item.label}
                      </a>
                    </Link>
                  ) : (
                    <span
                      onClick={() =>
                        router.push(item.url, null, { shallow: true })
                      }
                    >
                      {item.label}
                    </span>
                  )}
                </MenuItemWrap>
              );
            })}
          </MenuWrap>
        </HeaderWrap>
      </div>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  // background: ${(props: SafeAny) => props.theme.colors.darkBg} !important;

  @media ${(props: SafeAny) => props.theme.device.smMax} {
    margin-top: 15px;
  }
`;

const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 30px 20px 30px;
`;

const LogoWrap = styled.div`
  width: 30%;
  cursor: pointer;
  img {
    width: 150px;
    height: auto;
  }
`;

const MenuWrap = styled.div`
  width: 70%;
  display: flex;
  justify-content: flex-end;
`;

const MenuItemWrap = styled.div`
  margin-right: 50px;
  padding: 5px;
  &:last-child {
    margin-right: 0;
  }
  a,
  span {
    text-transform: uppercase;
    cursor: pointer;
    font-weight: 400;
    font-size: 17px;
    color: ${(props: SafeAny) => props.theme.colors.white};
  }

  ${(props) =>
    props.isBtn &&
    `
  background: linear-gradient(90deg, #9E1919 0%, #FB4B4B 100%);
  border-radius: 27px;

  span {    
    font-size: 12px !important;
  }
  `}
`;

const HeaderWrapperMobi = styled.div`
  display: flex;
  align-items: center;
`;

const LogoWrapMobi = styled.div`
  flex-grow: 1;
  img {
    width: 150px;
    height: auto;
  }
`;

const IconShowDrawer = styled.div`
  flex-grow: unset;
`;

const MenuItemMobiWrap = styled(MenuItemWrap)`
  margin-right: 0px;
  padding: 8px;
  span {
    font-size: 15px;
    color: ${(props: SafeAny) => props.theme.colors.darkBg};
  }

  border-bottom: 1px solid ${(props: SafeAny) => props.theme.colors.darkBg};

  &:last-child {
    border-bottom: none;
  }

  ${(props) =>
    props.isBtn &&
    `
    background: none;
    justify-content: center;
    display: flex;
    margin-top: 5px;
    span {
      background: linear-gradient(90deg, #9E1919 0%, #FB4B4B 100%);
      border-radius: 27px;
      width: 75%;
      text-align: center;
      color: ${props.theme.colors.white};
    }
  `}
`;
