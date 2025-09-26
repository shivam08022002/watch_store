import React from 'react'
import { Typography, Stack, Divider, Grid, Box } from "@mui/material";
const Delivery = () => {
    return (
        <Box>
            <Box sx={{ textAlign: "center", my: {xs: 4, sm: 6, md: 8} }}>
                <Typography variant='h4' fontWeight={600} >
                    DELIVERY AND RETURNS
                </Typography>
                <Typography color={"grey.main"} variant="h6" fontWeight={400} my={4}>
                    See below for information about the delivery & returns options in your country.
                </Typography>
            </Box>
            <Grid container sx={{ px: {xs: 2, sm: 3, md: 6}, mb: {xs: 2, sm: 3, md: 4}, justifyContent: "space-between" }}>
                <Grid item xs={12} sm={5.8} sx={{ borderTop: "1.2px solid grey", borderBottom: "1.2px solid grey" }}>
                    <Stack direction={"row"} mt={3} justifyContent={"space-between"}>
                        <Typography fontWeight={600} variant="h6">
                            STANDARD DELIVERY
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            color="primary.main"
                            fontWeight={700}
                        >
                            ₹20
                        </Typography>
                    </Stack>
                    <Typography color={"grey.main"}>
                        Delivered on or before Thursday, 25 Feb 2023
                    </Typography>
                    <Divider
                        sx={{
                            width: "15px",
                            height: "3px",
                            backgroundColor: "primary.main",
                            my: 2,
                        }}
                    />
                    <Stack direction={"row"} mb={3} alignItems={"center"} columnGap={0.5}>
                        <Typography
                            variant="subtitle2"
                            color="primary.main"
                            fontWeight={700}
                        >
                            NOTE:
                        </Typography>
                        <Typography variant="body2" color="grey.main" fontSize={13}>
                            Subject to placing your order before specific cut-off times.
                            Details available in checkout.
                        </Typography>
                    </Stack>
                </Grid>


                <Grid item xs={12} sm={5.8} sx={{ borderTop: "1.2px solid grey", borderBottom: "1.2px solid grey", mt: {xs: 3, sm: 0} }}>
                    <Stack direction={"row"} mt={3} justifyContent={"space-between"}>
                        <Typography fontWeight={600} variant="h6">
                            EXPRESS DELIVERY
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            color="primary.main"
                            fontWeight={700}
                        >
                            ₹50
                        </Typography>
                    </Stack>
                    <Typography color={"grey.main"}>
                        Delivered on or before Thursday, 20 Feb 2023
                    </Typography>
                    <Divider
                        sx={{
                            width: "15px",
                            height: "3px",
                            backgroundColor: "primary.main",
                            my: 2,
                        }}
                    />
                    <Stack direction={"row"} mb={3} alignItems={"center"} columnGap={0.5}>
                        <Typography
                            variant="subtitle2"
                            color="primary.main"
                            fontWeight={700}
                        >
                            NOTE:
                        </Typography>
                        <Typography variant="body2" color="grey.main" fontSize={13}>
                            Subject to placing your order before specific cut-off times.
                            Details available in checkout.
                        </Typography>
                    </Stack>
                </Grid>

            </Grid>
        </Box>
    )
}

export default Delivery