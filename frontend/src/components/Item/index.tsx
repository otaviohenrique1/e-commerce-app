import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

interface ItemProps {
  id?: string;
  name?: string;
  image?: string;
  to: string;
}

export const Item: React.FC<ItemProps> = ({ id, name, image, to}) => {
  return (
    <tr key={id}>
      <td>
        <img
          src={image} alt={name}
          width={50}
        />
      </td>
      <td>{name}</td>
      <td>
        <Link to={to}>
          <Button color="primary">Exibir</Button>
        </Link>
      </td>
    </tr>
  );
}
