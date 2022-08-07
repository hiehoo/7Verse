/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import BannerPageComponent from "@components/shared/BannerPage";
import MarketFilterOption from "./MarketFilterOption";
import { SafeAny } from "@core/models/common";
import MarketPlayListComponent from "./MarketPlayList";
import FilterOutlined from "@ant-design/icons/lib/icons/FilterOutlined";
import Drawer from "antd/lib/drawer";
import { playerListItems } from "@core/configs/market";
import filter from "lodash/filter";
import isEmpty from "lodash/isEmpty";

const MarketplaceContainer = () => {
  const [filterPlayerValue, setFilterPlayerValue] = useState<SafeAny>({});
  const [tagListVal, setTagListVal] = useState<SafeAny>([]);
  const [textSearch, setTextSearch] = useState<string>("");

  const [isShowFilter, setIsShowFilter] = useState(false);
  const [playerList, setPlayerList] = useState(playerListItems);

  const onGetFilterValueHandler = (filterValue, tagList) => {
    setFilterPlayerValue(filterValue);
    setTagListVal(tagList);
  };

  const onGetTextSearchHandler = (text) => {
    setTextSearch(text);
  };

  useEffect(() => {
    if (isEmpty(filterPlayerValue)) {
      let newPlayerList = playerListItems;
      if (textSearch) {
        newPlayerList = filter(playerListItems, (player) => {
          return player?.playerName.toUpperCase().indexOf(textSearch.toUpperCase()) > -1;
        });
      }
      setPlayerList(newPlayerList);
    } else {
      let newPlayerList = filter(playerListItems, filterPlayerValue);
      if (textSearch) {
        newPlayerList = filter(playerListItems, (player) => {
          return player?.playerName.toUpperCase().indexOf(textSearch.toUpperCase()) > -1;
        });
      }
      setPlayerList(newPlayerList);
    }
  }, [filterPlayerValue, tagListVal, textSearch]);

  return (
    <MarketplaceWrapper>
      <MarketplaceContentWrap className="container">
        <BannerPageComponent imageUrl={`/images/market/market-banner.png`} />
        <MarketplaceLine>
          <img src="/images/market/line-market.png" />
        </MarketplaceLine>
        <MarketplaceItemFilter>
          <MarketplaceBlock className="row">
            <MarketplaceBlock className="col-md-3">
              <ItemFilterOption>
                <FilterMobile>
                  <p>PLAYER LIST</p>
                  <FilterIcon onClick={() => setIsShowFilter(true)}>
                    <FilterOutlined
                      style={{ color: "#e4e2e2", fontSize: "16px" }}
                    />
                  </FilterIcon>

                  <Drawer
                    title="Filter"
                    placement="right"
                    onClose={() => setIsShowFilter(false)}
                    visible={isShowFilter}
                  >
                    <DrawerContent>
                      <MarketFilterOption
                        onGetTextSearchHandler={onGetTextSearchHandler}
                        onGetFilterValueHandler={onGetFilterValueHandler}
                      />
                    </DrawerContent>
                  </Drawer>
                </FilterMobile>
                <FilterDesktop>
                  <MarketFilterOption
                    onGetTextSearchHandler={onGetTextSearchHandler}
                    onGetFilterValueHandler={onGetFilterValueHandler}
                  />
                </FilterDesktop>
              </ItemFilterOption>
            </MarketplaceBlock>
            <MarketplaceBlock className="col-md-9">
              {playerList.length ? (
                <MarketPlayListComponent playerList={playerList} />
              ) : (
                <EmptyData>
                  <p>Không tìm thấy vật phẩm nào!</p>
                </EmptyData>
              )}
            </MarketplaceBlock>
          </MarketplaceBlock>
        </MarketplaceItemFilter>
      </MarketplaceContentWrap>
    </MarketplaceWrapper>
  );
};

export default MarketplaceContainer;

const MarketplaceWrapper = styled.div`
  background: ${(props: SafeAny) => props.theme.colors.darkBg};
`;

const MarketplaceContentWrap = styled.div``;

const MarketplaceLine = styled.div`
  text-align: center;
  margin: 20px 0;
`;

const MarketplaceBlock = styled.div``;

const MarketplaceItemFilter = styled.div``;

const ItemFilterOption = styled.div``;

const FilterDesktop = styled.div`
  @media ${(props: any) => props.theme.device.smMax} {
    display: none;
  }
`;

const FilterMobile = styled.div`
  display: none;
  @media ${(props: any) => props.theme.device.smMax} {
    display: flex;
    align-items: center;
    p {
      margin-bottom: 0;
      flex-grow: 1;
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      text-transform: uppercase;
      color: #e4e2e2;
    }
  }
`;

const FilterIcon = styled.div`
  display: flex;
`;

const DrawerContent = styled.div`
  padding: 30px;
`;

const EmptyData = styled.div`
  text-align: center;
  margin-top: 50px;
  p {
    color: #e4e2e2;
  }
`;
function includes(arg0: string, arg1: string) {
  throw new Error("Function not implemented.");
}

