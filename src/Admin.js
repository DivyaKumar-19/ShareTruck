
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Grid, Card, CardContent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import PrimarySearchAppBar from './nav';


const data = [
  { name: 'Jan', downloads: 4000 },
  { name: 'Feb', downloads: 3000 },
  { name: 'Mar', downloads: 2000 },
  { name: 'Apr', downloads: 2780 },
  { name: 'May', downloads: 1890 },
  { name: 'Jun', downloads: 2390 },
  { name: 'Jul', downloads: 3490 },
];

const lineData = [
  { name: 'Jan', users: 4000 },
  { name: 'Feb', users: 3000 },
  { name: 'Mar', users: 2000 },
  { name: 'Apr', users: 2780 },
  { name: 'May', users: 1890 },
  { name: 'Jun', users: 2390 },
  { name: 'Jul', users: 3490 },
];

const pieData = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const recentUsers = [
  { name: 'Dip Hasan', status: 'Active', signup: '15th Aug, 2022', spent: '$25,147' },
];

const Admin = () => {
  return (
    <div>
        <PrimarySearchAppBar/>
    <Box sx={{ display: 'flex', height: '100vh' }}>
      
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        <Typography variant="h4" gutterBottom>
          Admin Dashboard
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6">Active User</Typography>
                <Typography variant="h4">5,049</Typography>
                <Typography variant="subtitle2" color="white">25% than last week</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6">Total Bookings</Typography>
                <Typography variant="h4">10K</Typography>
                <Typography variant="subtitle2" color="textSecondary">-13% than last week</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6">Total Subscription</Typography>
                <Typography variant="h4">15,672</Typography>
                <Typography variant="subtitle2" color="textSecondary">25% than last week</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6">Total Earnings</Typography>
                <Typography variant="h4">$88,364</Typography>
                <Typography variant="subtitle2" color="textSecondary">-13% than last week</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={8}>
            <Card>
              <CardContent>
                <Typography variant="h6">Booking Status</Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="downloads" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Analytics</Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />

                      ))}
                    </Pie>
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={8}>
            <Card>
              <CardContent>
                <Typography variant="h6">User Growth</Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={lineData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="users" stroke="#8884d8" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Grid>
          {/* <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6">Recent Users</Typography>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Customer</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Sign Up</TableCell>
                        <TableCell>Total Spent</TableCell>
                        <TableCell>Action</TableCell>
                      </TableRow>
                    </TableHead>
                   
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
          </Grid> */}
        </Grid>
        <Outlet />
      </Box>
    </Box>
    </div>
  );
};

export default Admin;


// import React, { useEffect, useState } from 'react';
// import { Box, Grid, Card, CardContent, Typography } from '@mui/material';
// import PrimarySearchAppBar from './nav';
// import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

// const data = [
//   { name: 'Jan', downloads: 4000 },
//   { name: 'Feb', downloads: 3000 },
//   { name: 'Mar', downloads: 2000 },
//   { name: 'Apr', downloads: 2780 },
//   { name: 'May', downloads: 1890 },
//   { name: 'Jun', downloads: 2390 },
//   { name: 'Jul', downloads: 3490 },
// ];

// const lineData = [
//   { name: 'Jan', users: 4000 },
//   { name: 'Feb', users: 3000 },
//   { name: 'Mar', users: 2000 },
//   { name: 'Apr', users: 2780 },
//   { name: 'May', users: 1890 },
//   { name: 'Jun', users: 2390 },
//   { name: 'Jul', users: 3490 },
// ];

// const pieData = [
//   { name: 'Group A', value: 400 },
//   { name: 'Group B', value: 300 },
//   { name: 'Group C', value: 300 },
//   { name: 'Group D', value: 200 },
// ];

// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// const Admin = () => {
//   const [userDetails, setUserDetails] = useState(null);

//   useEffect(() => {
//     const fetchUserDetails = async () => {
//       const email = 'admin@gmail.com'; // Replace with actual email from login
//       const response = await fetch(`http://localhost:8080/api/users/findByEmail?email=${email}`);
//       const data = await response.json();
//       setUserDetails(data);
//     };

