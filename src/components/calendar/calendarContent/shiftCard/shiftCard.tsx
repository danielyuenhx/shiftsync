import {
  Badge,
  Button,
  Card,
  Col,
  Row,
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

function hasRejectedState(employees: any) {
  return employees?.some(
    (employee: any) => employee?.state?.props?.text === "Rejected"
  );
}

const ShiftCard = (props: any) => {
  const { state, shift, columns, roles, employee } = props.contentData;
  const [data, setData] = useState(employee);
  const dispatch = useAppDispatch();
  const stepDetail = useAppSelector(step);

  useEffect(() => {
    setData(employee);
  }, [employee]);

  const rejectedState = hasRejectedState(employee);

  const buttonTextRender = () => {
    if (rejectedState) {
      return "Find replacement";
    } else if (stepDetail === "FIND REPLACEMENT") {
      return "Approve schedule";
    }
    return "Request for availability";
  };

  const [api, contextHolder] = notification.useNotification();

  const openSuccessNotification = () => {
    api.info({
      message: "Requested Shift!",
      description: "Shift has been requested from employee through WhatsApp!",
      placement: "bottomRight",
    });
  };

  useEffect(() => {
    if (state === "Requested") {
      const timer1 = setTimeout(() => {
        dispatch(updateState("Pending"));
        dispatch(updateShiftId(2));
        dispatch(updateStep("REQUEST EMPLOYEE"));
      }, 5000); // Set a 5-second timer (5000 milliseconds)

      return () => {
        clearTimeout(timer1);
      };
    }
  }, [state]);

  // Button functions
  const proceedHandler = () => {
    if (stepDetail === "FIND REPLACEMENT") {
      console.log("done")
    } else {
      dispatch(updateState("Requested"));
      dispatch(updateShiftId(2));
    }

    openSuccessNotification();
  };

  const findReplacement = () => {
    dispatch(updateShiftId(5));
    dispatch(updateStep("FIND REPLACEMENT"));
  };

  return (
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
      <div>
        {contextHolder}
        <Col className="tw-h-[150px]">
          <Timeline
            className="tw-absolute tw-right-10 tw-w-[500px] tw-mt-4"
            // pending={"Pending replies"}
            mode="right"
            items={[{ children: "test" }, { children: "wet" }]}
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
        <Table dataSource={data} columns={columns} pagination={false} />
      </div>
      {(state === "Request" || stepDetail === "FIND REPLACEMENT") && (
        <Button
          type={"text"}
          onClick={proceedHandler}
          className="tw-bg-primary tw-text-white tw-float-right tw-mt-4"
        >
          {buttonTextRender()}
        </Button>
      )}

      {rejectedState && stepDetail !== "FIND REPLACEMENT" && (
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
  );
};

export default ShiftCard;
