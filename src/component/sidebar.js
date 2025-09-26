import {
    Drawer,
    ListItem,
    ListItemButton,
    Box,
    IconButton,
    List,
    Typography,
    ListItemText,
    ListItemIcon,
    Stack,
} from "@mui/material";
import { useRouter } from "next/router";
import { Watches } from "@/store/watches";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { Fragment } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { grey } from "@mui/material/colors";
import { cartActions } from "@/store/cartSlice";

const Sidebar = ({ open, close, anchor }) => {
    const { cartValue, totalPrice } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const router = useRouter();
    return (
        <Drawer open={open} onClose={close} anchor={anchor} PaperProps={{ sx: { width: {xs: "250px", sm: "300px"} } }}>
            <Box>


                {anchor === "left" && (
                    <List>
                        <ListItem sx={{bgcolor: "primary.main"}}>
                            <ListItemText
                                disableTypography
                                sx={{
                                    fontSize: {xs: "1.2rem", sm: "1.5rem"},
                                }}
                            >
                                <Typography variant="h6" color="#fff" fontWeight={700}>Watch Store</Typography>
                            </ListItemText>
                            <ListItemIcon sx={{minWidth: "fit-content", cursor: "pointer", ml: 2}} onClick={close}>
                                <CloseIcon sx={{fontSize: {xs: "1.2rem", sm: "1.5rem"}, color: "#fff"}}/>
                            </ListItemIcon>
                        </ListItem>
                        {["HOME", "ABOUT", "DELIVERY", "CONTACTS"].map((text) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <Link
                                        sx={{
                                            width: "100%",
                                        }}
                                        href={text === "HOME" ? "/" : `/${text.toLowerCase()}`}
                                    >
                                        <Typography
                                            variant="subtitle2"
                                            color={router.pathname == "/" ? "primary.main" : "grey.main"}
                                            fontSize={{xs: 12, sm: 14}} // Made font size responsive
                                        >
                                            {text}
                                        </Typography>
                                    </Link>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                )}

                {anchor === "right" && (
                    <List>
                        <ListItem sx={{bgcolor: "primary.main"}}>
                            <ListItemText
                                disableTypography
                                sx={{
                                    fontSize: {xs: "1.2rem", sm: "1.5rem"},
                                }}
                            >
                                <Typography variant="h6" color="#fff" fontWeight={700}>Watch Store</Typography>
                            </ListItemText>
                            <ListItemIcon sx={{minWidth: "fit-content", cursor: "pointer", ml: 2}} onClick={close}>
                                <CloseIcon sx={{fontSize: {xs: "1.2rem", sm: "1.5rem"}, color: "#fff"}}/>
                            </ListItemIcon>
                        </ListItem>

                        {cartValue.length > 0 && (
                            <Box>
                                <ListItem sx={{p: 0}}> // Adjusted padding
                                    <List
                                        sx={{
                                            borderBottom: 1,
                                            borderColor: `${grey[300]} !important`,
                                            width: "100%", // Ensure list takes full width
                                            p: 0, // Removed extra padding
                                        }}>
                                        {cartValue?.map((db, idx) => (
                                            <ListItem key={idx}>
                                                <Stack direction="row" width={"100%"} alignItems="center" spacing={2}> // Added spacing
                                                    <Box sx={{ width: {xs: "60px", sm: "80px"}, flexShrink: 0 }}> // Made width responsive and added flexShrink
                                                        <img
                                                            src={Watches[db]["src"][0]}
                                                            style={{
                                                                maxWidth: "100%",
                                                            }}
                                                        />
                                                    </Box>
                                                    <Stack flexGrow={1}> // Allow stack to grow
                                                        <Typography
                                                            color="primary.main"
                                                            variant="subtitle1"
                                                            fontSize={{xs: "0.9rem", sm: "1rem"}} // Made font size responsive
                                                        >
                                                            {db}
                                                        </Typography>
                                                        <Typography color="grey.main" variant="subtitle1"
                                                            fontSize={{xs: "0.8rem", sm: "0.9rem"}} // Made font size responsive
                                                        >
                                                            1 x ₹{Watches[db]["price"]}
                                                        </Typography>
                                                    </Stack>
                                                    <ListItemIcon
                                                        onClick={() => dispatch(cartActions.removeItem({ name: db, price: + Watches[db]["price"] }))}
                                                        sx={{minWidth: "fit-content"}} // Adjusted minWidth
                                                    >
                                                        <CloseIcon sx={{fontSize: {xs: "1rem", sm: "1.2rem"}}} /> // Made font size responsive
                                                    </ListItemIcon>
                                                </Stack>
                                            </ListItem>
                                        ))}
                                    </List>
                                </ListItem>
                                <ListItem>
                                    <ListItemText disableTypography>
                                        <Typography
                                            variant="subtitle1"
                                            color={grey[600]}
                                            fontWeight={800}
                                            fontSize={{xs: "1rem", sm: "1.1rem"}} // Made font size responsive
                                        >
                                            Subtotal:
                                            <Typography
                                                component="span" // Changed to span to keep on same line
                                                color={"grey.main"}
                                                ml={1} // Added margin left
                                            >
                                                ₹{totalPrice}
                                            </Typography>
                                        </Typography>
                                    </ListItemText>
                                </ListItem>

                                <ListItem onClick={close}>
                                    <Link href="/cart" style={{width: "100%", textDecoration: "none"}}> // Added full width
                                        <ListItemButton
                                            sx={{
                                                borderRadius: 1,
                                                columnGap: "0.5rem",
                                                justifyContent: "center",
                                                color: "#fff",
                                                bgcolor: "#27d18b",
                                                width: "100%", // Made width responsive
                                                mx: "auto",
                                                "&:hover": {
                                                    bgcolor: "#78e6b9",
                                                },
                                            }}
                                        >


                                            <ListItemIcon
                                                sx={{color: "#fff"}} // Ensure icon color is white
                                            >
                                                <ShoppingCartOutlinedIcon />
                                            </ListItemIcon>
                                            Checkout
                                        </ListItemButton>
                                    </Link>

                                </ListItem>
                            </Box>
                        )}

                        {cartValue.length === 0 && (
                            <ListItem sx={{justifyContent: "center"}}> // Adjusted padding and centered
                                <ListItemText
                                    disableTypography
                                    sx={{ color: "grey.main", fontSize: {xs: "1rem", sm: "1.2rem"}, textAlign: "center" }} // Made font size responsive and centered text
                                >
                                    No products in the cart.
                                </ListItemText>
                            </ListItem>
                        )}
                    </List>)}
            </Box>
        </Drawer>
    )
}

export default Sidebar