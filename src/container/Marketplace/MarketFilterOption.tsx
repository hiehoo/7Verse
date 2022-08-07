/* eslint-disable @next/next/no-img-element */
import React, { useCallback, useEffect, useState } from "react";
import styled from "@emotion/styled";

import Tag from "antd/lib/tag";
import UpOutlined from "@ant-design/icons/lib/icons/UpOutlined";
import Checkbox from "antd/lib/checkbox/Checkbox";
import DownOutlined from "@ant-design/icons/lib/icons/DownOutlined";
import { SafeAny } from "@core/models/common";

import filter from "lodash/filter";
import map from "lodash/map";

import { position, saleType, scarity } from "@core/configs/market";
import ModalComponent from "@components/shared/Modal";
import isEmpty from "lodash/isEmpty";
import debounce from "lodash/debounce";

const MarketFilterOption = ({
  onGetTextSearchHandler,
  onGetFilterValueHandler,
}) => {
  const [isShow, setIsShow] = useState(false);

  const [scarityShow, setScarityShow] = useState(true);
  const [positionShow, setPositionShow] = useState(true);
  const [saleTypeShow, setSaleTypeShow] = useState(true);

  const [filterValue, setFilterValue] = useState<SafeAny>({});
  const [tagList, setTagList] = useState([]);

  const onFilterHandler = useCallback((keyName, value) => {
    if (keyName && value) {
      setFilterValue((prevFilterValues) => ({
        ...prevFilterValues,
        [keyName]: value,
      }));
    }
  }, []);

  const onClearAllFinter = useCallback(() => {
    setFilterValue({});
  }, []);

  const onCloseTaHandler = (tag) => {
    let newTagList = filter(tagList, (item) => {
      return item?.cateName !== tag?.cateName;
    });
    let newFilterValue = filterValue;
    const propertyFilter = tag?.cateName;

    delete newFilterValue[`${propertyFilter}`];
    setFilterValue(newFilterValue);
    setTagList(newTagList);
  };

  const onCloseModalHandler = () => {
    setIsShow(false);
  };

  const handleSearchChange = useCallback(
    debounce((event) => {
      onGetTextSearchHandler(event.target.value);
    }, 800),
    []
  );

  useEffect(() => {
    let newTagItem = [];
    if (filterValue?.scarity) {
      let scarityItem = filter(scarity, (item) => {
        return item.value === filterValue?.scarity;
      });
      newTagItem = [...newTagItem, scarityItem[0]];
    }

    if (filterValue?.position) {
      let positionItem = filter(position, (item) => {
        return item.value === filterValue?.position;
      });
      newTagItem = [...newTagItem, positionItem[0]];
    }

    if (filterValue?.saleType) {
      let saleTypeItem = filter(saleType, (item) => {
        return item.value === filterValue?.saleType;
      });
      newTagItem = [...newTagItem, saleTypeItem[0]];
    }
    setTagList(newTagItem);
  }, [filterValue]);

  useEffect(() => {
    if (isEmpty(tagList)) {
      onGetFilterValueHandler({}, []);
    } else {
      onGetFilterValueHandler(filterValue, tagList);
    }
  }, [filterValue, tagList]);

  return (
    <MarketFilterOptionWrapper>
      <MarketFilterOptionContentWrap>
        <MarketFilterButton>
          <button className="btn btn-market-card">CARDS</button>
          <button
            className="btn btn-market-complete"
            onClick={() => setIsShow(true)}
          >
            Complete auctions
          </button>
          {isShow && (
            <ModalComponent
              title=""
              modalShow={isShow}
              onCloseModalHandler={onCloseModalHandler}
            />
          )}
        </MarketFilterButton>
        <MarketFilterSearch>
          <input
            type="text"
            name=""
            placeholder="SEARCH BY"
            onChange={handleSearchChange}
          />
          <img src={`/images/market/search.png`} alt="" />
          <FilterTag>
            {map(tagList, (tag, idx) => (
              <Tag key={idx} closable onClose={() => onCloseTaHandler(tag)}>
                {tag?.name}
              </Tag>
            ))}
          </FilterTag>
        </MarketFilterSearch>
        <CollapseFilter>
          <CollapseFilterItem>
            <CollapseTitle onClick={() => setScarityShow(!scarityShow)}>
              <p>Scarity</p>{" "}
              {scarityShow ? (
                <UpOutlined style={{ fontSize: "12px" }} />
              ) : (
                <DownOutlined style={{ fontSize: "12px" }} />
              )}
            </CollapseTitle>
            {scarityShow && (
              <>
                {map(scarity, (item) => (
                  <CheckboxWrap
                    key={item.id}
                    onChange={() => {
                      onFilterHandler("scarity", item.value);
                    }}
                  >
                    <Checkbox checked={filterValue?.scarity === item.value}>
                      {item.name}
                    </Checkbox>
                  </CheckboxWrap>
                ))}
              </>
            )}
          </CollapseFilterItem>

          <CollapseFilterItem>
            <CollapseTitle onClick={() => setPositionShow(!positionShow)}>
              <p>Position</p>{" "}
              {positionShow ? (
                <UpOutlined style={{ fontSize: "12px" }} />
              ) : (
                <DownOutlined style={{ fontSize: "12px" }} />
              )}
            </CollapseTitle>
            {positionShow && (
              <>
                {map(position, (item) => (
                  <CheckboxWrap
                    key={item.id}
                    onChange={() => {
                      onFilterHandler("position", item.value);
                    }}
                  >
                    <Checkbox checked={filterValue?.position === item.value}>
                      {item.name}
                    </Checkbox>
                  </CheckboxWrap>
                ))}
              </>
            )}
          </CollapseFilterItem>

          <CollapseFilterItem>
            <CollapseTitle onClick={() => setSaleTypeShow(!saleTypeShow)}>
              <p>Sale Type</p>{" "}
              {saleTypeShow ? (
                <UpOutlined style={{ fontSize: "12px" }} />
              ) : (
                <DownOutlined style={{ fontSize: "12px" }} />
              )}
            </CollapseTitle>
            {saleTypeShow && (
              <>
                {map(saleType, (item) => (
                  <CheckboxWrap
                    key={item.id}
                    onChange={() => {
                      onFilterHandler("saleType", item.value);
                    }}
                  >
                    <Checkbox checked={filterValue?.saleType === item.value}>
                      {item.name}
                    </Checkbox>
                  </CheckboxWrap>
                ))}
              </>
            )}
          </CollapseFilterItem>

          <ClearAllButton>
            <button className="btn" onClick={() => onClearAllFinter()}>
              Clear All Filters
            </button>
          </ClearAllButton>
        </CollapseFilter>
      </MarketFilterOptionContentWrap>
    </MarketFilterOptionWrapper>
  );
};

