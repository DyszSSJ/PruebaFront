import { Avatar, Card } from "antd";
import user from "../../../assets/user.png";
import styles from "./Cards.module.css";

const { Meta } = Card;

function Cards() {
  return (
    <Card
      style={{
        width: 300,
        margin: 0,
        backgroundColor: "#505B87",
        borderRadius: "10px",
        border: "none",
        color: "white",
        opacity: 0.8,
      }}
    >
      <Meta
        avatar={<Avatar src={user} />}
        title="Alexandra Graff"
        description="“Lorem ipsum dolor sit amet, conse adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor.”"
        className={styles.card}
      />
    </Card>
  );
}

export default Cards;
