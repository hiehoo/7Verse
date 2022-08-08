/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import styled from "@emotion/styled";
import Select from "antd/lib/select";
import { SafeAny } from "@core/models/common";
import map from "lodash/map";
import ModalComponent from "@components/shared/Modal";

const MarketPlayListComponent = ({ playerList = [] }: SafeAny) => {
  const { Option } = Select;
  const [isShow, setIsShow] = useState(false);

  const onCommingSoonShow = () => {
    setIsShow(true);
  };

  const onCloseModalHandler = () => {
    setIsShow(false);
  };
  return (
    <MarketPlayListWrapper>
      <MarketPlayListContentWrap>
        <MarketTitleSort>
          <p>PLayer List</p>
          {/* <SortData>
            <p>Sort by</p>
            <Select defaultValue="1" style={{ width: 120 }}>
              <Option value="1">Last Listed</Option>
              <Option value="0">First Listed</Option>
            </Select>
          </SortData> */}
        </MarketTitleSort>
        <TotalItemFilter>{playerList?.length} results</TotalItemFilter>
        <MarketPlayListItem>
          <MarketPlayListItemWrap>
            <MarketPlayListItemRow className="row">
              {map(playerList, (item, indx) => (
                <MarketPlayListItemCol key={indx} className="col-md-3">
                  <MarketPlayListItemContent>
                    <img src={`${item.img}`} />
                    <ItemInfo>
                      <ItemInfoCurrency>
                        <img src="/images/market/ico-bnb.png" />
                        <span>BNB</span>
                      </ItemInfoCurrency>
                      <ItemInfValue>
                        <span>{item.value}</span>
                        <span>{item.stats}</span>
                      </ItemInfValue>
                    </ItemInfo>
                    <div>
                      <BtnBidNow>
                        <button
                          className="btn"
                          onClick={() => onCommingSoonShow()}
                        >
                          BID NOW
                        </button>
                      </BtnBidNow>
                    </div>
                  </MarketPlayListItemContent>
                </MarketPlayListItemCol>
              ))}
              {isShow && (
                <ModalComponent
                  title=""
                  modalShow={isShow}
                  onCloseModalHandler={onCloseModalHandler}
                />
              )}
            </MarketPlayListItemRow>
          </MarketPlayListItemWrap>
        </MarketPlayListItem>
      </MarketPlayListContentWrap>
    </MarketPlayListWrapper>
  );
};

export default MarketPlayListComponent;

const MarketPlayListWrapper = styled.div``;

const MarketPlayListContentWrap = styled.div``;

const MarketTitleSort = styled.div`
  display: flex;
  border-bottom: 2px solid #45d9fc;
  padding-bottom: 20px;
  align-items: center;
  > p {
    flex-grow: 1;
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    text-transform: uppercase;
    color: #e4e2e2;
    @media ${(props: any) => props.theme.device.smMax} {
      display: none;
    }
  }
`;

const SortData = styled.div`
  display: flex;
  align-items: center;
  @media ${(props: any) => props.theme.device.smMax} {
    width: 100%;
    margin-top: 10px;
  }
  p {
    margin-bottom: 0;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    margin-right: 15px;
    text-transform: uppercase;
    color: #e4e2e2;
    @media ${(props: any) => props.theme.device.smMax} {
      flex-grow: 1;
    }
  }
  .ant-select-selector {
    background: #1e1f28 !important;
    border: none !important;

    span {
      color: #e4e2e2 !important;
    }
  }

  .ant-select-arrow {
    color: #55cccc !important;
  }
`;

const TotalItemFilter = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: rgba(228, 226, 226, 0.6);
  margin: 10px 0;
  text-transform: uppercase;
`;

const MarketPlayListItem = styled.div`
  background: rgba(44, 45, 58, 0.6);
`;

const MarketPlayListItemWrap = styled.div`
  padding: 0px 20px 30px 20px;
`;

const MarketPlayListItemRow = styled.div``;

const MarketPlayListItemCol = styled.div`
  margin-top: 30px;
`;

const MarketPlayListItemContent = styled.div`
  box-shadow: 1px 1px 4px rgb(242 90 176);
  border-radius: 8px;
  padding-bottom: 10px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  img {
    width: 100%;
    height: auto;
  }

  button {
    color: #ffffff;
    font-size: 13px;
    background: linear-gradient(90deg, #9e1919 0%, #fb4b4b 100%);
    border-radius: 27px;
    border: none;
    width: 100% !important;
  }
`;

const ItemInfo = styled.div`
  display: flex;
  padding: 0 10px;
`;

const ItemInfoCurrency = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  img {
    width: 30px;
    height: auto;
  }

  span {
    font-size: 14px;
    color: #fff;
  }
`;

const ItemInfValue = styled.div`
  span {
    font-weight: 400;
    font-size: 13px;
    line-height: 46px;
    color: #f25ac9;

    &:last-child {
      color: #fff;
      margin-left: 10px;
    }
  }
`;

const BtnBidNow = styled.div`
  padding: 0 10px;
`;
