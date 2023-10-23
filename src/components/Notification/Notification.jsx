import { Message } from "./Notification.styled";

export default Notification;



export const Notification = ({ message }) => {
  return <Message>{message}</Message>;
};