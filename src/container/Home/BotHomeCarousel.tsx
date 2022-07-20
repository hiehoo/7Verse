import React, { useState } from "react";
import styled from "@emotion/styled";

import { SafeAny } from "../../core/models/common";
import Carousel from "antd/lib/carousel";

import { useDateCountDown } from "@core/hooks/useDateCountDown";
import ModalComponent from "@components/shared/Modal";

const BotHomeCarousel = ({}) => {
  const [days, hours, minutes, seconds] = useDateCountDown(new Date('08/22/2022'));
  const [isShow, setIsShow] = useState(false);

  const onShowModalHandler = () => {
    console.log(1);
    setIsShow(true);
  };

  const onCloseModalHandler = () => {
    setIsShow(false);
  }

  return (
    <BotHomeCarouselWrap>
      <CarouselContent>
        {/* atoplay */}
        <Carousel dotPosition={`bottom`}>
          <CarouselContentItem>
            <CarouselContentItemWrap>
              <CarouselContentItemImg>
                <img src="/images/common/Mainmessi.png" />
              </CarouselContentItemImg>
              <CarouselContentItemDes>
                <h2>Lionel messi’s NFT Card bundles</h2>
                <p>
                  The Hall Of Fame are the first players a Manager sees when
                  they see your profile. The Hall of Fame is kept for true club
                  legends. Players that wear the badge with pride and have
                  inspired your teams to 7Verse victories.
                </p>
                <CarouselContentItemBtn>
                  <img src="/images/common/count-down.png" />
                </CarouselContentItemBtn>
                <CarouselContentItemData>
                  <DataItem>
                    <p>
                      {days} <span>Days</span> {hours} <span>Hours</span> {minutes}{" "}
                      <span>Minutes</span> {seconds} <span>Seconds</span>
                    </p>
                  </DataItem>
                </CarouselContentItemData>
                <CarouselContentItemBid>
                  <div 
                    onClick={() => {
                      onShowModalHandler();
                    }}
                  >
                    <img
                      style={{ marginRight: "25px" }}
                      src="/images/common/btn-place-bid.png"
                    />
                  </div>
                  <div 
                    onClick={() => {
                      onShowModalHandler();
                    }}
                  >
                    <img src="/images/common/ico-bid.svg" />
                  </div>
                </CarouselContentItemBid>
              </CarouselContentItemDes>
            </CarouselContentItemWrap>
          </CarouselContentItem>

          <CarouselContentItem>
            <CarouselContentItemWrap>
              <CarouselContentItemImg>
                <img src="/images/common/Mainmessi.png" />
              </CarouselContentItemImg>
              <CarouselContentItemDes>
                <h2>Lionel messi’s NFT Card bundles</h2>
                <p>
                  The Hall Of Fame are the first players a Manager sees when
                  they see your profile. The Hall of Fame is kept for true club
                  legends. Players that wear the badge with pride and have
                  inspired your teams to 7Verse victories.
                </p>
                <CarouselContentItemBtn>
                  <img src="/images/common/count-down.png" />
                </CarouselContentItemBtn>
                <CarouselContentItemData>
                  <DataItem>
                    <p>
                      2 <span>Days</span> 12 <span>Hours</span> 30{" "}
                      <span>Minutes</span> 54 <span>Seconds</span>
                    </p>
                  </DataItem>
                </CarouselContentItemData>
                <CarouselContentItemBid>
                  <div>
                    <img
                      style={{ marginRight: "25px" }}
                      src="/images/common/btn-place-bid.png"
                    />
                  </div>
                  <div>
                    <img src="/images/common/ico-bid.svg" />
                  </div>
                </CarouselContentItemBid>
              </CarouselContentItemDes>
            </CarouselContentItemWrap>
          </CarouselContentItem>
        </Carousel>
      </CarouselContent>
      {isShow &&  <ModalComponent title="" modalShow={isShow} onCloseModalHandler={onCloseModalHandler}/> }
    </BotHomeCarouselWrap>
  );
};

export default React.memo(BotHomeCarousel);

const BotHomeCarouselWrap = styled.div`
  border-top: 1px solid #c149f738;
  padding-top: 20px;
  margin: 80px 0;
  .slick-dots-bottom {
    li {
      width: 10px !important;
      height: 10px !important;
      margin: 2px 15px !important;

      button {
        width: 10px !important;
        height: 10px !important;
        border-radius: 50%;
      }
    }
    .slick-active {
      width: 10px !important;
      height: 10px !important;

      button {
        width: 10px !important;
        height: 10px !important;
        border-radius: 50%;
        background: #f94a4a !important;
      }
    }
  }

    @media ${(props: any) => props.theme.device.smMax} {
    margin: 20px 0;

    .ant-carousel .slick-dots {
      margin-left: 0 !important;
    }

    .ant-carousel .slick-dots-bottom {
      bottom: -15px !important;
    }

    .slick-dots-bottom  li {
      margin: 0px 5px !important;
    }
  }
`;

const CarouselContent = styled.div``;

const CarouselContentItem = styled.div`
  height: 500px;

    @media ${(props: any) => props.theme.device.smMax} {
    height: 400px;
  }
`;

const CarouselContentItemWrap = styled.div`
  display: flex;
  height: 100%;
`;

const CarouselContentItemImg = styled.div`
  width: 40%;
  height: 100%;
  position: relative;
  background: url(/images/common/bg-main-messi.png) no-repeat;
  background-size: cover;
  background-position: center;
  img {
    width: auto;
    max-height: 100%;
  }

    @media ${(props: any) => props.theme.device.smMax} {
    background-size: contain;
    display: flex;
    align-items: center;
  }
`;

const CarouselContentItemDes = styled.div`
  width: 60%;
  padding: 100px 0 100px 20px;
  h2 {
    font-style: normal;
    font-weight: 300;
    font-size: 32px;
    line-height: 48px;
    text-transform: uppercase;
    opacity: 0.8;
    color: ${(props: SafeAny) => props.theme.colors.white};
  }

  p {
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 27px;
    opacity: 0.6;
    color: ${(props: SafeAny) => props.theme.colors.white};
  }

    @media ${(props: any) => props.theme.device.smMax} {
    padding: 0px 0 0px 20px;

    h2 {
      font-size: 17px;
      line-height: 27px;
    }

    p {
      font-size: 14px;
      line-height: 22px;
    }
  }
`;

const CarouselContentItemBtn = styled.div`
  margin: 25px 0;
  font-size: 39.3333px;
  line-height: 59px;
  text-transform: uppercase;
  opacity: 0.8;
    @media ${(props: any) => props.theme.device.smMax} {
    margin: 15px 0;
  }
`;

const CarouselContentItemData = styled.div`
  display: flex;
`;

const DataItem = styled.div`
  p {
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 60px;
    text-transform: uppercase;
    color: #d9d9d9;
    opacity: 0.5;

    span {
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 36px;
      color: #d9d9d9;
      margin-right: 25px;
      opacity: 0.2;
    }
  }

    @media ${(props: any) => props.theme.device.smMax} {
    p {
      font-size: 14px;
      line-height: initial;
      span {
        font-size: 13px;
        margin-right: 10px;
      }
    }
  }
`;

const CarouselContentItemBid = styled.div`
  display: flex;
  img {
    height: auto;
    cursor: pointer;
  }

    @media ${(props: any) => props.theme.device.smMax} {
    div {
      &:first-child {
        margin-right: 10px;
       }
    }
    img {
      width: 30px;

      &:first-child {
        width: 100%;
      }
    }
  }
`;