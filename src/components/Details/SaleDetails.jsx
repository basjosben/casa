import React, { useState } from "react";
import { Typography, Button, Modal } from "antd";

const SaleDetails = ({ house, ownerDetails }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div className="flex w-1/3 flex-col justify-between rounded-lg border-2 p-8">
      <div>
        <Typography.Text className="flex flex-col">
          {house.forRent ? "Rent Price: " : "Sale Price:"}
        </Typography.Text>
        <Typography.Title className="primary-text mt-2" level={3}>
          {`$${house.price}${house.forRent ? " /month" : ""}`}
        </Typography.Title>
      </div>
      <div className="flex flex-col">
        <Typography.Text>Contact Details:</Typography.Text>
        <Typography.Text className="primary-text mt-2">
          Email: {ownerDetails?.email}
        </Typography.Text>
      </div>
      <div>
        <Typography.Text className="mt-4">Need Assistance ?</Typography.Text>
        <Button
          className="primary-button-bg ml-4 mt-4 self-center"
          type="primary"
          onClick={() => setIsModalVisible(prevState => !prevState)}
        >
          Contact Agent
        </Button>
        <Modal
          open={isModalVisible}
          onCancel={() => setIsModalVisible(false)}
          onOk={() => setIsModalVisible(false)}
        >
          <div className="flex flex-col justify-between">
            <Typography.Text className="mt-4">
              Email: basben.benny@gmail.com
            </Typography.Text>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default SaleDetails;
