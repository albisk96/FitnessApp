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
import Plan from '../../pages/user/plan.page';
import Exercises from '../../components/exercises/exercises-list.component';
import Confirmation from '../../pages/user/confirmation.page';
import Landing from '../../components/layout/landing.component';

const Routes = () => {

    const routes = [
        { path: "/admin", component: AdminPage, exact: true, role: "admin"},
        { path: "/user", component: UserPage, exact: true, role: "user"},
        { path: "/user/workouts", component: AthleteWorkout, exact: true, role: "user"},
        { path: "/coach/workouts", component: CoachWorkout, exact: true, role: "coach"},
        { path: "/workouts/create", component: AddWorkout, exact: true, role: "coach"},
        { path: "/coach", component: MyProfile, exact: true, role: "coach"},
        { path: "/coaches", component: CoachPage, exact: true, role: "user"},
        { path: "/coaches", component: CoachPage, exact: true, role: "coach"},
        { path: "/coach/user/:id", component: CoachProfile, exact: true, role:"coach"},
        { path: "/coach/user/:id", component: CoachProfile, exact: true, role:"user"},
        { path: "/plan", component: Plan, exact: true, role:"user"},
        { path: "/exercises", component: Exercises, exact: true, role:"user"},
        { path: "/confirmation/:id", component: Confirmation, exact: true},
        { path: "/", component: Landing, exact: true},
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