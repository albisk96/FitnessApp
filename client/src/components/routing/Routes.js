import React from 'react';
import { Switch } from 'react-router-dom';
import UserPage from '../../pages/user/user.component';
import CoachPage from '../../pages/coach/coach.component';
import ProtectedRoutes from './ProtectedRoutes';
import AdminPage from '../../pages/admin/admin.component.';
import Workout from '../../pages/user/workout/workouts.page';
import AddWorkout from '../workouts/add-workout.component';
import CreateProfile from '../../pages/profile/profile.page';

const Routes = () => {

    const routes = [
        { path: "/admin", component: AdminPage, exact: true, role: "admin"},
        { path: "/coach", component: CoachPage, exact: true, role: "coach"},
        { path: "/user", component: UserPage, exact: true, role: "user"},
        { path: "/workouts", component: Workout, exact: true, role: "user"},
        { path: "/workouts", component: Workout, exact: true, role: "coach"},
        { path: "/workouts/create", component: AddWorkout, exact: true, role: "coach"},
        { path: "/profile/create", component: CreateProfile, exact: true, role: "coach"},
      ]

  return (
    <div>
      <Switch>
        <ProtectedRoutes routes={routes} />
      </Switch>
    </div>
  );
};

export default Routes;