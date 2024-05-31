"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { Chip } from "@component/Chip";
import Icon from "@component/icon/Icon";
import { useAppContext } from "@context/app-context";
import useWindowSize from "@hook/useWindowSize";
import { layoutConstant } from "@utils/constants";
import { getTheme } from "@utils/utils";
import styled from "styled-components";

import { Link } from "~/components/link";
import { cn } from "~/utils";

// STYLED COMPONENT
const Wrapper = styled.div`
  left: 0;
  right: 0;
  bottom: 0;
  display: none;
  position: fixed;
  align-items: center;
  justify-content: space-around;
  height: ${layoutConstant.mobileNavHeight};
  background: ${getTheme("colors.body.paper")};
  box-shadow: 0px 1px 4px 3px rgba(0, 0, 0, 0.1);
  z-index: 999;

  .link {
    flex: 1 1 0;
    display: flex;
    font-size: 13px;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    .icon {
      display: flex;
      margin-bottom: 4px;
      align-items: center;
      justify-content: center;
    }
  }

  @media only screen and (max-width: 900px) {
    display: flex;
    width: 100vw;
  }
`;

export const MobileNavigationBar = () => {
  const width = useWindowSize();
  const { state } = useAppContext();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  if (width && width <= 900) {
    return (
      <Wrapper>
        {list.map((item) => (
          <Link
            className={cn("link", item.href === pathName && "text-sky-700")}
            href={
              pathName === item.href
                ? pathName
                : item.href +
                  `?current=${encodeURIComponent(pathName + (searchParams.toString() ? "?" + searchParams.toString() : ""))}`
            }
            key={item.title}
          >
            <Icon className="icon" variant="small">
              {item.icon}
            </Icon>

            {item.title}

            {item.title === "Cart" && !!state.cart.length && (
              <Chip
                top="-4px"
                px="0.25rem"
                fontWeight="600"
                bg="primary.main"
                position="absolute"
                color="primary.text"
                left="calc(50% + 8px)"
              >
                {state.cart.length}
              </Chip>
            )}
          </Link>
        ))}
      </Wrapper>
    );
  }

  return null;
};

const list = [
  { title: "Trang chủ", icon: "home", href: "/" },
  { title: "Sản phẩm", icon: "category", href: "/mobile-category-nav" },
  { title: "Về chúng tôi", icon: "about-us", href: "/ve-chung-toi" },
  { title: "Tin tức", icon: "news", href: "/tin-tuc" },
];