//     fetchUserDetails();
//   }, []);

//   return (
//     <div>
//       <PrimarySearchAppBar />
//       <Box sx={{ display: 'flex', height: '100vh' }}>
//         <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
//           <Typography variant="h4" gutterBottom>
//             Admin Dashboard
//           </Typography>

//           <Grid container spacing={3}>
//             <Grid item xs={12} md={6}>
//               <Card>
//                 <CardContent>
//                   <Typography variant="h6">User Details</Typography>
//                   {userDetails ? (
//                     <div>
//                       <Typography>Name: {userDetails.name}</Typography>
//                       <Typography>Email: {userDetails.email}</Typography>
//                     </div>
//                   ) : (
//                     <Typography>Loading...</Typography>
//                   )}
//                 </CardContent>
//               </Card>
//             </Grid>

//             <Grid item xs={12} md={6}>
//               <Card>
//                 <CardContent>
//                   <Typography variant="h6">Active User</Typography>
//                   <Typography variant="h4">35,049</Typography>
//                   <Typography variant="subtitle2" color="textSecondary">25% than last week</Typography>
//                 </CardContent>
//               </Card>
//             </Grid>

//             <Grid item xs={12} md={6}>
//               <Card>
//                 <CardContent>
//                   <Typography variant="h6">Total Downloads</Typography>
//                   <Typography variant="h4">100K</Typography>
//                   <Typography variant="subtitle2" color="textSecondary">-13% than last week</Typography>
//                 </CardContent>
//               </Card>
//             </Grid>

//             <Grid item xs={12} md={6}>
//               <Card>
//                 <CardContent>
//                   <Typography variant="h6">Total Subscription</Typography>
//                   <Typography variant="h4">15,672</Typography>
//                   <Typography variant="subtitle2" color="textSecondary">25% than last week</Typography>
//                 </CardContent>
//               </Card>
//             </Grid>

//             <Grid item xs={12} md={6}>
//               <Card>
//                 <CardContent>
//                   <Typography variant="h6">Total Earnings</Typography>
//                   <Typography variant="h4">$88,364</Typography>
//                   <Typography variant="subtitle2" color="textSecondary">-13% than last week</Typography>
//                 </CardContent>
//               </Card>
//             </Grid>

//             <Grid item xs={12} md={8}>
//               <Card>
//                 <CardContent>
//                   <Typography variant="h6">Book Downloads</Typography>
//                   <ResponsiveContainer width="100%" height={300}>
//                     <BarChart data={data}>
//                       <CartesianGrid strokeDasharray="3 3" />
//                       <XAxis dataKey="name" />
//                       <YAxis />
//                       <Tooltip />
//                       <Bar dataKey="downloads" fill="#8884d8" />
//                     </BarChart>
//                   </ResponsiveContainer>
//                 </CardContent>
//               </Card>
//             </Grid>

//             <Grid item xs={12} md={4}>
//               <Card>
//                 <CardContent>
//                   <Typography variant="h6">Analytics</Typography>
//                   <ResponsiveContainer width="100%" height={300}>
//                     <PieChart>
//                       <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
//                         {pieData.map((entry, index) => (
//                           <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                         ))}
//                       </Pie>
//                       <Legend />
//                     </PieChart>
//                   </ResponsiveContainer>
//                 </CardContent>
//               </Card>
//             </Grid>

//             <Grid item xs={12} md={8}>
//               <Card>
//                 <CardContent>
//                   <Typography variant="h6">User Growth</Typography>
//                   <ResponsiveContainer width="100%" height={300}>
//                     <LineChart data={lineData}>
//                       <CartesianGrid strokeDasharray="3 3" />
//                       <XAxis dataKey="name" />
//                       <YAxis />
//                       <Tooltip />
//                       <Line type="monotone" dataKey="users" stroke="#8884d8" />
//                     </LineChart>
//                   </ResponsiveContainer>
//                 </CardContent>
//               </Card>
//             </Grid>
//           </Grid>
//         </Box>
//       </Box>
//     </div>
//   );
// };

// export default Admin;
