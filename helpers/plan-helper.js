
function GeneratePlan(athlete, exercise, daysPerWeek, level, goal){
    
    let sets = null;
    let reps = null;
    let rest = null;
    let gender = athlete.gender;
    const isolationExercises = {
        chest: exercise.filter(x => x.muscles === 'chest' && x.mechanicsType === 'isolation'),
        back: exercise.filter(x => (x.muscles === 'middle back' || x.muscles === 'lower back' || x.muscles === 'lats') && x.mechanicsType === 'isolation'),
        shoulders: exercise.filter(x => x.muscles === 'shoulders' && x.mechanicsType === 'isolation'),
        legs: exercise.filter(x => (x.muscles === 'calves' || x.muscles === 'legs') && x.mechanicsType === 'isolation') ,
        triceps: exercise.filter(x => x.muscles === 'triceps' && x.mechanicsType === 'isolation'),
        biceps: exercise.filter(x => x.muscles === 'biceps' && x.mechanicsType === 'isolation'),
        legsForWomen: exercise.filter(x => (x.muscles === 'calves' || x.muscles === 'legs' || x.muscles === 'glutes') && x.mechanicsType === 'isolation'),
    }
    const compoundExercises = {
        chest: exercise.filter(x => x.muscles === 'chest' && x.mechanicsType === 'compound'),
        back: exercise.filter(x => (x.muscles === 'middle back' || x.muscles === 'lower back' || x.muscles === 'lats') && x.mechanicsType === 'compound'),
        shoulders: exercise.filter(x => x.muscles === 'shoulders' && x.mechanicsType === 'compound'),
        legs: exercise.filter(x => (x.muscles === 'calves' || x.muscles === 'legs') && x.mechanicsType === 'compound') ,
        triceps: exercise.filter(x => x.muscles === 'triceps' && x.mechanicsType === 'compound'),
        biceps: exercise.filter(x => x.muscles === 'biceps' && x.mechanicsType === 'compound'),
    }
    const isolationExercisesForBeginner = {
        chest: exercise.filter(x => x.muscles === 'chest' && x.mechanicsType === 'isolation'  && x.level === 'beginner'),
        back: exercise.filter(x => (x.muscles === 'middle back' || x.muscles === 'lower back' || x.muscles === 'lats') && x.mechanicsType === 'isolation' && x.level === 'beginner'),
        shoulders: exercise.filter(x => x.muscles === 'shoulders' && x.mechanicsType === 'isolation' && x.level === 'beginner'),
        legs: exercise.filter(x => (x.muscles === 'calves' || x.muscles === 'legs') && x.mechanicsType === 'isolation' && x.level === 'beginner') ,
        triceps: exercise.filter(x => x.muscles === 'triceps' && x.mechanicsType === 'isolation'  && x.level === 'beginner'),
        biceps: exercise.filter(x => x.muscles === 'biceps' && x.mechanicsType === 'isolation' && x.level === 'beginner'),
        legsForWomen: exercise.filter(x => (x.muscles === 'calves' || x.muscles === 'legs' || x.muscles === 'glutes') && x.mechanicsType === 'isolation'),
    }
    const compoundExercisesForBeginner = {
        chest: exercise.filter(x => x.muscles === 'chest' && x.mechanicsType === 'compound' && x.level === 'beginner'),
        back: exercise.filter(x => (x.muscles === 'middle back' || x.muscles === 'lower back' || x.muscles === 'lats') && x.mechanicsType === 'compound' && x.level === 'beginner'),
        shoulders: exercise.filter(x => x.muscles === 'shoulders' && x.mechanicsType === 'compound' && x.level === 'beginner'),
        legs: exercise.filter(x => (x.muscles === 'calves' || x.muscles === 'legs') && x.mechanicsType === 'compound' && x.level === 'beginner') ,
        triceps: exercise.filter(x => x.muscles === 'triceps' && x.mechanicsType === 'compound'  && x.level === 'beginner'),
        biceps: exercise.filter(x => x.muscles === 'biceps' && x.mechanicsType === 'compound' && x.level === 'beginner'),
    }

    const stretchingExercises = exercise.filter(x => x.exerciseType === 'stretching');

    const cardioExercises = exercise.filter(x => x.exerciseType === 'cardio');
    const absExercises = exercise.filter(x => x.muscles === 'abs')
    let musclesPerDay = null;
    let muscleNames = ['chest', 'back', 'shoulders', 'legs', 'triceps', 'biceps']

    HowManyMusclesPerDay();

    if(daysPerWeek == 2 || daysPerWeek == 3 || daysPerWeek == 6){ // How many days per week athlete can workout
        let workout = []
        for(let i = 1; i <= daysPerWeek; i++){ 
            let dailyExercises = [];
            GetCardioExercise(i, dailyExercises)
            if(i % 2 === 0){
                GetAbsExercise(absExercises, dailyExercises)
            }        
                for(let k = 1; k <= musclesPerDay; k++){ // how many muscles per day
                    WorkoutForOneDayGeneration(dailyExercises, k, daysPerWeek)
                }
            workout.push({ day: i, exercises: dailyExercises })
        }
        return workout;
    } else if(daysPerWeek == 4){ // How many days per week athlete can workout
        let workout = []
        for(let i = 1; i <= daysPerWeek; i++){ // Push an exercises to every day

            let dailyExercises = []; // Array of daily exercises
            GetCardioExercise(i, dailyExercises) 
            
            if(i % 2 === 0){
                for(let k = 1; k <= 2; k++){ // How many muscles per day 
                    WorkoutForOneDayGeneration(dailyExercises, k, 3) // Two muscles per day every two days 1 2 1 2
                }
            } else {
                GetAbsExercise(absExercises, dailyExercises) // abs
                for(let k = 1; k <= 1; k++){ // How many muscles per day 
                    WorkoutForOneDayGeneration(dailyExercises, k, 6) // One muscle per day every two days 1 2 1 2
                }
            }
                

            workout.push({ day: i, exercises: dailyExercises })
        }
        
        return workout;
    } else if(daysPerWeek == 5){ // How many days per week athlete can workout
        let workout = []
        for(let i = 1; i <= daysPerWeek; i++){ // Push an exercises to every day

            let dailyExercises = []; // Array of daily exercises
            GetCardioExercise(i, dailyExercises) 
            if(i === 1){
                for(let k = 1; k <= 2; k++){ // How many muscles per day 
                    WorkoutForOneDayGeneration(dailyExercises, k, 3) // in first workout day of the week - 2 muscles with 3 exercises per muscle
                }
            } else {
                GetAbsExercise(absExercises, dailyExercises) // abs
                for(let k = 1; k <= 1; k++){ // How many muscles per day 
                    WorkoutForOneDayGeneration(dailyExercises, k, 6) // other days one muscle per week with 6 exercises per muscle
                }
            }

            workout.push({ day: i, exercises: dailyExercises })
        }
        
        return workout;
    }

    function WorkoutForOneDayGeneration(dailyExercises, k, daysPerWeek){
        const tempExercise = muscleNames[Math.floor(Math.random() * muscleNames.length)] // Random muscle name
        muscleNames = muscleNames.filter(x => x !== tempExercise); // Remove that random value from array, to prevent duplication
         if(k == 1) {
             GetWarmUpExercise(stretchingExercises, dailyExercises);
         }
         HowManyExercisesPerMucle(tempExercise, dailyExercises, daysPerWeek)
    }

    function HowManyMusclesPerDay(){
        if(daysPerWeek == 2){
            musclesPerDay = muscleNames.length / 2;
        } else if(daysPerWeek == 3){
            musclesPerDay = muscleNames.length / 3;
        } else if(daysPerWeek == 6){
            musclesPerDay = muscleNames.length / 6;
        }
    }

    function HowManyExercisesPerMucle(tempExercise, dailyExercises, daysPerWeek){
        let isolationNumber = null;
        let compoundNumber = null;
            if(daysPerWeek == 6){ // it means 1 muscle per day
                if(gender === 'male'){
                    if(level === 'beginner'){
                        if(goal === 'lose fat'){
                            isolationNumber = 5;
                            compoundNumber = 1;
                        } else if(goal === 'build muscle'){
                            isolationNumber = 2;
                            compoundNumber = 4;
                        } else if(goal === 'get stronger'){
                            isolationNumber = 3;
                            compoundNumber = 3;
                        }
                    } else if(level === 'intermediate'){
                        if(goal === 'lose fat'){
                            isolationNumber = 5;
                            compoundNumber = 1;
                        } else if(goal === 'build muscle'){
                            isolationNumber = 2;
                            compoundNumber = 4;
                        } else if(goal === 'get stronger'){
                            isolationNumber = 3;
                            compoundNumber = 3;
                        }
                    }
                } else if (gender === 'female'){
                    if(level === 'beginner'){
                        if(goal === 'lose fat'){
                            isolationNumber = 6;
                            compoundNumber = 0;
                        } else if(goal === 'build muscle'){
                            isolationNumber = 4;
                            compoundNumber = 2;
                        } else if(goal === 'get stronger'){
                            isolationNumber = 1;
                            compoundNumber = 5;
                        }
                    } else if(level === 'intermediate'){
                        if(goal === 'lose fat'){
                            isolationNumber = 5;
                            compoundNumber = 1;
                        } else if(goal === 'build muscle'){
                            isolationNumber = 4;
                            compoundNumber = 2;
                        } else if(goal === 'get stronger'){
                            isolationNumber = 5;
                            compoundNumber = 1;
                        }
                    }
                }
             } else if (daysPerWeek == 2){ // 3 muscles per day
                if(gender === 'male'){
                    if(level === 'beginner'){
                        if(goal === 'lose fat'){
                            isolationNumber = 2;
                            compoundNumber = 0;
                        } else if(goal === 'build muscle'){
                            isolationNumber = 1;
                            compoundNumber = 1;
                        } else if(goal === 'get stronger'){
                            isolationNumber = 1;
                            compoundNumber = 1;
                        }
                    } else if(level === 'intermediate'){
                        if(goal === 'lose fat'){
                            isolationNumber = 2;
                            compoundNumber = 1;
                        } else if(goal === 'build muscle'){
                            isolationNumber = 1;
                            compoundNumber = 3;
                        } else if(goal === 'get stronger'){
                            isolationNumber = 2;
                            compoundNumber = 2;
                        }
                    }
                } else if (gender === 'female'){
                    if(level === 'beginner'){
                        if(goal === 'lose fat'){
                            isolationNumber = 2;
                            compoundNumber = 0;
                        } else if(goal === 'build muscle'){
                            isolationNumber = 1;
                            compoundNumber = 1;
                        } else if(goal === 'get stronger'){
                            isolationNumber = 1;
                            compoundNumber = 1;
                        }
                    } else if(level === 'intermediate'){
                        if(goal === 'lose fat'){
                            isolationNumber = 3;
                            compoundNumber = 0;
                        } else if(goal === 'build muscle'){
                            isolationNumber = 2;
                            compoundNumber = 2;
                        } else if(goal === 'get stronger'){
                            isolationNumber = 2;
                            compoundNumber = 1;
                        }
                    }
                }
                } else if (daysPerWeek == 3){ // 2 muscles per day
                    if(gender === 'male'){
                        if(level === 'beginner'){
                            if(goal === 'lose fat'){
                                isolationNumber = 3;
                                compoundNumber = 0;
                            } else if(goal === 'build muscle'){
                                isolationNumber = 1;
                                compoundNumber = 2;
                            } else if(goal === 'get stronger'){
                                isolationNumber = 2;
                                compoundNumber = 1;
                            }
                        } else if(level === 'intermediate'){
                            if(goal === 'lose fat'){
                                isolationNumber = 4;
                                compoundNumber = 1;
                            } else if(goal === 'build muscle'){
                                isolationNumber = 2;
                                compoundNumber = 3;
                            } else if(goal === 'get stronger'){
                                isolationNumber = 3;
                                compoundNumber = 2;
                            }
                        }
                    } else if (gender === 'female'){
                        if(level === 'beginner'){
                            if(goal === 'lose fat'){
                                isolationNumber = 3;
                                compoundNumber = 0;
                            } else if(goal === 'build muscle'){
                                isolationNumber = 1;
                                compoundNumber = 2;
                            } else if(goal === 'get stronger'){
                                isolationNumber = 2;
                                compoundNumber = 1;
                            }
                        } else if(level === 'intermediate'){
                            if(goal === 'lose fat'){
                                isolationNumber = 4;
                                compoundNumber = 0;
                            } else if(goal === 'build muscle'){
                                isolationNumber = 2;
                                compoundNumber = 3;
                            } else if(goal === 'get stronger'){
                                isolationNumber = 3;
                                compoundNumber = 2;
                            }
                        }
                    }
                }
        
        for(let j = 1; j <= isolationNumber; j++){
            if(level === 'beginner'){
                GetIsolationExercise(tempExercise, isolationExercisesForBeginner, dailyExercises);
            } else {
                GetIsolationExercise(tempExercise, isolationExercises, dailyExercises);
            }
            
        } 
        for(let l = 1; l <= compoundNumber; l++){
            if(level === 'beginner'){
                GetCompoundExercise(tempExercise, compoundExercisesForBeginner, dailyExercises);
            } else {
                GetCompoundExercise(tempExercise, compoundExercises, dailyExercises);
            }
        }
    }


    function GetWarmUpExercise(stretchingExercises, dailyExercises){
        for(let i = 1; i <= 3; i++){
        let stretching = stretchingExercises[Math.floor(Math.random() * stretchingExercises.length)]
        dailyExercises.push({ exercise: stretching })
        }
    }

    function GetAbsExercise(absExercises, dailyExercises){
        for(let i = 1; i <= 2; i++){
            let abs = absExercises[Math.floor(Math.random() * absExercises.length)]
            dailyExercises.push({ exercise: abs })
        }
    }

    function GetCardioExercise(thisDay, dailyExercises){
        let min = null;
        let cardio = null;
        if(level === 'beginner'){
            if(goal === 'lose fat'){
                min = 35;
                cardio = cardioExercises[Math.floor(Math.random() * cardioExercises.length)]
                dailyExercises.push({ min, exercise: cardio })
            } else if(goal === 'build muscle'){
                min = 15;
                BuildMuscleCardion(thisDay)
            } else if(goal === 'get stronger'){
                min = 20;
                GetStrongerCardio(thisDay)
            }
        } else if(level === 'intermediate'){
            if(goal === 'lose fat'){
                min = 45;
                cardio = cardioExercises[Math.floor(Math.random() * cardioExercises.length)]
                dailyExercises.push({ min, exercise: cardio })
            } else if(goal === 'build muscle'){
                min = 20;
                BuildMuscleCardion(thisDay)
            } else if(goal === 'get stronger'){
                min = 30;
                GetStrongerCardio(thisDay)
            }
        }

        function BuildMuscleCardion(day){ // Push cardio exercises by goal
            if(day % 3 > 1){
                let cardio = cardioExercises[Math.floor(Math.random() * cardioExercises.length)]
                dailyExercises.push({ min, exercise: cardio })
            }
        }

        function GetStrongerCardio(day){
            if(day % 2){
                let cardio = cardioExercises[Math.floor(Math.random() * cardioExercises.length)]
                dailyExercises.push({ min, exercise: cardio })
            }
        }
        
    }
    
    function GetIsolationExercise(tempExercise, isolationExercises, dailyExercises){
        let isolationExercise = null;
        if(tempExercise === 'legs' && gender === 'female'){
            isolationExercise = isolationExercises['legsForWomen'][Math.floor(Math.random() * isolationExercises['legsForWomen'].length)]
        } else {
            isolationExercise = isolationExercises[tempExercise][Math.floor(Math.random() * isolationExercises[tempExercise].length)]
        }
        if(gender === 'male'){
            if(level === 'beginner'){
                if(goal === 'lose fat'){
                    sets = 3;
                    reps = 12;
                    rest = 45;
                } else if(goal === 'build muscle'){
                    sets = 3;
                    reps = 8;
                    rest = 120;
                } else if(goal === 'get stronger'){
                    sets = 3;
                    reps = 10;
                    rest = 90;
                }
            } else if(level === 'intermediate'){
                if(goal === 'lose fat'){
                    sets = 3;
                    reps = 15;
                    rest = 45;
                } else if(goal === 'build muscle'){
                    sets = 4;
                    reps = 8;
                    rest = 120;
                } else if(goal === 'get stronger'){
                    sets = 3;
                    reps = 10;
                    rest = 90;
                }
            }
        } else if(gender === 'female'){
            if(level === 'beginner'){
                if(goal === 'lose fat'){
                    sets = 3;
                    reps = 12;
                    rest = 45;
                } else if(goal === 'build muscle'){
                    sets = 3;
                    reps = 8;
                    rest = 120;
                } else if(goal === 'get stronger'){
                    sets = 3;
                    reps = 10;
                    rest = 90;
                }
            } else if(level === 'intermediate'){
                if(goal === 'lose fat'){
                    sets = 3;
                    reps = 15;
                    rest = 45;
                } else if(goal === 'build muscle'){
                    sets = 3;
                    reps = 10;
                    rest = 120;
                } else if(goal === 'get stronger'){
                    sets = 3;
                    reps = 12;
                    rest = 90;
                }
            }
        }

        return dailyExercises.push({ sets, reps, rest, exercise: isolationExercise })
    }
    
    function GetCompoundExercise(tempExercise, compoundExercises, dailyExercises){
        let compound = null;
        if(tempExercise === 'biceps'){
            compound = isolationExercises['biceps'][Math.floor(Math.random() * isolationExercises['biceps'].length)]
        } else {
            compound = compoundExercises[tempExercise][Math.floor(Math.random() * compoundExercises[tempExercise].length)]
        }
        if(gender === 'male'){
            if(level === 'beginner'){
                if(goal === 'lose fat'){
                    sets = 3;
                    reps = 10;
                    rest = 60;
                } else if(goal === 'build muscle'){
                    sets = 4;
                    reps = 6;
                    rest = 120;
                } else if(goal === 'get stronger'){
                    sets = 3;
                    reps = 8;
                    rest = 90;
                }
            } else if(level === 'intermediate'){
                if(goal === 'lose fat'){
                    sets = 3;
                    reps = 10;
                    rest = 45;
                } else if(goal === 'build muscle'){
                    sets = 5;
                    reps = 5;
                    rest = 120;
                } else if(goal === 'get stronger'){
                    sets = 4;
                    reps = 6;
                    rest = 90;
                }
            }
        } else if(gender === 'female'){
            if(level === 'beginner'){
                if(goal === 'lose fat'){
                    sets = 3;
                    reps = 12;
                    rest = 45;
                } else if(goal === 'build muscle'){
                    sets = 4;
                    reps = 8;
                    rest = 120;
                } else if(goal === 'get stronger'){
                    sets = 3;
                    reps = 10;
                    rest = 90;
                }
            } else if(level === 'intermediate'){
                if(goal === 'lose fat'){
                    sets = 3;
                    reps = 10;
                    rest = 45;
                } else if(goal === 'build muscle'){
                    sets = 4;
                    reps = 8;
                    rest = 120;
                } else if(goal === 'get stronger'){
                    sets = 3;
                    reps = 8;
                    rest = 90;
                }
            }
        }
        return dailyExercises.push({ sets, reps, rest, exercise: compound })
    }
}




module.exports = {GeneratePlan};