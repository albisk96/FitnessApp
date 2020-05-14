import React from 'react';
import { Switch } from 'react-router-dom';
import UserPage from '../../pages/user/user.page';
import CoachPage from '../../components/coaches/coaches-list.component';
import ProtectedRoutes from './ProtectedRoutes';
import AdminPage from '../../pages/admin/admin.component.';
import AthleteWorkout from '../../pages/user/workout/workouts.page';
import CoachWorkout from '../../pages/profile/workout/workouts.page';
import AddWorkout from '../workouts/add-workout.component';
import MyProfile from '../../pages/profile/profile.page';
import CoachProfile from '../../components/coaches/coach-profile.component';
import Dashboard from '../../pages/user/user.page';
import Plan from '../../pages/user/plan.page';
import Exercises from '../../components/exercises/exercises-list.component';

const Routes = () => {

    const routes = [
        { path: "/admin", component: AdminPage, exact: true, role: "admin"},
        { path: "/user", component: UserPage, exact: true, role: "user"},
        { path: "/user/workouts", component: AthleteWorkout, exact: true, role: "user"},
        { path: "/coach/workouts", component: CoachWorkout, exact: true, role: "coach"},
        { path: "/workouts/create", component: AddWorkout, exact: true, role: "coach"},
        { path: "/profile", component: MyProfile, exact: true, role: "coach"},
        { path: "/coach", component: CoachPage, exact: true, role: "user"},
        { path: "/coach", component: CoachPage, exact: true, role: "coach"},
        { path: "/coach/user/:id", component: CoachProfile, exact: true, role:"coach"},
        { path: "/coach/user/:id", component: CoachProfile, exact: true, role:"user"},
        { path: "/dashboard", component: Dashboard, exact: true, role:"user"},
        { path: "/plan", component: Plan, exact: true, role:"user"},
        { path: "/exercises", component: Exercises, exact: true, role:"user"}
      ]
      console.log('hello from protected routes')
  return (
    <div>
      <Switch>
        <ProtectedRoutes routes={routes} />
      </Switch>
    </div>
  );
};

export default Routes;