import React, {FC} from "react";
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
    Avatar,
    Box,
    Card,
    Checkbox,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
    Typography
} from '@mui/material';
import {useAppSelector} from "../../store/hooks";
import {UserType} from "../../types/types";
import avatarProfile from "../../assets/images/Avatar-Profile.png"
export const Users: FC = () => {
    const users = useAppSelector(state => state.usersPage.users)
    const handleChangePage = (event: unknown, newPage: number) => {
        // setPage(newPage);
    };
    return (
        <Card>
            <PerfectScrollbar>
                <Box  sx={{
                    display: 'flex',
                    width: '100%',
                   alignItem:'flex-start',
                    justifyContent: 'start',
                    bgcolor: 'background.default',
                    color: 'text.primary',
                    borderRadius: 3,


                }}>
                <Box sx={{ minWidth: '100px' }}>

                    <Table>
                        <TableHead>
                            <TableRow>
                                 <TableCell>
                                    Name
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((customer:UserType) => (
                                <TableRow
                                    hover
                                    key={customer.id}
                                    // selected={selectedCustomerIds.indexOf(customer.id) !== -1}
                                >

                                    <TableCell>
                                        <Box
                                            sx={{
                                                alignItems: 'center',
                                                display: 'flex'
                                            }}
                                        >
                                            <Avatar
                                                src= {customer.photos.small ? customer.photos.small : avatarProfile }
                                                sx={{ mr: 2 }}
                                            />


                                            <Typography
                                                color="textPrimary"
                                                variant="body1"
                                            >
                                                {customer.name}
                                            </Typography>
                                        </Box>
                                    </TableCell>
                                    <TableCell>
                                        {customer.followed}
                                    </TableCell>
                                    {/*<TableCell>*/}
                                    {/*    {`${customer.address.city}, ${customer.address.state}, ${customer.address.country}`}*/}
                                    {/*</TableCell>*/}
                                    {/*<TableCell>*/}
                                    {/*    {customer.phone}*/}
                                    {/*</TableCell>*/}
                                    {/*<TableCell>*/}
                                    {/*    {format(customer.createdAt, 'dd/MM/yyyy')}*/}
                                    {/*</TableCell>*/}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Box>
                </Box>
            </PerfectScrollbar>
            {/*<TablePagination*/}
            {/*    component="div"*/}
            {/*    // count={customers.length}*/}
            {/*    count={10}*/}
            {/*    // onPageChange={handlePageChange}*/}
            {/*    onPageChange={handleChangePage}*/}
            {/*    // onRowsPerPageChange={handleLimitChange}*/}
            {/*    page={9}*/}
            {/*    rowsPerPage={10}*/}
            {/*    rowsPerPageOptions={[5, 10, 25]}*/}
            {/*/>*/}
        </Card>
    );
}
