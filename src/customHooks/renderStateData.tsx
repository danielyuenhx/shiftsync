export const renderStateData = (state: any) => {
  switch (state) {
    case "START":
      return {
        title: "Possible Employees",
        step: 0,
        stepError: "process",
        buttonText: "Request Availability",
        showButton: true,
      };
    case "REQUEST":
      return {
        title: "Possible Employees",
        step: 0,
        stepError: "process",
        buttonText: "Request Availability",
        showButton: true,
      };
    case "PENDING":
      return {
        title: "Possible Employees",
        step: 1,
        stepError: "process",
        buttonText: "Request Availability",
      };
    case "SOMEPENDING":
      return {
        title: "Possible Employees",
        step: 1,
        stepError: "process",
        buttonText: "Request Availability",
      };
    case "FINAL":
      return {
        title: "Possible Employees",
        step: 1,
        stepError: "process",
        buttonText: "Request Availability",
      };
    case "ALGORITHM":
      return {
        title: "",
        step: 1,
        stepError: "finish",
        buttonText: "Request Availability",
      };
    case "APPROVAL":
      return {
        title: "Employees on Shift",
        step: 2,
        stepError: "process",
        buttonText: "Approve Day",
        showButton: true,
      };
    case "COMPLETED":
      return {
        title: "Employees on Shift",
        step: 3,
        stepError: "finish",
        buttonText: "Download Schedule",
        showButton: true,
      };
      case "DOWNLOAD":
        return {
          title: "Employees on Shift",
          step: 3,
          stepError: "finish",
          buttonText: "Download Schedule",
          showButton: true,
        };
    case "REJECTED":
      return {
        title: "Employees on Shift",
        step: 2,
        stepError: "error",
      };
    default:
      return {
        title: null,
        step: null,
        stepError: null,
      };
  }
};
