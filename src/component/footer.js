import { Typography, Box, Button, TextField, Grid } from "@mui/material";
import { grey } from "@mui/material/colors";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useState, useEffect } from "react";
const Footer = () => {
    const customer = ["My Account", "Shop", "Wishlist", "Contacts", "Term and Condition"];
    const company = ["About us", "Delivery", "Payment", "Contacts us"];
    const shop = ["For Him", "For Her", "For Kid", "Smart Watches", "Casio"];

  
    return (
        <Box>
            <Grid container gap={{xs: 2, sm: 3, md: 4}}  justifyContent={"space-between"} sx={{ backgroundColor: "#F5F5F5",    p: {xs: "2em 1em", sm: "3em 1em", md: "4em 1em"}, borderBottom: "1px solid grey" }}>
                <Grid item xs={12} sm={12} md={3.7}>
                    <Typography>BE THE FIRST TO KNOW</Typography>
                    <Typography color={"grey.main"}>Get all the latest information on Events, Sales and Offers.</Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={3.7} display={"flex"} flexGrow={1}>
                    <TextField sx={{ backgroundColor: "#fff", flexGrow: 1,  }} label={"YOUR EMAIL"} />
                    <Button
                        variant="outlined"
                        sx={{
                            borderRadius: "0",
                            width: {md: "30%", sm: "35%", xs: "40%"},
                            height: "4em",
                            borderColor: grey[500],
                            color: "#eee",
                            backgroundColor: "secondary.main",
                            "&:hover": {
                                color: "secondary.main",
                                background: "transparent",
                                borderColor: grey[500],
                            },
                        }}
                    >
                        SUBSCRIBE
                    </Button>
                </Grid>
                <Grid item xs={12} sm={12} md={3.7} textAlign={{md:"right",sm:"left"}}>
                    <Button
                        variant="outlined"
                        sx={{
                            minWidth: "40px",
                            borderRadius: "0",
                            mr: "1em",
                            borderColor: grey[500],
                            color: "secondary.main",
                            backgroundColor: "transparent",
                            padding: "0.9rem",
                            "&:hover": {
                                color: "#eee",
                                borderColor: `${grey[500]} !important`,
                                backgroundColor: "secondary.main",
                            },
                        }}
                    >
                        <FacebookIcon />
                    </Button>
                    <Button
                        variant="outlined"
                        sx={{
                            minWidth: "40px",
                            borderRadius: "0",
                            mr: "1em",
                            borderColor: grey[500],
                            color: "secondary.main",
                            backgroundColor: "transparent",
                            padding: "0.9rem",
                            "&:hover": {
                                color: "#eee",
                                backgroundColor: "grey.main",
                                borderColor: `${grey[500]} !important`,
                            },
                        }}
                    >
                        <InstagramIcon />
                    </Button>
                    <Button
                        variant="outlined"
                        sx={{
                            minWidth: "40px",
                            borderRadius: "0",
                            borderColor: grey[500],
                            color: "secondary.main",
                            backgroundColor: "transparent",
                            padding: "0.9rem",
                            "&:hover": {
                                color: "#eee",
                                borderColor: `${grey[500]} !important`,
                                backgroundColor: "secondary.main",
                            },
                        }}
                    >
                        <TwitterIcon />
                    </Button>
                </Grid>
            </Grid>

            <Grid
                container
                px={{xs: 2, sm: 3, md: 4}}
                borderBottom={1}
                borderTop={1}
                borderColor={grey[500]}
                py={3}
            >
                <Grid
                    item
                    md={3}
                    sm={6}
                    xs={12}
                    container
                    justifyContent={{
                        md: "center",
                        xs: "start",
                    }}
                    pl={{md: 0, sm: 2, xs: 0}}
                    display={"flex"}
                    flexDirection={"column"}
                >
                    <Typography fontWeight={600}>CONTACT INFORMATION</Typography>
                    <Typography color={"primary.main"} mt={1}>Address:</Typography>
                    <Typography color={"grey.main"}>Sukhrali, M.G. Road </Typography>
                    <Typography color={"grey.main"}>Gurgaon - 122001</Typography>
                    <Typography color={"primary.main"} mt={1}>Phone:</Typography>
                    <Typography color={"grey.main"} variant="body2" fontWeight={600}>+91 9793681026</Typography>
                    <Typography color={"primary.main"} mt={1}>Email:</Typography>
                    <Typography color={"grey.main"} variant="body2" fontWeight={600}>lorem@lorem.com</Typography>

                </Grid>
                <Grid
                    item
                    md={3}
                    sm={6}
                    xs={12}
                    container
                    justifyContent={{
                        md: "center",
                        xs: "start",
                    }}
                    mt={{xs: 2, sm: 4, md: 4}}
                    display={"flex"}
                    flexDirection={"column"}
                >
                    <Typography fontWeight={600}>CUSTOM CARE</Typography>
                    {customer.map((db, idx) => (
                        <Typography key={idx} color={"grey.main"} variant="body2" mt={2} fontWeight={600}>{db}</Typography>
                    ))}
                </Grid>

                <Grid
                    item
                    md={3}
                    sm={6}
                    xs={12}
                    container
                    justifyContent={{
                        md: "center",
                        xs: "start",
                    }}
                    mt={{xs: 2, sm: 4, md: 4}}
                    pl={{md: 0, sm: 2, xs: 0}}
                    display={"flex"}
                    flexDirection={"column"}
                >
                    <Typography fontWeight={600}>COMPANY</Typography>
                    {company.map((db, idx) => (
                        <Typography key={idx} color={"grey.main"} variant="body2" mt={2} fontWeight={600}>{db}</Typography>
                    ))}
                </Grid>

                <Grid
                    item
                    md={3}
                    sm={6}
                    xs={12}
                    container
                    mt={{xs: 2, sm: 4, md: 4}}
                    justifyContent={{
                        md: "center",
                        xs: "start",
                    }}
                    display={"flex"}
                    flexDirection={"column"}
                >
                    <Typography fontWeight={600}>SHOP</Typography>
                    {shop.map((db, idx) => (

                        <Typography key={idx} color={"grey.main"} variant="body2" mt={2} fontWeight={600}>{db}</Typography>
                    ))}
                </Grid>

            </Grid>

            <Box sx={{ backgroundColor: "#F5F5F5", textAlign: "center", py: "1.5em" }}>
                <Typography color={"grey.main"}>2023©All Right Reserved</Typography>
            </Box>
        </Box>
    )
}

export default Footer