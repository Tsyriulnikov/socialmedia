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

export const Users: FC = () => {
    const users = useAppSelector(state => state.usersPage.users)

    return (
        <Card>
            <PerfectScrollbar>
                <Box sx={{ minWidth: 1050 }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell padding="checkbox">
                                    {/*<Checkbox*/}
                                    {/*    checked={selectedCustomerIds.length === customers.length}*/}
                                    {/*    color="primary"*/}
                                    {/*    indeterminate={*/}
                                    {/*        selectedCustomerIds.length > 0*/}
                                    {/*        && selectedCustomerIds.length < customers.length*/}
                                    {/*    }*/}
                                    {/*    onChange={handleSelectAll}*/}
                                    {/*/>*/}
                                </TableCell>
                                <TableCell>
                                    Name
                                </TableCell>
                                <TableCell>
                                    Email
                                </TableCell>
                                <TableCell>
                                    Location
                                </TableCell>
                                <TableCell>
                                    Phone
                                </TableCell>
                                <TableCell>
                                    Registration date
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
                                    <TableCell padding="checkbox">
                                        {/*<Checkbox*/}
                                        {/*    checked={selectedCustomerIds.indexOf(customer.id) !== -1}*/}
                                        {/*    onChange={(event) => handleSelectOne(event, customer.id)}*/}
                                        {/*    value="true"*/}
                                        {/*/>*/}
                                    </TableCell>
                                    <TableCell>
                                        <Box
                                            sx={{
                                                alignItems: 'center',
                                                display: 'flex'
                                            }}
                                        >
                                            {/*<Avatar*/}
                                            {/*    src={customer.avatarUrl}*/}
                                            {/*    sx={{ mr: 2 }}*/}
                                            {/*>*/}
                                            {/*    {getInitials(customer.name)}*/}
                                            {/*</Avatar>*/}
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
            </PerfectScrollbar>
            {/*<TablePagination*/}
            {/*    component="div"*/}
            {/*    count={customers.length}*/}
            {/*    onPageChange={handlePageChange}*/}
            {/*    onRowsPerPageChange={handleLimitChange}*/}
            {/*    page={page}*/}
            {/*    rowsPerPage={limit}*/}
            {/*    rowsPerPageOptions={[5, 10, 25]}*/}
            {/*/>*/}
        </Card>
    );
}
