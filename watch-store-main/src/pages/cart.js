import { grey } from "@mui/material/colors";
import {
    Paper,
    Box,
    Stack,
    Typography,
    Divider,
    FormControl,
    Card,
    CardMedia,
    CardContent,
    IconButton,
    CardHeader,
    Select,
    MenuItem,
    TextField,
    Button,
    Grid
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, Fragment } from "react";
import { Watches } from "@/store/watches";
import PaypalIcon from "../component/Cart/PaypalIcon";
import MasterCardIcon from "../component/Cart/MasterCradIcon";
import VisAIcon from "../component/Cart/VisaIcon";
import { cartActions } from "@/store/cartSlice";
import AmericanExpressIcon from "../component/Cart/AmericanExpressIcon";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Cart = () => {
    const dispatch = useDispatch();
    const { cartValue, totalPrice } = useSelector((state) => state.cart);
    const [card, setCard] = useState("paypal");
    return (
        <Box p={3}>
            <Paper >
                {!cartValue.length && (
                    <Box width={"100%"}>
                        <Typography variant="h6" p={2} color={"secondary.main"} fontWeight={700}>
                            Shopping Cart
                        </Typography>
                        <Stack direction={"row"} width={"80%"}>
                            <Box p={3} bgcolor={"#fdbc32"}>
                                <PriorityHighIcon
                                    sx={{
                                        borderRadius: "50%",
                                        color: "secondary.main",
                                        bgcolor: "#fff",
                                        fontSize: "1.5rem",
                                        p: 0.7,
                                    }}
                                />
                            </Box>
                            <Box
                                flex={1}
                                borderBottom={1}
                                borderRight={1}
                                borderTop={1}
                                borderColor={`${grey[400]} !important`}
                                p={3}
                            >
                                <Typography>Your cart is currently empty.</Typography>
                            </Box>
                        </Stack>
                    </Box>
                )}

                {!!cartValue.length && (
                    <Grid container justifyContent={"space-between"} >
                        <Grid item xs={12} sm={12} md={8}>
                            <Stack flex={1}
                                rowGap={"1rem"}>
                                <Typography
                                    variant="h6"
                                    color={"secondary.main"}
                                    fontWeight={700}
                                    p={2}
                                >
                                    Shopping Cart
                                </Typography>
                                <Divider />
                                <Stack
                                    direction={"row"}
                                    justifyContent={"space-between"}
                                    alignItems="center"
                                    gap={"1rem"}
                                    my={1}
                                >
                                    <Typography
                                        variant="body1"
                                        color={"grey.main"}
                                        fontSize={{
                                            sm: "1rem",
                                            xs: "0.8rem",
                                        }}
                                    >
                                        You have {cartValue.length} items in your cart
                                    </Typography>
                                    <Stack
                                        direction={"row"}
                                        color={"grey.main"}
                                        alignItems="center"
                                        fontSize={{
                                            sm: "1.1rem",
                                            xs: "0.8rem",
                                        }}
                                    >
                                        Sort By:
                                        <Box sx={{ minWidth: 120 }}>
                                            <FormControl fullWidth>
                                                <Select
                                                    variant="standard"
                                                // value={sortType}
                                                // onChange={handleChange}
                                                >
                                                    <MenuItem value={1}>Price</MenuItem>
                                                    <MenuItem value={2}>Name</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </Stack>
                                </Stack>
                            </Stack>
                            <Stack spacing={2}>
                                {cartValue.map((item, index) => (
                                    <Card
                                        key={index}
                                        my={1}
                                        sx={{
                                            display: "flex",
                                            p: {
                                                sm: 3,
                                                xs: 0,
                                            },
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            transition: "200ms",
                                            "&:hover": {
                                                transform: "translateY(-2px)",
                                                boxShadow: "0 4px 25px 0 rgb(34 41 47 / 25%)",
                                            },
                                        }}
                                        elevation={2}
                                    >
                                        <CardMedia
                                            component="img"
                                            sx={{
                                                width: {
                                                    sm: 100,
                                                    xs: 85,
                                                },
                                            }}
                                            image={Watches[item]["src"][0]}
                                            alt={item}
                                        />
                                        <CardContent
                                            sx={{
                                                display: "flex",
                                                justifyContent: "center",
                                                flexDirection: "column",
                                                rowGap: {
                                                    sm: "1rem",
                                                    xs: "0.5rem",
                                                },
                                                width: {
                                                    sm: "50%",
                                                    xs: "auto",
                                                },
                                                padding: {
                                                    sm: 2,
                                                    xs: 0,
                                                },
                                            }}
                                        >
                                            <Typography
                                                variant="subtitle1"
                                                color={"primary.main"}
                                                fontWeight={700}
                                                fontSize={{
                                                    sm: "1rem",
                                                    xs: "0.8rem",
                                                }}
                                            >
                                                {item}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color={grey[500]}
                                                fontSize={{
                                                    sm: "1rem",
                                                    xs: "0.6rem",
                                                }}
                                            >
                                                {Watches[item]["brand"].toUpperCase()}
                                            </Typography>
                                        </CardContent>
                                        <CardContent
                                            color={"grey.main"}
                                            sx={{
                                                fontSize: {
                                                    sm: "1rem",
                                                    xs: "0.8rem",
                                                },
                                                p: {
                                                    sm: 2,
                                                    xs: 0.5,
                                                },
                                            }}
                                        >
                                            1
                                        </CardContent>
                                        <CardContent
                                            color={"grey.main"}
                                            sx={{
                                                fontSize: {
                                                    sm: "1rem",
                                                    xs: "0.8rem",
                                                },
                                                p: {
                                                    sm: 2,
                                                    xs: 0.5,
                                                },
                                            }}
                                        >
                                            ₹{Watches[item]["price"]}
                                        </CardContent>
                                        <IconButton
                                            onClick={() =>
                                                dispatch(
                                                    cartActions.removeItem({
                                                        name: item,
                                                        price: Watches[item]["price"],
                                                    })
                                                )
                                            }
                                        >
                                            <DeleteIcon
                                                sx={{
                                                    color: "grey.main",
                                                    opacity: 0.5,
                                                }}
                                            />
                                        </IconButton>
                                    </Card>
                                ))}
                            </Stack>
                        </Grid>
                        <Grid item
                            xs={12} sm={12} md={4}
                            // width={{
                            //     md: "35%",
                            //     xs: "100%",
                            // }}
                            mt={{
                                md: "0",
                                xs: "1rem",
                            }}
                        >
                            <Card
                                sx={{
                                    bgcolor: "#27d18b",
                                    position: "sticky",
                                    top: "10px",
                                }}
                            >
                                <CardHeader
                                    subheader={"Card Details"}
                                    subheaderTypographyProps={{
                                        color: "#fff",
                                        fontWeight: 700,
                                        textAlign: "center",
                                        fontSize: "1.5rem",
                                    }}
                                />
                                <CardContent sx={{ p: 3 }}>
                                    <Typography variant="body2" color={"#fff"} pl={0.9}>
                                        Card Type
                                    </Typography>
                                    <Stack
                                        direction={"row"}
                                        sx={{
                                            "& svg": {
                                                bgcolor: "#fff",
                                            },
                                        }}
                                    >
                                        <IconButton
                                            sx={{
                                                height: "47.98px",
                                                backgroundColor: card === "paypal" && "#00000029",
                                                "&:hover": {
                                                    backgroundColor: card === "paypal" && "#00000029",
                                                },
                                            }}
                                            onClick={() => setCard("paypal")}
                                        >
                                            <PaypalIcon />
                                        </IconButton>
                                        <IconButton
                                            sx={{
                                                height: "47.98px",
                                                backgroundColor: card === "masterCard" && "#00000029",
                                                "&:hover": {
                                                    backgroundColor: card === "masterCard" && "#00000029",
                                                },
                                            }}
                                            onClick={() => setCard("masterCard")}
                                        >
                                            <MasterCardIcon />
                                        </IconButton>
                                        <IconButton
                                            sx={{
                                                height: "47.98px",
                                                backgroundColor:
                                                    card === "americanExpress" && "#00000029",
                                                "&:hover": {
                                                    backgroundColor:
                                                        card === "americanExpress" && "#00000029",
                                                },
                                            }}
                                            onClick={() => setCard("americanExpress")}
                                        >
                                            <AmericanExpressIcon />
                                        </IconButton>
                                        <IconButton
                                            sx={{
                                                height: "47.98px",
                                                backgroundColor: card === "visa" && "#00000029",
                                                "&:hover": {
                                                    backgroundColor: card === "visa" && "#00000029",
                                                },
                                            }}
                                            onClick={() => setCard("visa")}
                                        >
                                            <VisAIcon />
                                        </IconButton>
                                    </Stack>
                                    <Stack
                                        direction={"row"}
                                        flexWrap={"wrap"}
                                        rowGap={"2rem"}
                                        columnGap={"2rem"}
                                        mt={3}
                                        sx={{
                                            "& .MuiInputLabel-root": {
                                                color: "white.main",
                                            },
                                            "& fieldset": {
                                                borderColor: "#fbfbfb !important",
                                            },
                                            "& .MuiInputBase-input.MuiOutlinedInput-input": {
                                                color: "#fbfbfb !important",
                                            },
                                        }}
                                    >
                                        <TextField
                                            color="white"
                                            sx={{
                                                width: "100%",
                                            }}
                                            label="cardHolder's name"
                                            variant="outlined"
                                            placeholder="cardHolder's name"
                                        />

                                        <TextField
                                            color="white"
                                            sx={{
                                                width: "100%",
                                            }}
                                            label="Card Number"
                                            variant="outlined"
                                            placeholder="1234 5678 9012 3456"
                                        />

                                        <TextField
                                            color="white"
                                            sx={{
                                                width: "calc(50% - 1rem)",
                                            }}
                                            label="Expiration"
                                            variant="outlined"
                                            placeholder="MM/YYYY"
                                        />
                                        <TextField
                                            color="white"
                                            sx={{
                                                width: "calc(50% - 1rem)",
                                            }}
                                            label="CVC"
                                            variant="outlined"
                                            placeholder="&#9679;&#9679;&#9679;"
                                        />
                                        <Divider
                                            sx={{
                                                width: "100%",
                                                borderColor: "#ffffff70 !important",
                                            }}
                                        />
                                    </Stack>
                                    <Stack rowGap={"1rem"} mt={3}>
                                        <Stack justifyContent={"space-between"} direction="row">
                                            <Typography
                                                variant="subtitle1"
                                                color="white.main"
                                                fontWeight={600}
                                            >
                                                Subtotal
                                            </Typography>
                                            <Typography
                                                variant="subtitle1"
                                                color="white.main"
                                                fontWeight={600}
                                            >
                                                ₹{totalPrice}
                                            </Typography>
                                        </Stack>
                                        <Stack justifyContent={"space-between"} direction="row">
                                            <Typography
                                                variant="subtitle1"
                                                color="white.main"
                                                fontWeight={600}
                                            >
                                                Shipping
                                            </Typography>
                                            <Typography
                                                variant="subtitle1"
                                                color="white.main"
                                                fontWeight={600}
                                            >
                                                ₹{20}
                                            </Typography>
                                        </Stack>
                                        <Stack justifyContent={"space-between"} direction="row">
                                            <Typography
                                                variant="subtitle1"
                                                color="white.main"
                                                fontWeight={600}
                                            >
                                                Total(Incl. taxes)
                                            </Typography>
                                            <Typography
                                                variant="subtitle1"
                                                color="white.main"
                                                fontWeight={600}
                                            >
                                                ₹{20 + totalPrice}
                                            </Typography>
                                        </Stack>
                                    </Stack>
                                    <Button
                                        disableRipple
                                        variant={"outlined"}
                                        sx={{
                                            py: 1,
                                            mt: 3,
                                            columnGap: "2rem",
                                            width: "100%",
                                            border: "none",
                                            bgcolor: "#179f67a1 !important",
                                            "&:hover": {
                                                border: "none !important",
                                                backgroundColor: "#179f675e !important",
                                            },
                                        }}
                                        disabled={!cartValue.length}
                                    >
                                        <Typography
                                            color="white.main"
                                            fontWeight={600}
                                            variant="body2"
                                        >
                                            ₹{totalPrice}
                                        </Typography>
                                        <Stack direction="row" alignItems="center" spacing={1}>
                                            <Typography
                                                color="white.main"
                                                textAlign={"center"}
                                                fontWeight={600}
                                                variant="body2"
                                            >
                                                {cartValue.length ? "CHECKOUT" : "CART IS EMPTY"}
                                            </Typography>
                                            <ArrowRightAltIcon sx={{ color: "white.main" }} />
                                        </Stack>
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                )}
            </Paper>
        </Box>
    )
}

export default Cart