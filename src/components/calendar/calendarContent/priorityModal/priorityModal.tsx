import { Modal, Select, Typography } from "antd";
import { useAppDispatch } from "../../../../redux/hooks/hooks";
import { updateState } from "../../../../redux/slices/demoSlice";

const { Option } = Select;

const PriorityModal = (props: any) => {
  const { showModal, setShowModal } = props;
  const dispatch = useAppDispatch();

  const onCancelHandler = () => {
    setShowModal(false);
    dispatch(updateState("PENDING"));
  };

  const onOkHandler = () => {
    setShowModal(false);
    dispatch(updateState("PENDING"));
  };

  return (
    <Modal
      title="High Priority Employees"
      open={showModal}
      onCancel={onCancelHandler}
      onOk={onOkHandler}
      cancelText="Skip"
      okText="Save"
      okButtonProps={{
        type: "default",
        style: { backgroundColor: "green", color: "white" },
      }}
    >
      <div className="tw-flex tw-flex-col tw-gap-4">
        <Typography className="tw-text-justify">
          Prior to scheduling, you have the option to manually select specific
          employees for the desired shift, which will then be considered by the
          scheduling algorithm.
        </Typography>
        <Select
          mode="multiple"
          placeholder="Select employees"
          style={{ width: "100%" }}
        >
          <Option value="high">High</Option>
          <Option value="medium">Medium</Option>
          <Option value="low">Low</Option>
        </Select>
      </div>
    </Modal>
  );
};

export default PriorityModal;
