import { Badge } from '@material-ui/core'
import { ShoppingCartOutlined } from '@material-ui/icons';
export const CartWidget = (props) => {
  return(
      <Badge badgeContent={props.count} color="secondary">
          <ShoppingCartOutlined />
      </Badge>
  )
};
