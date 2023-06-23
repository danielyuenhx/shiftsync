import { Modal, Select, Typography } from "antd";
import { useAppDispatch } from "../../../../redux/hooks/hooks";
import { updateState } from "../../../../redux/slices/demoSlice";
import { sendRequest } from "../../../../api";
import { updateShowLogs } from "../../../../redux/slices/shiftSlice";

const { Option } = Select;

const PriorityModal = (props: any) => {
  const { showModal, setShowModal } = props;
  const dispatch = useAppDispatch();

  const onCancelHandler = async () => {
    setShowModal(false);
    dispatch(updateState("PENDING"));
    dispatch(updateShowLogs(true));
    await sendRequest();
  };

  const onOkHandler = async () => {
    setShowModal(false);
    dispatch(updateState("PENDING"));
    dispatch(updateShowLogs(true));
    await sendRequest();
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
          <Option value="Mike">Mike</Option>
          <Option value="Stacy">Stacy</Option>
          <Option value="Nicholas">Nicholas</Option>
          <Option value="Daniel">Daniel</Option>
          <Option value="Kai Wen">Kai Wen</Option>
          <Option value="Zheng Jie">Zheng Jie</Option>
          <Option value="Dave Lee">Dave Lee</Option>
          <Option value="Jessica">Jessica</Option>
          <Option value="Mei Li">Mei Li</Option>
        </Select>
      </div>
    </Modal>
  );
};

export default PriorityModal;
