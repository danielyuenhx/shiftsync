import {
  Button,
  Card,
  Col,
  Modal,
  Row,
  Select,
  Table,
  Tag,
  Timeline,
  Typography,
  notification,
} from "antd";
import useTagColor from "../../../../redux/hooks/tagColor";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks/hooks";
import {
  step,
  updateShiftId,
  updateState,
  updateStep,
} from "../../../../redux/slices/shiftSlice";
import { useState, useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { SaveOutlined } from "@ant-design/icons";

function hasRejectedState(employees: any) {
  return employees?.some(
    (employee: any) => employee?.state?.props?.text === "Rejected"
  );
}

const ShiftCard = (props: any) => {
  const { state, shift, columns, roles, employee, timeline } =
    props?.contentData;
  const [data, setData] = useState(employee);
  const [clicked, setClicked] = useState(false);
  const [showLottie, setShowLottie] = useState(false);
  const [showLoadingLottie, setShowLoadingLottie] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const dispatch = useAppDispatch();
  const stepDetail = useAppSelector(step);
  const rejectedState = hasRejectedState(employee);

  useEffect(() => {
    setData(employee);
  }, [employee]);

  useEffect(() => {
    if (state === "Requested" && isModalVisible === false) {
      const timer1 = setTimeout(() => {
        dispatch(updateState("Requested"));
        dispatch(updateShiftId(5));
        dispatch(updateStep("REQUEST EMPLOYEE"));
      }, 8000); // Set a 5-second timer (5000 milliseconds)

      const timer2 = setTimeout(() => {
        dispatch(updateState("Pending"));
        dispatch(updateShiftId(2));
      }, 12000);

      const timer3 = setTimeout(() => {
        openSuccessNotification(
          "Replacement needed for Full-Day",
          "One of the employee cancelled the shift"
        );
      }, 16000);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    }
  }, [state, isModalVisible]);

  const downloadCSV = () => {
    const csvContent = "data:text/csv;charset=utf-8,";

    // Create an empty CSV file
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "data.csv");
    document.body.appendChild(link);
    link.click();
  };

  const buttonTextRender = () => {
    if (rejectedState) {
      return "Find replacement";
    } else if (stepDetail === "REPLACEMENT FOUND") {
      return "Approve schedule";
    } else if (stepDetail === "APPROVED") {
      return "Download schedule";
    }

    return "Request for availability";
  };

  const openSuccessNotification = (title: any, message: any) => {
    if (title === "Approved") {
      api.success({
        message: title,
        description: message,
        placement: "bottomRight",
      });
    } else if (title === "Replacement needed for Full-Day") {
      api.warning({
        message: title,
        description: message,
        placement: "bottomRight",
      });
    } else {
      api.info({
        message: title,
        description: message,
        placement: "bottomRight",
      });
    }
  };

  // Button functions
  const proceedHandler = () => {
    if (stepDetail === "REPLACEMENT FOUND" && isModalVisible === false) {
      console.log("done");
      dispatch(updateState("Approved"));
      dispatch(updateShiftId(4));
      dispatch(updateStep("APPROVED"));

      openSuccessNotification(
        "Approved",
        "Schedule has been approved and can now be downloaded."
      );
      return;
    } else if (stepDetail === "APPROVED" && isModalVisible === false) {
      downloadCSV();
      return;
    }

    if (
      isModalVisible === false &&
      stepDetail === "CLICK REQUEST" &&
      clicked === false
    ) {
      showModal();
      return;
    }
  };

  const findReplacement = () => {
    setShowLoadingLottie(true);

    setTimeout(() => {
      openSuccessNotification(
        "Good News!",
        "One replacement has been found for shift!"
      );
      dispatch(updateShiftId(5));
      dispatch(updateStep("REPLACEMENT FOUND"));
      setShowLoadingLottie(false);
    }, 5000); // Set a 5-second timer (5000 milliseconds)
  };

  // For modal
  const showModal = () => {
    setIsModalVisible(true);
    setClicked(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    dispatch(updateState("Requested"));
    dispatch(updateShiftId(2));

    openSuccessNotification(
      "Arranging Shifts",
      "Availability will be requested from employee through WhatsApp after arragement is completed"
    );

    setShowLottie(true);

    setTimeout(() => {
      setShowLottie(false);
    }, 5000);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleSave = () => {
    api.success({
      message: "Schedule Save!",
      description: "You can now re-use this schedule the for future dates!",
      placement: "bottomRight",
    });
  };

  return (
    <>
      <Card
        className="tw-h-auto"
        title={
          <Row className="tw-items-center !tw-min-h-[60px]">
            <Typography.Title level={3} className="!tw-m-0">
              {shift}
            </Typography.Title>
            {state === "Approved" && (
              <Button
                type="default"
                icon={<SaveOutlined />}
                className="tw-ml-auto"
                onClick={handleSave}
              >
                Save Schedule
              </Button>
            )}
          </Row>
        }
      >
        <div>
          {contextHolder}
          <Col className="tw-h-[150px]">
            <Timeline
              className="tw-absolute tw-right-10 tw-w-[500px] tw-mt-4"
              mode="right"
              items={timeline}
            />
            <Row className="tw-h-6 tw-mb-4">
              {roles.map((role: any) => {
                return <Tag color={useTagColor(role)}>{role}</Tag>;
              })}
            </Row>
          </Col>

          {/* Employees */}
          <Typography.Title level={5}>
            {state === "Request"
              ? "Possible Employees for the day"
              : "Employees for the shift"}
          </Typography.Title>
          {showLottie || showLoadingLottie ? (
            <div className="tw-text-center">
              <div className="tw-flex tw-justify-center tw-align-middle">
                <Player
                  src={
                    showLoadingLottie
                      ? "https://assets2.lottiefiles.com/packages/lf20_S9g8ScJ7mG.json"
                      : "https://assets10.lottiefiles.com/packages/lf20_vyL7gxqRAH.json"
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
              {showLoadingLottie ? (
                <Typography className="tw-font-bold">
                  Finding replacement for the role!
                </Typography>
              ) : (
                <Typography className="tw-font-bold">
                  Getting most efficient and fair schedule for employees!
                </Typography>
              )}
            </div>
          ) : (
            <Table dataSource={data} columns={columns} pagination={false} />
          )}
        </div>
        {(state === "Request" ||
          stepDetail === "FIND REPLACEMENT" ||
          stepDetail === "REPLACEMENT FOUND" ||
          stepDetail === "APPROVED") && (
          <Button
            type={"text"}
            onClick={proceedHandler}
            className="tw-bg-primary tw-text-white tw-float-right tw-mt-4"
          >
            {buttonTextRender()}
          </Button>
        )}

        {rejectedState &&
          stepDetail !== "FIND REPLACEMENT" &&
          showLoadingLottie === false && (
            <Button
              danger
              type={"default"}
              onClick={findReplacement}
              className=" tw-float-right tw-mt-4"
            >
              Find replacement
            </Button>
          )}
      </Card>
      <Modal
        title="High Priority Employees"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Save"
        cancelText="Skip"
        okButtonProps={{
          style: { backgroundColor: "green" },
        }}
      >
        <Typography className="tw-text-justify">
          Prior to scheduling, you have the option to manually select specific
          employees for the desired shift, which will then be considered by the
          scheduling algorithm.
        </Typography>

        <Select
          mode="multiple"
          placeholder="Select options"
          style={{ width: "100%", marginTop: 16 }}
        >
          {employee.map((employee: any) => {
            return (
              <Select.Option value={employee.name}>
                {employee.name}
              </Select.Option>
            );
          })}
        </Select>
      </Modal>
    </>
  );
};

export default ShiftCard;