export default MarketFilterOption;

const MarketFilterOptionWrapper = styled.div``;

const MarketFilterOptionContentWrap = styled.div`
  max-width: 235px;
  @media ${(props: any) => props.theme.device.smMax} {
    max-width: 100%;
  }
`;

const MarketFilterButton = styled.div`
  .btn-market-card {
    background: #55cccc;
    border-radius: 0px;
    padding: 10px;
    text-transform: uppercase;
  }
  .btn-market-complete {
    background: #1e1f28;
    border-radius: 0px;
    padding: 10px;
    color: #2f9d9d;
    text-transform: uppercase;
    margin-left: 15px;
  }
`;

const MarketFilterSearch = styled.div`
  position: relative;
  margin: 25px 0 15px 0;
  input {
    background: #1e1f28;
    border-radius: 8px;
    width: 100%;
    border: none;
    color: rgba(196, 196, 196, 0.6);
    text-align: center;
    padding: 10px 40px;
  }
  img {
    width: auto;
    height: auto;
    position: absolute;
    left: 5px;
    top: 8px;
  }
`;

const FilterTag = styled.div`
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
  margin-top: 5px;
  padding-bottom: 10px;
  border-bottom: 1px solid #45d9fc;
  span {
    color: #08090c !important;
    background: #2f9d9d !important;
    border: none;
    display: flex;
    align-items: center;
  }
  .ant-tag {
    margin: 5px 5px;
  }
`;

const CollapseFilter = styled.div``;

const CollapseFilterItem = styled.div`
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #45d9fc;

  &:last-child {
    border-bottom: none;
  }
`;

const CollapseTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  color: #e4e2e2;
  cursor: pointer;
  @media ${(props: any) => props.theme.device.smMax} {
    color: #55cccc;
  }
  p {
    flex-grow: 1;
    margin: 0;
  }
`;

const CheckboxWrap = styled.div`
  .ant-checkbox-checked .ant-checkbox-inner {
    border-color: #45d9fc !important;
    background: none !important;
    &:after {
      border-color: #45d9fc !important;
      @media ${(props: any) => props.theme.device.smMax} {
        border-color: #55cccc !important;
      }
    }
  }

  .ant-checkbox-inner {
    border-color: #45d9fc !important;
    background: none !important;

    @media ${(props: any) => props.theme.device.smMax} {
      border-color: #55cccc !important;
      background: none !important;
    }
  }

  span {
    color: #e4e2e2;
    font-weight: 400;
    font-size: 13px;
    line-height: 22px;
    @media ${(props: any) => props.theme.device.smMax} {
      color: #1e1f28;
    }
  }
`;

const ClearAllButton = styled.div`
  text-align: center;
  button {
    background: #1e1f28;
    text-transform: uppercase;
    color: #45d9fc;
    outline: none;
    &:hover {
      color: #45d9fc;
    }
  }
`;
