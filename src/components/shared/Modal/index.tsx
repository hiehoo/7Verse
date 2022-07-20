/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import styled from "@emotion/styled";
import Modal from "antd/lib/modal/Modal";
import CheckCircleOutlined from "@ant-design/icons/lib/icons/CheckCircleOutlined";

const ModalComponent = ({ title = "", modalShow, onCloseModalHandler }) => {
  const onOkHandler = () => {
    onCloseModalHandler();
  };

  return (
    <ModalWrapper>
      <Modal
        title={title}
        centered
        visible={modalShow}
        onOk={() => onOkHandler()}
        onCancel={() => onOkHandler()}
      >
        <ModalContentWrap>
          <CheckCircleOutlined 
            style={{ 
                fontSize: '32px',
                color: '#3fb406cf'
            }}
          />
          <p>Comming soon!</p>
        </ModalContentWrap>
      </Modal>
    </ModalWrapper>
  );
};

export default ModalComponent;

const ModalWrapper = styled.div`
    
`;

const ModalContentWrap = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    p {
        font-size: 20px;
    }
`;