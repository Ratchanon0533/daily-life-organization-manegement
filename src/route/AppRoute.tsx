import { Routes, Route } from 'react-router-dom'
import Login from '../pages/Login'
import DashboardUniversity from '../pages/dashboarduniversity'
import DashboardOrganizers from '../pages/dashboardorganizer'
import AddEvent from '../pages/Addevent'


const AppRoute = () => {
    return (
        // 💡 ต้องครอบด้วย <Routes> เสมอใน React Router v6+
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard-university" element={<DashboardUniversity />} />
            <Route path="/dashboard-organizers" element={<DashboardOrganizers />} />
            <Route path="/add-event" element={<AddEvent />} />
        </Routes>
    )
}
export default AppRoute