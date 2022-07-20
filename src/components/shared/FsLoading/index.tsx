/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "@emotion/styled";

const FsLoading = () => {
  return (
    <FsLoadingWrapper>
      <FsLoadingInner>
        <img src="/images/common/ico-loading.svg" alt="loading" loading="lazy"/>
      </FsLoadingInner>
    </FsLoadingWrapper>
  );
};

export default FsLoading;

const FsLoadingWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
`;

const FsLoadingInner = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  padding: 15px;
  background: #fff;
  margin-top: -42px;
  margin-left: -65px;
  border-radius: 4px;
`;
