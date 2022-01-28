import {Badge} from '@material-ui/core'
import {ShoppingCartIcon} from '@material-ui/icons'
export const CartWidget = (props) => {
  return(
      <Badge BadgeContent={props.count} color="secondary">
          <ShoppingCartIcon />
      </Badge>
  )
};
