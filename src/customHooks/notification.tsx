import { notification } from "antd";
import { useEffect } from "react";

type Type = "COMPLETED" | "REJECTED" | "PENDING" | "DOWNLOAD";

interface NotificationProps {
  type: Type;
  trigger: any;
  setShowNotification: (value: boolean) => void;
}

const notificationRender = (type: Type, api: any) => {
  switch (type) {
    case "PENDING":
      return api.info({
        message: "Availability Requested",
        description:
          "The WhatsApp bot has requested the availability from employees!",
        placement: "bottomRight",
      });
    case "COMPLETED":
      return api.success({
        message: "Schedule Approved",
        description:
          "Schedule for the day has been approved and is downloadable!",
        placement: "bottomRight",
      });
    case "DOWNLOAD":
      return api.success({
        message: "Schedule Downloaded",
        description: "Schedule has been downloaded",
        placement: "bottomRight",
      });
    case "REJECTED":
      return api.success({
        message: "Replacement Found!",
        description:
          "One of the cancelled shift has been replaced by another employee!",
        placement: "bottomRight",
      });
    default:
      return null;
  }
};

const Notification = (props: NotificationProps) => {
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    if (
      (props.trigger && props.type === "PENDING") ||
      (props.trigger && props.type === "COMPLETED") ||
      props.type === "REJECTED"
    ) {
      notificationRender(props.type, api);

      props.setShowNotification(false);
    }
  }, [props.trigger, props.type]);

  return <div>{contextHolder}</div>;
};

export default Notification;
