import {
  Button,
  Card,
  Col,
  Row,
  Table,
  Tag,
  Typography,
  Steps,
  InputNumber,
  Select,
} from "antd";
import Notification from "../../../../customHooks/notification";
import { useEffect, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { useAppDispatch } from "../../../../redux/hooks/hooks";
import { updateState } from "../../../../redux/slices/demoSlice";
import PriorityModal from "../priorityModal/priorityModal";

const ShiftCard = (props: any) => {
  const {
    state,
    title,
    step,
    stepError,
    buttonText,
    showButton,
    columns,
    shift,
  } = props;
  const [showNotification, setShowNotification] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useAppDispatch();

  // If the state changes, set timer to move to another state
  useEffect(() => {
    if (state === "PENDING") {
      const Timeout = setTimeout(() => {
        dispatch(updateState("ALGORITHM"));
      }, 2000);
      return () => {
        clearTimeout(Timeout);
      };
    }

    if (state === "ALGORITHM") {
      const Timeout = setTimeout(() => {
        dispatch(updateState("APPROVAL"));
      }, 2000);
      return () => {
        clearTimeout(Timeout);
      };
    }

    if (state === "COMPLETED") {
      const Timeout = setTimeout(() => {
        dispatch(updateState("REJECTED"));
      }, 2000);
      return () => {
        clearTimeout(Timeout);
      };
    }

  }, [state]);

  const demoFlow = (dispatch: any, state: string) => {
    switch (state) {
      case "START":
        return setShowModal(true);
      case "APPROVAL":
        return dispatch(updateState("COMPLETED"));
    }
  };

  // Button function
  const buttonHandler = () => {
    setShowNotification(true);
    demoFlow(dispatch, state);
  };

  const selectAfter = (
    <Select defaultValue="Seconds">
      <Select.Option value="Seconds">Seconds</Select.Option>
      <Select.Option value="Minutes">Minutes</Select.Option>
      <Select.Option value="Hours">Hours</Select.Option>
      <Select.Option value="Days">Days</Select.Option>
    </Select>
  );

  return (
    <>
      <Card
        className="tw-h-auto"
        title={
          <Row className="tw-items-center !tw-min-h-[60px]">
            <Typography.Title level={3} className="!tw-m-0">
              {shift}
            </Typography.Title>
          </Row>
        }
      >
        <PriorityModal
          state={state}
          showModal={showModal}
          setShowModal={setShowModal}
        />
        <Notification
          type={state}
          trigger={showNotification}
          setShowNotification={setShowNotification}
        />
        <Col>
          <Steps
            current={step}
            status={stepError}
            size="small"
            items={[
              {
                title: "Request",
              },
              {
                title: "Pending",
              },
              {
                title: "Approved",
              },
            ]}
          />
        </Col>

        <Row className="tw-h-6 tw-mt-4 tw-mb-16">
          <Tag>Testing</Tag>
        </Row>

        {/* Employees */}
        <Typography.Title level={5}>{title}</Typography.Title>

        {state === "ALGORITHM" ? (
          <div className="tw-text-center">
            <div className="tw-flex tw-justify-center tw-align-middle">
              <Player
                src={
                  "https://assets10.lottiefiles.com/packages/lf20_vyL7gxqRAH.json"
                }
                className="player"
                loop
                autoplay
                speed={2}
                style={{
                  width: "50%",
                  height: "20rem",
                }}
              />
            </div>

            <Typography className="tw-font-bold">
              Getting most efficient and fair schedule for employees!
            </Typography>
          </div>
        ) : (
          <Table columns={columns} pagination={false} />
        )}

        <div className="tw-flex tw-gap-4 tw-justify-end tw-mt-4">
          {state === "START" && (
            <InputNumber addonAfter={selectAfter} defaultValue={15} />
          )}

          {showButton && (
            <Button type="default" onClick={buttonHandler}>
              {buttonText}
            </Button>
          )}
        </div>
      </Card>
    </>
  );
};

export default ShiftCard;
